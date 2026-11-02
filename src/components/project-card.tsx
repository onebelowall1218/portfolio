import Link from "next/link";
import { Project } from "@/lib/site";
import { ProjectVisual } from "./visuals";

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <article
      className={`project-card ${compact ? "project-card-compact" : ""}`}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="project-art-link"
        aria-label={`Read about ${project.title}`}
      >
        <ProjectVisual
          slug={project.slug}
          image={project.image}
          imageAlt={project.imageAlt}
        />
      </Link>
      <div className="project-card-content">
        <div className="project-card-top">
          <span className="eyebrow">{project.eyebrow}</span>
          <span aria-hidden="true">↗</span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.short}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
