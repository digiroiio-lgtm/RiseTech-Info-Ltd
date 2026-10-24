export interface Report {
  slug: string;
  category: string;
  title: string;
  description: string;
  priceGBP: number;
  pages: number;
  publishedDate: string;
  previewPoints: string[];
  coverTopics: string[];
}

export const reports: Report[] = [
  {
    slug: "ai-market-intelligence-report-2026",
    category: "Market Intelligence",
    title: "AI Market Intelligence Report 2026",
    description:
      "A 45-page institutional-grade market intelligence report covering the global AI landscape, investment flows, sector-by-sector analysis, and strategic recommendations for founders, operators, and investors.",
    priceGBP: 1500,
    pages: 45,
    publishedDate: "2026-04-01",
    previewPoints: [
      "Global AI market sizing by layer: infrastructure, software, and services",
      "Investment flow analysis: which sectors attracted the most capital in the last 12 months",
      "Vertical breakdown: FinTech AI, HealthTech AI, LegalTech AI, HR AI — opportunity and saturation ratings",
      "Geographic opportunity map: North America vs Europe vs APAC by sub-sector",
      "Competitive landscape: 40 key players mapped by capability and market position",
      "3-year growth projections with bull/base/bear scenarios",
    ],
    coverTopics: [
      "Market Sizing & Segmentation",
      "Investment Flow Analysis",
      "Vertical Sector Breakdown",
      "Geographic Opportunity Map",
      "Competitive Landscape",
      "3-Year Growth Projections",
      "Strategic Entry Recommendations",
    ],
  },
  {
    slug: "saas-gtm-playbook-report",
    category: "Startup Strategy",
    title: "SaaS Go-To-Market Playbook: 2026 Edition",
    description:
      "A 38-page operational playbook covering proven GTM frameworks for B2B SaaS companies at pre-revenue through £1M ARR. Includes ICP definition frameworks, channel sequencing models, and case study data from 15 engagements.",
    priceGBP: 1000,
    pages: 38,
    publishedDate: "2026-03-15",
    previewPoints: [
      "ICP definition framework with scoring matrix and validation methodology",
      "Channel sequencing model: when to layer in content, paid, and partnership",
      "Sales process blueprint for founder-led selling",
      "Pricing strategy frameworks with SaaS benchmark data",
      "15 real GTM case studies with anonymised metrics",
    ],
    coverTopics: [
      "ICP Definition & Validation",
      "Channel Sequencing Model",
      "Founder-Led Sales Playbook",
      "Pricing Strategy Frameworks",
      "GTM Case Studies",
      "Common GTM Failures & Fixes",
    ],
  },
  {
    slug: "uk-real-estate-intelligence-report-2026",
    category: "Market Intelligence",
    title: "UK Real Estate Market Intelligence Report 2026",
    description:
      "A 52-page investment-grade analysis of the UK residential and commercial real estate market, covering demand dynamics, regional pricing trends, regulatory pipeline, and forward-looking opportunity identification.",
    priceGBP: 1800,
    pages: 52,
    publishedDate: "2026-02-28",
    previewPoints: [
      "UK residential price trend analysis by region and property type (2023–2026)",
      "Rental demand dynamics: where supply/demand imbalance creates opportunity",
      "Commercial real estate: office vs logistics vs retail — winners and losers",
      "Planning approvals pipeline: major schemes under development by area",
      "Regulatory changes and their impact on development economics",
      "5 micro-market opportunities identified with supporting data",
    ],
    coverTopics: [
      "Residential Price Trends",
      "Rental Demand Dynamics",
      "Commercial Real Estate Analysis",
      "Planning Approvals Pipeline",
      "Regulatory Impact Assessment",
      "Micro-Market Opportunity Map",
      "Investment Recommendations",
    ],
  },
];
