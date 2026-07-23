"use client";

import React, { useEffect, useRef, useState } from "react";
import { useAnimationSettings } from "@/context/AnimationContext";
import { Terminal, Sparkles, Move } from "lucide-react";

interface TechNode {
  name: string;
  phi: number;
  theta: number;
}

const TECH_TAGS: string[] = [
  "C++17",
  "VANILLA_JS",
  "WASM",
  "GROQ_AI",
  "HTML5",
  "CSS3",
  "MONACO",
  "JUDGE0",
  "SUPABASE",
  "PROMPT_ENG",
  "VIDEO_EDIT",
  "REST_API",
];

const DENSITY_CHARS = " .':;=+#@";

export const Ascii3DSphere: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { animationsEnabled } = useAnimationSettings();

  const rotXRef = useRef<number>(0.2);
  const rotYRef = useRef<number>(0);
  const mouseRef = useRef<{ isDown: boolean; lastX: number; lastY: number }>({
    isDown: false,
    lastX: 0,
    lastY: 0,
  });

  const scrollRotRef = useRef<number>(0);
  const [activeTag, setActiveTag] = useState<string>("C++17");

  // Generate 3D tech nodes on spherical coordinates
  const techNodesRef = useRef<TechNode[]>([]);

  useEffect(() => {
    const nodes: TechNode[] = [];
    const count = TECH_TAGS.length;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i + 1) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      nodes.push({
        name: TECH_TAGS[i],
        phi,
        theta,
      });
    }
    techNodesRef.current = nodes;
  }, []);

  // Handle scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (!animationsEnabled) return;
      scrollRotRef.current = window.scrollY * 0.002;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationsEnabled]);

  // Handle mouse / touch drag rotation
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    mouseRef.current = {
      isDown: true,
      lastX: clientX,
      lastY: clientY,
    };
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!mouseRef.current.isDown) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - mouseRef.current.lastX;
    const deltaY = clientY - mouseRef.current.lastY;

    rotYRef.current += deltaX * 0.008;
    rotXRef.current += deltaY * 0.008;

    mouseRef.current.lastX = clientX;
    mouseRef.current.lastY = clientY;
  };

  const handleMouseUp = () => {
    mouseRef.current.isDown = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.getAttribute("data-theme") === "light";

      // 3D sphere parameters
      const radius = Math.min(width, height) * 0.34;
      const centerX = width / 2;
      const centerY = height / 2;

      // Auto rotation + scroll rotation + mouse drag
      if (animationsEnabled && !mouseRef.current.isDown) {
        rotYRef.current += 0.006;
        rotXRef.current += 0.001;
      }

      const totalRotY = rotYRef.current + scrollRotRef.current;
      const totalRotX = rotXRef.current;

      const cosX = Math.cos(totalRotX);
      const sinX = Math.sin(totalRotX);
      const cosY = Math.cos(totalRotY);
      const sinY = Math.sin(totalRotY);

      // 1. Render 3D ASCII point cloud sphere
      const numRings = 24;
      const numPts = 36;

      ctx.font = `11px var(--font-geist-mono), monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = 0; i <= numRings; i++) {
        const phi = (i * Math.PI) / numRings;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);

        for (let j = 0; j < numPts; j++) {
          const theta = (j * 2 * Math.PI) / numPts;
          const sinTheta = Math.sin(theta);
          const cosTheta = Math.cos(theta);

          // Original 3D sphere point
          let x = radius * sinPhi * cosTheta;
          let y = radius * sinPhi * sinTheta;
          let z = radius * cosPhi;

          // Rotation around Y axis
          let x1 = x * cosY + z * sinY;
          let z1 = -x * sinY + z * cosY;

          // Rotation around X axis
          let y2 = y * cosX - z1 * sinX;
          let z2 = y * sinX + z1 * cosX;

          // Perspective projection
          const fov = 400;
          const scale = fov / (fov + z2);
          const projX = centerX + x1 * scale;
          const projY = centerY + y2 * scale;

          // Shading intensity from Z depth & normal
          const depthFactor = (z2 + radius) / (2 * radius);
          const charIndex = Math.floor(depthFactor * (DENSITY_CHARS.length - 1));
          const char = DENSITY_CHARS[charIndex] || ".";

          // Color & Alpha styling based on depth & theme
          const alpha = 0.15 + depthFactor * 0.75;
          if (isLight) {
            ctx.fillStyle = z2 > 0 ? `rgba(5, 150, 105, ${alpha * 0.85})` : `rgba(100, 116, 139, ${alpha * 0.3})`;
          } else {
            ctx.fillStyle = z2 > 0 ? `rgba(0, 255, 136, ${alpha})` : `rgba(51, 65, 85, ${alpha * 0.4})`;
          }

          ctx.fillText(char, projX, projY);
        }
      }

      // 2. Render 3D Tech Node Labels on the Sphere surface
      let frontmostNode = activeTag;
      let maxZ = -Infinity;

      techNodesRef.current.forEach((node) => {
        const sinPhi = Math.sin(node.phi);
        const cosPhi = Math.cos(node.phi);
        const sinTheta = Math.sin(node.theta);
        const cosTheta = Math.cos(node.theta);

        let x = radius * 1.08 * sinPhi * cosTheta;
        let y = radius * 1.08 * sinPhi * sinTheta;
        let z = radius * 1.08 * cosPhi;

        let x1 = x * cosY + z * sinY;
        let z1 = -x * sinY + z * cosY;

        let y2 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        if (z2 > maxZ) {
          maxZ = z2;
          frontmostNode = node.name;
        }

        // Only draw node labels on the front hemisphere for clean visual presentation
        if (z2 > -20) {
          const fov = 400;
          const scale = fov / (fov + z2);
          const projX = centerX + x1 * scale;
          const projY = centerY + y2 * scale;

          const labelAlpha = Math.max(0.2, (z2 + radius) / (2 * radius));

          ctx.font = `bold 10px var(--font-geist-mono), monospace`;
          ctx.fillStyle = isLight
            ? `rgba(5, 150, 105, ${labelAlpha})`
            : `rgba(0, 255, 136, ${labelAlpha})`;
          ctx.fillText(`[${node.name}]`, projX, projY);
        }
      });

      if (frontmostNode !== activeTag) {
        setActiveTag(frontmostNode);
      }

      if (animationsEnabled) {
        animFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [animationsEnabled]);

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      className={`relative w-full h-[380px] sm:h-[460px] rounded-3xl bg-bg-surface/90 border border-border-subtle overflow-hidden shadow-2xl flex flex-col justify-between p-5 select-none cursor-grab active:cursor-grabbing group ${className}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between z-10 dev-tag text-xs text-text-dim border-b border-border-subtle/60 pb-3">
        <div className="flex items-center gap-2 text-accent font-semibold">
          <Terminal className="w-4 h-4 shrink-0" />
          <span>3D_ASCII_SPHERE // INTERACTIVE_MATRIX</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-text-dim">
          <Move className="w-3 h-3 text-accent animate-bounce" />
          <span className="hidden sm:inline">DRAG_TO_ROTATE // SCROLL_REACTIVE</span>
        </div>
      </div>

      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Footer Active Node Badge */}
      <div className="flex items-center justify-between z-10 dev-tag text-xs pt-3 border-t border-border-subtle/60">
        <span className="text-text-dim text-[11px]">ROTATING_AXIS: 3D_POINT_CLOUD</span>
        <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-bg-elevated border border-accent/30 text-accent font-bold text-xs shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>NODE: {activeTag}</span>
        </div>
      </div>
    </div>
  );
};
