"use client";

import { useId, useState, type ReactNode } from "react";

interface CollapsibleCategoryProps {
  header: ReactNode;
  /** Short label shown beside the chevron on mobile, e.g. "5 services". */
  meta?: string;
  children: ReactNode;
  /** Classes that always apply. */
  className?: string;
  /** Extra classes while expanded / collapsed (small screens; md: overrides in className). */
  openClassName?: string;
  closedClassName?: string;
}

/**
 * Accordion on small screens, always expanded from `md` up.
 * Content stays in the DOM when collapsed, so it remains crawlable.
 */
export default function CollapsibleCategory({
  header,
  meta,
  children,
  className = "",
  openClassName = "",
  closedClassName = "",
}: CollapsibleCategoryProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={`${className} ${open ? openClassName : closedClassName}`}>
      <div
        className="flex items-start justify-between gap-3 md:block cursor-pointer md:cursor-auto"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="min-w-0 flex-1">{header}</div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Collapse category" : "Expand category"}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
          className="md:hidden shrink-0 mt-1 flex items-center gap-2 text-xs text-neutral-500"
        >
          {meta ? <span>{meta}</span> : null}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className={`transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
          >
            <path
              d="M3.5 6L8 10.5L12.5 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div id={panelId} className={open ? "" : "hidden md:block"}>
        {children}
      </div>
    </div>
  );
}
