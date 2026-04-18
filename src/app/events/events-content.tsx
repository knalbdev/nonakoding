"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, GraduationCap, Mic, Users, Heart, ChevronDown, CheckCircle2 } from "lucide-react";
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
  const [openId, setOpenId] = useState<string | null>(PROGRAMS[0].id);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center" aria-label="Events hero">
        <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full opacity-[0.07] blur-3xl -z-10"
          style={{ background: "radial-gradient(circle, #E5007E, transparent 70%)" }} aria-hidden="true" />
        <Container size="narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: E }}>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: "#E5007E" }}>
              Program &amp; Aktivitas
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-[var(--c-text)] sm:text-5xl">
              Event <span style={{ color: "#E5007E" }}>Nonakoding</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--c-text-2)]">
              Dari kelas intensif hingga gathering komunitas — semua dirancang untuk mendukung perjalanan digitalmu bersama perempuan-perempuan hebat lainnya.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Accordion */}
      <section className="py-12 md:py-16" aria-label="Daftar program">
        <Container size="narrow">
          <div className="flex flex-col gap-3">
            {PROGRAMS.map((program, i) => {
              const Icon = ICONS[program.icon as keyof typeof ICONS];
              const isOpen = openId === program.id;

              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: E, delay: i * 0.06 }}
                  className={cn(
                    "rounded-xl border bg-[var(--c-surface)] overflow-hidden transition-colors duration-200",
                    isOpen ? "border-[#E5007E]/30" : "border-[var(--c-border)]"
                  )}
                >
                  {/* Header */}
                  <button
                    onClick={() => toggle(program.id)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200",
                      isOpen
                        ? "border-[#E5007E]/30 bg-[rgba(229,0,126,0.06)] text-[#E5007E]"
                        : "border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text-3)]"
                    )}>
                      <Icon size={18} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-base font-semibold text-[var(--c-text)]">
                          {program.title}
                        </span>
                        {program.badge && (
                          <span className={cn("rounded-full border px-2.5 py-0.5 text-xs font-medium", BADGE[program.badge])}>
                            {program.badge}
                          </span>
                        )}
                      </div>
                      {!isOpen && (
                        <p className="mt-0.5 text-sm text-[var(--c-text-3)] truncate">{program.overview}</p>
                      )}
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-[var(--c-text-3)]"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  {/* Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: E }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="h-px mb-4" style={{ background: "linear-gradient(to right, rgba(229,0,126,0.2), transparent)" }} />
                          <p className="text-sm leading-relaxed text-[var(--c-text-2)] mb-5">
                            {program.overview}
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {program.benefits.map((b) => (
                              <li key={b} className="flex items-start gap-2 text-sm text-[var(--c-text-2)]">
                                <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: "#E5007E" }} />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: E }}
            className="mt-12 text-center p-10 rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)]"
          >
            <h2 className="font-display text-2xl font-bold text-[var(--c-text)]">
              Tertarik bergabung?
            </h2>
            <p className="mt-3 text-sm text-[var(--c-text-2)]">
              Follow Instagram kami untuk info pendaftaran dan update program terbaru.
            </p>
            <a
              href="https://instagram.com/nonakoding"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E5007E] text-white text-sm font-semibold hover:bg-[#C4006A] transition-colors duration-200"
            >
              @nonakoding di Instagram
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
