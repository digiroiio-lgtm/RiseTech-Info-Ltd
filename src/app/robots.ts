import type { MetadataRoute } from "next";

const PRIVATE = ["/api/", "/success", "/cancel"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      // Explicitly welcome AI search/answer crawlers (public marketing content only).
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended"],
        allow: "/",
        disallow: PRIVATE,
      },
    ],
    sitemap: "https://wealwaysrise.com/sitemap.xml",
  };
}
