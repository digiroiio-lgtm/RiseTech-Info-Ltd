import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { caseStudies } from "@/lib/caseStudies";
import { ILLUSTRATIVE_NOTE } from "@/lib/services";
import { SITE_URL, breadcrumbJsonLd, jsonLdString } from "@/lib/jsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";
import InlineCta from "@/components/InlineCta";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  const description = fitDescription(`${cs.client}: ${cs.result}`);
  return {
    title: fitTitle(cs.headline),
    description,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      type: "article",
      siteName: "Werrise Digital Ltd",
      url: `/case-studies/${cs.slug}`,
      title: cs.headline,
      description,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const cs = caseStudies[index];

  const related = [
    ...caseStudies.filter((c) => c.slug !== cs.slug && c.tag === cs.tag),
    ...caseStudies.filter((c) => c.slug !== cs.slug && c.tag !== cs.tag),
  ].slice(0, 2);

  const url = `${SITE_URL}/case-studies/${cs.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: cs.headline,
      description: `${cs.client}: ${cs.result}`,
      articleSection: cs.tag,
      about: cs.service,
      mainEntityOfPage: url,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-studies" },
      { name: cs.headline, path: `/case-studies/${cs.slug}` },
    ]),
  ];

  const label =
    "text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-3";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <div className="bg-neutral-950 text-white py-14 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 mb-6">
              <Link href="/case-studies" className="hover:text-white">
                Case Studies
              </Link>{" "}
              / <span className="text-neutral-400">{cs.tag}</span>
            </nav>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-4">
              {cs.client}
            </p>
            <h1 className="text-3xl lg:text-5xl font-light leading-tight text-white">
              {cs.headline}
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          {/* Summary (answer-first) */}
          <section className="bg-neutral-50 border border-neutral-200 p-6 sm:p-8 mb-12">
            <p className={label}>Summary</p>
            <p className="text-base text-neutral-800 leading-relaxed mb-6">
              {cs.client} worked with Werrise Digital on{" "}
              <strong>{cs.service}</strong>. {cs.result}
            </p>
            <ul className="grid sm:grid-cols-3 gap-6">
              {cs.metrics.map((m) => (
                <li key={m.label}>
                  <span className="block text-2xl font-light text-neutral-900">
                    {m.value}
                  </span>
                  <span className="text-xs text-neutral-500 leading-tight">
                    {m.label}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={label}>The challenge</h2>
            <p className="text-neutral-700 leading-relaxed">{cs.challenge}</p>
          </section>
          <section className="mb-10">
            <h2 className={label}>Our approach</h2>
            <p className="text-neutral-700 leading-relaxed">{cs.approach}</p>
          </section>
          <section className="mb-10">
            <h2 className={label}>The result</h2>
            <p className="text-neutral-700 leading-relaxed">{cs.result}</p>
          </section>

          <p className="text-xs text-neutral-500 mb-12">
            {ILLUSTRATIVE_NOTE} Results depend on many factors and are not
            guaranteed.
          </p>

          <InlineCta
            source={`case-${cs.slug}`.slice(0, 50)}
            heading="Want a similar outcome?"
            body="Tell us about your business and we will suggest where to start. Results depend on many factors and are not guaranteed."
            extra={{ label: "See our services", href: "/services" }}
          />

          {/* Related */}
          <section>
            <p className={label}>More case studies</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/case-studies/${r.slug}`}
                  className="border border-neutral-200 p-5 hover:border-neutral-900 transition-colors duration-300"
                >
                  <span className="text-xs text-neutral-400">{r.tag}</span>
                  <span className="block text-sm font-semibold text-neutral-900 mt-1">
                    {r.headline}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
