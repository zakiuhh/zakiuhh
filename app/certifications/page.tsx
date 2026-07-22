import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Award, ShieldCheck, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";

export const metadata: Metadata = {
  title: "Certifications — Zaki Ul Hassan",
  description: "Explore 15+ verified certifications spanning Anthropic AI Fluency, Microsoft Career Essentials, Prompt Engineering, and Graphic Design.",
};

export default function CertificationsPage() {
  const topCertifications = [
    {
      title: "AI Fluency Certification",
      issuer: "Anthropic",
      date: "2024",
      highlight: "Advanced Claude LLM Workflows, Context Formatting & Prompting Architecture",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      date: "2024",
      highlight: "Professional GenAI Systems, Ethical AI Principles & Enterprise Applications",
    },
    {
      title: "Prompt Engineering Professional Certification",
      issuer: "MTF Institute",
      date: "2024",
      highlight: "Systematic Prompt Architecture, Few-Shot Contexts & Temperature Engineering",
    },
    {
      title: "Generative AI: Evolution of Online Search",
      issuer: "LinkedIn Learning",
      date: "2024",
      highlight: "Retrieval-Augmented Generation (RAG) & LLM-Driven Search Technologies",
    },
    {
      title: "Graphic Design Essentials",
      issuer: "Canva Design Academy",
      date: "2023",
      highlight: "Visual Layout Composition, Brand Identity & Vector Graphic Assets",
    },
    {
      title: "Ethics in the Age of Generative AI",
      issuer: "LinkedIn Learning / NASBA / PMI",
      date: "2024",
      highlight: "AI Governance, Intellectual Property, Privacy & Regulatory Compliance",
    },
  ];

  const additionalCerts = [
    "Building Custom AI Assistants & Chatbots",
    "Generative AI for Creative Content Production",
    "Foundations of Digital Graphic Design",
    "Web Performance Optimization & Native JS",
    "Video Post-Production & Motion Graphics Fundamentals",
    "SEO Analytics & Audience Growth Engineering",
    "UI/UX Design Systems & Color Theory",
    "Python Automation & Scripting Basics",
    "Digital Marketing & YouTube Channel Optimization",
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <AsciiDivider label="CERTIFICATE_INDEX // 15+_VERIFIED" />

      <div className="flex flex-col gap-4 mt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs dev-tag text-accent self-start">
          <Award className="w-3.5 h-3.5" />
          <span>VERIFIED CERTIFICATIONS MATRIX</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-text-main tracking-tight">
          Certifications & Credentials
        </h1>

        <p className="text-base sm:text-lg text-text-sub max-w-2xl font-sans">
          A collection of 15+ certifications spanning Generative AI, Anthropic Claude LLMs, Prompt Engineering, and Graphic Design.
        </p>
      </div>

      {/* Top 6 Main Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {topCertifications.map((cert) => (
          <div
            key={cert.title}
            className="p-6 rounded-3xl bg-bg-surface/90 border border-border-subtle hover:border-accent/50 transition-all flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between text-xs dev-tag text-text-dim mb-4">
                <span className="flex items-center gap-1.5 text-accent font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  {cert.issuer}
                </span>
                <span>{cert.date}</span>
              </div>

              <h2 className="text-lg font-bold text-text-main group-hover:text-accent transition-colors leading-snug">
                {cert.title}
              </h2>
              <p className="text-xs text-text-sub mt-3 leading-relaxed font-sans">
                {cert.highlight}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-border-subtle/40 flex items-center justify-between text-[11px] dev-tag text-text-dim">
              <span>STATUS: VERIFIED</span>
              <Sparkles className="w-3.5 h-3.5 text-accent/50" />
            </div>
          </div>
        ))}
      </div>

      {/* Additional Certificates Box */}
      <div className="mt-12 p-8 rounded-3xl bg-bg-surface/60 border border-border-subtle shadow-lg">
        <h2 className="text-sm dev-tag text-accent font-semibold mb-6 flex items-center gap-2">
          <span>ADDITIONAL_COMPLETED_CERTIFICATIONS</span>
          <span className="text-text-dim">// FULL LIST</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {additionalCerts.map((c) => (
            <div
              key={c}
              className="flex items-center gap-3 text-xs text-text-sub bg-bg-elevated/70 px-4 py-3 rounded-xl border border-border-subtle/60 hover:border-accent/30 transition-all"
            >
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              <span className="font-medium">{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-text-main">Ready to discuss a project or opportunity?</h3>
          <p className="text-xs text-text-sub">Get in touch directly via email or social channels.</p>
        </div>
        <Link
          href="/contact"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-semibold text-xs dev-tag hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all shrink-0"
        >
          <span>CONTACT_ME</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
