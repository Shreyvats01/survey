import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SurveyStatus } from "../surveys/survey-status";

describe("SurveyStatus", () => {
  it("renders ongoing status with micro-beacon indicator and editorial styling", () => {
    const { container } = render(<SurveyStatus status="ongoing" />);

    const badge = screen.getByText("Ongoing");
    expect(badge).toBeInTheDocument();

    const badgeWrapper = container.firstElementChild as HTMLElement;
    expect(badgeWrapper).toHaveClass("bg-cream-light/90");
    expect(badgeWrapper).toHaveClass("border-plum/25");
    expect(badgeWrapper).toHaveClass("text-plum");
    expect(badgeWrapper).toHaveClass("shadow-2xs");
    expect(badgeWrapper).toHaveClass("uppercase");

    // Indicator with micro-beacon ping aura and inner deep plum dot
    const pingRing = container.querySelector(".animate-ping");
    expect(pingRing).toBeInTheDocument();
    expect(pingRing).toHaveClass("bg-accent-violet/30");
    const innerDot = container.querySelector(".bg-plum");
    expect(innerDot).toBeInTheDocument();
  });

  it("renders upcoming status with hairline hollow ring and muted editorial styling", () => {
    const { container } = render(<SurveyStatus status="upcoming" />);

    const badge = screen.getByText("Upcoming");
    expect(badge).toBeInTheDocument();

    const badgeWrapper = container.firstElementChild as HTMLElement;
    expect(badgeWrapper).toHaveClass("bg-cream-dark/30");
    expect(badgeWrapper).toHaveClass("border-plum/15");
    expect(badgeWrapper).toHaveClass("text-plum/70");

    // Hairline ring indicator
    const ring = container.querySelector(".border-plum\\/50");
    expect(ring).toBeInTheDocument();
  });

  it("renders completed status with archival node and quiet styling", () => {
    const { container } = render(<SurveyStatus status="completed" />);

    const badge = screen.getByText("Completed");
    expect(badge).toBeInTheDocument();

    const badgeWrapper = container.firstElementChild as HTMLElement;
    expect(badgeWrapper).toHaveClass("bg-plum/5");
    expect(badgeWrapper).toHaveClass("border-plum/10");
    expect(badgeWrapper).toHaveClass("text-plum/50");

    // Archival solid node
    const node = container.querySelector(".bg-plum\\/30");
    expect(node).toBeInTheDocument();
  });

  it("renders unconfirmed status with neutral styling and label", () => {
    const { container } = render(<SurveyStatus status="unconfirmed" />);

    const badge = screen.getByText("Status to be confirmed");
    expect(badge).toBeInTheDocument();

    const badgeWrapper = container.firstElementChild as HTMLElement;
    expect(badgeWrapper).toHaveClass("bg-plum/5");
    expect(badgeWrapper).toHaveClass("border-plum/20");
    expect(badgeWrapper).toHaveClass("text-plum/70");

    const ring = container.querySelector(".border-plum\\/40");
    expect(ring).toBeInTheDocument();
  });

  it("merges additional className correctly", () => {
    const { container } = render(
      <SurveyStatus status="ongoing" className="custom-test-class" />
    );

    const badgeWrapper = container.firstElementChild as HTMLElement;
    expect(badgeWrapper).toHaveClass("custom-test-class");
  });
});
