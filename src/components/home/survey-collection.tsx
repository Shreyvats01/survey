import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SurveySearch } from "@/components/surveys/survey-search";
import { SurveyFilters } from "@/components/surveys/survey-filters";
import { SurveyGrid } from "@/components/surveys/survey-grid";
import { filterSurveys } from "@/lib/survey-utils";
import { surveys } from "@/data/surveys";
import type { SurveyStatus } from "@/types/survey";

export function SurveyCollection() {
  const [query, setQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState<SurveyStatus | "all">("all");

  const filtered = useMemo(
    () => filterSurveys(surveys, query, activeStatus, "all"),
    [query, activeStatus]
  );

  return (
    <section className="relative z-10 py-12 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading className="mb-8">Browse surveys</SectionHeading>

          {/* Search and filters */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SurveySearch
              value={query}
              onChange={setQuery}
              className="w-full sm:max-w-xs"
            />
            <SurveyFilters
              activeStatus={activeStatus}
              onStatusChange={setActiveStatus}
            />
          </div>
        </motion.div>

        {/* Results */}
        <SurveyGrid surveys={filtered} />
      </Container>
    </section>
  );
}
