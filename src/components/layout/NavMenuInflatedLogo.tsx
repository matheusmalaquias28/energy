"use client";

import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

/** Área útil de deslocamento (px). */
const BOUNDS_X = 100;
const BOUNDS_Y = 88;

const IMPULSE_INSIDE = 0.26;
const SPRING_TO_TARGET = 0.024;
const TARGET_GAIN = 0.48;

const DAMPING = 0.935;
const BOUNCE = 0.48;

const IDLE_AX = 6;
const IDLE_AY = 5;

export default function NavMenuInflatedLogo() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const px = { current: 0 };
    const py = { current: 0 };
    const vx = { current: 0 };
    const vy = { current: 0 };
    const tx = { current: 0 };
    const ty = { current: 0 };
    const last = { x: 0, y: 0, ok: false };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const hx = r.width / 2;
      const hy = r.height / 2;
      const rx = Math.max(-1, Math.min(1, (e.clientX - (r.left + hx)) / Math.max(hx, 1)));
      const ry = Math.max(-1, Math.min(1, (e.clientY - (r.top + hy)) / Math.max(hy, 1)));
      tx.current = rx * BOUNDS_X * TARGET_GAIN;
      ty.current = ry * BOUNDS_Y * TARGET_GAIN;

      if (!last.ok) {
        last.x = e.clientX;
        last.y = e.clientY;
        last.ok = true;
        return;
      }

      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      last.x = e.clientX;
      last.y = e.clientY;
      vx.current += dx * IMPULSE_INSIDE;
      vy.current += dy * IMPULSE_INSIDE;
    };

    const onLeave = () => {
      tx.current = 0;
      ty.current = 0;
      last.ok = false;
      vx.current *= 0.6;
      vy.current *= 0.6;
    };

    const tick = () => {
      const now = performance.now();

      vx.current += (tx.current - px.current) * SPRING_TO_TARGET;
      vy.current += (ty.current - py.current) * SPRING_TO_TARGET;
      vx.current *= DAMPING;
      vy.current *= DAMPING;
      px.current += vx.current;
      py.current += vy.current;

      if (px.current > BOUNDS_X) {
        px.current = BOUNDS_X;
        vx.current *= -BOUNCE;
      } else if (px.current < -BOUNDS_X) {
        px.current = -BOUNDS_X;
        vx.current *= -BOUNCE;
      }
      if (py.current > BOUNDS_Y) {
        py.current = BOUNDS_Y;
        vy.current *= -BOUNCE;
      } else if (py.current < -BOUNDS_Y) {
        py.current = -BOUNDS_Y;
        vy.current *= -BOUNCE;
      }

      const idleX =
        Math.sin(now * 0.00088) * IDLE_AX + Math.sin(now * 0.00029) * (IDLE_AX * 0.35);
      const idleY =
        Math.cos(now * 0.00074) * IDLE_AY + Math.sin(now * 0.00026) * (IDLE_AY * 0.38);

      mx.set(px.current + idleX);
      my.set(py.current + idleY);
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
      mx.set(0);
      my.set(0);
    };
  }, [mx, my]);

  return (
    <motion.div
      className="pointer-events-none flex h-full w-full min-h-[min(48vh,300px)] items-center justify-center px-2 sm:px-4"
      initial={{ opacity: 0, scale: 0.82, y: 48, rotate: -2.5 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 17,
        mass: 0.82,
        delay: 0.16,
      }}
    >
      <motion.div
        ref={wrapRef}
        className="pointer-events-auto relative mx-auto h-[min(46vh,300px)] w-full max-w-[min(90vw,440px)] lg:mx-0 lg:h-full lg:min-h-[min(66vh,760px)] lg:max-w-none"
        style={{ x: mx, y: my }}
      >
        <Image
          src="/logo-inflated.png"
          alt=""
          fill
          className="pointer-events-none object-contain object-center drop-shadow-[0_28px_56px_rgba(0,0,0,0.24)]"
          sizes="(max-width: 1024px) 88vw, 50vw"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
