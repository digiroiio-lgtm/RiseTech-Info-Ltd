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
  {
    index: 4,
    name: "Startup Diagnostics",
    tagline:
      "Structured health checks and investor-readiness audits for early-stage startups.",
    services: [
      {
        title: "Startup Health Diagnostic",
        description:
          "In-depth analysis of your startup across product, market, team, and traction. Delivered as a 10-page startup health report that surfaces critical gaps and quick wins.",
        price: "£750",
      },
      {
        title: "Investor Readiness Audit",
        description:
          "Pre-investment review of your pitch deck, traction metrics, financial model, and storytelling. Delivered as a detailed investor readiness report.",
        price: "£1,200",
      },
    ],
  },
  {
    index: 5,
    name: "Fundraising Services",
    tagline:
      "End-to-end fundraising support — from strategy to investor outreach.",
    services: [
      {
        title: "Fundraising Strategy Plan",
        description:
          "Full investment strategy covering valuation approach, investor targeting, round structure, and fundraising narrative to position your raise for success.",
        price: "£2,000",
      },
      {
        title: "VC Target List + Outreach Strategy",
        description:
          "A curated list of 50–100 matched VCs, a tailored outreach plan, and a warm intro strategy to maximise your chances of securing a first meeting.",
        price: "£1,500",
      },
    ],
  },
  {
    index: 6,
    name: "Growth & Strategy",
    tagline:
      "Sharp positioning and competitive intelligence to outmanoeuvre your market.",
    services: [
      {
        title: "Product Positioning Strategy",
        description:
          "Redesign your product's position in the market. Covers ICP definition, core messaging, and differentiation to sharpen how buyers perceive your value.",
        price: "£1,200",
      },
      {
        title: "Competitive Intelligence Report",
        description:
          "In-depth analysis of competitor traffic, pricing, and strategy. Identify gaps, threats, and opportunities to sharpen your competitive edge.",
        price: "£1,800",
      },
    ],
  },
  {
    index: 7,
    name: "Founder Coaching",
    tagline:
      "Strategic clarity and ongoing guidance for founders navigating high-stakes decisions.",
    services: [
      {
        title: "Founder Strategy Session",
        description:
          "A focused 60-minute strategy call with an experienced advisor. Tackle your most pressing challenge with structured thinking and an outside perspective.",
        price: "£500",
      },
      {
        title: "Monthly Founder Advisory",
        description:
          "Ongoing strategic advisory throughout the month — covering decision support, growth guidance, and sounding-board access when it matters most.",
        price: "£3,000 / month",
      },
    ],
  },
  {
    index: 8,
    name: "Premium Strategy Services",
    tagline:
      "High-conviction strategic blueprints for companies ready to scale or expand.",
    services: [
      {
        title: "Market Entry Strategy",
        description:
          "Comprehensive strategy for entering a new country or market — covering positioning, channels, partnerships, regulatory considerations, and go-to-market sequencing.",
        price: "£3,500",
      },
      {
        title: "Strategic Growth Blueprint",
        description:
          "Board-ready growth architecture for your company. Covers expansion plan, revenue model design, and a sequenced roadmap to the next stage of scale.",
        price: "£5,000",
      },
    ],
  },
  {
    index: 9,
    name: "AI & Automation",
    tagline:
      "AI-powered systems to automate content, marketing, and growth operations.",
    services: [
      {
        title: "AI Content Engine Setup",
        description:
          "Design and setup of an SEO-driven content automation system. Combines AI tooling with structured workflows to scale your content output efficiently.",
        price: "£1,500",
      },
      {
        title: "AI Marketing Automation Plan",
        description:
          "A full growth automation plan powered by AI tools and workflows — covering lead generation, nurture sequences, and performance reporting.",
        price: "£2,000",
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
