"use client";

import { useEffect, useRef, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
  /** Normalized 0–1 relative to the viewport */
  nx: number;
  ny: number;
}

/**
 * Tracks the current mouse position on the window.
 * Returns both raw pixel coords and normalized 0-1 values.
 */
export function useMouse(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    nx: 0,
    ny: 0,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
        nx: e.clientX / window.innerWidth,
        ny: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}

/**
 * Tracks mouse position relative to a specific element.
 */
export function useMouseRelative<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({
        x,
        y,
        nx: x / rect.width,
        ny: y / rect.height,
      });
    };

    el.addEventListener("mousemove", handleMove, { passive: true });
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return { ref, ...position };
}
