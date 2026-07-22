"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Terminal, Download, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { AsciiCanvas } from "@/components/effects/AsciiCanvas";
import { useAnimationSettings } from "@/context/AnimationContext";

export const HeroSection: React.FC = () => {
  const { animationsEnabled } = useAnimationSettings();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-24 pb-16 overflow-hidden">
      {/* Background Generative ASCII Wave Canvas */}
      <div className="absolute inset-0 opacity-40 pointer-events-none select-none z-0">
        <AsciiCanvas />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 flex flex-col gap-6 max-w-4xl">
        {/* Status Pill */}
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 15 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-surface/90 border border-border-subtle backdrop-blur-md self-start shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-xs dev-tag text-text-sub">
            BCS @ COMSATS WAH // AVAILABLE FOR FELLOWSHIPS
          </span>
        </motion.div>

        {/* Main Name & Title */}
        <div className="flex flex-col gap-2">
          <motion.h1
            initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-main"
          >
            Zaki Ul Hassan
          </motion.h1>

          <motion.div
            initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 text-lg sm:text-2xl md:text-3xl text-accent font-medium dev-tag"
          >
            <Terminal className="w-5 h-5 sm:w-7 sm:h-7 shrink-0 text-accent" />
            <span>Vanilla Web Dev &amp; Creative Media</span>
          </motion.div>
        </div>

        {/* Brief Narrative Intro */}
        <motion.p
          initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-text-sub leading-relaxed max-w-2xl font-sans"
        >
          Architecting high-performance web software directly on browser APIs with <strong className="text-text-main font-semibold">zero external dependencies</strong>. Co-Director of Graphics at Zulal-e-Khizar Foundation &amp; Video Producer.
        </motion.p>

        {/* Monospace Quick Specs Badges */}
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs dev-tag text-text-dim"
        >
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-bg-surface/80 border border-border-subtle">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>Kallar Kahar, Pakistan</span>
          </span>
          <span className="px-3 py-1 rounded-lg bg-bg-surface/80 border border-border-subtle text-accent font-mono">
            #VanillaJS #HTML5 #CSS3
          </span>
          <span className="px-3 py-1 rounded-lg bg-bg-surface/80 border border-border-subtle text-text-sub">
            15+ AI Certifications
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4"
        >
          <a
            href="/Zaki_Resume.pdf"
            download="Zaki_Ul_Hassan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl btn-accent font-semibold text-xs sm:text-sm hover:shadow-[0_0_25px_rgba(0,255,136,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Download Resume</span>
          </a>

          <Link
            href="/projects"
            className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-bg-surface/90 border border-border-bright hover:border-accent/60 text-xs sm:text-sm dev-tag text-text-main hover:text-accent transition-all duration-200 shadow-md"
          >
            <span>Explore 6 Projects</span>
            <ArrowRight className="w-4 h-4 text-text-dim group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
