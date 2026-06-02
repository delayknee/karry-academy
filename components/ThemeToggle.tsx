"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme | null) ??
      "light";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const Icon = theme === "light" ? Moon : Sun;
  const label =
    theme === "light" ? "Switch to dark theme" : "Switch to light theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ow-line2 bg-ow-bg2 text-ow-fg2 outline-none transition-[background-color,border-color,color,transform] duration-200 ease-smooth hover:-translate-y-[1px] hover:border-ow-orange/45 hover:text-ow-fg1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:rgb(var(--ow-accent-rgb))]"
    >
      <Icon
        className="h-[15px] w-[15px] transition-transform duration-300 ease-smooth"
        strokeWidth={1.85}
        style={{ opacity: mounted ? 1 : 0 }}
      />
    </button>
  );
}
