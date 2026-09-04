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
  });

  it("keeps the mobile Experience navigation link pointed at the section", () => {
    render(<Header />);

    const navigation = screen.getByRole("navigation", {
      name: "Mobile navigation",
    });

    expect(
      within(navigation).getByRole("link", { name: "Experience" }),
    ).toHaveAttribute("href", "#experience");
  });
});