"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero section">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#F0E8DC 1px, transparent 1px), linear-gradient(to right, #F0E8DC 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} aria-hidden="true" />

      {/* Pink glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #E5007E, transparent 70%)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="mb-6"
          >
            <span className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full",
              "border border-[#2E2A26] bg-[#1A1714]",
              "text-xs font-medium text-[#9A8F83]"
            )}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#E5007E] animate-pulse" />
              Komunitas Developer Perempuan Indonesia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#F0E8DC] sm:text-5xl md:text-6xl"
          >
            Selamat Datang di{" "}
            <span className="text-[#E5007E]">Nonakoding!</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-[#9A8F83] sm:text-lg max-w-2xl"
          >
            Kami percaya{" "}
            <span className="text-[#F0E8DC]">setiap perempuan berhak untuk unjuk kemampuan di dunia digital</span>.
            Yuk mulai perjalananmu bersama kami! 🚀
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/events" className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
              "bg-[#E5007E] text-white text-sm font-semibold",
              "hover:bg-[#C4006A] transition-all duration-200",
              "shadow-[0_0_28px_rgba(229,0,126,0.4)]",
              "hover:shadow-[0_0_36px_rgba(229,0,126,0.5)]"
            )}>
              Mulai Perjalananmu
              <ArrowRight size={15} />
            </Link>
            <Link href="/about" className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
              "border border-[#2E2A26] bg-[#1A1714]",
              "text-[#F0E8DC] text-sm font-semibold",
              "hover:border-[#5C5550] hover:bg-[#221E1A]",
              "transition-all duration-200"
            )}>
              Kenali Kami
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#5C5550]"
          >
            {[
              { value: "500+", label: "Member Aktif" },
              { value: "50+", label: "Program Selesai" },
              { value: "3+", label: "Tahun Berdiri" },
            ].map((s, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="font-semibold text-[#E5007E]">{s.value}</span>
                {s.label}
                {i < 2 && <span className="ml-6 h-3 w-px bg-[#2E2A26]" aria-hidden="true" />}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-xs text-[#5C5550]">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <ChevronDown size={16} className="text-[#5C5550]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
