import type { IconName } from "tech-stack-icons";

type IconVariant = "light" | "dark" | "grayscale";

export interface SphereSkill {
  name: string;
  icon: IconName;
  variant?: IconVariant;
  iconScale?: number;
}

export const sphereSkills = [
  { name: "TypeScript", icon: "typescript", iconScale: 0.92 },
  { name: "JavaScript", icon: "js", iconScale: 0.92 },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs", variant: "dark", iconScale: 0.9 },
  { name: "Node.js", icon: "nodejs" },
  { name: "MongoDB", icon: "mongodb", iconScale: 1.08 },
  { name: "Three.js", icon: "threejs", variant: "dark", iconScale: 0.98 },
  { name: "C#", icon: "csharp", iconScale: 0.94 },
  { name: "Unity", icon: "unity", variant: "dark", iconScale: 0.92 },
  { name: "Python", icon: "python" },
  { name: "Java", icon: "java", iconScale: 0.96 },
  { name: "Swift", icon: "swift" },
  { name: "Tailwind CSS", icon: "tailwindcss", iconScale: 1.08 },
  { name: "Microsoft Azure", icon: "azure" },
  { name: "Docker", icon: "docker", iconScale: 1.06 },
  { name: "Git", icon: "git", iconScale: 0.94 },
] as const satisfies readonly SphereSkill[];
