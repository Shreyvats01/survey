import { describe, it, expect } from "vitest";
import {
  filterSurveys,
  getFeaturedSurveys,
  getSurveyBySlug,
  getCategories,
  getRelatedSurveys,
} from "../survey-utils";
import type { Survey } from "@/types/survey";

const mockSurveys: Survey[] = [
  {
    id: "1",
    slug: "wildlife-conflict",
    title: "Wild Animal Conflict",
    description: "Understanding encounters in mountain regions",
    category: "Environment & Wildlife",
    status: "ongoing",
    formUrl: "https://example.com/1",
    coverImage: "/images/wildlife.jpg",
    coverImageAlt: "Wildlife image",
    languages: ["English", "Hindi"],
    featured: true,
    tags: ["wildlife", "rural", "safety"],
  },
  {
    id: "2",
    slug: "digital-divide",
    title: "Rural Digital Divide",
    description: "Connectivity barriers in villages",
    category: "Technology & Society",
    status: "ongoing",
    formUrl: "https://example.com/2",
    coverImage: "/images/digital.jpg",
    coverImageAlt: "Digital image",
    languages: ["English"],
    featured: false,
    tags: ["digital", "rural", "education"],
  },
  {
    id: "3",
    slug: "healthcare-access",
    title: "Primary Healthcare Survey",
    description: "Access to clinics and maternal care",
    category: "Health & Wellbeing",
    status: "upcoming",
    formUrl: null,
    coverImage: "/images/health.jpg",
    coverImageAlt: "Healthcare image",
    languages: ["English"],
    featured: true,
    tags: ["health", "clinics"],
  },
  {
    id: "4",
    slug: "water-quality-report",
    title: "Groundwater Study",
    description: "Testing contamination levels in borewells",
    category: "Environment & Wildlife",
    status: "completed",
    formUrl: "https://example.com/4",
    coverImage: "/images/water.jpg",
    coverImageAlt: "Water image",
    languages: ["English"],
    featured: false,
    tags: ["water", "environment", "safety"],
  },
];

