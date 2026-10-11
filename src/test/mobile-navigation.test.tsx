import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { MemoryRouter } from "react-router";
import { SiteNavigation } from "@/components/layout/site-navigation";

describe("SiteNavigation Component (Observatory)", () => {
  beforeEach(() => {
    document.documentElement.className = "";
  });

  afterEach(() => {
    document.documentElement.className = "";
  });

  const renderComponent = (initialEntries = ["/"]) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <SiteNavigation />
      </MemoryRouter>
    );
  };

  it("renders fixed site-logo link with SVG BrandMark", () => {
    renderComponent();
    const logoLink = screen.getByRole("link", { name: /survey directory — home/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveClass("site-logo");
    expect(logoLink.querySelector("svg")).toBeInTheDocument();
  });

  it("renders circular menu toggle button with morphing burger bars", () => {
    renderComponent();
    const toggle = screen.getByRole("button", { name: /menu toggle|open navigation menu/i });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveClass("menu-toggle", "js-menu-toggle");
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    const rects = toggle.querySelectorAll("rect");
    expect(rects.length).toBe(3);
    expect(toggle.querySelector(".burger__top")).toBeInTheDocument();
    expect(toggle.querySelector(".burger__mid")).toBeInTheDocument();
    expect(toggle.querySelector(".burger__bottom")).toBeInTheDocument();
  });

  it("toggles state--menu-open on document.documentElement when clicked", () => {
    renderComponent();
    const toggle = screen.getByRole("button", { name: /menu toggle|open navigation menu/i });

    expect(document.documentElement.classList.contains("state--menu-open")).toBe(false);

    // Open menu
    fireEvent.click(toggle);
    expect(document.documentElement.classList.contains("state--menu-open")).toBe(true);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    // Close menu
    fireEvent.click(toggle);
    expect(document.documentElement.classList.contains("state--menu-open")).toBe(false);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("renders all navigation links and active state", () => {
    renderComponent(["/archive"]);
    const archiveLink = screen.getByRole("link", { name: "Archive" });
    expect(archiveLink).toBeInTheDocument();
    expect(archiveLink).toHaveClass("active");

    expect(screen.getByRole("link", { name: "Surveys" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Methodology" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  });

  it("displays legal links for fullscreen menu", () => {
    renderComponent();
    expect(screen.getByRole("link", { name: /privacy policy/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /accessibility statement/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Survey Directory/i).length).toBeGreaterThanOrEqual(1);
  });

  it("closes menu when Escape key is pressed", () => {
    renderComponent();
    const toggle = screen.getByRole("button", { name: /menu toggle|open navigation menu/i });

    fireEvent.click(toggle);
    expect(document.documentElement.classList.contains("state--menu-open")).toBe(true);

    fireEvent.keyDown(window, { key: "Escape" });
    expect(document.documentElement.classList.contains("state--menu-open")).toBe(false);
  });

  it("synchronizes state--scrolled on scroll > 100", () => {
    renderComponent();
    expect(document.documentElement.classList.contains("state--scrolled")).toBe(false);

    window.scrollY = 150;
    fireEvent.scroll(window);
    expect(document.documentElement.classList.contains("state--scrolled")).toBe(true);

    window.scrollY = 50;
    fireEvent.scroll(window);
    expect(document.documentElement.classList.contains("state--scrolled")).toBe(false);
  });
});
