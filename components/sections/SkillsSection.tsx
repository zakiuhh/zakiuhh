"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Code2, Palette, Terminal, Cpu, Layers, Sparkles, Sliders, Box, Bot, ArrowRight } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";
import { useAnimationSettings } from "@/context/AnimationContext";

export const SkillsSection: React.FC = () => {
  const { animationsEnabled } = useAnimationSettings();

  const technicalSkills = [
    { name: "HTML5 & CSS3", desc: "Native Web Layouts", icon: Code2 },
    { name: "Vanilla JavaScript (ES6+)", desc: "Zero-Dependency Logic", icon: Terminal },
    { name: "Python", desc: "Scripting & Automation", icon: Cpu },
    { name: "AI Tools & APIs", desc: "Groq, Anthropic, Mistral", icon: Bot },
  ];

  const creativeSkills = [
    { name: "Video Editing", desc: "Educational & Tech Content", icon: Sliders },
    { name: "CapCut & Post Pipelines", desc: "YouTube Content Management", icon: Box },
    { name: "Graphic Design", desc: "Campaign Brand Identity", icon: Palette },
    { name: "Adobe Illustrator", desc: "Vector Design & Typography", icon: Layers },
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-12 max-w-7xl mx-auto relative">
      <AsciiDivider label="SKILLS_MATRIX" />

      <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-accent dev-tag text-xs">
            <Terminal className="w-3.5 h-3.5" />
            <span>CAPABILITY_INDEX // TECHNICAL & CREATIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
            Technical & Creative Core
          </h2>
        </div>
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 text-xs dev-tag text-accent hover:underline font-semibold"
        >
          <span>VIEW_FULL_SKILL_MATRIX</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Technical Column */}
        <div className="p-5 rounded-2xl bg-bg-surface/90 border border-border-subtle flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold dev-tag text-accent border-b border-border-subtle pb-3">
            <Code2 className="w-4 h-4" />
            <span>DEVELOPMENT_&_SYSTEMS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {technicalSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-xl bg-bg-elevated/70 border border-border-subtle flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-bg-surface text-accent shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-text-main">{skill.name}</span>
                    <span className="text-[10px] text-text-dim dev-tag mt-0.5">{skill.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Creative Column */}
        <div className="p-5 rounded-2xl bg-bg-surface/90 border border-border-subtle flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold dev-tag text-accent border-b border-border-subtle pb-3">
            <Palette className="w-4 h-4" />
            <span>CREATIVE_&_MEDIA_DIRECTION</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {creativeSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-xl bg-bg-elevated/70 border border-border-subtle flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-bg-surface text-accent shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-text-main">{skill.name}</span>
                    <span className="text-[10px] text-text-dim dev-tag mt-0.5">{skill.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
