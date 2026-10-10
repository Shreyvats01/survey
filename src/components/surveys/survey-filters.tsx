import { cn } from "@/lib/utils";
import type { SurveyStatus } from "@/types/survey";

interface SurveyFiltersProps {
  activeStatus: SurveyStatus | "all";
  onStatusChange: (status: SurveyStatus | "all") => void;
  className?: string;
}

const statuses: { value: SurveyStatus | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ongoing", label: "Ongoing" },
  { value: "upcoming", label: "Upcoming" },
  { value: "completed", label: "Completed" },
];

export function SurveyFilters({
  activeStatus,
  onStatusChange,
  className,
}: SurveyFiltersProps) {
  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="group"
      aria-label="Filter surveys by status"
    >
      {statuses.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onStatusChange(value)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
            activeStatus === value
              ? "border-plum bg-plum text-cream"
              : "border-plum/20 text-plum/70 hover:border-plum/40 hover:text-plum"
          )}
          aria-pressed={activeStatus === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
