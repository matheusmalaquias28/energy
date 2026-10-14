export type GalleryMarqueeItem = {
  src: string;
  tag: string;
  alt: string;
};

const FRAME_FILES = [
  "portfolio-energy-01.webp",
  "portfolio-energy-02.webp",
  "portfolio-energy-03.webp",
  "portfolio-energy-04.webp",
  "portfolio-energy-05.webp",
  "portfolio-energy-06.webp",
  "portfolio-energy-07.webp",
  "portfolio-energy-08.webp",
  "portfolio-energy-09.webp",
  "portfolio-energy-10.webp",
  "portfolio-energy-11.webp",
  "portfolio-energy-12.webp",
  "portfolio-energy-13.webp",
  "portfolio-energy-14.webp",
  "portfolio-energy-15.webp",
  "portfolio-energy-16.webp",
] as const;

function frameItem(file: (typeof FRAME_FILES)[number], index: number): GalleryMarqueeItem {
  return {
    src: `/Capas/${file}`,
    tag: "",
    alt: `Projeto Energy ${index + 1}`,
  };
}

function rotateItems<T>(items: T[], offset: number): T[] {
  const start = offset % items.length;
  return [...items.slice(start), ...items.slice(0, start)];
}

const frameItems = FRAME_FILES.map(frameItem);

/** Cada faixa usa todas as imagens, com ordem diferente para variedade visual. */
export const GALLERY_MARQUEE_ROWS: GalleryMarqueeItem[][] = [
  frameItems,
  rotateItems(frameItems, 5),
  rotateItems(frameItems, 11),
];

export const GALLERY_MARQUEE_TRACK_REPEATS = 4;
