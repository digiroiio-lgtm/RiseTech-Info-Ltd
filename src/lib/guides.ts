export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  /** SEO meta description. */
  description: string;
  /** Short answer shown first (also the AEO/GEO snippet). */
  answer: string;
  /** ISO dates. */
  published: string;
  updated: string;
  readTime: number;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
  /** Internal links shown at the end. */
  relatedLinks: { label: string; href: string }[];
  relatedGuides: string[];
}

export const GUIDES: Guide[] = [
  {
    slug: "multi-country-website-url-structure",
    title: "How to Choose a URL Structure for a Multi-Country Website",
    description:
      "Country domains, subfolders or subdomains? A plain-language guide for SMEs choosing a URL structure for a multi-country, multi-language website, plus the hreflang basics.",
    answer:
      "For most SMEs, subfolders on one domain (for example example.com/de/) are the simplest and cheapest option to run. Country-code domains (example.de) give the clearest local signal but cost more to maintain. Subdomains sit in between. Whatever you choose, give each market its own pages and connect the versions with hreflang.",
    published: "2026-11-10",
    updated: "2026-11-10",
    readTime: 5,
    sections: [
      {
        heading: "The three options",
        items: [
          "Country-code domains (ccTLDs), such as example.de or example.fr: a clear signal that the site is for one country. Each domain is a separate site to build, host and promote.",
          "Subfolders on one domain, such as example.com/de/: one site to maintain, and the pages share the strength of the main domain.",
          "Subdomains, such as de.example.com: easier to set up separately (for example on different hosting), but search engines may treat them more like separate sites.",
        ],
      },
      {
        heading: "How to decide",
        paragraphs: [
          "Start with your resources. If you have a small team and a few markets, one domain with subfolders is usually easiest to keep consistent. If you need legal or branding separation per country, or a strong local presence, country domains can be worth the extra work.",
          "Consider also how many languages you will support. One language per country is simple. Several languages in one country (or one language across several countries) needs a clear plan for which page serves which searcher.",
        ],
      },
      {
        heading: "Hreflang: connecting the versions",
        paragraphs: [
          "Hreflang annotations tell search engines which language or country version of a page to show to which searcher. The basics:",
        ],
        items: [
          "Every version lists all the other versions and itself.",
          "Use language and region codes, for example de-DE or en-GB.",
          "Keep the annotations in sync: if a page is removed, update the others.",
        ],
      },
      {
        heading: "Common mistakes",
        items: [
          "Translating word for word without researching how buyers in that market actually search.",
          "Automatically redirecting visitors by location or browser language, which can stop search engines and people from reaching other versions.",
          "Leaving untranslated or duplicate pages in the structure.",
        ],
      },
      {
        heading: "Which one should you pick?",
        paragraphs: [
          "The right choice depends on your site, markets and team. This is exactly what we review in the free Global Visibility Review, and what International SEO covers in a project.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need a separate website for each country?",
        a: "No. Many businesses serve several countries from one domain using subfolders. Separate country domains are an option when you need stronger local separation.",
      },
      {
        q: "What is hreflang?",
        a: "Hreflang is an annotation that tells search engines which language or country version of a page to show to which searcher.",
      },
    ],
    relatedLinks: [
      { label: "International SEO", href: "/services/global-digital-growth/international-seo" },
      { label: "Website Transformation", href: "/services/global-digital-growth/website-transformation" },
    ],
    relatedGuides: ["geo-seo-vs-geo", "what-to-include-in-an-rfq-form"],
  },
  {
    slug: "geo-seo-vs-geo",
    title: "Geo-SEO vs GEO: What Is the Difference?",
    description:
      "Geo-SEO targets local and regional search results. GEO (generative engine optimisation) is about being cited in AI-generated answers. A clear comparison for SMEs.",
    answer:
      "Geo-SEO is optimising your website for local and regional search results, so buyers in a given country or region find the right page. GEO, short for generative engine optimisation, is about being cited in answers written by AI tools. They are different goals, and a business that sells abroad can benefit from both.",
    published: "2026-11-10",
    updated: "2026-11-10",
    readTime: 4,
    sections: [
      {
        heading: "Geo-SEO in one paragraph",
        paragraphs: [
          "Geo-SEO adapts your pages, content and signals to specific locations: which countries or regions you serve, how buyers there search, and how they can reach you. It works inside traditional search results.",
        ],
      },
      {
        heading: "GEO in one paragraph",
        paragraphs: [
          "GEO is about making your content easy for AI tools to understand and cite when they answer questions. The tools write an answer and may name or link the sources they used.",
        ],
      },
      {
        heading: "Side by side",
        items: [
          "Goal: Geo-SEO gets the right location page ranked for local searches. GEO gets your content used as a source in AI answers.",
          "Where it shows up: Geo-SEO in search results. GEO in answers from AI tools.",
          "What helps: Geo-SEO needs location-specific pages and clear location signals. GEO needs clear, factual, answer-first content, consistent company information and structured data.",
        ],
      },
      {
        heading: "What helps both",
        items: [
          "Pages that answer a specific question directly and early.",
          "Consistent company name, address and service descriptions across your site.",
          "Structured data that describes your company, services and FAQs.",
          "Content written for the market it targets, not generic text.",
        ],
      },
      {
        heading: "A note on guarantees",
        paragraphs: [
          "No one can guarantee rankings or AI citations. AI tools and search engines change often. Good practice improves your chances, it does not promise a result.",
        ],
      },
    ],
    faq: [
      {
        q: "Is GEO the same as SEO?",
        a: "No. SEO aims to rank pages in search results. GEO aims to make content usable as a source in AI-generated answers. They overlap in good content practice but have different goals.",
      },
      {
        q: "Do I need both?",
        a: "If you want customers in specific countries or regions, Geo-SEO helps you be found in search there. GEO adds visibility in AI answers. We cover both in Global Digital Growth.",
      },
    ],
    relatedLinks: [
      { label: "Geo-SEO service", href: "/services/global-digital-growth/geo-seo" },
      { label: "Global Digital Growth", href: "/services/global-digital-growth" },
    ],
    relatedGuides: ["multi-country-website-url-structure", "what-to-include-in-an-rfq-form"],
  },
  {
    slug: "what-to-include-in-an-rfq-form",
    title: "What to Include in an RFQ Form (and What to Leave Out)",
    description:
      "A practical guide to request-for-quote forms for B2B websites: which fields to ask for, what to leave out, and how to follow up so enquiries become sales opportunities.",
    answer:
      "A good RFQ (request for quote) form asks only for what your team needs to give a first quote: who the buyer is, what they need, how much, and by when. Keep it short, confirm receipt immediately, and record every request in your CRM with the page and market it came from.",
    published: "2026-11-10",
    updated: "2026-11-10",
    readTime: 4,
    sections: [
      {
        heading: "Fields worth asking for",
        items: [
          "Name and business email, so you can reply and see who is asking.",
          "Company name and website, to qualify the request quickly.",
          "What they need: product, service or specification, in a free-text field.",
          "Quantity or scope, and target delivery date, so you can quote realistically.",
          "Country, so you can route the request and consider shipping, tax and language.",
        ],
      },
      {
        heading: "What to leave out",
        items: [
          "Fields your team never uses.",
          "Phone number as a required field, unless you really call every request.",
          "Long questionnaires up front. Ask for details after you have started the conversation.",
        ],
      },
      {
        heading: "After the buyer clicks send",
        items: [
          "Show a clear confirmation and send an email confirmation.",
          "Notify the right person on your team immediately.",
          "Record the request in your CRM with its source page and market.",
          "Reply within a time you can keep, and say what happens next.",
        ],
      },
      {
        heading: "Data protection",
        paragraphs: [
          "An RFQ form collects personal data. Link your privacy policy, ask for consent where required, and tell people who will receive their details.",
        ],
      },
      {
        heading: "Measure what works",
        paragraphs: [
          "When each request carries its source page and market, you can see which pages and countries produce real opportunities, and decide where to invest.",
        ],
      },
    ],
    faq: [
      {
        q: "What does RFQ mean?",
        a: "RFQ means request for quote: a buyer asks for a price for a defined need.",
      },
      {
        q: "How many fields should an RFQ form have?",
        a: "As few as you need to give a first quote. Around five to seven is usual: contact details, company, what they need, quantity or scope and timing.",
      },
    ],
    relatedLinks: [
      { label: "Lead & RFQ Automation", href: "/services/global-digital-growth/lead-rfq-automation" },
      { label: "Global Digital Growth", href: "/services/global-digital-growth" },
    ],
    relatedGuides: ["multi-country-website-url-structure", "geo-seo-vs-geo"],
  },
  {
    slug: "what-does-an-seo-audit-include",
    title: "What Does an SEO Audit Include? A Checklist",
    description:
      "A plain-language SEO audit checklist: technical health, on-page signals, backlinks and international setup, and how to tell a useful audit from a generic report.",
    answer:
      "A useful SEO audit reviews three areas: technical health (can search engines crawl and index your site), on-page signals (titles, headings, content and internal links) and your backlink profile. For sites targeting several countries it also checks language and country setup. The result should be a prioritised list, not a data dump.",
    published: "2026-11-10",
    updated: "2026-11-10",
    readTime: 5,
    sections: [
      {
        heading: "Technical health",
        items: [
          "Crawling and indexing: can search engines reach and index the pages you want, and are they blocked from the ones you do not?",
          "Status codes and redirects: broken pages and redirect chains.",
          "Site structure and internal links: can visitors and crawlers reach important pages easily?",
          "Speed and mobile use: pages that load slowly or work poorly on phones lose visitors.",
          "Structured data: markup that describes your company, services and FAQs.",
        ],
      },
      {
        heading: "On-page signals",
        items: [
          "Titles and meta descriptions that match what people search for.",
          "Clear headings and content that answers the searcher's question.",
          "Duplicate or thin pages that compete with each other.",
        ],
      },
      {
        heading: "Backlink profile",
        items: [
          "Which sites link to you, and how relevant and trustworthy they are.",
          "Whether your links are concentrated on a few pages or sources.",
          "Low-quality links that need attention.",
        ],
      },
      {
        heading: "International setup (if you sell abroad)",
        items: [
          "Country and language structure, and hreflang annotations.",
          "Whether each market has pages written for it.",
        ],
      },
      {
        heading: "What a good audit gives you",
        paragraphs: [
          "Findings in plain language and a clear order of priority: what to fix first, what can wait, and what needs a bigger project. If a report only lists hundreds of warnings, it will not help you decide.",
        ],
      },
    ],
    faq: [
      {
        q: "How long does an SEO audit take?",
        a: "It depends on the size and complexity of the site. For our SEO Audit, typical delivery is 5–15 business days from confirmation.",
      },
      {
        q: "What is the difference between an audit and a strategy?",
        a: "An audit shows the state of your current site and what is holding it back. A strategy sets out where to go: keywords, content and authority building.",
      },
    ],
    relatedLinks: [
      { label: "SEO Audit (£100)", href: "/services/seo-audit" },
      { label: "SEO Audit + Optimization (£250)", href: "/services/seo-audit-plus" },
      { label: "SEO Strategy & Consulting (£500)", href: "/services/seo-strategy-consulting" },
    ],
    relatedGuides: ["multi-country-website-url-structure", "geo-seo-vs-geo"],
  },
];

export const GUIDES_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);
