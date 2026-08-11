"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#problema", label: "O problema" },
    { href: "#virada", label: "A solução" },
    { href: "#processo", label: "Como funciona" },
    { href: "#para-quem", label: "Para quem" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "66px",
        display: "flex",
        alignItems: "center",
        background: scrolled
          ? "rgba(0,0,0,0.92)"
          : "rgba(0,0,0,0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.09)",
        transition: "background 0.3s ease",
      }}
    >
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image
            src="/logo-energy.svg"
            alt="Energy"
            width={120}
            height={45}
            style={{ height: "32px", width: "auto" }}
          />
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "rgba(242,245,240,0.72)",
                fontSize: "0.88rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F2F5F0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,245,240,0.72)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Theme toggle placeholder */}
          <button
            aria-label="Alternar tema"
            style={{
              background: "none",
              border: "none",
              color: "rgba(242,245,240,0.6)",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>

          <a
            href="#cta"
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "0.88rem" }}
          >
            Solicitar orçamento
          </a>

          {/* Burger */}
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#F2F5F0",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              alignItems: "center",
            }}
            className="md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "66px",
            left: 0,
            right: 0,
            background: "rgba(0,0,0,0.97)",
            backdropFilter: "blur(16px)",
            padding: "24px",
            borderBottom: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#F2F5F0",
                fontSize: "1.1rem",
                fontWeight: 500,
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
