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
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} RiseTech Information Ltd
          </p>
          <p className="text-xs">
            Strategic Advisory · Market Intelligence · Growth Architecture
          </p>
        </div>
      </footer>
    </>
  );
}
