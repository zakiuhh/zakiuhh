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

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative">
      <AsciiDivider label="FEATURED_PROJECTS" />

      <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-accent dev-tag text-xs">
            <Code className="w-3.5 h-3.5" />
            <span>SHIPPED_CODE // ZERO_FRAMEWORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
            Handcrafted Vanilla Tools & Web Apps
          </h2>
        </div>
        <p className="text-xs dev-tag text-text-dim max-w-md">
          Every project below runs with zero runtime frameworks, zero npm dependencies, and pure browser native performance.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {PROJECTS.map((project, idx) => (
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
    `+--------------------------+`,
    `| [0x_SYS] ${project.title.toUpperCase().padEnd(14)} |`,
    `| > STACK: ${project.tags[0]} |`,
    `| > OKLCH_MATRIX_CONVERT   |`,
    `| <// VANILLA_CORE_DOM //> |`,
    `+--------------------------+`,
  ].join("\n");

  const cardContent = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full flex flex-col justify-between p-6 rounded-2xl bg-bg-surface/90 border border-border-subtle hover:border-accent/60 transition-all duration-300 group shadow-xl relative overflow-hidden"
    >
      {/* Subtle Glow Overlay on Hover */}
      <div
        className={`absolute inset-0 bg-accent/5 transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div>
        {/* Top Header Card ASCII Preview */}
        <div className="w-full h-36 rounded-xl bg-bg-base border border-border-subtle p-4 font-mono text-[11px] leading-tight text-accent/80 flex flex-col justify-between relative overflow-hidden select-none mb-6">
          <div className="flex items-center justify-between text-text-dim text-[10px] pb-2 border-b border-border-subtle/40">
            <span className="flex items-center gap-1">
              <Terminal className="w-3 h-3 text-accent" />
              {project.slug}.js
            </span>
            <span className="text-accent/60">{project.year}</span>
          </div>

          <pre className="text-accent/70 transition-colors group-hover:text-accent overflow-hidden font-mono text-[10px] leading-snug">
            {isHovered ? (
              <div className="text-accent animate-pulse">
                {`[RUNNING: ${project.slug.toUpperCase()}]\n-----------------------------\n` +
                  project.features.slice(0, 2).map((f) => `* ${f.slice(0, 30)}...`).join("\n")}
              </div>
            ) : (
              asciiArtMockup
            )}
          </pre>

          <div className="flex items-center justify-between text-[10px] text-text-dim pt-2 border-t border-border-subtle/40">
            <span>ZERO_DEPENDENCY</span>
            <Sparkles className="w-3 h-3 text-accent/40" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors flex items-center gap-2">
            {project.title}
          </h3>
          <p className="text-xs text-accent/90 dev-tag font-medium">
            {project.subtitle}
          </p>
          <p className="text-xs text-text-sub leading-relaxed mt-1 font-sans">
            {project.description}
          </p>
        </div>
      </div>

      <div>
        {/* Monospace Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-bg-elevated text-[10px] dev-tag text-text-dim border border-border-subtle"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-4 border-t border-border-subtle/60">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs dev-tag text-accent hover:underline font-semibold"
          >
            <span>View Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-text-main p-1"
                title="View GitHub Repository"
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
                title="Open Live Web App"
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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  ) : (
    <div className="h-full">{cardContent}</div>
  );
};
