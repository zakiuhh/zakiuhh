import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Rocket, Sparkles, CheckCircle2, Code, Video, Palette, ArrowRight, Terminal } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";

export const metadata: Metadata = {
  title: "Career Readiness — Zaki Ul Hassan",
  description: "Fresh developer track record. Ready to collaborate on vanilla web engineering, C++ platforms, video editing, and graphic design projects.",
};

export default function ExperiencePage() {
  const readinessPillars = [
    {
      title: "Zero-Dependency Web Engineering",
      icon: Code,
      desc: "Capable of constructing fast, lightweight browser tools directly on HTML5, custom CSS variables, and modern JavaScript APIs without heavy external framework bloat.",
      skills: ["Vanilla JS (ES6+)", "Custom CSS Variables", "HTML5 Semantics", "Web APIs"],
    },
    {
      title: "Video Post-Production & Editing",
      icon: Video,
      desc: "Equipped with strong video editing skills for tech education, developer roadmaps, kinetic motion graphics, and high-retention video content workflows.",
      skills: ["CapCut Pro", "Video Post-Production", "YouTube SEO", "Motion Graphics"],
    },
    {
      title: "Graphic Design & Visual Branding",
      icon: Palette,
      desc: "Skilled in visual design composition, typography alignment, vector graphic creation, and building cohesive brand suites for outreach campaigns.",
      skills: ["Adobe Illustrator", "Canva Pro", "Vector Composition", "Brand Identity"],
    },
    {
      title: "Computer Science & C++ Logic",
      icon: Terminal,
      desc: "Solid foundational knowledge in C++ programming, algorithms, problem-solving, and building client-side compiler utilities like Zenith C++.",
      skills: ["C++17", "Data Structures", "Algorithm Logic", "WebAssembly"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto overflow-x-hidden w-full">
      <AsciiDivider label="CAREER_STATUS // GETTING_STARTED" />

      <div className="flex flex-col gap-4 mt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs dev-tag text-accent self-start">
          <Rocket className="w-3.5 h-3.5 shrink-0" />
          <span>FRESH TALENT // READY FOR FIRST OPPORTUNITIES</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-text-main tracking-tight">
          Just Getting Started
        </h1>

        <p className="text-base sm:text-lg text-text-sub max-w-2xl font-sans leading-relaxed">
          I am at the start of my professional journey as a first-year BCS student at <strong className="text-text-main font-semibold">COMSATS University Islamabad</strong>. Be the first to test my capabilities and collaborate on ambitious software or creative projects!
        </p>
      </div>

      {/* Hero Invitation Banner */}
      <div className="mt-10 sm:mt-12 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-bg-surface/90 border border-border-subtle shadow-xl flex flex-col gap-6 w-full min-w-0">
        <div className="flex items-center gap-3 text-accent dev-tag text-xs font-semibold">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>WHY_COLLABORATE_WITH_ME</span>
        </div>

        <h2 className="text-xl sm:text-3xl font-bold text-text-main">
          Eager, disciplined, and focused on delivering clean, zero-dependency results.
        </h2>

        <p className="text-sm sm:text-base text-text-sub leading-relaxed font-sans">
          While I am early in my career, my 6 shipped projects demonstrate my ability to take an idea from concept to a fully functional, deployed web application. I bring fresh energy, strong technical fundamentals, and high dedication to every client or team initiative.
        </p>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl btn-accent font-semibold text-xs dev-tag hover:shadow-[0_0_25px_rgba(0,255,136,0.35)] transition-all"
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Be My First Client / Team Collaborator</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Core Technical Readiness Pillars */}
      <div className="mt-12 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-text-main font-mono">
          // Core Competencies &amp; Technical Readiness
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full min-w-0">
          {readinessPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 sm:p-6 rounded-2xl bg-bg-surface/80 border border-border-subtle flex flex-col justify-between gap-4 shadow-lg"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-bg-elevated text-accent border border-border-bright shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-text-main">{pillar.title}</h3>
                  </div>

                  <p className="text-xs text-text-sub leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle/40">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg bg-bg-elevated text-[11px] dev-tag text-accent/80 border border-accent/20"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg sm:text-xl font-bold text-text-main">Ready to test my capabilities?</h3>
          <p className="text-xs text-text-sub">Let&apos;s build a project together. Reach out via email or direct message.</p>
        </div>
        <Link
          href="/contact"
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-black font-semibold text-xs dev-tag hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all shrink-0 self-start sm:self-auto"
        >
          <span>GET_IN_TOUCH</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
