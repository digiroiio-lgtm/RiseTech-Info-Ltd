import Link from "next/link";
import { quoteHref } from "@/lib/services";

interface ServiceCardProps {
  /** Present only for services that can be bought through checkout. */
  slug?: string;
  title: string;
  description: string;
  /** Present only together with `slug`; services without one are quote-only. */
  price?: string;
}

const buttonClass =
  "inline-flex items-center px-4 py-2 bg-neutral-900 text-white text-xs font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200";

export default function ServiceCard({
  slug,
  title,
  description,
  price,
}: ServiceCardProps) {
  const payable = Boolean(slug && price);
  return (
    <div className="group border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-900 hover:shadow-sm transition-all duration-300">
      {/* Top */}
      <div>
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <h3 className="text-base font-semibold text-neutral-900 leading-snug">
            {title}
          </h3>
        </div>
        <p className="text-sm text-neutral-500 leading-relaxed mb-4 sm:mb-6">
          {description}
        </p>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between gap-3 pt-4 border-t border-neutral-100">
        {payable ? (
          <>
            <span className="text-xl font-light text-neutral-900">{price}</span>
            <Link href={`/checkout?service=${slug}`} className={buttonClass}>
              Select &amp; Pay →
            </Link>
          </>
        ) : (
          <>
            <span className="text-sm text-neutral-500">Custom quote</span>
            <a href={quoteHref(title)} className={buttonClass}>
              Request a Quote
            </a>
          </>
        )}
      </div>
    </div>
  );
}
