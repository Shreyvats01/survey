import { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/shared/container";
import { SurveySearch } from "@/components/surveys/survey-search";
import { SurveyFilters } from "@/components/surveys/survey-filters";
import { SurveyGrid } from "@/components/surveys/survey-grid";
import { filterSurveys } from "@/lib/survey-utils";
import { surveys } from "@/data/surveys";
import type { SurveyStatus } from "@/types/survey";

export function ArchivePage() {
  const [query, setQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState<SurveyStatus | "all">("all");

  useEffect(() => {
    document.title = "Survey Archive — Survey Directory";
  }, []);

  const filtered = useMemo(
    () => filterSurveys(surveys, query, activeStatus, "all"),
    [query, activeStatus]
  );

  const statusCounts = useMemo(() => ({
    all: surveys.length,
    ongoing: surveys.filter((s) => s.status === "ongoing").length,
    upcoming: surveys.filter((s) => s.status === "upcoming").length,
    completed: surveys.filter((s) => s.status === "completed").length,
    unconfirmed: surveys.filter((s) => s.status === "unconfirmed").length,
  }), []);

  return (
    <main className="relative z-10 flex-1">
      <Container className="max-w-[1376px] px-4 min-[688px]:px-8 min-[1312px]:px-16 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-3xl sm:text-4xl text-plum md:text-5xl lg:text-6xl break-words">
            Survey Archive
          </h1>
          <p className="mt-4 max-w-xl text-base text-plum/55 md:text-lg">
            The complete collection. Search, filter, and explore every survey in
            the archive.
          </p>
        </motion.div>

        <div className="mt-10 mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <SurveySearch
            value={query}
            onChange={setQuery}
            className="w-full sm:max-w-xs"
          />
          <SurveyFilters
            activeStatus={activeStatus}
            onStatusChange={setActiveStatus}
            counts={statusCounts}
          />
        </div>

        <div className="mb-6 font-sans text-sm text-plum/50">
          {filtered.length} {filtered.length === 1 ? "survey" : "surveys"} found
        </div>

        <SurveyGrid
          surveys={filtered}
          includeGlossaryCard={true}
          glossaryIndex={2}
        />
      </Container>
    </main>
  );
}
