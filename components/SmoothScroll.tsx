"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useAnimationSettings } from "@/context/AnimationContext";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { animationsEnabled } = useAnimationSettings();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!animationsEnabled) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [animationsEnabled]);

  return <>{children}</>;
};
