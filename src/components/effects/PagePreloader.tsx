"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Abaixo de `md` (768px): vídeo dedicado ao mobile — desktop mantém o asset anterior. */
const MOBILE_MAX_WIDTH = "(max-width: 767px)";
const VIDEO_DESKTOP = "/videos/pre-loader-2.mp4";
const VIDEO_MOBILE = "/videos/pre-loader-3.mp4";

/** Module-level flag — survives re-mounts, resets only on hard refresh. */
let _homePreloaderComplete = false;

export default function PagePreloader() {
  const [show, setShow] = useState(() => !_homePreloaderComplete);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const ended = useRef(false);

  const dismiss = () => {
    if (ended.current) return;
    ended.current = true;
    _homePreloaderComplete = true;
    setShow(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const mq = window.matchMedia(MOBILE_MAX_WIDTH);
    const applySrc = () => {
      setVideoSrc(mq.matches ? VIDEO_MOBILE : VIDEO_DESKTOP);
    };
    applySrc();
    mq.addEventListener("change", applySrc);
    return () => {
      mq.removeEventListener("change", applySrc);
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {show && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Introdução"
          className="fixed inset-0 z-[200] bg-black will-change-transform"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}
        >
          {videoSrc && (
            <video
              key={videoSrc}
              className="pointer-events-none h-full w-full select-none object-cover"
              src={videoSrc}
              muted
              playsInline
              autoPlay
              preload="auto"
              onEnded={dismiss}
              onError={dismiss}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
