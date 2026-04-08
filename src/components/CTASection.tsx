"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function CTASection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Advisory Enquiry from ${name}${company ? ` (${company})` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\nMessage:\n${message}\n\n---\nThe sender has agreed to the Terms of Service and Billing Policy.`,
    );
    window.location.href = `mailto:advisory@risetech.info?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-neutral-900 text-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Get Started
            </p>
            <h2 className="text-4xl lg:text-6xl font-light text-white leading-tight mb-6">
              Need Strategic Clarity?
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-lg">
              Work with us to evaluate your strategy, refine your positioning,
              and accelerate growth.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-white text-sm font-medium tracking-wide hover:border-neutral-400 hover:bg-neutral-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              View All Services &amp; Pricing
            </Link>
          </div>

          {/* Right: enquiry form */}
          <div>
            {submitted ? (
              <div className="border border-neutral-700 p-8">
                <p className="text-white font-medium mb-2">
                  Thank you for your enquiry.
                </p>
                <p className="text-neutral-400 text-sm">
                  We will respond within one business day to discuss your
                  requirements.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cta-name"
                      className="block text-xs tracking-widest uppercase text-neutral-500 mb-2"
                    >
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cta-email"
                      className="block text-xs tracking-widest uppercase text-neutral-500 mb-2"
                    >
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="cta-company"
                    className="block text-xs tracking-widest uppercase text-neutral-500 mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="cta-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cta-message"
                    className="block text-xs tracking-widests uppercase text-neutral-500 mb-2"
                  >
                    How can we help? <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="cta-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                  />
                </div>

                {/* Legal acceptance checkbox — required for Stripe compliance */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="cta-agree"
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 flex-shrink-0 cursor-pointer accent-white bg-neutral-800 border-neutral-600"
                  />
                  <label
                    htmlFor="cta-agree"
                    className="text-xs text-neutral-400 leading-relaxed cursor-pointer"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="underline underline-offset-2 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/billing"
                      className="underline underline-offset-2 hover:text-white transition-colors"
                    >
                      Billing Policy
                    </Link>
                    . I understand that fees are due upon written confirmation of
                    engagement.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!agreed}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

