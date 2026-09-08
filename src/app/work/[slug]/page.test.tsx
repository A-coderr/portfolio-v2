import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { allProjects, getProjectBySlug } from "@/data/projects";
import WorkProjectPage, { generateMetadata, generateStaticParams } from "./page";

async function renderCaseStudy(slug: string) {
  const page = await WorkProjectPage({
    params: Promise.resolve({ slug }),
  });

  render(page);
}

function getProjectOrFail(slug: string) {
  const project = getProjectBySlug(slug);

  expect(project).toBeDefined();
  return project!;
}

describe("WorkProjectPage", () => {
  it("generates static params for the supported project routes", () => {
    expect(generateStaticParams()).toEqual(
      allProjects.map((project) => ({ slug: project.slug })),
    );
  });

  it("renders a known project case-study shell from project data", async () => {
    const neonChaser = getProjectOrFail("neon-chaser");

    await renderCaseStudy("neon-chaser");

    expect(
      screen.getByRole("link", { name: /Back to projects/i }),
    ).toHaveAttribute("href", "/#projects");
    expect(
      screen.getByRole("heading", { level: 1, name: neonChaser.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(neonChaser.preview.summary)).toBeInTheDocument();
    for (const technology of neonChaser.preview.technologies) {
      expect(screen.getByText(technology)).toBeInTheDocument();
    }
    expect(screen.getByText("Full case study coming next")).toBeInTheDocument();
  });

  it("generates route metadata from project data", async () => {
    const assetPlatform = getProjectOrFail("asset-platform");

    await expect(
      generateMetadata({ params: Promise.resolve({ slug: "asset-platform" }) }),
    ).resolves.toMatchObject({
      title: `${assetPlatform.title} | Anzhelika Kostyuk`,
      description: assetPlatform.preview.summary,
    });
  });

  it("throws the Next.js not-found response for unknown slugs", async () => {
    await expect(
      WorkProjectPage({ params: Promise.resolve({ slug: "unknown-project" }) }),
    ).rejects.toThrow("NEXT_HTTP_ERROR_FALLBACK;404");
  });
});
