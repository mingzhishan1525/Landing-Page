import type { MetadataRoute } from "next";

const baseUrl = "https://chinasupplyradar.com";
const launchDate = new Date("2026-06-11");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms", "/blog"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: launchDate,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
