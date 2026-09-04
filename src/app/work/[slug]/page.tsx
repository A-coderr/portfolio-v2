import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyShell } from "@/components/projects/CaseStudyShell";
import { allProjects, getProjectBySlug } from "@/data/projects";

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

  return <CaseStudyShell project={project} />;
}
