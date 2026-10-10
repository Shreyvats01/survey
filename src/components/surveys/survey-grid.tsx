import { cn } from "@/lib/utils";
import type { Survey } from "@/types/survey";
import { SurveyCard } from "./survey-card";
import { EmptyState } from "@/components/shared/empty-state";

interface SurveyGridProps {
  surveys: Survey[];
  className?: string;
}

export function SurveyGrid({ surveys, className }: SurveyGridProps) {
  if (surveys.length === 0) {
    return <EmptyState />;
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10",
        className
      )}
    >
      {surveys.map((survey, i) => (
        <SurveyCard key={survey.id} survey={survey} index={i} />
      ))}
    </div>
  );
}
