"use client";

import { usePathname } from "next/navigation";
import InnerPagePreloader from "./InnerPagePreloader";

/** Páginas que ranqueiam no Google: sem preloader para não atrasar o LCP. */
const SEO_PREFIXES = ["/servicos", "/agencia/", "/local/", "/landing-page/", "/blog", "/modelo", "/vault"];

export default function PreloaderRouter() {
  const pathname = usePathname();

  if (
    pathname === "/enrgy-lp" ||
    pathname === "/" ||
    SEO_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  )
    return null;

  return <InnerPagePreloader key={pathname} />;
}
