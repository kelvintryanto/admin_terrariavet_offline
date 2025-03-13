'use client';

import { useEffect, useRef, useState } from 'react';

// Define global grecaptcha type
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (
        container: string | HTMLElement,
        parameters: {
          sitekey: string;
          callback: (token: string) => void;
          'expired-callback'?: () => void;
          theme?: 'light' | 'dark';
          size?: 'normal' | 'compact';
        }
      ) => number;
      reset: (widgetId?: number) => void;
      execute: (widgetId?: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

interface ReCaptchaProps {
  onVerify: (token: string) => void;
  onExpired?: () => void;
  theme?: 'light' | 'dark';
  size?: 'normal' | 'compact';
}

const ReCaptcha = ({
  onVerify,
  onExpired,
  theme = 'light',
  size = 'normal',
}: ReCaptchaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isWidgetRendered, setIsWidgetRendered] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  // Load the reCAPTCHA script with error handling and retries
  useEffect(() => {
    // Skip if running in SSR
    if (typeof window === 'undefined') return;

    let retryCount = 0;
    const MAX_RETRIES = 2;
    const RETRY_DELAY = 2000; // 2 seconds

    // Check if script is already loaded
    if (document.querySelector('script[src*="recaptcha/api.js"]')) {
      setIsScriptLoaded(true);
      return;
    }

    const loadScript = () => {
      // Clear previous script if it exists
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }

      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit&onload=onRecaptchaLoad`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        setIsScriptLoaded(true);
        setLoadError(null);
      };

      script.onerror = () => {
        if (retryCount < MAX_RETRIES) {
          retryCount++;
          // Retry with exponential backoff
          setTimeout(loadScript, RETRY_DELAY * retryCount);
        } else {
          setLoadError('Failed to load reCAPTCHA after multiple attempts');
          // Continue without reCAPTCHA - this will let the form work without it in case of network issues
        }
      };

      document.head.appendChild(script);
      scriptRef.current = script;
    };

    loadScript();

    return () => {
      // No need to remove the script on unmount, let it be cached
    };
  }, []);

  // Render reCAPTCHA when script is loaded
  useEffect(() => {
    // Skip if running in SSR or script not loaded or widget already rendered
    if (
      typeof window === 'undefined' ||
      !isScriptLoaded ||
      isWidgetRendered ||
      loadError
    )
      return;

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined');
      setLoadError('reCAPTCHA site key is missing');
      return;
    }

    // Wait for grecaptcha to be fully loaded
    const renderWidget = () => {
      try {
        if (
          containerRef.current &&
          window.grecaptcha &&
          typeof window.grecaptcha.render === 'function'
        ) {
          widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
            sitekey: siteKey,
            callback: onVerify,
            'expired-callback': onExpired,
            theme,
            size,
          });
          setIsWidgetRendered(true);
        }
      } catch (error) {
        // If error is about already being rendered, we can ignore it
        const errorMsg = error instanceof Error ? error.message : String(error);
        if (!errorMsg.includes('already been rendered')) {
          console.error('Error rendering reCAPTCHA:', error);
          setLoadError('Error rendering reCAPTCHA widget');
        }
      }
    };

    // Ensure grecaptcha is fully loaded
    if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
      renderWidget();
    } else {
      // If not ready, wait for it
      window.onRecaptchaLoad = renderWidget;

      // Set a timeout as a fallback with proper cleanup
      intervalRef.current = setInterval(() => {
        if (
          window.grecaptcha &&
          typeof window.grecaptcha.render === 'function'
        ) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          renderWidget();
        }
      }, 100);

      // Clear interval after 5 seconds if it hasn't rendered
      // Less aggressive timeout (5s instead of 10s) to prevent unhandled errors
      timeoutRef.current = setTimeout(() => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;

          // Set error state so we can show a fallback UI
          setLoadError('reCAPTCHA initialization timed out');

          // Notify user via onExpired callback if provided
          if (onExpired) {
            onExpired();
          }
        }
      }, 5000);
    }

    // Clean up on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [
    isScriptLoaded,
    isWidgetRendered,
    onVerify,
    onExpired,
    theme,
    size,
    loadError,
  ]);

  // Add cleanup effect
  useEffect(() => {
    return () => {
      // Reset reCAPTCHA on unmount if it was rendered
      if (
        widgetIdRef.current !== null &&
        window.grecaptcha &&
        typeof window.grecaptcha.reset === 'function'
      ) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch {
          // Silently handle reset errors on unmount
        }
      }

      // Also clear any pending intervals/timeouts
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Show error state if loading failed
  if (loadError) {
    return (
      <div className="flex flex-col items-center justify-center w-full p-3 rounded-md bg-red-500/10 border border-red-500/20">
        <p className="text-sm text-red-200 text-center">
          Gagal memuat reCAPTCHA. Silakan coba lagi nanti.
        </p>
        <button
          className="mt-2 px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded-md text-white transition-colors"
          onClick={() => {
            setLoadError(null);
            setIsScriptLoaded(false);
            setIsWidgetRendered(false);
            // Force reload the component
            if (scriptRef.current && scriptRef.current.parentNode) {
              scriptRef.current.parentNode.removeChild(scriptRef.current);
              scriptRef.current = null;
            }
          }}
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full overflow-hidden">
      <div
        ref={containerRef}
        className="g-recaptcha transform origin-center scale-100 sm:scale-100 md:scale-100 lg:scale-100
                   max-sm:scale-[0.85] max-xs:scale-[0.75]"
      />
    </div>
  );
};

export default ReCaptcha;
