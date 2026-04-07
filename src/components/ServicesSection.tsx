import ServiceCategory from "./ServiceCategory";

const categories = [
  {
    index: 1,
    name: "SEO & Growth Intelligence",
    tagline:
      "Data-backed search strategy and technical SEO to drive compounding organic growth.",
    services: [
      {
        title: "SEO Audit",
        description:
          "A comprehensive audit of your site's technical health, on-page signals, and backlink profile. Identify what's holding back your organic growth.",
        price: "£100",
      },
      {
        title: "SEO Audit + Optimization",
        description:
          "Everything in the SEO Audit, plus hands-on optimizations. We fix the issues and implement quick-win improvements directly.",
        price: "£250",
      },
      {
        title: "SEO Strategy & Consulting",
        description:
          "A full strategic SEO roadmap tailored to your industry, competitors, and growth objectives. Includes keyword strategy, content planning, and authority building.",
        price: "£500",
      },
      {
        title: "Programmatic SEO Plan",
        description:
          "Scalable organic growth architecture for SaaS and digital platforms. Build defensible traffic moats through structured, data-driven content systems.",
        price: "£1,000",
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
        title: "Market Research Report (Basic)",
        description:
          "Targeted market analysis covering segment size, competitive landscape, and key trends to validate a business opportunity.",
        price: "£1,500",
      },
      {
        title: "Market Research Report (Detailed)",
        description:
          "In-depth primary and secondary research delivering comprehensive market maps, buyer personas, and strategic entry recommendations.",
        price: "£3,000",
      },
      {
        title: "Business Intelligence Report (Basic)",
        description:
          "Structured business analysis covering performance benchmarks, competitive positioning, and operational insights.",
        price: "£1,000",
      },
      {
        title: "Business Intelligence Report (Medium)",
        description:
          "Advanced BI covering multi-market data synthesis, KPI modelling, and decision-support frameworks for leadership teams.",
        price: "£2,000",
      },
      {
        title: "Business Intelligence Report (Comprehensive)",
        description:
          "Board-ready strategic intelligence. Full competitive landscape, market sizing, financial benchmarks, and executive summary with strategic recommendations.",
        price: "£5,000",
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
        title: "Pitch Deck Design & Review",
        description:
          "Investor-grade pitch deck crafted to communicate your vision, traction, and market opportunity with precision and confidence.",
        price: "£600",
      },
      {
        title: "Business Model Review",
        description:
          "A structured review of your revenue model, unit economics, and scalability assumptions. Identify gaps before investors do.",
        price: "£900",
      },
      {
        title: "Go-To-Market Strategy Review",
        description:
          "Validate and sharpen your GTM approach. We pressure-test channels, pricing, ICP definition, and acquisition strategy.",
        price: "£1,200",
      },
      {
        title: "Founder Advisory Session",
        description:
          "A dedicated strategic session with an experienced advisor. Tackle your most critical decision with structured thinking and an outside perspective.",
        price: "£1,800",
      },
      {
        title: "Startup Reframing Package",
        description:
          "Full strategic repositioning for startups at an inflection point. Reframe your narrative, model, and positioning for the next stage of growth.",
        price: "£1,500",
      },
      {
        title: "Business Content Package",
        description:
          "Strategic content for fundraising, partnerships, or market entry—including executive summaries, decks, and thought-leadership assets.",
        price: "£1,300",
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 lg:mb-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 max-w-xl">
            Strategic services for every stage of growth.
          </h2>
        </div>

        {categories.map((cat) => (
          <ServiceCategory
            key={cat.index}
            index={cat.index}
            name={cat.name}
            tagline={cat.tagline}
            services={cat.services}
          />
        ))}
      </div>
    </section>
  );
}
