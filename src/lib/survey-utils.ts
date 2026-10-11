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
  return surveys.find((s) => s.slug === slug || s.aliases?.includes(slug));
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
  if (current.relatedSurveySlugs && current.relatedSurveySlugs.length > 0) {
    const explicitlyRelated: Survey[] = [];
    for (const slug of current.relatedSurveySlugs) {
      const match = surveys.find(
        (s) => (s.slug === slug || s.aliases?.includes(slug)) && s.id !== current.id
      );
      if (match && !explicitlyRelated.some((r) => r.id === match.id)) {
        explicitlyRelated.push(match);
      }
    }
    if (explicitlyRelated.length >= limit) {
      return explicitlyRelated.slice(0, limit);
    }
    const remainingLimit = limit - explicitlyRelated.length;
    const fallbackMatches = surveys
      .filter(
        (s) =>
          s.id !== current.id &&
          !explicitlyRelated.some((r) => r.id === s.id) &&
          (s.category === current.category ||
            s.tags.some((t) => current.tags.includes(t)))
      )
      .slice(0, remainingLimit);

    return [...explicitlyRelated, ...fallbackMatches];
  }

  return surveys
    .filter(
      (s) =>
        s.id !== current.id &&
        (s.category === current.category ||
          s.tags.some((t) => current.tags.includes(t)))
    )
    .slice(0, limit);
}
