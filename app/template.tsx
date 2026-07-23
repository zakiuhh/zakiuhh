"use client";

import React from "react";
import { motion } from "motion/react";
import { useAnimationSettings } from "@/context/AnimationContext";

export default function Template({ children }: { children: React.ReactNode }) {
  const { animationsEnabled } = useAnimationSettings();

  if (!animationsEnabled) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="w-full min-w-0 overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
}
