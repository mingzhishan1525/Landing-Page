import type { MetadataRoute } from "next";
import { siteConfig } from "./config";

const launchDate = new Date("2026-06-11");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/pricing",
    "/privacy",
    "/terms",
    "/support",
    "/blog",
    "/contact",
    "/shopify",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: launchDate,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
