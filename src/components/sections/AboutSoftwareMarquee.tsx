"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";

/** Todas as imagens em `public/softwares/`. */
const SOFTWARE_ICONS = [
  { src: "/softwares/dFaAjllKgR12icoWbwt5LRMd8Co.svg", alt: "Ferramenta" },
  { src: "/softwares/unnamed.png", alt: "Ferramenta" },
  { src: "/softwares/VC5o6lscCcFa03XfPOdeZltqxdQ.png", alt: "Ferramenta" },
  { src: "/softwares/higgsfield-logo-png_seeklogo-660244.png", alt: "Higgsfield" },
  { src: "/softwares/ZCiwSww6Romfg2p2WCBDIjaqdu0.png", alt: "Ferramenta" },
  { src: "/softwares/Claude_AI_symbol.svg", alt: "Claude AI" },
  { src: "/softwares/Hz0gCwbQxcpVlO41HhRZPoUn6g.png", alt: "Ferramenta" },
  { src: "/softwares/aWt8S2FAJgVYqnvJDNFMiOU1tI.svg", alt: "Ferramenta" },
  { src: "/softwares/hrb7ZJ8C0JfUTXU3LHoy5mAGeM.svg", alt: "Ferramenta" },
] as const;

function SoftwareIcon({ item }: { item: (typeof SOFTWARE_ICONS)[number] }) {
  return (
    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-lg border border-white/[0.09] bg-[rgba(22,22,22,0.42)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      <div className="relative h-[60px] w-[60px]">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-contain"
          sizes="60px"
        />
      </div>
    </div>
  );
}

export default function AboutSoftwareMarquee() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative border-y border-white/5 bg-[#0a0a0a]/80 py-6 select-none"
      aria-label="Ferramentas e softwares"
    >
      <div className="relative overflow-hidden px-5 sm:px-8">
        {prefersReducedMotion ? (
          <div className="flex flex-wrap items-center justify-center gap-10 px-4">
            {SOFTWARE_ICONS.map((item) => (
              <SoftwareIcon key={item.src} item={item} />
            ))}
          </div>
        ) : (
          <>
            {/*
              Duas sequências idênticas; -50% do width do track = um ciclo completo (sem pl no flex).
            */}
            <div
              className="flex w-max shrink-0 items-center gap-8 sm:gap-10 md:gap-12"
              style={{
                animation: "marquee 45s linear infinite",
                willChange: "transform",
              }}
            >
              {[0, 1].map((loop) =>
                SOFTWARE_ICONS.map((item, idx) => (
                  <SoftwareIcon key={`${loop}-${item.src}-${idx}`} item={item} />
                )),
              )}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-20" />
          </>
        )}
      </div>
    </div>
  );
}
