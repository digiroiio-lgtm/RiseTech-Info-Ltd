"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./DigitalProductsSection.module.css";
import { industryPerspectives } from "./industryPerspectives";

// Only individually approved statements are ever published.
const items = industryPerspectives.filter((item) => item.approved);

export default function IndustryPerspectives() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    const max = track.scrollWidth - track.clientWidth;
    if (max <= 0) return;
    if (track.scrollLeft >= max - 2) {
      setActive(track.children.length - 1);
      return;
    }
    const step = (track.children[1] as HTMLElement | undefined)?.offsetLeft ?? 1;
    const first = (track.children[0] as HTMLElement).offsetLeft;
    setActive(Math.round((track.scrollLeft + first) / step));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, [updateActive]);

  if (items.length === 0) return null;

  const goTo = (index: number) => {
    const card = trackRef.current?.children[index] as HTMLElement | undefined;
    if (!card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    card.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <div className={styles.perspectives}>
      <div className={styles.audienceIntro}>
        <div>
          <p className={styles.eyebrow}>INDUSTRY PERSPECTIVES</p>
          <h3 id="industry-perspectives-heading">
            Better workflows. More room to grow.
          </h3>
        </div>
        <p>
          How professionals across different industries see the value of
          AI-powered daily operations.
        </p>
      </div>
      <ul
        ref={trackRef}
        className={styles.perspectiveTrack}
        tabIndex={0}
        aria-labelledby="industry-perspectives-heading"
      >
        {items.map((item) => (
          <li key={item.name} className={styles.perspectiveCard}>
            <figure>
              <p className={styles.perspectiveLabel}>{item.industry}</p>
              <blockquote>
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>
                  {item.role} · {item.company}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className={styles.perspectiveDots}>
        {items.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show ${item.industry} perspective`}
            aria-current={active === index ? "true" : undefined}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
