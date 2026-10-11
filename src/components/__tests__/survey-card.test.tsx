import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SurveyCard } from "../surveys/survey-card";
import type { Survey } from "@/types/survey";

const mockSurvey: Survey = {
  id: "test-1",
  slug: "forest-conservation-initiative",
  title: "Forest Conservation Initiative",
  description: "Survey assessing local awareness on biodiversity and forest ecosystems.",
  category: "Environment & Wildlife",
  status: "ongoing",
  formUrl: "https://example.com/survey",
  coverImage: "/images/forest.jpg",
  coverImageAlt: "Lush green forest canopy",
  languages: ["English", "Hindi"],
  featured: true,
  tags: ["forest", "conservation"],
};

describe("SurveyCard", () => {
  it("renders survey title, category, description, and status", () => {
    render(
      <MemoryRouter>
        <SurveyCard survey={mockSurvey} />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: mockSurvey.title })).toBeInTheDocument();
    expect(screen.getByText(mockSurvey.category)).toBeInTheDocument();
    expect(screen.getByText(mockSurvey.description)).toBeInTheDocument();
    expect(screen.getByText("Ongoing")).toBeInTheDocument();
  });

  it("links to /survey/:slug", () => {
    render(
      <MemoryRouter>
        <SurveyCard survey={mockSurvey} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/survey/${mockSurvey.slug}`);
  });

  it("renders upcoming and completed statuses correctly", () => {
    const upcomingSurvey: Survey = {
      ...mockSurvey,
      id: "test-2",
      slug: "upcoming-survey",
      status: "upcoming",
    };

    const { rerender } = render(
      <MemoryRouter>
        <SurveyCard survey={upcomingSurvey} />
      </MemoryRouter>
    );

    expect(screen.getByText("Upcoming")).toBeInTheDocument();

    const completedSurvey: Survey = {
      ...mockSurvey,
      id: "test-3",
      slug: "completed-survey",
      status: "completed",
    };

    rerender(
      <MemoryRouter>
        <SurveyCard survey={completedSurvey} />
      </MemoryRouter>
    );

    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  it("renders cover image with appropriate alt text and src", () => {
    render(
      <MemoryRouter>
        <SurveyCard survey={mockSurvey} />
      </MemoryRouter>
    );

    const image = screen.getByRole("img", { name: mockSurvey.coverImageAlt });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockSurvey.coverImage);
  });
});
