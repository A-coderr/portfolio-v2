import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SelectedWork } from "./SelectedWork";

function getProjectArticle(name: string) {
  const article = screen
    .getByRole("heading", { level: 3, name })
    .closest("article");

  expect(article).not.toBeNull();
  return article as HTMLElement;
}

describe("SelectedWork", () => {
  it("renders the selected work section with the expected anchor target", () => {
    render(<SelectedWork />);

    const section = screen.getByRole("region", {
      name: "Engineering across software, games and interactive systems.",
    });

    expect(section).toHaveAttribute("id", "work");
    expect(screen.getByText("SELECTED WORK")).toBeInTheDocument();
  });

  it("renders Neon Chaser with its supplied image and case-study link", () => {
    render(<SelectedWork />);

    const neonChaser = getProjectArticle("Neon Chaser");

    expect(
      within(neonChaser).getByText("FEATURED · GAME DEVELOPMENT · STEAM BETA"),
    ).toBeInTheDocument();

    const image = within(neonChaser).getByRole("img", {
      name: "Screenshot of the Neon Chaser Unity racing game.",
    });

    expect(image).toHaveAttribute("src", expect.stringContaining("neon-chaser.webp"));
    expect(
      within(neonChaser).getByText(
        "Built gameplay architecture and core systems for a Unity/C# racing game, including reusable power-ups, save/load, level work, and vehicle tuning.",
      ),
    ).toBeInTheDocument();
    expect(
      within(neonChaser).getByRole("link", {
        name: "View case study for Neon Chaser",
      }),
    ).toHaveAttribute("href", "/work/neon-chaser");
  });

  it("links the asset platform teaser to its case-study shell", () => {
    render(<SelectedWork />);

    const platform = getProjectArticle("Digital Asset Management Platform");

    expect(within(platform).getByText("DLS Software Developer")).toBeInTheDocument();
    expect(within(platform).getByText("React")).toBeInTheDocument();
    expect(within(platform).getByText("Three.js")).toBeInTheDocument();
    expect(
      within(platform).getByRole("link", {
        name: "View case study for Digital Asset Management Platform",
      }),
    ).toHaveAttribute("href", "/work/asset-platform");
  });

  it("renders SKIF Karate Canada with its supplied image and case-study link", () => {
    render(<SelectedWork />);

    const skif = getProjectArticle("SKIF Karate Canada");
    const image = within(skif).getByRole("img", {
      name: "Screenshot of the SKIF Karate Canada production website.",
    });

    expect(image).toHaveAttribute(
      "src",
      expect.stringContaining("skif-karate-canada.webp"),
    );
    expect(
      within(skif).getByRole("link", {
        name: "View case study for SKIF Karate Canada",
      }),
    ).toHaveAttribute("href", "/work/skif-karate-canada");
  });

  it("renders Portfolio V1 as quieter earlier work with a project link", () => {
    render(<SelectedWork />);

    const portfolio = getProjectArticle("Portfolio V1");
    const image = within(portfolio).getByRole("img", {
      name: "Screenshot of Anzhelika Kostyuk's previous interactive portfolio.",
    });

    expect(within(portfolio).getByText("EARLIER WORK")).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("portfolio-v1.webp"));
    expect(
      within(portfolio).getByRole("link", { name: "View project for Portfolio V1" }),
    ).toHaveAttribute("href", "/work/portfolio-v1");
  });

  it("does not render detailed homepage sections or old placeholder terms", () => {
    render(<SelectedWork />);

    expect(screen.queryByText("MY CONTRIBUTION")).not.toBeInTheDocument();
    expect(screen.queryByText("Reusable gameplay systems")).not.toBeInTheDocument();
    expect(screen.queryByText("Game state & progression")).not.toBeInTheDocument();
    expect(screen.queryByText("Gameplay refinement")).not.toBeInTheDocument();
    expect(screen.queryByText("Technical ownership")).not.toBeInTheDocument();
    expect(screen.queryByText("Interactive 3D tooling")).not.toBeInTheDocument();
    expect(screen.queryByText("Full-stack systems")).not.toBeInTheDocument();
    expect(screen.queryByText("End-to-end ownership")).not.toBeInTheDocument();
    expect(screen.queryByText("Production maintenance")).not.toBeInTheDocument();
    expect(screen.queryByText(/MEDIA SLOT/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/planned/i)).not.toBeInTheDocument();
  });
});
