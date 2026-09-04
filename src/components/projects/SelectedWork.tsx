import { homepageProjects } from "@/data/projects";
import { ProjectTeaserCard } from "./ProjectTeaserCard";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="selected-work-title"
      className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8 lg:px-12 lg:pb-28 lg:pt-16"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-medium uppercase text-muted">
          SELECTED WORK
        </p>
        <h2
          id="selected-work-title"
          className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          Engineering across software, games and interactive systems.
        </h2>
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
          Selected professional and independent work focused on system design,
          technical ownership, interaction, and production-quality
          implementation.
        </p>
      </div>

      <div className="selected-work-grid mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
        {homepageProjects.map((project) => (
          <ProjectTeaserCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
