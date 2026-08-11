export type GalleryMarqueeItem = {
  src: string;
  tag: string;
  alt: string;
  unoptimized?: boolean;
};

const FRAME_FILES = [
  "Frame 1707483151.jpg",
  "Frame 1707483152.jpg",
  "Frame 1707483153.jpg",
  "Frame 1707483154.jpg",
  "Frame 1707483155.jpg",
  "Frame 1707483156.jpg",
  "Frame 1707483157.jpg",
  "Frame 1707483158.jpg",
  "Frame 1707483159.jpg",
  "Frame 1707483160.jpg",
  "Frame 1707483161.jpg",
  "Frame 1707483162.jpg",
  "Frame 1707483163.jpg",
  "Frame 1707483164.jpg",
  "Frame 1707483165.jpg",
  "Frame 1707483166.jpg",
] as const;

function frameItem(file: (typeof FRAME_FILES)[number], index: number): GalleryMarqueeItem {
  return {
    src: `/Capas/${file}`,
    tag: "",
    alt: `Projeto Energy ${index + 1}`,
    unoptimized: true,
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
