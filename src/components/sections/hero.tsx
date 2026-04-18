"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/common/container";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero section">
      {/* Grid bg */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(var(--c-border) 1px, transparent 1px), linear-gradient(to right, var(--c-border) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} aria-hidden="true" />
      {/* Pink glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #E5007E, transparent 70%)" }} aria-hidden="true" />

      <Container className="relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: E }} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--c-border)] bg-[var(--c-surface)] text-xs font-medium text-[var(--c-text-2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E5007E] animate-pulse" />
              Women Power Course
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: E, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[var(--c-text)] sm:text-5xl md:text-6xl">
            Selamat Datang di{" "}
            <span style={{ color: "#E5007E" }}>Nonakoding!</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: E, delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-[var(--c-text-2)] sm:text-lg max-w-2xl">
            Kami percaya{" "}
            <span className="text-[var(--c-text)] font-medium">setiap perempuan berhak untuk unjuk kemampuan di dunia digital</span>.
            Yuk mulai perjalananmu bersama kami! 🚀
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: E, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E5007E] text-white text-sm font-semibold hover:bg-[#C4006A] transition-all duration-200 shadow-[0_0_24px_rgba(229,0,126,0.35)]">
              Mulai Perjalananmu <ArrowRight size={15} />
            </Link>
            <Link href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] text-sm font-semibold hover:border-[var(--c-text-3)] transition-all duration-200">
              Kenali Kami
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: E, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--c-text-3)]">
            {[
              { value: "500+", label: "Member Aktif" },
              { value: "50+", label: "Program Selesai" },
              { value: "3+", label: "Tahun Berdiri" },
            ].map((s, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="font-semibold" style={{ color: "#E5007E" }}>{s.value}</span>
                {s.label}
                {i < 2 && <span className="ml-6 h-3 w-px bg-[var(--c-border)]" aria-hidden="true" />}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5" aria-hidden="true">
        <span className="text-xs text-[var(--c-text-3)]">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <ChevronDown size={16} className="text-[var(--c-text-3)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
