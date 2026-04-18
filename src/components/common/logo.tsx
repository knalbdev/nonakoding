"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const heights = { sm: 28, md: 36, lg: 44 };
  const textSize = { sm: "text-lg", md: "text-xl", lg: "text-2xl" };
  const h = heights[size];
  const [imgError, setImgError] = useState(false);

  return (
    <Link href="/" className={cn("inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-80", className)}
      aria-label="Nonakoding — Beranda">
      {!imgError && (
        <Image src="/logo.png" alt="Nonakoding logo" height={h} width={h}
          className="object-contain" onError={() => setImgError(true)} priority />
      )}
      <span className={cn("font-display font-bold tracking-tight", textSize[size])}>
        <span style={{ color: "#E5007E" }}>nona</span>
        <span style={{ color: "#C4006A" }}>koding</span>
      </span>
    </Link>
  );
}
