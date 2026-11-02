export const person = {
  name: "Anjum Ulazim",
  role: "AI Engineer",
  email: "anjumulazim@gmail.com",
  phone: "+91 97983 15816",
  phoneHref: "+919798315816",
  location: "Gurugram, India",
  github: "https://github.com/onebelowall1218",
  linkedin: "https://www.linkedin.com/in/anjumulazim",
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export type Link = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  short: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
  year?: string;
  tags: string[];
  links: Link[];
  challenge: string;
  approach: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "pytorch-diffusion",
    eyebrow: "Deep learning · 2026",
    title: "Diffusion, built from scratch",
    short:
      "A class-conditioned image generator with a custom PyTorch U-Net, attention, EMA, and classifier-free guidance.",
    summary:
      "An end-to-end DDPM experiment for all ten CIFAR-10 classes, from model architecture and training to documented samples and released inference weights.",
    image: "/images/ddpm-class-grid.png",
    imageAlt:
      "A grid of ten class-conditioned 32 by 32 CIFAR-10 samples from the PyTorch diffusion model",
    featured: true,
    year: "2026",
    tags: ["PyTorch", "Diffusion", "Computer vision"],
    links: [
      {
        label: "View code",
        href: "https://github.com/onebelowall1218/ddpm-cifar10-pytorch",
      },
      {
        label: "Explore model",
        href: "https://huggingface.co/onebelowall/ddpm-cifar10-v66",
      },
    ],
    challenge:
      "Build a transparent, reproducible class-conditional image generator within practical training constraints, rather than relying on a packaged diffusion pipeline.",
    approach: [
      "Implemented a 6,767,683-parameter U-Net with residual blocks, multi-resolution attention, timestep embeddings, and class conditioning.",
      "Used exponential moving average weights and classifier-free guidance for sampling.",
      "Recorded two 15,000-step training runs, checkpoint lineage, loss plots, and qualitative sample comparisons in a documented notebook.",
    ],
    outcome:
      "Published the best EMA weights with an inference helper. The samples are qualitative examples; no FID or Inception Score was measured.",
  },
  {
    slug: "research-paper-assistant",
    eyebrow: "Agentic AI · 2024",
    title: "Research paper assistant",
    short:
      "An agentic GraphRAG workflow that makes a collection of academic papers searchable and easier to question.",
    summary:
      "A research assistant connecting paper discovery, graph-backed retrieval, and question answering through specialized agents.",
    featured: true,
    year: "2024",
    tags: ["GraphRAG", "Neo4j", "CrewAI"],
    links: [],
    challenge:
      "Literature review means finding relevant papers, extracting useful context, and revisiting connections across a growing collection.",
    approach: [
      "Connected arXiv discovery and retrieval to a Neo4j knowledge graph.",
      "Coordinated four specialized tools and four agents using CrewAI, LangChain, Ollama, and Groq.",
      "Designed the workflow to search, retrieve, and query across hundreds of academic papers.",
    ],
    outcome:
      "The project estimated a 40–50% reduction in manual research time. This is an estimate from the original project, not a controlled benchmark.",
  },
  {
    slug: "smart-surveillance",
    eyebrow: "Edge AI · Started 2023",
    title: "Smart security surveillance",
    short:
      "A multi-camera detection and alerting system designed for real-time inference on edge hardware.",
    summary:
      "A freelance computer vision system combining object detection, face recognition, live event handling, and mobile alerts.",
    featured: true,
    year: "Started 2023",
    tags: ["YOLO11", "OpenCV", "Jetson Nano"],
    links: [],
    challenge:
      "Bring multi-camera threat detection and unknown-face alerts to an edge device with limited compute.",
    approach: [
      "Began the surveillance system in 2023 and later upgraded its custom detector to YOLO11.",
      "Trained the upgraded YOLO11n detector on 35,000+ labeled images across 12 classes.",
      "Combined detection, InsightFace, and OpenCV with a Flask-SocketIO inference and event pipeline.",
      "Delivered alerts through a Flutter application and ran inference on Jetson Nano hardware.",
    ],
    outcome:
      "The upgraded detector reached mAP50 0.70, and the edge prototype ran at 10–15 FPS with mobile alerts.",
  },
  {
    slug: "classy-diffusion",
    eyebrow: "Deep learning · 2024",
    title: "ClassyDiffusion",
    short:
      "An earlier TensorFlow diffusion experiment trained under Kaggle P100 memory constraints.",
    summary:
      "A separate class-conditional DDPM using a 64M+ parameter U-Net with attention to generate four CIFAR-10 classes.",
    featured: false,
    year: "2024",
    tags: ["TensorFlow", "DDPM", "Model training"],
    links: [
      {
        label: "View code",
        href: "https://github.com/onebelowall1218/ClassyDiffusion",
      },
    ],
    challenge:
      "Train a substantial diffusion model with limited GPU time and memory.",
    approach: [
      "Built a class-conditional U-Net with attention in TensorFlow/Keras.",
      "Optimized the architecture and training process for a Kaggle P100 GPU.",
    ],
    outcome:
      "Trained on 20,000 images for 12 hours to generate 32×32 samples across four classes. This is distinct from the 2026 PyTorch model.",
  },
];

export const work = [
  {
    number: "01",
    title: "Workflow orchestration",
    kind: "Platform engineering",
    description:
      "Extended a FastAPI workflow engine with step-level retries, fallback routing, and dynamic DAG execution. The platform handles 50,000+ jobs a day.",
    tags: ["Python", "FastAPI", "MongoDB"],
  },
  {
    number: "02",
    title: "Document intelligence",
    kind: "AI infrastructure",
    description:
      "Built an asynchronous OCR microservice with interchangeable providers, page-level fault handling, and preprocessing fallbacks. It separated heavy model dependencies from the workflow runtime.",
    tags: ["OCR", "Microservices", "Reliability"],
  },
  {
    number: "03",
    title: "LLM guardrails",
    kind: "Applied AI",
    description:
      "Engineered a validation framework for static and streaming LLM responses, with reusable validators and gRPC streaming interfaces.",
    tags: ["LLM systems", "gRPC", "Validation"],
  },
] as const;
