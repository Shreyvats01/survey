import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { motion } from "motion/react";
import type { Survey } from "@/types/survey";
import { SurveyStatus } from "./survey-status";

interface SurveyCardProps {
  survey: Survey;
  index?: number;
  className?: string;
}

export function SurveyCard({ survey, index = 0, className }: SurveyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={cn("group", className)}
    >
      <Link
        to={`/survey/${survey.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
      >
        <div className="relative mb-4 overflow-hidden rounded-2xl bg-plum/5">
          <div className="aspect-[4/3]">
            <img
              src={survey.coverImage}
              alt={survey.coverImageAlt}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <SurveyStatus status={survey.status} />
            <span className="text-xs text-plum/50">{survey.category}</span>
          </div>
          <h3 className="font-serif text-xl leading-tight text-plum transition-colors duration-300 group-hover:text-plum/70 md:text-2xl">
            {survey.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-plum/60">
            {survey.description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
