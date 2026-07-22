"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight, Code, Sparkles, Terminal } from "lucide-react";
import { PROJECTS, Project } from "@/lib/projectsData";
import { AsciiDivider } from "@/components/effects/AsciiDivider";
import { useAnimationSettings } from "@/context/AnimationContext";

export const ProjectsSection: React.FC = () => {
  const { animationsEnabled } = useAnimationSettings();

  // Take top 3 featured projects for homepage
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="py-16 px-6 md:px-12 max-w-7xl mx-auto relative">
      <AsciiDivider label="FEATURED_PROJECTS" />

      <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-accent dev-tag text-xs">
            <Code className="w-3.5 h-3.5" />
            <span>FEATURED_SOFTWARE // 3 HIGHLIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* View All Projects Button */}
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bg-surface border border-border-bright text-xs dev-tag text-text-main hover:border-accent/60 hover:text-accent transition-all duration-200 self-start md:self-auto"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-3.5 h-3.5 text-text-dim group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* 3 Projects Grid Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {featuredProjects.map((project, idx) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={idx}
            animationsEnabled={animationsEnabled}
          />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  animationsEnabled: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, animationsEnabled }) => {
  const [isHovered, setIsHovered] = useState(false);

  const asciiArtMockup = [
    `+-------------------------+`,
    `| [0x] ${project.title.toUpperCase().slice(0, 15).padEnd(15)} |`,
    `| > STACK: ${project.tags[0]} |`,
    `| <// VANILLA_CORE //>    |`,
    `+-------------------------+`,
  ].join("\n");

  const cardContent = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full flex flex-col justify-between p-5 rounded-2xl bg-bg-surface/90 border border-border-subtle hover:border-accent/60 transition-all duration-300 group shadow-xl relative overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-accent/5 transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div>
        {/* Top Header Card ASCII Preview */}
        <div className="w-full h-32 rounded-xl bg-bg-base border border-border-subtle p-3.5 font-mono text-[10px] leading-tight text-accent/80 flex flex-col justify-between relative overflow-hidden select-none mb-5">
          <div className="flex items-center justify-between text-text-dim text-[10px] pb-1.5 border-b border-border-subtle/40">
            <span className="flex items-center gap-1 text-accent font-semibold">
              <Terminal className="w-3 h-3" />
              {project.slug}
            </span>
            <span className="text-accent/60">{project.year}</span>
          </div>

          <pre className="text-accent/70 transition-colors group-hover:text-accent overflow-hidden font-mono text-[10px] leading-snug">
            {isHovered ? (
              <div className="text-accent animate-pulse">
                {`[RUNNING: ${project.slug.toUpperCase()}]\n` +
                  project.features.slice(0, 2).map((f) => `* ${f.slice(0, 28)}...`).join("\n")}
              </div>
            ) : (
              asciiArtMockup
            )}
          </pre>

          <div className="flex items-center justify-between text-[10px] text-text-dim pt-1.5 border-t border-border-subtle/40">
            <span>READY</span>
            <Sparkles className="w-3 h-3 text-accent/40" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="flex flex-col gap-1.5 mb-3">
          <h3 className="text-lg font-bold text-text-main group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-[11px] text-accent dev-tag font-medium">
            {project.subtitle}
          </p>
          <p className="text-xs text-text-sub leading-relaxed mt-1 font-sans line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-bg-elevated text-[10px] dev-tag text-text-dim border border-border-subtle"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-3 border-t border-border-subtle/60">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs dev-tag text-accent hover:underline font-semibold"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-text-main p-1"
                title="GitHub Repo"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:scale-110 transition-transform p-1"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return animationsEnabled ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  ) : (
    <div className="h-full">{cardContent}</div>
  );
};