describe("survey-utils", () => {
  describe("filterSurveys", () => {
    it("returns all surveys when query is empty and filters are 'all'", () => {
      const results = filterSurveys(mockSurveys, "", "all", "all");
      expect(results).toHaveLength(4);
    });

    it("filters surveys matching title case-insensitively", () => {
      const results = filterSurveys(mockSurveys, "animal", "all", "all");
      expect(results).toHaveLength(1);
      expect(results[0].slug).toBe("wildlife-conflict");
    });

    it("filters surveys matching description case-insensitively", () => {
      const results = filterSurveys(mockSurveys, "borewells", "all", "all");
      expect(results).toHaveLength(1);
      expect(results[0].slug).toBe("water-quality-report");
    });

    it("filters surveys matching tags", () => {
      const results = filterSurveys(mockSurveys, "rural", "all", "all");
      expect(results).toHaveLength(2);
      expect(results.map((s) => s.id)).toEqual(["1", "2"]);
    });

    it("filters surveys matching category query", () => {
      const results = filterSurveys(mockSurveys, "Technology", "all", "all");
      expect(results).toHaveLength(1);
      expect(results[0].slug).toBe("digital-divide");
    });

    it("returns empty array when search query matches nothing", () => {
      const results = filterSurveys(mockSurveys, "nonexistent-query", "all", "all");
      expect(results).toHaveLength(0);
    });

    it("filters surveys by status 'all'", () => {
      const results = filterSurveys(mockSurveys, "", "all", "all");
      expect(results).toHaveLength(4);
    });

    it("filters surveys by status 'ongoing'", () => {
      const results = filterSurveys(mockSurveys, "", "ongoing", "all");
      expect(results).toHaveLength(2);
      expect(results.every((s) => s.status === "ongoing")).toBe(true);
    });

    it("filters surveys by status 'upcoming'", () => {
      const results = filterSurveys(mockSurveys, "", "upcoming", "all");
      expect(results).toHaveLength(1);
      expect(results[0].slug).toBe("healthcare-access");
    });

    it("filters surveys by status 'completed'", () => {
      const results = filterSurveys(mockSurveys, "", "completed", "all");
      expect(results).toHaveLength(1);
      expect(results[0].slug).toBe("water-quality-report");
    });

    it("filters surveys by specific category", () => {
      const results = filterSurveys(mockSurveys, "", "all", "Environment & Wildlife");
      expect(results).toHaveLength(2);
      expect(results.every((s) => s.category === "Environment & Wildlife")).toBe(true);
    });

    it("combines query, status, and category filters", () => {
      const results = filterSurveys(
        mockSurveys,
        "safety",
        "ongoing",
        "Environment & Wildlife"
      );
      expect(results).toHaveLength(1);
      expect(results[0].id).toBe("1");
    });
  });

  describe("getFeaturedSurveys", () => {
    it("returns only featured surveys", () => {
      const results = getFeaturedSurveys(mockSurveys);
      expect(results).toHaveLength(2);
      expect(results.every((s) => s.featured)).toBe(true);
      expect(results.map((s) => s.id)).toEqual(["1", "3"]);
    });

    it("returns empty array if no surveys are featured", () => {
      const nonFeatured = mockSurveys.map((s) => ({ ...s, featured: false }));
      const results = getFeaturedSurveys(nonFeatured);
      expect(results).toEqual([]);
    });
  });

  describe("getSurveyBySlug", () => {
    it("returns the survey with matching slug", () => {
      const survey = getSurveyBySlug(mockSurveys, "wildlife-conflict");
      expect(survey).toBeDefined();
      expect(survey?.id).toBe("1");
    });

    it("returns the survey matching an alias", () => {
      const surveysWithAlias: Survey[] = [
        ...mockSurveys,
        {
          id: "5",
          slug: "canonical-slug",
          aliases: ["legacy-alias-1", "legacy-alias-2"],
          title: "Alias Survey",
          description: "Testing aliases",
          category: "Technology & Society",
          status: "ongoing",
          formUrl: null,
          coverImage: "/images/alias.jpg",
          coverImageAlt: "Alias image",
          languages: ["English"],
          featured: false,
          tags: ["tech"],
        },
      ];
      const survey = getSurveyBySlug(surveysWithAlias, "legacy-alias-1");
      expect(survey).toBeDefined();
      expect(survey?.id).toBe("5");
      expect(survey?.slug).toBe("canonical-slug");
    });
  });

  describe("getCategories", () => {
    it("returns sorted unique categories", () => {
      const categories = getCategories(mockSurveys);
      expect(categories).toEqual([
        "Environment & Wildlife",
        "Health & Wellbeing",
        "Technology & Society",
      ]);
    });

    it("returns empty array for an empty survey list", () => {
      expect(getCategories([])).toEqual([]);
    });
  });

  describe("getRelatedSurveys", () => {
    it("excludes the current survey", () => {
      const related = getRelatedSurveys(mockSurveys, mockSurveys[0]);
      expect(related.some((s) => s.id === mockSurveys[0].id)).toBe(false);
    });

    it("prioritizes relatedSurveySlugs before falling back to category/tags", () => {
      const currentWithSlugs: Survey = {
        ...mockSurveys[0],
        relatedSurveySlugs: ["healthcare-access"], // id: 3, which normally doesn't match category or tags
      };
      const related = getRelatedSurveys(mockSurveys, currentWithSlugs, 3);
      expect(related[0].id).toBe("3"); // Explicitly requested slug prioritized
      expect(related.some((s) => s.id === "2" || s.id === "4")).toBe(true);
    });

    it("returns surveys sharing category or tags", () => {
      // Survey 1 is "Environment & Wildlife", tags ["wildlife", "rural", "safety"]
      // Survey 2 shares tag "rural"
      // Survey 4 shares category "Environment & Wildlife" and tag "safety"
      const related = getRelatedSurveys(mockSurveys, mockSurveys[0]);
      expect(related.map((s) => s.id)).toContain("2");
      expect(related.map((s) => s.id)).toContain("4");
      expect(related.map((s) => s.id)).not.toContain("3");
    });

    it("respects the custom limit parameter", () => {
      const related = getRelatedSurveys(mockSurveys, mockSurveys[0], 1);
      expect(related).toHaveLength(1);
    });

    it("returns empty array if no other surveys share category or tags", () => {
      const isolatedSurvey: Survey = {
        id: "99",
        slug: "isolated",
        title: "Isolated Survey",
        description: "No shared attributes",
        category: "Unique Category",
        status: "ongoing",
        formUrl: null,
        coverImage: "/images/iso.jpg",
        coverImageAlt: "Iso",
        languages: ["English"],
        featured: false,
        tags: ["unique-tag"],
      };
      const related = getRelatedSurveys(mockSurveys, isolatedSurvey);
      expect(related).toEqual([]);
    });
  });
});
