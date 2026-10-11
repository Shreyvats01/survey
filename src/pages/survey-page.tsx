import { useEffect } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SurveyHero } from "@/components/surveys/survey-hero";
import { SurveyAbout } from "@/components/surveys/survey-about";
import { SurveyAudience } from "@/components/surveys/survey-audience";
import { SurveyExploration } from "@/components/surveys/survey-exploration";
import { SurveySignificance } from "@/components/surveys/survey-significance";
import { SurveyClosing } from "@/components/surveys/survey-closing";
import { SurveyParticipation } from "@/components/surveys/survey-participation";
import { RelatedSurveys } from "@/components/surveys/related-surveys";
import { getSurveyBySlug, getRelatedSurveys } from "@/lib/survey-utils";
import { surveys } from "@/data/surveys";

export function SurveyPage() {
  const { slug } = useParams<{ slug: string }>();
  const survey = slug ? getSurveyBySlug(surveys, slug) : undefined;

  useEffect(() => {
    if (survey) {
      document.title = `${survey.title} — Survey Directory`;
    } else {
      document.title = "Survey Not Found — Survey Directory";
    }
  }, [survey]);

  if (!survey) {
    return (
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <Container className="py-20 text-center">
          <h1 className="font-serif text-4xl text-plum">Survey not found</h1>
          <p className="mt-4 text-plum/60">
            The inquiry you're looking for doesn't exist or may have been relocated.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-plum/30 px-6 py-3 text-sm font-medium text-plum transition-colors hover:bg-plum hover:text-cream"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to surveys
          </Link>
        </Container>
      </div>
    );
  }

  const related = getRelatedSurveys(surveys, survey);

  return (
    <div className="relative z-10 w-full">
      <SurveyHero survey={survey} />
      <section className="project-content w-full">
        <SurveyAbout survey={survey} />
        <SurveyAudience survey={survey} />
        <SurveyExploration survey={survey} />
        <SurveySignificance survey={survey} />
        <SurveyClosing survey={survey} />
        <SurveyParticipation survey={survey} />
      </section>
      <RelatedSurveys currentSurvey={survey} relatedSurveys={related} />
    </div>
  );
}
