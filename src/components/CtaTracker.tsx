"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Sends a "cta_click" event for any click inside an element with a
 * data-cta="<name>" attribute. Page views are tracked by <Analytics />.
 * No cookies and no personal data are sent: only the CTA name and the path.
 */
export default function CtaTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const el = target?.closest?.("[data-cta]");
      const cta = el?.getAttribute("data-cta");
      if (!cta) return;
      try {
        track("cta_click", { cta, page: window.location.pathname });
      } catch {
        // analytics must never break the page
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
