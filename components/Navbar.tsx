"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, ZapOff, Menu, X, Terminal, Code2, Sun, Moon, SlidersHorizontal } from "lucide-react";
import { useAnimationSettings } from "@/context/AnimationContext";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "motion/react";

export const Navbar: React.FC = () => {
  const { animationsEnabled, fxMode, cycleFxMode } = useAnimationSettings();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-bg-surface/80 backdrop-blur-md border border-border-subtle/80 rounded-2xl px-5 py-3.5 shadow-2xl transition-all duration-300">
        {/* Brand Logo / Identity */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-bg-elevated border border-border-bright flex items-center justify-center text-accent group-hover:border-accent group-hover:shadow-[0_0_12px_rgba(0,255,136,0.3)] transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-text-main group-hover:text-accent transition-colors flex items-center gap-1.5">
              ZAKI UL HASSAN
            </span>
            <span className="text-[10px] text-text-dim dev-tag tracking-wider">
              VANILLA_DEV // BCS
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs dev-tag text-text-sub hover:text-accent transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Controls & Toggles */}
        <div className="flex items-center gap-2.5">
          {/* Light / Dark Mode Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs dev-tag bg-bg-elevated border-border-subtle text-text-sub hover:text-accent hover:border-accent/40 transition-all duration-200"
            title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-accent" />
                <span className="hidden sm:inline">LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-accent" />
                <span className="hidden sm:inline">DARK</span>
              </>
            )}
          </button>

          {/* System-Aware FX Mode Toggle Switch */}
          <button
            onClick={cycleFxMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs dev-tag transition-all duration-200 ${
              animationsEnabled
                ? "bg-accent/10 border-accent/40 text-accent hover:bg-accent/20"
                : "bg-bg-elevated border-border-subtle text-text-dim hover:text-text-sub"
            }`}
            title={`Current FX Mode: ${fxMode.toUpperCase()} (${animationsEnabled ? "Active" : "Paused"}). Click to cycle.`}
          >
            {fxMode === "system" ? (
              <>
                <SlidersHorizontal className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>FX: AUTO</span>
              </>
            ) : fxMode === "on" ? (
              <>
                <Zap className="w-3.5 h-3.5 text-accent animate-pulse shrink-0" />
                <span>FX: ON</span>
              </>
            ) : (
              <>
                <ZapOff className="w-3.5 h-3.5 text-text-dim shrink-0" />
                <span>FX: OFF</span>
              </>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-bg-elevated border border-border-subtle text-text-sub hover:text-text-main"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-7xl mx-auto bg-bg-surface/95 backdrop-blur-xl border border-border-subtle rounded-xl p-5 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm dev-tag text-text-sub hover:text-accent py-2 border-b border-border-subtle/50 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Code2 className="w-3.5 h-3.5 text-text-dim" />
                </Link>
              ))}
            </div>
            <div className="pt-2 flex items-center justify-between text-xs dev-tag text-text-dim">
              <span>SYSTEM STATUS</span>
              <span className="text-accent flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                ONLINE
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
