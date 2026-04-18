"use client";

import { motion } from "framer-motion";
import { Smartphone, Palette } from "lucide-react";
import { Container } from "@/components/common/container";
import { LEARNING_PATHS } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Figma icon (tidak ada di lucide, pakai SVG inline)
function FigmaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
    </svg>
  );
}

const ICONS = {
  Smartphone,
  Figma: FigmaIcon,
  Palette,
};

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Pillars() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="paths-heading">
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
            Learning Paths
          </span>
          <h2 id="paths-heading" className="font-display text-3xl font-bold tracking-tight text-[#F0E8DC] sm:text-4xl">
            Pilih Jalur <span className="text-[#9A8F83]">Belajarmu</span>
          </h2>
          <p className="mt-4 text-base text-[#9A8F83] max-w-xl mx-auto">
            Tiga jalur belajar yang dirancang khusus untuk membawamu dari pemula hingga siap berkarya di industri digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {LEARNING_PATHS.map((path, i) => {
            const Icon = ICONS[path.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: i * 0.1 }}
                className={cn(
                  "group relative flex flex-col p-7 rounded-xl",
                  "border border-[#2E2A26] bg-[#1A1714]",
                  "transition-all duration-300",
                  "hover:-translate-y-1 hover:border-[#E5007E]/40",
                  "hover:shadow-[0_0_32px_rgba(229,0,126,0.08)]"
                )}
              >
                <span className="absolute top-6 right-6 font-mono text-xs text-[#2E2A26] select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#2E2A26] bg-[#221E1A]"
                  style={{ color: path.color }}>
                  <Icon size={20} />
                </div>

                <h3 className="mb-3 font-display text-lg font-semibold text-[#F0E8DC]">
                  {path.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#9A8F83]">
                  {path.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
