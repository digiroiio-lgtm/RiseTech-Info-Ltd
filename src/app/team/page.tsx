import type { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
  alternates: { canonical: "/team" },
  title: "Our Team — Werrise Digital",
  description:
    "Meet the executive team, senior management, and board of directors at Werrise Digital.",
};

export default function TeamPage() {
  return <TeamPageClient />;
}
