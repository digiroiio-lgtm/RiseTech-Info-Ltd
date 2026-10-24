import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

interface Section {
  heading: string;
  items?: string[];
  paragraphs?: string[];
  subsections?: { heading: string; items?: string[]; paragraphs?: string[] }[];
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export default function LegalPage({
  title,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.15em] uppercase text-neutral-900"
          >
            RiseTech
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center px-5 py-2.5 bg-neutral-900 text-white text-xs font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
          >
            Request Advisory
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Header */}
        <div className="bg-neutral-950 text-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-4">
              Legal
            </p>
            <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-4">
              {title}
            </h1>
            <p className="text-sm text-neutral-500">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          {sections.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4 tracking-wide">
                {section.heading}
              </h2>

              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-neutral-600 leading-relaxed mb-3">
                  {p}
                </p>
              ))}

              {section.items && section.items.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-neutral-600 text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections?.map((sub, si) => (
                <div key={si} className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-3">
                    {sub.heading}
                  </h3>
                  {sub.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="text-neutral-600 leading-relaxed mb-3"
                    >
                      {p}
                    </p>
                  ))}
                  {sub.items && sub.items.length > 0 && (
                    <ul className="mt-2 space-y-1.5">
                      {sub.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-neutral-600 text-sm leading-relaxed"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
