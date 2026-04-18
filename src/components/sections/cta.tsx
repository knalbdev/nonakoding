"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/common/container";
import { IconInstagram } from "@/components/common/social-icons";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CTA() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="cta-heading">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, var(--c-border), transparent)" }} />

      <Container size="narrow">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: E }}
          className="relative overflow-hidden rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] px-8 py-14 text-center md:px-14 md:py-16">

          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #E5007E, transparent 70%)" }} aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(var(--c-border) 1px, transparent 1px), linear-gradient(to right, var(--c-border) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} aria-hidden="true" />

          <div className="relative z-10">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: "#E5007E" }}>
              Bergabung Sekarang
            </span>
            <h2 id="cta-heading" className="font-display text-3xl font-bold tracking-tight text-[var(--c-text)] sm:text-4xl md:text-5xl">
              Siap Mulai Perjalanan{" "}
              <span style={{ color: "#E5007E" }}>Digitalmu?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[var(--c-text-2)]">
              Bergabung bersama ratusan perempuan yang sudah memulai perjalanan mereka di dunia teknologi bersama Nonakoding.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="https://instagram.com/nonakoding" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E5007E] text-white text-sm font-semibold hover:bg-[#C4006A] transition-all duration-200 shadow-[0_0_24px_rgba(229,0,126,0.35)]">
                <IconInstagram size={15} />
                Follow di Instagram
                <ArrowRight size={15} />
              </Link>
              <Link href="mailto:nonakoding@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] text-sm font-semibold hover:border-[var(--c-text-3)] transition-all duration-200">
                <Mail size={15} />
                Hubungi Kami
              </Link>
            </div>
            <p className="mt-6 text-xs text-[var(--c-text-3)]">Gratis · Komunitas supportif · Untuk semua level</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
