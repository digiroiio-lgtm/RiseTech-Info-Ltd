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
  {
    slug: "what-is-hreflang",
    title: "What Is Hreflang? How to Set It Up for a Multi-Language Site",
    description:
      "Hreflang tells search engines which language or country version of a page to show. A plain-language guide with the format, the rules and the common mistakes.",
    answer:
      "Hreflang is an annotation that tells search engines which language or country version of a page to show to which searcher. Each version of a page lists all its alternatives, including itself, using language and region codes such as de-DE. You can add it in the page head, in HTTP headers or in your XML sitemap.",
    published: "2026-11-10",
    updated: "2026-11-10",
    readTime: 5,
    sections: [
      {
        heading: "When you need it",
        paragraphs: [
          "Use hreflang when you have the same or very similar content for different languages or countries, for example an English page for the UK and another for Ireland, or a German and a French version of a product page.",
        ],
      },
      {
        heading: "What it looks like",
        paragraphs: [
          "In the head of each page you list every version, with a language code and optionally a region code:",
          '<link rel="alternate" hreflang="en-GB" href="https://example.com/en-gb/page" />',
          '<link rel="alternate" hreflang="de-DE" href="https://example.com/de/page" />',
          '<link rel="alternate" hreflang="x-default" href="https://example.com/page" />',
        ],
      },
      {
        heading: "The rules",
        items: [
          "Reciprocal: if page A points to page B, page B must point back to A.",
          "Self-referencing: each page also lists itself.",
          "Language first, then optional region: en, en-GB, de-DE. Region alone is not valid.",
          "Use full, absolute URLs that match the canonical version of each page.",
          "x-default is optional and marks the fallback page for searchers who match no listed version.",
        ],
      },
      {
        heading: "Where to put it",
        items: [
          "In the page head: simple for small sites.",
          "In HTTP headers: useful for non-HTML files such as PDFs.",
          "In the XML sitemap: easier to manage for large sites.",
        ],
      },
      {
        heading: "Common mistakes",
        items: [
          "Missing return links, so the annotations are ignored.",
          "Wrong codes, such as uk for the United Kingdom (the country code is GB).",
          "Pointing to pages that redirect, return errors or are blocked from crawling.",
          "Forgetting to update the annotations when pages are added or removed.",
        ],
      },
      {
        heading: "What hreflang does not do",
        paragraphs: [
          "Hreflang helps search engines choose the right version. It does not translate your content, and it does not guarantee rankings. Each version still needs content that suits its market.",
        ],
      },
    ],
    faq: [
      {
        q: "Is hreflang a ranking factor?",
        a: "Hreflang does not boost rankings by itself. It helps search engines show the right language or country version to the right searcher.",
      },
      {
        q: "Do I need hreflang if I only have one language?",
        a: "Usually not. It matters when you have several versions of similar content for different languages or countries.",
      },
    ],
    relatedLinks: [
      { label: "International SEO", href: "/services/global-digital-growth/international-seo" },
      { label: "SEO Audit (£100)", href: "/services/seo-audit" },
    ],
    relatedGuides: ["multi-country-website-url-structure", "keyword-research-for-a-new-country"],
  },
  {
    slug: "keyword-research-for-a-new-country",
    title: "How to Do Keyword Research for a New Country",
    description:
      "Do not just translate your keywords. A step-by-step guide to researching how buyers in a new country and language actually search for what you sell.",
    answer:
      "Translating your existing keywords is not enough: buyers in another country often use different words, spellings and search habits. Start from the local language, check what local competitors rank for, look at the search results themselves, and have a native speaker confirm the terms before you build pages.",
    published: "2026-11-10",
    updated: "2026-11-10",
    readTime: 5,
    sections: [
      {
        heading: "Step 1: Define the market",
        paragraphs: [
          "Decide the country and language, and who the buyer is: a business buyer, a distributor or a consumer. Searches differ by role, so define this first.",
        ],
      },
      {
        heading: "Step 2: Start from the local language",
        items: [
          "List the products or services in the local language, with a native speaker if possible.",
          "Include local names, spellings and units. The same product can have several names in one language.",
          "Add the words buyers use for the problem, not only for your product.",
        ],
      },
      {
        heading: "Step 3: Look at who already ranks",
        items: [
          "Search the terms from that country, in that language, and note who appears.",
          "Check which types of pages rank: product pages, guides, directories, marketplaces.",
          "Note competitors that appear repeatedly, since they show what the market expects.",
        ],
      },
      {
        heading: "Step 4: Check intent",
        paragraphs: [
          "For each term, ask what the searcher wants: to learn, to compare, or to buy or request a quote. Match the page type to the intent. A buyer ready to request a quote needs a different page from someone learning the basics.",
        ],
      },
      {
        heading: "Step 5: Prioritise",
        items: [
          "Start with terms close to a sale and realistic to win.",
          "Group related terms into topics, one page per topic.",
          "Use keyword tools for rough demand, but treat their numbers as estimates.",
        ],
      },
      {
        heading: "Step 6: Validate before you build",
        paragraphs: [
          "Ask a native speaker whether the terms sound natural for your product and whether the pages you plan would answer the searches. This avoids building pages around words nobody uses.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I use my English keywords translated by a tool?",
        a: "Translated keywords are a starting point only. Buyers often use different words and search habits, so check the terms against local search results and with a native speaker.",
      },
      {
        q: "How many keywords do I need per country?",
        a: "There is no fixed number. Start with the topics closest to a sale, and expand once those pages perform.",
      },
    ],
    relatedLinks: [
      { label: "International SEO", href: "/services/global-digital-growth/international-seo" },
      { label: "SEO Strategy & Consulting (£500)", href: "/services/seo-strategy-consulting" },
    ],
    relatedGuides: ["what-is-hreflang", "multi-country-website-url-structure"],
  },
  {
    slug: "seo-checklist-for-a-website-redesign",
    title: "SEO Checklist for a Website Redesign or Migration",
    description:
      "A redesign can lose the search visibility you already have. A practical checklist for before, during and after a website redesign or migration.",
    answer:
      "To protect your search visibility in a redesign, record your current pages and rankings first, keep URLs where you can, redirect every old URL that changes to its closest new page, and check crawling, indexing and performance right after launch. Most losses come from missing redirects and forgotten pages.",
    published: "2026-11-10",
    updated: "2026-11-10",
    readTime: 5,
    sections: [
      {
        heading: "Before the redesign",
        items: [
          "Crawl the current site and save the list of URLs, titles and headings.",
          "Record which pages bring organic visitors and enquiries today.",
          "Decide which URLs can stay the same. The fewer that change, the lower the risk.",
          "Keep the content that already performs, including its headings and key text.",
        ],
      },
      {
        heading: "Plan the redirects",
        items: [
          "Map every old URL that will change to its closest equivalent new page.",
          "Use permanent (301) redirects, one step each, not chains.",
          "Do not send everything to the home page: send each URL to the most relevant page.",
        ],
      },
      {
        heading: "Test before launch",
        items: [
          "Check the new site on a test copy that search engines cannot index.",
          "Confirm titles, descriptions, headings, internal links and structured data carried over.",
          "Test speed and mobile use.",
          "Make sure the test site's block on search engines is removed at launch, and not left in place.",
        ],
      },
      {
        heading: "At launch",
        items: [
          "Switch on the redirects and submit the new XML sitemap.",
          "Check the robots rules do not block important pages.",
          "Check canonical tags point to the live URLs.",
        ],
      },
      {
        heading: "After launch",
        items: [
          "Crawl the live site and look for errors and broken links.",
          "Watch indexing and traffic in your search console for the first weeks.",
          "Fix missing redirects and lost pages quickly.",
          "Expect some movement: small fluctuations are normal, sharp drops need investigation.",
        ],
      },
    ],
    faq: [
      {
        q: "Will a redesign hurt my rankings?",
        a: "It can, especially if URLs change without redirects or content is removed. With a plan, redirects and checks after launch, the risk is much lower. Nobody can promise no change.",
      },
      {
        q: "Should I change my URLs in a redesign?",
        a: "Only if there is a good reason. Keeping URLs reduces risk. If they must change, redirect each old URL to its closest new page.",
      },
    ],
    relatedLinks: [
      { label: "Website Transformation", href: "/services/global-digital-growth/website-transformation" },
      { label: "SEO Audit + Optimization (£250)", href: "/services/seo-audit-plus" },
    ],
    relatedGuides: ["what-does-an-seo-audit-include", "what-is-hreflang"],
  },
  {
    slug: "writing-answer-first-content",
    title: "How to Write Answer-First Content for Search and AI Answers",
    description:
      "Answer-first content gives the direct answer early and supports it below. How to structure pages so search engines and AI tools can understand and cite them.",
    answer:
      "Answer-first content states the direct answer to a question in the first lines, then explains and supports it below. It helps readers, search engines and AI tools find the point quickly. Use clear headings that match real questions, plain language, consistent facts about your company and structured data where it fits.",
    published: "2026-11-10",
    updated: "2026-11-10",
    readTime: 4,
    sections: [
      {
        heading: "Start with the question",
        paragraphs: [
          "Pick one question a buyer really asks, such as how much something costs, how long it takes or what is included. Make it the topic of the page, and write it in the words buyers use.",
        ],
      },
      {
        heading: "Answer in the first lines",
        paragraphs: [
          "Give the direct answer in one to three sentences at the top, then continue with detail. If the answer depends on something, say what it depends on.",
        ],
      },
      {
        heading: "Structure the rest",
        items: [
          "Use headings that are questions or clear statements, not clever titles.",
          "Use short paragraphs and lists for steps and options.",
          "Add a short FAQ for the closest follow-up questions.",
        ],
      },
      {
        heading: "Be specific and honest",
        items: [
          "State real facts: what is included, what it costs where you publish prices, how long it takes.",
          "Do not make claims you cannot support, and say when results vary.",
          "Show when the page was last updated and keep it current.",
        ],
      },
      {
        heading: "Make it easy to understand who you are",
        items: [
          "Use the same company name, address and service descriptions across your site.",
          "Add structured data that describes your company, services and FAQs.",
          "Link related pages to each other, so the topic and your expertise are clear.",
        ],
      },
      {
        heading: "A note on results",
        paragraphs: [
          "Clear, useful content improves your chances of being found and cited. It does not guarantee rankings or citations, and search engines and AI tools change often.",
        ],
      },
    ],
    faq: [
      {
        q: "Is answer-first content only for AI?",
        a: "No. It helps readers first. Search engines and AI tools also find it easier to understand and reuse pages that state the answer clearly.",
      },
      {
        q: "How long should the direct answer be?",
        a: "One to three sentences is a good target. Put the detail below it.",
      },
    ],
    relatedLinks: [
      { label: "Geo-SEO service", href: "/services/global-digital-growth/geo-seo" },
      { label: "SEO Strategy & Consulting (£500)", href: "/services/seo-strategy-consulting" },
    ],
    relatedGuides: ["geo-seo-vs-geo", "what-is-structured-data-for-smes"],
  },
  {
    slug: "what-is-structured-data-for-smes",
    title: "What Is Structured Data (Schema Markup)? A Guide for SMEs",
    description:
      "Structured data describes your company, services and FAQs in a format search engines and AI tools can read. What it is, which types an SME needs and what it cannot do.",
    answer:
      "Structured data, also called schema markup, is code added to a page that describes it in a standard format: who the company is, what the service is, what questions the page answers. It helps search engines and AI tools understand your site. It does not guarantee rankings or special results; search engines decide what to show.",
    published: "2026-11-10",
    updated: "2026-11-10",
    readTime: 4,
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Structured data is usually added as JSON-LD, a block of data in the page that is invisible to visitors but readable by machines. It uses a shared vocabulary from schema.org.",
        ],
      },
      {
        heading: "Types an SME usually needs",
        items: [
          "Organization: your company name, logo, address and contact details.",
          "WebSite: your site and its name.",
          "Service or Product: what you sell, and the price where you publish one.",
          "FAQPage: questions and answers that are visible on the page.",
          "Article: guides and news, with author and dates.",
          "BreadcrumbList: the path to the page within the site.",
        ],
      },
      {
        heading: "Rules to follow",
        items: [
          "Only mark up what is visible on the page: do not add FAQs or prices that readers cannot see.",
          "Keep the data accurate and up to date, especially prices and dates.",
          "Do not add reviews or ratings you do not have.",
          "Test your pages with the search engines' structured data testing tools.",
        ],
      },
      {
        heading: "What it cannot do",
        paragraphs: [
          "Structured data does not guarantee higher rankings, rich results or AI citations. It makes your content easier to understand, which can help, but search engines and AI tools decide what to show.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          "Begin with Organization and WebSite across the site, then add Service, FAQPage and Article on the pages that match. Keep it consistent with the visible content.",
        ],
      },
    ],
    faq: [
      {
        q: "Is structured data the same as schema markup?",
        a: "Yes. Schema markup is structured data that uses the schema.org vocabulary.",
      },
      {
        q: "Does structured data improve rankings?",
        a: "Not directly. It helps search engines and AI tools understand your pages, which can make them eligible for richer results, but nothing is guaranteed.",
      },
    ],
    relatedLinks: [
      { label: "SEO Audit (£100)", href: "/services/seo-audit" },
      { label: "Global Digital Growth", href: "/services/global-digital-growth" },
    ],
    relatedGuides: ["writing-answer-first-content", "what-does-an-seo-audit-include"],
  },
  {
    slug: "localise-a-b2b-website",
    title: "How to Localise a B2B Website for a New Market",
    description:
      "Localisation is more than translation. A practical guide for SMEs to adapt a B2B website's content, details and offer for buyers in a new country.",
    answer:
      "To localise a B2B website, adapt more than the language: use the terms buyers in that market search for, show the right currency, units, certifications and contact routes, and explain how ordering, shipping and quotes work there. Have a native speaker review it, and publish only the pages you can keep up to date.",
    published: "2026-11-11",
    updated: "2026-11-11",
    readTime: 5,
    sections: [
      {
        heading: "Translation is only the start",
        paragraphs: [
          "A word-for-word translation can be correct and still not persuade. Buyers in another country may use different terms for your product, expect different proof, and ask different questions before they request a quote.",
        ],
      },
      {
        heading: "What to adapt",
        items: [
          "Terms and keywords: the words buyers in that market use, found through local research.",
          "Currency, units, date formats and measurement standards.",
          "Certifications, standards and regulations buyers there look for.",
          "Contact details and routes: a local-language enquiry form, working hours and a booking link.",
          "Examples and references that make sense in that market.",
        ],
      },
      {
        heading: "Explain how doing business with you works",
        paragraphs: [
          "Say clearly where you sell or ship, how quotes work, typical delivery times, payment terms and who to contact. Buyers abroad leave when these basics are missing.",
        ],
      },
      {
        heading: "Review with a native speaker",
        items: [
          "Ask a native speaker, ideally someone in your industry, to read key pages.",
          "Check the page against the searches you want to be found for.",
          "Fix tone and terms, not only grammar.",
        ],
      },
      {
        heading: "Keep it maintainable",
        paragraphs: [
          "A language version that is out of date is worse than none. Start with the pages closest to a sale, such as the main service pages and the enquiry form, and expand only when you can maintain them.",
        ],
      },
    ],
    faq: [
      {
        q: "What is the difference between translation and localisation?",
        a: "Translation changes the language. Localisation also adapts terms, currency, units, examples, proof and contact routes so the site works for buyers in that market.",
      },
      {
        q: "Do I need to localise every page?",
        a: "No. Start with the pages closest to a sale and the enquiry form, and add more once you can keep them accurate.",
      },
    ],
    relatedLinks: [
      { label: "International SEO", href: "/services/global-digital-growth/international-seo" },
      { label: "Website Transformation", href: "/services/global-digital-growth/website-transformation" },
    ],
    relatedGuides: ["keyword-research-for-a-new-country", "multi-country-website-url-structure"],
  },
  {
    slug: "track-international-enquiries",
    title: "How to Track Where Your International Enquiries Come From",
    description:
      "A simple setup for SMEs to see which pages, markets and channels produce enquiries: source fields in forms, a CRM record per enquiry and a monthly review.",
    answer:
      "To track where international enquiries come from, record the source page and market on every enquiry, send each one to a CRM or shared sheet, and review enquiries by market and page once a month. Even a simple hidden form field that stores the page the visitor came from gives you the answer.",
    published: "2026-11-11",
    updated: "2026-11-11",
    readTime: 4,
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "If enquiries arrive by email with no context, you cannot tell which markets, pages or campaigns work. Tracking tells you where to put more effort and what to stop.",
        ],
      },
      {
        heading: "The minimum setup",
        items: [
          "Use a form, not only an email address, so every enquiry has the same fields.",
          "Add a hidden field that records the page or button the visitor came from.",
          "Add a field for country or market, or capture it from the form.",
          "Send each enquiry to one place: a CRM, or a shared sheet if you are starting out.",
        ],
      },
      {
        heading: "What to record for each enquiry",
        items: [
          "Date, name, company and country.",
          "Source page or button.",
          "What they asked for.",
          "Status: new, replied, quoted, won or lost.",
        ],
      },
      {
        heading: "Link tracking for campaigns",
        paragraphs: [
          "If you run campaigns, add tracking parameters to the links so the source is recorded. Keep names consistent, for example the same spelling for each channel and market.",
        ],
      },
      {
        heading: "Review it monthly",
        paragraphs: [
          "Once a month, count enquiries by market and by source page, and note how many became quotes and sales. Keep the report simple enough that you will actually read it.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "Enquiry forms collect personal data. Link your privacy policy, ask for consent where required, and say who receives the data.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need a CRM to track enquiries?",
        a: "Not at the start. A shared sheet works if every enquiry is recorded with its source and status. A CRM helps once the volume grows.",
      },
      {
        q: "What is the most useful single field to record?",
        a: "The source page or button, because it shows which part of your website produced the enquiry.",
      },
    ],
    relatedLinks: [
      { label: "Lead & RFQ Automation", href: "/services/global-digital-growth/lead-rfq-automation" },
      { label: "Send an enquiry", href: "/contact#enquiry" },
    ],
    relatedGuides: ["what-to-include-in-an-rfq-form", "what-is-structured-data-for-smes"],
  },
  {
    slug: "country-pages-or-one-global-page",
    title: "Country Pages or One Global Page? How to Decide",
    description:
      "Should you build a page per country or one global page? A practical way for SMEs to decide, based on how different the offer, language and buyers are.",
    answer:
      "Build a separate page for a country when its language, offer, price, regulations or buyers differ from your other markets. Use one global page when the offer and language are the same everywhere. Start with one page per priority market, and add more only when each can be written and maintained properly.",
    published: "2026-11-11",
    updated: "2026-11-11",
    readTime: 4,
    sections: [
      {
        heading: "The question to ask",
        paragraphs: [
          "Ask whether a buyer in each country needs something different from the page: a different language, price, delivery, regulation, proof or contact route. If yes, that country deserves its own page.",
        ],
      },
      {
        heading: "When one global page is enough",
        items: [
          "The language, offer and terms are the same in the markets you serve.",
          "You have little content and cannot maintain several versions.",
          "You are still testing demand and have no priority market yet.",
        ],
      },
      {
        heading: "When to build country pages",
        items: [
          "Different languages or local search terms.",
          "Different prices, delivery times or regulations.",
          "Local references or certifications that matter to buyers.",
          "A priority market where you want to be found in local search.",
        ],
      },
      {
        heading: "Avoid thin copies",
        paragraphs: [
          "Do not create dozens of near-identical country pages. Each page should say something specific to that market, or it will not help buyers or search engines.",
        ],
      },
      {
        heading: "How to start",
        items: [
          "Pick up to three priority markets.",
          "Write one page per market for your main service.",
          "Add hreflang so search engines show the right version.",
          "Measure enquiries per market before adding more pages.",
        ],
      },
    ],
    faq: [
      {
        q: "How many country pages should I start with?",
        a: "Start with one page per priority market, up to about three, for your main service, and expand when you see enquiries and can maintain them.",
      },
      {
        q: "Will country pages be treated as duplicate content?",
        a: "Pages with genuinely different content for each market are fine. Near-identical copies add little. Use hreflang to connect versions of the same page.",
      },
    ],
    relatedLinks: [
      { label: "Geo-SEO", href: "/services/global-digital-growth/geo-seo" },
      { label: "International SEO", href: "/services/global-digital-growth/international-seo" },
    ],
    relatedGuides: ["multi-country-website-url-structure", "what-is-hreflang"],
  },
  {
    slug: "before-hiring-an-seo-consultant",
    title: "What to Prepare Before Hiring an SEO Consultant",
    description:
      "Get more from an SEO consultant by preparing goals, access and questions first. A short checklist for SMEs, and questions to ask before you hire.",
    answer:
      "Before hiring an SEO consultant, define what you want to achieve and which markets matter, gather access to your website and analytics, and list your products, competitors and past SEO work. Then ask how they work, what you will receive, who does the implementation and how they report, and avoid anyone who guarantees rankings.",
    published: "2026-11-11",
    updated: "2026-11-11",
    readTime: 4,
    sections: [
      {
        heading: "Define the goal",
        paragraphs: [
          "Write down what you want: more enquiries, more traffic from a market, or a plan before a redesign. A clear goal lets you judge a proposal and measure results.",
        ],
      },
      {
        heading: "Gather what they will need",
        items: [
          "Access to your website, analytics and search console, with the right permissions.",
          "A list of your main products or services and target markets.",
          "Your main competitors.",
          "Any past SEO work, redesigns or migrations.",
        ],
      },
      {
        heading: "Questions to ask",
        items: [
          "What exactly will I receive, and when?",
          "Who implements the recommendations: you, my team or me?",
          "How will you report progress, and on which measures?",
          "How do you handle changes to my website?",
          "Can you show relevant, honest examples?",
        ],
      },
      {
        heading: "Warning signs",
        items: [
          "Guaranteed rankings or guaranteed traffic.",
          "Vague deliverables or no written scope.",
          "Secret methods, or no access to your own accounts.",
        ],
      },
      {
        heading: "Start small",
        paragraphs: [
          "A fixed-price audit is a low-risk way to see how a consultant works before you commit to a larger project.",
        ],
      },
    ],
    faq: [
      {
        q: "Should an SEO consultant guarantee rankings?",
        a: "No. Rankings depend on many factors outside anyone's control. A good consultant commits to a clear scope and reporting, not to a specific ranking.",
      },
      {
        q: "Should I start with an audit or a strategy?",
        a: "An audit shows the state of your current site. A strategy sets out where to go. If your site has technical problems, start with the audit.",
      },
    ],
    relatedLinks: [
      { label: "SEO Audit (£100)", href: "/services/seo-audit" },
      { label: "SEO Strategy & Consulting (£500)", href: "/services/seo-strategy-consulting" },
    ],
    relatedGuides: ["what-does-an-seo-audit-include", "seo-checklist-for-a-website-redesign"],
  },
  {
    slug: "internal-linking-for-service-websites",
    title: "Internal Linking for Service Websites: A Simple Plan",
    description:
      "Internal links help visitors and search engines find your key pages. A simple plan for service businesses: hubs, related links, anchor text and a quick audit.",
    answer:
      "Internal linking means linking your own pages to each other so visitors and search engines can find and understand them. For a service website, link each service page from your main navigation and from related guides and case studies, use descriptive link text, and make sure no important page is more than a few clicks from the home page.",
    published: "2026-11-11",
    updated: "2026-11-11",
    readTime: 4,
    sections: [
      {
        heading: "Why internal links matter",
        paragraphs: [
          "Internal links show search engines which pages exist and how they relate, and they guide visitors towards the pages that matter. Pages with no links pointing to them are easy to miss.",
        ],
      },
      {
        heading: "Build around hubs",
        items: [
          "Create a hub page for each main service area.",
          "Link the hub to its detail pages, and each detail page back to the hub.",
          "Link related guides and case studies to the services they support.",
        ],
      },
      {
        heading: "Use descriptive link text",
        paragraphs: [
          "Write link text that says where the link goes, for example 'SEO audit' rather than 'click here'. It helps readers, and it tells search engines what the target page is about.",
        ],
      },
      {
        heading: "Keep important pages close",
        items: [
          "Aim for key pages to be reachable within about three clicks of the home page.",
          "Include important pages in the main navigation or footer.",
          "Add a few relevant links inside the content, not only in menus.",
        ],
      },
      {
        heading: "A quick audit",
        items: [
          "Crawl your site and list pages that have few or no internal links.",
          "Check that every page in your sitemap is linked from somewhere.",
          "Fix broken internal links.",
        ],
      },
    ],
    faq: [
      {
        q: "How many internal links should a page have?",
        a: "There is no fixed number. Link where it helps the reader, to relevant pages, with descriptive text, and avoid linking everything to everything.",
      },
      {
        q: "Do internal links help rankings?",
        a: "They help search engines find and understand your pages, which supports good results, but they do not guarantee rankings.",
      },
    ],
    relatedLinks: [
      { label: "SEO Audit (£100)", href: "/services/seo-audit" },
      { label: "Services", href: "/services" },
    ],
    relatedGuides: ["what-does-an-seo-audit-include", "writing-answer-first-content"],
  },
];

export const GUIDES_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);
