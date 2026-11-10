"use client";

import { useState } from "react";
import Link from "next/link";
import { BOOKING_LABEL, BOOKING_URL } from "@/lib/booking";

const ENDPOINT = "https://formspree.io/f/mnppezzo";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900";

const TOPICS = [
  "Advisory or consulting",
  "SEO or growth service",
  "Intelligence report",
  "Global Digital Growth",
  "Something else",
];

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setMessage("");
    try {
      const body = new FormData(form);
      // Which CTA/page sent the visitor here (set by enquiryHref()).
      const from = new URLSearchParams(window.location.search).get("from");
      body.set("enquiry_source", (from || "direct").slice(0, 60));
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
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
      setMessage("Network error. Please try again or email support@wealwaysrise.com.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-neutral-200 p-6 sm:p-8">
        <p className="text-lg font-semibold text-neutral-900 mb-2">
          Thank you. Your enquiry has been received.
        </p>
        <p className="text-sm text-neutral-600 mb-4">
          We will reply by email. If you would rather talk now, pick a time that suits you.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="book-call-enquiry-success"
          className="inline-flex items-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
        >
          {BOOKING_LABEL}
        </a>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="border border-neutral-200 p-6 sm:p-8 space-y-4">
      <input type="hidden" name="_subject" value="Website enquiry" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div>
        <label htmlFor="enq-name" className="block text-xs font-semibold mb-1.5">Full name</label>
        <input id="enq-name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="enq-email" className="block text-xs font-semibold mb-1.5">Business email</label>
        <input id="enq-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="enq-company" className="block text-xs font-semibold mb-1.5">Company (optional)</label>
        <input id="enq-company" name="company" type="text" autoComplete="organization" className={inputClass} />
      </div>
      <div>
        <label htmlFor="enq-topic" className="block text-xs font-semibold mb-1.5">What is this about?</label>
        <select id="enq-topic" name="topic" required defaultValue="" className={inputClass}>
          <option value="" disabled>Choose one</option>
          {TOPICS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="enq-message" className="block text-xs font-semibold mb-1.5">How can we help?</label>
        <textarea id="enq-message" name="message" required rows={4} className={inputClass} />
      </div>
      <label className="flex items-start gap-3 text-xs text-neutral-600 leading-relaxed">
        <input type="checkbox" name="privacy_acknowledged" value="yes" required className="mt-0.5" />
        <span>
          I have read the{" "}
          <Link href="/privacy" className="underline underline-offset-2">Privacy Policy</Link>{" "}
          and agree that Werrise Digital Ltd may contact me about this enquiry.
        </span>
      </label>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">{message}</p>
      )}
      <button
        type="submit"
        disabled={busy}
        data-cta="enquiry-submit"
        className="w-full inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 disabled:opacity-60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
      >
        {busy ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
