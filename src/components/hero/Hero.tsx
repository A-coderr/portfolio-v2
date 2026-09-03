import { SystemsVisual } from "@/components/hero/SystemsVisual";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 md:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.95fr)] lg:gap-16 lg:px-12 lg:py-24"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-medium uppercase text-muted">
          SOFTWARE DEVELOPER · KITCHENER, CANADA
        </p>

        <p className="mt-8 text-2xl font-medium leading-8 text-foreground sm:text-3xl">
          Anzhelika Kostyuk
        </p>

        <h1
          id="hero-title"
          className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl"
        >
          Building web,{" "}
          <span className="text-accent">interactive 3D</span> and game
          systems.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
          Software developer working across React/TypeScript applications,
          Unity/C# gameplay systems, and interactive 3D tools.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#work"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-5 text-sm font-semibold text-background outline-none transition-colors hover:bg-[#ff7a5d] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            View selected work
          </a>
          <a
            href="https://github.com/A-coderr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-5 text-sm font-semibold text-foreground outline-none transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <SystemsVisual />
    </section>
  );
}