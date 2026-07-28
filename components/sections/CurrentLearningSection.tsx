"use client";

import React from "react";
import { motion } from "motion/react";
import { BookOpen, Code2, Coffee, CheckCircle2 } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";
import { useAnimationSettings } from "@/context/AnimationContext";

export const CurrentLearningSection: React.FC = () => {
  const { animationsEnabled } = useAnimationSettings();

  const learningItems = [
    {
      title: "In-Depth Frontend Web Dev",
      badge: "ACTIVE_DEEP_DIVE",
      icon: Code2,
      statusColor: "border-accent/40 text-accent bg-accent/10",
      description:
        "Mastering DOM rendering performance, CSS layout architectures, modern async JavaScript, and zero-dependency web engineering.",
      tags: ["#Frontend", "#JavaScript", "#WebPerformance", "#CSS3"],
    },
    {
      title: "Java Programming & OOP",
      badge: "SKILL_EXPANSION",
      icon: Coffee,
      statusColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
      description:
        "Exploring Object-Oriented Programming (OOP), Java syntax, class structures, inheritance, interfaces, and software design patterns.",
      tags: ["#Java", "#OOP", "#SoftwareDesign", "#Logic"],
    },
  ];

  return (
    <section id="learning" className="py-14 sm:py-18 px-4 sm:px-6 md:px-12 w-full max-w-7xl mx-auto relative overflow-hidden">
      <AsciiDivider label="CURRENT_LEARNING // ACTIVE_TRAJECTORY" />

      <div className="mt-6 flex flex-col gap-2 w-full min-w-0">
        <div className="flex items-center gap-2 text-accent dev-tag text-xs">
          <BookOpen className="w-3.5 h-3.5 shrink-0" />
          <span>KNOWLEDGE_EXPANSION // CONTINUOUS_GROWTH</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-text-main tracking-tight">
          Current Learning &amp; Technical Focus
        </h2>
      </div>

      {/* Learning Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-6 w-full min-w-0">
        {learningItems.map((item, idx) => {
          const Icon = item.icon;

          const cardContent = (
            <div className="h-full p-5 sm:p-6 rounded-2xl bg-bg-surface/90 border border-border-subtle hover:border-accent/50 transition-all duration-300 shadow-xl flex flex-col justify-between gap-4 relative overflow-hidden w-full min-w-0">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2 border-b border-border-subtle/60 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-bg-elevated border border-border-bright text-accent shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-text-main font-mono">
                      {item.title}
                    </h3>
                  </div>
                  <span className={`text-[10px] dev-tag px-2.5 py-0.5 rounded-full border shrink-0 ${item.statusColor}`}>
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs text-text-sub leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border-subtle/60 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-lg bg-bg-elevated text-[10px] dev-tag text-accent/80 border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );

          return animationsEnabled ? (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="h-full w-full min-w-0"
            >
              {cardContent}
            </motion.div>
          ) : (
            <div key={item.title} className="h-full w-full min-w-0">
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};
