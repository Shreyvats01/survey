import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Lock, ShieldCheck } from "lucide-react";
import type { Survey } from "@/types/survey";
import { isSurveyProtected } from "@/lib/survey-security";
import { SurveyStatus } from "./survey-status";

interface SurveyCardProps {
  survey: Survey;
  index?: number;
  className?: string;
  variant?: "default" | "featured";
  showStatus?: boolean;
}

export function SurveyCard({
  survey,
  index = 0,
  className,
  variant = "default",
  showStatus,
}: SurveyCardProps) {
  const isFeatured = variant === "featured";
  const shouldShowStatus = showStatus ?? (!isFeatured && Boolean(survey.status));
  const isProtected = isSurveyProtected(survey);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={cn("group", className)}
      data-survey-card
    >
      <Link
        to={`/survey/${survey.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
      >
        {/* Observatory photo container with responsive corner radii & floating category badge */}
        <div className="relative overflow-hidden rounded-[24px] min-[688px]:rounded-[32px] min-[1312px]:rounded-[40px] bg-plum/5">
          {isProtected && (
            <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 rounded-full bg-plum/85 text-cream px-2.5 py-1 text-xs font-medium backdrop-blur-md shadow-xs">
              <Lock className="h-3.5 w-3.5" />
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Password Protected</span>
            </div>
          )}
          <div
            data-card-image
            className="survey-card-image w-full aspect-[16/10] overflow-hidden"
          >
            <img
              src={survey.coverImage}
              alt={survey.coverImageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-4 min-[1312px]:mt-6">
          <div className="mb-2 flex items-center gap-2">
            {shouldShowStatus && <SurveyStatus status={survey.status} />}
            {isProtected && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-plum/70 bg-plum/10 rounded-full px-2 py-0.5">
                <Lock className="h-2.5 w-2.5" />
                <ShieldCheck className="h-2.5 w-2.5" />
                Protected
              </span>
            )}
            <span className="text-xs text-plum/50 font-sans">{survey.category}</span>
          </div>

          <h2 className="font-sans text-[20px] sm:text-[24px] font-normal leading-[1.15] text-plum text-balance underline decoration-transparent transition-[text-decoration-color] duration-400 ease-[cubic-bezier(0.2,0.3,0,1)] group-hover:decoration-plum">
            {survey.title}
          </h2>

          <p className="mt-2 font-sans text-base leading-[1.5] text-plum text-balance">
            {survey.description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
