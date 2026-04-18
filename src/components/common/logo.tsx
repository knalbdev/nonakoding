import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
}

// SVG logo mark: dua curly brace }{ menghadap satu sama lain — brand Nonakoding
function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left brace } */}
      <path
        d="M37 8
           C29 8 24 13 24 21
           L24 31
           C24 37 19 40 14 40
           C19 40 24 43 24 49
           L24 59
           C24 67 29 72 37 72"
        stroke="#E5007E"
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right brace { */}
      <path
        d="M43 8
           C51 8 56 13 56 21
           L56 31
           C56 37 61 40 66 40
           C61 40 56 43 56 49
           L56 59
           C56 67 51 72 43 72"
        stroke="#E5007E"
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({ className, size = "md", iconOnly = false }: LogoProps) {
  const iconSize = size === "sm" ? 22 : size === "md" ? 28 : 36;
  const textSize = size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2",
        "transition-opacity duration-200 hover:opacity-80",
        className
      )}
      aria-label="Nonakoding — Beranda"
    >
      <LogoMark size={iconSize} />
      {!iconOnly && (
        <span className={cn("font-display font-bold tracking-tight", textSize)}>
          <span style={{ color: "#E5007E" }}>nona</span>
          <span style={{ color: "#F572BE" }}>koding</span>
        </span>
      )}
    </Link>
  );
}
