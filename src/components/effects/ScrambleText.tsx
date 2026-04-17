"use client";
import { useEffect, useRef, useState } from "react";

const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$@%&*?/\\";

interface Props {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrambleText({ text, delay = 0, duration = 2000, className }: Props) {
  const [display, setDisplay] = useState<string[]>(() =>
    text.split("").map((c) => (c === " " ? " " : POOL[Math.floor(Math.random() * POOL.length)]))
  );
  const raf = useRef(0);

  useEffect(() => {
    const original = text.split("");
    const len = original.length;

    const tid = setTimeout(() => {
      const t0 = performance.now();

      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 2);
        const resolved = Math.floor(p * len);

        setDisplay(
          original.map((c, i) => {
            if (c === " ") return " ";
            if (i < resolved) return c;
            return POOL[Math.floor(Math.random() * POOL.length)];
          })
        );

        if (p < 1) raf.current = requestAnimationFrame(tick);
      };

      raf.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(tid);
      cancelAnimationFrame(raf.current);
    };
  }, [text, delay, duration]);

  return (
    <span className={className} aria-label={text}>
      {display.join("")}
    </span>
  );
}
