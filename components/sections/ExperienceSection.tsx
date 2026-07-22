"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, ArrowRight, Terminal } from "lucide-react";
import { AsciiCanvas } from "@/components/effects/AsciiCanvas";
import { AsciiDivider } from "@/components/effects/AsciiDivider";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-6 md:px-12 max-w-7xl mx-auto relative">
      <AsciiDivider label="WORK_EXPERIENCE // SUMMARY" />

      <div className="mt-6 relative p-8 sm:p-12 rounded-3xl bg-bg-surface/90 border border-border-subtle overflow-hidden shadow-2xl">
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

        <div className="relative z-10 flex flex-col items-start gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs dev-tag text-accent">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRODUCTION & GRAPHICS LEADERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
            Hands-on Experience in Media, Leadership & Production
          </h2>

          <p className="text-base sm:text-lg text-text-sub leading-relaxed font-sans">
            Co-Director of Graphics at <strong className="text-text-main font-semibold">Zulal-e-Khizar Foundation</strong> leading visual event design, former YouTube Content Manager for <strong className="text-text-main font-semibold">KIPS MDCAT PREP</strong> scaled to 20,000+ subscribers and monetized in 30 days, and freelance video editor producing developer educational content series.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-black font-semibold text-xs dev-tag hover:shadow-[0_0_25px_rgba(0,255,136,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>View Full Experience</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
