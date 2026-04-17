"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PagePreloader() {
  const [show, setShow] = useState(true);
  const ended = useRef(false);

  const dismiss = () => {
    if (ended.current) return;
    ended.current = true;
    setShow(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
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
          <video
            className="pointer-events-none h-full w-full select-none object-cover"
            src="/videos/INTRO-1-COMPRESSED.mp4"
            muted
            playsInline
            autoPlay
            preload="auto"
            onEnded={dismiss}
            onError={dismiss}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
