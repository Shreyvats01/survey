import { cn } from "@/lib/utils";
import { BrandMark } from "./brand-mark";

interface SectionHeadingProps {
  children: React.ReactNode;
  showMark?: boolean;
  className?: string;
}

export function SectionHeading({
  children,
  showMark = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {showMark && (
        <BrandMark size="sm" className="text-plum" />
      )}
      <span className="text-sm font-medium uppercase tracking-[0.15em] text-plum/80">
        {children}
      </span>
    </div>
  );
}
