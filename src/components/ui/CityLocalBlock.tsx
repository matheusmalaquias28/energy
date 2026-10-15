import { resolveCases, type LocalBlockData } from "@/data/local-block";

/** Bloco de conteúdo próprio da cidade, no visual das páginas /agencia e /local. */
export default function CityLocalBlock({ city, block }: { city: string; block: LocalBlockData }) {
  const cases = resolveCases(block.cases);

  return (
    <section className="py-24 px-6 lg:px-16 border-b border-white/5">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <span className="text-xs text-[#FE4101] uppercase tracking-widest mb-4 block">
              // Energy em {city}
            </span>
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-white mb-8">
              {block.heading}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {block.places.map((place) => (
                <li
                  key={place}
                  className="text-[10px] uppercase tracking-wider text-white/30 border border-white/10 px-2 py-1"
                >
                  {place}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            {block.paragraphs.map((p) => (
              <p key={p} className="text-white/50 leading-relaxed text-base lg:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>

        {cases.length > 0 && (
          <div className="mt-16">
            <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-6 block">
              // Projetos da Energy {cases.every((c) => c.city === city) ? `em ${city}` : "na região"}
            </span>
            <div className="grid sm:grid-cols-2 gap-px bg-white/5">
              {cases.map((c) => (
                <div key={c.name} className="bg-[#0a0a0a] p-8 flex flex-col">
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-3">
                    {c.city} · {c.year}
                  </p>
                  <h3 className="text-xl text-white font-bold mb-3">{c.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-5">{c.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] uppercase tracking-wider text-white/20 border border-white/8 px-2 py-1"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  {c.href && (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-xs text-[#FE4101] uppercase tracking-widest hover:text-white transition-colors cursor-none"
                    >
                      Ver o site ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
