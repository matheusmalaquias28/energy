"use client";

import { usePathname } from "next/navigation";
import PagePreloader from "./PagePreloader";
import InnerPagePreloader from "./InnerPagePreloader";

export default function PreloaderRouter() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <PagePreloader />;
  }

  // key={pathname} forces a remount on every navigation,
  // so the animation replays as a page transition.
  return <InnerPagePreloader key={pathname} />;
}
