"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/common/container";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Portfolio() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="portfolio-heading">
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
              Portfolio
            </span>
            <h2
              id="portfolio-heading"
              className="font-display text-3xl font-bold tracking-tight text-[#F0E8DC] sm:text-4xl"
            >
              Karya <span className="text-[#9A8F83]">Terbaru</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-[#9A8F83] hover:text-[#F0E8DC] transition-colors duration-150 group shrink-0"
          >
            Lihat Semua
            <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Grid portfolio */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-xl",
                  "border border-[#2E2A26] bg-[#1A1714]",
                  "transition-all duration-300",
                  "hover:border-[#5C5550] hover:-translate-y-1",
                  "hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                )}
                aria-label={item.title}
              >
                {/* Thumbnail placeholder */}
                <div
                  className="relative h-44 w-full overflow-hidden bg-[#221E1A]"
                  aria-hidden="true"
                >
                  {/* Geometric pattern sebagai placeholder thumbnail */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(circle at 30% 40%, #D4692A 0%, transparent 50%), radial-gradient(circle at 70% 60%, #9A8F83 0%, transparent 50%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-xs text-[#2E2A26]">
                      {String(item.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Hover overlay dengan description */}
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center p-5",
                    "bg-[#0E0C0B]/90 opacity-0",
                    "transition-opacity duration-200 group-hover:opacity-100"
                  )}>
                    <p className="text-center text-sm leading-relaxed text-[#F0E8DC]">
                      {item.description}
                    </p>
                  </div>

                  {/* Icon external link */}
                  <div className={cn(
                    "absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-md",
                    "bg-[#0E0C0B]/80 text-[#9A8F83]",
                    "opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  )}>
                    <ExternalLink size={13} />
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3 p-5">
                  <h3 className="font-display text-sm font-semibold text-[#F0E8DC] leading-snug">
                    {item.title}
                  </h3>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#2E2A26] bg-[#221E1A] px-2 py-0.5 text-xs text-[#9A8F83]"
                      >
                        {tag}
                      </span>
                    ))}
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
