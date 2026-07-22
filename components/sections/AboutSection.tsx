"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { GraduationCap, MapPin, Cpu, Palette, Video, Award, ArrowRight } from "lucide-react";
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
    <section id="about" className="py-16 px-6 md:px-12 max-w-7xl mx-auto relative">
      <AsciiDivider label="ABOUT_IDENTITY" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-6">
        {/* Left Column: Story & Education */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="flex items-center gap-2 text-accent dev-tag text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>KALLAR KAHAR, PAKISTAN // COMSATS BCS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
            Developer craft, creative direction, and zero-dependency conviction.
          </h2>

          <div className="flex flex-col gap-3 text-text-sub text-base leading-relaxed font-sans">
            <p>
              I am a BCS student at <strong className="text-text-main font-semibold">COMSATS University Islamabad (Wah Campus)</strong> with a passion for constructing fast, elegant software directly on native browser APIs.
            </p>
            <p>
              My shipped browser tools prove that pure HTML5, CSS3, and JavaScript deliver exceptional performance with zero framework bloat.
            </p>
          </div>

          {/* Education Summary */}
          <div className="mt-2 p-5 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-border-subtle/50 pb-2">
              <span className="text-xs dev-tag text-accent font-semibold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                COMSATS UNIVERSITY ISLAMABAD (WAH)
              </span>
              <span className="text-[11px] dev-tag text-text-dim">2026 – EXPECTED 2030</span>
            </div>
            <p className="text-xs text-text-sub">
              Bachelor of Computer Science (BCS) • FSc Pre-Engineering at APS&amp;C Chakwal (2022–2024)
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bg-surface border border-border-bright text-xs dev-tag text-text-main hover:text-accent hover:border-accent/60 transition-all shadow-md group"
            >
              <span>READ_FULL_BIO_&amp;_BACKGROUND</span>
              <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: 4 Pillar Feature Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return animationsEnabled ? (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-4 rounded-2xl bg-bg-surface/80 border border-border-subtle hover:border-accent/50 transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-bg-elevated border border-border-bright text-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-xs font-semibold text-text-main group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-text-sub leading-relaxed">
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
                  <div className="p-2 rounded-xl bg-bg-elevated border border-border-bright text-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-xs font-semibold text-text-main">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-text-sub leading-relaxed">
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
