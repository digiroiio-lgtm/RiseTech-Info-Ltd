import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";
import { caseStudies } from "@/lib/caseStudies";

const BASE = "https://wealwaysrise.com";

// lastModified = date the page content last changed (not the request time).
// Update the date here when a page's content changes.
const routes: { path: string; lastModified: string }[] = [
  { path: "/", lastModified: "2026-10-24" },
  { path: "/services", lastModified: "2026-11-10" },
  { path: "/services/global-digital-growth", lastModified: "2026-11-10" },
  { path: "/pricing", lastModified: "2026-10-25" },
  { path: "/reports", lastModified: "2026-10-25" },
  { path: "/insights", lastModified: "2026-10-25" },
  { path: "/case-studies", lastModified: "2026-11-10" },
  { path: "/love", lastModified: "2026-10-25" },
  { path: "/team", lastModified: "2026-10-25" },
  { path: "/founder-story", lastModified: "2026-10-25" },
  { path: "/support", lastModified: "2026-10-25" },
  { path: "/contact", lastModified: "2026-10-25" },
  { path: "/terms", lastModified: "2026-10-25" },
  { path: "/privacy", lastModified: "2026-10-25" },
  { path: "/refund", lastModified: "2026-10-25" },
  { path: "/billing", lastModified: "2026-10-25" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map(({ path, lastModified }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(lastModified),
  }));
  const posts = insights.map((post) => ({
    url: `${BASE}/insights/${post.slug}`,
    lastModified: new Date(post.date),
  }));
  const cases = caseStudies.map((cs) => ({
    url: `${BASE}/case-studies/${cs.slug}`,
    lastModified: new Date("2026-11-10"),
  }));
  return [...pages, ...cases, ...posts];
}
