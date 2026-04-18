"use client";

import { motion } from "framer-motion";
import { Zap, GraduationCap, Mic, Users, Heart, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/common/container";
import { PROGRAMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS = { Zap, GraduationCap, Mic, Users, Heart };
const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

const BADGE: Record<string, string> = {
  Gratis: "bg-[rgba(229,0,126,0.08)] text-[#E5007E] border-[rgba(229,0,126,0.2)]",
  Populer: "bg-[rgba(245,114,190,0.1)] text-[#C4006A] border-[rgba(196,0,106,0.2)]",
};

export function EventsContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center" aria-label="Events hero">
        <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full opacity-[0.07] blur-3xl -z-10"
          style={{ background: "radial-gradient(circle, #E5007E, transparent 70%)" }} aria-hidden="true" />
        <Container size="narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: E }}>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: "#E5007E" }}>
              Program & Aktivitas
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-[var(--c-text)] sm:text-5xl">
              Events <span style={{ color: "#E5007E" }}>Nonakoding</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--c-text-2)]">
              Dari kelas intensif hingga gathering komunitas — semua dirancang untuk mendukung perjalanan digitalmu bersama perempuan-perempuan hebat lainnya.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-20" aria-label="Daftar program">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((program, i) => {
              const Icon = ICONS[program.icon as keyof typeof ICONS];
              return (
                <motion.div
                  key={program.id}
                  id={program.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: E, delay: i * 0.08 }}
                  className={cn(
                    "flex flex-col p-6 rounded-xl",
                    "border border-[var(--c-border)] bg-[var(--c-surface)]",
                    "transition-all duration-300 hover:-translate-y-1",
                    "hover:shadow-[0_8px_24px_rgba(229,0,126,0.08)]"
                  )}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)]" style={{ color: "#E5007E" }}>
                      <Icon size={18} />
                    </div>
                    {program.badge && (
                      <span className={cn("rounded-full border px-2.5 py-0.5 text-xs font-medium", BADGE[program.badge])}>
                        {program.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="mb-2 font-display text-lg font-semibold text-[var(--c-text)]">{program.title}</h2>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--c-text-2)]">{program.overview}</p>
                  <ul className="space-y-2 border-t border-[var(--c-border)] pt-4">
                    {program.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-[var(--c-text-2)]">
                        <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: "#E5007E" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* CTA daftar */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: E }}
            className="mt-16 text-center p-10 rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)]">
            <h2 className="font-display text-2xl font-bold text-[var(--c-text)]">
              Tertarik bergabung?
            </h2>
            <p className="mt-3 text-sm text-[var(--c-text-2)]">
              Follow Instagram kami untuk info pendaftaran dan update program terbaru.
            </p>
            <a href="https://instagram.com/nonakoding" target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E5007E] text-white text-sm font-semibold hover:bg-[#C4006A] transition-colors duration-200">
              @nonakoding di Instagram
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
