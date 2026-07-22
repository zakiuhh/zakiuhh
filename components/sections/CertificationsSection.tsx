"use client";

import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, ExternalLink, Sparkles, CheckCircle } from "lucide-react";
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
    {
      title: "Generative AI: Evolution of Online Search",
      issuer: "LinkedIn Learning",
      date: "2024",
      highlight: "RAG & LLM-Driven Search Technologies",
    },
    {
      title: "Graphic Design Essentials",
      issuer: "Canva Design Academy",
      date: "2023",
      highlight: "Visual Layout & Brand Assets Composition",
    },
    {
      title: "Ethics in the Age of Generative AI",
      issuer: "LinkedIn Learning / NASBA / PMI",
      date: "2024",
      highlight: "AI Governance, Privacy & Compliance",
    },
  ];

  const additionalCerts = [
    "Building Custom AI Assistants",
    "Generative AI for Creative Content Production",
    "Foundations of Digital Graphic Design",
    "Web Performance Optimization & Native JS",
    "Video Post-Production Fundamentals",
    "SEO & Audience Analytics",
  ];

  return (
    <section id="certifications" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative">
      <AsciiDivider label="CERTIFICATIONS_VERIFIED" />

      <div className="mt-8 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-accent dev-tag text-xs">
          <Award className="w-3.5 h-3.5" />
          <span>CREDENTIALS // 15+ CERTIFIED</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
          Verified Certifications & AI Competencies
        </h2>
      </div>

      {/* Top 6 Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {topCertifications.map((cert, idx) => (
          animationsEnabled ? (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-bg-surface/90 border border-border-subtle hover:border-accent/50 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs dev-tag text-text-dim mb-3">
                  <span className="flex items-center gap-1.5 text-accent">
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

              <div className="pt-4 mt-4 border-t border-border-subtle/40 flex items-center justify-between text-[11px] dev-tag text-text-dim">
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
                  <span className="flex items-center gap-1.5 text-accent">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {cert.issuer}
                  </span>
                  <span>{cert.date}</span>
                </div>

                <h3 className="text-base font-semibold text-text-main leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-text-sub mt-2">
                  {cert.highlight}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border-subtle/40 flex items-center justify-between text-[11px] dev-tag text-text-dim">
                <span>VERIFIED_CREDENTIAL</span>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Compact Grid for Remaining Certificates */}
      <div className="mt-10 p-6 rounded-2xl bg-bg-surface/50 border border-border-subtle">
        <h4 className="text-xs dev-tag text-accent font-semibold mb-4 flex items-center gap-2">
          <span>ADDITIONAL_COMPLETED_COURSES</span>
          <span className="text-text-dim">// 15+ TOTAL</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {additionalCerts.map((c) => (
            <div key={c} className="flex items-center gap-2 text-xs text-text-sub bg-bg-elevated/60 px-3 py-2 rounded-lg border border-border-subtle/60">
              <CheckCircle className="w-3.5 h-3.5 text-accent/70 shrink-0" />
              <span className="truncate">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
