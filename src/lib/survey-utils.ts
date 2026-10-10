import type { Survey, SurveyStatus } from "@/types/survey";

export function filterSurveys(
  surveys: Survey[],
  query: string,
  status: SurveyStatus | "all",
  category: string
): Survey[] {
  return surveys.filter((survey) => {
    const matchesStatus = status === "all" || survey.status === status;
    const matchesCategory =
      category === "all" || survey.category === category;
    const matchesQuery =
      query === "" ||
      survey.title.toLowerCase().includes(query.toLowerCase()) ||
      survey.description.toLowerCase().includes(query.toLowerCase()) ||
      survey.tags.some((tag) =>
        tag.toLowerCase().includes(query.toLowerCase())
      ) ||
      survey.category.toLowerCase().includes(query.toLowerCase());

    return matchesStatus && matchesCategory && matchesQuery;
  });
}

export function getFeaturedSurveys(surveys: Survey[]): Survey[] {
  return surveys.filter((s) => s.featured);
}

export function getSurveyBySlug(
  surveys: Survey[],
  slug: string
): Survey | undefined {
  return surveys.find((s) => s.slug === slug);
}

export function getCategories(surveys: Survey[]): string[] {
  const cats = new Set(surveys.map((s) => s.category));
  return Array.from(cats).sort();
}

export function getRelatedSurveys(
  surveys: Survey[],
  current: Survey,
  limit = 3
): Survey[] {
  return surveys
    .filter(
      (s) =>
        s.id !== current.id &&
        (s.category === current.category ||
          s.tags.some((t) => current.tags.includes(t)))
    )
    .slice(0, limit);
}
