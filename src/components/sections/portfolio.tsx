"use client";

import { motion } from "framer-motion";
import { Zap, GraduationCap, Mic, Users, Heart, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/common/container";
import { PROGRAMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS = { Zap, GraduationCap, Mic, Users, Heart };

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const BADGE_COLORS: Record<string, string> = {
  Gratis: "bg-[#E5007E]/10 text-[#E5007E] border-[#E5007E]/20",
  Populer: "bg-[#F572BE]/10 text-[#F572BE] border-[#F572BE]/20",
};

export function Portfolio() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="programs-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E2A26] to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#E5007E]">
            Program & Aktivitas
          </span>
          <h2 id="programs-heading" className="font-display text-3xl font-bold tracking-tight text-[#F0E8DC] sm:text-4xl">
            Apa yang <span className="text-[#9A8F83]">Kami Tawarkan</span>
          </h2>
          <p className="mt-4 text-base text-[#9A8F83] max-w-xl mx-auto">
            Dari kelas intensif hingga gathering komunitas — semua dirancang untuk mendukung perjalanan digitalmu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, i) => {
            const Icon = ICONS[program.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: i * 0.08 }}
                className={cn(
                  "flex flex-col p-6 rounded-xl",
                  "border border-[#2E2A26] bg-[#1A1714]",
                  "transition-all duration-300",
                  "hover:border-[#E5007E]/30 hover:-translate-y-1",
                  "hover:shadow-[0_8px_32px_rgba(229,0,126,0.08)]"
                )}
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2E2A26] bg-[#221E1A] text-[#E5007E]">
                    <Icon size={18} />
                  </div>
                  {program.badge && (
                    <span className={cn(
                      "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                      BADGE_COLORS[program.badge] ?? "bg-[#2E2A26] text-[#9A8F83] border-[#2E2A26]"
                    )}>
                      {program.badge}
                    </span>
                  )}
                </div>

                <h3 className="mb-2 font-display text-base font-semibold text-[#F0E8DC]">
                  {program.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-[#9A8F83]">
                  {program.overview}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 border-t border-[#2E2A26] pt-4">
                  {program.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-[#9A8F83]">
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#E5007E]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
