export type ExpertiseVideoItem = {
  title: string;
  /**
   * URL do vídeo (ex.: MP4 em `/videos/...` ou CDN).
   * No hover: `play()` em loop até sair do card. Omita ou deixe `""` para placeholder.
   */
  videoSrc?: string;
  /** Sem degradê escuro sobre o vídeo */
  hideOverlay?: boolean;
};

/** Vídeos de exemplo (substituir por assets do projeto) */
export const EXPERTISE_VIDEO_ITEMS: ExpertiseVideoItem[] = [
  {
    title: "Branding & identidade",
    videoSrc: "/videos/bomb.mp4",
    hideOverlay: true,
  },
  {
    title: "Web design & desenvolvimento",
    videoSrc: "/videos/hand-energy.mp4",
    hideOverlay: true,
  },
  {
    title: "Motion & sistemas",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
];
