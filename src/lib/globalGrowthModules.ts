export interface GGModulePage {
  slug: string;
  /** Short name, also used in breadcrumbs and cards. */
  name: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  /** Answer-first paragraph (also feeds AEO/GEO). */
  summary: string;
  problem: string[];
  included: { title: string; body: string }[];
  whoFor: string[];
  faq: { q: string; a: string }[];
  /** Slugs of other module pages to link to. */
  related: string[];
}

export const GG_MODULE_PAGES: GGModulePage[] = [
  {
    slug: "international-seo",
    name: "International SEO",
    seoTitle: "International SEO for SMEs: Multi-Country, Multi-Language Search",
    seoDescription:
      "International SEO for SMEs: country and language based organic visibility, with market and keyword research, hreflang and site structure for each target market.",
    h1: "International SEO: be found by buyers in your target countries",
    summary:
      "International SEO makes your website visible in search results in the countries and languages you want to sell to. We research each target market and its keywords, then set up the site structure, hreflang and content plan so search engines show the right page to the right buyer. It is quoted per project after a free initial review.",
    problem: [
      "Your site is found, if at all, only in your home market.",
      "Buyers in other countries search in their own language and with different terms.",
      "Search engines show the wrong language or country version of your pages, or index duplicates.",
    ],
    included: [
      {
        title: "Market and keyword research",
        body: "How buyers in each target country and language search for what you sell, and who already ranks for it.",
      },
      {
        title: "Site structure per market",
        body: "A clear choice and setup for how country and language versions live on your site, so each market has its own pages.",
      },
      {
        title: "Hreflang implementation",
        body: "Signals that tell search engines which language and country version to show to which searcher.",
      },
      {
        title: "Localised content plan",
        body: "Which pages and content each market needs, written for that market rather than translated word for word.",
      },
    ],
    whoFor: [
      "SMEs that want customers or export enquiries from other countries",
      "Manufacturers, distributors and service companies selling across borders",
      "Businesses planning a multi-language website",
    ],
    faq: [
      {
        q: "What is international SEO?",
        a: "International SEO is optimising a website so search engines show it to people in specific countries and languages. It covers market research, site structure, hreflang annotations and localised content.",
      },
      {
        q: "How much does international SEO cost?",
        a: "Scope depends on your website and the number of target markets, so it is quoted per project after a free initial review. It is not sold through online checkout.",
      },
      {
        q: "Do I need a separate website for each country?",
        a: "Not necessarily. Options include country folders, subdomains or separate domains. We recommend one after reviewing your site, markets and resources.",
      },
      {
        q: "Is international SEO the same as translating my website?",
        a: "No. Translation is only one part. Buyers in each market use different search terms, so pages need market research and localised content, not only translated text.",
      },
      {
        q: "Can you guarantee rankings in other countries?",
        a: "No. Results depend on competition, your site and search engine changes. We commit to the agreed scope and reporting, not to a specific ranking.",
      },
    ],
    related: ["geo-seo", "lead-rfq-automation"],
  },
  {
    slug: "geo-seo",
    name: "Geo-SEO",
    seoTitle: "Geo-SEO for SMEs: Local and Regional Search in Your Target Markets",
    seoDescription:
      "Geo-SEO for SMEs: local and regional search optimisation so buyers in a given country or region find the right page. How it differs from GEO for AI answers.",
    h1: "Geo-SEO: get found in the regions where you want customers",
    summary:
      "Geo-SEO is local and regional search optimisation: it helps buyers in a specific country or region find the right page of your website. We tailor pages, content and signals to each target location. It differs from GEO, which is about being cited in AI-generated answers; we cover both. It is quoted per project after a free initial review.",
    problem: [
      "Searches that include a place or region show competitors, not you.",
      "Your pages do not say which locations you serve or how buyers there can reach you.",
      "One generic page tries to serve every market.",
    ],
    included: [
      {
        title: "Location targeting review",
        body: "Which countries and regions matter for your business and how buyers there search.",
      },
      {
        title: "Location-specific pages",
        body: "Pages tailored to a country or region, with content relevant to buyers there instead of a generic text.",
      },
      {
        title: "Local signals",
        body: "Clear location information on your site and in structured data, so search engines understand where you operate.",
      },
      {
        title: "Regional performance tracking",
        body: "Visibility and enquiries tracked per target location, so you see which regions respond.",
      },
    ],
    whoFor: [
      "Businesses that sell in specific countries or regions",
      "Exporters entering new regional markets",
      "Companies with different offers or terms per location",
    ],
    faq: [
      {
        q: "What is Geo-SEO?",
        a: "Geo-SEO is optimising your website for local and regional search, so people searching in or about a specific country or region find the relevant page.",
      },
      {
        q: "What is the difference between Geo-SEO and GEO?",
        a: "Geo-SEO is about geographic targeting in search results. GEO (generative engine optimisation) is about being cited in answers from AI tools. They are different, and we cover both.",
      },
      {
        q: "How is Geo-SEO different from international SEO?",
        a: "International SEO covers country and language structure across your site. Geo-SEO focuses on location relevance within and across those markets. They work best together.",
      },
      {
        q: "How much does Geo-SEO cost?",
        a: "It depends on the number of target locations and your website, so it is quoted per project after a free initial review.",
      },
      {
        q: "Can you guarantee local rankings?",
        a: "No. Results depend on competition and search engine changes. We commit to the agreed scope and reporting.",
      },
    ],
    related: ["international-seo", "lead-rfq-automation"],
  },
  {
    slug: "lead-rfq-automation",
    name: "Lead & RFQ Automation",
    seoTitle: "Lead & RFQ Automation for SMEs: Capture, Route and Track Enquiries",
    seoDescription:
      "Lead and RFQ automation for SMEs: request-for-quote forms, CRM integration and automated follow-up, so every international enquiry is captured, routed and tracked.",
    h1: "Lead & RFQ Automation: turn website visits into tracked sales opportunities",
    summary:
      "Lead and RFQ automation captures every enquiry from your website, sends it to your CRM and starts follow-up automatically. We build request-for-quote forms, connect them to your CRM and set up the follow-up and reporting, so you know which markets and pages produce real opportunities. It is quoted per project after a free initial review.",
    problem: [
      "Enquiries arrive by email, get lost and are never tracked.",
      "Nobody knows which markets, pages or campaigns produce real opportunities.",
      "Buyers wait days for a reply and go to a competitor.",
    ],
    included: [
      {
        title: "RFQ and enquiry forms",
        body: "Request-for-quote forms that collect what your sales team needs to respond, for each market.",
      },
      {
        title: "CRM integration",
        body: "Enquiries recorded in your CRM with the source page and market, instead of living in an inbox.",
      },
      {
        title: "Automated follow-up",
        body: "An immediate confirmation to the buyer and a notification to your team, so no enquiry waits unseen.",
      },
      {
        title: "Lead reporting",
        body: "Reporting on enquiries by market and page, so you can see what works and where to invest.",
      },
    ],
    whoFor: [
      "SMEs that get enquiries by email or contact form and cannot track them",
      "Exporters and B2B suppliers that quote per request",
      "Teams that want to measure return from international marketing",
    ],
    faq: [
      {
        q: "What is an RFQ?",
        a: "RFQ means request for quote: a buyer asks for a price for a defined need. An RFQ form collects the details your team needs to quote.",
      },
      {
        q: "Which CRM do you work with?",
        a: "We connect enquiries to the CRM you already use where that is practical. We confirm the integration with you when scoping the project.",
      },
      {
        q: "Do you handle personal data from the forms?",
        a: "Forms collect personal data, so they link to a privacy policy and ask for consent where needed. We set up the process with data protection in mind and you remain responsible for your own data.",
      },
      {
        q: "How much does it cost?",
        a: "It depends on the forms, markets and CRM involved, so it is quoted per project after a free initial review.",
      },
      {
        q: "Can you guarantee more sales?",
        a: "No. Automation helps you capture and follow up enquiries faster and see what works, but sales depend on many factors. We commit to the agreed scope.",
      },
    ],
    related: ["international-seo", "geo-seo"],
  },
];

export const GG_MODULE_PAGES_BY_SLUG: Record<string, GGModulePage> =
  Object.fromEntries(GG_MODULE_PAGES.map((m) => [m.slug, m]));
