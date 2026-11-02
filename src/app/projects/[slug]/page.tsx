import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/visuals";
import { ProjectCard } from "@/components/project-card";
import { projects, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} | Anjum Ulazim`,
      description: project.summary,
      url: `${siteUrl}/projects/${slug}`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Anjum Ulazim — AI Engineer",
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const moreProjects = projects
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  return (
    <main id="main" className="project-page">
      <section className="project-hero section-pad">
        <div className="container">
          <Link className="back-link" href="/#projects">
            <span aria-hidden="true">←</span> Back to projects
          </Link>
          <div className="project-hero-grid">
            <div>
              <span className="eyebrow">{project.eyebrow}</span>
              <h1>
                {project.title}
                <span>.</span>
              </h1>
              <p>{project.summary}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-hero-art">
              <ProjectVisual
                slug={project.slug}
                image={project.image}
                imageAlt={project.imageAlt}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="project-story section-pad">
        <div className="container story-grid">
          <aside>
            <span className="eyebrow">THE PROJECT</span>
            {project.year && (
              <div className="story-meta">
                <span>YEAR</span>
                <strong>{project.year}</strong>
              </div>
            )}
            <div className="story-meta">
              <span>FOCUS</span>
              <strong>{project.tags[0]}</strong>
            </div>
            {project.links.length > 0 && (
              <div className="story-links">
                {project.links.map((link) => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    key={link.href}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </aside>
          <div className="story-content">
            <div>
              <span className="eyebrow">01 / THE CHALLENGE</span>
              <h2>The problem to solve.</h2>
              <p>{project.challenge}</p>
            </div>
            <div>
              <span className="eyebrow">02 / THE APPROACH</span>
              <h2>How I built it.</h2>
              <ul>
                {project.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">03 / THE OUTCOME</span>
              <h2>What came out of it.</h2>
              <p>{project.outcome}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="next-projects section-pad">
        <div className="container">
          <div className="next-projects-head">
            <span className="eyebrow">KEEP EXPLORING</span>
            <h2>
              More work<span>.</span>
            </h2>
          </div>
          <div className="projects-grid">
            {moreProjects.map((item) => (
              <ProjectCard project={item} compact key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
