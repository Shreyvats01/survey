import { useEffect, useRef, type RefObject } from "react";

export interface UseRowAspectRatiosOptions {
  /**
   * Optional override for column count determination.
   * Can be a number or a function returning column count for a given container width.
   */
  columns?: number | ((width: number) => number);
  /**
   * CSS selector for the card elements within the grid container.
   * Defaults to '[data-survey-card], [data-grid-item], article, .group'.
   */
  itemSelector?: string;
  /**
   * CSS selector for the image container element to which aspect-ratio is applied.
   * Defaults to '[data-card-image], [data-survey-image], .survey-card-image'.
   */
  imageWrapSelector?: string;
}

/**
 * Calculates and applies the tallest aspect ratio per row:
 * `naturalWidth / naturalHeight` per row for column count (1 on <688px, 2 on 688-1311px, 3 on >=1312px).
 * Applies row aspect ratio to card images so cards in each row share exact matching image height.
 */
export function useRowAspectRatios<T extends HTMLElement = HTMLDivElement>(
  targetRefOrDepsOrOptions?:
    | RefObject<T | null>
    | unknown[]
    | UseRowAspectRatiosOptions,
  depsOrOptions?: unknown[] | UseRowAspectRatiosOptions
): RefObject<T | null> {
  const internalRef = useRef<T>(null);

  // Determine if first argument is a React Ref
  const isTargetRef =
    targetRefOrDepsOrOptions &&
    typeof targetRefOrDepsOrOptions === "object" &&
    "current" in targetRefOrDepsOrOptions;

  const targetRef = isTargetRef
    ? (targetRefOrDepsOrOptions as RefObject<T | null>)
    : internalRef;

  // Extract options and deps
  let options: UseRowAspectRatiosOptions = {};
  let deps: unknown[] = [];

  if (isTargetRef) {
    if (Array.isArray(depsOrOptions)) {
      deps = depsOrOptions;
    } else if (depsOrOptions && typeof depsOrOptions === "object") {
      options = depsOrOptions;
    }
  } else if (Array.isArray(targetRefOrDepsOrOptions)) {
    deps = targetRefOrDepsOrOptions;
    if (depsOrOptions && typeof depsOrOptions === "object" && !Array.isArray(depsOrOptions)) {
      options = depsOrOptions;
    }
  } else if (targetRefOrDepsOrOptions && typeof targetRefOrDepsOrOptions === "object") {
    options = targetRefOrDepsOrOptions as UseRowAspectRatiosOptions;
    if (Array.isArray(depsOrOptions)) {
      deps = depsOrOptions;
    }
  }

  useEffect(() => {
    const container = targetRef.current;
    if (!container) return;

    function getColumns(): number {
      if (typeof options.columns === "number") {
        return options.columns;
      }
      if (typeof options.columns === "function") {
        return options.columns(window.innerWidth);
      }

      const width = window.innerWidth;
      if (width < 688) return 1;
      if (width < 1312) return 2;

      // Check computed grid columns for >= 1312px (e.g., 2 cols in featured, 3 cols in archive)
      if (container) {
        const computed = window.getComputedStyle(container);
        const gridCols = computed.gridTemplateColumns;
        if (gridCols && gridCols !== "none") {
          const colList = gridCols.split(/\s+/).filter(Boolean);
          if (colList.length > 0) {
            return colList.length;
          }
        }
      }

      return 3;
    }

    function calculateAndApplyRatios() {
      if (!container) return;

      const itemSelector =
        options.itemSelector ??
        "[data-survey-card], [data-grid-item], article, .group";
      const imageWrapSelector =
        options.imageWrapSelector ??
        "[data-card-image], [data-survey-image], .survey-card-image";

      const items = Array.from(container.querySelectorAll(itemSelector)) as HTMLElement[];
      if (items.length === 0) return;

      const columnCount = getColumns();

      // On mobile (<688px, 1 column), unset fixed row aspect ratios
      if (columnCount <= 1) {
        items.forEach((item) => {
          const imgWrap = item.querySelector(imageWrapSelector) as HTMLElement | null;
          if (imgWrap) {
            imgWrap.style.aspectRatio = "";
          }
        });
        return;
      }

      // Group cards into rows and find the tallest aspect ratio per row
      // (Smallest width / height ratio represents the tallest image box)
      const rowRatios: Record<number, number> = {};

      items.forEach((item, index) => {
        const img = item.querySelector("img") as HTMLImageElement | null;
        if (!img || !img.naturalWidth || !img.naturalHeight) return;

        const ratio = img.naturalWidth / img.naturalHeight;
        const rowIndex = Math.floor(index / columnCount);

        if (rowRatios[rowIndex] === undefined) {
          rowRatios[rowIndex] = ratio;
        } else if (ratio < rowRatios[rowIndex]) {
          rowRatios[rowIndex] = ratio;
        }
      });

      // Apply the row's tallest aspect ratio to each card image in that row
      items.forEach((item, index) => {
        const rowIndex = Math.floor(index / columnCount);
        const imgWrap = item.querySelector(imageWrapSelector) as HTMLElement | null;
        const tallestRatio = rowRatios[rowIndex];

        if (imgWrap && tallestRatio !== undefined) {
          imgWrap.style.aspectRatio = `${tallestRatio}`;
        }
      });
    }

    // Run initially
    calculateAndApplyRatios();

    // Listen for image load events in case images are still loading
    const images = Array.from(container.querySelectorAll("img")) as HTMLImageElement[];
    const cleanupListeners: Array<() => void> = [];

    images.forEach((img) => {
      if (!img.complete) {
        const onLoad = () => calculateAndApplyRatios();
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onLoad);
        cleanupListeners.push(() => {
          img.removeEventListener("load", onLoad);
          img.removeEventListener("error", onLoad);
        });
      }
    });

    // Resize listeners
    let rafId: number | null = null;
    const handleResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        calculateAndApplyRatios();
      });
    };

    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      cleanupListeners.forEach((cleanup) => cleanup());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.columns, options.itemSelector, options.imageWrapSelector, ...deps]);

  return targetRef;
}
