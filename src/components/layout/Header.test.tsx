import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("exposes the main navigation with an accessible label", () => {
    render(<Header />);

    const navigation = screen.getByRole("navigation", {
      name: "Primary navigation",
    });

    expect(navigation).toBeInTheDocument();
    expect(within(navigation).getByRole("link", { name: "Work" })).toHaveAttribute(
      "href",
      "#work",
    );
  });
});