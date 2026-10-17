#!/bin/bash
set -e

echo "=== Starting iOS Build Process ==="
mkdir -p ios/App/build

# 1. Build Xcode Archive (Release Unsigned)
echo "--- Creating iOS Release Archive (Unsigned) ---"
ARCHIVE_PATH="$GITHUB_WORKSPACE/ios/App/build/App.xcarchive"
rm -rf "$ARCHIVE_PATH"

BUILD_FAILED=false
xcodebuild archive \
  -project ios/App/App.xcodeproj \
  -scheme App \
  -configuration Release \
  -destination "generic/platform=iOS" \
  -archivePath "$ARCHIVE_PATH" \
  -skipPackagePluginValidation \
  -xcconfig ios/ci.xcconfig \
  2>&1 | tee ios/App/build/archive_build.log || BUILD_FAILED=true

if [ "$BUILD_FAILED" = "true" ]; then
  echo "### Archive Build Failed! Last 100 lines of output:"
  tail -n 100 ios/App/build/archive_build.log
  exit 1
fi

echo "--- Checking Archive Contents ---"
ls -la "$ARCHIVE_PATH"
ls -la "$ARCHIVE_PATH/Products/Applications"

echo "--- Packaging Unsigned IPA & xcarchive ---"
rm -rf ios/App/build/Payload
mkdir -p ios/App/build/Payload
cp -R "$ARCHIVE_PATH/Products/Applications/App.app" ios/App/build/Payload/
cd ios/App/build
zip -r -q DrSylviaShitsama-unsigned.ipa Payload
zip -r -q DrSylviaShitsama.xcarchive.zip App.xcarchive
cd "$GITHUB_WORKSPACE"

# 2. Build iOS Simulator App (iPhone 16 Simulator)
echo "--- Available Simulators ---"
xcrun simctl list devices available | grep -i "iPhone" | head -n 5 || true

echo "--- Building iOS Simulator App (Debug) ---"
SIM_FAILED=false
xcodebuild build \
  -project ios/App/App.xcodeproj \
  -scheme App \
  -configuration Debug \
  -destination "platform=iOS Simulator,name=iPhone 16" \
  -derivedDataPath ios/App/build/DerivedDataSimulator \
  -skipPackagePluginValidation \
  -xcconfig ios/ci.xcconfig \
  2>&1 | tee ios/App/build/sim_build.log || SIM_FAILED=true

if [ "$SIM_FAILED" = "true" ]; then
  echo "### Simulator Build Failed! Last 100 lines of output:"
  tail -n 100 ios/App/build/sim_build.log
  exit 1
fi

SIM_APP=$(find ios/App/build/DerivedDataSimulator/Build/Products/Debug-iphonesimulator -name "*.app" -type d | head -n 1)
if [ -n "$SIM_APP" ]; then
  echo "Found simulator app at: $SIM_APP"
  ls -la "$SIM_APP"
  cd "$(dirname "$SIM_APP")"
  zip -r -q "$GITHUB_WORKSPACE/ios/App/build/DrSylviaShitsama-Simulator.zip" "$(basename "$SIM_APP")"
  cd "$GITHUB_WORKSPACE"
fi

echo "=== Verifying Artifact File Sizes ==="
ls -lh ios/App/build/*.ipa ios/App/build/*.zip

echo "=== iOS Build Process Completed Successfully! ==="
