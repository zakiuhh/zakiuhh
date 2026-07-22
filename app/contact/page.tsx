"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import { Mail, Copy, Check, Github, Linkedin, Send, Terminal, ArrowUpRight, MapPin, Globe } from "lucide-react";
import { AsciiDivider } from "@/components/effects/AsciiDivider";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "zakiulhassan105@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <AsciiDivider label="INITIATE_COMMUNICATION // CONTACT_DIRECTORY" />

      <div className="flex flex-col gap-4 mt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs dev-tag text-accent self-start">
          <Terminal className="w-3.5 h-3.5" />
          <span>OPEN FOR FREELANCE & COLLABORATION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-text-main tracking-tight">
          Contact Details & Inquiries
        </h1>

        <p className="text-base sm:text-lg text-text-sub max-w-2xl font-sans">
          Reach out for zero-dependency web development, developer video editing, graphic design projects, or AI integration consulting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
        {/* Left Column: Direct Info & Social Cards */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Direct Copy Box */}
          <div className="p-6 rounded-3xl bg-bg-surface border border-border-subtle flex flex-col gap-4 shadow-xl">
            <h2 className="text-sm font-semibold dev-tag text-accent flex items-center gap-2">
              <Mail className="w-4 h-4" />
              PRIMARY_EMAIL_ADDRESS
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-bg-elevated border border-border-subtle">
              <span className="text-sm font-bold text-text-main font-mono">{email}</span>
              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-bg-surface border border-border-bright text-xs dev-tag text-text-main hover:text-accent hover:border-accent/60 transition-all active:scale-95 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span className="text-accent">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-text-dim" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-3xl bg-bg-surface border border-border-subtle flex flex-col gap-4 shadow-xl">
            <h2 className="text-sm font-semibold dev-tag text-accent flex items-center gap-2">
              <Globe className="w-4 h-4" />
              SOCIAL_CHANNELS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/zakiuhh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-bg-elevated border border-border-subtle hover:border-accent/50 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-text-dim group-hover:text-accent">
                  <Github className="w-5 h-5" />
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div className="mt-4">
                  <span className="text-xs dev-tag text-text-dim">GITHUB</span>
                  <p className="text-sm font-semibold text-text-main group-hover:text-accent transition-colors font-mono">
                    zakiuhh
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/zakiuh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-bg-elevated border border-border-subtle hover:border-accent/50 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-text-dim group-hover:text-accent">
                  <Linkedin className="w-5 h-5" />
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div className="mt-4">
                  <span className="text-xs dev-tag text-text-dim">LINKEDIN</span>
                  <p className="text-sm font-semibold text-text-main group-hover:text-accent transition-colors font-mono">
                    in/zakiuh
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Location & Status Info */}
          <div className="p-6 rounded-3xl bg-bg-surface border border-border-subtle flex flex-col gap-3 text-xs dev-tag text-text-sub">
            <div className="flex items-center justify-between py-1 border-b border-border-subtle/40">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                LOCATION
              </span>
              <span className="text-text-main font-mono">Kallar Kahar, Pakistan</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-border-subtle/40">
              <span>STATUS</span>
              <span className="text-accent font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                AVAILABLE_FOR_HIRE
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span>RESPONSE_TIME</span>
              <span className="text-text-main font-mono">&lt; 24 HOURS</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-bg-surface/90 border border-border-subtle shadow-xl flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <span className="text-xs dev-tag text-accent font-semibold flex items-center gap-2">
              <Send className="w-4 h-4" />
              DIRECT_INQUIRY_FORM
            </span>
            <span className="text-[10px] dev-tag text-text-dim">SECURE_MAILTO</span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${email}?subject=Project Inquiry for Zaki Ul Hassan`;
            }}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label className="text-xs dev-tag text-text-sub">YOUR_NAME</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle text-sm text-text-main placeholder:text-text-dim/50 focus:outline-none focus:border-accent transition-colors font-sans"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs dev-tag text-text-sub">YOUR_EMAIL</label>
              <input
                type="email"
                required
                placeholder="developer@company.com"
                className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle text-sm text-text-main placeholder:text-text-dim/50 focus:outline-none focus:border-accent transition-colors font-sans"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs dev-tag text-text-sub">PROJECT_SCOPE / MESSAGE</label>
              <textarea
                rows={4}
                required
                placeholder="Describe your project, timeline, or inquiry..."
                className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle text-sm text-text-main placeholder:text-text-dim/50 focus:outline-none focus:border-accent transition-colors font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-accent text-black font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,255,136,0.35)] transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Launch Email Client</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
