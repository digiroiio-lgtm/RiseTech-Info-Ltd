"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggleButton from "@/components/ThemeToggleButton";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Digital Products", href: "/#digital-products" },
  { label: "Insights", href: "/insights" },
  { label: "Reports", href: "/reports" },
  { label: "Our Team", href: "/team" },
  { label: "Advisory", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2.5 shrink-0"
        >
          <Image
            src="/brand/werrise-logo-light.png"
            alt="Werrise Digital Ltd"
            width={571}
            height={114}
            className="h-9 w-auto dark:hidden"
            priority
          />
          <Image
            src="/brand/werrise-logo-dark.png"
            alt="Werrise Digital Ltd"
            width={412}
            height={87}
            className="hidden h-9 w-auto dark:block"
            priority
          />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-5"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-medium tracking-widest uppercase text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggleButton />
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium tracking-wide hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200"
          >
            Request Advisory
          </Link>
          <button
            ref={menuButton}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 text-neutral-900 dark:text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                d={
                  menuOpen ? "m6 6 12 12M6 18 18 6" : "M4 7h16M4 12h16M4 17h16"
                }
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="lg:hidden border-t border-neutral-200 dark:border-neutral-800 px-6 py-4 max-h-[calc(100dvh-4rem)] overflow-y-auto"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm text-neutral-700 dark:text-neutral-200"
          >
            {link.label}
          </a>
        ))}
        <Link
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="inline-flex mt-2 px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm"
        >
          Request Advisory
        </Link>
      </nav>
    </header>
  );
}
