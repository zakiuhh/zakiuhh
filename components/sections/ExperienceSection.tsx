"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Rocket } from "lucide-react";
import { AsciiCanvas } from "@/components/effects/AsciiCanvas";
import { AsciiDivider } from "@/components/effects/AsciiDivider";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-14 sm:py-18 px-4 sm:px-6 md:px-12 w-full max-w-7xl mx-auto relative overflow-hidden">
      <AsciiDivider label="CAREER_LAUNCH // EXPERIENTIAL_STATUS" />

      <div className="mt-6 relative p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-bg-surface/90 border border-border-subtle overflow-hidden shadow-2xl w-full min-w-0">
        {/* Animated ASCII Canvas Background */}
        <div className="absolute inset-0 opacity-25 pointer-events-none select-none z-0">
          <AsciiCanvas />
        </div>

        {/* Subtle Gradient Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(0, 255, 136, 0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-start gap-4 sm:gap-5 max-w-3xl min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs dev-tag text-accent self-start">
            <Rocket className="w-3.5 h-3.5 shrink-0" />
            <span>JUST GETTING STARTED // READY TO BUILD</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-text-main tracking-tight">
            Just Getting Started — Be the First to Test My Capabilities
          </h2>

          <p className="text-sm sm:text-base text-text-sub leading-relaxed font-sans">
            First-year BCS student at <strong className="text-text-main font-semibold">COMSATS University Islamabad</strong>. Equipped with conviction in Vanilla Web Development, C++ logic, Video Post-Production, and Graphic Design — ready to solve real-world technical challenges.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl btn-accent font-semibold text-xs dev-tag hover:shadow-[0_0_25px_rgba(0,255,136,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Collaborate With Me</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/experience"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-bg-elevated border border-border-bright text-xs dev-tag text-text-main hover:text-accent hover:border-accent/50 transition-all"
            >
              <span>Explore My Readiness</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
