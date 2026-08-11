"use client";
import { useState } from "react";
import Image from "next/image";

const features = [
  {
    title: "Pronto pra qualquer saída",
    body: "Hero de site, anúncio, painel ou impresso, a mesma imagem serve em todo lugar.",
  },
  {
    title: "Sem ferramenta extra",
    body: "Nada de exportar pra outro app: é um clique, dentro da própria plataforma.",
  },
  {
    title: "Qualidade que sustenta seu preço",
    body: "O cliente amplia, olha de perto e a imagem continua valendo o que você cobrou.",
  },
];

export function Upscale() {
  const [sliderX, setSliderX] = useState(50);

  return (
    <section id="upscale" className="sec" style={{ background: "#000" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px", maxWidth: "640px", margin: "0 auto 56px" }}>
          <span className="eyebrow">O acabamento</span>
          <h2
            style={{
              fontFamily: "'Clash Display', system-ui, sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#F2F5F0",
              margin: "16px auto 18px",
              maxWidth: "22ch",
            }}
          >
            O Upscale que separa &ldquo;imagem de IA&rdquo; de imagem profissional
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(242,245,240,0.55)", lineHeight: 1.65, maxWidth: "50ch", margin: "0 auto" }}>
            Gerar a imagem é metade do trabalho. A outra metade é ela aguentar tela grande,
            zoom e impressão sem entregar o jogo.
          </p>
        </div>

        {/* Feature list */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 auto 56px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            maxWidth: "900px",
          }}
        >
          {features.map((f, i) => (
            <li
              key={i}
              className="card"
              style={{ padding: "20px 22px", fontSize: "0.88rem", color: "rgba(242,245,240,0.55)", lineHeight: 1.6 }}
            >
              <strong style={{ display: "block", color: "#F2F5F0", marginBottom: "8px", fontFamily: "'Clash Display', system-ui, sans-serif", fontSize: "0.95rem" }}>
                {f.title}
              </strong>
              {f.body}
            </li>
          ))}
        </ul>

        {/* Before/After slider */}
        <div
          style={{ position: "relative", maxWidth: "800px", margin: "0 auto", borderRadius: "16px", overflow: "hidden", cursor: "ew-resize", userSelect: "none" }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setSliderX(((e.clientX - rect.left) / rect.width) * 100);
          }}
        >
          {/* Before */}
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src="/sites/iamaisgen-br-36c19ba4/root-8a5edab2/images/SEM_UP.png"
              alt="Antes do upscale"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* After (clipped) */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${sliderX}%`,
              height: "100%",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", width: `${10000 / sliderX}%`, height: "100%" }}>
              <Image
                src="/sites/iamaisgen-br-36c19ba4/root-8a5edab2/images/COM_UP.png"
                alt="Depois do upscale"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Labels */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              background: "rgba(0,0,0,0.7)",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#F2F5F0",
            }}
          >
            Depois · 4x
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              background: "rgba(0,0,0,0.7)",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "rgba(242,245,240,0.6)",
            }}
          >
            Antes
          </div>

          {/* Divider line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${sliderX}%`,
              width: "2px",
              background: "#FE4101",
              transform: "translateX(-50%)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "#FE4101",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0A0A0A",
                fontSize: "0.75rem",
                fontWeight: 700,
              }}
            >
              ⟷
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
