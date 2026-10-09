"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Rotas que usam o cursor nativo do sistema. */
const NATIVE_CURSOR_ROUTES = ["/servicos/seo-para-empresas"];

export default function CustomCursor() {
  const pathname = usePathname();
  const disabled = !!pathname && NATIVE_CURSOR_ROUTES.includes(pathname);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onNavMenu = (e: Event) => {
      const detail = (e as CustomEvent<{ open: boolean }>).detail;
      setNavMenuOpen(!!detail?.open);
    };
    window.addEventListener("nav-menu-toggle", onNavMenu as EventListener);
    return () => window.removeEventListener("nav-menu-toggle", onNavMenu as EventListener);
  }, []);

  useEffect(() => {
    if (disabled) return;
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleHover = () => dotRef.current?.classList.add("scale-150");
    const handleLeave = () => dotRef.current?.classList.remove("scale-150");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [cursorX, cursorY, disabled]);

  if (disabled) return null;

  const dotColor = navMenuOpen ? "bg-black" : "bg-[#FE4101]";
  const ringColor = navMenuOpen ? "border-black/45" : "border-[#FE4101]/50";

  return (
    <>
      <motion.div
        ref={dotRef as React.RefObject<HTMLDivElement>}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[transform,background-color] duration-200 ${dotColor}`}
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[border-color] duration-200 ${ringColor}`}
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
