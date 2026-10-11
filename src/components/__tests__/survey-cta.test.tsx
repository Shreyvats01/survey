import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SurveyCTA } from "../surveys/survey-cta";
import type { Survey } from "@/types/survey";

const baseSurvey: Survey = {
  id: "test-cta-1",
  slug: "sample-survey",
  title: "Sample Survey",
  description: "A sample survey for testing CTA.",
  category: "Community",
  status: "ongoing",
  formUrl: "https://forms.gle/sample",
  coverImage: "/images/sample.jpg",
  coverImageAlt: "Sample image",
  languages: ["English"],
  featured: false,
  tags: ["test"],
};

describe("SurveyCTA", () => {
  it("renders disabled 'Coming Soon' button for upcoming status", () => {
    const upcomingSurvey: Survey = {
      ...baseSurvey,
      status: "upcoming",
    };

    render(<SurveyCTA survey={upcomingSurvey} />);

    const button = screen.getByRole("button", { name: /coming soon/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(
      screen.getByText("This survey has not yet opened for responses.")
    ).toBeInTheDocument();
  });

  it("renders disabled 'Survey Closed' button for completed status", () => {
    const completedSurvey: Survey = {
      ...baseSurvey,
      status: "completed",
    };

    render(<SurveyCTA survey={completedSurvey} />);

    const button = screen.getByRole("button", { name: /survey closed/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(
      screen.getByText(/this survey is no longer accepting responses/i)
    ).toBeInTheDocument();
  });

  it("renders buttons for each language for ongoing status with multiple forms", () => {
    const multiLangSurvey: Survey = {
      ...baseSurvey,
      status: "ongoing",
      forms: [
        { language: "English", url: "https://forms.gle/english" },
        { language: "Hindi", url: "https://forms.gle/hindi" },
        { language: "Spanish", url: "https://forms.gle/spanish" },
      ],
    };

    render(<SurveyCTA survey={multiLangSurvey} />);

    expect(screen.getByText("Available in 3 languages:")).toBeInTheDocument();

    const englishLink = screen.getByRole("link", {
      name: /take survey \(english\)/i,
    });
    expect(englishLink).toBeInTheDocument();
    expect(englishLink).toHaveAttribute("href", "https://forms.gle/english");
    expect(englishLink).toHaveAttribute("target", "_blank");

    const hindiLink = screen.getByRole("link", {
      name: /take survey \(hindi\)/i,
    });
    expect(hindiLink).toBeInTheDocument();
    expect(hindiLink).toHaveAttribute("href", "https://forms.gle/hindi");

    const spanishLink = screen.getByRole("link", {
      name: /take survey \(spanish\)/i,
    });
    expect(spanishLink).toBeInTheDocument();
    expect(spanishLink).toHaveAttribute("href", "https://forms.gle/spanish");
  });

  it("renders single 'Take This Survey' button for ongoing status with single link", () => {
    const singleLinkSurvey: Survey = {
      ...baseSurvey,
      status: "ongoing",
      formUrl: "https://forms.gle/single",
      forms: undefined,
      estimatedMinutes: 10,
    };

    render(<SurveyCTA survey={singleLinkSurvey} />);

    const link = screen.getByRole("link", { name: /take this survey/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://forms.gle/single");
    expect(link).toHaveAttribute("target", "_blank");
    expect(screen.getByText("Estimated time: 10 minutes")).toBeInTheDocument();
  });

  it("renders disabled 'Survey Link Unavailable' button when ongoing survey has no form link", () => {
    const noLinkSurvey: Survey = {
      ...baseSurvey,
      status: "ongoing",
      formUrl: null,
      forms: undefined,
    };

    render(<SurveyCTA survey={noLinkSurvey} />);

    const button = screen.getByRole("button", {
      name: /survey link unavailable/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(
      screen.getByText("The form link for this survey is not yet available.")
    ).toBeInTheDocument();
  });
});
