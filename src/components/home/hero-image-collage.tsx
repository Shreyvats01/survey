import { useHeroImageCycle } from "@/hooks/use-hero-image-cycle";
import {
  heroSlot1Images,
  heroSlot2Images,
  type HeroImageItem,
} from "@/data/hero-images";
import { cn } from "@/lib/utils";

export interface HeroImageSlotProps {
  images: HeroImageItem[];
  intervalMs?: number;
  initialDelayMs?: number;
  className?: string;
  id?: string;
}

/**
 * HeroImageSlot pre-renders all 5 images with CSS opacity transitions
 * to prevent DOM churn and flicker while delivering a smooth crossfade.
 */
export function HeroImageSlot({
  images,
  intervalMs = 3000,
  initialDelayMs = 0,
  className,
  id,
}: HeroImageSlotProps) {
  const activeIndex = useHeroImageCycle(images.length, intervalMs, initialDelayMs);

  return (
    <div
      id={id}
      className={cn(
        "hero__image__inner relative aspect-[16/9] w-full overflow-hidden rounded-[var(--border-radius)] lg:w-[320px] shrink-0 bg-plum/5",
        className
      )}
    >
      {images.map((image, idx) => (
        <img
          key={image.id || image.src}
          src={image.src}
          alt={image.alt}
          className={cn(
            "hero__image__img absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ease-[cubic-bezier(0.2,0.3,0,1)]",
            idx === activeIndex
              ? "opacity-100 hero__image__img--active"
              : "opacity-0 pointer-events-none"
          )}
          loading={idx === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
    </div>
  );
}

export interface HeroImageCollageProps {
  slot?: "slot1" | "slot2" | "all" | "mobile";
  className?: string;
}

/**
 * Pre-configured HeroImageCollage component rendering either Slot 1
 * (period 3000ms, initial delay 3000ms) or Slot 2 (period 3000ms, initial delay 1500ms).
 */
export function HeroImageCollage({ slot = "slot1", className }: HeroImageCollageProps) {
  if (slot === "slot2") {
    return (
      <HeroImageSlot
        images={heroSlot2Images}
        intervalMs={3000}
        initialDelayMs={1500}
        className={className}
        id="js-hero-image-two"
      />
    );
  }

  // Slot 1 (and mobile fallback)
  return (
    <HeroImageSlot
      images={heroSlot1Images}
      intervalMs={3000}
      initialDelayMs={3000}
      className={className}
      id="js-hero-image-one"
    />
  );
}
