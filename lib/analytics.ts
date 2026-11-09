declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const CONSENT_KEY = "qy-consent";
export const OPEN_CONSENT_EVENT = "qy:open-consent";

/** Sends a GA4 event when analytics is loaded and consented. Safe to call anywhere. */
export function track(event: string, params: Record<string, string | number | boolean | undefined> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
