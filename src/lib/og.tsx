import { readFile } from "node:fs/promises";
import path from "node:path";

type OgFont = { name: string; data: ArrayBuffer; weight: 400 | 600 | 700 | 800; style: "normal" };

/**
 * Baixa só os glifos usados de uma fonte do Google em TTF (formato aceito pelo
 * ImageResponse). Se a rede falhar, devolve [] e a imagem usa a fonte padrão.
 */
async function loadGoogleFont(family: string, weight: OgFont["weight"], text: string): Promise<OgFont[]> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url, { cache: "force-cache" })).text();
    const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!src) return [];
    const res = await fetch(src, { cache: "force-cache" });
    if (!res.ok) return [];
    return [{ name: family, data: await res.arrayBuffer(), weight, style: "normal" }];
  } catch {
    return [];
  }
}

export async function loadOgFonts(text: string) {
  const [display, body] = await Promise.all([
    loadGoogleFont("Manrope", 800, text),
    loadGoogleFont("Inter", 600, text),
  ]);
  return [...display, ...body];
}

/** Logo da Energy (public/logo-energy.svg) como data URI para usar em <img>. */
export async function energyLogoDataUri() {
  const svg = await readFile(path.join(process.cwd(), "public", "logo-energy.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}

export const OG_SIZE = { width: 1200, height: 630 };

type OgCardProps = {
  logo: string;
  eyebrow: string;
  title: string;
  footer: string;
};

/** Layout padrão das imagens de compartilhamento (1200×630). */
export function OgCard({ logo, eyebrow, title, footer }: OgCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "#0f0f10",
        backgroundImage:
          "radial-gradient(circle at 92% 8%, rgba(254,65,1,0.38), rgba(254,65,1,0) 45%)",
        color: "#ffffff",
        fontFamily: "Inter",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} width={176} height={66} alt="" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 30, fontWeight: 600, color: "#fe4101", marginBottom: 20 }}>{eyebrow}</div>
        <div
          style={{
            fontFamily: "Manrope",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.045em",
            maxWidth: 980,
          }}
        >
          {title}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 26, fontWeight: 600, color: "#a3a3a8" }}>{footer}</div>
    </div>
  );
}
