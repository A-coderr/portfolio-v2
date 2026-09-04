import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { About } from "./About";

const primaryStatement =
  "I build software at the intersection of web, interactive systems and game development.";

const backgroundParagraph =
  "My background spans full-stack web applications, interactive 3D tooling, Unity/C# development, mobile research, and production website ownership. I enjoy working on software where architecture, usability, and technical problem-solving directly shape the user experience.";

const futureAiParagraph =
  "My current focus is strengthening my software-engineering depth while continuing to develop gameplay and interactive 3D systems. Over time, I'm also building toward applied AI engineering through structured learning and production-focused projects.";

describe("About", () => {
  it("renders the about section with the expected anchor target", () => {
    render(<About />);

    const section = screen.getByRole("region", { name: primaryStatement });

    expect(section).toHaveAttribute("id", "about");
    expect(within(section).getByText("ABOUT")).toBeInTheDocument();
    expect(
      within(section).getByRole("heading", {
        level: 2,
        name: primaryStatement,
      }),
    ).toBeInTheDocument();
  });

  it("renders the professional narrative without current AI-engineer positioning", () => {
    render(<About />);

    expect(screen.getByText(backgroundParagraph)).toBeInTheDocument();
    expect(screen.getByText(futureAiParagraph)).toBeInTheDocument();
    expect(screen.queryByText(/^AI Engineer$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Machine Learning Engineer$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/experienced ML engineer/i)).not.toBeInTheDocument();
  });

  it("renders the concise focus list", () => {
    render(<About />);

    const section = screen.getByRole("region", { name: primaryStatement });

    expect(within(section).getByText("FOCUS")).toBeInTheDocument();
    expect(within(section).getByText("Web Applications")).toBeInTheDocument();
    expect(within(section).getByText("Interactive 3D")).toBeInTheDocument();
    expect(
      within(section).getByText("Unity / Gameplay Systems"),
    ).toBeInTheDocument();
  });
});