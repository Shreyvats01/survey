import { Container } from "@/components/shared/container";
import { SurveyCard } from "@/components/surveys/survey-card";
import { getFeaturedSurveys } from "@/lib/survey-utils";
import { surveys } from "@/data/surveys";
import { useRowAspectRatios } from "@/hooks/use-row-aspect-ratios";

export function FeaturedSurveys() {
  const featured = getFeaturedSurveys(surveys);
  const gridRef = useRowAspectRatios([featured]);

  if (featured.length === 0) return null;

  return (
    <section
      id="featured-surveys"
      className="relative z-10 pb-16 pt-6 md:pb-24 md:pt-8 scroll-mt-20"
      aria-labelledby="featured-surveys-heading"
    >
      <Container className="max-w-[1376px] px-4 min-[688px]:px-8 min-[1312px]:px-16">
        <h2 id="featured-surveys-heading" className="sr-only">
          Featured surveys
        </h2>

        {/* 2-column grid with Observatory row gaps */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-y-[58px] min-[688px]:grid-cols-2 min-[688px]:gap-x-8 min-[688px]:gap-y-[72px] min-[992px]:gap-x-12 min-[992px]:gap-y-[82px] min-[1312px]:gap-x-16 min-[1312px]:gap-y-[104px]"
        >
          {featured.map((survey, i) => (
            <SurveyCard
              key={survey.id}
              survey={survey}
              index={i}
              variant="featured"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
