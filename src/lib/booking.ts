/** Public Calendly page for the 30-minute strategy call. Single source for every "book a call" CTA. */
export const BOOKING_URL = "https://calendly.com/digiroiio/30min";
export const BOOKING_LABEL = "Book a 30-Minute Call";

/** Link to the enquiry form on /contact, tagging where the visitor came from. */
export function enquiryHref(source: string): string {
  return `/contact?from=${encodeURIComponent(source)}#enquiry`;
}
