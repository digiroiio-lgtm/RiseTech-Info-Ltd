"use client";

import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  priceInPence: number;
}

export default function ServiceCard({
  title,
  description,
  price,
  priceInPence,
}: ServiceCardProps) {
  const [loading, setLoading] = useState(false);

  async function handlePurchase() {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: title, amount: priceInPence }),
      });
      if (!res.ok) throw new Error("Failed to create checkout session");
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="group border border-neutral-200 bg-white p-8 flex flex-col justify-between hover:border-neutral-900 hover:shadow-sm transition-all duration-300">
      {/* Top */}
      <div>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-base font-semibold text-neutral-900 leading-snug">
            {title}
          </h3>
        </div>
        <p className="text-sm text-neutral-500 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
        <span className="text-xl font-light text-neutral-900">{price}</span>
        <button
          onClick={handlePurchase}
          disabled={loading}
          aria-label={`Buy ${title}`}
          className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-neutral-900 transition-colors duration-200 underline-offset-4 hover:underline cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Processing…" : "Buy Now →"}
        </button>
      </div>
    </div>
  );
}
