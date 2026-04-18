"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="cta-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E2A26] to-transparent" />

      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative overflow-hidden rounded-2xl",
            "border border-[#2E2A26] bg-[#1A1714]",
            "px-8 py-14 text-center md:px-14 md:py-16"
          )}
        >
          {/* Background ember glow */}
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #D4692A, transparent 70%)" }}
            aria-hidden="true"
          />
          {/* Grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#F0E8DC 1px, transparent 1px), linear-gradient(to right, #F0E8DC 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#D4692A]">
              Mulai Sekarang
            </span>

            <h2
              id="cta-heading"
              className="font-display text-3xl font-bold tracking-tight text-[#F0E8DC] sm:text-4xl md:text-5xl"
            >
              Punya ide project?{" "}
              <span className="text-[#9A8F83]">Ayo wujudkan.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[#9A8F83]">
              Konsultasi gratis, tanpa commitment. Ceritakan kebutuhanmu dan kita
              cari solusi terbaik bersama — dari website sederhana sampai aplikasi
              kompleks.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kontak"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
                  "bg-[#D4692A] text-[#F0E8DC] text-sm font-semibold",
                  "hover:bg-[#B85A22] transition-all duration-200",
                  "shadow-[0_0_28px_rgba(212,105,42,0.4)]",
                  "hover:shadow-[0_0_36px_rgba(212,105,42,0.5)]"
                )}
              >
                <Mail size={15} />
                Konsultasi Gratis
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/portfolio"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
                  "border border-[#2E2A26] bg-[#221E1A]",
                  "text-[#F0E8DC] text-sm font-semibold",
                  "hover:border-[#5C5550] transition-all duration-200"
                )}
              >
                Lihat Portfolio Dulu
              </Link>
            </div>

            {/* Trust signals */}
            <p className="mt-6 text-xs text-[#5C5550]">
              Gratis konsultasi · Respon dalam 24 jam · Tanpa biaya tersembunyi
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
