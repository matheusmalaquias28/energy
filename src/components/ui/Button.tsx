"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove as unknown as React.MouseEventHandler<Element>}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative inline-flex items-center justify-center font-medium tracking-tight transition-all duration-300 cursor-none overflow-hidden",
        {
          "px-5 py-2.5 text-sm rounded-full": size === "sm",
          "px-7 py-3.5 text-base rounded-full": size === "md",
          "px-10 py-5 text-lg rounded-full": size === "lg",
          "bg-[#FE4101] text-black hover:bg-[#FF5522] active:scale-95 font-semibold": variant === "primary",
          "border border-white/20 text-white hover:border-[#FE4101] hover:text-[#FE4101] active:scale-95": variant === "ghost",
          "border border-[#FE4101] text-[#FE4101] hover:bg-[#FE4101] hover:text-black active:scale-95": variant === "outline",
        },
        className
      )}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
