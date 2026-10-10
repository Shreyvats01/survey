import { SearchX } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export function EmptyState({
  title = "No surveys found",
  description = "Try adjusting your search terms or filters.",
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-20 text-center",
        className
      )}
    >
      <SearchX className="mb-4 h-12 w-12 text-plum/30" strokeWidth={1.5} />
      <h3 className="font-serif text-2xl text-plum">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-plum/60">{description}</p>
    </div>
  );
}
