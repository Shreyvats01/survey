import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock, Globe, Users } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SurveyStatus } from "@/components/surveys/survey-status";
import { SurveyCTA } from "@/components/surveys/survey-cta";
import { SurveyCard } from "@/components/surveys/survey-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getSurveyBySlug, getRelatedSurveys } from "@/lib/survey-utils";
import { formatDateRange } from "@/lib/date-utils";
import { surveys } from "@/data/surveys";

export function SurveyPage() {
  const { slug } = useParams<{ slug: string }>();
  const survey = slug ? getSurveyBySlug(surveys, slug) : undefined;

  if (!survey) {
    return (
      <main className="relative z-10 flex flex-1 items-center justify-center">
        <Container className="py-20 text-center">
          <h1 className="font-serif text-4xl text-plum">Survey not found</h1>
          <p className="mt-4 text-plum/60">The survey you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-plum/30 px-6 py-3 text-sm font-medium text-plum transition-colors hover:bg-plum hover:text-cream"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to surveys
          </Link>
        </Container>
      </main>
    );
  }

  const related = getRelatedSurveys(surveys, survey);
  const dateRange = formatDateRange(survey.startDate, survey.endDate);

  return (
    <main className="relative z-10 flex-1">
      <Container className="py-8 md:py-16">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm text-plum/60 transition-colors hover:text-plum"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All surveys
          </Link>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Cover image */}
            <div className="mb-8 overflow-hidden rounded-2xl bg-plum/5">
              <div className="aspect-[16/9]">
                <img
                  src={survey.coverImage}
                  alt={survey.coverImageAlt}
                  className="h-full w-full object-cover"
                  width={1200}
                  height={675}
                />
              </div>
            </div>

            {/* Status and category */}
            <div className="mb-4 flex items-center gap-3">
              <SurveyStatus status={survey.status} />
              <span className="text-sm text-plum/50">{survey.category}</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl leading-tight text-plum md:text-4xl lg:text-5xl">
              {survey.title}
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-plum/65">
              {survey.description}
            </p>

            {/* Objective */}
            {survey.objective && (
              <div className="mt-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-plum/50">
                  Objective
                </h2>
                <p className="text-base leading-relaxed text-plum/70">
                  {survey.objective}
                </p>
              </div>
            )}

            {/* Privacy note */}
            {survey.privacyNote && (
              <div className="mt-6 rounded-xl border border-plum/10 bg-cream-light/50 p-5">
                <p className="text-sm leading-relaxed text-plum/55">
                  <strong className="font-medium text-plum/70">Privacy:</strong>{" "}
                  {survey.privacyNote}
                </p>
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* CTA */}
            <div className="rounded-2xl border border-plum/10 bg-cream-light/50 p-6">
              <SurveyCTA survey={survey} />
            </div>

            {/* Details */}
            <div className="space-y-4 rounded-2xl border border-plum/10 bg-cream-light/50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-plum/50">
                Details
              </h2>

              {dateRange && (
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-plum/40" />
                  <div>
                    <span className="text-xs text-plum/40">Duration</span>
                    <p className="text-sm text-plum/70">{dateRange}</p>
                  </div>
                </div>
              )}

              {survey.estimatedMinutes && (
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-plum/40" />
                  <div>
                    <span className="text-xs text-plum/40">Estimated time</span>
                    <p className="text-sm text-plum/70">{survey.estimatedMinutes} minutes</p>
                  </div>
                </div>
              )}

              {survey.languages.length > 0 && (
                <div className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-plum/40" />
                  <div>
                    <span className="text-xs text-plum/40">Languages</span>
                    <p className="text-sm text-plum/70">{survey.languages.join(", ")}</p>
                  </div>
                </div>
              )}

              {survey.targetAudience && (
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-plum/40" />
                  <div>
                    <span className="text-xs text-plum/40">Target audience</span>
                    <p className="text-sm text-plum/70">{survey.targetAudience}</p>
                  </div>
                </div>
              )}

              {survey.tags.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs text-plum/40">Topics</span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {survey.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-plum/5 px-2.5 py-1 text-xs text-plum/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.aside>
        </div>

        {/* Related surveys */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mt-16 border-t border-plum/10 pt-12 md:mt-24 md:pt-16"
          >
            <SectionHeading className="mb-10">Related surveys</SectionHeading>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <SurveyCard key={s.id} survey={s} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </Container>
    </main>
  );
}
