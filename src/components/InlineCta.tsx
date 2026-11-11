import Link from "next/link";
import { BOOKING_LABEL, BOOKING_URL, enquiryHref } from "@/lib/booking";

interface InlineCtaProps {
  /** Where the visitor is: becomes the enquiry source and the data-cta suffix (e.g. "guide-hreflang"). */
  source: string;
  heading: string;
  body: string;
  /** Optional extra link, e.g. the related service. */
  extra?: { label: string; href: string };
}

export default function InlineCta({ source, heading, body, extra }: InlineCtaProps) {
  return (
    <section
      aria-label={heading}
      className="border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
    >
      <h2 className="text-xl font-light text-neutral-900 mb-2">{heading}</h2>
      <p className="text-sm text-neutral-600 leading-relaxed mb-6 max-w-xl">{body}</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <Link
          href={enquiryHref(source)}
          data-cta={`inline-enquiry-${source}`}
          className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
        >
          Send an Enquiry
        </Link>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cta={`inline-book-${source}`}
          className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 text-neutral-900 text-sm font-medium tracking-wide hover:border-neutral-900 transition-colors duration-200"
        >
          {BOOKING_LABEL}
        </a>
        {extra && (
          <Link
            href={extra.href}
            data-cta={`inline-extra-${source}`}
            className="text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 sm:ml-2"
          >
            {extra.label} →
          </Link>
        )}
      </div>
    </section>
  );
}
