"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { GraduationCap, MapPin, Cpu, Palette, Video, Award, Download, ArrowRight } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";
import { useAnimationSettings } from "@/context/AnimationContext";

export default function AboutPage() {
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

  const pillars = [
    {
      title: "Zero-Dependency Web Craft",
      desc: "Architecting browser-native web software directly using HTML5, CSS3, and modern ECMAScript without heavy framework overhead.",
      icon: Cpu,
    },
    {
      title: "Video Editing & Content Growth",
      desc: "Managing high-CTR YouTube content pipelines, editing educational dev series, and scaling channels past 20,000 subscribers.",
      icon: Video,
    },
    {
      title: "Graphic Design & Branding",
      desc: "Leading visual direction at Zulal-e-Khizar Foundation for outreach events like 'Path of Humanity' and campaign identities.",
      icon: Palette,
    },
    {
      title: "AI Tools & Prompt Engineering",
      desc: "15+ certifications in Generative AI, Anthropic AI Fluency, and prompt engineering, integrating AI models directly into tools.",
      icon: Award,
    },
  ];

  const content = (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <AsciiDivider label="SYSTEM_ABOUT // IDENTITY_PROFILE" />

      {/* Header Banner */}
      {animationsEnabled ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 mt-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs dev-tag text-accent self-start">
            <MapPin className="w-3.5 h-3.5" />
            <span>KALLAR KAHAR, PAKISTAN // BCS @ COMSATS WAH</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-bold text-text-main tracking-tight">
            About Zaki Ul Hassan
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-text-sub max-w-3xl leading-relaxed font-sans">
            Vanilla Web Developer, Video Editor, Graphic Designer, and BCS Student at COMSATS University Islamabad (Wah Campus). Building native browser software with zero dependencies.
          </motion.p>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-4 mt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs dev-tag text-accent self-start">
            <MapPin className="w-3.5 h-3.5" />
            <span>KALLAR KAHAR, PAKISTAN // BCS @ COMSATS WAH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-text-main tracking-tight">
            About Zaki Ul Hassan
          </h1>

          <p className="text-lg text-text-sub max-w-3xl leading-relaxed font-sans">
            Vanilla Web Developer, Video Editor, Graphic Designer, and BCS Student at COMSATS University Islamabad (Wah Campus). Building native browser software with zero dependencies.
          </p>
        </div>
      )}

      {/* Detailed Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 text-text-sub text-base leading-relaxed font-sans">
          {animationsEnabled ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4"
            >
              <h2 className="text-xl font-bold text-text-main font-mono">
                // Engineering Philosophy
              </h2>
              <p>
                My software identity is built on raw, unadulterated web standards. While modern web development often defaults to massive framework bundles for simple user interfaces, I specialize in crafting ultra-fast, zero-dependency browser tools using pure HTML5, custom CSS variables, and native JavaScript DOM APIs.
              </p>
              <p>
                This portfolio itself is the deliberate exception where Next.js is utilized for static site rendering and routing performance, but the handcrafted dev-core ethos remains intact across every component.
              </p>
            </motion.div>
          ) : (
            <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4">
              <h2 className="text-xl font-bold text-text-main font-mono">
                // Engineering Philosophy
              </h2>
              <p>
                My software identity is built on raw, unadulterated web standards. While modern web development often defaults to massive framework bundles for simple user interfaces, I specialize in crafting ultra-fast, zero-dependency browser tools using pure HTML5, custom CSS variables, and native JavaScript DOM APIs.
              </p>
              <p>
                This portfolio itself is the deliberate exception where Next.js is utilized for static site rendering and routing performance, but the handcrafted dev-core ethos remains intact across every component.
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
              <h2 className="text-xl font-bold text-text-main font-mono">
                // Creative Direction & Media Production
              </h2>
              <p>
                In addition to writing clean code, I possess extensive experience in video production and graphic design. As the Co-Director of the Graphics Team at Zulal-e-Khizar Foundation, I direct visual identity assets for humanitarian outreach campaigns.
              </p>
              <p>
                As a content producer, I edited developer roadmaps and managed the KIPS MDCAT PREP YouTube channel, growing it past 20,000 subscribers and achieving full monetization within 30 days.
              </p>
            </motion.div>
          ) : (
            <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-4">
              <h2 className="text-xl font-bold text-text-main font-mono">
                // Creative Direction & Media Production
              </h2>
              <p>
                In addition to writing clean code, I possess extensive experience in video production and graphic design. As the Co-Director of the Graphics Team at Zulal-e-Khizar Foundation, I direct visual identity assets for humanitarian outreach campaigns.
              </p>
              <p>
                As a content producer, I edited developer roadmaps and managed the KIPS MDCAT PREP YouTube channel, growing it past 20,000 subscribers and achieving full monetization within 30 days.
              </p>
            </div>
          )}
        </div>

        {/* Right Sidebar: Quick Stats & Resume */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {animationsEnabled ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-6"
            >
              <h3 className="text-sm font-semibold dev-tag text-accent border-b border-border-subtle pb-3">
                EDUCATION_CREDENTIALS
              </h3>

              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4 py-1">
                  <h4 className="text-text-main font-semibold text-sm">
                    Bachelor of Computer Science (BCS)
                  </h4>
                  <p className="text-xs text-text-sub">
                    COMSATS University Islamabad, Wah Campus
                  </p>
                  <span className="text-[11px] dev-tag text-accent">2026 – Expected 2030</span>
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

              <a
                href="/Zaki_Resume.pdf"
                download="Zaki_Ul_Hassan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-black font-semibold text-xs dev-tag hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD_OFFICIAL_RESUME</span>
              </a>
            </motion.div>
          ) : (
            <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-6">
              <h3 className="text-sm font-semibold dev-tag text-accent border-b border-border-subtle pb-3">
                EDUCATION_CREDENTIALS
              </h3>

              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4 py-1">
                  <h4 className="text-text-main font-semibold text-sm">
                    Bachelor of Computer Science (BCS)
                  </h4>
                  <p className="text-xs text-text-sub">
                    COMSATS University Islamabad, Wah Campus
                  </p>
                  <span className="text-[11px] dev-tag text-accent">2026 – Expected 2030</span>
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

              <a
                href="/Zaki_Resume.pdf"
                download="Zaki_Ul_Hassan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-black font-semibold text-xs dev-tag"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD_OFFICIAL_RESUME</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* 4 Pillars Matrix */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-6 font-mono">
          // Core Competency Pillars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return animationsEnabled ? (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-bg-surface/80 border border-border-subtle hover:border-accent/40 transition-all flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-bg-elevated text-accent border border-border-bright shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-text-main group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-text-sub leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ) : (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-bg-elevated text-accent border border-border-bright shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-text-main">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-text-sub leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-text-main">Interested in my shipped projects?</h3>
          <p className="text-xs text-text-sub">Explore Zenith C++, C++ Crashed CS501, Coloristan, and SnapKode.</p>
        </div>
        <Link
          href="/projects"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-semibold text-xs dev-tag hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all shrink-0 hover:scale-105"
        >
          <span>VIEW_ALL_PROJECTS</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  return content;
}
