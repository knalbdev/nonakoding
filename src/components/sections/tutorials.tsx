"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Container } from "@/components/common/container";
import { TUTORIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Warna kategori
const CATEGORY_COLORS: Record<string, string> = {
  Pemula: "bg-[#D4692A]/10 text-[#D4692A] border-[#D4692A]/20",
  CSS: "bg-[#9A8F83]/10 text-[#9A8F83] border-[#9A8F83]/20",
  "Next.js": "bg-[#F0E8DC]/10 text-[#F0E8DC] border-[#F0E8DC]/20",
};

export function Tutorials() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="tutorials-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E2A26] to-transparent" />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#D4692A]">
              Belajar
            </span>
            <h2
              id="tutorials-heading"
              className="font-display text-3xl font-bold tracking-tight text-[#F0E8DC] sm:text-4xl"
            >
              Belajar <span className="text-[#9A8F83]">Bareng</span>
            </h2>
            <p className="mt-3 text-base text-[#9A8F83]">
              Tutorial praktis dari dasar sampai mahir — ditulis dengan bahasa yang manusia banget.
            </p>
          </div>
          <Link
            href="/belajar"
            className="inline-flex items-center gap-1.5 text-sm text-[#9A8F83] hover:text-[#F0E8DC] transition-colors duration-150 group shrink-0"
          >
            Semua Tutorial
            <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TUTORIALS.map((tutorial, i) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <Link
                href={tutorial.href}
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-xl",
                  "border border-[#2E2A26] bg-[#1A1714]",
                  "transition-all duration-300",
                  "hover:border-[#5C5550] hover:-translate-y-1",
                  "hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                )}
              >
                {/* Thumbnail placeholder */}
                <div
                  className="relative h-40 w-full overflow-hidden bg-[#221E1A]"
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: `radial-gradient(circle at ${20 + i * 25}% 50%, #D4692A 0%, transparent 55%)`,
                    }}
                  />
                  {/* Kategori badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={cn(
                        "rounded-md border px-2 py-0.5 text-xs font-medium",
                        CATEGORY_COLORS[tutorial.category] ?? "bg-[#2E2A26] text-[#9A8F83] border-[#2E2A26]"
                      )}
                    >
                      {tutorial.category}
                    </span>
                  </div>
                </div>

                {/* Konten */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-display text-sm font-semibold leading-snug text-[#F0E8DC] group-hover:text-[#D4692A] transition-colors duration-150">
                    {tutorial.title}
                  </h3>
                  <p className="flex-1 text-xs leading-relaxed text-[#9A8F83]">
                    {tutorial.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 pt-1 text-xs text-[#5C5550]">
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {tutorial.readTime}
                    </span>
                    <span className="h-3 w-px bg-[#2E2A26]" aria-hidden="true" />
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {tutorial.date}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
