import { describe, it, expect } from "vitest";
import { isSurveyPublic, isSurveyProtected } from "../survey-security";

describe("survey-security", () => {
  describe("isSurveyPublic", () => {
    it("returns true when slug is 'wild-life-impact-hilly-regions'", () => {
      expect(
        isSurveyPublic({
          slug: "wild-life-impact-hilly-regions",
          title: "Some Other Title",
        })
      ).toBe(true);
    });

    it("returns true when title is 'Wildlife in the Hills' (case-insensitive)", () => {
      expect(
        isSurveyPublic({
          slug: "some-slug",
          title: "Wildlife in the Hills",
        })
      ).toBe(true);
      expect(
        isSurveyPublic({
          slug: "some-slug",
          title: "wildlife in the hills",
        })
      ).toBe(true);
      expect(
        isSurveyPublic({
          slug: "some-slug",
          title: "  WILDLIFE IN THE HILLS  ",
        })
      ).toBe(true);
    });

    it("returns false for null, undefined, or empty object", () => {
      expect(isSurveyPublic(null)).toBe(false);
      expect(isSurveyPublic(undefined)).toBe(false);
      expect(isSurveyPublic({})).toBe(false);
    });

    it("returns false for any other survey", () => {
      expect(
        isSurveyPublic({
          slug: "rural-healthcare-access",
          title: "Rural Healthcare Access",
        })
      ).toBe(false);
    });
  });

  describe("isSurveyProtected", () => {
    it("returns false for Wildlife in the Hills", () => {
      expect(
        isSurveyProtected({
          slug: "wild-life-impact-hilly-regions",
          title: "Wildlife in the Hills",
        })
      ).toBe(false);
    });

    it("returns true for other surveys", () => {
      expect(
        isSurveyProtected({
          slug: "rural-healthcare-access",
          title: "Rural Healthcare Access",
        })
      ).toBe(true);
      expect(isSurveyProtected(null)).toBe(true);
    });
  });
});
