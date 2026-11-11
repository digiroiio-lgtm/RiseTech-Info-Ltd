/**
 * Date each key page's content last really changed. Shown as "Last updated" and
 * used for dateModified in JSON-LD. Update a date only when the page content changes.
 */
export const PAGE_UPDATED = {
  services: "2026-11-10",
  globalDigitalGrowth: "2026-11-10",
  caseStudies: "2026-11-10",
  guides: "2026-11-11",
  resources: "2026-11-11",
} as const;

export function formatUpdated(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
