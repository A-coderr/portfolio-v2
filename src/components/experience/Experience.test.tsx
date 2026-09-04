import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { experienceItems } from "@/data/experience";
import { Experience } from "./Experience";

function getExperienceArticle(role: string) {
  const article = screen.getByText(role).closest("article");

  expect(article).not.toBeNull();
  return article as HTMLElement;
}

describe("Experience", () => {
  it("renders the experience section with the expected anchor target", () => {
    render(<Experience />);

    const section = screen.getByRole("region", {
      name: "Professional experience across software, interactive 3D and game development.",
    });

    expect(section).toHaveAttribute("id", "experience");
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Professional experience across software, interactive 3D and game development.",
      }),
    ).toBeInTheDocument();
  });

  it("renders the expected companies and roles", () => {
    render(<Experience />);

    expect(screen.getByText("Snap Decision Studios")).toBeInTheDocument();
    expect(screen.getByText("Co-Founder / Game Developer")).toBeInTheDocument();
    expect(screen.getAllByText("VARLab · Conestoga College")).toHaveLength(2);
    expect(screen.getByText("DLS Software Developer")).toBeInTheDocument();
    expect(screen.getByText("The Falls Road on Victoria")).toBeInTheDocument();
    expect(screen.getByText("Web Developer")).toBeInTheDocument();
    expect(screen.getByText("AR/VR Software Developer")).toBeInTheDocument();
    expect(screen.getByText("Conestoga College")).toBeInTheDocument();
    expect(screen.getByText("Mobile Developer")).toBeInTheDocument();
  });

  it("marks the current role with readable PRESENT text", () => {
    render(<Experience />);

    const currentRole = getExperienceArticle("Co-Founder / Game Developer");

    expect(within(currentRole).getByText("2025 — PRESENT")).toBeInTheDocument();
  });

  it("renders each experience entry from the source data", () => {
    render(<Experience />);

    for (const entry of experienceItems) {
      const article = getExperienceArticle(entry.role);

      expect(within(article).getByText(entry.period)).toBeInTheDocument();
      expect(
        within(article).getByRole("heading", { level: 3, name: entry.company }),
      ).toBeInTheDocument();
      expect(within(article).getByText(entry.summary)).toBeInTheDocument();

      if (entry.context) {
        expect(within(article).getByText(entry.context)).toBeInTheDocument();
      }
    }
  });
});