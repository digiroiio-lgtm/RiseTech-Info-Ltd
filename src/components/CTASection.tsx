import Link from "next/link";
import { BOOKING_LABEL, BOOKING_URL, enquiryHref } from "@/lib/booking";

export default function CTASection() {
  return (
    <section id="contact" className="bg-neutral-900 text-white py-14 md:py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
            Get Started
          </p>
          <h2 className="text-4xl lg:text-6xl font-light text-white leading-tight mb-6">
            Need Strategic Clarity?
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed mb-8 md:mb-12 max-w-lg">
            Work with us to evaluate your strategy, refine your positioning, and
            accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={enquiryHref("home-cta")}
              data-cta="enquiry-home-cta"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Send an Enquiry
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="book-call-home-cta"
              className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-white text-sm font-medium tracking-wide hover:border-neutral-400 hover:bg-neutral-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              {BOOKING_LABEL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
