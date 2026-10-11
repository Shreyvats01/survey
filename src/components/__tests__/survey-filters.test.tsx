import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SurveyFilters } from "../surveys/survey-filters";

describe("SurveyFilters", () => {
  it("renders all filter options with appropriate aria-pressed states", () => {
    const handleChange = vi.fn();
    render(
      <SurveyFilters activeStatus="ongoing" onStatusChange={handleChange} />
    );

    const group = screen.getByRole("group", {
      name: /filter surveys by status/i,
    });
    expect(group).toBeInTheDocument();

    const allBtn = screen.getByRole("button", { name: /all/i });
    const ongoingBtn = screen.getByRole("button", { name: /ongoing/i });
    const upcomingBtn = screen.getByRole("button", { name: /upcoming/i });
    const completedBtn = screen.getByRole("button", { name: /completed/i });

    expect(allBtn).toHaveAttribute("aria-pressed", "false");
    expect(ongoingBtn).toHaveAttribute("aria-pressed", "true");
    expect(upcomingBtn).toHaveAttribute("aria-pressed", "false");
    expect(completedBtn).toHaveAttribute("aria-pressed", "false");

    // Ongoing button should have active soft #ece4df background highlight and plum text
    expect(ongoingBtn).toHaveClass("bg-[#ece4df]");
    expect(ongoingBtn).toHaveClass("text-plum");

    // Other buttons should have inactive styling
    expect(allBtn).toHaveClass("text-plum/75");
  });

  it("calls onStatusChange with correct status value on button click", () => {
    const handleChange = vi.fn();
    render(<SurveyFilters activeStatus="all" onStatusChange={handleChange} />);

    const upcomingBtn = screen.getByRole("button", { name: /upcoming/i });
    fireEvent.click(upcomingBtn);
    expect(handleChange).toHaveBeenCalledWith("upcoming");

    const completedBtn = screen.getByRole("button", { name: /completed/i });
    fireEvent.click(completedBtn);
    expect(handleChange).toHaveBeenCalledWith("completed");
  });

  it("satisfies touch target accessibility requirements (min-h-[44px])", () => {
    const handleChange = vi.fn();
    render(<SurveyFilters activeStatus="all" onStatusChange={handleChange} />);

    const buttons = screen.getAllByRole("button");
    for (const btn of buttons) {
      expect(btn).toHaveClass("min-h-[44px]");
    }
  });
});
