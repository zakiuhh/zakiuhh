import React from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug, PROJECTS } from "@/lib/projectsData";
import { ProjectDetailView } from "@/components/ProjectDetailView";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found — Zaki Ul Hassan",
    };
  }

  return {
    title: `${project.title} — Project Architecture & Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
