const focusItems = [
  "Web Applications",
  "Interactive 3D",
  "Unity / Gameplay Systems",
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-8 lg:px-12 lg:pb-28 lg:pt-12"
    >
      <div className="grid gap-10 border-t border-border/70 pt-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:pt-14">
        <div>
          <p className="font-mono text-xs font-medium uppercase text-muted">
            ABOUT
          </p>
          <h2
            id="about-title"
            className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            I build software at the intersection of web, interactive systems and
            game development.
          </h2>
        </div>

        <div className="max-w-3xl lg:pt-8">
          <div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
            <p>
              My background spans full-stack web applications, interactive 3D
              tooling, Unity/C# development, mobile research, and production
              website ownership. I enjoy working on software where architecture,
              usability, and technical problem-solving directly shape the user
              experience.
            </p>
            <p>
              My current focus is strengthening my software-engineering depth
              while continuing to develop gameplay and interactive 3D systems.
              Over time, I&apos;m also building toward applied AI engineering
              through structured learning and production-focused projects.
            </p>
          </div>

          <div className="mt-9 border-t border-border/60 pt-6">
            <p className="font-mono text-xs font-medium uppercase text-muted">
              FOCUS
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {focusItems.map((item) => (
                <li key={item} className="text-base font-medium text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}