import { siteConfig } from "../app/config";

export const growthLinks = {
  chromeInstallUrl:
    `${siteConfig.chromeStoreUrl}?utm_source=website&utm_medium=cta&utm_campaign=growth_engine_v1`,
  shopifyInstallUrl:
    `${siteConfig.shopifyAppUrl}?utm_source=website&utm_medium=cta&utm_campaign=growth_engine_v1`,
  newsletterUrl: "/newsletter?utm_source=website&utm_medium=cta&utm_campaign=growth_engine_v1",
};

export function withUtm(url: string, source: string) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}utm_source=${source}&utm_medium=cta&utm_campaign=growth_engine_v1`;
}
