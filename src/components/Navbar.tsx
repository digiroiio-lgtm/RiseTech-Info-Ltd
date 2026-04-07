import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.15em] uppercase text-neutral-900"
        >
          RiseTech
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Services", href: "#services" },
            { label: "Intelligence", href: "#services" },
            { label: "Advisory", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center px-5 py-2.5 bg-neutral-900 text-white text-xs font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
        >
          Request Advisory
        </a>
      </div>
    </header>
  );
}
