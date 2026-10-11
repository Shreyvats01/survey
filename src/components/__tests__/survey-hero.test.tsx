import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SurveyHero } from "../surveys/survey-hero";
import type { Survey } from "@/types/survey";

const mockSurvey: Survey = {
  id: "hero-1",
  slug: "forest-canopy-survey",
  title: "Forest Canopy Survey",
  subtitle: "Analyzing Himalayan flora",
  description: "A detailed observation of forest canopy density.",
  category: "Environment & Wildlife",
  status: "ongoing",
  formUrl: "https://example.com/form",
  coverImage: "/images/hero/hero-landscape-dawn.jpg",
  coverImageAlt: "Dawn over mountain landscape",
  languages: ["English", "Hindi"],
  featured: true,
  tags: ["forest", "ecology"],
  estimatedMinutes: 12,
  startDate: "2026-06-02",
};

describe("SurveyHero", () => {
  it("renders title, category, author info, and status", () => {
    render(
      <MemoryRouter>
        <SurveyHero survey={mockSurvey} />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: mockSurvey.title })).toBeInTheDocument();
    expect(screen.getByText("Ongoing")).toBeInTheDocument();
    expect(screen.getByText("12 min response")).toBeInTheDocument();
    expect(screen.getByText("English, Hindi")).toBeInTheDocument();
  });

  it("renders Password Protected badge for protected survey in the secondary info bar", () => {
    render(
      <MemoryRouter>
        <SurveyHero survey={mockSurvey} />
      </MemoryRouter>
    );

    expect(screen.getByText("Password Protected")).toBeInTheDocument();
  });

  it("does not render Password Protected badge for public survey (Wildlife in the Hills)", () => {
    const publicSurvey: Survey = {
      ...mockSurvey,
      slug: "wild-life-impact-hilly-regions",
      title: "Wildlife in the Hills",
    };

    render(
      <MemoryRouter>
        <SurveyHero survey={publicSurvey} />
      </MemoryRouter>
    );

    expect(screen.queryByText("Password Protected")).not.toBeInTheDocument();
  });
});
