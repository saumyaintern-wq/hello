"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Optional Lenis smooth scroll (one RAF loop + wheel smoothing).
 * Skips for reduced motion and touch-primary devices: native scroll feels
 * more responsive and avoids extra main-thread work.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const preferNative =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (preferNative) return;

    const lenis = new Lenis({
      duration: 0.85,
      lerp: 0.12,
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
