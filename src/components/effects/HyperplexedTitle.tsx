"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/** Progresso por tick (mantido): mesma “resolução” letra a letra. */
const ITERATION_STEP = 0.12;

/** Tempo alvo entre ticks — menor = animação mais rápida; rAF + acumulador = mais fluido que setInterval. */
const TICK_MS = 36;

type HyperplexedTitleProps = {
  value: string;
  className?: string;
  mountDelayMs?: number;
};

export function HyperplexedTitle({
  value,
  className = "",
  mountDelayMs = 1000,
}: HyperplexedTitleProps) {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef<number | null>(null);
  const iterationRef = useRef(0);
  const mountTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stop = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const buildFrame = useCallback(
    (iter: number) => {
      const chars = [...value];
      return chars
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < iter) return char;
          return LETTERS[Math.floor(Math.random() * 26)];
        })
        .join("");
    },
    [value],
  );

  const runScramble = useCallback(() => {
    stop();
    iterationRef.current = 0;
    setDisplay(buildFrame(0));

    let acc = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = now - last;
      last = now;
      acc += dt;

      while (acc >= TICK_MS) {
        acc -= TICK_MS;
        iterationRef.current += ITERATION_STEP;
        const iter = iterationRef.current;
        setDisplay(buildFrame(iter));
        if (iter >= value.length) {
          setDisplay(value);
          rafRef.current = null;
          return;
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
  }, [value, stop, buildFrame]);

  useEffect(() => {
    return () => {
      stop();
      if (mountTimerRef.current !== null) {
        clearTimeout(mountTimerRef.current);
        mountTimerRef.current = null;
      }
    };
  }, [stop]);

  useEffect(() => {
    mountTimerRef.current = setTimeout(() => {
      mountTimerRef.current = null;
      runScramble();
    }, mountDelayMs);
    return () => {
      if (mountTimerRef.current !== null) {
        clearTimeout(mountTimerRef.current);
        mountTimerRef.current = null;
      }
    };
  }, [mountDelayMs, runScramble]);

  const onPointerEnter = useCallback(() => {
    runScramble();
  }, [runScramble]);

  const onPointerLeave = useCallback(() => {
    stop();
    setDisplay(value);
  }, [value, stop]);

  return (
    <h1
      data-value={value}
      aria-label={value}
      className={cn(
        "inline-block cursor-default select-none rounded-[clamp(0.5rem,1.2vw,1.25rem)] px-1.5 py-2 text-[#FE4101] transition-[color,background-color] duration-[400ms] ease-out hover:bg-[#FE4101] hover:text-white sm:px-[clamp(0.65rem,1.8vw,2rem)] sm:py-[clamp(0.4rem,1vw,1.1rem)]",
        className,
      )}
      onMouseEnter={onPointerEnter}
      onMouseLeave={onPointerLeave}
    >
      {display}
    </h1>
  );
}
