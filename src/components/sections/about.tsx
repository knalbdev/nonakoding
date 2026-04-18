"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/container";
import { STATS } from "@/lib/constants";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function About() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="about-heading">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, var(--c-border), transparent)" }} />

      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: E }}>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: "#E5007E" }}>
              Tentang Kami
            </span>
            <h2 id="about-heading" className="font-display text-3xl font-bold tracking-tight text-[var(--c-text)] sm:text-4xl">
              Perempuan Berdaya{" "}
              <span className="text-[var(--c-text-2)]">di Dunia Digital</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--c-text-2)]">
              <p>
                Nonakoding adalah komunitas yang didedikasikan untuk membantu perempuan belajar teknologi — mulai dari software development, graphic design, hingga UI/UX design.
              </p>
              <p>
                Kami percaya bahwa{" "}
                <span className="text-[var(--c-text)] font-medium">setiap perempuan berhak untuk unjuk kemampuan di dunia digital</span>.
                Tidak perlu latar belakang teknis untuk memulai — yang dibutuhkan hanyalah keberanian dan komunitas yang mendukung.
              </p>
              <p>
                Melalui berbagai program belajar dan kegiatan komunitas,{" "}
                <span style={{ color: "#E5007E" }}>Nonakoding hadir sebagai ruang aman</span>{" "}
                bagi perempuan untuk bertumbuh, berkarya, dan saling menginspirasi.
              </p>
            </div>
            <div className="mt-8 border-l-2 pl-4" style={{ borderColor: "#E5007E" }}>
              <p className="text-sm italic text-[var(--c-text-2)]">
                "Yuk mulai perjalananmu bersama kami! 🚀"
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: E, delay: 0.1 }}
            className="flex flex-col gap-5">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] flex items-center justify-center h-48" aria-hidden="true">
              <div className="absolute inset-0 opacity-10" style={{
                background: "radial-gradient(circle at 30% 50%, #E5007E, transparent 60%), radial-gradient(circle at 70% 50%, #F572BE, transparent 60%)",
              }} />
              <div className="relative text-center">
                <p className="font-display text-lg font-bold" style={{ color: "#E5007E" }}>nonakoding</p>
                <p className="mt-1 text-xs text-[var(--c-text-3)]">Empowering Women in Tech</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, ease: E, delay: i * 0.08 }}
                  className="flex flex-col p-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                  <span className="font-display text-2xl font-bold" style={{ color: "#E5007E" }}>{stat.value}</span>
                  <span className="mt-0.5 text-xs text-[var(--c-text-2)]">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
