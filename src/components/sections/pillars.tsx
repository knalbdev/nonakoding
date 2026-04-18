"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, Layers, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/container";
import { PILLARS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS = { BookOpen, Briefcase, Layers };

// Warna accent per pilar — biar ada variasi visual
const PILLAR_ACCENTS = [
  { border: "hover:border-[#D4692A]", glow: "hover:shadow-[0_0_32px_rgba(212,105,42,0.12)]", icon: "text-[#D4692A]", tag: "bg-[#D4692A]/10 text-[#D4692A]" },
  { border: "hover:border-[#9A8F83]", glow: "hover:shadow-[0_0_32px_rgba(154,143,131,0.12)]", icon: "text-[#9A8F83]", tag: "bg-[#9A8F83]/10 text-[#9A8F83]" },
  { border: "hover:border-[#D4692A]", glow: "hover:shadow-[0_0_32px_rgba(212,105,42,0.08)]", icon: "text-[#D4692A]", tag: "bg-[#D4692A]/10 text-[#D4692A]" },
];

const PILLAR_NUMBERS = ["01", "02", "03"];

export function Pillars() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="pillars-heading">
      {/* Divider atas */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E2A26] to-transparent" />

      <Container>
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-xl"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#D4692A]">
            Apa yang Aku Tawarkan
          </span>
          <h2
            id="pillars-heading"
            className="font-display text-3xl font-bold tracking-tight text-[#F0E8DC] sm:text-4xl"
          >
            Tiga Pilar{" "}
            <span className="text-[#9A8F83]">Nonakoding</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#9A8F83]">
            Bukan sekadar tutorial, bukan sekadar jasa. Nonakoding hadir sebagai
            ekosistem lengkap untuk belajar, berkarya, dan bertumbuh.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = ICONS[pillar.icon as keyof typeof ICONS];
            const accent = PILLAR_ACCENTS[i];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <Link
                  href={pillar.href}
                  className={cn(
                    "group relative flex h-full flex-col p-7 rounded-xl",
                    "border border-[#2E2A26] bg-[#1A1714]",
                    "transition-all duration-300",
                    accent.border,
                    accent.glow,
                    "hover:-translate-y-1"
                  )}
                  aria-label={pillar.title}
                >
                  {/* Nomor pilar */}
                  <span className="absolute top-6 right-6 font-mono text-xs text-[#2E2A26] select-none">
                    {PILLAR_NUMBERS[i]}
                  </span>

                  {/* Icon */}
                  <div
                    className={cn(
                      "mb-5 flex h-11 w-11 items-center justify-center rounded-lg",
                      "border border-[#2E2A26] bg-[#221E1A]",
                      "transition-colors duration-200",
                      accent.icon
                    )}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </div>

                  {/* Konten */}
                  <h3 className="mb-3 font-display text-lg font-semibold text-[#F0E8DC]">
                    {pillar.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-[#9A8F83]">
                    {pillar.description}
                  </p>

                  {/* CTA link */}
                  <div
                    className={cn(
                      "mt-6 inline-flex items-center gap-1.5 text-sm font-medium",
                      accent.icon,
                      "transition-gap duration-200"
                    )}
                  >
                    {pillar.cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
