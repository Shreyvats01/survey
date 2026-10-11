import { useState } from "react";
import {
  ExternalLink,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Lock,
} from "lucide-react";
import type { Survey } from "@/types/survey";
import { isSurveyProtected } from "@/lib/survey-security";
import { PasswordFormDialog } from "@/components/surveys/password-form-dialog";

interface SurveyParticipationProps {
  survey: Survey;
}

export function SurveyParticipation({ survey }: SurveyParticipationProps) {
  const status = survey.status;
  const participation = survey.participation;
  const formUrl = participation?.formUrl ?? survey.formUrl;
  const forms = participation?.forms ?? survey.forms ?? [];
  const estimatedMinutes =
    participation?.estimatedMinutes ?? survey.estimatedMinutes;
  const privacyNotice =
    participation?.privacyNotice ??
    survey.privacyNote ??
    "All responses are anonymous. No personally identifiable information is collected.";

  const isProtected = isSurveyProtected(survey);
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [pendingFormUrl, setPendingFormUrl] = useState<string | null>(null);

  const handleOpenForm = (targetUrl: string) => {
    setPendingFormUrl(targetUrl);
    setPasswordDialogOpen(true);
  };

  const handlePasswordSuccess = () => {
    if (pendingFormUrl) {
      window.open(pendingFormUrl, "_blank", "noopener,noreferrer");
      setPendingFormUrl(null);
    }
  };

  return (
    <div className="block-section w-full bg-[#ece4df] py-16 sm:py-20 md:py-24 xl:py-28">
      <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8 mb-8 md:mb-12">
        <h2 className="block-section__heading font-serif text-3xl sm:text-4xl md:text-5xl text-plum pb-1.5">
          {status === "ongoing"
            ? "Participate in this inquiry"
            : status === "completed"
              ? "Survey Concluded"
              : status === "upcoming"
                ? "Fielding Upcoming"
                : "Status to be Confirmed"}
        </h2>
      </div>

      <div className="block-section__blocks">
        <div className="block-text">
          <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8">
            {status === "ongoing" && formUrl ? (
              <div className="max-w-[660px] space-y-6">
                <p className="font-sans text-base md:text-lg leading-[1.6] text-plum/90">
                  Your perspective is essential in developing an authentic
                  understanding of community conditions. Responses are collected
                  directly and securely via Google Forms.
                </p>

                {/* Authentic Google Forms buttons with language choices */}
                {forms.length > 1 ? (
                  <div className="flex flex-wrap gap-4 pt-2 mt-8">
                    {forms.map((f) =>
                      isProtected ? (
                        <button
                          key={f.language}
                          type="button"
                          onClick={() => handleOpenForm(f.url)}
                          className="inline-flex items-center gap-2 rounded-full bg-plum px-7 py-3.5 text-base font-medium text-[#dfd5cb] shadow-xs transition-transform duration-200 hover:scale-[1.02] hover:bg-plum-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum cursor-pointer"
                        >
                          <Lock className="h-4 w-4 text-[#dfd5cb]" />
                          <span style={{ color: "#dfd5cb" }}>
                            Participate in {f.language}
                          </span>
                          <ExternalLink className="h-4 w-4 text-[#dfd5cb]" />
                        </button>
                      ) : (
                        <a
                          key={f.language}
                          href={f.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-plum px-7 py-3.5 text-base font-medium text-[#dfd5cb] shadow-xs transition-transform duration-200 hover:scale-[1.02] hover:bg-plum-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum cursor-pointer"
                        >
                          <span style={{ color: "#dfd5cb" }}>
                            Participate in {f.language}
                          </span>
                          <ExternalLink className="h-4 w-4 text-[#dfd5cb]" />
                        </a>
                      )
                    )}
                  </div>
                ) : (
                  <div className="pt-2">
                    {isProtected ? (
                      <button
                        type="button"
                        onClick={() => handleOpenForm(formUrl)}
                        className="inline-flex items-center gap-2 rounded-full bg-plum px-8 py-4 text-base font-medium text-[#dfd5cb] shadow-xs transition-transform duration-200 hover:scale-[1.02] hover:bg-plum-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum cursor-pointer"
                      >
                        <Lock className="h-4 w-4 text-[#dfd5cb]" />
                        <span style={{ color: "#dfd5cb" }}>
                          Open Google Forms questionnaire
                        </span>
                        <ExternalLink className="h-4 w-4 text-[#dfd5cb]" />
                      </button>
                    ) : (
                      <a
                        href={formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-plum px-8 py-4 text-base font-medium text-[#dfd5cb] shadow-xs transition-transform duration-200 hover:scale-[1.02] hover:bg-plum-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum cursor-pointer"
                      >
                        <span style={{ color: "#dfd5cb" }}>
                          Open Google Forms questionnaire
                        </span>
                        <ExternalLink className="h-4 w-4 text-[#dfd5cb]" />
                      </a>
                    )}
                  </div>
                )}

                {/* Privacy and time notes */}
                <div className="flex flex-wrap items-center gap-6 pt-6 text-xs sm:text-sm text-plum/70 border-t border-plum/10">
                  {estimatedMinutes && (
                    <span className="inline-flex items-center gap-1.5 font-sans">
                      <Clock className="h-4 w-4 text-plum/50" />
                      Estimated time: {estimatedMinutes} minutes
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 font-sans">
                    <ShieldCheck className="h-4 w-4 text-plum/50" />
                    {privacyNotice}
                  </span>
                </div>
              </div>
            ) : status === "completed" ? (
              <div className="max-w-[660px] space-y-5">
                <div className="inline-flex items-center gap-2 text-plum/80 font-sans text-sm">
                  <CheckCircle2 className="h-5 w-5 text-plum" />
                  <span>Fielding phase concluded</span>
                </div>
                <p className="font-sans text-base md:text-lg leading-[1.6] text-plum/90">
                  This survey inquiry has formally concluded its response
                  collection phase. Findings and thematic analyses are documented
                  in our research archives. New responses are no longer accepted.
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-plum/30 px-6 py-2.5 text-sm font-medium text-plum/70 bg-plum/5">
                    <span>Status: Completed</span>
                  </div>
                </div>
              </div>
            ) : status === "upcoming" ? (
              <div className="max-w-[660px] space-y-5">
                <div className="inline-flex items-center gap-2 text-plum/80 font-sans text-sm">
                  <Clock className="h-5 w-5 text-plum" />
                  <span>Launch scheduled</span>
                </div>
                <p className="font-sans text-base md:text-lg leading-[1.6] text-plum/90">
                  This inquiry is scheduled for active fielding in an upcoming
                  research cycle. Questionnaire links will open upon launch.
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-plum/25 px-6 py-2.5 text-sm font-medium text-plum/70 bg-plum/5">
                    <span>Upcoming Launch</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-[660px] space-y-5">
                <div className="inline-flex items-center gap-2 text-plum/80 font-sans text-sm">
                  <AlertCircle className="h-5 w-5 text-plum" />
                  <span>Fielding verification pending</span>
                </div>
                <p className="font-sans text-base md:text-lg leading-[1.6] text-plum/90">
                  The research protocol and questionnaire availability for this
                  inquiry are pending confirmation. In keeping with our data
                  integrity standards, response links will only open once the
                  inquiry scope and fielding schedule are verified.
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-plum/25 px-6 py-2.5 text-sm font-medium text-plum/70 bg-plum/5">
                    <span>Fielding status pending verification</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
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
