import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-oswald",
});

export default function LandingPageCidadeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={oswald.variable}>
      <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&f[]=clash-display@600,700&display=swap"
      />
      {children}
    </div>
  );
}
