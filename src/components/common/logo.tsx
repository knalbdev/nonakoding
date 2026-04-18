import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const heights = { sm: 28, md: 36, lg: 44 };
  const h = heights[size];

  return (
    <Link href="/" className={cn("inline-flex items-center transition-opacity duration-200 hover:opacity-80", className)}
      aria-label="Nonakoding — Beranda">
      <Image src="/images/logo/nonakoding-logo.png" alt="Nonakoding logo" height={h} width={h * 4}
        className="object-contain" priority />
    </Link>
  );
}
