"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

// Baris kode yang dianimasikan di panel kanan hero
const CODE_LINES = [
  { indent: 0, content: 'const nona = {', color: "cream" },
  { indent: 1, content: 'name: "Nonakoding",', color: "warm" },
  { indent: 1, content: 'mission: "Belajar & Berkarya",', color: "warm" },
  { indent: 1, content: 'community: "Perempuan Berdaya",', color: "warm" },
  { indent: 1, content: 'stack: ["Next.js", "TypeScript",', color: "warm" },
  { indent: 2, content: '"Tailwind", "Figma"],', color: "warm" },
  { indent: 1, content: 'open: true,', color: "ember" },
  { indent: 0, content: '};', color: "cream" },
  { indent: 0, content: '', color: "cream" },
  { indent: 0, content: 'export default nona;', color: "ember" },
];

// Cubic bezier untuk animasi spring-like
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Animasi fade-up untuk elemen hero
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT, delay },
  }),
};

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background: subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#F0E8DC 1px, transparent 1px), linear-gradient(to right, #F0E8DC 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Background: ember glow kiri atas */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #D4692A, transparent 70%)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Kiri: teks utama */}
          <div className="max-w-xl">
            {/* Badge komunitas */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-6 inline-flex items-center gap-2"
            >
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                  "border border-[#2E2A26] bg-[#1A1714]",
                  "text-xs font-medium text-[#9A8F83]"
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
                Komunitas Developer Perempuan Indonesia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#F0E8DC] sm:text-5xl md:text-6xl"
            >
              Belajar, Bikin,{" "}
              <span className="relative">
                dan{" "}
                <span className="text-ember">Berkarya</span>
              </span>
              <br />
              di Dunia Koding
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-5 text-base leading-relaxed text-[#9A8F83] sm:text-lg"
            >
              Platform belajar coding yang{" "}
              <em className="not-italic text-[#F0E8DC]">approachable</em>,
              jasa development profesional, dan komunitas yang supportif — semua
              dalam satu brand.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/belajar"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-3 rounded-lg",
                  "bg-ember text-[#F0E8DC] text-sm font-semibold",
                  "hover:bg-ember-dark transition-all duration-200",
                  "shadow-[0_0_24px_rgba(212,105,42,0.35)]",
                  "hover:shadow-[0_0_32px_rgba(212,105,42,0.45)]"
                )}
              >
                Mulai Belajar
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/portfolio"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-3 rounded-lg",
                  "border border-[#2E2A26] bg-[#1A1714]",
                  "text-[#F0E8DC] text-sm font-semibold",
                  "hover:border-[#5C5550] hover:bg-[#221E1A]",
                  "transition-all duration-200"
                )}
              >
                Lihat Portfolio
              </Link>
            </motion.div>

            {/* Social proof kecil */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-8 flex items-center gap-4 text-xs text-[#5C5550]"
            >
              <span className="flex items-center gap-1.5">
                <span className="font-semibold text-[#9A8F83]">50+</span>
                project selesai
              </span>
              <span className="h-3 w-px bg-[#2E2A26]" aria-hidden="true" />
              <span className="flex items-center gap-1.5">
                <span className="font-semibold text-[#9A8F83]">100+</span>
                murid
              </span>
              <span className="h-3 w-px bg-[#2E2A26]" aria-hidden="true" />
              <span className="flex items-center gap-1.5">
                <span className="font-semibold text-[#9A8F83]">3+</span>
                tahun
              </span>
            </motion.div>
          </div>

          {/* Kanan: animated code snippet panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div
              className={cn(
                "relative rounded-xl overflow-hidden",
                "border border-[#2E2A26]",
                "bg-[#1A1714]",
                "shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
              )}
            >
              {/* Window bar */}
              <div className="flex items-center gap-1.5 border-b border-[#2E2A26] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-xs text-[#5C5550] font-mono">
                  nonakoding.ts
                </span>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-sm leading-7">
                {CODE_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.07, duration: 0.3 }}
                    style={{ paddingLeft: `${line.indent * 20}px` }}
                  >
                    {/* Nomor baris */}
                    <span className="mr-4 select-none text-[#2E2A26] text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        color:
                          line.color === "ember"
                            ? "#D4692A"
                            : line.color === "warm"
                            ? "#9A8F83"
                            : "#F0E8DC",
                      }}
                    >
                      {line.content || "\u00A0"}
                    </span>
                  </motion.div>
                ))}

                {/* Kursor berkedip */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                  className="inline-block ml-1 h-4 w-0.5 bg-ember align-middle"
                />
              </div>
            </div>

            {/* Dekorasi floating badge kecil */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className={cn(
                "absolute -bottom-4 -right-4",
                "flex items-center gap-2 px-3 py-2 rounded-lg",
                "border border-[#2E2A26] bg-[#221E1A]",
                "text-xs font-medium text-[#9A8F83]",
                "shadow-lg"
              )}
            >
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Open for projects
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-xs text-[#5C5550]">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#5C5550]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
