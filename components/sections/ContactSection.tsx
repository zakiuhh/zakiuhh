"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Github, Linkedin, Send, Terminal, ArrowUpRight } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "zakiulhassan105@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 w-full max-w-7xl mx-auto relative overflow-hidden">
      <AsciiDivider label="INITIATE_CONTACT" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6 sm:mt-8 w-full min-w-0">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 w-full min-w-0">
          <div className="flex items-center gap-2 text-accent dev-tag text-xs">
            <Terminal className="w-3.5 h-3.5 shrink-0" />
            <span>OPEN_FOR_COLLABORATION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight leading-tight">
            Let&apos;s build something exceptional together.
          </h2>

          <p className="text-text-sub text-sm sm:text-base leading-relaxed font-sans">
            Whether you need custom zero-dependency web software, developer video editing, graphic design branding, or AI integration consulting, feel free to reach out.
          </p>

          {/* Copy Email Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-1 w-full min-w-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2.5 sm:p-3 rounded-xl bg-accent/10 text-accent border border-accent/30 shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] sm:text-[11px] dev-tag text-text-dim">DIRECT_EMAIL</span>
                <span className="text-xs sm:text-sm font-semibold text-text-main font-mono break-all">{email}</span>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-bright text-xs dev-tag text-text-main hover:text-accent hover:border-accent/60 transition-all active:scale-95 shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-text-dim" />
                  <span>COPY_EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2.5 sm:gap-4 pt-1 w-full min-w-0">
            <a
              href="https://github.com/zakiuhh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-bg-surface border border-border-subtle text-xs dev-tag text-text-sub hover:text-accent hover:border-accent/50 transition-all truncate"
            >
              <Github className="w-4 h-4 shrink-0" />
              <span className="truncate">github.com/zakiuhh</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-dim shrink-0" />
            </a>

            <a
              href="https://linkedin.com/in/zakiuh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-bg-surface border border-border-subtle text-xs dev-tag text-text-sub hover:text-accent hover:border-accent/50 transition-all truncate"
            >
              <Linkedin className="w-4 h-4 shrink-0" />
              <span className="truncate">linkedin.com/in/zakiuh</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-dim shrink-0" />
            </a>
          </div>
        </div>

        {/* Right Column: Mailto Form Trigger Box */}
        <div className="lg:col-span-6 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-bg-surface/90 border border-border-subtle shadow-xl flex flex-col gap-5 sm:gap-6 w-full min-w-0 overflow-hidden">
          <div className="flex items-center justify-between border-b border-border-subtle pb-3.5 sm:pb-4 min-w-0">
            <span className="text-xs dev-tag text-accent font-semibold flex items-center gap-2 truncate">
              <Send className="w-3.5 h-3.5 shrink-0" />
              SEND_DIRECT_MESSAGE
            </span>
            <span className="text-[10px] dev-tag text-text-dim shrink-0 ml-2">FAST_RESPONSE</span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${email}?subject=Portfolio Inquiry from Visitor`;
            }}
            className="flex flex-col gap-4 w-full min-w-0"
          >
            <div className="flex flex-col gap-1.5 w-full min-w-0">
              <label className="text-xs dev-tag text-text-sub">YOUR_EMAIL</label>
              <input
                type="email"
                required
                placeholder="developer@company.com"
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-bg-elevated border border-border-subtle text-xs sm:text-sm text-text-main placeholder:text-text-dim/50 focus:outline-none focus:border-accent transition-colors font-sans"
              />
            </div>

            <div className="flex flex-col gap-1.5 w-full min-w-0">
              <label className="text-xs dev-tag text-text-sub">PROJECT_SCOPE / MESSAGE</label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about your project, idea, or role..."
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-bg-elevated border border-border-subtle text-xs sm:text-sm text-text-main placeholder:text-text-dim/50 focus:outline-none focus:border-accent transition-colors font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 sm:py-4 px-4 rounded-xl btn-accent font-semibold text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(0,255,136,0.35)] transition-all flex items-center justify-center gap-2 mt-1"
            >
              <Send className="w-4 h-4 shrink-0" />
              <span>Launch Email Client</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
