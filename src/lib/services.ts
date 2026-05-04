export interface Service {
  slug: string;
  title: string;
  description: string;
  /** Display string, e.g. "£1,000" */
  price: string;
  /** Integer GBP amount (no pence), used for Stripe price_data */
  priceGBP: number;
  category: string;
}

export interface ServiceCategory {
  index: number;
  name: string;
  tagline: string;
  services: Service[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    index: 1,
    name: "SEO & Growth Intelligence",
    tagline:
      "Data-backed search strategy and technical SEO to drive compounding organic growth.",
    services: [
      {
        slug: "seo-audit",
        title: "SEO Audit",
        description:
          "A comprehensive audit of your site's technical health, on-page signals, and backlink profile. Identify what's holding back your organic growth.",
        price: "£100",
        priceGBP: 100,
        category: "SEO & Growth Intelligence",
      },
      {
        slug: "seo-audit-plus",
        title: "SEO Audit + Optimization",
        description:
          "Everything in the SEO Audit, plus hands-on optimizations. We fix the issues and implement quick-win improvements directly.",
        price: "£250",
        priceGBP: 250,
        category: "SEO & Growth Intelligence",
      },
      {
        slug: "seo-strategy-consulting",
        title: "SEO Strategy & Consulting",
        description:
          "A full strategic SEO roadmap tailored to your industry, competitors, and growth objectives. Includes keyword strategy, content planning, and authority building.",
        price: "£500",
        priceGBP: 500,
        category: "SEO & Growth Intelligence",
      },
      {
        slug: "programmatic-seo-plan",
        title: "Programmatic SEO Plan",
        description:
          "Scalable organic growth architecture for SaaS and digital platforms. Build defensible traffic moats through structured, data-driven content systems.",
        price: "£1,000",
        priceGBP: 1000,
        category: "SEO & Growth Intelligence",
      },
    ],
  },
  {
    index: 2,
    name: "Market & Business Intelligence",
    tagline:
      "Deep market analysis and competitive intelligence to support high-stakes decisions.",
    services: [
      {
        slug: "market-research-basic",
        title: "Market Research Report (Basic)",
        description:
          "Targeted market analysis covering segment size, competitive landscape, and key trends to validate a business opportunity.",
        price: "£1,500",
        priceGBP: 1500,
        category: "Market & Business Intelligence",
      },
      {
        slug: "market-research-detailed",
        title: "Market Research Report (Detailed)",
        description:
          "In-depth primary and secondary research delivering comprehensive market maps, buyer personas, and strategic entry recommendations.",
        price: "£3,000",
        priceGBP: 3000,
        category: "Market & Business Intelligence",
      },
      {
        slug: "bi-report-basic",
        title: "Business Intelligence Report (Basic)",
        description:
          "Structured business analysis covering performance benchmarks, competitive positioning, and operational insights.",
        price: "£1,000",
        priceGBP: 1000,
        category: "Market & Business Intelligence",
      },
      {
        slug: "bi-report-medium",
        title: "Business Intelligence Report (Medium)",
        description:
          "Advanced BI covering multi-market data synthesis, KPI modelling, and decision-support frameworks for leadership teams.",
        price: "£2,000",
        priceGBP: 2000,
        category: "Market & Business Intelligence",
      },
      {
        slug: "bi-report-comprehensive",
        title: "Business Intelligence Report (Comprehensive)",
        description:
          "Board-ready strategic intelligence. Full competitive landscape, market sizing, financial benchmarks, and executive summary with strategic recommendations.",
        price: "£5,000",
        priceGBP: 5000,
        category: "Market & Business Intelligence",
      },
    ],
  },
  {
    index: 3,
    name: "Startup Advisory",
    tagline:
      "Investor-ready positioning and strategic clarity for founders at every stage.",
    services: [
      {
        slug: "pitch-deck-review",
        title: "Pitch Deck Design & Review",
        description:
          "Investor-grade pitch deck crafted to communicate your vision, traction, and market opportunity with precision and confidence.",
        price: "£600",
        priceGBP: 600,
        category: "Startup Advisory",
      },
      {
        slug: "business-model-review",
        title: "Business Model Review",
        description:
          "A structured review of your revenue model, unit economics, and scalability assumptions. Identify gaps before investors do.",
        price: "£900",
        priceGBP: 900,
        category: "Startup Advisory",
      },
      {
        slug: "gtm-strategy-review",
        title: "Go-To-Market Strategy Review",
        description:
          "Validate and sharpen your GTM approach. We pressure-test channels, pricing, ICP definition, and acquisition strategy.",
        price: "£1,200",
        priceGBP: 1200,
        category: "Startup Advisory",
      },
      {
        slug: "founder-advisory-session",
        title: "Founder Advisory Session",
        description:
          "A dedicated strategic session with an experienced advisor. Tackle your most critical decision with structured thinking and an outside perspective.",
        price: "£1,800",
        priceGBP: 1800,
        category: "Startup Advisory",
      },
      {
        slug: "startup-reframing-package",
        title: "Startup Reframing Package",
        description:
          "Full strategic repositioning for startups at an inflection point. Reframe your narrative, model, and positioning for the next stage of growth.",
        price: "£1,500",
        priceGBP: 1500,
        category: "Startup Advisory",
      },
      {
        slug: "business-content-package",
        title: "Business Content Package",
        description:
          "Strategic content for fundraising, partnerships, or market entry—including executive summaries, decks, and thought-leadership assets.",
        price: "£1,300",
        priceGBP: 1300,
        category: "Startup Advisory",
      },
    ],
  },
];

/** Flat list of all services, keyed by slug for O(1) lookup */
export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICE_CATEGORIES.flatMap((cat) => cat.services).map((s) => [s.slug, s]),
);
