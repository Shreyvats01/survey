import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SurveyParticipation } from "../surveys/survey-participation";
import type { Survey } from "@/types/survey";

const mockProtectedSurvey: Survey = {
  id: "part-1",
  slug: "village-water-survey",
  title: "Village Water Infrastructure",
  description: "Assessment of spring water sources in rural villages.",
  category: "Water & Natural Resources",
  status: "ongoing",
  formUrl: "https://forms.gle/water-survey",
  coverImage: "/images/water/survey-water.jpg",
  coverImageAlt: "Natural spring source in hills",
  languages: ["English"],
  featured: false,
  tags: ["water", "infrastructure"],
  estimatedMinutes: 15,
};

describe("SurveyParticipation", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders protected notice badge and password-locked button for protected ongoing survey", () => {
    render(<SurveyParticipation survey={mockProtectedSurvey} />);

    expect(
      screen.getByText(/Protected Form — Password required/i)
    ).toBeInTheDocument();
    expect(screen.getByText("shrey1234@")).toBeInTheDocument();

    const button = screen.getByRole("button", {
      name: /open google forms questionnaire/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("clicking the button opens PasswordFormDialog and unlocks form on correct password", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<SurveyParticipation survey={mockProtectedSurvey} />);

    const button = screen.getByRole("button", {
      name: /open google forms questionnaire/i,
    });
    fireEvent.click(button);

    // Password dialog should now be open
    expect(screen.getByText("Protected Survey Access")).toBeInTheDocument();
    expect(screen.getByText(mockProtectedSurvey.title)).toBeInTheDocument();

    // Fill password and unlock
    const input = screen.getByPlaceholderText("Enter password");
    fireEvent.change(input, { target: { value: "shrey1234@" } });
    fireEvent.click(screen.getByRole("button", { name: /unlock & open form/i }));

    expect(openSpy).toHaveBeenCalledWith(
      "https://forms.gle/water-survey",
      "_blank",
      "noopener,noreferrer"
    );
  });

  it("handles multiple language forms for protected survey", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    const multiLangSurvey: Survey = {
      ...mockProtectedSurvey,
      participation: {
        status: "ongoing",
        formUrl: null,
        forms: [
          { language: "English", url: "https://forms.gle/water-en" },
          { language: "Hindi", url: "https://forms.gle/water-hi" },
        ],
      },
    };

    render(<SurveyParticipation survey={multiLangSurvey} />);

    const hindiButton = screen.getByRole("button", {
      name: /participate in hindi/i,
    });
    fireEvent.click(hindiButton);

    expect(screen.getByText("Protected Survey Access")).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Enter password");
    fireEvent.change(input, { target: { value: "shrey1234@" } });
    fireEvent.click(screen.getByRole("button", { name: /unlock & open form/i }));

    expect(openSpy).toHaveBeenCalledWith(
      "https://forms.gle/water-hi",
      "_blank",
      "noopener,noreferrer"
    );
  });

  it("renders standard direct link and no password notice for public survey (Wildlife in the Hills)", () => {
    const publicSurvey: Survey = {
      ...mockProtectedSurvey,
      slug: "wild-life-impact-hilly-regions",
      title: "Wildlife in the Hills",
    };

    render(<SurveyParticipation survey={publicSurvey} />);

    expect(
      screen.queryByText(/Protected Form — Password required/i)
    ).not.toBeInTheDocument();

    const link = screen.getByRole("link", {
      name: /open google forms questionnaire/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://forms.gle/water-survey");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders appropriate status when survey is completed", () => {
    const completedSurvey: Survey = {
      ...mockProtectedSurvey,
      status: "completed",
    };

    render(<SurveyParticipation survey={completedSurvey} />);

    expect(screen.getByText("Survey Concluded")).toBeInTheDocument();
    expect(screen.getByText("Fielding phase concluded")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /open google forms questionnaire/i })
    ).not.toBeInTheDocument();
  });

  it("renders appropriate status when survey is upcoming", () => {
    const upcomingSurvey: Survey = {
      ...mockProtectedSurvey,
      status: "upcoming",
    };

    render(<SurveyParticipation survey={upcomingSurvey} />);

    expect(screen.getByText("Fielding Upcoming")).toBeInTheDocument();
    expect(screen.getByText("Launch scheduled")).toBeInTheDocument();
  });
});
