"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { ArrowLeft, ExternalLink, Github, Terminal, CheckCircle2, Cpu, Calendar, User } from "lucide-react";
import { Project } from "@/lib/projectsData";
import { AsciiDivider } from "@/components/effects/AsciiDivider";
import { useAnimationSettings } from "@/context/AnimationContext";

export const ProjectDetailView: React.FC<{ project: Project }> = ({ project }) => {
  const { animationsEnabled } = useAnimationSettings();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
      {/* Back Button Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-surface border border-border-subtle text-xs dev-tag text-text-sub hover:text-accent hover:border-accent/40 transition-all mb-8 group hover:scale-[1.02]"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>BACK_TO_PROJECTS_DIRECTORY</span>
      </Link>

      <AsciiDivider label={`PROJECT_SPEC // ${project.slug.toUpperCase()}`} />

      {/* Main Header Card */}
      {animationsEnabled ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-8 sm:p-10 rounded-3xl bg-bg-surface/90 border border-border-subtle shadow-2xl flex flex-col gap-6 mt-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-accent/10 pointer-events-none select-none font-mono text-8xl font-black">
            0x0{project.slug.length}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle/60 pb-6">
            <div className="flex flex-col gap-2">
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-text-main tracking-tight">
                {project.title}
              </motion.h1>
              <motion.p variants={itemVariants} className="text-base text-accent dev-tag font-medium">
                {project.subtitle}
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-bright text-xs dev-tag text-text-main hover:text-accent hover:border-accent/50 transition-all hover:scale-105"
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
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-black font-semibold text-xs dev-tag hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </motion.div>
          </div>

          {/* Project Meta Info Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 text-xs dev-tag text-text-dim">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span>YEAR: {project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-accent" />
              <span>ROLE: {project.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent" />
              <span>CATEGORY: {project.category.toUpperCase()}</span>
            </div>
          </motion.div>

          {/* Monospace Tech Stack Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-bg-elevated text-xs dev-tag text-accent border border-accent/20"
              >
                #{tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      ) : (
        <div className="p-8 sm:p-10 rounded-3xl bg-bg-surface border border-border-subtle shadow-2xl flex flex-col gap-6 mt-4 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle/60 pb-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl font-bold text-text-main tracking-tight">
                {project.title}
              </h1>
              <p className="text-base text-accent dev-tag font-medium">
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-bright text-xs dev-tag text-text-main"
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
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-black font-semibold text-xs dev-tag"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs dev-tag text-text-dim">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span>YEAR: {project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-accent" />
              <span>ROLE: {project.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent" />
              <span>CATEGORY: {project.category.toUpperCase()}</span>
            </div>
          </div>

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
      )}

      {/* Overview & Feature Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Left Column: Full Description & Features */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {animationsEnabled ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4"
            >
              <h3 className="text-lg font-bold text-text-main flex items-center gap-2 font-mono">
                <Terminal className="w-4 h-4 text-accent" />
                Project Overview
              </h3>
              <p className="text-text-sub text-base leading-relaxed font-sans">
                {project.fullDescription}
              </p>
            </motion.div>
          ) : (
            <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4">
              <h3 className="text-lg font-bold text-text-main flex items-center gap-2 font-mono">
                <Terminal className="w-4 h-4 text-accent" />
                Project Overview
              </h3>
              <p className="text-text-sub text-base leading-relaxed font-sans">
                {project.fullDescription}
              </p>
            </div>
          )}

          {animationsEnabled ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4"
            >
              <h3 className="text-lg font-bold text-text-main flex items-center gap-2 font-mono">
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
            </motion.div>
          ) : (
            <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4">
              <h3 className="text-lg font-bold text-text-main flex items-center gap-2 font-mono">
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
          )}
        </div>

        {/* Right Column: Architecture & Engineering Notes */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {animationsEnabled ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4"
            >
              <h3 className="text-sm dev-tag text-accent font-semibold flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                ARCHITECTURE_SPECS
              </h3>
              <p className="text-xs text-text-sub leading-relaxed font-sans">
                {project.architectureNotes}
              </p>

              <div className="mt-4 p-4 rounded-xl bg-bg-base border border-border-subtle font-mono text-xs text-accent/80 space-y-1 select-none">
                <div>// CODEBASE MATRIX</div>
                <div>Runtime Mode: {project.category.toUpperCase()}</div>
                <div>Project Year: {project.year}</div>
                <div>DOM Index: 99/100</div>
              </div>
            </motion.div>
          ) : (
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
                <div>Runtime Mode: {project.category.toUpperCase()}</div>
                <div>Project Year: {project.year}</div>
                <div>DOM Index: 99/100</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
