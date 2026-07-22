import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Code2, Palette, Terminal, Cpu, Layers, Sparkles, Sliders, Box, Bot, ArrowRight, ShieldCheck } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";

export const metadata: Metadata = {
  title: "Skills — Zaki Ul Hassan",
  description: "Comprehensive technical capabilities, video post-production tools, graphic design software, and AI prompt engineering competencies.",
};

export default function SkillsPage() {
  const technicalSkills = [
    { name: "HTML5 & Semantic Markup", level: "Expert", desc: "Native Web Standard Layouts & Accessibility", icon: Code2 },
    { name: "CSS3 & Custom Variables", level: "Expert", desc: "Responsive Design, Glassmorphic Themes & Animations", icon: Layers },
    { name: "Vanilla JavaScript (ES6+)", level: "Expert", desc: "Zero-Dependency Logic, DOM APIs & Event Loops", icon: Terminal },
    { name: "Python", level: "Proficient", desc: "Scripting, Automation Utilities & Data Logic", icon: Cpu },
    { name: "AI Tools & LLM Integration", level: "Advanced", desc: "Groq, Anthropic, Kimi, Mistral REST APIs", icon: Bot },
    { name: "Prompt Engineering", level: "Professional", desc: "Structured Context Design & System Prompting", icon: Sparkles },
  ];

  const creativeSkills = [
    { name: "Video Editing", level: "Expert", desc: "Educational & Tech Content Production", icon: Sliders },
    { name: "CapCut & Post Pipelines", level: "Expert", desc: "High-Growth YouTube Content Management", icon: Box },
    { name: "Graphic Design", level: "Advanced", desc: "Humanitarian Outreach Campaign Branding", icon: Palette },
    { name: "Adobe Illustrator", level: "Advanced", desc: "Vector Design, Typography & Asset Suites", icon: Layers },
    { name: "Canva Pro", level: "Advanced", desc: "Rapid Multi-Channel Campaign Creation", icon: Box },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <AsciiDivider label="SYSTEM_SKILLS // CAPABILITY_MATRIX" />

      <div className="flex flex-col gap-4 mt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs dev-tag text-accent self-start">
          <Terminal className="w-3.5 h-3.5" />
          <span>TECHNICAL & CREATIVE INDEX</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-text-main tracking-tight">
          Skills & Technologies
        </h1>

        <p className="text-base sm:text-lg text-text-sub max-w-2xl font-sans">
          A detailed breakdown of programming languages, browser APIs, video editing pipelines, graphic design suites, and AI model integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {/* Technical Column */}
        <div className="p-8 rounded-3xl bg-bg-surface/90 border border-border-subtle flex flex-col gap-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <span className="text-base font-bold dev-tag text-accent flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              DEVELOPMENT_&_SYSTEMS
            </span>
            <span className="text-xs dev-tag text-text-dim">6 CORE TOOLSETS</span>
          </div>

          <div className="space-y-4">
            {technicalSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="p-4 rounded-2xl bg-bg-elevated/70 border border-border-subtle hover:border-accent/40 transition-all flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-bg-surface text-accent shrink-0 border border-border-bright">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-text-main">{skill.name}</h3>
                      <span className="text-[10px] dev-tag text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-text-sub mt-1">{skill.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Creative Column */}
        <div className="p-8 rounded-3xl bg-bg-surface/90 border border-border-subtle flex flex-col gap-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <span className="text-base font-bold dev-tag text-accent flex items-center gap-2">
              <Palette className="w-5 h-5" />
              CREATIVE_&_MEDIA_PRODUCTION
            </span>
            <span className="text-xs dev-tag text-text-dim">5 CORE SUITES</span>
          </div>

          <div className="space-y-4">
            {creativeSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="p-4 rounded-2xl bg-bg-elevated/70 border border-border-subtle hover:border-accent/40 transition-all flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-bg-surface text-accent shrink-0 border border-border-bright">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-text-main">{skill.name}</h3>
                      <span className="text-[10px] dev-tag text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-text-sub mt-1">{skill.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-text-main">Check out my 15+ Verified AI Certifications</h3>
          <p className="text-xs text-text-sub">Anthropic AI Fluency, Microsoft & LinkedIn GenAI, and Prompt Engineering.</p>
        </div>
        <Link
          href="/certifications"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-semibold text-xs dev-tag hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all shrink-0"
        >
          <span>VIEW_CERTIFICATIONS</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
