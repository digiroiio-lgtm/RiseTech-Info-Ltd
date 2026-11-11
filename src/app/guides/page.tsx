import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { GUIDES } from "@/lib/guides";
import { SITE_URL, breadcrumbJsonLd, jsonLdString } from "@/lib/jsonLd";
import LastUpdated from "@/components/LastUpdated";
import { PAGE_UPDATED } from "@/lib/pageDates";

const DESCRIPTION =
  "Plain-language guides for SMEs on international SEO, hreflang, Geo-SEO and GEO, structured data, RFQ forms, website migrations and SEO audits.";

export const metadata: Metadata = {
  title: "Guides: International SEO, Geo-SEO and Lead Generation — Werrise Digital",
  description: DESCRIPTION,
  alternates: { canonical: "/guides" },
  openGraph: {
    type: "website",
    siteName: "Werrise Digital Ltd",
    url: "/guides",
    title: "Guides — Werrise Digital",
    description: DESCRIPTION,
  },
};

export default function GuidesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Guides",
      url: `${SITE_URL}/guides`,
      description: DESCRIPTION,
      dateModified: PAGE_UPDATED.guides,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
    ]),
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-white border-b border-neutral-100 py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Guides
            </p>
            <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-tight mb-5">
              Straight answers for businesses selling abroad.
            </h1>
            <p className="text-lg font-light text-neutral-500 leading-relaxed">
              {DESCRIPTION}
            </p>
            <LastUpdated iso={PAGE_UPDATED.guides} className="mt-3" />
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-4">
          <Link
            href="/resources/international-readiness-checklist"
            data-cta="guides-index-checklist"
            className="block border border-neutral-900 bg-neutral-50 p-6 sm:p-8"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500">Free checklist</span>
            <h2 className="text-xl font-light text-neutral-900 mt-2 mb-2">International Readiness Checklist for SMEs</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">15 points to check before you invest in winning customers abroad.</p>
          </Link>
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="block border border-neutral-200 p-6 sm:p-8 hover:border-neutral-900 transition-colors duration-300"
            >
              <h2 className="text-xl font-light text-neutral-900 mb-2">{g.title}</h2>
              <p className="text-sm text-neutral-500 leading-relaxed mb-3">{g.description}</p>
              <span className="text-xs text-neutral-400">{g.readTime} min read</span>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
