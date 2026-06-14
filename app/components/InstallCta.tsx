"use client";

import { chromeStoreCta, isChromeStorePublished, siteConfig } from "../config";
import { trackEvent } from "./Analytics";

type InstallCtaProps = {
  className: string;
  label?: string;
};

export default function InstallCta({ className, label = chromeStoreCta }: InstallCtaProps) {
  const href = isChromeStorePublished ? siteConfig.chromeStoreUrl : "#";

  return (
    <a
      href={href}
      aria-disabled={!isChromeStorePublished}
      className={className}
      onClick={(event) => {
        trackEvent("Install Button Click", {
          chrome_store_status: siteConfig.chromeStoreStatus,
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
