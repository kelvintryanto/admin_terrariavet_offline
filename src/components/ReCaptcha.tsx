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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load the reCAPTCHA script
  useEffect(() => {
    // Skip if running in SSR
    if (typeof window === 'undefined') return;

    // Check if script is already loaded
    if (document.querySelector('script[src*="recaptcha/api.js"]')) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setIsScriptLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      // No need to remove the script, let it be cached
    };
  }, []);

  // Render reCAPTCHA when script is loaded
  useEffect(() => {
    // Skip if running in SSR or script not loaded or widget already rendered
    if (typeof window === 'undefined' || !isScriptLoaded || isWidgetRendered)
      return;

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined');
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
          if (intervalRef.current) clearInterval(intervalRef.current);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          renderWidget();
        }
      }, 100);

      // Clear interval after 10 seconds if it hasn't rendered, but don't log an error
      timeoutRef.current = setTimeout(() => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;

          // Only log an issue if debug is needed
          if (process.env.NODE_ENV === 'development') {
            console.log(
              'reCAPTCHA initialization timed out - this is normal if the component unmounted'
            );
          }
        }
      }, 10000);
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
  }, [isScriptLoaded, isWidgetRendered, onVerify, onExpired, theme, size]);

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
          if (process.env.NODE_ENV === 'development') {
            console.log(
              'Failed to reset reCAPTCHA on unmount - this is normal'
            );
          }
        }
      }

      // Also clear any pending intervals/timeouts
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
