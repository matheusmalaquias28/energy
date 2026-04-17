"use client";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        aria-hidden
        className="absolute inset-0 text-[#FE4101] z-0"
        animate={{
          x: [0, -2, 2, 0, -1, 1, 0],
          opacity: [0, 0.8, 0, 0.6, 0, 0.4, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
      >
        {text}
      </motion.span>
    </span>
  );
}
