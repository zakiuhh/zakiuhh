"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight, Code, Terminal, Sparkles, Filter } from "lucide-react";
import { PROJECTS, Project } from "@/lib/projectsData";
import { AsciiDivider } from "@/components/effects/AsciiDivider";

export default function ProjectsIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "ALL_PROJECTS" },
    { id: "devtools", label: "DEV_TOOLS" },
    { id: "vanilla", label: "VANILLA_BROWSER" },
    { id: "team", label: "TEAM_SOFTWARE" },
    { id: "utility", label: "SYSTEM_UTILITIES" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <AsciiDivider label="PROJECT_DIRECTORY // ALL_SHIPPED_CODE" />

      <div className="flex flex-col gap-4 mt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs dev-tag text-accent self-start">
          <Code className="w-3.5 h-3.5" />
          <span>6 SHIPPED PROJECTS // DEV TOOLS, VANILLA & TEAM SOFTWARE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-text-main tracking-tight">
          Software Projects & Engineering Work
        </h1>

        <p className="text-base sm:text-lg text-text-sub max-w-2xl font-sans">
          Browser-native IDEs, AI engines, documentation platforms, Windows cache maintenance tools, and team web applications.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mt-8 border-b border-border-subtle pb-4">
        <div className="flex items-center gap-2 text-xs dev-tag text-text-dim mr-2">
          <Filter className="w-3.5 h-3.5 text-accent" />
          <span>FILTER:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs dev-tag transition-all ${
              activeCategory === cat.id
                ? "bg-accent text-black font-semibold shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                : "bg-bg-surface border border-border-subtle text-text-sub hover:text-text-main hover:border-accent/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col justify-between p-6 rounded-3xl bg-bg-surface/90 border border-border-subtle hover:border-accent/60 transition-all duration-300 group shadow-xl"
          >
            <div>
              {/* Top Header Window Frame with Repository Preview Image */}
              <div className="w-full h-44 rounded-2xl bg-bg-base border border-border-subtle overflow-hidden flex flex-col relative select-none mb-5 group/img">
                <div className="flex items-center justify-between px-3 py-2 bg-bg-elevated/90 border-b border-border-subtle/60 text-[10px] dev-tag text-text-dim">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <span className="w-2 h-2 rounded-full bg-green-500/70" />
                    <span className="ml-1 text-text-sub font-semibold">{project.slug}</span>
                  </div>
                  <span className="text-accent/80 font-mono">{project.year}</span>
                </div>

                <div className="relative flex-1 w-full overflow-hidden bg-bg-surface">
                  {project.previewImage ? (
                    // eslint-disable-next-next/no-img-element
                    <img
                      src={project.previewImage}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs dev-tag text-text-dim">
                      <Terminal className="w-4 h-4 text-accent mr-2" />
                      {project.slug}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <p className="text-xs dev-tag text-accent font-medium mt-1">
                {project.subtitle}
              </p>
              <p className="text-xs text-text-sub leading-relaxed mt-3 font-sans">
                {project.description}
              </p>
            </div>

            <div className="mt-6">
              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-bg-elevated text-[10px] dev-tag text-text-dim border border-border-subtle"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-border-subtle/60">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs dev-tag text-accent hover:underline font-semibold"
                >
                  <span>CASE_STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-dim hover:text-text-main p-1.5 bg-bg-elevated rounded-lg border border-border-subtle hover:border-accent/40 transition-all"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:scale-105 p-1.5 bg-accent/10 rounded-lg border border-accent/30 transition-all"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
