import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Briefcase, Calendar, CheckCircle2, Youtube, Palette, Film, ArrowRight } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";

export const metadata: Metadata = {
  title: "Experience — Zaki Ul Hassan",
  description: "Detailed work experience, content growth milestones, graphic design leadership, and freelance video production.",
};

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Zulal-e-Khizar Foundation",
      role: "Co-Director & Graphics Team Volunteer",
      period: "2024 – Present",
      icon: Palette,
      summary:
        "Directing visual identity for humanitarian campaigns, leading creative design volunteers, and producing complete event brand suites.",
      highlights: [
        "Leads visual design strategy for foundation outreach events and social campaigns.",
        "Produced full visual asset package for the flagship 'Path of Humanity' outreach program.",
        "Mentors junior graphic designers in grid alignment, typography, and vector composition.",
        "Collaborates directly with executive directors to execute visual campaign roadmaps.",
      ],
      tags: ["Graphic Design", "Adobe Illustrator", "Canva Pro", "Team Leadership", "Brand Identity"],
    },
    {
      company: "KIPS MDCAT PREP",
      role: "Video Editor & Content Manager (YouTube)",
      period: "2023 – 2024",
      icon: Youtube,
      summary:
        "Managed and scaled an educational tech & MDCAT YouTube channel from inception to over 20,000 subscribers and full monetization.",
      highlights: [
        "Scaled channel audience to 20,000+ active student subscribers in under 12 months.",
        "Met and surpassed YouTube Partner Program monetization criteria within 30 days of channel management.",
        "Designed high-CTR video thumbnails, conducted video SEO keyword optimization, and managed upload schedules.",
        "Handled video post-production pipeline including audio cleanup, captions, and visual graphics.",
      ],
      tags: ["CapCut", "Video Editing", "YouTube SEO", "Content Management", "Audience Growth"],
    },
    {
      company: "Freelance Video Editor",
      role: "Developer Tech Education Series Specialist",
      period: "2023 – 2024",
      icon: Film,
      summary:
        "Produced complete long-form video episodes for a software developer client's educational programming content series.",
      highlights: [
        "Delivered 4 full long-form video episodes: Frontend Web Dev Roadmap, Intro to Programming, and Variables in Programming.",
        "Executed complete post-production workflow: script pacing, kinetic motion graphics, lower thirds, and color grading.",
        "Enhanced viewer retention through structured visual animations and code highlighting.",
      ],
      tags: ["Video Production", "Motion Graphics", "Tech Education", "Color Grading", "Post Production"],
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
      <AsciiDivider label="WORK_EXPERIENCE // TIMELINE" />

      <div className="flex flex-col gap-4 mt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs dev-tag text-accent self-start">
          <Briefcase className="w-3.5 h-3.5" />
          <span>PRODUCTION & LEADERSHIP HISTORY</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-text-main tracking-tight">
          Professional Experience
        </h1>

        <p className="text-base sm:text-lg text-text-sub max-w-2xl font-sans">
          Proven track record in visual brand direction, YouTube channel scaling to 20,000+ subscribers, and developer educational video production.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="mt-12 space-y-10">
        {experiences.map((exp) => {
          const Icon = exp.icon;
          return (
            <div
              key={exp.company}
              className="p-8 rounded-3xl bg-bg-surface/90 border border-border-subtle hover:border-accent/40 transition-all shadow-xl flex flex-col gap-6"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle/60 pb-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-bg-elevated border border-border-bright text-accent shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-text-main">{exp.role}</h2>
                    <span className="text-sm text-accent dev-tag">{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-bg-elevated border border-accent/20 text-xs dev-tag text-accent self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-text-sub leading-relaxed font-sans">
                {exp.summary}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3">
                <h3 className="text-xs dev-tag text-text-dim">KEY_RESPONSIBILITIES_&_MILESTONES</h3>
                <ul className="space-y-2">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-text-sub">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-border-subtle/40">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-bg-elevated text-xs dev-tag text-text-dim border border-border-subtle"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-text-main">Want to collaborate on a project?</h3>
          <p className="text-xs text-text-sub">Available for web development, video editing, or graphic design inquiries.</p>
        </div>
        <Link
          href="/contact"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-semibold text-xs dev-tag hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all shrink-0"
        >
          <span>GET_IN_TOUCH</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
