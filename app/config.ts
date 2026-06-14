export const siteConfig = {
  name: "China Supply Radar",
  url: "https://chinasupplyradar.com",
  description:
    "Inventory risk and supply chain planning for Shopify merchants and ecommerce sellers sourcing from China.",
  supportEmail: "support@chinasupplyradar.com",
  helloEmail: "hello@chinasupplyradar.com",
  shopifyAppUrl:
    process.env.NEXT_PUBLIC_SHOPIFY_APP_URL || "/support",
  chromeStoreUrl:
    process.env.NEXT_PUBLIC_CHROME_STORE_URL ||
    "https://chromewebstore.google.com/",
  chromeStoreStatus:
    process.env.NEXT_PUBLIC_CHROME_STORE_STATUS || "pending_review",
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
