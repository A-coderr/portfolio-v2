import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SamePageSmoothScroll } from "./SamePageSmoothScroll";

describe("SamePageSmoothScroll", () => {
  it("smoothly scrolls same-page anchor links", () => {
    const scrollIntoView = vi.fn();

    window.history.pushState(null, "", "/");
    Object.defineProperty(Element.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView,
    });

    render(
      <>
        <SamePageSmoothScroll />
        <a href="#projects">Projects</a>
        <section id="projects" />
      </>,
    );

    fireEvent.click(screen.getByRole("link", { name: "Projects" }));

    expect(window.location.hash).toBe("#projects");
    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  it("does not intercept cross-route links", () => {
    const scrollIntoView = vi.fn();

    window.history.pushState(null, "", "/");
    Object.defineProperty(Element.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView,
    });

    render(
      <>
        <SamePageSmoothScroll />
        <a href="/work/neon-chaser" target="_blank">View case study</a>
      </>,
    );

    const click = new MouseEvent("click", {
      bubbles: true,
      button: 0,
      cancelable: true,
    });

    screen.getByRole("link", { name: "View case study" }).dispatchEvent(click);

    expect(click.defaultPrevented).toBe(false);
    expect(scrollIntoView).not.toHaveBeenCalled();
  });
});
