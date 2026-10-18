/**
 * Mobile Navigation & Capacitor Route Resolver
 *
 * Resolves static directory routes (e.g. /about) to their corresponding
 * /index.html files when running inside Capacitor Android/iOS WebViews,
 * preventing Capacitor from falling back to root index.html or throwing 404s.
 */

export function initMobileNavigation(): void {
  const isCapacitor = 
    typeof window !== 'undefined' && (
      window.location.protocol === 'capacitor:' ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      navigator.userAgent.includes('Capacitor') ||
      !!(window as any).Capacitor?.isNativePlatform?.()
    );

  if (!isCapacitor) {
    return;
  }

  // Intercept internal link clicks to ensure proper /index.html targeting in WebView
  document.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest('a') as HTMLAnchorElement | null;
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    // Allow external links (WhatsApp, external websites, tel, mailto, etc.)
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('//') ||
      href.startsWith('tel:') ||
      href.startsWith('mailto:') ||
      href.startsWith('javascript:')
    ) {
      return;
    }

    // Pure on-page hash jump (e.g. #biography)
    if (href.startsWith('#')) {
      return;
    }

    // Parse path, query, and hash
    const [pathWithQuery, hashPart] = href.split('#');
    const [rawPath, queryPart] = pathWithQuery.split('?');
    const hash = hashPart ? `#${hashPart}` : '';
    const query = queryPart ? `?${queryPart}` : '';

    let cleanPath = rawPath.trim();

    // Preserve files with explicit extension (e.g. .html, .png, .pdf)
    if (cleanPath.includes('.') && !cleanPath.endsWith('/')) {
      return;
    }

    // Normalize path with leading slash
    if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath;
    }

    event.preventDefault();

    let targetUrl: string;
    if (cleanPath === '/' || cleanPath === '') {
      targetUrl = `/index.html${query}${hash}`;
    } else {
      // Remove trailing slash if present then append /index.html
      const normalized = cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
      targetUrl = `${normalized}/index.html${query}${hash}`;
    }

    // If target is same page with a hash, smooth scroll to it
    if (cleanPath === window.location.pathname.replace(/\/index\.html$/, '') && hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.location.href = targetUrl;
  }, true);

  // Hook Android Hardware Back Button via Capacitor App Plugin
  const capacitor = (window as any).Capacitor;
  if (capacitor?.Plugins?.App) {
    try {
      capacitor.Plugins.App.addListener('backButton', ({ canGoBack }: { canGoBack: boolean }) => {
        const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
        if (canGoBack && !isHomePage) {
          window.history.back();
        } else {
          capacitor.Plugins.App.exitApp();
        }
      });
    } catch (e) {
      console.warn('Capacitor BackButton listener initialization skipped:', e);
    }
  }
}

// Auto-run on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNavigation);
  } else {
    initMobileNavigation();
  }
}
