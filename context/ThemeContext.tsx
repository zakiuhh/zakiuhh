"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "zaki_portfolio_theme";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Default to dark mode
      setThemeState("dark");
      applyTheme("dark");
    }
    setIsInitialized(true);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", newTheme);
    if (newTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
  };

  const toggleTheme = () => {
    setThemeState((prev) => {
      const nextTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem(LOCAL_STORAGE_KEY, nextTheme);
      applyTheme(nextTheme);
      return nextTheme;
    });
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: isInitialized ? theme : "dark",
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
