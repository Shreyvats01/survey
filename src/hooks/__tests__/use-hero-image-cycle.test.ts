import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useHeroImageCycle } from "../use-hero-image-cycle";

describe("useHeroImageCycle", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Default: reduced motion false
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("initializes at index 0", () => {
    const { result } = renderHook(() => useHeroImageCycle(5, 3000, 1500));
    expect(result.current).toBe(0);
  });

  it("advances active index after initialDelay and then every interval", () => {
    const { result } = renderHook(() =>
      useHeroImageCycle({ length: 5, intervalMs: 3000, initialDelayMs: 1500 })
    );

    expect(result.current).toBe(0);

    // Fast-forward past initial delay (1500ms)
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    expect(result.current).toBe(1);

    // Fast-forward past interval (3000ms -> total 4500ms)
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(result.current).toBe(2);

    // Fast-forward past next interval (3000ms -> total 7500ms)
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(result.current).toBe(3);
  });

  it("cycles back to index 0 after reaching length - 1", () => {
    const { result } = renderHook(() =>
      useHeroImageCycle(3, 1000, 1000)
    );

    expect(result.current).toBe(0);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current).toBe(1);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current).toBe(2);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current).toBe(0);
  });

  it("freezes at index 0 when prefers-reduced-motion is active", () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query.includes("prefers-reduced-motion"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() =>
      useHeroImageCycle({ length: 5, intervalMs: 3000, initialDelayMs: 1500 })
    );

    expect(result.current).toBe(0);

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(result.current).toBe(0);
  });
});
