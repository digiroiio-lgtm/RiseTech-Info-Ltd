export const SITE_URL = "https://wealwaysrise.com";

/** Escape "<" so JSON-LD can never close the script tag (see Next.js JSON-LD guide). */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Werrise Digital",
  legalName: "Werrise Digital Ltd",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/werrise-logo-light.png`,
  email: "support@wealwaysrise.com",
  description:
    "Digital consultancy offering AI-powered business solutions, SEO and growth intelligence, market intelligence and startup advisory.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "85 Great Portland Street",
    addressLocality: "London",
    postalCode: "W1W 7LT",
    addressCountry: "GB",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Werrise Digital",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function webPageJsonLd(opts: {
  path: string;
  name: string;
  description: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${opts.path}#webpage`,
    url: `${SITE_URL}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    dateModified: opts.dateModified,
    inLanguage: "en-GB",
  };
}
