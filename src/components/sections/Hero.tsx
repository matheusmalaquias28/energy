"use client";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { anton, manrope } from "@/lib/fonts";
import { HyperplexedTitle } from "@/components/effects/HyperplexedTitle";

const LINE_DELAY = 160; // ms between lines

const heroTitleLines = [
  { font: "manrope" as const, text: "FEITO PARA EMPRESAS", color: "text-white" },
  { font: "anton" as const, text: "QUE NAO ACEITAM", color: "text-[#FE4101]" },
  { font: "manrope" as const, text: "SER ESQUECIDAS.", color: "text-white" },
] as const;

/** Linha central (índice 1): delay motion + parte da animação antes do scramble no load. */
const ANTON_SCRAMBLE_MOUNT_MS = Math.round((0.15 + 1 * (LINE_DELAY / 1000) + 0.65) * 1000);

export default function Hero() {

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <GLSLHills width="100%" height="100%" />
      </div>

      {/* Thin top border line */}
      <div className="absolute top-0 left-0 right-0 z-[1] h-px bg-white/5" />

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 lg:px-16 pt-28 pb-20 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-16 flex flex-wrap items-center justify-center gap-4 text-white/30 text-xs uppercase tracking-[0.2em]"
        >
          <span className="hidden sm:block h-px w-8 bg-white/20" aria-hidden />
          <span>Soluções digitais para empresas</span>
          <span className="text-white/20">— 2026 —</span>
          <span className="hidden sm:block h-px w-8 bg-white/20" aria-hidden />
        </motion.div>

        {/* Title */}
        <div className="mx-auto w-full max-w-[90rem]">
          {heroTitleLines.map((line, i) => {
            const fontClass = line.font === "manrope" ? manrope.className : anton.className;
            const weightClass = line.font === "manrope" ? "font-bold" : "";
            const sizeClass =
              line.font === "manrope"
                ? "text-[clamp(2.7rem,5vw,4.4rem)] leading-[1.05]"
                : "text-[clamp(3.35rem,9.2vw,10.75rem)] leading-[0.86]";
            return (
              <motion.div
                key={line.text}
                className="overflow-hidden"
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + i * (LINE_DELAY / 1000),
                  duration: 0.8,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                {line.font === "manrope" ? (
                  <h1
                    className={`${fontClass} ${weightClass} uppercase tracking-tight ${sizeClass} ${line.color}`}
                  >
                    {line.text}
                  </h1>
                ) : (
                  <HyperplexedTitle
                    value={line.text}
                    mountDelayMs={ANTON_SCRAMBLE_MOUNT_MS}
                    className={`${fontClass} ${weightClass} uppercase tracking-tight ${sizeClass}`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mx-auto mt-8 flex w-full max-w-[90rem] flex-col items-center gap-8 sm:mt-10"
        >
          <p className="max-w-xl text-base leading-relaxed text-white/40">
            Sites, landing pages e e-commerces com design sob medida — para marcas que levam a sério a primeira impressão digital.
          </p>

          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
            <motion.a
              href="#projetos"
              whileHover={{ y: -4, transition: { duration: 0.22, ease: [0.25, 1, 0.5, 1] } }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex cursor-none items-center justify-center gap-2 overflow-hidden rounded-full border border-white/25 bg-white/[0.07] px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/5 transition-[box-shadow,border-color,background-color] duration-300 hover:border-[#FE4101]/55 hover:bg-[#FE4101]/[0.14] hover:shadow-[0_12px_40px_rgba(254,65,1,0.22)]"
            >
              <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-[#FE4101]/25 to-transparent opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden />
              <span className="relative">Ver projetos</span>
              <ArrowDownRight
                size={16}
                className="relative transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:translate-y-1"
                strokeWidth={2}
              />
            </motion.a>

            <motion.a
              href="#contato"
              whileHover={{ y: -3, transition: { duration: 0.22, ease: [0.25, 1, 0.5, 1] } }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex cursor-none items-center justify-center gap-2 rounded-full border border-white/12 bg-transparent px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-white/55 shadow-none transition-[color,background-color,border-color,box-shadow] duration-300 hover:border-white/35 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_8px_28px_rgba(255,255,255,0.06)]"
            >
              <span>Falar com a equipe</span>
              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:translate-y-1"
                strokeWidth={2}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mx-auto mt-20 grid w-full max-w-[90rem] grid-cols-3 gap-6 border-t border-white/5 pt-8"
        >
          {[
            { value: "120+", label: "Projetos entregues" },
            { value: "98%", label: "Taxa de satisfação" },
            { value: "72h", label: "Primeiro protótipo" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-1 text-2xl font-bold text-white lg:text-3xl">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/30">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 z-[1] h-px bg-white/5" />
    </section>
  );
}
