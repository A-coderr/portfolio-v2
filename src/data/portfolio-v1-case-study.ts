export const portfolioV1CaseStudyLinks = {
  liveSite: "https://a-coderr.github.io/portfolio-website/",
  source: "https://github.com/A-coderr/portfolio-website",
} as const;

export const portfolioV1CaseStudyMetadata = {
  title: "Portfolio V1 | Anzhelika Kostyuk",
  description:
    "An interactive web case study exploring React, Three.js, React Three Fiber, and the evolution from an experimental 3D portfolio to Portfolio V2.",
} as const;

export const portfolioV1HeroLabels = [
  "REACT",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "HTML",
  "CSS",
  "THREE.JS",
  "REACT THREE FIBER",
  "DREI",
  "VITE",
  "TAILWIND CSS",
  "QA",
] as const;

export const portfolioV1Comparison = {
  v1: {
    title: "PORTFOLIO V1",
    items: [
      "experimentation-first",
      "heavier use of 3D and motion",
      "more emphasis on visual novelty",
      "technical information presented through interaction",
    ],
  },
  v2: {
    title: "PORTFOLIO V2",
    items: [
      "recruiter-first information hierarchy",
      "stronger emphasis on professional experience and engineering work",
      "more restrained motion",
      "interactive 3D used selectively",
      "clearer accessibility and performance priorities",
      "deeper project storytelling through case studies",
    ],
  },
} as const;
