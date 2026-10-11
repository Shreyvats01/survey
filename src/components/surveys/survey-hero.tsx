

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
    const d = new Date(`${dateStr}T00:00:00`);

    if (Number.isNaN(d.getTime())) return dateStr;

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
    <section className="project-hero relative w-full pb-16 md:pb-20 xl:pb-24">
      <div
        className="
          wrap mx-auto grid max-w-[1376px] grid-cols-1
          items-start gap-y-8 px-4 sm:px-8
          lg:grid-cols-2 lg:gap-x-12 lg:pt-12
          xl:gap-x-16 xl:pt-14
        "
      >
        {/* Desktop image: align with the top of the heading */}
        <div
          className="
            project-hero__image relative order-1 w-full
            lg:col-start-2 lg:row-start-1 lg:z-10
          "
        >
          <img
            src={survey.coverImage}
            alt={survey.coverImageAlt}
            className="
              aspect-[4/3] w-full rounded-[24px] object-cover
              sm:aspect-[16/11]
              md:rounded-[32px]
              lg:aspect-[3/2]
              xl:rounded-[40px]
            "
            loading="eager"
            fetchPriority="high"
            width={1248}
            height={858}
          />
        </div>

        {/* Text content stays in the left column */}
        <div
          className="
            project-hero__text relative order-2 w-full
            lg:col-start-1 lg:row-start-1
          "
        >
          <h1
            className="
              relative z-20 w-full
              font-sans font-normal
              text-4xl leading-[1.05] tracking-[-0.025em] text-plum
              text-balance
              sm:text-5xl
              md:text-6xl
              lg:w-[calc(200%+3rem)]
              lg:text-[clamp(3.8rem,7.8vw,7.5rem)]
              lg:leading-[0.98]
              lg:tracking-[-0.045em]
              xl:w-[calc(200%+4rem)]
              xl:text-[clamp(4rem,8vw,7.5rem)]
            "
          >
            {survey.title}
          </h1>

          {/* Serif subtitle remains constrained to the text column */}
          {subtitle && (
            <p
              className="
                mt-4 max-w-full
                font-serif text-[24px] leading-[1.2]
                tracking-[-0.025em] text-plum/90
                md:mt-6 md:text-[32px]
                xl:mt-7 xl:text-[40px]
              "
            >
              {subtitle}
            </p>
          )}

          {/* Research topic tags */}
          {survey.tags && survey.tags.length > 0 && (
            <div
              className="
                project-hero__tags mt-6 flex flex-wrap gap-1.5
                md:mt-8 xl:mt-12
              "
            >
              {survey.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/archive?tag=${encodeURIComponent(tag)}`}
                  className="
                    inline-flex items-center rounded-full
                    border border-plum/80 px-4 py-2
                    font-serif text-sm leading-none text-plum
                    transition-colors duration-200
                    hover:bg-plum hover:text-cream
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-plum
                    md:text-base
                  "
                  onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#dfd5cb";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#222";
                      }}

                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          {/* Publication date and attribution */}
          <div className="project-hero__author mt-5 md:mt-6">
            <Link
              to={`/archive?category=${encodeURIComponent(survey.category)}`}
              className="
                group inline-flex items-center gap-3
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-plum
              "
              title={`Curated by ${authorOrCategory}`}
            >
              <div className="h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full">
                <img
                  src="/images/hero-portrait-solitary-field.jpg"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full rounded-full object-cover grayscale"
                  width={60}
                  height={60}
                />
              </div>

              <div className="flex flex-col gap-0.5 pb-0.5 font-sans">
                <span className="text-base font-normal leading-tight text-plum md:text-xl">
                  Posted {postedDate}
                </span>

                <span
                  className="
                    text-sm font-normal leading-tight text-plum
                    underline decoration-transparent
                    transition-[text-decoration-color] duration-300
                    group-hover:decoration-plum
                    md:text-base
                  "
                >
                  by {authorOrCategory}
                </span>
              </div>
            </Link>
          </div>

          {/* Secondary survey information */}
          <div
            className="
              mt-5 flex flex-wrap items-center gap-x-4 gap-y-2
              text-xs text-plum/65
              sm:text-sm
            "
          >
            <SurveyStatus status={survey.status} />

            {survey.estimatedMinutes && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 shrink-0 text-plum/45" />
                {survey.estimatedMinutes} min response
              </span>
            )}

            {survey.languages && survey.languages.length > 0 && (
              <span className="inline-flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 shrink-0 text-plum/45" />
                {survey.languages.join(", ")}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
