"use client";

import React, { useEffect, useRef } from "react";
import { useAnimationSettings } from "@/context/AnimationContext";

const CODE_SYMBOLS = "{}[]<>/\\|:;=+*#@01_";

export const AsciiCanvas: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { animationsEnabled } = useAnimationSettings();
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      const fontSize = 14;
      const cols = Math.floor(width / (fontSize * 0.7));
      const rows = Math.floor(height / (fontSize * 1.1));

      ctx.font = `${fontSize}px var(--font-geist-mono), monospace`;
      ctx.textBaseline = "top";

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      const isLight = document.documentElement.getAttribute("data-theme") === "light";

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * fontSize * 0.7;
          const y = r * fontSize * 1.1;

          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const wave1 = Math.sin(c * 0.08 + time * 0.03);
          const wave2 = Math.cos(r * 0.08 + time * 0.02);
          const wave3 = Math.sin((c + r) * 0.05 + time * 0.04);
          let value = (wave1 + wave2 + wave3 + 3) / 6;

          if (dist < 200) {
            const factor = (1 - dist / 200);
            value = Math.min(1, value + factor * 0.6);
          }

          const charIndex = Math.floor(value * (CODE_SYMBOLS.length - 1));
          const char = CODE_SYMBOLS[charIndex] || ".";

          const alpha = 0.08 + value * 0.7;

          if (isLight) {
            if (value > 0.75) {
              ctx.fillStyle = `rgba(5, 150, 105, ${alpha * 0.9})`;
            } else if (value > 0.45) {
              ctx.fillStyle = `rgba(71, 85, 105, ${alpha * 0.4})`;
            } else {
              ctx.fillStyle = `rgba(203, 213, 225, ${alpha * 0.3})`;
            }
          } else {
            if (value > 0.75) {
              ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
            } else if (value > 0.45) {
              ctx.fillStyle = `rgba(148, 163, 184, ${alpha * 0.5})`;
            } else {
              ctx.fillStyle = `rgba(30, 36, 48, ${alpha * 0.3})`;
            }
          }

          ctx.fillText(char, x, y);
        }
      }

      if (animationsEnabled) {
        time += 1;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [animationsEnabled]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full pointer-events-none select-none ${className}`}
    />
  );
};
