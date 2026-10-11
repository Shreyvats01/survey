import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { SurveyStatus as SurveyStatusType } from "@/types/survey";

interface SurveyStatusProps {
  status: SurveyStatusType;
  className?: string;
}

interface StatusConfigItem {
  label: string;
  badgeClass: string;
  renderIndicator: () => ReactNode;
}

const statusConfig: Record<SurveyStatusType, StatusConfigItem> = {
  ongoing: {
    label: "Ongoing",
    badgeClass: "bg-cream-light/90 border-plum/25 text-plum shadow-2xs",
    renderIndicator: () => (
      <span
        className="relative flex h-2 w-2 items-center justify-center"
        aria-hidden="true"
      >
        <span className="absolute h-2 w-2 rounded-full bg-accent-violet/30 animate-ping motion-reduce:animate-none" />
        <span className="h-1.5 w-1.5 rounded-full bg-plum" />
      </span>
    ),
  },
  upcoming: {
    label: "Upcoming",
    badgeClass: "bg-cream-dark/30 border-plum/15 text-plum/70",
    renderIndicator: () => (
      <span
        className="h-1.5 w-1.5 rounded-full border border-plum/50"
        aria-hidden="true"
      />
    ),
  },
  completed: {
    label: "Completed",
    badgeClass: "bg-plum/5 border-plum/10 text-plum/50",
    renderIndicator: () => (
      <span
        className="h-1.5 w-1.5 rounded-full bg-plum/30"
        aria-hidden="true"
      />
    ),
  },
  unconfirmed: {
    label: "Status to be confirmed",
    badgeClass: "bg-plum/5 border-plum/20 text-plum/70",
    renderIndicator: () => (
      <span
        className="h-1.5 w-1.5 rounded-full border border-plum/40"
        aria-hidden="true"
      />
    ),
  },
};

export function SurveyStatus({ status, className }: SurveyStatusProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors",
        config.badgeClass,
        className
      )}
    >
      {config.renderIndicator()}
      {config.label}
    </span>
  );
}
