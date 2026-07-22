"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Award, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";
import { useAnimationSettings } from "@/context/AnimationContext";

export const CertificationsSection: React.FC = () => {
  const { animationsEnabled } = useAnimationSettings();

  const topCertifications = [
    {
      title: "AI Fluency Certification",
      issuer: "Anthropic",
      date: "2024",
      highlight: "Advanced Claude LLM Workflows & Prompting",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      date: "2024",
      highlight: "Professional GenAI Systems & Applications",
    },
    {
      title: "Prompt Engineering Professional Certification",
      issuer: "MTF Institute",
      date: "2024",
      highlight: "Systematic Prompt Architecture & Context Engineering",
    },
  ];

  return (
    <section id="certifications" className="py-16 px-6 md:px-12 max-w-7xl mx-auto relative">
      <AsciiDivider label="CERTIFICATIONS_HIGHLIGHTS" />

      <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-accent dev-tag text-xs">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS // 15+ CERTIFIED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
            Verified Certifications
          </h2>
        </div>
        <Link
          href="/certifications"
          className="inline-flex items-center gap-2 text-xs dev-tag text-accent hover:underline font-semibold"
        >
          <span>VIEW_ALL_15+_CERTIFICATIONS</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Top 3 Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {topCertifications.map((cert, idx) => (
          animationsEnabled ? (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-bg-surface/90 border border-border-subtle hover:border-accent/50 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs dev-tag text-text-dim mb-3">
                  <span className="flex items-center gap-1.5 text-accent font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {cert.issuer}
                  </span>
                  <span>{cert.date}</span>
                </div>

                <h3 className="text-base font-semibold text-text-main group-hover:text-accent transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-text-sub mt-2 font-sans">
                  {cert.highlight}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-border-subtle/40 flex items-center justify-between text-[11px] dev-tag text-text-dim">
                <span>VERIFIED_CREDENTIAL</span>
                <Sparkles className="w-3 h-3 text-accent/40" />
              </div>
            </motion.div>
          ) : (
            <div
              key={cert.title}
              className="p-5 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs dev-tag text-text-dim mb-3">
                  <span className="flex items-center gap-1.5 text-accent font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {cert.issuer}
                  </span>
                  <span>{cert.date}</span>
                </div>

                <h3 className="text-base font-semibold text-text-main leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-text-sub mt-2 font-sans">
                  {cert.highlight}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-border-subtle/40 flex items-center justify-between text-[11px] dev-tag text-text-dim">
                <span>VERIFIED_CREDENTIAL</span>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};
