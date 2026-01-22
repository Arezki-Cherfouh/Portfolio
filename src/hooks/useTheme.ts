import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setThemeState] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("qwerify-theme");

    if (storedTheme) {
      setThemeState(storedTheme);
      applyTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const systemTheme = prefersDark ? "dark" : "light";
      setThemeState(systemTheme);
      applyTheme(systemTheme);
    }
  }, []);

  const applyTheme = (newTheme: string) => {
    const root = document.documentElement;

    if (newTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    if (newTheme === "dark") {
      root.style.setProperty("--background-primary", "#0a0a0a");
      root.style.setProperty("--background-secondary", "#171717");
      root.style.setProperty("--background-tertiary", "#262626");
      root.style.setProperty("--text-primary", "#ffffff");
      root.style.setProperty("--text-secondary", "#a3a3a3");
      root.style.setProperty("--accent-primary", "#8b5cf6");
      root.style.setProperty("--accent-secondary", "#3b82f6");
    } else {
      root.style.setProperty("--background-primary", "#ffffff");
      root.style.setProperty("--background-secondary", "#fafafa");
      root.style.setProperty("--background-tertiary", "#f5f5f5");
      root.style.setProperty("--text-primary", "#171717");
      root.style.setProperty("--text-secondary", "#525252");
      root.style.setProperty("--accent-primary", "#7c3aed");
      root.style.setProperty("--accent-secondary", "#2563eb");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const setTheme = (newTheme: string) => {
    if (newTheme === "system") {
      localStorage.removeItem("qwerify-theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const systemTheme = prefersDark ? "dark" : "light";
      setThemeState("system");
      applyTheme(systemTheme);
    } else {
      setThemeState(newTheme);
      applyTheme(newTheme);
      localStorage.setItem("qwerify-theme", newTheme);
    }
  };

  return { theme, toggleTheme, setTheme };
};