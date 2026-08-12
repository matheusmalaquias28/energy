"use client";

import { useCallback, useEffect, useRef } from "react";

/* ─── Physics constants ─────────────────────────────────────── */
const FRICTION       = 0.86;
const RETURN_K       = 0.09;
const RETURN_K_FAST  = 0.26;
const BURST_SPEED    = 13;
const MOUSE_RADIUS   = 100;
const MOUSE_STRENGTH = 5.5;
const ALPHA_RATE     = 0.055;
const TURB           = 0.035;
const MAX_PARTICLES  = 18000;
const CR = 254, CG = 65, CB = 1; // #FE4101

type Phase = "idle" | "active" | "returning";

interface Particle {
  x: number; y: number;
  ox: number; oy: number;
  vx: number; vy: number;
  size: number;
  alpha: number;
  ta: number;
}

/* ─── Off-screen pixel sampler ──────────────────────────────── */
function sampleText(span: HTMLElement, text: string): Particle[] | null {
  const rect = span.getBoundingClientRect();
  if (rect.width < 10 || rect.height < 10) return null;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W   = Math.ceil(rect.width);

  const cs = window.getComputedStyle(span);

  // ── measure actual glyph height BEFORE sizing the canvas ──────
  const probe = document.createElement("canvas").getContext("2d")!;
  probe.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
  if ("letterSpacing" in probe) {
    (probe as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
      cs.letterSpacing;
  }
  const pm       = probe.measureText(text);
  // actualBoundingBox gives true glyph pixel bounds (ignores em-square padding)
  const gAscent  = pm.actualBoundingBoxAscent;
  const gDescent = pm.actualBoundingBoxDescent;
  const glyphH   = gAscent + gDescent;

  // Canvas height = glyph height + small vertical padding so nothing is clipped
  const PAD = 4;
  const H   = Math.ceil(glyphH) + PAD * 2;

  const off = document.createElement("canvas");
  off.width  = W * dpr;
  off.height = H * dpr;
  const ctx  = off.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;

  ctx.scale(dpr, dpr);
  ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
  if ("letterSpacing" in ctx) {
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
      cs.letterSpacing;
  }
  ctx.fillStyle    = "#fff";
  ctx.textAlign    = "center";
  ctx.textBaseline = "alphabetic";

  // Baseline = top pad + glyph ascent → glyphs sit exactly within [PAD, PAD+glyphH]
  const baseY = PAD + gAscent;
  ctx.fillText(text, W / 2, baseY);

  const { data } = ctx.getImageData(0, 0, W * dpr, H * dpr);
  const IW = W * dpr;
  const IH = H * dpr;

  const pts: Array<[number, number]> = [];
  for (let py = 0; py < IH; py++) {
    for (let px = 0; px < IW; px++) {
      if (data[(py * IW + px) * 4 + 3] > 35) {
        pts.push([px / dpr, py / dpr]);
      }
    }
  }
  if (pts.length === 0) return null;

  const step = Math.max(1, Math.ceil(pts.length / MAX_PARTICLES));
  const out: Particle[] = [];
  for (let i = 0; i < pts.length; i += step) {
    const [ox, oy] = pts[i];
    const angle = Math.random() * Math.PI * 2;
    const spd   = (Math.random() * 0.65 + 0.35) * BURST_SPEED;
    out.push({
      ox, oy, x: ox, y: oy,
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd,
      size: Math.random() * 1.35 + 0.4,
      alpha: 0,
      ta: Math.random() * 0.5 + 0.5,
    });
  }
  return out;
}

/* ─── Component ─────────────────────────────────────────────── */
export function ParticleText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const wrapRef   = useRef<HTMLSpanElement>(null);
  const textRef   = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const cacheRef = useRef<Particle[] | null>(null);
  const ptclRef  = useRef<Particle[]>([]);
  const phaseRef = useRef<Phase>("idle");
  const rafRef   = useRef<number>(0);
  const mouseRef = useRef({ x: -1e6, y: -1e6 });
  const overRef  = useRef(false);
  const retTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Canvas: sync dimensions to actual glyph bounds ──────────
     Uses the same glyph-height logic as sampleText so particle
     coordinates map exactly onto what the canvas draws.          */
  const syncCanvas = useCallback(() => {
    const text   = textRef.current;
    const canvas = canvasRef.current;
    if (!text || !canvas) return;

    const rect = text.getBoundingClientRect();
    const cs   = window.getComputedStyle(text);
    const dpr  = Math.min(window.devicePixelRatio || 1, 2);
    const W    = Math.ceil(rect.width);

    // Replicate the same height as sampleText
    const probe = document.createElement("canvas").getContext("2d")!;
    probe.font  = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    if ("letterSpacing" in probe) {
      (probe as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
        cs.letterSpacing;
    }
    const pm   = probe.measureText(children);
    const PAD  = 4;
    const H    = Math.ceil(pm.actualBoundingBoxAscent + pm.actualBoundingBoxDescent) + PAD * 2;

    // Vertical offset: align glyph top with the visual top of the rendered text.
    // The rendered glyph starts at (lineBoxHeight - glyphH)/2 from the line-box top
    // when the browser vertically centres glyphs in the line-height.
    const lineH    = rect.height;
    const glyphH   = pm.actualBoundingBoxAscent + pm.actualBoundingBoxDescent;
    const topShift = (lineH - glyphH) / 2 - PAD; // canvas top offset (may be negative)

    canvas.width         = W * dpr;
    canvas.height        = H * dpr;
    canvas.style.width   = W + "px";
    canvas.style.height  = H + "px";
    canvas.style.top     = `${topShift}px`;

    const ctx = canvas.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, [children]);

  /* ── Animation loop ─────────────────────────────────────────── */
  const tick = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W   = canvas.width  / dpr;
    const H   = canvas.height / dpr;
    const ph  = phaseRef.current;
    const mx  = mouseRef.current.x;
    const my  = mouseRef.current.y;
    const pts = ptclRef.current;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = `rgb(${CR},${CG},${CB})`;

    let settled = true;

    for (const p of pts) {
      const dx = p.ox - p.x;
      const dy = p.oy - p.y;

      const k = ph === "returning" ? RETURN_K_FAST : RETURN_K;
      p.vx += dx * k;
      p.vy += dy * k;

      if (ph === "active") {
        const rx = p.x - mx;
        const ry = p.y - my;
        const d2 = rx * rx + ry * ry;
        if (d2 < MOUSE_RADIUS * MOUSE_RADIUS && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const f = ((MOUSE_RADIUS - d) / MOUSE_RADIUS) * MOUSE_STRENGTH;
          p.vx += (rx / d) * f;
          p.vy += (ry / d) * f;
        }
      }

      p.vx += (Math.random() - 0.5) * TURB;
      p.vy += (Math.random() - 0.5) * TURB;
      p.vx *= FRICTION;
      p.vy *= FRICTION;
      p.x  += p.vx;
      p.y  += p.vy;

      const ta     = ph === "returning" ? 0 : p.ta;
      p.alpha     += (ta - p.alpha) * ALPHA_RATE;

      if (ph === "returning" &&
          (Math.abs(dx) > 0.7 || Math.abs(dy) > 0.7 || p.alpha > 0.02)) {
        settled = false;
      }

      const a = Math.max(0, Math.min(1, p.alpha));
      if (a < 0.005) continue;
      ctx.globalAlpha = a;
      const s = p.size;
      ctx.fillRect(p.x - s * 0.5, p.y - s * 0.5, s, s);
    }

    if (ph === "returning" && settled) {
      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha  = 1;
      phaseRef.current = "idle";
      if (textRef.current)   textRef.current.style.opacity   = "1";
      if (canvasRef.current) canvasRef.current.style.opacity = "0";
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      return;
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  /* ── Activate (synchronous when cache is ready) ──────────────── */
  const doActivate = useCallback(() => {
    if (!overRef.current || !cacheRef.current) return;
    syncCanvas();

    ptclRef.current = cacheRef.current.map((t) => {
      const angle = Math.random() * Math.PI * 2;
      const spd   = (Math.random() * 0.65 + 0.35) * BURST_SPEED;
      return {
        ...t,
        x: t.ox, y: t.oy,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        alpha: t.ta * 0.85,
      };
    });

    phaseRef.current = "active";
    if (textRef.current)   textRef.current.style.opacity   = "0";
    if (canvasRef.current) canvasRef.current.style.opacity = "1";
    rafRef.current = requestAnimationFrame(tick);
  }, [syncCanvas, tick]);

  const startEffect = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    if (retTimer.current) clearTimeout(retTimer.current);
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;

    if (cacheRef.current) {
      // Cache hit → instant, no async delay
      doActivate();
    } else {
      // Async fallback (only on very first hover before mount effect fires)
      document.fonts.ready.then(() => {
        const text = textRef.current;
        if (!text || !overRef.current) return;
        cacheRef.current = sampleText(text, children);
        doActivate();
      });
    }
  }, [children, doActivate]);

  const endEffect = useCallback(() => {
    if (phaseRef.current === "idle") return;
    phaseRef.current = "returning";

    retTimer.current = setTimeout(() => {
      if (phaseRef.current !== "idle") {
        phaseRef.current = "idle";
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
        if (textRef.current)   textRef.current.style.opacity   = "1";
        if (canvasRef.current) canvasRef.current.style.opacity = "0";
      }
    }, 1400);
  }, []);

  const onMouseEnter = useCallback(() => {
    overRef.current = true;
    startEffect();
  }, [startEffect]);

  const onMouseLeave = useCallback(() => {
    overRef.current = false;
    mouseRef.current = { x: -1e6, y: -1e6 };
    endEffect();
  }, [endEffect]);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    if (!canvasRef.current) return;
    const r = canvasRef.current.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
  }, []);

  /* ── Pre-sample on mount so first hover is instant ───────────── */
  useEffect(() => {
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (cancelled || cacheRef.current) return;
      // Wait one rAF to ensure layout has settled after mount animations
      requestAnimationFrame(() => {
        if (cancelled || cacheRef.current) return;
        const text = textRef.current;
        if (text) cacheRef.current = sampleText(text, children);
      });
    });
    return () => { cancelled = true; };
  }, [children]);

  /* ── Resize: invalidate cache ────────────────────────────────── */
  useEffect(() => {
    const onResize = () => {
      cacheRef.current = null;
      if (phaseRef.current !== "idle") endEffect();
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [endEffect]);

  /* ── Cleanup ─────────────────────────────────────────────────── */
  useEffect(() => () => {
    cancelAnimationFrame(rafRef.current);
    if (retTimer.current) clearTimeout(retTimer.current);
  }, []);

  return (
    <span
      ref={wrapRef}
      className={`relative inline-block cursor-default select-none ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      {/* Real text — always in DOM for layout, SEO and screen readers */}
      <span ref={textRef} style={{ display: "block" }}>
        {children}
      </span>

      {/* Particle canvas — overlaid using glyph-aligned positioning */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          pointerEvents: "none",
          opacity: 0,
        }}
      />
    </span>
  );
}
