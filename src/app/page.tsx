import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import HeroSection from "@/components/HeroSection";
import DigitalProductsSection from "@/components/DigitalProductsSection";
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
import InsightsPreviewSection from "@/components/InsightsPreviewSection";
import ReportsPreviewSection from "@/components/ReportsPreviewSection";
import HomeAnswerSection from "@/components/HomeAnswerSection";
import HomeFaqSection from "@/components/HomeFaqSection";
import { HOME_FAQ, HOME_LAST_UPDATED } from "@/lib/homeContent";
import { SITE_URL, jsonLdString } from "@/lib/jsonLd";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Werrise Digital — Business Consultancy, AI & Technology, Software, Digital Growth",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    dateModified: HOME_LAST_UPDATED,
    inLanguage: "en-GB",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(homeJsonLd) }}
      />
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <HomeAnswerSection />
        <DigitalProductsSection />
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
        <InsightsPreviewSection />
        <ReportsPreviewSection />
        <HomeFaqSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
