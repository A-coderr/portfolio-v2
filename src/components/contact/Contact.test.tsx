import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contact } from "./Contact";

const primaryStatement =
  "Looking for an engineer who can work across software, interactive systems and gameplay?";

const availabilityCopy =
  "I'm currently open to full-time software engineering opportunities, including roles involving interactive 3D, Unity/C#, and gameplay systems.";

describe("Contact", () => {
  it("renders the contact section with the expected anchor target", () => {
    render(<Contact />);

    const section = screen.getByRole("region", { name: primaryStatement });

    expect(section).toHaveAttribute("id", "contact");
    expect(within(section).getByText("CONTACT")).toBeInTheDocument();
    expect(
      within(section).getByRole("heading", {
        level: 2,
        name: primaryStatement,
      }),
    ).toBeInTheDocument();
  });

  it("renders professional availability language without AI positioning", () => {
    render(<Contact />);

    expect(screen.getByText(availabilityCopy)).toBeInTheDocument();
    expect(screen.queryByText(/AI Engineer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Machine Learning Engineer/i)).not.toBeInTheDocument();
  });

  it("uses the verified email address for the primary contact action only", () => {
    render(<Contact />);

    const getInTouchLink = screen.getByRole("link", { name: "Get in touch" });

    expect(getInTouchLink).toHaveAttribute(
      "href",
      "mailto:kostyukanzhelika@gmail.com",
    );
    expect(screen.queryByRole("link", { name: "Email" })).not.toBeInTheDocument();
  });

  it("renders icon-only social links with safe external behavior", () => {
    render(<Contact />);

    const githubLink = screen.getByRole("link", { name: "GitHub" });
    const linkedinLink = screen.getByRole("link", { name: "LinkedIn" });

    expect(githubLink).toHaveAttribute("href", "https://github.com/A-coderr");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(githubLink.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
    expect(githubLink).not.toHaveTextContent("GitHub");

    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/anzhelikakostyuk",
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkedinLink.querySelector("svg")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(linkedinLink).not.toHaveTextContent("LinkedIn");
  });
});