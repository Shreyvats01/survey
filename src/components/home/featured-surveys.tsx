import { motion } from "motion/react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { EditorialLink } from "@/components/shared/editorial-link";
import { SurveyCard } from "@/components/surveys/survey-card";
import { getFeaturedSurveys } from "@/lib/survey-utils";
import { surveys } from "@/data/surveys";

export function FeaturedSurveys() {
  const featured = getFeaturedSurveys(surveys);

  if (featured.length === 0) return null;

  return (
    <section className="relative z-10 py-12 md:py-20">
      <Container>
        {/* Section header - mimics the reference's "Featured projects" row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between md:mb-14"
        >
          <SectionHeading>Featured surveys</SectionHeading>
          <EditorialLink to="/archive">
            Browse all {surveys.length} surveys
          </EditorialLink>
        </motion.div>

        {/* Featured cards grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
          {featured.map((survey, i) => (
            <SurveyCard key={survey.id} survey={survey} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
