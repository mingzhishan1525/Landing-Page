"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { siteConfig } from "../config";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const pageVisitEvents: Record<string, string> = {
  "/": "Homepage Visit",
  "/privacy": "Privacy Page Visit",
};

export function trackEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, parameters || {});
}

export default function Analytics() {
  const pathname = usePathname();
  const measurementId = siteConfig.gaMeasurementId;

  useEffect(() => {
    const eventName = pageVisitEvents[pathname];

    if (eventName) {
      trackEvent(eventName, { page_path: pathname });
    }
  }, [pathname]);

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
