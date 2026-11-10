/**
 * Home page answer content (shown on the page and reused for FAQPage JSON-LD).
 * Facts here must match the rest of the site. Update HOME_LAST_UPDATED only
 * when the content is really changed.
 */
export const HOME_LAST_UPDATED = "2026-11-10";
export const HOME_LAST_UPDATED_LABEL = "10 November 2026";

export interface AnswerBlock {
  id: string;
  heading: string;
  /** 40-60 words, answers the heading directly. */
  opener: string;
  paragraphs: string[];
  links: { label: string; href: string }[];
}

export const HOME_ANSWER_BLOCKS: AnswerBlock[] = [
  {
    id: "what-is-werrise-digital",
    heading: "What is Werrise Digital?",
    opener:
      "Werrise Digital Ltd is a London-based digital consultancy that helps founders, growing companies and leadership teams plan, build and grow. It combines business and management consultancy, AI and technology consultancy, software development and digital marketing, and sells both fixed-price packages and projects quoted per engagement.",
    paragraphs: [
      "The company is registered in the United Kingdom (Company No. 16345678) with its office at 85 Great Portland Street, London. Clients include startups, export companies, retail brands, SaaS founders and finance teams. Work ranges from a one-off SEO audit to market intelligence reports, startup advisory and multi-country growth projects. Every engagement starts with a clearly agreed scope, and results depend on many factors and are not guaranteed.",
    ],
    links: [
      { label: "Meet the team", href: "/team" },
      { label: "Founder story", href: "/founder-story" },
    ],
  },
  {
    id: "what-services-does-werrise-digital-offer",
    heading: "What services does Werrise Digital offer?",
    opener:
      "Werrise Digital offers four service areas: business and management consultancy, AI and technology consultancy, software and digital product development, and digital marketing and growth. Online, customers can buy fixed-price packages in SEO and growth intelligence, market and business intelligence, startup advisory and intelligence reports.",
    paragraphs: [
      "Typical entry points are the SEO Audit, SEO Strategy and Consulting, and the market research reports. For businesses that want customers in other countries, Global Digital Growth combines international SEO, Geo-SEO, website transformation and lead and RFQ automation. Software development, marketing campaigns and retainers are quoted per project and agreed in writing.",
    ],
    links: [
      { label: "Services and pricing", href: "/services" },
      { label: "Global Digital Growth", href: "/services/global-digital-growth" },
    ],
  },
  {
    id: "how-much-does-it-cost-and-how-do-i-start",
    heading: "How much does it cost and how do I start?",
    opener:
      "Fixed-price packages start at £100 for an SEO Audit and are paid online in GBP through Stripe, with VAT included where applicable. Larger work is quoted per project. To start, buy a package, send an enquiry, or book a free 30-minute call, and we confirm the scope in writing before work begins.",
    paragraphs: [
      "Global Digital Growth begins with a free Global Visibility Review and is quoted per project, as are software development, marketing campaigns and retainers. Typical delivery for fixed-price packages is 5–15 business days from your confirmation, depending on scope. UK consumers have a 14-day right to cancel under the Consumer Contracts Regulations 2013, subject to the conditions in our Refund Policy.",
    ],
    links: [
      { label: "Send an enquiry", href: "/contact#enquiry" },
      { label: "Billing Policy", href: "/billing" },
      { label: "Refund Policy", href: "/refund" },
    ],
  },
];

export const HOME_FAQ: { q: string; a: string }[] = [
  {
    q: "What does Werrise Digital do?",
    a: "Werrise Digital Ltd is a London-based digital consultancy offering business consultancy, AI and technology consultancy, software development and digital marketing. It sells fixed-price SEO, market intelligence and startup advisory packages online, and quotes larger projects individually.",
  },
  {
    q: "Who does Werrise Digital work with?",
    a: "Clients include startups, export companies, retail brands, SaaS founders and finance teams, and leadership teams that need to validate strategy, understand markets or prepare for growth.",
  },
  {
    q: "How much do the services cost?",
    a: "Fixed-price packages start at £100 for an SEO Audit, and intelligence reports are priced from £1,000 to £1,800. Prices are in GBP and include VAT where applicable. Global Digital Growth, software development and retainers are quoted per project.",
  },
  {
    q: "How do I get started?",
    a: "Choose a fixed-price package and pay online, send an enquiry through the contact form, or book a 30-minute call. For international growth, request the free Global Visibility Review. We confirm scope and timeline in writing before work starts.",
  },
  {
    q: "How long does delivery take?",
    a: "Typical delivery for fixed-price packages is 5–15 business days from your confirmation, depending on scope. Quoted projects have their own timeline, which we agree with you in writing before work starts.",
  },
  {
    q: "Can Werrise Digital guarantee results?",
    a: "No. Rankings, traffic, sales and market outcomes depend on many factors outside our control. We commit to the agreed scope and deliverables, and our case studies are illustrative examples with anonymised clients.",
  },
];
