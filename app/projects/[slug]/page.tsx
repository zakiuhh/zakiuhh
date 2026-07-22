import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Terminal, CheckCircle2, Cpu, Calendar, User, Layers } from "lucide-react";
import { getProjectBySlug, PROJECTS } from "@/lib/projectsData";
import { AsciiDivider } from "@/components/effects/AsciiDivider";

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

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
      {/* Back Button Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-surface border border-border-subtle text-xs dev-tag text-text-sub hover:text-accent hover:border-accent/40 transition-all mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>BACK_TO_PROJECTS</span>
      </Link>

      <AsciiDivider label={`PROJECT_SPEC // ${project.slug.toUpperCase()}`} />

      {/* Main Header Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-bg-surface/90 border border-border-subtle shadow-2xl flex flex-col gap-6 mt-4 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border-subtle/60 pb-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-5xl font-bold text-text-main tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-accent dev-tag font-medium">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-bright text-xs dev-tag text-text-main hover:text-accent hover:border-accent/50 transition-all shadow-md"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-black font-semibold text-xs dev-tag hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Featured Repository Preview Image Card */}
        {project.previewImage && (
          <div className="w-full rounded-2xl bg-bg-base border border-border-subtle overflow-hidden shadow-xl flex flex-col my-2">
            <div className="flex items-center justify-between px-4 py-2.5 bg-bg-elevated/90 border-b border-border-subtle/60 text-xs dev-tag text-text-dim">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-text-sub font-mono">{project.githubUrl || project.slug}</span>
              </div>
              <span className="text-accent/80 font-mono">PREVIEW</span>
            </div>

            <div className="w-full max-h-[420px] overflow-hidden bg-bg-surface">
              {/* eslint-disable-next-next/no-img-element */}
              <img
                src={project.previewImage}
                alt={`${project.title} Repository Preview`}
                className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>
        )}

        {/* Project Meta Info Pills */}
        <div className="flex flex-wrap items-center gap-6 text-xs dev-tag text-text-dim pt-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" />
            <span>YEAR: {project.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-accent" />
            <span>ROLE: {project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent" />
            <span>CATEGORY: {project.category.toUpperCase()}</span>
          </div>
        </div>

        {/* Monospace Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-bg-elevated text-xs dev-tag text-accent border border-accent/20"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Overview & Feature Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Left Column: Full Description & Features */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4">
            <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent" />
              Project Overview
            </h3>
            <p className="text-text-sub text-base leading-relaxed font-sans">
              {project.fullDescription}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4">
            <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Key Features & Performance Highlights
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-sm text-text-sub">
                  <span className="text-accent dev-tag font-bold shrink-0">[0{fIdx + 1}]</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Architecture & Engineering Notes */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4">
            <h3 className="text-sm dev-tag text-accent font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              ARCHITECTURE_SPECS
            </h3>
            <p className="text-xs text-text-sub leading-relaxed font-sans">
              {project.architectureNotes}
            </p>

            <div className="mt-4 p-4 rounded-xl bg-bg-base border border-border-subtle font-mono text-xs text-accent/80 space-y-1 select-none">
              <div>// CODEBASE MATRIX</div>
              <div>Category: {project.category.toUpperCase()}</div>
              <div>Status: DEPLOYED_ONLINE</div>
              <div>Source: {project.githubUrl ? "PUBLIC_REPO" : "LOCAL_DEV"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
