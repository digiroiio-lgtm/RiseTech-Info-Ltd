import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center justify-center w-16 h-16 border border-neutral-200 text-neutral-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-light text-neutral-900 mb-4">
          Payment successful.
        </h1>
        <p className="text-sm text-neutral-500 leading-relaxed mb-10">
          Our team will contact you within 24 hours.
        </p>
        <Link
          href="/"
          className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-200 underline-offset-4 hover:underline"
        >
          ← Return to Home
        </Link>
      </div>
    </main>
  );
}
