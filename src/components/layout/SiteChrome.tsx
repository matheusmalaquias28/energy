"use client";

import { usePathname } from "next/navigation";

/** Rotas standalone (propostas comerciais) não exibem navbar, footer, cursor e CTA flutuante. */
export function isStandaloneRoute(pathname: string | null) {
  return !!pathname && pathname.startsWith("/proposta");
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (isStandaloneRoute(pathname)) return null;
  return <>{children}</>;
}
