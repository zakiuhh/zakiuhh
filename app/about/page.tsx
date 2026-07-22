import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { GraduationCap, MapPin, Cpu, Palette, Video, Award, Download, ArrowRight, CheckCircle2 } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";

export const metadata: Metadata = {
  title: "About — Zaki Ul Hassan",
  description: "Learn more about Zaki Ul Hassan — BCS Student at COMSATS Islamabad, Vanilla Web Developer, Video Editor, and Graphic Designer.",
};

export default function AboutPage() {
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

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <AsciiDivider label="SYSTEM_ABOUT // IDENTITY_PROFILE" />

      {/* Header Banner */}
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

      {/* Detailed Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 text-text-sub text-base leading-relaxed font-sans">
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
        </div>

        {/* Right Sidebar: Quick Stats & Resume */}
        <div className="lg:col-span-5 flex flex-col gap-6">
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
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-black font-semibold text-xs dev-tag hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD_OFFICIAL_RESUME</span>
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col gap-3">
            <h3 className="text-xs dev-tag text-text-dim">QUICK_INDEX</h3>
            <div className="space-y-2 text-xs text-text-sub">
              <div className="flex items-center justify-between py-1 border-b border-border-subtle/40">
                <span>Location</span>
                <span className="text-text-main font-mono">Pakistan</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border-subtle/40">
                <span>Focus</span>
                <span className="text-text-main font-mono">Vanilla Web / AI / Media</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border-subtle/40">
                <span>Certifications</span>
                <span className="text-accent font-mono">15+ Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Matrix */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-6 font-mono">
          // Core Competency Pillars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-bg-surface/80 border border-border-subtle hover:border-accent/40 transition-all flex items-start gap-4"
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
          <p className="text-xs text-text-sub">Explore Coloristan, What&apos;s Next?, DECKY CAP Docs, and C++ Crashed.</p>
        </div>
        <Link
          href="/projects"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-semibold text-xs dev-tag hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all shrink-0"
        >
          <span>VIEW_ALL_PROJECTS</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
