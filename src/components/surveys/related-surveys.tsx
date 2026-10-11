import { Link } from "react-router";
import { SurveyCard } from "./survey-card";
import type { Survey } from "@/types/survey";
import { formatDateRange } from "@/lib/date-utils";

interface RelatedSurveysProps {
  currentSurvey: Survey;
  relatedSurveys: Survey[];
}

export function RelatedSurveys({
  currentSurvey,
  relatedSurveys,
}: RelatedSurveysProps) {
  const tags = currentSurvey.tags || [];
  const relatedLinks = currentSurvey.relatedLinks || [];
  const dateRange =
    formatDateRange(currentSurvey.startDate, currentSurvey.endDate) ||
    "Fielding window to be confirmed";

  return (
    <section className="project-footer w-full border-t-2 border-[#d1c8c2] py-16 sm:py-20 md:py-24 xl:py-28">
      {/* 3-Column Editorial Metadata Section */}
      <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 xl:gap-16">
        {/* Col 1: Large pill buttons */}
        <div className="project-footer__section project-footer__section--tags md:col-span-2 lg:col-span-1">
          <h3 className="font-serif text-[20px] font-normal text-plum mb-4">
            View similar inquiries related to...
          </h3>
          <div className="project-footer__tags flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <Link
                key={tag}
                to={`/archive?tag=${encodeURIComponent(tag)}`}
                className="inline-flex items-center px-6 py-[15px] xl:px-8 xl:py-[19px] border border-plum rounded-[25px] xl:rounded-[30px] font-serif text-[18px] xl:text-[20px] leading-none text-plum transition-colors duration-200 hover:bg-plum hover:text-[#dfd5cb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 2: Related links with 1px top borders and smooth underline reveals */}
        <div className="project-footer__section">
          <h4 className="font-serif text-[20px] font-normal text-plum mb-4">
            Related links
          </h4>
          <div className="project-footer__links grid mt-4">
            {relatedLinks.length > 0 ? (
              relatedLinks.map((link, idx) =>
                link.url ? (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-t border-[#d1c8c2] py-3 text-base leading-6 text-plum underline decoration-transparent transition-[text-decoration-color] duration-400 hover:decoration-plum focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
                  >
                    {link.title}
                  </a>
                ) : (
                  <span
                    key={idx}
                    className="block border-t border-[#d1c8c2] py-3 text-base leading-6 text-plum/85"
                  >
                    {link.title}
                  </span>
                )
              )
            ) : (
              <p className="block border-t border-[#d1c8c2] py-3 font-sans text-base leading-6 text-plum/70">
                Methodology protocols and community consultation notes are
                maintained in the research archive.
              </p>
            )}
          </div>
        </div>

        {/* Col 3: Thematic domain and fielding cycle metadata */}
        <div className="project-footer__section space-y-6">
          <div>
            <h4 className="font-serif text-[20px] font-normal text-plum">
              Thematic Domain
            </h4>
            <div className="project-footer__info font-sans text-base leading-6 text-plum/85 mt-2">
              {currentSurvey.category}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-[20px] font-normal text-plum">
              Fielding Cycle
            </h4>
            <div className="project-footer__info font-sans text-base leading-6 text-plum/85 mt-2">
              {dateRange}
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated separation between metadata and related inquiries */}
      {relatedSurveys.length > 0 && (
        <div className="h-16 md:h-24 xl:h-28" aria-hidden="true" />
      )}

      {/* Followed by related inquiries archive grid */}
      {relatedSurveys.length > 0 && (
        <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8 mt-16 md:mt-24 pt-12 md:pt-16 border-t border-plum/10">
          <div className="flex items-center justify-between mb-8 pb-4 pt-4 border-b border-plum/10 ">
            <h3 className="font-serif text-2xl sm:text-3xl text-plum">
              Related Inquiries
            </h3>
            <Link
              to="/archive"
              className="font-sans text-sm text-plum/70 hover:text-plum hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
            >
              Browse directory →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedSurveys.slice(0, 3).map((s, idx) => (
              <SurveyCard key={s.id} survey={s} index={idx} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
