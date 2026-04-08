import Link from "next/link";
import Navbar from "@/components/Navbar";
import { LEGAL_LINKS } from "@/lib/legalLinks";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import TrustSection from "@/components/TrustSection";
import FeaturedServicesSection from "@/components/FeaturedServicesSection";
import CaseStudiesPreviewSection from "@/components/CaseStudiesPreviewSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FounderCredibilitySection from "@/components/FounderCredibilitySection";
import ServicesSection from "@/components/ServicesSection";
import ClientTypesSection from "@/components/ClientTypesSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <WhatWeDoSection />
        <TrustSection />
        <FeaturedServicesSection />
        <CaseStudiesPreviewSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FounderCredibilitySection />
        <ServicesSection />
        <ClientTypesSection />
        <CTASection />
      </main>
      <footer className="bg-neutral-950 text-neutral-600 py-8 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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
          <p className="text-xs text-center sm:text-left text-neutral-700">
            Strategic Advisory · Market Intelligence · Growth Architecture · Advisory Marketplace
          </p>
        </div>
      </footer>
    </>
  );
}
