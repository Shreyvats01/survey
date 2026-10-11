import { cn } from "@/lib/utils";
import { BrandMark } from "./brand-mark";
import { ArrowDown } from "lucide-react";

interface SectionHeadingProps {
  children: React.ReactNode;
  showMark?: boolean;
  variant?: "brand" | "arrow";
  className?: string;
}

export function SectionHeading({
  children,
  showMark = true,
  variant = "brand",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {showMark && (
        variant === "arrow" ? (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-plum text-cream shrink-0" aria-hidden="true">
            <ArrowDown className="h-3.5 w-3.5" />
          </span>
        ) : (
          <BrandMark size="sm" className="text-plum" />
        )
      )}
      <span className="text-sm font-medium uppercase tracking-[0.15em] text-plum/80">
        {children}
      </span>
    </div>
  );
}
