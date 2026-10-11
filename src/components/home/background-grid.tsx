import { cn } from "@/lib/utils";

export interface BackgroundGridProps {
  className?: string;
}

/**
 * BackgroundGrid renders the 6-column architectural grid matching Observatory.
 * Positioned absolute behind page content, aligning 6 vertical columns with content.
 */
export function BackgroundGrid({ className }: BackgroundGridProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "grid-background pointer-events-none absolute inset-0 z-0 hidden lg:block overflow-hidden",
        className
      )}
    >
      <div className="mx-auto h-full w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
        <div className="grid h-full grid-cols-6 gap-x-12 xl:gap-x-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-full border-x border-plum/[0.06]"
            />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute left-0 right-0 top-0 -z-10 h-[658px] xl:h-[706px] bg-cream/40" />
    </div>
  );
}
