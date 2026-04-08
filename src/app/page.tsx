import Link from "next/link";
import Navbar from "@/components/Navbar";
import { LEGAL_LINKS } from "@/lib/legalLinks";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedService from "@/components/FeaturedService";
import WhyUsSection from "@/components/WhyUsSection";
import ClientTypesSection from "@/components/ClientTypesSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <FeaturedService />
        <WhyUsSection />
        <ClientTypesSection />
        <CTASection />
      </main>
      <footer className="bg-neutral-950 text-neutral-600 py-8 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} RiseTech Information Ltd
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs hover:text-neutral-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
