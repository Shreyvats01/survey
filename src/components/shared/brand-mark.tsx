import { cn } from "@/lib/utils";

interface BrandMarkProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BrandMark({ size = "md", className }: BrandMarkProps) {
  const dimensions = {
    sm: 32,
    md: 44,
    lg: 64,
  };

  const d = dimensions[size];

  return (
    <svg
      width={d}
      height={d}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="22.5"
        stroke="currentColor"
        strokeWidth="17"
        fill="none"
      />
    </svg>
  );
}
