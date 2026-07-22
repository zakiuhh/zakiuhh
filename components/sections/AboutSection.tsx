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
        "Building high-performance tools with zero external dependencies. Pure HTML5, CSS3, and modern ECMAScript directly in the browser runtime.",
    },
    {
      icon: Video,
      title: "Video Editor & Content Producer",
      description:
        "Produced educational dev roadmaps and managed tech YouTube channels growing to 20,000+ subscribers with full monetization pipeline.",
    },
    {
      icon: Palette,
      title: "Graphic Design Volunteer",
      description:
        "Co-Director of Graphics Team at Zulal-e-Khizar Foundation. Designing visual identity assets for humanitarian outreach campaigns.",
    },
    {
      icon: Award,
      title: "AI Tools & Prompt Engineer",
      description:
        "15+ certifications across Generative AI, Anthropic AI Fluency, Microsoft Career Essentials, and Prompt Engineering.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative">
      <AsciiDivider label="ABOUT_IDENTITY" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
        {/* Left Column: Story & Education */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-accent dev-tag text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>KALLAR KAHAR, PAKISTAN // COMSATS BCS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
            Developer craft, creative direction, and zero-dependency conviction.
          </h2>

          <div className="flex flex-col gap-4 text-text-sub text-base leading-relaxed font-sans">
            <p>
              I am a first-year BCS student at <strong className="text-text-main font-semibold">COMSATS University Islamabad (Wah Campus)</strong> with a passion for constructing fast, elegant software directly on browser APIs.
            </p>
            <p>
              While most modern developers rely on heavy frameworks for basic utilities, my shipped tools prove that raw HTML5, CSS3, and JavaScript can deliver exceptional user experiences with zero bundler overhead and instant load times.
            </p>
            <p>
              Alongside software engineering, I lead visual direction for humanitarian foundations, edit developer education series, and explore the frontier of Generative AI.
            </p>
          </div>

          {/* Education Box */}
          <div className="mt-4 p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm dev-tag text-accent font-semibold">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span>EDUCATION_TIMELINE</span>
            </div>

            <div className="space-y-4">
              <div className="border-l-2 border-accent/40 pl-4 py-1">
                <h4 className="text-text-main font-semibold text-sm">
                  Bachelor of Computer Science (BCS)
                </h4>
                <p className="text-xs text-text-sub">
                  COMSATS University Islamabad, Wah Campus
                </p>
                <span className="text-[11px] dev-tag text-accent/80">2026 – Expected 2030</span>
              </div>

              <div className="border-l-2 border-border-bright pl-4 py-1">
                <h4 className="text-text-main font-semibold text-sm">
                  FSc Pre-Engineering
                </h4>
                <p className="text-xs text-text-sub">
                  Army Public School & College, Chakwal
                </p>
                <span className="text-[11px] dev-tag text-text-dim">2022 – 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Pillar Feature Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return animationsEnabled ? (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-bg-surface/80 border border-border-subtle hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)] transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-bg-elevated border border-border-bright text-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-text-main group-hover:text-accent transition-colors">
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
                className="p-5 rounded-2xl bg-bg-surface border border-border-subtle"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-bg-elevated border border-border-bright text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-text-main">
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
