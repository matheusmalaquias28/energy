"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  FileText,
  Zap,
  Wrench,
  Gift,
  ArrowUpRight,
  Eye,
  Shield,
  Lock,
} from "lucide-react";
import { vaultItems, VAULT_CATEGORY_COLORS } from "@/data/vault-items";
import type { VaultItem, VaultCategory } from "@/data/vault-items";

// ── BOOT SEQUENCE LINES ──────────────────────────────────────────────────────

const BOOT_LINES = [
  "INITIALIZING VAULT_001...",
  "LOADING ENCRYPTION MODULES... OK",
  "AUTHENTICATING USER... ACCESS GRANTED",
  "DECRYPTING ARCHIVES... COMPLETE",
  "> WELCOME TO THE VAULT.",
];

// ── CATEGORY CONFIG ──────────────────────────────────────────────────────────

const CATS = [
  { key: "all", label: "TODOS", Icon: Eye },
  { key: "manuais", label: "MANUAIS", Icon: FileText },
  { key: "artigos", label: "ARTIGOS", Icon: Zap },
  { key: "ferramentas", label: "FERRAMENTAS", Icon: Wrench },
  { key: "gratuitos", label: "GRATUITOS", Icon: Gift },
] as const;

// ── SCRAMBLE HOOK ─────────────────────────────────────────────────────────────

const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#@$%&";

function useScramble(text: string) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef(0);

  const trigger = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const chars = text.split("");
    const t0 = performance.now();
    const duration = 700;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const resolved = Math.floor(p * chars.length);
      setDisplay(
        chars
          .map((c, i) => {
            if (!/[a-zA-Z0-9À-ú]/.test(c)) return c;
            if (i < resolved) return c;
            return POOL[Math.floor(Math.random() * POOL.length)];
          })
          .join("")
      );
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [text]);

  const reset = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setDisplay(text);
  }, [text]);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return { display, trigger, reset };
}

// ── BOOT SEQUENCE ─────────────────────────────────────────────────────────────

