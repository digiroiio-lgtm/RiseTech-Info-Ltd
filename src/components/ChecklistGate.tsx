"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { CHECKLIST, CHECKLIST_VISIBLE_COUNT } from "@/lib/checklist";
import { BOOKING_LABEL, BOOKING_URL } from "@/lib/booking";

const ENDPOINT = "https://formspree.io/f/mnppezzo";
const STORAGE_KEY = "irc-unlocked-v1";

const inputClass =
  "w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900";

// Remembers the unlock in this browser only. Safe on the server and without storage.
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("irc-unlock", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("irc-unlock", callback);
  };
}
function readUnlocked(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

type Status = "idle" | "submitting" | "error";

export default function ChecklistGate() {
  const remembered = useSyncExternalStore(subscribe, readUnlocked, () => false);
  const [unlockedNow, setUnlockedNow] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const unlocked = remembered || unlockedNow;
  const hidden = CHECKLIST.slice(CHECKLIST_VISIBLE_COUNT);

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
        try {
          window.localStorage.setItem(STORAGE_KEY, "1");
          window.dispatchEvent(new Event("irc-unlock"));
        } catch {
          // storage unavailable: still unlock for this visit
        }
        setUnlockedNow(true);
        setStatus("idle");
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

  if (unlocked) {
    return (
      <div>
        <p className="text-sm text-neutral-600 mb-6" role="status">
          Thank you. Here is the full checklist (items {CHECKLIST_VISIBLE_COUNT + 1}-{CHECKLIST.length}).
        </p>
        <ol start={CHECKLIST_VISIBLE_COUNT + 1} className="space-y-6">
          {hidden.map((item, index) => {
            const showGroup = index === 0 || hidden[index - 1].group !== item.group;
            return (
              <li key={item.id}>
                {showGroup && (
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-2">
                    {item.group}
                  </p>
                )}
                <h3 className="text-base font-semibold text-neutral-900 mb-1">
                  {item.id}. {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.body}</p>
                {item.guide && (
                  <Link href={item.guide.href} className="text-xs text-neutral-500 underline underline-offset-4 hover:text-neutral-900">
                    {item.guide.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
        <div className="mt-10 border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-base font-semibold text-neutral-900 mb-2">Want help working through it?</p>
          <p className="text-sm text-neutral-600 mb-4">
            Request the free Global Visibility Review, or book a 30-minute call.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/services/global-digital-growth#review"
              data-cta="checklist-gdg-review"
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors duration-200"
            >
              Request a Free Global Visibility Review
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="checklist-book-call"
              className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 text-neutral-900 text-sm font-medium hover:border-neutral-900 transition-colors duration-200"
            >
              {BOOKING_LABEL}
            </a>
          </div>
        </div>
      </div>
    );
  }

  const busy = status === "submitting";
  return (
    <form onSubmit={onSubmit} className="border border-neutral-200 p-6 sm:p-8 space-y-4">
      <div>
        <p className="text-lg font-semibold text-neutral-900 mb-1">
          Unlock the remaining {hidden.length} items
        </p>
        <p className="text-sm text-neutral-600">
          Enter your details and the full checklist opens on this page.
        </p>
      </div>
      <input type="hidden" name="_subject" value="International Readiness Checklist" />
      <input type="hidden" name="lead_magnet" value="international-readiness-checklist" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div>
        <label htmlFor="irc-name" className="block text-xs font-semibold mb-1.5">Full name</label>
        <input id="irc-name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="irc-email" className="block text-xs font-semibold mb-1.5">Business email</label>
        <input id="irc-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="irc-company" className="block text-xs font-semibold mb-1.5">Company (optional)</label>
        <input id="irc-company" name="company" type="text" autoComplete="organization" className={inputClass} />
      </div>
      <label className="flex items-start gap-3 text-xs text-neutral-600 leading-relaxed">
        <input type="checkbox" name="privacy_acknowledged" value="yes" required className="mt-0.5" />
        <span>
          I have read the{" "}
          <Link href="/privacy" className="underline underline-offset-2">Privacy Policy</Link>{" "}
          and agree that Werrise Digital Ltd may contact me about this checklist and related services.
        </span>
      </label>
      {status === "error" && <p role="alert" className="text-sm text-red-700">{message}</p>}
      <button
        type="submit"
        disabled={busy}
        data-cta="checklist-unlock"
        className="w-full inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 disabled:opacity-60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
      >
        {busy ? "Sending…" : "Unlock the full checklist"}
      </button>
    </form>
  );
}
