import Link from "next/link";
import { LEGAL_LINKS } from "@/lib/legalLinks";

export default function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-neutral-500 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Brand + description + contact */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 pb-8 border-b border-neutral-800">
          <div className="max-w-sm">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-white">
              RiseTech Advisory
            </p>
            <p className="text-xs text-neutral-600 mt-0.5">
              Operated by RiseTech Information Ltd
            </p>
            <p className="text-xs leading-relaxed mt-4 text-neutral-500">
              Advisory and strategy consulting services for founders and companies.
            </p>
            <p className="text-xs mt-3">
              <span className="text-neutral-600">Contact: </span>
              <a
                href="mailto:support@wealwaysrise.com"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                support@wealwaysrise.com
              </a>
            </p>
          </div>

          {/* Legal links */}
          <nav className="flex flex-wrap items-start gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] tracking-widest uppercase text-neutral-600">
            &copy; {new Date().getFullYear()} RiseTech Information Ltd
          </p>
          <p className="text-[11px] text-neutral-700">
            Strategic Advisory &middot; Market Intelligence &middot; Growth Architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
