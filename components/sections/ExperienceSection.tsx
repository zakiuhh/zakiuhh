"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2, Youtube, Palette, Film, ArrowRight } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";
import { useAnimationSettings } from "@/context/AnimationContext";

export const ExperienceSection: React.FC = () => {
  const { animationsEnabled } = useAnimationSettings();

  const experiences = [
    {
      company: "Zulal-e-Khizar Foundation",
      role: "Co-Director & Graphics Team Volunteer",
      period: "2024 – Present",
      icon: Palette,
      highlight: "Leads graphic design direction for campaigns and produced full visual asset package for 'Path of Humanity'.",
      tags: ["Graphic Design", "Adobe Illustrator", "Canva", "Team Leadership"],
    },
    {
      company: "KIPS MDCAT PREP",
      role: "Video Editor & Content Manager (YouTube)",
      period: "2023 – 2024",
      icon: Youtube,
      highlight: "Grew channel to 20,000+ active subscribers and monetized within one month with custom thumbnails & SEO.",
      tags: ["CapCut", "Video Editing", "YouTube SEO", "Content Management"],
    },
    {
      company: "Freelance Video Editor",
      role: "Motion Graphics & Tech Content Specialist",
      period: "2023 – 2024",
      icon: Film,
      highlight: "Delivered 4 long-form video episodes for developer educational roadmap series with motion graphics.",
      tags: ["Video Editing", "Motion Graphics", "Tech Content", "Color Grading"],
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 md:px-12 max-w-7xl mx-auto relative">
      <AsciiDivider label="WORK_EXPERIENCE // 3_ROLES" />

      <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-accent dev-tag text-xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER_TIMELINE // HIGHLIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
            Production & Leadership Experience
          </h2>
        </div>
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-xs dev-tag text-accent hover:underline font-semibold"
        >
          <span>VIEW_FULL_CAREER_TIMELINE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Timeline Cards */}
      <div className="mt-8 relative border-l border-border-subtle/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-6">
        {experiences.map((exp, idx) => {
          const Icon = exp.icon;
          return (
            <div key={exp.company} className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-bg-surface border border-accent/60 flex items-center justify-center text-accent group-hover:border-accent group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(0,255,136,0.2)]">
                <Icon className="w-3 h-3" />
              </div>

              {animationsEnabled ? (
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-bg-surface/90 border border-border-subtle hover:border-accent/40 transition-all shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle/60 pb-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-text-main group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-text-sub font-medium">
                        {exp.company}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-elevated text-[11px] dev-tag text-accent border border-accent/20 self-start sm:self-auto">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs text-text-sub mb-3 font-sans leading-relaxed">
                    {exp.highlight}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-subtle/40">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-bg-elevated text-[10px] dev-tag text-text-dim border border-border-subtle"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="p-5 rounded-2xl bg-bg-surface border border-border-subtle shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle/60 pb-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-text-main">{exp.role}</h3>
                      <span className="text-xs text-text-sub font-medium">{exp.company}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-elevated text-[11px] dev-tag text-accent border border-accent/20">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs text-text-sub mb-3 font-sans leading-relaxed">
                    {exp.highlight}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-subtle/40">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-bg-elevated text-[10px] dev-tag text-text-dim border border-border-subtle"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
