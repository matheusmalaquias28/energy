export type ExpertiseVideoItem = {
  title: string;
  /**
   * URL do vídeo (ex.: MP4 em `/videos/...` ou CDN).
   * No hover: `play()` em loop até sair do card. Omita ou deixe `""` para placeholder.
   */
  videoSrc?: string;
  /** Sem degradê escuro sobre o vídeo */
  hideOverlay?: boolean;
  /** Fundo preto e vídeo central ~30% menor que o contentor */
  blackInsetVideo?: boolean;
  /** Vídeo em cobertura total do card (sem letterbox do inset) */
  fullBleed?: boolean;
};

/** Vídeos de exemplo (substituir por assets do projeto) */
export const EXPERTISE_VIDEO_ITEMS: ExpertiseVideoItem[] = [
  {
    title: "Sites Institucionais",
    videoSrc: "/videos/robot2.mp4",
    hideOverlay: true,
    fullBleed: true,
  },
  {
    title: "Web design & desenvolvimento",
    videoSrc: "/videos/hand-energy.mp4",
    hideOverlay: true,
    blackInsetVideo: true,
  },
  {
    title: "Ecommerces",
    videoSrc: "/videos/ecommerce-premium.mp4",
    hideOverlay: true,
    fullBleed: true,
  },
];
