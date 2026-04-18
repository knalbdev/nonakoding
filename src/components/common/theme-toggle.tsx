"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "light" ? "Aktifkan dark mode" : "Aktifkan light mode"}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md",
        "border border-[var(--c-border)]",
        "text-[var(--c-text-2)] hover:text-[var(--c-text)]",
        "hover:bg-[var(--c-surface)] transition-all duration-150",
        className
      )}
    >
      {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}
