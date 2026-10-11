import { useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Clock, Lock, ShieldCheck } from "lucide-react";
import type { Survey } from "@/types/survey";
import { isSurveyProtected } from "@/lib/survey-security";
import { PasswordFormDialog } from "@/components/surveys/password-form-dialog";

interface SurveyCTAProps {
  survey: Survey;
  className?: string;
}

export function SurveyCTA({ survey, className }: SurveyCTAProps) {
  const isProtected = isSurveyProtected(survey);
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [pendingFormUrl, setPendingFormUrl] = useState<string | null>(null);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
    if (isProtected) {
      e.preventDefault();
      setPendingFormUrl(url);
      setPasswordDialogOpen(true);
    }
  };

  const handlePasswordSuccess = () => {
    if (pendingFormUrl) {
      window.open(pendingFormUrl, "_blank", "noopener,noreferrer");
      setPendingFormUrl(null);
    }
  };

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

  // Ongoing survey with multiple forms
  if (survey.forms && survey.forms.length > 1) {
    return (
      <div className={cn("space-y-3", className)}>
        {isProtected && (
          <div className="flex items-center gap-1.5 text-xs font-medium text-plum/70">
            <Lock className="h-3.5 w-3.5" />
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Password Protected</span>
          </div>
        )}
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
              onClick={(e) => handleLinkClick(e, form.url)}
              className="inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3.5 text-base font-medium text-cream transition-colors duration-300 hover:bg-plum/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum cursor-pointer"
            >
              {isProtected && <Lock className="h-4 w-4" />}
              <ExternalLink className="h-4 w-4" />
              Take Survey ({form.language})
            </a>
          ))}
        </div>
        <PasswordFormDialog
          open={passwordDialogOpen}
          onOpenChange={setPasswordDialogOpen}
          surveyTitle={survey.title}
          onSuccess={handlePasswordSuccess}
        />
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
      {isProtected && (
        <div className="flex items-center gap-1.5 text-xs font-medium text-plum/70">
          <Lock className="h-3.5 w-3.5" />
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Password Protected</span>
        </div>
      )}
      <a
        href={survey.formUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => handleLinkClick(e, survey.formUrl!)}
        className="inline-flex items-center gap-2 rounded-full bg-plum px-8 py-4 text-base font-medium text-cream transition-colors duration-300 hover:bg-plum/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum cursor-pointer"
      >
        {isProtected && <Lock className="h-5 w-5" />}
        <ExternalLink className="h-5 w-5" />
        Take This Survey
      </a>
      {survey.estimatedMinutes && (
        <p className="text-sm text-plum/50">
          Estimated time: {survey.estimatedMinutes} minutes
        </p>
      )}
      <PasswordFormDialog
        open={passwordDialogOpen}
        onOpenChange={setPasswordDialogOpen}
        surveyTitle={survey.title}
        onSuccess={handlePasswordSuccess}
      />
    </div>
  );
}
