import ServiceCategory from "./ServiceCategory";
import { SERVICE_CATEGORIES, SERVICES_BY_SLUG, SERVICES_BY_TITLE } from "@/lib/services";
import StartupAdvisoryCarousel from "./StartupAdvisoryCarousel";
import RealEstateCarousel from "./RealEstateCarousel";

const categories = [
  {
    index: 1,
    name: "SEO & Growth Intelligence",
    tagline:
      "Data-backed search strategy and technical SEO to drive compounding organic growth.",
    services: [
      {
        title: "SEO Audit + Optimization",
        description:
          "Everything in the SEO Audit, plus hands-on optimizations. We fix the issues and implement quick-win improvements directly.",
      },
      {
        title: "SEO Strategy & Consulting",
        description:
          "A full strategic SEO roadmap tailored to your industry, competitors, and growth objectives. Includes keyword strategy, content planning, and authority building.",
      },
      {
        title: "Programmatic SEO Plan",
        description:
          "Scalable organic growth architecture for SaaS and digital platforms. Build defensible traffic moats through structured, data-driven content systems.",
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
      },
      {
        title: "Market Research Report (Detailed)",
        description:
          "In-depth primary and secondary research delivering comprehensive market maps, buyer personas, and strategic entry recommendations.",
      },
      {
        title: "Business Intelligence Report (Basic)",
        description:
          "Structured business analysis covering performance benchmarks, competitive positioning, and operational insights.",
      },
      {
        title: "Business Intelligence Report (Medium)",
        description:
          "Advanced BI covering multi-market data synthesis, KPI modelling, and decision-support frameworks for leadership teams.",
      },
      {
        title: "Business Intelligence Report (Comprehensive)",
        description:
          "Board-ready strategic intelligence. Full competitive landscape, market sizing, financial benchmarks, and executive summary with strategic recommendations.",
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
          "Professionally designed pitch deck crafted to communicate your vision, traction, and market opportunity with precision and confidence.",
      },
      {
        title: "Business Model Review",
        description:
          "A structured review of your revenue model, unit economics, and scalability assumptions. Identify gaps before investors do.",
      },
      {
        title: "Go-To-Market Strategy Review",
        description:
          "Validate and sharpen your GTM approach. We pressure-test channels, pricing, ICP definition, and acquisition strategy.",
      },
      {
        title: "Founder Advisory Session",
        description:
          "A dedicated strategic session with an experienced advisor. Tackle your most critical decision with structured thinking and an outside perspective.",
      },
      {
        title: "Startup Reframing Package",
        description:
          "Full strategic repositioning for startups at an inflection point. Reframe your narrative, model, and positioning for the next stage of growth.",
      },
      {
        title: "Business Content Package",
        description:
          "Strategic content for fundraising, partnerships, or market entry—including executive summaries, decks, and thought-leadership assets.",
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
      },
      {
        title: "Investor Readiness Audit",
        description:
          "Pre-investment review of your pitch deck, traction metrics, financial model, and storytelling. Delivered as a detailed investor readiness report.",
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
      },
      {
        title: "VC Target List + Outreach Strategy",
        description:
          "A curated list of 50–100 matched VCs, a tailored outreach plan, and a warm intro strategy to maximise your chances of securing a first meeting.",
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
      },
      {
        title: "Competitive Intelligence Report",
        description:
          "In-depth analysis of competitor traffic, pricing, and strategy. Identify gaps, threats, and opportunities to sharpen your competitive edge.",
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
      },
      {
        title: "Monthly Founder Advisory",
        description:
          "Ongoing strategic advisory throughout the month — covering decision support, growth guidance, and sounding-board access when it matters most.",
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
      },
      {
        title: "Strategic Growth Blueprint",
        description:
          "Board-ready growth architecture for your company. Covers expansion plan, revenue model design, and a sequenced roadmap to the next stage of scale.",
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
      },
      {
        title: "AI Marketing Automation Plan",
        description:
          "A full growth automation plan powered by AI tools and workflows — covering lead generation, nurture sequences, and performance reporting.",
      },
    ],
  },
  {
    index: 10,
    name: "Export Consulting Services",
    tagline:
      "Strategic export intelligence and market-entry support to grow your business across borders.",
    services: [
      {
        title: "Export Market Scan",
        description:
          "Targeted analysis of demand in your chosen export market — covering competitor overview, import statistics, and identification of potential distributor profiles.",
      },
      {
        title: "Export Market Entry Strategy",
        description:
          "Full market analysis with pricing benchmark, distributor model selection, and a clear go-to-market roadmap to launch successfully in a new market.",
      },
      {
        title: "Export Expansion Blueprint",
        description:
          "Multi-country expansion strategy covering distributor network design, logistics and pricing structure, and a 12-month export roadmap for sustainable international growth.",
      },
      {
        title: "Distributor Finder Package",
        description:
          "Identification of qualified potential distributors in your target market, including a curated outreach list, contact intelligence, and a warm introduction strategy.",
      },
      {
        title: "Export Sales System Setup",
        description:
          "End-to-end export sales process design — including a distributor pipeline system, outreach templates, and a CRM export workflow to convert distributor leads at scale.",
      },
    ],
  },
  {
    index: 11,
    name: "Export Growth Consulting",
    tagline:
      "Strategic international expansion advisory for manufacturers and exporters looking to build sustainable global sales.",
    services: [
      {
        title: "Export Strategy Intensive",
        description:
          "Export readiness audit, target market prioritization, pricing and margin structure design, and distributor model design. Delivered as a comprehensive Export Strategy Report with a market prioritization framework. Timeline: 4–6 weeks.",
      },
      {
        title: "International Market Launch",
        description:
          "Deep target country analysis, distributor targeting strategy, import structure analysis, go-to-market export roadmap, and sales channel mapping. Delivered as an International Market Launch Plan with a distributor strategy framework. Timeline: 6–8 weeks.",
      },
      {
        title: "Global Export Engine",
        description:
          "Multi-country expansion plan, distributor network architecture, export sales system design, CRM pipeline model, export pricing optimization, and a 12-month export growth roadmap. Delivered as a Global Export Growth Blueprint. Timeline: 8–10 weeks.",
      },
      {
        title: "Global Market Expansion Program",
        description:
          "End-to-end global expansion strategy covering distributor acquisition advisory, export sales architecture, and ongoing strategic decision advisory for founders and executives. Delivered as a Global Export Strategy Framework with a full expansion roadmap. Timeline: 3–6 month advisory engagement.",
      },
    ],
  },
  {
    index: 12,
    name: "Due Diligence Services",
    tagline:
      "Rigorous market and competitive intelligence reports for investors and venture capital firms evaluating opportunities.",
    services: [
      {
        title: "Startup Due Diligence Report",
        description:
          "Comprehensive due diligence on a startup's market position, competitive landscape, unit economics, and investment risk. Designed to support investor decision-making with evidence-based analysis.",
      },
      {
        title: "Market Due Diligence",
        description:
          "In-depth validation of a target market — covering market size, growth dynamics, customer segmentation, and demand signals to underpin investment or entry decisions.",
      },
      {
        title: "Competitive Due Diligence",
        description:
          "Detailed competitive intelligence report mapping key players, their positioning, capabilities, and strategic vulnerabilities to assess a target's competitive moat.",
      },
      {
        title: "Investment Opportunity Brief",
        description:
          "Concise investment brief covering market validation, competitor overview, unit economics, and key risk factors — structured for VC and PE review.",
      },
    ],
  },
  {
    index: 13,
    name: "Strategic Advisory Retainers",
    tagline:
      "Ongoing strategic counsel for founders, leadership teams, and boards navigating growth and critical decisions.",
    services: [
      {
        title: "Startup Strategic Advisory",
        description:
          "Monthly strategic advisory for early-stage founders. Covers monthly strategy sessions, decision advisory, growth planning, and board-level strategic thinking.",
      },
      {
        title: "Growth Strategy Advisory",
        description:
          "Dedicated monthly advisory engagement for scaling companies. Includes structured strategy calls, growth planning frameworks, and ongoing decision support.",
      },
      {
        title: "Executive Strategic Advisory",
        description:
          "Senior-level strategic advisory for executives and leadership teams. Provides board-level thinking, high-stakes decision support, and executive growth strategy.",
      },
    ],
  },
  {
    index: 14,
    name: "M&A Intelligence",
    tagline:
      "Acquisition targeting and market consolidation intelligence for scale-ups and investment teams.",
    services: [
      {
        title: "Acquisition Target Analysis",
        description:
          "Identification and analysis of strategic acquisition targets — covering company profiles, financials, competitive positioning, and fit assessment.",
      },
      {
        title: "Market Consolidation Map",
        description:
          "Strategic overview of consolidation dynamics within a sector — mapping acquisition activity, fragmentation opportunities, and platform-building potential.",
      },
      {
        title: "Strategic Acquisition Brief",
        description:
          "End-to-end acquisition intelligence brief covering target identification, competitor buyout opportunities, and a strategic rationale for consolidation plays.",
      },
    ],
  },
  {
    index: 15,
    name: "Corporate Strategy Packages",
    tagline:
      "Enterprise-grade strategy engagements for established businesses pursuing growth, transformation, or new markets.",
    services: [
      {
        title: "Corporate Growth Strategy",
        description:
          "Structured growth strategy for established companies — covering revenue expansion levers, market positioning, and a sequenced roadmap for the next phase of scale.",
      },
      {
        title: "New Market Strategy",
        description:
          "Strategic blueprint for entering a new market segment or geography — including market sizing, competitive landscape, entry model design, and go-to-market roadmap.",
      },
      {
        title: "Digital Transformation Blueprint",
        description:
          "Comprehensive digital transformation strategy covering technology adoption priorities, process redesign, and a phased implementation roadmap aligned to business objectives.",
      },
    ],
  },
  {
    index: 16,
    name: "Founder Personal Brand Services",
    tagline:
      "Authority-building strategies that position founders as credible voices in their industry.",
    services: [
      {
        title: "Founder Personal Brand Strategy",
        description:
          "A complete personal brand strategy for founders — covering narrative positioning, target audience definition, content pillars, and a channel-specific growth plan.",
      },
      {
        title: "LinkedIn Authority System",
        description:
          "A structured LinkedIn growth system to build audience, establish authority, and drive inbound opportunities — including profile optimisation, content strategy, and an engagement framework.",
      },
      {
        title: "Founder Thought Leadership Plan",
        description:
          "A 90-day thought leadership roadmap for founders — covering topic strategy, content formats, publishing cadence, and PR and speaking opportunity targeting.",
      },
    ],
  },
  {
    index: 17,
    name: "AI Strategy Consulting",
    tagline:
      "Strategic AI adoption and workflow architecture for businesses ready to embed intelligence into their operations.",
    services: [
      {
        title: "AI Adoption Strategy",
        description:
          "A prioritised AI adoption roadmap tailored to your business — identifying highest-impact use cases, build vs buy decisions, and a phased implementation plan.",
      },
      {
        title: "AI Workflow Architecture",
        description:
          "Design of AI-powered workflows to automate and accelerate core business processes — covering tool selection, integration architecture, and workflow blueprints.",
      },
      {
        title: "AI Business Transformation Plan",
        description:
          "A comprehensive AI transformation strategy covering organisational readiness, technology adoption across functions, and a multi-phase roadmap to become an AI-native business.",
      },
    ],
  },
  {
    index: 18,
    name: "Real Estate Intelligence",
    tagline:
      "Strategic real estate intelligence designed to help clients understand local markets, compare locations, and make better-informed decisions.",
    services: [
      {
        title: "Real Estate Market Scan",
        description:
          "City/neighborhood demand analysis, property price trends, rental market snapshot, and area demand analysis. Deliverable: Real Estate Market Snapshot Report.",
      },
      {
        title: "Real Estate Investment Intelligence",
        description:
          "Market modelling, rental market analysis, neighborhood scoring system, comparable property benchmarking, and demand & absorption analysis. Deliverable: Market Intelligence Report.",
      },
      {
        title: "Strategic Property Acquisition Blueprint",
        description:
          "Location comparison, market trend analysis, risk mapping, and acquisition planning support. Deliverable: Strategic Property Market Blueprint.",
      },
    ],
  },
  {
    index: 19,
    name: "Customer Loyalty Platforms",
    tagline:
      "Data-driven loyalty and customer engagement platforms designed for retail chains, coffee brands, supermarkets, and fuel station networks.",
    services: [
      {
        title: "Coffee Chain Loyalty Platform",
        description:
          "Branded loyalty mobile app, digital stamp / reward system, customer membership system, push notification campaigns, and customer analytics dashboard. Best for: coffee chains, café franchises, dessert brands.",
      },
      {
        title: "Supermarket Loyalty Platform",
        description:
          "Points-based loyalty system, digital coupon campaigns, purchase behavior analytics, personalised offers engine, and customer segmentation tools. Best for: supermarket chains, grocery retailers, hypermarkets.",
      },
      {
        title: "Fuel Station Loyalty Platform",
        description:
          "Fuel rewards system, digital membership app, transaction tracking system, cross-promotion campaigns, and loyalty analytics dashboard. Best for: petrol station networks, mobility brands, convenience retail chains.",
      },
    ],
  },
  {
    index: 20,
    name: "Dashboard & Data Systems",
    tagline:
      "Decision-focused dashboards that simplify complex data, integrate financial APIs, and give leadership teams real-time visibility.",
    services: [
      {
        title: "Executive Dashboard Setup",
        description:
          "KPI dashboard design, simplified data visualisation, integration of basic data sources, executive-friendly UI layout, and decision-focused metrics. Deliverables: Executive Dashboard Interface & KPI tracking framework. Best for: startups, SaaS founders, operational teams.",
      },
      {
        title: "Financial Data Dashboard",
        description:
          "Financial API integrations, revenue tracking dashboards, cashflow visualisation, financial performance metrics, and automated reporting. Deliverables: Financial Intelligence Dashboard & financial metrics framework. Best for: fintech companies, CFO teams, subscription businesses.",
      },
      {
        title: "Enterprise Intelligence Dashboard",
        description:
          "Multi-source data architecture, CRM / ERP / marketing data integration, executive-level reporting dashboards, advanced analytics visualisations, and operational intelligence system. Deliverables: Enterprise Intelligence Dashboard & data architecture blueprint. Best for: scaling companies, enterprise teams, multi-department organisations.",
      },
    ],
  },
];

