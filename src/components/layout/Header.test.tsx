import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("exposes the main navigation with accessible labels and section links", () => {
    render(<Header />);

    const navigation = screen.getByRole("navigation", {
      name: "Primary navigation",
    });

    expect(navigation).toBeInTheDocument();
    expect(within(navigation).getByRole("link", { name: "Work" })).toHaveAttribute(
      "href",
      "#work",
    );
    expect(
      within(navigation).getByRole("link", { name: "Experience" }),
    ).toHaveAttribute("href", "#experience");
    expect(within(navigation).getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "#about",
    );
  });

  it("keeps mobile navigation links pointed at their sections", () => {
    render(<Header />);

    const navigation = screen.getByRole("navigation", {
      name: "Mobile navigation",
    });

    expect(
      within(navigation).getByRole("link", { name: "Experience" }),
    ).toHaveAttribute("href", "#experience");
    expect(within(navigation).getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "#about",
    );
  });
});