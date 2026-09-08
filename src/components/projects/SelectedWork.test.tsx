import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { getProjectHref, homepageProjects } from "@/data/projects";
import { SelectedWork } from "./SelectedWork";

function getProjectArticle(name: string) {
  const article = screen
    .getByRole("heading", { level: 3, name })
    .closest("article");

  expect(article).not.toBeNull();
  return article as HTMLElement;
}

function getImageFilename(src: string) {
  const parts = src.split("/");
  return parts[parts.length - 1] ?? src;
}

describe("SelectedWork", () => {
  it("renders the selected work section with the expected anchor target", () => {
    render(<SelectedWork />);

    const section = screen.getByRole("region", {
      name: "Engineering across software, games and interactive systems.",
    });

    expect(section).toHaveAttribute("id", "projects");
    expect(screen.getByText("PROJECTS")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Selected professional and independent work focused on system design/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the homepage projects from the shared project data", () => {
    render(<SelectedWork />);

    for (const project of homepageProjects) {
      const projectArticle = getProjectArticle(project.title);

      expect(
        within(projectArticle).getByText(project.preview.label),
      ).toBeInTheDocument();
      expect(
        within(projectArticle).getByText(project.preview.summary),
      ).toBeInTheDocument();
      for (const technology of project.preview.technologies) {
        expect(within(projectArticle).getByText(technology)).toBeInTheDocument();
      }
      expect(
        within(projectArticle).getByRole("link", {
          name: `${project.preview.ctaLabel} for ${project.title}`,
        }),
      ).toHaveAttribute("href", getProjectHref(project));
    }
  });

  it("keeps Neon Chaser first in the project sequence", () => {
    render(<SelectedWork />);

    const projectTitles = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);

    expect(projectTitles).toEqual(
      homepageProjects.map((project) => project.title),
    );
    expect(projectTitles[0]).toBe("Neon Chaser");
  });

  it("renders supplied project images with meaningful alt text", () => {
    render(<SelectedWork />);

    for (const project of homepageProjects) {
      if (project.preview.media?.kind !== "image") {
        continue;
      }

      const projectArticle = getProjectArticle(project.title);
      const image = within(projectArticle).getByRole("img", {
        name: project.preview.media.alt,
      });

      expect(image).toHaveAttribute(
        "src",
        expect.stringContaining(getImageFilename(project.preview.media.src)),
      );
    }
  });

  it("does not expose confidential internal imagery for the asset platform", () => {
    render(<SelectedWork />);

    const platform = getProjectArticle("Digital Asset Management Platform");

    expect(within(platform).queryByRole("img")).not.toBeInTheDocument();
  });

  it("does not render detailed homepage sections or old placeholder terms", () => {
    render(<SelectedWork />);

    expect(screen.queryByText("MY CONTRIBUTION")).not.toBeInTheDocument();
    expect(screen.queryByText(/FEATURED/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText("Reusable gameplay systems"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Game state & progression"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Gameplay refinement")).not.toBeInTheDocument();
    expect(screen.queryByText("Technical ownership")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Interactive 3D tooling"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Full-stack systems")).not.toBeInTheDocument();
    expect(screen.queryByText("End-to-end ownership")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Production maintenance"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/MEDIA SLOT/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/planned/i)).not.toBeInTheDocument();
  });
});
