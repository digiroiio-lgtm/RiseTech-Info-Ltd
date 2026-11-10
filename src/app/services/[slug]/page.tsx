import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { SERVICES_BY_SLUG, DELIVERY_NOTE } from "@/lib/services";
import { SERVICE_DETAILS, SERVICE_DETAILS_BY_SLUG } from "@/lib/serviceDetails";
import { caseStudies } from "@/lib/caseStudies";
import { SITE_URL, breadcrumbJsonLd, jsonLdString } from "@/lib/jsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_DETAILS.filter((d) => SERVICES_BY_SLUG[d.slug]).map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = SERVICE_DETAILS_BY_SLUG[slug];
  if (!detail) return {};
  const title = `${detail.seoTitle} — Werrise Digital`;
  return {
    title,
    description: detail.seoDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      type: "website",
      siteName: "Werrise Digital Ltd",
      url: `/services/${slug}`,
      title,
      description: detail.seoDescription,
    },
  };
}

const label = "text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-4";
const buyClass =
  "inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2";

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS_BY_SLUG[slug];
  const service = SERVICES_BY_SLUG[slug];
  if (!detail || !service) notFound();

  const url = `${SITE_URL}/services/${slug}`;
  const caseStudy = detail.relatedCaseStudy
    ? caseStudies.find((c) => c.slug === detail.relatedCaseStudy)
    : undefined;
  const related = detail.relatedServices
    .map((s) => SERVICES_BY_SLUG[s])
    .filter(Boolean);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.category,
      description: detail.seoDescription,
      url,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      offers: {
        "@type": "Offer",
        price: String(service.priceGBP),
        priceCurrency: "GBP",
        url,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: detail.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${slug}` },
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
        {/* Hero */}
        <section className="bg-white border-b border-neutral-100 py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 mb-6">
              <Link href="/services" className="hover:text-neutral-900">
                Services
              </Link>{" "}
              / <span>{service.title}</span>
            </nav>
            <p className={label}>{detail.eyebrow}</p>
            <h1 className="text-3xl lg:text-5xl font-light text-neutral-900 leading-tight mb-6">
              {detail.h1}
            </h1>
            <p className="text-lg font-light text-neutral-600 leading-relaxed mb-8">
              {detail.summary}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <span className="text-3xl font-light text-neutral-900">
                {service.price}
                <span className="text-xs text-neutral-500 ml-2">
                  fixed price · GBP · incl. VAT where applicable
                </span>
              </span>
              <Link href={`/checkout?service=${slug}`} className={buyClass} data-cta={`pay-detail-${slug}`}>
                Select &amp; Pay →
              </Link>
            </div>
            <p className="text-xs text-neutral-500 mt-4">{DELIVERY_NOTE}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-14">
          {/* What is included */}
          <section>
            <h2 className={label}>What is included</h2>
            <div className="grid sm:grid-cols-2 gap-px bg-neutral-100">
              {detail.included.map((item) => (
                <div key={item.title} className="bg-white p-6">
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Who it is for */}
          <section>
            <h2 className={label}>Who it is for</h2>
            <ul className="space-y-2">
              {detail.whoFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-neutral-600 leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Process */}
          <section>
            <h2 className={label}>How it works</h2>
            <ol className="grid sm:grid-cols-2 gap-6">
              {detail.process.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="text-xs font-mono text-neutral-300 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 mb-1">
                      {step.title}
                    </p>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Related case study */}
          {caseStudy && (
            <section>
              <h2 className={label}>Related experience</h2>
              <Link
                href={`/case-studies/${caseStudy.slug}`}
                className="block border border-neutral-200 p-6 hover:border-neutral-900 transition-colors duration-300"
              >
                <p className="text-xs text-neutral-400 mb-1">{caseStudy.client}</p>
                <p className="text-base font-semibold text-neutral-900">
                  {caseStudy.headline}
                </p>
                <p className="text-xs text-neutral-500 mt-2">
                  Anonymised example. Results depend on many factors and are not
                  guaranteed.
                </p>
              </Link>
            </section>
          )}

          {/* FAQ */}
          <section>
            <h2 className={label}>FAQ</h2>
            <dl className="space-y-7">
              {detail.faq.map((f) => (
                <div key={f.q}>
                  <dt className="text-base font-semibold text-neutral-900 mb-2">
                    {f.q}
                  </dt>
                  <dd className="text-sm text-neutral-500 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
            <p className="text-xs text-neutral-500 mt-8">
              See our{" "}
              <Link href="/terms" className="underline underline-offset-2">Terms</Link>,{" "}
              <Link href="/billing" className="underline underline-offset-2">Billing Policy</Link>{" "}
              and{" "}
              <Link href="/refund" className="underline underline-offset-2">Refund Policy</Link>.
            </p>
          </section>

          {/* Related services */}
          <section>
            <h2 className={label}>Related services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={SERVICE_DETAILS_BY_SLUG[r.slug] ? `/services/${r.slug}` : "/services"}
                  className="border border-neutral-200 p-5 hover:border-neutral-900 transition-colors duration-300"
                >
                  <span className="block text-sm font-semibold text-neutral-900">
                    {r.title}
                  </span>
                  <span className="block text-xs text-neutral-500 mt-1">
                    {r.price}
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
