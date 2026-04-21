"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const DISMISS_AFTER = 1050; // ms before exit animation starts

export default function InnerPagePreloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), DISMISS_AFTER);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {show && (
        <motion.div
          key="inner-preloader"
          className="fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.62, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* Corner brackets */}
          {[
            "top-6 left-6 border-t border-l",
            "top-6 right-6 border-t border-r",
            "bottom-8 left-6 border-b border-l",
            "bottom-8 right-6 border-b border-r",
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute w-7 h-7 border-white/10 ${cls}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            />
          ))}

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: 0.06 }}
            className="mb-5"
          >
            {/* Glow ring */}
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute w-[100px] h-[100px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(254,65,1,0.15) 0%, transparent 70%)",
                }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1.4 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              />
              <Image
                src="/favicon2.svg"
                alt="Energy"
                width={72}
                height={72}
                className="relative z-10"
                priority
              />
            </div>
          </motion.div>

          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.45, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          >
            <Image
              src="/logo-energy.svg"
              alt="Energy"
              width={130}
              height={49}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Orange progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.03]">
            <motion.div
              className="h-full bg-[#FE4101]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ transformOrigin: "left" }}
              transition={{
                duration: DISMISS_AFTER / 1000,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            />
          </div>

          {/* Subtle scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FE4101]/30 to-transparent pointer-events-none"
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{
              duration: DISMISS_AFTER / 1000,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
