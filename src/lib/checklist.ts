export interface ChecklistItem {
  id: number;
  group: string;
  title: string;
  body: string;
  /** Optional related guide. */
  guide?: { label: string; href: string };
}

export const CHECKLIST_VISIBLE_COUNT = 3;
export const CHECKLIST_UPDATED = "2026-11-11";
export const CHECKLIST_UPDATED_LABEL = "11 November 2026";

export const CHECKLIST: ChecklistItem[] = [
  {
    id: 1,
    group: "Markets and keywords",
    title: "Name your target countries, languages and buyers",
    body: "Pick the countries and languages you want to win first, and who the buyer is in each: a business buyer, a distributor or a consumer. Start with up to three markets so the work stays focused.",
  },
  {
    id: 2,
    group: "Markets and keywords",
    title: "Research search terms in the local language",
    body: "Do not just translate your keywords. List the words buyers in each market really use, including local names and spellings, and have a native speaker confirm them.",
    guide: { label: "Keyword research for a new country", href: "/guides/keyword-research-for-a-new-country" },
  },
  {
    id: 3,
    group: "Markets and keywords",
    title: "Check who already ranks in each market",
    body: "Search your main terms from the target country in the local language. Note which competitors and page types appear, because they show what buyers there expect to see.",
  },
  {
    id: 4,
    group: "Site structure",
    title: "Choose your URL structure on purpose",
    body: "Decide between country domains, subfolders and subdomains based on your team, budget and need for local separation. Subfolders on one domain are usually the simplest to run for small teams.",
    guide: { label: "URL structure for a multi-country site", href: "/guides/multi-country-website-url-structure" },
  },
  {
    id: 5,
    group: "Site structure",
    title: "Give every market its own pages",
    body: "Each market should have pages written for it. Remove or noindex untranslated duplicates, and do not leave half-finished language versions live.",
  },
  {
    id: 6,
    group: "Site structure",
    title: "Add hreflang and keep it in sync",
    body: "Each version of a page should list all the others and itself, with correct language and region codes. Update the annotations whenever pages are added or removed.",
    guide: { label: "What is hreflang?", href: "/guides/what-is-hreflang" },
  },
  {
    id: 7,
    group: "Content and localisation",
    title: "Localise, do not only translate",
    body: "Adapt currency, units, terms, examples, contact details and legal wording to the market. Content that reads as written for the market builds trust faster.",
  },
  {
    id: 8,
    group: "Content and localisation",
    title: "Say which countries you serve and how to reach you",
    body: "State clearly where you sell, ship or work, and give a contact route that suits buyers there, such as a local-language enquiry form and a booking link.",
  },
  {
    id: 9,
    group: "Content and localisation",
    title: "Answer the buyer's key questions first",
    body: "For each key page, answer what it is, what it costs or how quotes work, and how long it takes in the first lines. Then add detail and a short FAQ.",
    guide: { label: "Writing answer-first content", href: "/guides/writing-answer-first-content" },
  },
  {
    id: 10,
    group: "Technical foundations",
    title: "Make every version crawlable and indexable",
    body: "Check robots rules, status codes and canonical tags on each language version, and list all versions in your XML sitemap. Fix redirects that send buyers to the wrong market.",
    guide: { label: "What does an SEO audit include?", href: "/guides/what-does-an-seo-audit-include" },
  },
  {
    id: 11,
    group: "Technical foundations",
    title: "Test speed and mobile use in the target markets",
    body: "Check how pages load for visitors in each country and on phones. Slow or awkward pages lose buyers before they read anything.",
  },
  {
    id: 12,
    group: "Technical foundations",
    title: "Add structured data that matches visible content",
    body: "Describe your company, services and FAQs with structured data, and only mark up what is visible on the page. Keep it accurate and up to date.",
    guide: { label: "What is structured data?", href: "/guides/what-is-structured-data-for-smes" },
  },
  {
    id: 13,
    group: "Enquiries and measurement",
    title: "Use a short request-for-quote form",
    body: "Ask only for what you need to give a first quote: contact details, company, what they need, quantity or scope, and timing. Link your privacy policy and ask for consent where required.",
    guide: { label: "What to include in an RFQ form", href: "/guides/what-to-include-in-an-rfq-form" },
  },
  {
    id: 14,
    group: "Enquiries and measurement",
    title: "Confirm every enquiry and record it with its source",
    body: "Send an immediate confirmation, notify the right person, and record the enquiry in your CRM with the page and market it came from.",
  },
  {
    id: 15,
    group: "Enquiries and measurement",
    title: "Review enquiries by market and page every month",
    body: "Look at which markets and pages produce real opportunities, and move effort towards them. Keep the numbers simple and review them on a fixed day each month.",
  },
];
