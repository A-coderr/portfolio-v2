import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the main positioning heading", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Building web, interactive 3D and game systems.",
      }),
    ).toBeInTheDocument();
  });

  it("links the primary call to action to the work section", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: "View selected work" }),
    ).toHaveAttribute("href", "#work");
  });

  it("links to GitHub safely in a new tab", () => {
    render(<Hero />);

    const githubLink = screen.getByRole("link", { name: "GitHub ↗" });
    const rel = githubLink.getAttribute("rel");

    expect(githubLink).toHaveAttribute("href", "https://github.com/A-coderr");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(rel).toContain("noopener");
    expect(rel).toContain("noreferrer");
  });
});