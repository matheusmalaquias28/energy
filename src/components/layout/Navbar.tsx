"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/layout/BrandLogo";
import NavMenuInflatedLogo from "@/components/layout/NavMenuInflatedLogo";
import { ScrambleText } from "@/components/effects/ScrambleText";
import { urbanist } from "@/lib/fonts";
import { useContactModal } from "@/components/contact/contact-modal-context";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "#faq" },
] as const;

const linkTextClass = `${urbanist.className} text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase tracking-[-0.04em]`;

export default function Navbar() {
  const { openContactModal } = useContactModal();
  const [open, setOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const winH = document.documentElement.scrollHeight - window.innerHeight;
        setScrollPct(winH > 0 ? Math.round((window.scrollY / winH) * 100) : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("nav-menu-toggle", { detail: { open } }));
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" aria-hidden>
          <div
            className="h-full bg-[#FE4101]/60 transition-[width] duration-150 ease-out"
            style={{ width: `${scrollPct}%` }}
          />
        </div>

        <motion.a
          href="/"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="pointer-events-auto absolute top-6 left-6 z-[102] flex items-center md:left-10 lg:left-14"
          onClick={close}
        >
          <BrandLogo priority />
        </motion.a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-nav-overlay"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className={`pointer-events-auto absolute top-5 right-5 z-[260] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-[transform,box-shadow,border-color] duration-300 hover:border-[#FE4101]/40 hover:shadow-[0_12px_40px_rgba(254,65,1,0.2)] active:scale-[0.97] md:right-8 lg:right-12 ${open ? "hidden" : ""}`}
        >
          <Menu className="h-6 w-6 text-[#FE4101]" strokeWidth={2.25} aria-hidden />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-nav-overlay"
            key="nav-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Navegação"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.58, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[250] flex flex-col bg-[#FE4101] lg:flex-row lg:items-stretch"
          >
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={close}
              className="pointer-events-auto absolute right-5 top-5 z-[2] flex h-12 w-12 items-center justify-center rounded-2xl border border-black/15 bg-black text-[#FE4101] transition-[transform,background-color] duration-300 hover:bg-neutral-900 md:right-8 lg:right-12"
            >
              <X className="h-6 w-6" strokeWidth={2.25} aria-hidden />
            </button>

            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">
              <div className="flex min-w-0 flex-1 flex-col justify-center px-6 pb-8 pt-24 md:px-12 lg:px-12 lg:pb-16 lg:pt-28 lg:pl-16 xl:pl-20">
              <nav aria-label="Principal">
                <ul className="flex flex-col gap-1 md:gap-2">
                  {links.map((link, i) => (
                    <li key={link.href}>
                      <motion.div
                        initial={{ opacity: 0, y: 36 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.12 + i * 0.085,
                          duration: 0.5,
                          ease: [0.25, 1, 0.5, 1],
                        }}
                      >
                        <a
                          href={link.href}
                          onClick={close}
                          className="group block w-full max-w-4xl rounded-2xl px-4 py-3 text-black transition-[background-color,color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-[#FE4101] hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)] md:px-5 md:py-4"
                        >
                          <ScrambleText
                            text={link.label}
                            delay={380 + i * 160}
                            duration={820}
                            className={`${linkTextClass} text-inherit`}
                          />
                        </a>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.12 + links.length * 0.085 + 0.12,
                  duration: 0.5,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="mt-12 md:mt-16"
              >
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    close();
                    openContactModal();
                  }}
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-black bg-black px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FE4101] shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-[transform,background-color,color,box-shadow] duration-300 hover:bg-transparent hover:text-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:px-9 md:py-4 md:text-xs"
                >
                  <ScrambleText
                    text="Solicitar orçamento"
                    delay={380 + links.length * 160 + 120}
                    duration={900}
                    className={`${urbanist.className} uppercase tracking-[0.12em]`}
                  />
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                    aria-hidden
                  />
                </a>
              </motion.div>
              </div>

              <div className="flex flex-none items-center justify-center px-4 pb-12 pt-2 lg:w-[50vw] lg:min-w-[50vw] lg:max-w-[50vw] lg:shrink-0 lg:items-stretch lg:justify-center lg:self-stretch lg:px-6 lg:pb-16 lg:pt-28 lg:pr-8 xl:pr-12">
                <NavMenuInflatedLogo />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
