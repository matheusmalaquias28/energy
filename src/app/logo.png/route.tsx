import { ImageResponse } from "next/og";
import { energyLogoDataUri } from "@/lib/og";

// Logo em PNG para o schema Organization (/logo.png). Fundo escuro porque o texto do logo é branco.
export const dynamic = "force-static";

export async function GET() {
  const logo = await energyLogoDataUri();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0f10",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={480} height={180} alt="" />
      </div>
    ),
    {
      width: 600,
      height: 600,
      headers: { "Cache-Control": "public, max-age=86400, immutable" },
    },
  );
}
