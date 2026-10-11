import { useState, useEffect } from "react";

export interface HeroImageCycleOptions {
  length: number;
  intervalMs?: number;
  initialDelayMs?: number;
}

/**
 * Lightweight hook for cycling active index of hero images.
 * Uses setTimeout + setInterval without mounting/unmounting DOM nodes.
 * Respects prefers-reduced-motion (freezes at index 0).
 */
export function useHeroImageCycle(
  lengthOrOptions: number | HeroImageCycleOptions,
  intervalMsArg: number = 3000,
  initialDelayMsArg: number = 0
): number {
  const options =
    typeof lengthOrOptions === "number"
      ? { length: lengthOrOptions, intervalMs: intervalMsArg, initialDelayMs: initialDelayMsArg }
      : {
          length: lengthOrOptions.length,
          intervalMs: lengthOrOptions.intervalMs ?? 3000,
          initialDelayMs: lengthOrOptions.initialDelayMs ?? 0,
        };

  const { length, intervalMs = 3000, initialDelayMs = 0 } = options;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return;

    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        return;
      }
    }

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const delay = initialDelayMs > 0 ? initialDelayMs : intervalMs;

    const timeoutId = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % length);
      intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % length);
      }, intervalMs);
    }, delay);

    const mediaQuery =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setActiveIndex(0);
        clearTimeout(timeoutId);
        if (intervalId !== null) {
          clearInterval(intervalId);
        }
      }
    };

    mediaQuery?.addEventListener?.("change", handleMediaChange);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      mediaQuery?.removeEventListener?.("change", handleMediaChange);
    };
  }, [length, intervalMs, initialDelayMs]);

  return activeIndex;
}