function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(0);
  const [done, setDone] = useState(false);
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;
    let i = 0;
    const next = () => {
      i++;
      setVisible(i);
      if (i < BOOT_LINES.length) {
        setTimeout(next, 280);
      } else {
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 400);
        }, 350);
      }
    };
    setTimeout(next, 120);
  }, [onComplete]);

  return (
    <motion.div
      animate={{ opacity: done ? 0 : 1, height: done ? 0 : "auto" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="overflow-hidden mb-2"
    >
      <div className="space-y-1 pb-6">
        {BOOT_LINES.slice(0, visible).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2"
          >
            <span
              className={`font-mono text-[11px] tracking-wider ${
                i === visible - 1 && !done
                  ? "text-[#22D3A5]"
                  : i === BOOT_LINES.length - 1
                  ? "text-[#FE4101]"
                  : "text-white/30"
              }`}
            >
              {line}
            </span>
            {i === visible - 1 && !done && (
              <motion.span
                className="inline-block w-[7px] h-[13px] bg-[#22D3A5] align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ── VAULT CARD ────────────────────────────────────────────────────────────────

function VaultCard({
  item,
  index,
  dimmed,
  onEnter,
  onLeave,
}: {
  item: VaultItem;
  index: number;
  dimmed: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const { display, trigger, reset } = useScramble(item.title);
  const cardRef = useRef<HTMLDivElement>(null);
  const accent = VAULT_CATEGORY_COLORS[item.category];
  const hasFile = !!item.fileType;

  const CatIcon =
    item.category === "manuais"
      ? FileText
      : item.category === "artigos"
      ? Zap
      : item.category === "ferramentas"
      ? Wrench
      : Gift;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 14;
    const y = ((e.clientY - top) / height - 0.5) * -14;
    el.style.transition = "transform 0.1s ease-out";
    el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateZ(6px)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = "transform 0.6s cubic-bezier(0.25,1,0.5,1)";
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    reset();
    onLeave();
  };

  const handleMouseEnter = () => {
    trigger();
    onEnter();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: dimmed ? 0.38 : 1, y: 0 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{
        opacity: { duration: dimmed ? 0.2 : 0.35 },
        y: { delay: index * 0.045, duration: 0.5, ease: [0.25, 1, 0.5, 1] },
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Link href={item.href} className="block h-full">
          <div className="relative h-full overflow-hidden border border-white/[0.07] bg-[#050508] transition-colors duration-300 hover:bg-[#07070c] hover:border-white/[0.13]">
            {/* Cover image */}
            {item.coverImage && (
              <div className="relative w-full h-44 overflow-hidden border-b border-white/[0.07]">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]/80" />
              </div>
            )}

            <div className="p-6">
            {/* Ambient glow on hover */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(ellipse 80% 60% at 50% -5%, ${accent}0e 0%, transparent 70%)`,
              }}
            />

            {/* Top accent bar — reveals on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{ background: accent }}
            />

            {/* Corner accents */}
            <div
              className="absolute top-0 left-0 w-4 h-4 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ borderColor: accent }}
            />
            <div
              className="absolute bottom-0 right-0 w-4 h-4 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ borderColor: accent }}
            />

            {/* Sweeping scan line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <motion.div
                className="absolute left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${accent}60 40%, ${accent}60 60%, transparent 100%)`,
                }}
                animate={{ top: ["-5%", "108%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 0.8 }}
              />
            </div>

            {/* ── HEADER ── */}
            <div className="relative flex items-start justify-between mb-5">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.15em] border"
                  style={{ color: accent, borderColor: `${accent}40` }}
                >
                  <CatIcon size={9} />
                  {item.category}
                </span>
                {item.isNew && (
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.1em] border border-[#22D3A5]/35 text-[#22D3A5]">
                    NOVO
                  </span>
                )}
              </div>
              <ArrowUpRight
                size={14}
                className="shrink-0 text-white/15 transition-all duration-300 group-hover:text-white/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>

            {/* ── FILE META ── */}
            {hasFile && (
              <div className="relative mb-4 flex items-center gap-3">
                <span
                  className="px-2 py-1 text-[11px] font-mono font-bold tracking-widest"
                  style={{
                    background: `${accent}18`,
                    color: accent,
                    border: `1px solid ${accent}35`,
                  }}
                >
                  .{item.fileType?.toLowerCase()}
                </span>
                <span className="text-[11px] font-mono text-white/20">{item.fileSize}</span>
              </div>
            )}

            {/* ── TITLE ── */}
            <h3 className="relative mb-3 text-[15px] font-bold leading-snug text-white/90">
              <span aria-label={item.title}>{display}</span>
            </h3>

            {/* ── DESCRIPTION ── */}
            <p className="relative text-sm text-white/35 leading-relaxed line-clamp-2 mb-5">
              {item.description}
            </p>

            {/* ── FOOTER ── */}
            <div className="relative flex items-center justify-between pt-4 border-t border-white/[0.05]">
              <div className="flex gap-3">
                {item.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-white/18">
                    #{tag.toLowerCase()}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {item.readingTime && (
                  <span className="text-[11px] font-mono text-white/20">{item.readingTime}</span>
                )}
                {hasFile && (
                  <span
                    className="flex items-center gap-1 text-[11px] font-mono font-medium opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: accent }}
                  >
                    <Download size={10} />
                    BAIXAR
                  </span>
                )}
              </div>
            </div>
            </div>{/* /p-6 */}
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

// ── FILTER BAR ────────────────────────────────────────────────────────────────

function FilterBar({
  active,
  onChange,
  counts,
}: {
  active: string;
  onChange: (c: string) => void;
  counts: Record<string, number>;
}) {
  return (
    <div className="relative flex items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
      {CATS.map(({ key, label, Icon }) => {
        const isActive = active === key;
        const accent =
          key === "all" ? "#FE4101" : VAULT_CATEGORY_COLORS[key as VaultCategory] ?? "#FE4101";
        const count =
          key === "all"
            ? Object.values(counts).reduce((a, b) => a + b, 0)
            : (counts[key] ?? 0);

        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="group relative flex items-center gap-1.5 px-3.5 py-2 text-[10px] font-mono uppercase tracking-[0.15em] whitespace-nowrap border transition-all duration-200 cursor-none"
            style={{
              color: isActive ? accent : undefined,
              background: isActive ? `${accent}12` : "transparent",
              borderColor: isActive ? `${accent}45` : "rgba(255,255,255,0.07)",
            }}
          >
            {/* hover glow */}
            {!isActive && (
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: `${accent}08` }}
              />
            )}
            <Icon size={10} className={isActive ? "" : "text-white/30"} />
            <span className={isActive ? "" : "text-white/30 group-hover:text-white/60 transition-colors duration-200"}>
              {label}
            </span>
            <span
              className={`ml-0.5 text-[9px] ${isActive ? "opacity-60" : "text-white/20"}`}
              style={isActive ? { color: accent } : undefined}
            >
              [{count}]
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ── ANIMATED COUNTER ─────────────────────────────────────────────────────────

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const t0 = performance.now();
    const duration = 1200;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * to));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    const tid = setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, 800);
    return () => {
      clearTimeout(tid);
      cancelAnimationFrame(rafRef.current);
    };
  }, [to]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// ── VAULT HERO ────────────────────────────────────────────────────────────────

function VaultHero() {
  const [booted, setBooted] = useState(false);
  const handleComplete = useCallback(() => setBooted(true), []);

  return (
    <section className="relative flex min-h-[60vh] md:min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 pb-24 lg:px-16">
      {/* ── BG: perspective grid ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(254,65,1,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(254,65,1,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── BG: focal radial glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(254,65,1,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── BG: depth vignette ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 35%, rgba(5,5,8,0.85) 100%)",
        }}
      />

      {/* ── BG: horizontal scan lines (very subtle) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.08) 3px, rgba(255,255,255,0.08) 4px)",
        }}
      />

      {/* ── PULSING ORIGIN DOT ── */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: 2, height: 2, background: "#FE4101" }}
        animate={{ boxShadow: ["0 0 0px 0px rgba(254,65,1,0)", "0 0 80px 40px rgba(254,65,1,0.12)", "0 0 0px 0px rgba(254,65,1,0)"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto w-full max-w-[90rem]">
        {/* ── CLASSIFICATION HEADER ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <Shield size={11} className="text-[#FE4101]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FE4101]">
              [CLASSIFIED]
            </span>
          </div>
          <span className="font-mono text-[10px] text-white/15">// VAULT_001 //</span>
          <span className="font-mono text-[10px] text-white/15">ACCESS: OPEN</span>
          <motion.span
            className="font-mono text-[10px] text-[#22D3A5]/60"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ● ONLINE
          </motion.span>
        </motion.div>

        {/* ── BOOT SEQUENCE ── */}
        <BootSequence onComplete={handleComplete} />

        {/* ── MAIN HEADING ── */}
        <AnimatePresence>
          {booted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Giant VAULT */}
              <div className="mb-6 overflow-hidden">
                <motion.h1
                  className="font-bold leading-[0.9] tracking-tighter text-white"
                  style={{ fontSize: "clamp(5rem,16vw,13rem)" }}
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                >
                  VAULT
                  <motion.span
                    className="text-[#FE4101]"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    _
                  </motion.span>
                </motion.h1>
              </div>

              {/* ID line */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="mb-6 flex items-center gap-3"
              >
                <div className="h-px flex-1 max-w-[120px] bg-[#FE4101]/30" />
                <span className="font-mono text-[11px] text-white/30 tracking-widest uppercase">
                  Base de conhecimento
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="mb-12 max-w-2xl text-lg leading-relaxed text-white/45"
              >
                Manuais, guias, ferramentas e conteúdo gratuito para empresas que levam o digital a sério. Tudo o que você precisa para tomar decisões melhores.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="flex flex-wrap gap-10 border-t border-white/[0.05] pt-8"
              >
                {[
                  { to: 10, suffix: "+", label: "RECURSOS" },
                  { to: 4, suffix: "", label: "CATEGORIAS" },
                  { to: 100, suffix: "%", label: "GRATUITO" },
                ].map(({ to, suffix, label }) => (
                  <div key={label}>
                    <div className="mb-1 text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">
                      <Counter to={to} suffix={suffix} />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                      {label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
    </section>
  );
}

// ── VAULT GRID ────────────────────────────────────────────────────────────────

function VaultGrid() {
  const [active, setActive] = useState("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const counts = Object.fromEntries(
    (["manuais", "artigos", "ferramentas", "gratuitos"] as VaultCategory[]).map((cat) => [
      cat,
      vaultItems.filter((i) => i.category === cat).length,
    ])
  );

  const filtered =
    active === "all" ? vaultItems : vaultItems.filter((i) => i.category === active);

  return (
    <section className="px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-[90rem]">
        {/* Section meta */}
        <div className="mb-8 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/22">
            // ARQUIVOS DISPONÍVEIS
          </p>
          <p className="font-mono text-[10px] text-white/15">
            {filtered.length} REGISTROS ENCONTRADOS
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10">
          <FilterBar active={active} onChange={setActive} counts={counts} />
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((item, i) => (
              <VaultCard
                key={item.id}
                item={item}
                index={i}
                dimmed={hoveredId !== null && hoveredId !== item.id}
                onEnter={() => setHoveredId(item.id)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ── VAULT CTA ─────────────────────────────────────────────────────────────────

function VaultCTA() {
  const { display: titleDisplay, trigger, reset } = useScramble("Novos recursos toda semana.");

  return (
    <section className="border-t border-white/[0.04] px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-[90rem]">
        <div className="relative overflow-hidden border border-white/[0.07] bg-[#050508] p-10 lg:p-16">
          {/* BG grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(254,65,1,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(254,65,1,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 0% 100%, rgba(254,65,1,0.05) 0%, transparent 70%)",
            }}
          />

          {/* Corner accents */}
          <div aria-hidden className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#FE4101]/50" />
          <div aria-hidden className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#FE4101]/50" />

          <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#FE4101]">
                // ACESSO CONTINUADO
              </p>
              <h2
                className="mb-4 font-bold leading-tight text-white"
                style={{ fontSize: "clamp(1.75rem,4vw,3rem)" }}
                onMouseEnter={trigger}
                onMouseLeave={reset}
                aria-label="Novos recursos toda semana."
              >
                {titleDisplay}
              </h2>
              <p className="max-w-md text-base leading-relaxed text-white/40">
                O vault cresce continuamente. Manuais, checklists, templates e ferramentas para empresas que não aceitam ficar para trás.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="/blog"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex cursor-none items-center gap-2 border border-[#FE4101]/45 bg-[#FE4101]/10 px-8 py-3.5 font-mono text-sm uppercase tracking-widest text-[#FE4101] transition-all duration-200 hover:bg-[#FE4101]/20 hover:border-[#FE4101]/70"
              >
                <Lock size={13} />
                Acessar o blog
              </motion.a>
              <motion.a
                href="/#contato"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex cursor-none items-center gap-2 border border-white/10 bg-transparent px-8 py-3.5 font-mono text-sm uppercase tracking-widest text-white/45 transition-all duration-200 hover:border-white/25 hover:text-white/70"
              >
                Falar com a equipe
                <ArrowUpRight size={13} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ROOT ─────────────────────────────────────────────────────────────────────

export default function VaultClient() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050508] text-white">
      <VaultHero />
      <VaultGrid />
      <VaultCTA />
    </main>
  );
}
