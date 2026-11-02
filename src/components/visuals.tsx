import Image from "next/image";

export function HeroVisual() {
  return (
    <div
      className="hero-visual"
      aria-label="Illustration of a reliable AI workflow"
    >
      <div className="visual-topline">
        <span>AI SYSTEMS / IN PRODUCTION</span>
        <span>01 — 03</span>
      </div>
      <div className="visual-canvas">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="visual-node node-input">
          <span className="node-dot" />
          INPUT
        </div>
        <div className="visual-node node-engine">
          <span className="node-dot" />
          ORCHESTRATION
        </div>
        <div className="visual-node node-output">
          <span className="node-dot" />
          RELIABLE OUTPUT
        </div>
        <div className="visual-connector connector-one" />
        <div className="visual-connector connector-two" />
        <div className="visual-center">
          <span>Build for</span>
          <strong>the real world.</strong>
        </div>
      </div>
      <div className="visual-bottomline">
        <span>DESIGN → BUILD → HARDEN</span>
        <span className="visual-pulse">
          <i /> LIVE SYSTEMS
        </span>
      </div>
    </div>
  );
}

export function ProjectVisual({
  slug,
  image,
  imageAlt,
}: {
  slug: string;
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    return (
      <div className="project-visual project-visual-image">
        <div className="image-frame">
          <Image
            src={image}
            alt={imageAlt || "Project result"}
            fill
            sizes="(max-width: 720px) 100vw, 48vw"
          />
        </div>
        <span className="visual-caption">ACTUAL MODEL OUTPUT · CIFAR-10</span>
      </div>
    );
  }

  if (slug === "research-paper-assistant") {
    return (
      <div
        className="project-visual graph-visual"
        aria-label="Illustration of connected research papers"
      >
        <span className="graph-line line-a" />
        <span className="graph-line line-b" />
        <span className="graph-line line-c" />
        <span className="graph-line line-d" />
        <span className="graph-node graph-main">QUERY</span>
        <span className="graph-node graph-a">PAPERS</span>
        <span className="graph-node graph-b">GRAPH</span>
        <span className="graph-node graph-c">INSIGHT</span>
        <span className="visual-caption">SEARCH / CONNECT / SYNTHESIZE</span>
      </div>
    );
  }

  if (slug === "smart-surveillance") {
    return (
      <div
        className="project-visual vision-visual"
        aria-label="Illustration of a computer vision detection frame"
      >
        <span className="vision-cross cross-tl" />
        <span className="vision-cross cross-tr" />
        <span className="vision-cross cross-bl" />
        <span className="vision-cross cross-br" />
        <div className="vision-frame">
          <span className="vision-label">OBJECT DETECTED</span>
          <span className="vision-reticle">+</span>
        </div>
        <span className="vision-meta">
          EDGE INFERENCE <b>●</b> ACTIVE
        </span>
        <span className="visual-caption">DETECT / RECOGNIZE / ALERT</span>
      </div>
    );
  }

  return (
    <div
      className="project-visual diffusion-visual"
      aria-label="Abstract illustration of diffusion model samples"
    >
      <span className="diffusion-shape shape-one" />
      <span className="diffusion-shape shape-two" />
      <span className="diffusion-shape shape-three" />
      <span className="visual-caption">FROM NOISE TO FORM</span>
    </div>
  );
}
