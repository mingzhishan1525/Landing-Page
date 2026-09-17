const productionShopifyOnboardingUrl =
  "https://app.chinasupplyradar.com/onboarding";
const configuredShopifyAppUrl = process.env.NEXT_PUBLIC_SHOPIFY_APP_URL?.trim();

export const siteConfig = {
  name: "China Supply Radar",
  url: "https://chinasupplyradar.com",
  description:
    "Inventory risk and supply chain planning for Shopify merchants and ecommerce sellers sourcing from China.",
  supportEmail: "support@chinasupplyradar.com",
  helloEmail: "hello@chinasupplyradar.com",
  shopifyAppUrl:
    configuredShopifyAppUrl && configuredShopifyAppUrl !== "/support"
      ? configuredShopifyAppUrl
      : productionShopifyOnboardingUrl,
  chromeStoreUrl:
    "https://chromewebstore.google.com/detail/china-supply-radar/ilkmanjaigbnbnicnoobffekdcdfmlkg",
  chromeStoreStatus:
    "published",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
};

export const chromeStoreCta =
  siteConfig.chromeStoreStatus === "published"
    ? "Install from Chrome Web Store"
    : "Chrome Web Store Review Pending";

export const isChromeStorePublished =
  siteConfig.chromeStoreStatus === "published";
