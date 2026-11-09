"use client";

import * as React from "react";
import Script from "next/script";
import Link from "next/link";
import { CONSENT_KEY, OPEN_CONSENT_EVENT, track } from "@/lib/analytics";

type Consent = "granted" | "denied" | null;

function readConsent(): Consent {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/**
 * Google Analytics 4 in "basic consent" mode: no Google script loads and no
 * cookies are set until the visitor accepts. Also tracks key conversion clicks
 * through data-track attributes and mailto links.
 */
export function Analytics({ gaId }: { gaId: string }) {
  const [consent, setConsent] = React.useState<Consent>(null);
  const [showBanner, setShowBanner] = React.useState(false);

  React.useEffect(() => {
    const stored = readConsent();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- consent lives in localStorage, only readable after mount
    setConsent(stored);
    setShowBanner(stored === null);
    const reopen = () => setShowBanner(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const tracked = target?.closest<HTMLElement>("[data-track]");
      if (tracked) {
        track(tracked.dataset.track!, { link_url: tracked.getAttribute("href") ?? undefined, page_path: location.pathname });
        return;
      }
      const mail = target?.closest<HTMLAnchorElement>('a[href^="mailto:"]');
      if (mail) track("email_click", { page_path: location.pathname });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function choose(value: "granted" | "denied") {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // Storage can be blocked. The choice still applies for this visit.
    }
    if (value === "denied" && consent === "granted" && typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
    setConsent(value);
    setShowBanner(false);
  }

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      ) : null}

      {showBanner ? (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie preferences"
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-md animate-fade-up rounded-xl border border-line-strong bg-bg-elevated p-5 shadow-pop sm:left-5 sm:right-auto sm:mx-0"
        >
          <p className="text-sm font-medium text-fg">Analytics cookies</p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted">
            We would like to use Google Analytics to understand how visitors use this site. It only runs if you accept.
            Read our{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-fg">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="h-9 flex-1 rounded-full btn-aurora px-4 text-sm font-medium"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="h-9 flex-1 rounded-full border border-line-strong px-4 text-sm font-medium text-fg hover:bg-surface-2"
            >
              Decline
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}>
      Cookie settings
    </button>
  );
}
