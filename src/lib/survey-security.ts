/**
 * Security helper to determine whether a survey is public or password protected.
 * "Wildlife in the Hills" (slug: "wild-life-impact-hilly-regions") is public to all visitors.
 * All other surveys are protected by password authentication.
 */

export function isSurveyPublic(
  survey: { slug?: string; title?: string } | null | undefined
): boolean {
  if (!survey) return false;
  const slug = survey.slug?.trim().toLowerCase();
  const title = survey.title?.trim().toLowerCase();
  return (
    slug === "wild-life-impact-hilly-regions" ||
    title === "wildlife in the hills"
  );
}

export function isSurveyProtected(
  survey: { slug?: string; title?: string } | null | undefined
): boolean {
  return !isSurveyPublic(survey);
}
