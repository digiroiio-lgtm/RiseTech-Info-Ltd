export const BRAND_SUFFIX = " — Werrise Digital";

/** Cuts text at a word boundary so it fits in `max` characters, adding an ellipsis. */
export function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut;
  return `${base.replace(/[\s,;:.\-—]+$/, "")}…`;
}

/** Page title with the brand suffix when it fits; otherwise the title alone (truncated if needed). */
export function fitTitle(base: string, max = 70): string {
  const full = `${base}${BRAND_SUFFIX}`;
  return full.length <= max ? full : truncate(base, max);
}

export const META_DESCRIPTION_MAX = 155;
export function fitDescription(text: string): string {
  return truncate(text, META_DESCRIPTION_MAX);
}
