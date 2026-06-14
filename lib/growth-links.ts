import { siteConfig } from "../app/config";

export const growthLinks = {
  chromeInstallUrl: siteConfig.chromeStoreUrl,
  shopifyInstallUrl: siteConfig.shopifyAppUrl,
  newsletterUrl: "/newsletter",
};

export function withUtm(url: string, source: string) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}utm_source=${source}&utm_medium=cta&utm_campaign=growth_engine_v1`;
}
