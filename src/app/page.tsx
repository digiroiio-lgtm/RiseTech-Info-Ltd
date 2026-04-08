import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import TrustSection from "@/components/TrustSection";
import AnimatedProofSection from "@/components/AnimatedProofSection";
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
        <AnimatedProofSection />
        <FeaturedServicesSection />
        <CaseStudiesPreviewSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FounderCredibilitySection />
        <ServicesSection />
        <ClientTypesSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
