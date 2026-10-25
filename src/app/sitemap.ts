import type { MetadataRoute } from "next";

const BASE = "https://wealwaysrise.com";

const routes = [
  "/",
  "/services",
  "/pricing",
  "/reports",
  "/insights",
  "/case-studies",
  "/love",
  "/team",
  "/founder-story",
  "/support",
  "/contact",
  "/terms",
  "/privacy",
  "/refund",
  "/billing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({ url: `${BASE}${path}`, lastModified: new Date() }));
}
