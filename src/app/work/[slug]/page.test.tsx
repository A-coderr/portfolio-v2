import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WorkProjectPage, { generateMetadata, generateStaticParams } from "./page";

async function renderCaseStudy(slug: string) {
  const page = await WorkProjectPage({
    params: Promise.resolve({ slug }),
  });

  render(page);
}

describe("WorkProjectPage", () => {
  it("generates static params for the supported project routes", () => {
    expect(generateStaticParams()).toEqual(
      expect.arrayContaining([
        { slug: "neon-chaser" },
        { slug: "asset-platform" },
        { slug: "skif-karate-canada" },
        { slug: "portfolio-v1" },
      ]),
    );
  });

  it("renders a known project case-study shell from project data", async () => {
    await renderCaseStudy("neon-chaser");

    expect(
      screen.getByRole("link", { name: "← Back to selected work" }),
    ).toHaveAttribute("href", "/#work");
    expect(
      screen.getByRole("heading", { level: 1, name: "Neon Chaser" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Built gameplay architecture and core systems for a Unity/C# racing game, including reusable power-ups, save/load, level work, and vehicle tuning.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Full case study coming next")).toBeInTheDocument();
  });

  it("generates route metadata from project data", async () => {
    await expect(
      generateMetadata({ params: Promise.resolve({ slug: "asset-platform" }) }),
    ).resolves.toMatchObject({
      title: "Digital Asset Management Platform | Anzhelika Kostyuk",
      description:
        "Helped lead development of an internal asset platform combining full-stack software, cloud storage, migration tooling, and interactive 3D previewing.",
    });
  });

  it("throws the Next.js not-found response for unknown slugs", async () => {
    await expect(
      WorkProjectPage({ params: Promise.resolve({ slug: "unknown-project" }) }),
    ).rejects.toThrow("NEXT_HTTP_ERROR_FALLBACK;404");
  });
});
