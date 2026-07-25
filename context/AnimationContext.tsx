"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type FxMode = "system" | "on" | "off";

interface AnimationContextType {
  animationsEnabled: boolean;
  fxMode: FxMode;
  cycleFxMode: () => void;
  setFxMode: (mode: FxMode) => void;
  isSystemReducedMotion: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "zaki_portfolio_fx_mode";

export const AnimationSettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fxMode, setFxModeState] = useState<FxMode>("system");
  const [isSystemReducedMotion, setIsSystemReducedMotion] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    // 1. Check system prefers-reduced-motion media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsSystemReducedMotion(mediaQuery.matches);

    const handleSystemChange = (e: MediaQueryListEvent) => {
      setIsSystemReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    // 2. Read saved preference from localStorage
    const savedMode = localStorage.getItem(LOCAL_STORAGE_KEY) as FxMode | null;
    if (savedMode === "on" || savedMode === "off" || savedMode === "system") {
      setFxModeState(savedMode);
    }

    setIsInitialized(true);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const setFxMode = (mode: FxMode) => {
    setFxModeState(mode);
    localStorage.setItem(LOCAL_STORAGE_KEY, mode);
  };

  const cycleFxMode = () => {
    setFxModeState((prev) => {
      let nextMode: FxMode;
      if (prev === "system") nextMode = "on";
      else if (prev === "on") nextMode = "off";
      else nextMode = "system";

      localStorage.setItem(LOCAL_STORAGE_KEY, nextMode);
      return nextMode;
    });
  };

  // Compute effective animationsEnabled state
  const computedEnabled =
    fxMode === "on"
      ? true
      : fxMode === "off"
      ? false
      : !isSystemReducedMotion; // system mode follows prefers-reduced-motion

  return (
    <AnimationContext.Provider
      value={{
        animationsEnabled: isInitialized ? computedEnabled : true,
        fxMode,
        cycleFxMode,
        setFxMode,
        isSystemReducedMotion,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationSettings = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      "useAnimationSettings must be used within an AnimationSettingsProvider"
    );
  }
  return context;
};
