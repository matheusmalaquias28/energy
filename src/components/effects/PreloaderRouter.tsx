"use client";

import { usePathname } from "next/navigation";
import InnerPagePreloader from "./InnerPagePreloader";

export default function PreloaderRouter() {
  const pathname = usePathname();

  if (pathname === "/enrgy-lp" || pathname === "/") return null;

  return <InnerPagePreloader key={pathname} />;
}
