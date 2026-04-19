"use client";

import { motion } from "framer-motion";
import { Code2, Palette, BrainCircuit } from "lucide-react";
import { Container } from "@/components/common/container";
import { LEARNING_PATHS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function FigmaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8C5.792 16 4 14.208 4 12z"/>
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
    </svg>
  );
}

const ICONS = { Code2, Palette, Figma: FigmaIcon, BrainCircuit };
const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Pillars() {
  return (
    <section className="relative py-14 md:py-24" aria-labelledby="paths-heading">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, var(--c-border), transparent)" }} />

      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: E }} className="mb-14 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: "#E5007E" }}>
            Spesialisasi
          </span>
          <h2 id="paths-heading" className="font-display text-3xl font-bold tracking-tight text-[var(--c-text)] sm:text-4xl">
            Pilih Jalur <span className="text-[var(--c-text-2)]">Belajarmu</span>
          </h2>
          <p className="mt-4 text-base text-[var(--c-text-2)] max-w-xl mx-auto">
            Empat spesialisasi yang dirancang untuk membawamu dari pemula hingga siap berkarya di industri digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {LEARNING_PATHS.map((path, i) => {
            const Icon = ICONS[path.icon as keyof typeof ICONS];
            return (
              <motion.div key={path.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: E, delay: i * 0.1 }}
                className={cn(
                  "group relative overflow-hidden flex flex-col p-7 rounded-xl",
                  "border border-[var(--c-border)] bg-[var(--c-surface)]",
                  "transition-all duration-300 hover:-translate-y-1",
                  "hover:shadow-[0_12px_32px_rgba(229,0,126,0.12)] hover:border-[rgba(229,0,126,0.25)]"
                )}
                style={{ ["--hover-border" as string]: path.color }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ background: `linear-gradient(to right, ${path.color}, transparent)` }} />
                {"badge" in path && path.badge ? (
                  <span className="absolute top-5 right-5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-[#A855F7] text-white">
                    {path.badge}
                  </span>
                ) : (
                  <span className="absolute top-6 right-6 font-mono text-xs text-[var(--c-text-3)] select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)]"
                  style={{ color: path.color }}>
                  <Icon size={20} />
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold text-[var(--c-text)]">{path.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--c-text-2)]">{path.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
