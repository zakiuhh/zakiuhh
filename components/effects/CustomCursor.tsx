"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useAnimationSettings } from "@/context/AnimationContext";

export const CustomCursor: React.FC = () => {
  const { animationsEnabled } = useAnimationSettings();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!animationsEnabled) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [animationsEnabled, isVisible]);

  if (!animationsEnabled || !isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-accent/60 mix-blend-screen hidden md:block"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 14),
          y: mousePosition.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? "rgba(0, 255, 136, 0.15)" : "transparent",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.2,
        }}
      />
      {/* Small Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 bg-accent rounded-full hidden md:block shadow-[0_0_8px_#00ff88]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 400,
          mass: 0.1,
        }}
      />
    </>
  );
};
