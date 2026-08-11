import {
  GALLERY_MARQUEE_ROWS,
  GALLERY_MARQUEE_TRACK_REPEATS,
  type GalleryMarqueeItem,
} from "@/data/gallery-marquee-images";

const ROW_DURATIONS = ["95s", "110s", "85s"];

function buildInfiniteTrack(items: GalleryMarqueeItem[]) {
  return Array.from({ length: GALLERY_MARQUEE_TRACK_REPEATS }, () => items).flat();
}

function GalleryCard({ item }: { item: GalleryMarqueeItem }) {
  return (
    <div className="gallery-marquee-card">
      <img
        src={item.src}
        alt={item.alt}
        width={320}
        height={200}
        className="gallery-marquee-card__img"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function GalleryRow({
  items,
  reverse,
  duration,
}: {
  items: GalleryMarqueeItem[];
  reverse?: boolean;
  duration: string;
}) {
  const track = buildInfiniteTrack(items);

  return (
    <div className="gallery-marquee-row">
      <div
        className={`gallery-marquee-track${reverse ? " gallery-marquee-track--reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        {track.map((item, index) => (
          <GalleryCard key={`${item.src}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function GalleryMarquee() {
  return (
    <section id="galeria" className="gallery-marquee sec" aria-labelledby="gallery-marquee-title">
      <div className="gallery-marquee__backdrop" aria-hidden>
        {GALLERY_MARQUEE_ROWS.map((row, index) => (
          <GalleryRow
            key={index}
            items={row}
            reverse={index % 2 === 1}
            duration={ROW_DURATIONS[index] ?? "60s"}
          />
        ))}
      </div>

      <div className="gallery-marquee__overlay" aria-hidden />

      <div className="gallery-marquee__content">
        <span className="gallery-marquee__eyebrow">Feito pela Energy</span>
        <h2 id="gallery-marquee-title" className="gallery-marquee__title">
          Projetos reais,
          <br />
          feitos para converter
        </h2>
        <p className="gallery-marquee__sub">
          Cada página pensada para apresentar sua oferta e gerar ação.
        </p>
      </div>
    </section>
  );
}
