#!/bin/bash
set -e

echo "=== Starting iOS Build Process ==="
mkdir -p ios/App/build

# 1. Build ARM64 Release App
echo "--- Building iOS Release App (ARM64) ---"
BUILD_FAILED=false
xcodebuild build \
  -project ios/App/App.xcodeproj \
  -scheme App \
  -configuration Release \
  -destination "generic/platform=iOS" \
  -derivedDataPath ios/App/build/DerivedData \
  -skipPackagePluginValidation \
  -xcconfig ios/ci.xcconfig \
  2>&1 | tee ios/App/build/release_build.log || BUILD_FAILED=true

if [ "$BUILD_FAILED" = "true" ]; then
  echo "### Release Build Failed! Last 80 lines of output:"
  tail -n 80 ios/App/build/release_build.log
  exit 1
fi

echo "--- Locating Release App Binary ---"
APP_PATH=$(find ios/App/build/DerivedData/Build/Products/Release-iphoneos -name "*.app" -type d | head -n 1)
if [ -z "$APP_PATH" ]; then
  echo "Error: App.app was not found in Release-iphoneos"
  exit 1
fi
echo "Found app binary at: $APP_PATH"

echo "--- Packaging Unsigned IPA ---"
rm -rf ios/App/build/Payload
mkdir -p ios/App/build/Payload
cp -R "$APP_PATH" ios/App/build/Payload/
cd ios/App/build
zip -r -q DrSylviaShitsama-unsigned.ipa Payload
cd ../../..

# 2. Build iOS Simulator App
echo "--- Building iOS Simulator App (Debug) ---"
SIM_FAILED=false
xcodebuild build \
  -project ios/App/App.xcodeproj \
  -scheme App \
  -configuration Debug \
  -destination "generic/platform=iOS Simulator" \
  -derivedDataPath ios/App/build/DerivedDataSimulator \
  -skipPackagePluginValidation \
  -xcconfig ios/ci.xcconfig \
  2>&1 | tee ios/App/build/sim_build.log || SIM_FAILED=true

if [ "$SIM_FAILED" = "true" ]; then
  echo "### Simulator Build Failed! Last 80 lines of output:"
  tail -n 80 ios/App/build/sim_build.log
  exit 1
fi

SIM_APP=$(find ios/App/build/DerivedDataSimulator/Build/Products/Debug-iphonesimulator -name "*.app" -type d | head -n 1)
if [ -n "$SIM_APP" ]; then
  echo "Found simulator app at: $SIM_APP"
  cd "$(dirname "$SIM_APP")"
  zip -r -q "$GITHUB_WORKSPACE/ios/App/build/DrSylviaShitsama-Simulator.zip" "$(basename "$SIM_APP")"
  cd "$GITHUB_WORKSPACE"
fi

echo "=== iOS Build Process Completed Successfully! ==="
