import { cn } from "@/lib/utils";
import { ExternalLink, Clock } from "lucide-react";
import type { Survey } from "@/types/survey";

interface SurveyCTAProps {
  survey: Survey;
  className?: string;
}

export function SurveyCTA({ survey, className }: SurveyCTAProps) {
  if (survey.status === "upcoming") {
    return (
      <div className={cn("space-y-3", className)}>
        <button
          type="button"
          disabled
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-plum/20 px-8 py-4 text-base font-medium text-plum/50 cursor-not-allowed sm:w-auto"
        >
          <Clock className="h-5 w-5" />
          Coming Soon
        </button>
        <p className="text-sm text-plum/50">
          This survey has not yet opened for responses.
        </p>
      </div>
    );
  }

  if (survey.status === "completed") {
    return (
      <div className={cn("space-y-3", className)}>
        <button
          type="button"
          disabled
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-plum/10 px-8 py-4 text-base font-medium text-plum/40 cursor-not-allowed sm:w-auto"
        >
          Survey Closed
        </button>
        <p className="text-sm text-plum/50">
          This survey is no longer accepting responses. Thank you to everyone who participated.
        </p>
      </div>
    );
  }

  // Ongoing survey with forms
  if (survey.forms && survey.forms.length > 1) {
    return (
      <div className={cn("space-y-3", className)}>
        <p className="text-sm font-medium text-plum/70">
          Available in {survey.forms.length} languages:
        </p>
        <div className="flex flex-wrap gap-3">
          {survey.forms.map((form) => (
            <a
              key={form.language}
              href={form.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3.5 text-base font-medium text-cream transition-colors duration-300 hover:bg-plum/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
            >
              <ExternalLink className="h-4 w-4" />
              Take Survey ({form.language})
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (!survey.formUrl) {
    return (
      <div className={cn("space-y-3", className)}>
        <button
          type="button"
          disabled
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-plum/20 px-8 py-4 text-base font-medium text-plum/50 cursor-not-allowed sm:w-auto"
        >
          Survey Link Unavailable
        </button>
        <p className="text-sm text-plum/50">
          The form link for this survey is not yet available.
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      <a
        href={survey.formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-plum px-8 py-4 text-base font-medium text-cream transition-colors duration-300 hover:bg-plum/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
      >
        <ExternalLink className="h-5 w-5" />
        Take This Survey
      </a>
      {survey.estimatedMinutes && (
        <p className="text-sm text-plum/50">
          Estimated time: {survey.estimatedMinutes} minutes
        </p>
      )}
    </div>
  );
}
