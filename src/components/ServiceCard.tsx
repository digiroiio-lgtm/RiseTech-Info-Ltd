import Link from "next/link";

interface ServiceCardProps {
  slug?: string;
  showCheckoutLink?: boolean;
  title: string;
  description: string;
  price: string;
}

export default function ServiceCard({
  slug,
  showCheckoutLink = false,
  title,
  description,
  price,
}: ServiceCardProps) {
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
      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
        <span className="text-xl font-light text-neutral-900">{price}</span>
        {showCheckoutLink && slug ? (
          <Link
            href={`/checkout?service=${slug}`}
            className="inline-flex items-center px-4 py-2 bg-neutral-900 text-white text-xs font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
          >
            Select &amp; Pay →
          </Link>
        ) : (
          <Link
            href="/#contact"
            className="inline-flex items-center px-4 py-2 bg-neutral-900 text-white text-xs font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200 group-hover:bg-neutral-900"
          >
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
}
