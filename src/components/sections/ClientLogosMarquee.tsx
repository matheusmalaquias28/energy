"use client";

import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CLIENT_LOGOS = [
  { src: "/logos/federal-logo.png", alt: "Federal" },
  { src: "/logos/green-station-logo.png", alt: "Green Station" },
  { src: "/logos/cholate-araucaria-logo.png", alt: "Cholate Araucária" },
  { src: "/logos/mellow-me-logo-1.png", alt: "Mellow Me" },
  { src: "/logos/ioa-logo.png", alt: "IOA" },
  { src: "/logos/mrrice.png", alt: "Mr Rice" },
  { src: "/logos/recta-securitizadora-logo.png", alt: "Recta Securitizadora" },
  { src: "/logos/alvim-advogados-logo.png", alt: "Alvim Advogados" },
  { src: "/logos/tmb-logo.png", alt: "TMB" },
  { src: "/logos/mellow-me-logo.png", alt: "Mellow Me" },
  { src: "/logos/above-logo.png", alt: "Above" },
  { src: "/logos/vitor-miranda-logo.png", alt: "Vitor Miranda" },
  { src: "/logos/luri-logo.png", alt: "Luri" },
  { src: "/logos/bres-logo.png", alt: "Bres" },
  { src: "/logos/scale-logo.png", alt: "Scale" },
  { src: "/logos/aguas-petropolis.png", alt: "Águas Petrópolis" },
] as const;

function ClientLogo({
  logo,
  instanceId,
  active,
}: {
  logo: (typeof CLIENT_LOGOS)[number];
  instanceId: string;
  active: boolean;
}) {
  return (
    <div
      className="relative h-14 w-[7.5rem] shrink-0 sm:h-16 sm:w-36"
      data-client-logo=""
      data-instance-id={instanceId}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        fill
        className={`object-contain transition-[opacity,filter] duration-300 ${
          active
            ? "opacity-100 grayscale-0"
            : "opacity-65 grayscale hover:opacity-100 hover:grayscale-0"
        }`}
        sizes="(max-width: 640px) 7.5rem, 9rem"
      />
    </div>
  );
}

export default function ClientLogosMarquee() {
  const prefersReducedMotion = useReducedMotion();
  const trackViewportRef = useRef<HTMLDivElement>(null);
  const [activeInstanceId, setActiveInstanceId] = useState<string | null>(null);
  const lastActiveRef = useRef<string | null>(null);

  useEffect(() => {
    lastActiveRef.current = null;
    setActiveInstanceId(null);

    let rafId = 0;
    const tick = () => {
      const vp = trackViewportRef.current;
      if (vp) {
        const vpRect = vp.getBoundingClientRect();
        const centerX = vpRect.left + vpRect.width / 2;
        const nodes = vp.querySelectorAll<HTMLElement>("[data-client-logo]");
        let bestId: string | null = null;
        let bestDist = Infinity;
        nodes.forEach((node) => {
          const r = node.getBoundingClientRect();
          if (r.width === 0) return;
          const cx = r.left + r.width / 2;
          const d = Math.abs(cx - centerX);
          if (d < bestDist) {
            bestDist = d;
            bestId = node.dataset.instanceId ?? null;
          }
        });
        if (bestId !== null && bestId !== lastActiveRef.current) {
          lastActiveRef.current = bestId;
          setActiveInstanceId(bestId);
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [prefersReducedMotion]);

  return (
    <section
      className="relative border-b border-white/5 bg-[#0a0a0a] py-10 sm:py-12"
      aria-label="Logos de clientes"
    >
      <p className="mb-6 text-center text-[10px] uppercase tracking-[0.28em] text-white/35 sm:mb-8 sm:text-[11px]">
        AS MELHORES NOS ESCOLHEM.
      </p>

      <div ref={trackViewportRef} className="relative overflow-hidden">
        {prefersReducedMotion ? (
          <div className="flex flex-wrap items-center justify-center gap-8 px-4 sm:gap-10">
            {CLIENT_LOGOS.map((logo, idx) => (
              <ClientLogo
                key={logo.src}
                logo={logo}
                instanceId={`static-${idx}`}
                active={activeInstanceId === `static-${idx}`}
              />
            ))}
          </div>
        ) : (
          <>
            <div
              className="flex w-max gap-10 pl-6 sm:gap-14 sm:pl-10"
              style={{
                animation: "marquee 45s linear infinite",
                willChange: "transform",
              }}
            >
              {[0, 1].map((loop) =>
                CLIENT_LOGOS.map((logo, idx) => (
                  <ClientLogo
                    key={`${loop}-${logo.src}-${idx}`}
                    logo={logo}
                    instanceId={`${loop}-${idx}`}
                    active={activeInstanceId === `${loop}-${idx}`}
                  />
                )),
              )}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-24" />
          </>
        )}
      </div>
    </section>
  );
}
