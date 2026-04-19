"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, GraduationCap, Mic, Users, Heart, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/container";
import { PROGRAMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS = { Zap, GraduationCap, Mic, Users, Heart };
const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

const BADGE: Record<string, string> = {
  Gratis: "bg-[rgba(229,0,126,0.08)] text-[#E5007E] border-[rgba(229,0,126,0.2)]",
  Populer: "bg-[rgba(245,114,190,0.1)] text-[#C4006A] border-[rgba(196,0,106,0.2)]",
};

export function Portfolio() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="programs-heading">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, var(--c-border), transparent)" }} />

      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: E }} className="mb-14 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: "#E5007E" }}>
            Program & Aktivitas
          </span>
          <h2 id="programs-heading" className="font-display text-3xl font-bold tracking-tight text-[var(--c-text)] sm:text-4xl">
            Apa yang <span className="text-[var(--c-text-2)]">Kami Tawarkan</span>
          </h2>
          <p className="mt-4 text-base text-[var(--c-text-2)] max-w-xl mx-auto">
            Dari kelas intensif hingga gathering komunitas — semua dirancang untuk mendukung perjalanan digitalmu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PROGRAMS.slice(0, 3).map((program, i) => {
            const Icon = ICONS[program.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: E, delay: i * 0.07 }}
                className={cn(
                  "relative overflow-hidden flex flex-col p-5 rounded-xl",
                  "border border-[var(--c-border)] bg-[var(--c-surface)]",
                  "transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(229,0,126,0.25)] hover:shadow-[0_12px_32px_rgba(229,0,126,0.12)]"
                )}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(to right, #E5007E, #F572BE)" }} />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)]"
                    style={{ color: "#E5007E" }}>
                    <Icon size={18} />
                  </div>
                  {program.badge && (
                    <span className={cn("rounded-full border px-2.5 py-0.5 text-[10px] font-medium", BADGE[program.badge])}>
                      {program.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-sm font-semibold text-[var(--c-text)] mb-1">{program.title}</h3>
                {"tagline" in program && <p className="text-sm leading-relaxed text-[var(--c-text-2)]">{program.tagline as string}</p>}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: E, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-sm font-medium text-[var(--c-text)] hover:border-[#E5007E] hover:text-[#E5007E] transition-colors duration-200"
          >
            Lihat semua program <ArrowRight size={15} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
