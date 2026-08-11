"use client";
import Image from "next/image";

const navGroups = [
  {
    title: "Serviços",
    links: [
      { label: "Landing Pages", href: "#virada" },
      { label: "Como funciona", href: "#processo" },
      { label: "Para quem é", href: "#para-quem" },
      { label: "Perguntas frequentes", href: "#faq" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "/" },
      { label: "Projetos", href: "/" },
      { label: "Blog", href: "/" },
      { label: "Contato", href: "#cta" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Behance", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        background: "#000",
        padding: "64px 0 32px",
      }}
    >
      <div className="wrap">
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(3, 1fr)",
            gap: "48px",
            marginBottom: "56px",
          }}
        >
          {/* Brand */}
          <div>
            <Image
              src="/logo-energy.svg"
              alt="Energy"
              width={108}
              height={40}
              style={{ height: "28px", width: "auto", marginBottom: "16px" }}
            />
            <p style={{ fontSize: "0.82rem", color: "rgba(242,245,240,0.4)", lineHeight: 1.7, maxWidth: "28ch" }}>
              Design que posiciona. Site que converte.
            </p>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "rgba(242,245,240,0.35)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {group.title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: "0.85rem",
                        color: "rgba(242,245,240,0.5)",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#F2F5F0")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,245,240,0.5)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(242,245,240,0.3)", margin: 0 }}>
            © 2026 Energy · Todos os direitos reservados.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(242,245,240,0.3)", margin: 0 }}>
            Design que trabalha por você.
          </p>
        </div>
      </div>
    </footer>
  );
}
