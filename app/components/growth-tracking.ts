"use client";

type GrowthEventType =
  | "VIEW"
  | "CLICK"
  | "SIGNUP"
  | "SIGNUP_START"
  | "SIGNUP_COMPLETE"
  | "INSTALL"
  | "ACTIVATE"
  | "PAYMENT_SUCCESS"
  | "SUBSCRIPTION_START"
  | "SUBSCRIPTION_CANCEL"
  | "PAYWALL_VIEW"
  | "UPGRADE_CLICK"
  | "CHECKOUT_START";

type TrackGrowthEventOptions = {
  source?: string;
  metadata?: Record<string, unknown>;
};

const VISITOR_ID_KEY = "csr.growth.visitor_id.v1";
const SESSION_ID_KEY = "csr.growth.session_id.v1";
const growthApiUrl = (
  process.env.NEXT_PUBLIC_GROWTH_ENGINE_API_URL ||
  "https://api-production-ac5ca.up.railway.app"
).replace(/\/$/, "");

export function trackGrowthEvent(
  eventType: GrowthEventType,
  options: TrackGrowthEventOptions = {},
) {
  if (typeof window === "undefined" || !growthApiUrl) {
    return;
  }

  const currentUrl = new URL(window.location.href);
  const visitorId = getOrCreateStorageValue(window.localStorage, VISITOR_ID_KEY);
  const sessionId = getOrCreateStorageValue(window.sessionStorage, SESSION_ID_KEY);
  const utmSource = currentUrl.searchParams.get("utm_source");
  const utmMedium = currentUrl.searchParams.get("utm_medium");
  const utmCampaign = currentUrl.searchParams.get("utm_campaign");
  const utmContent = currentUrl.searchParams.get("utm_content");
  const metadata = {
    url: `${currentUrl.pathname}${currentUrl.search}`,
    ...(utmSource ? { utm_source: utmSource } : {}),
    ...(utmMedium ? { utm_medium: utmMedium } : {}),
    ...(utmCampaign ? { utm_campaign: utmCampaign } : {}),
    ...(utmContent ? { utm_content: utmContent } : {}),
    ...options.metadata,
  };

  void fetch(`${growthApiUrl}/api/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event_type: eventType,
      visitor_id: visitorId,
      session_id: sessionId,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_content: utmContent,
      source: options.source || "website",
      metadata,
    }),
    keepalive: true,
  }).catch(() => {
    // Ignore tracking failures so marketing pages stay fast.
  });
}

function getOrCreateStorageValue(storage: Storage, key: string) {
  const existing = storage.getItem(key);

  if (existing) {
    return existing;
  }

  const nextValue = createAnonymousId();
  storage.setItem(key, nextValue);
  return nextValue;
}

function createAnonymousId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
