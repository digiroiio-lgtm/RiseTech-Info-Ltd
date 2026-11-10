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
  {
    slug: "seo-audit-plus",
    seoTitle: "SEO Audit + Optimization: £250 Fixed Price",
    seoDescription:
      "SEO audit plus hands-on fixes for £250 fixed price: we audit your site, then fix the issues and implement quick-win improvements directly.",
    eyebrow: "SEO & Growth Intelligence",
    h1: "SEO Audit + Optimization: we find the issues and fix them",
    summary:
      "Our SEO Audit + Optimization costs £250, fixed price. It includes everything in the SEO Audit, plus hands-on optimizations: we fix the issues and implement quick-win improvements directly. You pay online, and we confirm the scope and timeline in writing before work starts.",
    whoFor: [
      "Businesses that want the problems fixed, not only listed in a report",
      "Small teams without in-house SEO or developer time for quick wins",
      "Sites that have never had a proper SEO review",
      "Owners who want visible improvements before investing in a larger strategy",
    ],
    included: [
      {
        title: "Everything in the SEO Audit",
        body: "Review of your site's technical health, on-page signals and backlink profile, with findings in plain language.",
      },
      {
        title: "Hands-on optimizations",
        body: "We implement fixes directly rather than leaving you a list of tasks.",
      },
      {
        title: "Quick-win improvements",
        body: "Changes that are fast to make and affect how your pages are found and read by search engines.",
      },
      {
        title: "What is left to do",
        body: "A clear view of larger issues that fall outside quick wins, so you can plan the next step.",
      },
    ],
    process: [
      { title: "Order", body: "Choose SEO Audit + Optimization, accept the terms and pay securely through Stripe." },
      { title: "Scope and access confirmed", body: "We confirm the scope and timeline in writing and agree how we get access to the changes we need to make." },
      { title: "Audit and fixes", body: "We audit your site and implement the agreed optimizations." },
      { title: "Delivery", body: "You receive the audit and a summary of the changes made. Typical delivery is 5–15 business days from confirmation, depending on scope." },
    ],
    faq: [
      {
        q: "How much does SEO audit and optimization cost?",
        a: "SEO Audit + Optimization costs £250, fixed price. Prices are in GBP and include VAT where applicable.",
      },
      {
        q: "What is the difference from the SEO Audit?",
        a: "The SEO Audit identifies the issues. SEO Audit + Optimization adds hands-on work: we fix the issues and implement quick-win improvements directly.",
      },
      {
        q: "Which fixes are included?",
        a: "Quick-win improvements within the scope we confirm in writing before work starts. Larger changes, such as a redesign or a content programme, are outside this package and can be quoted separately.",
      },
      {
        q: "Do you need access to my website?",
        a: "To implement fixes we need a way to make the agreed changes. We agree this with you when we confirm the scope.",
      },
      {
        q: "Can you guarantee higher rankings?",
        a: "No. Search results depend on many factors outside our control. We commit to the agreed scope, not to a specific ranking.",
      },
      {
        q: "How long does it take?",
        a: "Typical delivery is 5–15 business days from your confirmation, depending on scope.",
      },
    ],
    relatedServices: ["seo-audit", "seo-strategy-consulting", "programmatic-seo-plan"],
  },
  {
    slug: "seo-strategy-consulting",
    seoTitle: "SEO Strategy & Consulting: £500 Fixed Price",
    seoDescription:
      "A full strategic SEO roadmap for £500 fixed price, tailored to your industry, competitors and growth objectives: keyword strategy, content planning and authority building.",
    eyebrow: "SEO & Growth Intelligence",
    h1: "SEO Strategy & Consulting: a roadmap built around your market",
    summary:
      "Our SEO Strategy & Consulting costs £500, fixed price. You get a full strategic SEO roadmap tailored to your industry, competitors and growth objectives, including keyword strategy, content planning and authority building. You pay online, and we confirm the scope and timeline in writing before work starts.",
    whoFor: [
      "Businesses ready to invest in organic search and wanting a plan before spending on content",
      "Founders who need to know which keywords and topics to prioritise",
      "Marketing teams that need a roadmap to brief writers, developers or an agency",
      "Companies entering a competitive market and wanting to understand the competitor landscape",
    ],
    included: [
      {
        title: "Strategic SEO roadmap",
        body: "A plan tailored to your industry, competitors and growth objectives, with priorities in a sensible order.",
      },
      {
        title: "Keyword strategy",
        body: "Which search terms to target, grouped by topic and intent, so effort goes where it matters.",
      },
      {
        title: "Content planning",
        body: "What to publish and how to organise it, so content supports your keyword strategy.",
      },
      {
        title: "Authority building",
        body: "Direction for earning the links and signals that help your site be trusted in your market.",
      },
    ],
    process: [
      { title: "Order", body: "Choose SEO Strategy & Consulting, accept the terms and pay securely through Stripe." },
      { title: "Scope confirmed", body: "We confirm the scope and timeline with you in writing before work starts." },
      { title: "Research and planning", body: "We analyse your industry, competitors and objectives and build the roadmap." },
      { title: "Delivery", body: "You receive the strategy. Typical delivery is 5–15 business days from confirmation, depending on scope." },
    ],
    faq: [
      {
        q: "How much does SEO strategy consulting cost?",
        a: "SEO Strategy & Consulting costs £500, fixed price. Prices are in GBP and include VAT where applicable.",
      },
      {
        q: "What do I get?",
        a: "A strategic SEO roadmap tailored to your industry, competitors and growth objectives, including keyword strategy, content planning and authority building.",
      },
      {
        q: "Should I buy the audit first?",
        a: "Not necessarily. An audit shows the state of your current site; the strategy shows where to go. If your site has technical problems, starting with the SEO Audit can help.",
      },
      {
        q: "Do you carry out the plan?",
        a: "This service delivers the strategy. Implementation is by your team unless we agree otherwise in writing.",
      },
      {
        q: "Can you guarantee higher rankings?",
        a: "No. Search results depend on many factors outside our control, including competitors and search engine changes. We commit to the agreed scope, not to a specific ranking.",
      },
      {
        q: "How long does it take?",
        a: "Typical delivery is 5–15 business days from your confirmation, depending on scope.",
      },
    ],
    relatedServices: ["seo-audit", "seo-audit-plus", "programmatic-seo-plan"],
  },
];

export const SERVICE_DETAILS_BY_SLUG: Record<string, ServiceDetail> =
  Object.fromEntries(SERVICE_DETAILS.map((d) => [d.slug, d]));
