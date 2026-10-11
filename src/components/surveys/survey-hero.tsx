import { Link } from "react-router";
import { Clock, Globe } from "lucide-react";
import type { Survey } from "@/types/survey";
import { SurveyStatus } from "./survey-status";

interface SurveyHeroProps {
  survey: Survey;
}

function formatPostedDate(dateStr?: string): string {
  if (!dateStr) return "2 June 2026";
  try {
    const d = new Date(dateStr + "T00:00:00");
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function SurveyHero({ survey }: SurveyHeroProps) {
  const subtitle = survey.subtitle || survey.description;
  const postedDate = formatPostedDate(survey.startDate);
  const authorOrCategory =
    (survey as { author?: string }).author || survey.category;

  return (
    <section className="project-hero relative pb-16 md:pb-20 xl:pb-24 w-full">
      {/* 2-column grid */}
      <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-12 xl:gap-x-16 items-center">
        {/* Right column on desktop (order 2) with unboxed rounded image */}
        <div className="project-hero__image order-1 lg:order-2 w-full">
          <img
            src={survey.coverImage}
            alt={survey.coverImageAlt}
            className="w-full object-cover rounded-[24px] md:rounded-[32px] xl:rounded-[40px] aspect-[4/3] sm:aspect-[16/11]"
            loading="eager"
            width={1248}
            height={858}
          />
        </div>

        {/* Left column on desktop (order 1) */}
        <div className="project-hero__text order-2 lg:order-1 w-full my-auto">
          {/* Title h1 */}
          <h1 className="font-sans font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-plum text-balance tracking-[-0.02em]">
            {survey.title}
          </h1>

          {/* Subtitle in editorial serif */}
          <p className="font-serif text-[24px] md:text-[32px] xl:text-[40px] leading-[1.2] tracking-[-0.02em] text-plum/90 mt-4 md:mt-6 xl:mt-9">
            {subtitle}
          </p>

          {/* Tags pill buttons with 17px border radius */}
          {survey.tags && survey.tags.length > 0 && (
            <div className="project-hero__tags flex flex-wrap gap-1.5 mt-5 md:mt-6 xl:mt-12">
              {survey.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/archive?tag=${encodeURIComponent(tag)}`}
                  className="inline-flex items-center px-4 py-2 border border-plum rounded-[17px] font-serif text-base leading-none text-plum transition-colors duration-200 hover:bg-plum hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          {/* Author row with 60px circular grayscale avatar */}
          <div className="mt-6 md:mt-8 pt-2">
            <Link
              to={`/archive?category=${encodeURIComponent(survey.category)}`}
              className="project-hero__author group inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
              title={`Curated by ${authorOrCategory}`}
            >
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0">
                <img
                  src="/images/hero-portrait-solitary-field.jpg"
                  alt={authorOrCategory}
                  className="w-full h-full rounded-full grayscale object-cover"
                  width={60}
                  height={60}
                />
              </div>
              <div className="flex flex-col font-sans gap-0.5 pb-0.5">
                <span className="text-[20px] text-plum font-normal leading-tight">
                  Posted {postedDate}
                </span>
                <span className="text-[16px] text-plum font-normal leading-tight underline decoration-transparent transition-[text-decoration-color] duration-300 group-hover:decoration-plum">
                  by {authorOrCategory}
                </span>
              </div>
            </Link>
          </div>

          {/* Metadata chips */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-plum/10 pt-5 text-xs sm:text-sm text-plum/70">
            <SurveyStatus status={survey.status} />

            {survey.estimatedMinutes && (
              <span className="inline-flex items-center gap-1.5 text-plum/65 font-sans">
                <Clock className="h-3.5 w-3.5 text-plum/45" />
                {survey.estimatedMinutes} min response
              </span>
            )}

            {survey.languages && survey.languages.length > 0 && (
              <span className="inline-flex items-center gap-1.5 text-plum/65 font-sans">
                <Globe className="h-3.5 w-3.5 text-plum/45" />
                {survey.languages.join(", ")}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
