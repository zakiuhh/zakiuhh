"use client";

import React from "react";
import { motion } from "motion/react";
import { Code2, Palette, Terminal, Cpu, Layers, Sparkles, Sliders, Box, Bot } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";
import { useAnimationSettings } from "@/context/AnimationContext";

export const SkillsSection: React.FC = () => {
  const { animationsEnabled } = useAnimationSettings();

  const technicalSkills = [
    { name: "HTML5 & Semantic Markup", desc: "Native Web Standard Layouts", icon: Code2 },
    { name: "CSS3 & Custom Variables", desc: "Responsive Design & Animations", icon: Layers },
    { name: "Vanilla JavaScript (ES6+)", desc: "Zero-Dependency Logic & DOM API", icon: Terminal },
    { name: "Python", desc: "Scripting & Automation Utilities", icon: Cpu },
    { name: "AI Tools & LLM Integration", desc: "Groq, Anthropic, Mistral APIs", icon: Bot },
    { name: "Prompt Engineering", desc: "Structured Prompt Design", icon: Sparkles },
  ];

  const creativeSkills = [
    { name: "Video Editing", desc: "Educational & Promotional Content", icon: Sliders },
    { name: "CapCut & Motion Pipelines", desc: "High-Growth YouTube Production", icon: Box },
    { name: "Graphic Design", desc: "Outreach & Event Brand Identity", icon: Palette },
    { name: "Adobe Illustrator", desc: "Vector Design & Typography", icon: Layers },
    { name: "Canva Pro", desc: "Rapid Campaign Asset Creation", icon: Box },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative">
      <AsciiDivider label="SKILLS_MATRIX" />

      <div className="mt-8 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-accent dev-tag text-xs">
          <Terminal className="w-3.5 h-3.5" />
          <span>CAPABILITY_INDEX // TECHNICAL & CREATIVE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
          Core Engineering & Creative Skillset
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {/* Technical Column */}
        <div className="p-6 rounded-2xl bg-bg-surface/90 border border-border-subtle flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sm font-semibold dev-tag text-accent border-b border-border-subtle pb-4">
            <Code2 className="w-4 h-4" />
            <span>DEV & SYSTEM_CAPABILITIES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technicalSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return animationsEnabled ? (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-4 rounded-xl bg-bg-elevated/70 border border-border-subtle hover:border-accent/40 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-bg-surface text-accent group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-text-main group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-text-dim dev-tag mt-0.5">
                        {skill.desc}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-bg-elevated/70 border border-border-subtle"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-bg-surface text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-text-main">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-text-dim dev-tag mt-0.5">
                        {skill.desc}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Creative Column */}
        <div className="p-6 rounded-2xl bg-bg-surface/90 border border-border-subtle flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sm font-semibold dev-tag text-accent border-b border-border-subtle pb-4">
            <Palette className="w-4 h-4" />
            <span>CREATIVE & MEDIA_DIRECTION</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {creativeSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return animationsEnabled ? (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-4 rounded-xl bg-bg-elevated/70 border border-border-subtle hover:border-accent/40 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-bg-surface text-accent group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-text-main group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-text-dim dev-tag mt-0.5">
                        {skill.desc}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-bg-elevated/70 border border-border-subtle"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-bg-surface text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-text-main">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-text-dim dev-tag mt-0.5">
                        {skill.desc}
                      </span>
                    </div>
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
