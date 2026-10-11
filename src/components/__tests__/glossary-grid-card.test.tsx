import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { GlossaryGridCard } from "../surveys/glossary-grid-card";

describe("GlossaryGridCard", () => {
  it("renders term, definition excerpt, and pill button", () => {
    render(
      <MemoryRouter>
        <GlossaryGridCard
          term="Speculative Design"
          definition="A design approach that thrives on imagination and aims to open up perspectives."
          href="/about"
          buttonText="Explore glossary"
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Speculative Design" })).toBeInTheDocument();
    expect(
      screen.getByText(/A design approach that thrives on imagination/i)
    ).toBeInTheDocument();

    const link = screen.getByRole("link", { name: "Explore glossary" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");
    expect(link).toHaveClass("rounded-full");
    expect(link).toHaveClass("bg-[#d7ccdd]");
  });

  it("renders with dark card background #12212B and inverse text #d7ccdd", () => {
    const { container } = render(
      <MemoryRouter>
        <GlossaryGridCard />
      </MemoryRouter>
    );

    const article = container.querySelector("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass("bg-[#12212B]");
    expect(article).toHaveClass("text-[#d7ccdd]");
  });
});
