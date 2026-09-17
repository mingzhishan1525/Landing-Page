"use client";

import { chromeStoreCta, isChromeStorePublished, siteConfig } from "../config";
import { withUtm } from "../../lib/growth-links";
import { trackEvent } from "./Analytics";
import { trackGrowthEvent } from "./growth-tracking";

type InstallCtaProps = {
  className: string;
  label?: string;
};

export default function InstallCta({ className, label = chromeStoreCta }: InstallCtaProps) {
  const href = isChromeStorePublished ? withUtm(siteConfig.chromeStoreUrl, "website") : "#";

  return (
    <a
      href={href}
      aria-disabled={!isChromeStorePublished}
      className={className}
      onClick={(event) => {
        trackEvent("Install Button Click", {
          chrome_store_status: siteConfig.chromeStoreStatus,
        });
        trackGrowthEvent("CLICK", {
          source: "website",
          metadata: {
            button: "chrome_install",
            destination: href,
            chrome_store_status: siteConfig.chromeStoreStatus,
          },
        });

        if (!isChromeStorePublished) {
          event.preventDefault();
        }
      }}
    >
      {label}
    </a>
  );
}