type ListedService = { title: string; description: string; slug?: string; price?: string };

/**
 * Homepage listing: a service shows a price and a checkout link only when it exists in
 * `services.ts` (the single source of truth for what Stripe can charge). Everything else
 * is quote-only and carries no price.
 */
function homepageCategories() {
  return categories.map((cat) => {
    const services: ListedService[] = cat.services.map((svc) => {
      const payable = SERVICES_BY_TITLE[svc.title];
      return payable
        ? { title: svc.title, description: svc.description, slug: payable.slug, price: payable.price }
        : { title: svc.title, description: svc.description };
    });
    if (cat.index === 1) {
      const audit = SERVICES_BY_SLUG["seo-audit"];
      services.unshift({ title: audit.title, description: audit.description, slug: audit.slug, price: audit.price });
    }
    return { ...cat, services };
  });
}

export default function ServicesSection({
  showCheckoutLinks = false,
}: {
  showCheckoutLinks?: boolean;
}) {
  return (
    <section
      id="services"
      className="bg-white py-14 md:py-20 lg:py-32 border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-10 md:mb-14 lg:mb-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 max-w-xl">
            Strategic services for every stage of growth.
          </h2>
        </div>

        {(showCheckoutLinks ? SERVICE_CATEGORIES : homepageCategories()).map((cat) =>
          !showCheckoutLinks && cat.index === 3 ? (
            <StartupAdvisoryCarousel key={cat.index} />
          ) : !showCheckoutLinks && cat.index === 18 ? (
            <RealEstateCarousel key={cat.index} />
          ) : (
            <ServiceCategory
              key={cat.index}
              index={cat.index}
              name={cat.name}
              tagline={cat.tagline}
              services={cat.services}
            />
          ),
        )}
      </div>
    </section>
  );
}
