"use client";
import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const TRANSITION = "opacity 0.6s ease, transform 0.6s ease";

    // Collect elements to animate — section headings, cards, and direct wrap children
    const candidates: HTMLElement[] = [];

    // Each section's direct .wrap children (excluding hero which is above fold)
    document.querySelectorAll<HTMLElement>(".iagen .sec .wrap > *").forEach((el) => {
      const section = el.closest("section");
      if (section?.id === "hero") return;
      candidates.push(el);
    });

    // Individual cards that aren't already captured above
    document.querySelectorAll<HTMLElement>(".iagen .card").forEach((el) => {
      if (!candidates.includes(el)) candidates.push(el);
    });

    // Stagger bento cards
    document.querySelectorAll<HTMLElement>(".iagen .bento-card").forEach((el, index) => {
      el.style.transitionDelay = `${index * 70}ms`;
      if (!candidates.includes(el)) candidates.push(el);
    });

    // Deduplicate
    const unique = [...new Set(candidates)];

    // Set initial hidden state
    unique.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = TRANSITION;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    unique.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
