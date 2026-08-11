"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const STEPS = [
  {
    num: "01",
    title: "Entendimento",
    body: "Entendemos seu negócio, público, oferta e objetivo.",
  },
  {
    num: "02",
    title: "Estratégia e copy",
    body: "Definimos o que a página precisa comunicar e como conduzir o visitante.",
  },
  {
    num: "03",
    title: "Design",
    body: "Transformamos a estratégia em uma experiência visual profissional.",
  },
  {
    num: "04",
    title: "Desenvolvimento",
    body: "A página ganha vida, com responsividade e integrações necessárias.",
  },
  {
    num: "05",
    title: "Publicação",
    body: "Você recebe a estrutura pronta para colocar suas campanhas para rodar.",
  },
] as const;

const PROGRESS_MS = 1000;
const COMPLETE_FLASH_MS = 320;
const SLIDE_MS = 450;
const CARD_HEIGHT = 124;
const CARD_GAP = 12;
const STEP_STRIDE = CARD_HEIGHT + CARD_GAP;
const VIEWPORT_HEIGHT = STEP_STRIDE * 3 - CARD_GAP;
const CENTER_OFFSET = (VIEWPORT_HEIGHT - CARD_HEIGHT) / 2;

type Phase = "loading" | "complete" | "sliding";

function StepIcon({
  isLoading,
  isComplete,
  isCenterComplete,
  reduceMotion,
}: {
  isLoading: boolean;
  isComplete: boolean;
  isCenterComplete: boolean;
  reduceMotion: boolean;
}) {
  if (isCenterComplete) {
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FE4101]/20 ring-1 ring-[#FE4101]/45">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20 6L9 17l-5-5"
            stroke="#FE4101"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  if (isLoading) {
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FE4101]/15 ring-1 ring-[#FE4101]/50 shadow-[0_0_18px_rgba(254,65,1,0.35)]">
        <svg
          className={`h-4 w-4 text-[#FE4101] ${reduceMotion ? "" : "animate-spin"}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
          <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </span>
    );
  }

  if (isComplete) {
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FE4101]/10 ring-1 ring-[#FE4101]/25">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20 6L9 17l-5-5"
            stroke="#FE4101"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
      <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden />
    </span>
  );
}

export function ProcessStepper() {
  const items = useMemo(() => [...STEPS, ...STEPS, ...STEPS], []);
  const loopStart = STEPS.length;
  const loopEnd = STEPS.length * 2;

  const [index, setIndex] = useState<number>(loopStart);
  const [phase, setPhase] = useState<Phase>("loading");
  const [fillActive, setFillActive] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const timersRef = useRef<number[]>([]);
  const phaseRef = useRef<Phase>("loading");
  const indexRef = useRef<number>(loopStart);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timersRef.current.push(id);
  }, []);

  const startLoadingCycle = useCallback(() => {
    clearTimers();
    setPhase("loading");
    phaseRef.current = "loading";
    setFillActive(false);
    schedule(() => setFillActive(true), 48);
    schedule(() => {
      setPhase("complete");
      phaseRef.current = "complete";
    }, PROGRESS_MS);
    schedule(() => {
      setPhase("sliding");
      phaseRef.current = "sliding";
      setIndex((prev) => prev + 1);
    }, PROGRESS_MS + COMPLETE_FLASH_MS);
  }, [clearTimers, schedule]);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(reduced);

    if (reduced) {
      setFillActive(true);
      setPhase("complete");
      phaseRef.current = "complete";
      return;
    }

    startLoadingCycle();
    return clearTimers;
  }, [startLoadingCycle, clearTimers]);

  const handleTrackTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "transform" || event.target !== event.currentTarget) return;
    if (phaseRef.current !== "sliding") return;

    const currentIndex = indexRef.current;

    if (currentIndex >= loopEnd) {
      setTransitionEnabled(false);
      indexRef.current = loopStart;
      setIndex(loopStart);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          startLoadingCycle();
        });
      });
      return;
    }

    startLoadingCycle();
  };

  const translateY = CENTER_OFFSET - index * STEP_STRIDE;

  return (
    <div
      className="process-stepper-viewport relative mx-auto mb-14 max-w-2xl overflow-hidden"
      style={{
        height: VIEWPORT_HEIGHT,
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-[#0a0a0a] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent"
        aria-hidden
      />

      <div
        className="relative will-change-transform"
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`,
          transition: transitionEnabled
            ? phase === "sliding"
              ? `transform ${SLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
              : "none"
            : "none",
        }}
        onTransitionEnd={handleTrackTransitionEnd}
      >
        <ol className="flex flex-col" style={{ gap: CARD_GAP }}>
          {items.map((step, i) => {
            const distance = Math.abs(i - index);
            const isCenter = i === index;
            const isComplete = i < index || (isCenter && phase === "complete");

            let progressWidth = "0%";
            if (i < index) progressWidth = "100%";
            if (isCenter && phase === "loading") {
              progressWidth = fillActive ? "100%" : "0%";
            }
            if (isCenter && phase === "complete") progressWidth = "100%";

            return (
              <li
                key={`${step.num}-${i}`}
                className={[
                  "process-step shrink-0 rounded-xl border px-4 py-4 sm:px-5 sm:py-4",
                  "transition-[opacity,transform,box-shadow,border-color,background-color,filter] duration-500 ease-out",
                  isCenter
                    ? "border-[#FE4101]/35 bg-white/[0.05] shadow-[0_0_28px_rgba(254,65,1,0.14)] opacity-100 scale-100 blur-0"
                    : "border-white/10 bg-white/[0.02] scale-95 blur-[1px]",
                  !isCenter && distance === 1 ? "opacity-45" : "",
                  !isCenter && distance >= 2 ? "opacity-30" : "",
                ].join(" ")}
                style={{ height: CARD_HEIGHT }}
              >
                <div className="flex h-full items-start gap-3 sm:gap-4">
                  <StepIcon
                    isLoading={isCenter && phase === "loading"}
                    isCenterComplete={isCenter && phase === "complete"}
                    isComplete={isComplete}
                    reduceMotion={reduceMotion}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="mb-0.5 flex items-baseline gap-2">
                      <span
                        className={[
                          "text-[11px] font-bold tracking-[0.14em]",
                          isCenter ? "text-[#FE4101]" : "text-white/30",
                        ].join(" ")}
                      >
                        {step.num}
                      </span>
                      <h3
                        className={[
                          "font-[family-name:var(--agen-font-display,'Clash_Display',system-ui,sans-serif)] text-base font-bold leading-snug",
                          isCenter ? "text-white" : isComplete ? "text-white/60" : "text-white/40",
                        ].join(" ")}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className={[
                        "line-clamp-2 text-sm leading-relaxed",
                        isCenter ? "text-white/60" : "text-white/35",
                      ].join(" ")}
                    >
                      {step.body}
                    </p>
                    <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className={[
                          "h-full rounded-full transition-all ease-out",
                          isCenter && phase === "loading"
                            ? "duration-[1000ms] bg-[#FE4101]"
                            : isComplete
                              ? "duration-300 bg-[#FE4101]/35"
                              : "bg-transparent duration-300",
                        ].join(" ")}
                        style={{ width: progressWidth }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
