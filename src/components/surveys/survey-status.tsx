import { cn } from "@/lib/utils";
import type { SurveyStatus as SurveyStatusType } from "@/types/survey";

interface SurveyStatusProps {
  status: SurveyStatusType;
  className?: string;
}

const statusConfig: Record<
  SurveyStatusType,
  { label: string; dotClass: string; textClass: string }
> = {
  ongoing: {
    label: "Ongoing",
    dotClass: "bg-emerald-500",
    textClass: "text-emerald-800 border-emerald-300 bg-emerald-50",
  },
  upcoming: {
    label: "Upcoming",
    dotClass: "bg-amber-500",
    textClass: "text-amber-800 border-amber-300 bg-amber-50",
  },
  completed: {
    label: "Completed",
    dotClass: "bg-plum/40",
    textClass: "text-plum/70 border-plum/20 bg-plum/5",
  },
};

export function SurveyStatus({ status, className }: SurveyStatusProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        config.textClass,
        className
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", config.dotClass)}
        aria-hidden="true"
      />
      {config.label}
    </span>
  );
}
