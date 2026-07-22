"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Terminal, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-bg-surface border-t border-border-subtle/80 py-10 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand & Dev Ethos */}
        <div className="flex flex-col gap-2 max-w-md">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent" />
            <span className="font-semibold text-text-main text-sm">ZAKI UL HASSAN</span>
          </div>
          <p className="text-xs text-text-sub leading-relaxed">
            Vanilla Web Developer, Video Editor, & Graphic Designer. Building native browser tools with zero external dependencies.
          </p>
          <span className="text-[11px] dev-tag text-text-dim">
            LOCATION: Kallar Kahar, Pakistan // COMSATS BCS 2026–2030
          </span>
        </div>

        {/* Social Links & Resume Download */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/zakiuhh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-bg-elevated border border-border-subtle text-xs dev-tag text-text-sub hover:text-accent hover:border-accent/50 transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-text-dim" />
          </a>

          <a
            href="https://linkedin.com/in/zakiuh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-bg-elevated border border-border-subtle text-xs dev-tag text-text-sub hover:text-accent hover:border-accent/50 transition-all"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-text-dim" />
          </a>

          <a
            href="mailto:zakiulhassan105@gmail.com"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-bg-elevated border border-border-subtle text-xs dev-tag text-text-sub hover:text-accent hover:border-accent/50 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
            <ArrowUpRight className="w-3 h-3 text-text-dim" />
          </a>
        </div>
      </div>
    </footer>
  );
};
