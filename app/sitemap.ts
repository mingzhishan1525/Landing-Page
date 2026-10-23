import type { MetadataRoute } from "next";
import { siteConfig } from "./config";
import { seoArticles } from "../lib/data/blog-posts";


export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/pricing",
    "/reorder-review",
    "/privacy",
    "/terms",
    "/support",
    "/newsletter",
    "/tools",
    "/tools/holiday-calculator",
    "/tools/reorder-calculator",
    "/tools/stockout-risk-calculator",
    "/blog",
    "/blog/calculate-reorder-window",
    "/blog/shopify-available-stock-reorder",
    "/blog/supplier-lead-time-checklist",
    "/blog/inbound-inventory-reorder-timeline",
    "/contact",
    "/shopify",
    ...seoArticles.map((article) => `/blog/${article.slug}`),
  ].map((path) => ({
    url: `${siteConfig.url}${path}/`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
