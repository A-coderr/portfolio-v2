import { render, screen, waitFor } from "@testing-library/react";
import { createElement, type CSSProperties, type ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SkillsSphere } from "./SkillsSphere";
import { sphereSkills } from "./skills";

const { canvasProps, stackIconMock, useFrameMock } = vi.hoisted(() => ({
  canvasProps: [] as Array<{ frameloop?: string }>,
  stackIconMock: vi.fn(),
  useFrameMock: vi.fn(),
}));

vi.mock("tech-stack-icons", () => ({
  default: ({
    className,
    name,
    style,
    variant,
  }: {
    className?: string;
    name: string;
    style?: CSSProperties;
    variant?: string;
  }) => {
    stackIconMock({ className, name, style, variant });

    return createElement("span", {
      "data-icon-name": name,
      "data-icon-variant": variant,
      "data-testid": "stack-icon",
    });
  },
}));

vi.mock("@react-three/fiber", () => ({
  Canvas: ({
    children,
    frameloop,
  }: {
    children: ReactNode;
    frameloop?: string;
  }) => {
    canvasProps.push({ frameloop });

    return (
      <div data-frameloop={frameloop} data-testid="skills-sphere-canvas">
        {children}
      </div>
    );
  },
  useFrame: useFrameMock,
}));

vi.mock("@react-three/drei", () => ({
  Billboard: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Html: ({ children }: { children: ReactNode }) => (
    <div data-testid="skill-logo-html">{children}</div>
  ),
  Preload: () => null,
}));

function setReducedMotionPreference(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      addEventListener: vi.fn(),
      matches,
      media: query,
      removeEventListener: vi.fn(),
    })),
  });
}

beforeEach(() => {
  canvasProps.length = 0;
  stackIconMock.mockClear();
  useFrameMock.mockClear();
  setReducedMotionPreference(false);

  Object.defineProperty(window, "requestAnimationFrame", {
    configurable: true,
    value: (callback: FrameRequestCallback) =>
      window.setTimeout(() => callback(0), 0),
  });
  Object.defineProperty(window, "cancelAnimationFrame", {
    configurable: true,
    value: (handle: number) => window.clearTimeout(handle),
  });
});

describe("SkillsSphere", () => {
  it("renders stack icon nodes from the shared skill data", async () => {
    render(<SkillsSphere skills={sphereSkills} />);

    await waitFor(() => {
      expect(screen.getAllByTestId("skill-logo-html")).toHaveLength(
        sphereSkills.length,
      );
    });

    const icons = screen.getAllByTestId("stack-icon");

    expect(icons).toHaveLength(sphereSkills.length);
    expect(icons.map((icon) => icon.getAttribute("data-icon-name"))).toEqual(
      sphereSkills.map((skill) => skill.icon),
    );
    const expectedVariants = sphereSkills.map((skill) =>
      "variant" in skill ? skill.variant : "light",
    );

    expect(
      icons.map((icon) => icon.getAttribute("data-icon-variant")),
    ).toEqual(expectedVariants);
    expect(stackIconMock).toHaveBeenCalledTimes(sphereSkills.length);
  });

  it("does not render visible technology names as DOM text", async () => {
    render(<SkillsSphere skills={sphereSkills} />);

    await screen.findByTestId("skills-sphere-canvas");

    for (const skill of sphereSkills) {
      expect(screen.queryByText(skill.name)).not.toBeInTheDocument();
    }
  });

  it("keeps the canvas visible but stops continuous frames for reduced motion", async () => {
    setReducedMotionPreference(true);

    render(<SkillsSphere skills={sphereSkills} />);

    const canvas = await screen.findByTestId("skills-sphere-canvas");

    expect(canvas).toHaveAttribute("data-frameloop", "demand");
  });
});