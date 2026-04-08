export interface CaseStudy {
  slug: string;
  tag: string;
  client: string;
  headline: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: { value: string; label: string }[];
  service: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "luxury-skincare-germany",
    tag: "Export Market Entry",
    client: "UK Luxury Skincare Brand",
    headline: "From UK-only to three EU markets in six months",
    challenge:
      "A premium UK skincare brand with £4M ARR had no footprint outside the UK. Leadership had identified Germany, Netherlands, and Austria as potential markets but lacked the market intelligence and distribution contacts to move forward confidently.",
    approach:
      "We delivered a full export market entry package: country-level demand validation, regulatory compliance mapping for cosmetics, competitor price positioning analysis, and a prioritised distributor shortlist of 18 qualified partners across all three markets. We provided outreach scripts and intro support for the top six.",
    result:
      "The client signed two distribution agreements within four months and launched in Germany and Austria by month six. A third partnership in the Netherlands closed two months later.",
    metrics: [
      { value: "3", label: "New EU markets entered" },
      { value: "6 months", label: "Time to first distribution deal" },
      { value: "£1.2M", label: "Projected first-year EU revenue" },
    ],
    service: "Export Market Entry",
  },
  {
    slug: "edtech-saas-pivot",
    tag: "Startup Strategy",
    client: "EdTech SaaS Startup (UAE)",
    headline: "Avoiding a £400K pivot mistake with a startup diagnostic",
    challenge:
      "A UAE-based EdTech startup with 8 months of runway was about to rebuild their platform for a new customer segment after losing two enterprise accounts. The founding team was split on direction and needed outside clarity before committing.",
    approach:
      "We ran a full startup diagnostic over two weeks: product-market fit analysis across their existing customer base, churn interview synthesis, competitive positioning review, and a go-forward prioritisation framework. We stress-tested both the current direction and the proposed pivot against market data.",
    result:
      "The diagnostic revealed the churn was caused by onboarding friction, not product-market fit issues. The pivot was avoided. We delivered a 90-day retention improvement roadmap instead — the team saw churn drop from 18% to 7% monthly within one quarter.",
    metrics: [
      { value: "11%", label: "Monthly churn reduction" },
      { value: "£400K", label: "Estimated cost of avoided pivot" },
      { value: "2 weeks", label: "Diagnostic delivery time" },
    ],
    service: "Startup Diagnostic",
  },
  {
    slug: "retail-bi-dashboard",
    tag: "Technology Systems",
    client: "National Retail Chain (52 stores)",
    headline: "Giving a 52-store retail chain real-time operational intelligence",
    challenge:
      "The COO of a 52-store retail chain was making inventory and staffing decisions based on weekly Excel reports assembled manually by three analysts. There was no single view of performance across stores, and decisions were consistently 5–7 days behind actual trends.",
    approach:
      "We designed and built a connected BI dashboard system integrating POS data, inventory feeds, and labour scheduling. The architecture included a KPI framework co-designed with the operations team, automated data pipelines, and an executive summary view updated daily.",
    result:
      "The chain went from weekly reports to real-time dashboards. The three analysts were redeployed to commercial analysis. Operational waste in overstocking fell 22% in Q1 following launch.",
    metrics: [
      { value: "22%", label: "Reduction in overstocking waste" },
      { value: "Real-time", label: "From 5–7 day lag to live data" },
      { value: "3 FTE", label: "Analysts freed for higher-value work" },
    ],
    service: "Dashboard System Setup",
  },
  {
    slug: "textile-export-eu",
    tag: "Export Growth",
    client: "Turkish Textile Manufacturer",
    headline: "Scaling EU export revenue from €800K to €3.1M in 18 months",
    challenge:
      "A mid-sized Turkish textile manufacturer had a single EU buyer representing 90% of their export revenue — a dangerous concentration. They wanted to diversify across Germany, France, and Poland but had no structured approach to market development or buyer acquisition.",
    approach:
      "We deployed our Export Growth Program: a 12-month structured engagement including market entry sequencing, buyer intelligence across three verticals (fast fashion, workwear, private label), a trade show preparation package, and ongoing commercial strategy support.",
    result:
      "The client acquired seven new EU buyers over 14 months. Export revenue grew from €800K to €3.1M. The single-buyer concentration risk dropped from 90% to under 30%.",
    metrics: [
      { value: "€3.1M", label: "EU export revenue at 18 months" },
      { value: "7", label: "New EU buyers acquired" },
      { value: "90% → 28%", label: "Concentration risk reduction" },
    ],
    service: "Export Growth Program",
  },
  {
    slug: "nordic-food-distributor",
    tag: "Distributor Finder",
    client: "UK Premium Food & Beverage Brand",
    headline: "Six qualified Nordic distributors found in eight weeks",
    challenge:
      "A UK-based premium food brand wanted to expand into Sweden, Norway, Denmark, and Finland but had no distributor relationships and no team bandwidth to conduct the search themselves. Previous attempts through LinkedIn had yielded no qualified leads.",
    approach:
      "We mapped the full Nordic distribution landscape across grocery, premium food retail, and hospitality channels. After shortlisting 24 potential partners by financial stability, portfolio fit, and geographic reach, we delivered a qualified list of 10 with full profiles and direct contact details, plus outreach messaging tailored to each.",
    result:
      "The brand entered active conversations with six distributors. Three deals were signed within four months, covering Sweden, Norway, and Denmark. Finnish distribution followed in month seven.",
    metrics: [
      { value: "6", label: "Qualified distributors engaged" },
      { value: "3", label: "Signed partnerships in 4 months" },
      { value: "4 markets", label: "Nordic coverage achieved" },
    ],
    service: "Distributor Finder",
  },
  {
    slug: "london-real-estate-intelligence",
    tag: "Market Intelligence",
    client: "Premium Real Estate Developer",
    headline: "Intelligence that redirected a £45M development allocation",
    challenge:
      "A London-based developer was planning to commit £45M to a mixed-use scheme in a Zone 2 neighbourhood. Before the board approved, leadership wanted an independent intelligence report covering demand dynamics, buyer profile shifts, and competitive pipeline analysis.",
    approach:
      "We delivered a detailed real estate intelligence report covering 18 months of transaction data, planning approvals pipeline, demographic shifts, rental vs owner-occupier demand, and a direct comparison against five competing schemes under development nearby.",
    result:
      "The report identified an oversupply risk in the specific micro-market. The developer reallocated £20M to a Zone 3 opportunity we flagged as underserved. That project is now under construction with pre-sales at 68%.",
    metrics: [
      { value: "£20M", label: "Capital reallocated based on report" },
      { value: "68%", label: "Pre-sales on recommended project" },
      { value: "18 months", label: "Transaction data analysed" },
    ],
    service: "Market Intelligence Report",
  },
  {
    slug: "hr-saas-programmatic-seo",
    tag: "Technology Systems",
    client: "B2B HR SaaS Platform",
    headline: "3× organic traffic growth in 90 days via programmatic SEO",
    challenge:
      "A B2B HR SaaS platform was heavily dependent on paid acquisition, spending £28K/month on Google Ads. Their organic traffic had plateaued at 3,200 monthly sessions for 18 months. Leadership wanted a defensible acquisition channel that didn't depend on ad spend.",
    approach:
      "We delivered a Programmatic SEO Plan: full keyword universe mapping (4,800 terms), a page generation architecture targeting comparison, integration, and use-case pages, a content automation framework, and a 90-day technical implementation roadmap with milestone KPIs.",
    result:
      "The client's in-house dev team implemented the plan over 10 weeks. Organic sessions grew from 3,200 to 9,800 monthly. Organic-sourced trials increased 140%. Paid spend was reduced by 30%.",
    metrics: [
      { value: "3×", label: "Organic traffic growth in 90 days" },
      { value: "140%", label: "Increase in organic-sourced trials" },
      { value: "30%", label: "Reduction in paid ad spend" },
    ],
    service: "Programmatic SEO Plan",
  },
  {
    slug: "fintech-gtm-uk",
    tag: "Strategy & Growth",
    client: "FinTech Startup",
    headline: "A go-to-market strategy that secured £1.8M seed round",
    challenge:
      "A FinTech startup had strong technology but a poorly articulated go-to-market strategy. Investors consistently flagged the commercial narrative as a gap in their seed deck. The founders needed a credible, defensible GTM plan before their next fundraising push.",
    approach:
      "We conducted a full market sizing exercise, defined two prioritised customer segments with buyer journey maps, built a channel strategy across direct sales, partnership, and inbound, and co-developed the commercial narrative used in investor materials.",
    result:
      "The revised GTM strategy strengthened the seed deck significantly. The company closed a £1.8M seed round six weeks after finalising materials, with three investors citing the commercial clarity as a key factor.",
    metrics: [
      { value: "£1.8M", label: "Seed round closed" },
      { value: "6 weeks", label: "Time from revised deck to close" },
      { value: "3", label: "Investors citing commercial clarity" },
    ],
    service: "Go To Market Strategy",
  },
  {
    slug: "retail-loyalty-platform",
    tag: "Technology Systems",
    client: "Multi-Brand Retail Group",
    headline: "40% repeat purchase increase with a custom loyalty platform",
    challenge:
      "A multi-brand retail group with four complementary brands was running loyalty schemes independently per brand using disconnected systems. Customer overlap between brands was estimated at 35%, but there was no mechanism to drive cross-brand purchase behaviour.",
    approach:
      "We scoped and delivered a unified loyalty platform architecture connecting all four brands under a single points system. The solution included tiered membership logic, cross-brand redemption, and a CRM integration enabling targeted win-back and upsell campaigns.",
    result:
      "Repeat purchase rate across the group increased from 22% to 31% in the first two quarters. Cross-brand purchase behaviour, tracked for the first time, was recorded at 18% of active members.",
    metrics: [
      { value: "40%", label: "Increase in repeat purchase rate" },
      { value: "18%", label: "Cross-brand purchase behaviour" },
      { value: "4 brands", label: "Unified under one platform" },
    ],
    service: "Loyalty Platform",
  },
  {
    slug: "vc-due-diligence",
    tag: "Market Intelligence",
    client: "Growth-Stage VC Fund",
    headline: "Investment intelligence that shaped a £6M portfolio decision",
    challenge:
      "A growth-stage VC was evaluating a £6M follow-on investment in a portfolio company entering the UK B2B logistics software market. The partners needed independent market validation — they couldn't rely solely on the company's own projections.",
    approach:
      "We delivered a comprehensive market intelligence report covering UK logistics software spend (by segment and company size), the five key competing platforms, switching cost analysis, buyer interview synthesis from 12 target customers, and a 3-year market growth projection with bull/base/bear scenarios.",
    result:
      "The report validated the opportunity at the base case while identifying a pricing strategy gap the company had missed. The fund invested £6M with a modified term sheet incorporating the pricing recommendation. The portfolio company raised a further £14M Series B 11 months later.",
    metrics: [
      { value: "£6M", label: "Investment decision supported" },
      { value: "12", label: "Buyer interviews conducted" },
      { value: "£14M", label: "Series B raised by portfolio co." },
    ],
    service: "Market Intelligence Report",
  },
];
