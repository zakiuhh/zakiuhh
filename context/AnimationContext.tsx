"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface AnimationContextType {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
  setAnimationsEnabled: (enabled: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "zaki_portfolio_animations_enabled";

export const AnimationSettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [animationsEnabled, setAnimationsEnabledState] = useState<boolean>(true);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    // 1. Check local storage for explicit user preference
    const savedPreference = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedPreference !== null) {
      setAnimationsEnabledState(savedPreference === "true");
    } else {
      // 2. Check system prefers-reduced-motion default
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setAnimationsEnabledState(!mediaQuery.matches);
    }
    setIsInitialized(true);
  }, []);

  const toggleAnimations = () => {
    setAnimationsEnabledState((prev) => {
      const nextState = !prev;
      localStorage.setItem(LOCAL_STORAGE_KEY, String(nextState));
      return nextState;
    });
  };

  const setAnimationsEnabled = (enabled: boolean) => {
    setAnimationsEnabledState(enabled);
    localStorage.setItem(LOCAL_STORAGE_KEY, String(enabled));
  };

  return (
    <AnimationContext.Provider
      value={{
        animationsEnabled: isInitialized ? animationsEnabled : true,
        toggleAnimations,
        setAnimationsEnabled,
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
