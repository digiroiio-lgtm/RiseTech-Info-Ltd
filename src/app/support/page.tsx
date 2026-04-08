import type { Metadata } from "next";
import SupportPageClient from "./SupportPageClient";

export const metadata: Metadata = {
  title: "Support — RiseTech Advisory",
  description:
    "Browse guides, FAQs, and answers to common questions about RiseTech Advisory services.",
};

export default function SupportPage() {
  return <SupportPageClient />;
}
