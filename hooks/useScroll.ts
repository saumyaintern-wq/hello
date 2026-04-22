"use client";

import { useEffect, useRef, useState } from "react";

export interface ScrollState {
  /** Raw scroll Y in pixels */
  scrollY: number;
  /** Normalized 0–1 progress through the whole page */
  progress: number;
  /** True when user is scrolling down */
  isScrollingDown: boolean;
  /** True when user has scrolled past the threshold (default 80px) */
  isPastThreshold: boolean;
}

/**
 * Tracks window scroll position, direction, and overall page progress.
 */
export function useScroll(threshold = 80): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    progress: 0,
    isScrollingDown: false,
    isPastThreshold: false,
  });

  const lastY = useRef(0);

  useEffect(() => {
    let raf: number | null = null;
    const flush = () => {
      raf = null;
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      const isPastThreshold = scrollY > threshold;
      const isScrollingDown = scrollY > lastY.current;
      lastY.current = scrollY;

      setState((prev) => {
        if (
          prev.scrollY === scrollY &&
          prev.isPastThreshold === isPastThreshold &&
          prev.isScrollingDown === isScrollingDown &&
          Math.abs(prev.progress - progress) < 0.0005
        ) {
          return prev;
        }
        return {
          scrollY,
          progress,
          isScrollingDown,
          isPastThreshold,
        };
      });
    };

    const handleScroll = () => {
      if (raf != null) return;
      raf = requestAnimationFrame(flush);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, [threshold]);

  return state;
}

/**
 * Tracks scroll progress relative to a specific element (0 when entering, 1 when leaving viewport).
 */
export function useElementScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const raw = 1 - rect.bottom / (windowH + rect.height);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, progress };
}
