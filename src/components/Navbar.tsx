import Link from "next/link";
import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.15em] uppercase text-neutral-900 dark:text-white"
        >
          RiseTech
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Services", href: "#services" },
            { label: "Intelligence", href: "#services" },
            { label: "Our Team", href: "/team" },
            { label: "Advisory", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + theme toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggleButton />
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium tracking-wide hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200"
          >
            Request Advisory
          </a>
        </div>
      </div>
    </header>
  );
}
