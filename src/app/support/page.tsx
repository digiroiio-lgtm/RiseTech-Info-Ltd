import type { Metadata } from "next";
import SupportPageClient from "./SupportPageClient";

export const metadata: Metadata = {
  title: "Support — Werrise Digital",
  description:
    "Browse guides, FAQs, and answers to common questions about Werrise Digital services.",
};

export default function SupportPage() {
  return <SupportPageClient />;
}
