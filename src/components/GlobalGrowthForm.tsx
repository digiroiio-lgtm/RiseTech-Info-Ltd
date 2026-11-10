"use client";

import { useState } from "react";
import Link from "next/link";
import { GG_CTA_LABEL } from "@/lib/globalGrowth";

const ENDPOINT = "https://formspree.io/f/mnppezzo";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900";

export default function GlobalGrowthForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setMessage("");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (response.ok) {
        form.reset();
        setStatus("success");
        return;
      }
      const data = await response.json().catch(() => null);
      setMessage(
        data?.errors?.map((e: { message: string }) => e.message).join(" ") ||
          "Something went wrong. Please try again or email support@wealwaysrise.com.",
      );
      setStatus("error");
    } catch {
      setMessage(
        "Network error. Please try again or email support@wealwaysrise.com.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="bg-white text-neutral-900 p-6 sm:p-8">
        <p className="text-lg font-semibold mb-2">Thank you. Request received.</p>
        <p className="text-sm text-neutral-600">
          We will review your website and target countries and contact you by
          email.
        </p>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white text-neutral-900 p-6 sm:p-8 space-y-4"
    >
      <input type="hidden" name="_subject" value="Global Visibility Review request" />
      {/* Honeypot: real visitors never fill this in */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div>
        <label htmlFor="gg-name" className="block text-xs font-semibold mb-1.5">
          Full name
        </label>
        <input id="gg-name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="gg-email" className="block text-xs font-semibold mb-1.5">
          Business email
        </label>
        <input id="gg-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="gg-company" className="block text-xs font-semibold mb-1.5">
          Company name
        </label>
        <input id="gg-company" name="company" type="text" required autoComplete="organization" className={inputClass} />
      </div>
      <div>
        <label htmlFor="gg-website" className="block text-xs font-semibold mb-1.5">
          Website URL
        </label>
        <input id="gg-website" name="website" type="url" required placeholder="https://" className={inputClass} />
      </div>
      <div>
        <label htmlFor="gg-countries" className="block text-xs font-semibold mb-1.5">
          Target countries (up to three)
        </label>
        <input id="gg-countries" name="target_countries" type="text" required placeholder="e.g. Germany, France, USA" className={inputClass} />
      </div>
      <label className="flex items-start gap-3 text-xs text-neutral-600 leading-relaxed">
        <input type="checkbox" name="privacy_acknowledged" value="yes" required className="mt-0.5" />
        <span>
          I have read the{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          and agree that Werrise Digital Ltd may contact me about this request.
        </span>
      </label>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {message}
        </p>
      )}
      <button
        type="submit"
        data-cta="gdg-review-submit"
        disabled={busy}
        className="w-full inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 disabled:opacity-60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
      >
        {busy ? "Sending…" : GG_CTA_LABEL}
      </button>
    </form>
  );
}
