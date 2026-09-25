"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme (Dark / Light)"
      className={`group relative inline-flex items-center justify-center gap-2 p-2.5 sm:px-3 rounded-xl border active:scale-95 cursor-pointer select-none transition-colors duration-300
        bg-white dark:bg-zinc-900/90 hover:bg-slate-50 dark:hover:bg-zinc-800
        text-slate-700 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300
        border-slate-200 dark:border-zinc-700/80 hover:border-amber-300 dark:hover:border-amber-400/50
        shadow-2xs dark:shadow-md dark:shadow-black/30 hover:shadow-md dark:hover:shadow-amber-500/10
        ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Sun Icon: Visible in Dark Mode, clicking switches to Light */}
        <Sun className="w-4 h-4 text-amber-400 hidden dark:block transition-transform duration-300 group-hover:rotate-45" />
        {/* Moon Icon: Visible in Light Mode, clicking switches to Dark */}
        <Moon className="w-4 h-4 text-slate-700 block dark:hidden transition-transform duration-300 group-hover:-rotate-12" />
      </div>

      {showLabel && (
        <span className="text-xs font-bold tracking-wide">
          <span className="hidden dark:inline">Light Mode</span>
          <span className="inline dark:hidden">Dark Mode</span>
        </span>
      )}
    </button>
  );
}
