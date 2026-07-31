"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackGrowthEvent } from "./growth-tracking";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  buttonName: string;
  eventSource?: string;
  commercialEvent?: "UPGRADE_CLICK" | "CHECKOUT_START";
};

export default function TrackedLink({
  children,
  buttonName,
  eventSource = "website",
  commercialEvent,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        trackGrowthEvent("CLICK", {
          source: eventSource,
          metadata: {
            button: buttonName,
            destination: href || "",
          },
        });
        if (commercialEvent) {
          trackGrowthEvent(commercialEvent, {
            source: eventSource,
            metadata: {
              button: buttonName,
              destination: href || "",
              plan: "PRO",
            },
          });
        }
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
