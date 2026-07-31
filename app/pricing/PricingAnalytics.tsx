"use client";

import { useEffect } from "react";
import { trackGrowthEvent } from "../components/growth-tracking";

export default function PricingAnalytics() {
  useEffect(() => {
    trackGrowthEvent("PAYWALL_VIEW", {
      source: "pricing_page",
      metadata: {
        feature: "pricing_page",
        plan: "FREE",
      },
    });
  }, []);

  return null;
}
