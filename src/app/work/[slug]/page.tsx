import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { SamePageSmoothScroll } from "@/components/layout/SamePageSmoothScroll";
import { CaseStudyShell } from "@/components/projects/CaseStudyShell";
import { NeonChaserCaseStudy } from "@/components/projects/NeonChaserCaseStudy";
import { PortfolioV1CaseStudy } from "@/components/projects/PortfolioV1CaseStudy";
import { SkifKarateCaseStudy } from "@/components/projects/SkifKarateCaseStudy";
import { neonChaserCaseStudyMetadata } from "@/data/neon-chaser-case-study";
import { allProjects, getProjectBySlug } from "@/data/projects";
import { portfolioV1CaseStudyMetadata } from "@/data/portfolio-v1-case-study";
import { skifCaseStudyMetadata } from "@/data/skif-case-study";

type WorkProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (project.slug === "neon-chaser") {
    return {
      title: neonChaserCaseStudyMetadata.title,
      description: neonChaserCaseStudyMetadata.description,
    };
  }

  if (project.slug === "skif-karate-canada") {
    return {
      title: skifCaseStudyMetadata.title,
      description: skifCaseStudyMetadata.description,
    };
  }

  if (project.slug === "portfolio-v1") {
    return {
      title: portfolioV1CaseStudyMetadata.title,
      description: portfolioV1CaseStudyMetadata.description,
    };
  }

  return {
    title: `${project.title} | Anzhelika Kostyuk`,
    description: project.preview.summary,
  };
}

export default async function WorkProjectPage({ params }: WorkProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const caseStudy =
    project.slug === "neon-chaser" ? (
      <NeonChaserCaseStudy project={project} />
    ) : project.slug === "skif-karate-canada" ? (
      <SkifKarateCaseStudy project={project} />
    ) : project.slug === "portfolio-v1" ? (
      <PortfolioV1CaseStudy project={project} />
    ) : (
      <CaseStudyShell project={project} />
    );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SamePageSmoothScroll />
      {caseStudy}
      <Footer />
    </div>
  );
}
