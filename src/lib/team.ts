export type Tab = "executive" | "management" | "board";

export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  title: string;
  roleDescriptor: string;
  practiceArea: string;
  region: string;
  location: string;
  bio: string;
  expertise: string[];
  sectors: string[];
  tab: Tab;
}

export const teamMembers: TeamMember[] = [
  // Executive Team
  {
    id: "oy",
    initials: "OY",
    name: "Oguz Y.",
    title: "Founder & Managing Director",
    roleDescriptor:
      "Leads firm strategy, client advisory, and international market entry practice.",
    practiceArea: "Export Strategy",
    region: "EMEA",
    location: "London, UK",
    bio: "Oguz founded RiseTech after more than a decade structuring international trade strategies for mid-market and growth-stage businesses. He has advised over 30 companies entering EU, MENA, and Asian markets, and served as an export advisor to UKEF-backed programmes. His work sits at the intersection of commercial strategy, distribution architecture, and investor readiness.",
    expertise: ["Export Market Entry", "Market Intelligence", "Investor Advisory", "Trade Strategy"],
    sectors: ["Export", "Manufacturing", "Consumer Goods", "FinTech"],
    tab: "executive",
  },
  {
    id: "hb",
    initials: "HB",
    name: "Huseyin B.",
    title: "Head of Technology & Systems",
    roleDescriptor:
      "Oversees technology delivery, data infrastructure, and digital growth architecture.",
    practiceArea: "Technology & Systems",
    region: "EMEA",
    location: "London, UK",
    bio: "Huseyin leads the firm's technology practice, specialising in business intelligence architecture, dashboard systems, and programmatic growth infrastructure. He has built BI and data systems for national retail chains, logistics groups, and SaaS platforms, and is the principal architect behind RiseTech's loyalty platform and SEO delivery capabilities.",
    expertise: ["BI & Dashboard Systems", "Programmatic SEO", "Data Engineering", "Loyalty Platforms"],
    sectors: ["Retail", "Logistics", "SaaS", "EdTech"],
    tab: "executive",
  },
  {
    id: "do",
    initials: "DO",
    name: "Dimitri O.",
    title: "Senior Strategy Analyst",
    roleDescriptor:
      "Leads competitive intelligence, market sizing, and go-to-market strategy engagements.",
    practiceArea: "Strategy & Intelligence",
    region: "EMEA",
    location: "London, UK",
    bio: "Dimitri brings Big Four consulting rigour to every engagement. An MBA graduate of London Business School, he specialises in competitive intelligence, scenario modelling, and go-to-market strategy. He has led market entry analyses for growth-stage companies across Europe and the Middle East, and advises VC-backed startups on commercial positioning.",
    expertise: ["Competitive Intelligence", "Market Sizing", "Go-To-Market Strategy", "Scenario Modelling"],
    sectors: ["VC & Private Equity", "SaaS", "FinTech", "Professional Services"],
    tab: "executive",
  },
  {
    id: "sv",
    initials: "SV",
    name: "Sarah V.",
    title: "Director, Client Advisory",
    roleDescriptor:
      "Heads client relationships and delivery oversight across all advisory mandates.",
    practiceArea: "Client Advisory",
    region: "EMEA",
    location: "London, UK",
    bio: "Sarah has spent twelve years in client-facing advisory roles across management consulting and financial services. She oversees the full client engagement lifecycle at RiseTech, from initial scope definition to final delivery. Prior to joining, she held director-level positions at two FTSE 250 advisory firms.",
    expertise: ["Client Relationship Management", "Engagement Scoping", "Commercial Strategy", "Delivery Oversight"],
    sectors: ["Financial Services", "Real Estate", "Professional Services"],
    tab: "executive",
  },
  {
    id: "mk",
    initials: "MK",
    name: "Marcus K.",
    title: "Head of Market Intelligence",
    roleDescriptor:
      "Leads all primary and secondary research, sector analysis, and intelligence product delivery.",
    practiceArea: "Market Intelligence",
    region: "EMEA",
    location: "London, UK",
    bio: "Marcus heads RiseTech's market intelligence practice, directing the research, analysis, and delivery of all intelligence reports and sector briefings. With a background in economic research and institutional investment analysis, he brings structured analytical frameworks to complex commercial questions. He holds an MSc in Economics from University College London.",
    expertise: ["Market Intelligence Reports", "Sector Analysis", "Economic Research", "Investment Due Diligence"],
    sectors: ["VC & Private Equity", "Real Estate", "Energy", "Industrial"],
    tab: "executive",
  },

  // Senior Management
  {
    id: "ap",
    initials: "AP",
    name: "Anika P.",
    title: "Managing Director, Export Growth",
    roleDescriptor:
      "Leads the Export Growth Programme practice and distributor network development.",
    practiceArea: "Export Strategy",
    region: "EMEA",
    location: "London, UK",
    bio: "Anika manages RiseTech's Export Growth Programme delivery, overseeing structured 12-month engagements for manufacturers and consumer brands scaling into European markets. She has a background in international trade finance and distribution strategy, with prior experience at a global trade advisory firm serving emerging-market exporters.",
    expertise: ["Export Growth Programmes", "Distributor Development", "Trade Finance", "Market Entry Sequencing"],
    sectors: ["Export", "Manufacturing", "FMCG", "Textile"],
    tab: "management",
  },
  {
    id: "jt",
    initials: "JT",
    name: "James T.",
    title: "Director, Business Intelligence",
    roleDescriptor:
      "Delivers BI architecture and dashboard systems for enterprise and mid-market clients.",
    practiceArea: "Technology & Systems",
    region: "EMEA",
    location: "London, UK",
    bio: "James leads the design and delivery of business intelligence platforms for RiseTech's enterprise and mid-market clients. He has architected dashboard systems deployed across over 50 store networks and multi-brand retail groups, specialising in connecting fragmented operational data into coherent, decision-ready intelligence layers.",
    expertise: ["BI Architecture", "Dashboard Systems", "Data Visualisation", "Retail Analytics"],
    sectors: ["Retail", "Logistics", "Real Estate"],
    tab: "management",
  },
  {
    id: "rn",
    initials: "RN",
    name: "Rania N.",
    title: "Director, Startup Strategy",
    roleDescriptor:
      "Leads startup diagnostics, GTM strategy, and early-stage commercial advisory.",
    practiceArea: "Startup Strategy",
    region: "EMEA",
    location: "London, UK",
    bio: "Rania oversees RiseTech's startup-facing practice, leading GTM strategy engagements and startup diagnostics for VC-backed and pre-Series A companies. She has advised founders across FinTech, EdTech, and SaaS on product-market fit, go-to-market sequencing, and fundraising narrative. Prior to RiseTech she was a principal at a European early-stage VC fund.",
    expertise: ["GTM Strategy", "Startup Diagnostics", "Fundraising Narrative", "Product-Market Fit"],
    sectors: ["FinTech", "EdTech", "SaaS", "VC & Private Equity"],
    tab: "management",
  },
  {
    id: "cf",
    initials: "CF",
    name: "Carlos F.",
    title: "Managing Director, MENA Markets",
    roleDescriptor:
      "Leads client development and market intelligence across MENA and Gulf markets.",
    practiceArea: "Export Strategy",
    region: "MENA",
    location: "Dubai, UAE",
    bio: "Carlos heads RiseTech's MENA practice from Dubai, advising clients on market entry into the Gulf and broader Middle East. He has spent over eight years in commercial advisory and trade strategy in the region, with deep expertise in UAE, Saudi Arabia, and Egypt. He previously held a regional director role at a UK trade promotion body.",
    expertise: ["MENA Market Entry", "Gulf Trade Strategy", "Regulatory Navigation", "Distributor Development"],
    sectors: ["Export", "Consumer Goods", "Real Estate", "Industrial"],
    tab: "management",
  },
  {
    id: "lw",
    initials: "LW",
    name: "Lydia W.",
    title: "Director, Programmatic SEO & Growth",
    roleDescriptor:
      "Leads programmatic SEO strategy and organic growth infrastructure for SaaS and B2B clients.",
    practiceArea: "Technology & Systems",
    region: "EMEA",
    location: "London, UK",
    bio: "Lydia directs RiseTech's programmatic SEO practice, designing and delivering data-driven organic growth programmes for SaaS, marketplace, and B2B clients. She has overseen engagements that tripled organic traffic within 90 days and built content infrastructure serving over 200,000 pages of programmatic output.",
    expertise: ["Programmatic SEO", "Organic Growth Strategy", "Content Architecture", "SaaS Growth"],
    sectors: ["SaaS", "B2B Technology", "MarTech"],
    tab: "management",
  },
  {
    id: "tb",
    initials: "TB",
    name: "Thomas B.",
    title: "Senior Manager, Real Estate Intelligence",
    roleDescriptor:
      "Leads real estate market intelligence and development intelligence engagements.",
    practiceArea: "Market Intelligence",
    region: "EMEA",
    location: "London, UK",
    bio: "Thomas leads RiseTech's real estate intelligence practice, delivering market analysis, development feasibility, and capital allocation intelligence for London and regional property developers. His work has directly informed investment decisions exceeding GBP 60M in aggregate. He holds an MSc in Urban Planning from UCL.",
    expertise: ["Real Estate Intelligence", "Development Feasibility", "Capital Allocation Analysis", "Market Mapping"],
    sectors: ["Real Estate", "Construction", "Property Investment"],
    tab: "management",
  },
  {
    id: "pe",
    initials: "PE",
    name: "Priya E.",
    title: "Manager, Strategy & Research",
    roleDescriptor:
      "Supports strategy delivery across GTM, market intelligence, and competitive research mandates.",
    practiceArea: "Strategy & Intelligence",
    region: "EMEA",
    location: "London, UK",
    bio: "Priya works across the strategy and intelligence practice, contributing analytical rigour to GTM engagements, market intelligence reports, and competitive landscape analysis. She joined RiseTech from a Big Four advisory team where she specialised in commercial due diligence. She holds a First Class degree in Economics from the University of Edinburgh.",
    expertise: ["Commercial Due Diligence", "Market Research", "Competitive Analysis", "Strategy Execution"],
    sectors: ["FinTech", "SaaS", "Professional Services", "Consumer"],
    tab: "management",
  },

  // Board of Directors
  {
    id: "nb",
    initials: "NB",
    name: "Nicholas B.",
    title: "Non-Executive Director",
    roleDescriptor:
      "Brings four decades of international trade and institutional finance experience to the board.",
    practiceArea: "Board of Directors",
    region: "EMEA",
    location: "London, UK",
    bio: "Nicholas serves as Non-Executive Director, bringing four decades of experience in international trade finance, structured export credit, and institutional advisory. He held senior positions at two of the UK's largest export credit agencies and has advised government trade bodies across eight countries. He chairs the firm's risk and governance committee.",
    expertise: ["Export Credit", "Trade Finance", "Governance", "Institutional Advisory"],
    sectors: ["Export", "Financial Services", "Government"],
    tab: "board",
  },
  {
    id: "es",
    initials: "ES",
    name: "Elena S.",
    title: "Senior Independent Director",
    roleDescriptor:
      "Chair of the audit committee; brings extensive CFO and capital markets experience.",
    practiceArea: "Board of Directors",
    region: "EMEA",
    location: "Zurich, Switzerland",
    bio: "Elena chairs RiseTech's audit and remuneration committees. She has served as CFO of two European mid-cap technology companies and brings deep expertise in capital markets, financial governance, and investor relations. She holds a doctorate in Financial Economics from the University of Zurich.",
    expertise: ["Financial Governance", "Capital Markets", "Investor Relations", "Audit Oversight"],
    sectors: ["Financial Services", "Technology", "Private Equity"],
    tab: "board",
  },
  {
    id: "ra",
    initials: "RA",
    name: "Dr. Rashid A.",
    title: "Strategic Advisor & Board Observer",
    roleDescriptor:
      "Advises on MENA strategy and serves as board observer representing regional growth interests.",
    practiceArea: "Board of Directors",
    region: "MENA",
    location: "Abu Dhabi, UAE",
    bio: "Dr. Rashid serves as a strategic advisor and board observer, contributing expertise in Gulf markets, sovereign investment strategy, and cross-border commercial development. He holds a PhD in International Economics from Georgetown University and has advised multiple ministries of trade and sovereign wealth funds across the GCC.",
    expertise: ["MENA Strategy", "Sovereign Investment", "Cross-Border Commerce", "Regulatory Affairs"],
    sectors: ["Government", "Export", "Real Estate", "Financial Services"],
    tab: "board",
  },
  {
    id: "pg",
    initials: "PG",
    name: "Patricia G.",
    title: "Non-Executive Director",
    roleDescriptor:
      "Former management consulting Partner; leads the board's advisory on commercial strategy and growth.",
    practiceArea: "Board of Directors",
    region: "Americas",
    location: "New York, USA",
    bio: "Patricia brings twenty years of management consulting experience to the board, having served as a Partner at a leading global strategy firm where she led the consumer and growth practice across North America. She advises RiseTech on commercial strategy, international expansion, and organisational architecture. She holds an MBA from Harvard Business School.",
    expertise: ["Commercial Strategy", "Growth Architecture", "Organisational Design", "Management Consulting"],
    sectors: ["Consumer", "Retail", "Professional Services", "SaaS"],
    tab: "board",
  },
];

export const PRACTICE_AREAS = [
  "All Practice Areas",
  "Export Strategy",
  "Technology & Systems",
  "Strategy & Intelligence",
  "Market Intelligence",
  "Client Advisory",
  "Startup Strategy",
  "Board of Directors",
];

export const REGIONS = [
  "All Regions",
  "EMEA",
  "MENA",
  "Americas",
  "Asia-Pacific",
];

export const TITLES = [
  "All Titles",
  "Founder & Managing Director",
  "Managing Director",
  "Director",
  "Senior Manager",
  "Manager",
  "Non-Executive Director",
  "Senior Independent Director",
  "Strategic Advisor & Board Observer",
];
