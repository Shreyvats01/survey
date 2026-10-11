import { cn } from "@/lib/utils";
import type { Survey } from "@/types/survey";
import { SurveyCard } from "./survey-card";
import { GlossaryGridCard } from "./glossary-grid-card";
import { EmptyState } from "@/components/shared/empty-state";
import { useRowAspectRatios } from "@/hooks/use-row-aspect-ratios";

interface SurveyGridProps {
  surveys: Survey[];
  className?: string;
  includeGlossaryCard?: boolean;
  glossaryIndex?: number;
}

export function SurveyGrid({
  surveys,
  className,
  includeGlossaryCard = false,
  glossaryIndex = 2,
}: SurveyGridProps) {
  const gridRef = useRowAspectRatios([surveys, includeGlossaryCard]);

  if (surveys.length === 0) {
    return <EmptyState />;
  }

  // Interspersed items with glossary card if requested
  const items: Array<
    | { type: "survey"; data: Survey; key: string }
    | { type: "glossary"; key: string }
  > = [];

  let insertedGlossary = false;
  surveys.forEach((survey, index) => {
    if (includeGlossaryCard && index === glossaryIndex) {
      items.push({ type: "glossary", key: "glossary-card" });
      insertedGlossary = true;
    }
    items.push({ type: "survey", data: survey, key: survey.id });
  });

  if (includeGlossaryCard && !insertedGlossary && surveys.length > 0) {
    items.push({ type: "glossary", key: "glossary-card" });
  }

  return (
    <div
      ref={gridRef}
      className={cn(
        "grid grid-cols-1 gap-y-[58px] min-[688px]:grid-cols-2 min-[688px]:gap-x-8 min-[688px]:gap-y-[72px] min-[992px]:gap-x-12 min-[992px]:gap-y-[82px] min-[1312px]:grid-cols-3 min-[1312px]:gap-x-16 min-[1312px]:gap-y-[104px]",
        className
      )}
    >
      {items.map((item, i) => {
        if (item.type === "glossary") {
          return (
            <GlossaryGridCard
              key={item.key}
              index={i}
            />
          );
        }
        return (
          <SurveyCard
            key={item.key}
            survey={item.data}
            index={i}
          />
        );
      })}
    </div>
  );
}
