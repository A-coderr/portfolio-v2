export interface ExperienceEntry {
  id: string;
  period: string;
  company: string;
  role: string;
  summary: string;
  context?: string;
  current?: boolean;
}

export const experienceItems: readonly ExperienceEntry[] = [
  {
    id: "snap-decision-studios",
    period: "2025 — PRESENT",
    company: "Snap Decision Studios",
    role: "Co-Founder / Game Developer",
    summary:
      "Co-developing Neon Chaser in Unity/C#, with work spanning gameplay architecture, power-up systems, save/load functionality, level development, vehicle tuning, QA, and technical documentation.",
    context: "Unity · C# · Gameplay Systems · QA · Technical Documentation",
    current: true,
  },
  {
    id: "the-falls-road-pub",
    period: "2026",
    company: "The Falls Road on Victoria",
    role: "Web Developer",
    summary:
      "Developed and maintained the pub's production website, including content updates, third-party integrations, responsive design, testing, performance checks, and ongoing coordination with management.",
    context: "Production Web · Integrations · QA",
  },
  {
    id: "varlab-dls-software-developer",
    period: "2022 — 2025",
    company: "VARLab · Conestoga College",
    role: "DLS Software Developer",
    summary:
      "Built full-stack web applications, interactive 3D tooling, and Unity learning simulations while contributing to architecture, testing, code review, deployment, mentoring, and technical leadership.",
    context:
      "React · TypeScript · JavaScript · C# · Unity · Python · Node.js · Three.js · Azure · QA · Agile Development",
  },
  {
    id: "varlab-ar-vr-software-developer",
    period: "2021",
    company: "VARLab · Conestoga College",
    role: "AR/VR Software Developer",
    summary:
      "Developed reusable Unity/C# components and interactive 2D/3D learning experiences, with attention to object-oriented design, performance, testing, and version control.",
    context:
      "Unity · C# · AR/VR · Interactive 3D · QA · Version Control · Agile Development",
  },
  {
    id: "conestoga-mobile-developer",
    period: "2020",
    company: "Conestoga College",
    role: "Mobile Developer",
    summary:
      "Contributed to an AR mask-fit research application using real-time face analysis across Android and iOS, with Python supporting data gathering and machine-learning work.",
    context:
      "Java · Swift · Python · Mobile AR · Machine Learning · QA · Version Control · Technical Documentation · Agile Development",
  },
];
