"use client";

import { useEffect } from "react";

/**
 * Revela [data-reveal] ao entrar na tela. Só esconde os elementos depois que
 * o JS roda (classe .seo-js), então o conteúdo nunca fica invisível sem script.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.querySelector(".seo-lp");
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in");
      else io.observe(el);
    });
    root.classList.add("seo-js");
    return () => io.disconnect();
  }, []);

  return null;
}
