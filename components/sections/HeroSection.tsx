"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { Download, ArrowDownRight, Code2, Sparkles, Terminal } from "lucide-react";
import { AsciiCanvas } from "@/components/effects/AsciiCanvas";
import { useAnimationSettings } from "@/context/AnimationContext";

export const HeroSection: React.FC = () => {
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
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-grid-pattern">
      {/* ASCII Canvas Background Element */}
      <div className="absolute inset-0 opacity-40 z-0">
        <AsciiCanvas />
      </div>

      {/* Subtle Radial Glow Overlay */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none z-0" style={{
        background: "radial-gradient(circle at 50% 40%, rgba(0, 255, 136, 0.08) 0%, transparent 60%)"
      }} />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {animationsEnabled ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6"
          >
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-surface/90 border border-accent/30 backdrop-blur-md text-xs dev-tag text-accent shadow-[0_0_15px_rgba(0,255,136,0.15)]">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>BCS STUDENT @ COMSATS WAH // AVAILABLE FOR PROJECTS</span>
            </motion.div>

            {/* Main Name & Title */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-main leading-none">
                ZAKI UL HASSAN
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-accent/90 font-medium">
                Vanilla Web Dev <span className="text-text-dim">&</span> Creative Designer
              </h2>
            </motion.div>

            {/* One-Line Pitch */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-text-sub max-w-2xl leading-relaxed font-sans"
            >
              Building browser-native tools with HTML5, CSS3, and JavaScript — zero frameworks, zero dependencies. Blending developer craft with professional video editing, graphic design, and AI integrations.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA: Download Resume */}
              <a
                href="/Zaki_Resume.pdf"
                download="Zaki_Ul_Hassan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-black font-semibold text-sm hover:shadow-[0_0_25px_rgba(0,255,136,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              {/* Secondary CTA: Featured Projects */}
              <Link
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-bg-surface/90 border border-border-bright text-text-main font-medium text-sm hover:border-accent/60 hover:text-accent transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4 text-text-dim group-hover:text-accent group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
              </Link>
            </motion.div>

            {/* Tech Badges / Dev Signature */}
            <motion.div variants={itemVariants} className="pt-8 flex flex-wrap items-center gap-6 border-t border-border-subtle/60 w-full text-xs dev-tag text-text-dim">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>ZERO_FRAMEWORK_NATIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-accent" />
                <span>15+ AI CERTIFICATIONS</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>CREATIVE MOTION & DESIGN</span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* Static Non-Animated Fallback */
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-surface border border-accent/30 text-xs dev-tag text-accent">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>BCS STUDENT @ COMSATS WAH // AVAILABLE FOR PROJECTS</span>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-main leading-none">
                ZAKI UL HASSAN
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-accent/90 font-medium">
                Vanilla Web Dev <span className="text-text-dim">&</span> Creative Designer
              </h2>
            </div>

            <p className="text-base sm:text-lg text-text-sub max-w-2xl leading-relaxed">
              Building browser-native tools with HTML5, CSS3, and JavaScript — zero frameworks, zero dependencies. Blending developer craft with professional video editing, graphic design, and AI integrations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/Zaki_Resume.pdf"
                download="Zaki_Ul_Hassan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-black font-semibold text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <Link
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-bg-surface border border-border-bright text-text-main font-medium text-sm"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4 text-text-dim" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
