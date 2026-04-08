import Link from "next/link";
import Navbar from "@/components/Navbar";
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
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <p className="text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} RiseTech Information Ltd
            </p>
            <p className="text-xs">
              Strategic Advisory · Market Intelligence · Growth Architecture
            </p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            {[
              { label: "Terms", href: "/terms" },
              { label: "Privacy", href: "/privacy" },
              { label: "Refund Policy", href: "/refund" },
              { label: "Billing Policy", href: "/billing" },
              { label: "Support", href: "/support" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
