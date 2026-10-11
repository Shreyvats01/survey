import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { SurveyStatus } from "@/types/survey";
import { surveys } from "@/data/surveys";

interface SurveyFiltersProps {
  activeStatus: SurveyStatus | "all";
  onStatusChange: (status: SurveyStatus | "all") => void;
  counts?: Partial<Record<SurveyStatus | "all", number>>;
  className?: string;
}

interface FilterItem {
  value: SurveyStatus | "all";
  label: string;
  renderIndicator: (isActive: boolean) => ReactNode;
}

const filterOptions: FilterItem[] = [
  {
    value: "all",
    label: "All",
    renderIndicator: (isActive) => (
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full transition-colors duration-200",
          isActive ? "bg-plum" : "bg-plum/35"
        )}
        aria-hidden="true"
      />
    ),
  },
  {
    value: "ongoing",
    label: "Ongoing",
    renderIndicator: (isActive) => (
      <span
        className="relative flex h-2 w-2 items-center justify-center"
        aria-hidden="true"
      >
        <span
          className={cn(
            "absolute h-2 w-2 rounded-full animate-ping motion-reduce:animate-none transition-colors duration-200",
            isActive ? "bg-accent-violet/30" : "bg-accent-violet/25"
          )}
        />
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-colors duration-200",
            isActive ? "bg-plum" : "bg-plum/70"
          )}
        />
      </span>
    ),
  },
  {
    value: "upcoming",
    label: "Upcoming",
    renderIndicator: (isActive) => (
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full border transition-colors duration-200",
          isActive ? "border-plum" : "border-plum/50"
        )}
        aria-hidden="true"
      />
    ),
  },
  {
    value: "completed",
    label: "Completed",
    renderIndicator: (isActive) => (
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full transition-colors duration-200",
          isActive ? "bg-plum/70" : "bg-plum/30"
        )}
        aria-hidden="true"
      />
    ),
  },
];

export function SurveyFilters({
  activeStatus,
  onStatusChange,
  counts,
  className,
}: SurveyFiltersProps) {
  const defaultCounts: Record<SurveyStatus | "all", number> = {
    all: surveys.length,
    ongoing: surveys.filter((s) => s.status === "ongoing").length,
    upcoming: surveys.filter((s) => s.status === "upcoming").length,
    completed: surveys.filter((s) => s.status === "completed").length,
    unconfirmed: surveys.filter((s) => s.status === "unconfirmed").length,
  };

  return (
    <div
      className={cn("flex flex-wrap items-center gap-2", className)}
      role="group"
      aria-label="Filter surveys by status"
    >
      {filterOptions.map(({ value, label, renderIndicator }) => {
        const isActive = activeStatus === value;
        const count = counts?.[value] ?? defaultCounts[value] ?? 0;

        return (
          <button
            key={value}
            type="button"
            onClick={() => onStatusChange(value)}
            className={cn(
              "inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 border px-3 py-2 font-serif text-sm font-normal normal-case leading-none transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum min-[1312px]:px-[18px] min-[1312px]:py-[15px] min-[1312px]:text-base rounded-[17px] min-[1312px]:rounded-[24px]",
              isActive
                ? "border-plum bg-[#ece4df] text-plum shadow-2xs"
                : "border-plum/20 bg-transparent text-plum/75 hover:border-plum hover:bg-[#ece4df]/50 hover:text-plum"
            )}
            aria-pressed={isActive}
          >
            {renderIndicator(isActive)}
            <span>{label}</span>
            <span className="font-serif opacity-75">[{count}]</span>
          </button>
        );
      })}
    </div>
  );
}
