import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-baseline gap-0.5 font-display font-bold tracking-tight",
        "transition-opacity duration-200 hover:opacity-80",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        },
        className
      )}
      aria-label="Nonakoding — Beranda"
    >
      {/* "nona" dalam warna teks utama, "koding" dalam warna accent */}
      <span style={{ color: "#F0E8DC" }}>nona</span>
      <span style={{ color: "#D4692A" }}>koding</span>
      <span
        style={{ color: "#D4692A" }}
        className="text-xs ml-0.5 mb-0.5 self-end font-mono opacity-70"
      >
        _
      </span>
    </Link>
  );
}
