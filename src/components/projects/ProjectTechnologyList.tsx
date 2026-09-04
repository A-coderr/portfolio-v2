interface ProjectTechnologyListProps {
  technologies: readonly string[];
}

export function ProjectTechnologyList({ technologies }: ProjectTechnologyListProps) {
  return (
    <ul className="flex flex-wrap gap-x-2 gap-y-1" aria-label="Technologies">
      {technologies.map((technology, index) => (
        <li
          key={technology}
          className="flex items-center gap-2 font-mono text-xs text-muted"
        >
          <span>{technology}</span>
          {index < technologies.length - 1 ? (
            <span aria-hidden="true" className="text-border">
              ·
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
