const items = [
  "Sites Institucionais",
  "Landing Pages",
  "E-commerces",
  "Design Estratégico",
  "Parceria Real",
  "Suporte 7 dias",
  "Identidade Visual",
  "Performance 95+",
];

interface MarqueeStripProps {
  reverse?: boolean;
}

export default function MarqueeStrip({ reverse = false }: MarqueeStripProps) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="border-y border-white/5 py-4 overflow-hidden bg-[#111111]">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: `marquee 40s linear infinite ${reverse ? "reverse" : ""}` }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="mx-10 text-[11px] uppercase tracking-[0.2em] text-white/20 flex items-center gap-10">
            {item}
            <span className="text-[#FE4101] text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
