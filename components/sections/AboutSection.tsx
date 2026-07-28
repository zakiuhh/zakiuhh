"use client";

import React from "react";
import { motion } from "motion/react";
import { GraduationCap, MapPin, Cpu, Palette, Video, Award } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";
import { useAnimationSettings } from "@/context/AnimationContext";

export const AboutSection: React.FC = () => {
  const { animationsEnabled } = useAnimationSettings();

  const cards = [
    {
      icon: Cpu,
      title: "Vanilla Web Craftsman",
      description:
        "Building fast browser tools with pure HTML5, CSS3, and modern JavaScript.",
    },
    {
      icon: Video,
      title: "Video Content Producer",
      description:
        "Editing dev roadmaps & managing YouTube channels scaled to 20,000+ subscribers.",
    },
    {
      icon: Palette,
      title: "Graphic Design Volunteer",
      description:
        "Co-Director of Graphics Team at Zulal-e-Khizar Foundation.",
    },
    {
      icon: Award,
      title: "AI Tools & Prompt Engineer",
      description:
        "15+ certifications across Generative AI, Anthropic Fluency, and Prompt Engineering.",
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-18 px-4 sm:px-6 md:px-12 w-full max-w-7xl mx-auto relative overflow-hidden">
      <AsciiDivider label="ABOUT_IDENTITY" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6 w-full min-w-0">
        {/* Left Column: Story & Education */}
        <div className="lg:col-span-7 flex flex-col gap-5 w-full min-w-0">
          <div className="flex items-center gap-2 text-accent dev-tag text-xs">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>KALLAR KAHAR, PAKISTAN // COMSATS BCS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-text-main tracking-tight">
            Developer craft, creative direction, and zero-dependency conviction.
          </h2>

          <p className="text-text-sub text-sm sm:text-base leading-relaxed font-sans">
            First-year BCS student at <strong className="text-text-main font-semibold">COMSATS University Islamabad (Wah Campus)</strong>. Dedicated to building fast, elegant software directly on browser APIs with zero bundler overhead, alongside visual brand direction and tech video post-production.
          </p>

          {/* Education Box */}
          <div className="mt-1 p-5 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs dev-tag text-accent font-semibold">
              <GraduationCap className="w-4 h-4 text-accent shrink-0" />
              <span>EDUCATION_TIMELINE</span>
            </div>

            <div className="space-y-3">
              <div className="border-l-2 border-accent/40 pl-3.5 py-0.5">
                <h4 className="text-text-main font-semibold text-xs sm:text-sm">
                  Bachelor of Computer Science (BCS)
                </h4>
                <p className="text-xs text-text-sub">
                  COMSATS University Islamabad, Wah Campus
                </p>
                <span className="text-[11px] dev-tag text-accent/80">2026 – Expected 2030</span>
              </div>

              <div className="border-l-2 border-border-bright pl-3.5 py-0.5">
                <h4 className="text-text-main font-semibold text-xs sm:text-sm">
                  FSc Pre-Engineering
                </h4>
                <p className="text-xs text-text-sub">
                  Army Public School &amp; College, Chakwal
                </p>
                <span className="text-[11px] dev-tag text-text-dim">2022 – 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Pillar Feature Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-3.5 w-full min-w-0">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return animationsEnabled ? (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-4 rounded-2xl bg-bg-surface/80 border border-border-subtle hover:border-accent/50 transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-bg-elevated border border-border-bright text-accent group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-text-main group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-text-sub leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div
                key={card.title}
                className="p-4 rounded-2xl bg-bg-surface border border-border-subtle"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-bg-elevated border border-border-bright text-accent shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-text-main">
                      {card.title}
                    </h3>
                    <p className="text-xs text-text-sub leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
