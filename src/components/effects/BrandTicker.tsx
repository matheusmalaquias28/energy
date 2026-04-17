"use client";
import { useRef, useState } from "react";

const row1 = [
  "Brauer Advocacia", "Innova Tech", "Casa Bella", "Atlas Construtora",
  "Nexus Group", "Viva Saúde", "Torque Studio", "Meridian Capital",
];

const row2 = [
  "Forma Digital", "Onyx Media", "Vertice Lab", "Solar Prime",
  "Lumio Agency", "Crest Partners", "Axis Creative", "Nova Retail",
];

function TickerRow({ items, reverse = false, paused }: { items: string[]; reverse?: boolean; paused: boolean }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex whitespace-nowrap gap-0"
        style={{
          animation: `marquee 28s linear infinite ${reverse ? "reverse" : ""}`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((brand, i) => (
          <span
            key={i}
            className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-white/25 hover:text-white/70 transition-colors duration-300 cursor-none"
            style={{ padding: "0 2.5rem" }}
          >
            {brand}
            <span className="ml-10 text-[#FE4101]/30 text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BrandTicker() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative border-y border-white/5 bg-[#0a0a0a] py-4 overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex flex-col gap-3">
        <TickerRow items={row1} paused={paused} />
        <TickerRow items={row2} reverse paused={paused} />
      </div>

      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
    </div>
  );
}
