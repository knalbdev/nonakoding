"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/container";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="testimonials-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E2A26] to-transparent" />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-xl"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#D4692A]">
            Testimoni
          </span>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl font-bold tracking-tight text-[#F0E8DC] sm:text-4xl"
          >
            Kata Mereka <span className="text-[#9A8F83]">yang Sudah</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className={cn(
                "flex flex-col gap-5 rounded-xl p-6",
                "border border-[#2E2A26] bg-[#1A1714]"
              )}
            >
              {/* Quote mark dekoratif */}
              <span
                className="font-display text-5xl font-bold leading-none text-[#2E2A26] select-none"
                aria-hidden="true"
              >
                "
              </span>

              {/* Quote */}
              <blockquote className="flex-1 text-sm leading-relaxed text-[#9A8F83]">
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[#2E2A26] pt-4">
                {/* Avatar placeholder */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#221E1A] border border-[#2E2A26]"
                  aria-hidden="true"
                >
                  <span className="font-display text-sm font-bold text-[#D4692A]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F0E8DC]">{t.name}</p>
                  <p className="text-xs text-[#5C5550]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
