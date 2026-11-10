export interface ServiceDetail {
  /** Must match a slug in SERVICES_BY_SLUG (src/lib/services.ts). */
  slug: string;
  /** SEO <title> (without brand suffix). */
  seoTitle: string;
  /** SEO meta description. */
  seoDescription: string;
  /** One-line category label under the page heading. */
  eyebrow: string;
  h1: string;
  /** Answer-first paragraph shown at the top (also used for AEO/GEO). */
  summary: string;
  whoFor: string[];
  included: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  /** Slugs of related services shown at the bottom. */
  relatedServices: string[];
  /** Optional related case study slug. */
  relatedCaseStudy?: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "seo-audit",
    seoTitle: "SEO Audit for UK Businesses: £100 Fixed Price",
    seoDescription:
      "A comprehensive SEO audit for £100 fixed price: technical health, on-page signals and backlink profile reviewed, so you know what is holding back your organic growth.",
    eyebrow: "SEO & Growth Intelligence",
    h1: "SEO Audit: a clear view of what holds back your organic growth",
    summary:
      "Our SEO Audit costs £100, fixed price, with no monthly fees. We review your website's technical health, on-page signals and backlink profile, and show you what is holding back your organic growth. You pay online, and we confirm the scope and timeline in writing before work starts.",
    whoFor: [
      "Businesses with a website that gets little or no organic traffic and no clear reason why",
      "Founders and marketing leads who want an independent view before hiring an SEO agency",
      "Teams planning a redesign or migration who want to know the current baseline",
      "Companies that want to enter new markets and first need to know the state of their site",
    ],
    included: [
      {
        title: "Technical health",
        body: "Crawlability, indexing, site structure, page speed and other technical factors that affect how search engines read your site.",
      },
      {
        title: "On-page signals",
        body: "Titles, descriptions, headings, content and internal linking on your key pages, and where they miss what searchers look for.",
      },
      {
        title: "Backlink profile",
        body: "The links pointing to your site: their quality, how they are distributed and where your profile is weak.",
      },
      {
        title: "What to fix first",
        body: "Findings written in plain language, so you know which issues matter most and where to start.",
      },
    ],
    process: [
      { title: "Order", body: "Choose the SEO Audit, accept the terms and pay securely through Stripe." },
      { title: "Scope confirmed", body: "We confirm the scope and timeline with you in writing before work starts." },
      { title: "Audit", body: "We review your site and backlink profile and prepare the findings." },
      { title: "Delivery", body: "You receive the audit. Typical delivery is 5–15 business days from confirmation, depending on scope." },
    ],
    faq: [
      {
        q: "How much does an SEO audit cost?",
        a: "Our SEO Audit costs £100, fixed price. Prices are in GBP and include VAT where applicable. The price shown at checkout is the total you pay.",
      },
      {
        q: "What does the SEO Audit cover?",
        a: "Your website's technical health, on-page signals and backlink profile, with a view of what is holding back your organic growth.",
      },
      {
        q: "How long does it take?",
        a: "Typical delivery is 5–15 business days from your confirmation, depending on scope. We confirm the timeline with you before work starts.",
      },
      {
        q: "Do you fix the issues as well?",
        a: "The SEO Audit identifies the issues. If you want us to fix them, see SEO Audit + Optimization, which adds hands-on optimizations and quick-win improvements.",
      },
      {
        q: "Can you guarantee higher rankings?",
        a: "No. Search results depend on many factors outside our control, including search engine changes and competitors. We commit to the agreed scope, not to a specific ranking.",
      },
      {
        q: "Can I get a refund?",
        a: "UK consumers have a 14-day right to cancel under the Consumer Contracts Regulations 2013, subject to the conditions in our Refund Policy. Fees are generally non-refundable once work has commenced.",
      },
    ],
    relatedServices: ["seo-audit-plus", "seo-strategy-consulting", "programmatic-seo-plan"],
  },
  {
    slug: "programmatic-seo-plan",
    seoTitle: "Programmatic SEO Plan for SaaS: £1,000 Fixed Price",
    seoDescription:
      "A programmatic SEO plan for SaaS and digital platforms at £1,000 fixed price: keyword universe, page architecture, content automation framework and a 90-day roadmap.",
    eyebrow: "SEO & Growth Intelligence",
    h1: "Programmatic SEO Plan: scalable organic growth for SaaS and digital platforms",
    summary:
      "Our Programmatic SEO Plan costs £1,000, fixed price. It gives SaaS companies and digital platforms a structured, data-driven content system for scalable organic growth: keyword universe mapping, a page architecture, a content automation framework and a 90-day implementation roadmap. You can build it in-house or with us.",
    whoFor: [
      "SaaS and digital platforms that depend on paid acquisition and want a channel they own",
      "Products with many integrations, use cases or comparison angles that can become search pages",
      "Teams with in-house developers who can implement a clear technical plan",
      "Marketing leaders who want a roadmap with milestones before committing budget",
    ],
    included: [
      {
        title: "Keyword universe mapping",
        body: "A structured map of the search terms your market uses, grouped into themes so pages can be planned systematically.",
      },
      {
        title: "Page architecture",
        body: "A page generation design for page types such as comparison, integration and use-case pages, with the structure each one needs.",
      },
      {
        title: "Content automation framework",
        body: "How to produce and maintain pages at scale from structured data while keeping them useful and distinct.",
      },
      {
        title: "90-day roadmap",
        body: "A technical implementation roadmap with milestones and KPIs, written so your own team can execute it.",
      },
    ],
    process: [
      { title: "Order", body: "Choose the Programmatic SEO Plan, accept the terms and pay securely through Stripe." },
      { title: "Scope confirmed", body: "We confirm the scope and timeline with you in writing before work starts." },
      { title: "Research and design", body: "We map the keyword universe and design the page architecture and automation framework." },
      { title: "Delivery", body: "You receive the plan and roadmap. Typical delivery is 5–15 business days from confirmation, depending on scope." },
    ],
    faq: [
      {
        q: "How much does a programmatic SEO plan cost?",
        a: "Our Programmatic SEO Plan costs £1,000, fixed price. Prices are in GBP and include VAT where applicable.",
      },
      {
        q: "What is programmatic SEO?",
        a: "Programmatic SEO creates many search-focused pages from structured data and templates, for example comparison, integration or use-case pages, so a product can be found for a large set of specific searches.",
      },
      {
        q: "Is this a plan or do you build the pages?",
        a: "This service delivers the plan: keyword universe, page architecture, automation framework and a 90-day roadmap. Implementation is by your team unless we agree otherwise in writing.",
      },
      {
        q: "Is it only for SaaS?",
        a: "It is designed for SaaS and digital platforms. Other businesses with large catalogues or many locations may also fit; contact us to check.",
      },
      {
        q: "Can you guarantee traffic growth?",
        a: "No. Results depend on many factors, including your product, competition, implementation quality and search engine changes. We commit to the agreed scope, not to a traffic outcome.",
      },
      {
        q: "How long does it take?",
        a: "Typical delivery is 5–15 business days from your confirmation, depending on scope. We confirm the timeline with you before work starts.",
      },
    ],
    relatedServices: ["seo-audit", "seo-strategy-consulting", "seo-audit-plus"],
    relatedCaseStudy: "hr-saas-programmatic-seo",
  },
];

export const SERVICE_DETAILS_BY_SLUG: Record<string, ServiceDetail> =
  Object.fromEntries(SERVICE_DETAILS.map((d) => [d.slug, d]));
