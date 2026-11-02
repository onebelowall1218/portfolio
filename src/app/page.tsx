import Link from "next/link";
import { HeroVisual } from "@/components/visuals";
import { ProjectCard } from "@/components/project-card";
import { person, projects, work } from "@/lib/site";

export default function Home() {
  return (
    <main id="main">
      <section className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow with-rule">
              <span className="status-dot" /> AI ENGINEER · GURUGRAM, INDIA
            </div>
            <h1>
              Building AI systems
              <br />
              that <em>work in the wild.</em>
            </h1>
            <p className="hero-lede">
              I&apos;m Anjum. I turn promising AI ideas into dependable
              products—through reliable backend systems, thoughtful model
              integration, and a habit of solving the hard edges.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={`mailto:${person.email}`}
              >
                Get in touch <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-text"
                href="/resumes/Anjum_Ulazim_AI_Engineer.pdf"
                download
              >
                Download AI Engineer CV <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-footnote">
              <span>Currently building at SimplAI</span>
              <span className="small-divider" />
              <span>IIT Guwahati ’25</span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="intro-strip" aria-label="Areas of expertise">
        <div className="container intro-strip-inner">
          <span>WHAT I BRING TO THE TABLE</span>
          <p>
            Production AI <b>·</b> Backend architecture <b>·</b> Applied ML
          </p>
        </div>
      </section>

      <section className="section-pad" id="work">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / SELECTED WORK</span>
              <h2>
                Engineering beyond
                <br />
                <em>the prototype.</em>
              </h2>
            </div>
            <p>
              At SimplAI, my focus is the infrastructure that lets AI features
              operate reliably at scale.
            </p>
          </div>
          <div className="work-grid">
            {work.map((item) => (
              <article className="work-card" key={item.number}>
                <div className="work-card-top">
                  <span>
                    {item.number} / {item.kind}
                  </span>
                  <span className="card-mark" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="work-note">
            A selection of work from my role as AI Engineer-I at SimplAI.
            Product and customer details are intentionally omitted.
          </p>
        </div>
      </section>

      <section className="section-pad projects-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / PROJECTS</span>
              <h2>
                Curiosity, made <em>concrete.</em>
              </h2>
            </div>
            <p>
              Independent work spanning generative models, agentic research, and
              edge computer vision.
            </p>
          </div>
          <div className="projects-grid">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
          </div>
          <div className="more-project">
            <span>EARLIER EXPERIMENT</span>
            <Link href="/projects/classy-diffusion">
              ClassyDiffusion — a TensorFlow DDPM trained under GPU constraints{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad about-section" id="about">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">03 / ABOUT</span>
            <h2>
              Engineer first.
              <br />
              <em>Always learning.</em>
            </h2>
            <p className="about-lede">
              I work at the intersection of AI and software engineering—where a
              good model still needs dependable services, careful validation,
              and a useful experience around it.
            </p>
            <p>
              My path runs from engineering physics at IIT Guwahati to
              conversational AI at Sutra Sphere and production AI platform work
              at SimplAI. I enjoy moving between architecture, implementation,
              debugging, and model experiments.
            </p>
          </div>
          <div className="about-aside">
            <div className="timeline-item">
              <span>2025 — NOW</span>
              <div>
                <h3>AI Engineer-I</h3>
                <p>
                  SimplAI · Workflow infrastructure, OCR, guardrails, and AI
                  integrations
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span>2025</span>
              <div>
                <h3>AI Engineering Intern</h3>
                <p>Sutra Sphere LLC · Conversational AI and support tooling</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>2021 — 2025</span>
              <div>
                <h3>B.Tech, Engineering Physics</h3>
                <p>Indian Institute of Technology Guwahati</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad skills-section">
        <div className="container skills-grid">
          <div>
            <span className="eyebrow">04 / TOOLKIT</span>
            <h2>
              The tools behind
              <br />
              <em>the work.</em>
            </h2>
            <p>
              Technology is a means to solve the problem. These are the tools I
              reach for most often.
            </p>
          </div>
          <div className="skill-groups">
            <div>
              <h3>Backend & infrastructure</h3>
              <p>
                Python · FastAPI · gRPC · MongoDB · PostgreSQL · Redis · Docker
                · Kubernetes
              </p>
            </div>
            <div>
              <h3>AI & agentic systems</h3>
              <p>
                LLMs · LangChain · CrewAI · LiteLLM · RAG · GraphRAG · OCR ·
                voice AI
              </p>
            </div>
            <div>
              <h3>Machine learning</h3>
              <p>
                PyTorch · TensorFlow · OpenCV · scikit-learn · diffusion models
                · computer vision
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="recognition-section">
        <div className="container recognition-grid">
          <div>
            <span className="eyebrow">A LITTLE MORE CONTEXT</span>
            <h2>
              Grounded in curiosity.
              <br />
              <em>Recognized for building.</em>
            </h2>
          </div>
          <div className="recognition-list">
            <div>
              <span>2023</span>
              <p>
                <strong>1st place</strong> · Innovate48, Jaguar Land Rover ML/AI
                Hackathon at IIT Guwahati
              </p>
            </div>
            <div>
              <span>2024</span>
              <p>
                <strong>4th place</strong> · Kriti Inter-Hostel AI/ML Challenge
              </p>
            </div>
            <div>
              <span>2020</span>
              <p>
                <strong>Diploma topper</strong> · Electronics & Communication
                Engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="container contact-inner">
          <div>
            <span className="eyebrow">05 / LET&apos;S CONNECT</span>
            <h2>
              Have a problem worth
              <br />
              <em>building for?</em>
            </h2>
            <p>
              I&apos;m always glad to talk about AI engineering, backend
              systems, and meaningful opportunities.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href={`mailto:${person.email}`}>
              {person.email} <span aria-hidden="true">↗</span>
            </a>
            <a href={`tel:${person.phoneHref}`}>{person.phone}</a>
            <div className="contact-social">
              <a href={person.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={person.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
            <div className="resume-links">
              <span>RESUMES</span>
              <a href="/resumes/Anjum_Ulazim_AI_Engineer.pdf" download>
                AI Engineer ↓
              </a>
              <a href="/resumes/Anjum_Ulazim_ML_DS.pdf" download>
                ML / Data Science ↓
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
