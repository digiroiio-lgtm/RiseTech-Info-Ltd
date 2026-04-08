import type { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
  title: "Our Team — RiseTech Advisory",
  description:
    "Meet the executive team, senior management, and board of directors at RiseTech Advisory.",
};

export default function TeamPage() {
  return <TeamPageClient />;
}
