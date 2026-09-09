import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { sphereSkills, type SphereSkill } from "./skills";
import { About } from "./About";

const { skillsSphereMock } = vi.hoisted(() => ({
  skillsSphereMock: vi.fn(),
}));

vi.mock("./SkillsSphere", () => ({
  SkillsSphere: (props: { skills: readonly SphereSkill[] }) => {
    skillsSphereMock(props.skills);

    return <div aria-hidden="true" data-testid="skills-sphere" />;
  },
}));

const primaryStatement =
  "I build software at the intersection of web, interactive systems and game development.";

const backgroundParagraph =
  "My background spans full-stack web applications, interactive 3D tooling, Unity/C# development, mobile research, and production website ownership. I enjoy working on software where architecture, usability, and technical problem-solving directly shape the user experience.";

const futureAiParagraph =
  "My current focus is strengthening my software-engineering depth while continuing to develop gameplay and interactive 3D systems. Over time, I'm also building toward applied AI engineering through structured learning and production-focused projects.";

describe("About", () => {
  beforeEach(() => {
    skillsSphereMock.mockClear();
  });

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
    expect(screen.queryByText(/^ML Engineer$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Machine Learning specialist/i)).not.toBeInTheDocument();
  });

  it("renders the concise current-focus list", () => {
    render(<About />);

    const section = screen.getByRole("region", { name: primaryStatement });

    expect(within(section).getByText("CURRENT FOCUS")).toBeInTheDocument();
    expect(within(section).getByText("Web Applications")).toBeInTheDocument();
    expect(within(section).getByText("Interactive 3D")).toBeInTheDocument();
    expect(
      within(section).getByText("Unity / Gameplay Systems"),
    ).toBeInTheDocument();
  });

  it("renders an accessible technical-skills equivalent for the logo sphere", () => {
    render(<About />);

    const section = screen.getByRole("region", { name: primaryStatement });
    const skillsList = within(section).getByRole("list", {
      name: "Technical skills",
    });
    const renderedSkills = within(skillsList)
      .getAllByRole("listitem")
      .map((item) => item.textContent);

    expect(renderedSkills).toEqual(sphereSkills.map((skill) => skill.name));
    expect(renderedSkills).toEqual(
      expect.arrayContaining([
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Three.js",
        "C#",
        "Unity",
        "Python",
        "Java",
        "Swift",
        "Tailwind CSS",
        "Microsoft Azure",
        "Docker",
        "Git",
      ]),
    );
  });

  it("passes the shared skill data into the visual sphere without visible label content", () => {
    render(<About />);

    expect(skillsSphereMock).toHaveBeenCalledWith(sphereSkills);
    expect(screen.getByTestId("skills-sphere")).toBeEmptyDOMElement();
  });
});
