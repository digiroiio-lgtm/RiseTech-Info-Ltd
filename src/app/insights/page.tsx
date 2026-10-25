import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import InsightsPageClient from "./InsightsPageClient";

export const metadata: Metadata = {
  title: "Insights — Werrise Digital Insights",
  description:
    "Strategic intelligence for founders, operators, and investors. Market analysis, startup strategy, growth frameworks, and investor intelligence from Werrise Digital.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <InsightsPageClient />
      </main>
      <SiteFooter />
    </>
  );
}

