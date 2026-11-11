import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, breadcrumbJsonLd, jsonLdString } from "@/lib/jsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";

const DESCRIPTION = fitDescription(
  "Free resources for SMEs selling abroad: checklists and guides on international SEO, website structure and lead generation.",
);

export const metadata: Metadata = {
  title: fitTitle("Free Resources for SMEs Selling Abroad"),
  description: DESCRIPTION,
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Resources",
      url: `${SITE_URL}/resources`,
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
    ]),
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-white border-b border-neutral-100 py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">Resources</p>
            <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-tight mb-5">
              Free resources for businesses selling abroad.
            </h1>
            <p className="text-lg font-light text-neutral-500 leading-relaxed">{DESCRIPTION}</p>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-4">
          <Link
            href="/resources/international-readiness-checklist"
            className="block border border-neutral-200 p-6 sm:p-8 hover:border-neutral-900 transition-colors duration-300"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">Checklist</span>
            <h2 className="text-xl font-light text-neutral-900 mt-2 mb-2">International Readiness Checklist for SMEs</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              15 points to check before you invest in winning customers in other countries.
            </p>
          </Link>
          <Link
            href="/guides"
            className="block border border-neutral-200 p-6 sm:p-8 hover:border-neutral-900 transition-colors duration-300"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">Guides</span>
            <h2 className="text-xl font-light text-neutral-900 mt-2 mb-2">Guides</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Plain-language answers on hreflang, URL structure, Geo-SEO, RFQ forms and more.
            </p>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
