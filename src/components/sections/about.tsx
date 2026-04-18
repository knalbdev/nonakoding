"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/container";
import { STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function About() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="about-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E2A26] to-transparent" />

      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* Kiri: teks misi */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#E5007E]">
              Tentang Kami
            </span>
            <h2 id="about-heading" className="font-display text-3xl font-bold tracking-tight text-[#F0E8DC] sm:text-4xl">
              Perempuan Berdaya{" "}
              <span className="text-[#9A8F83]">di Dunia Digital</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#9A8F83]">
              <p>
                Nonakoding adalah organisasi yang didedikasikan untuk membantu
                perempuan belajar teknologi — mulai dari pemrograman, pengembangan
                aplikasi, hingga desain.
              </p>
              <p>
                Kami percaya bahwa{" "}
                <span className="text-[#F0E8DC]">setiap perempuan berhak untuk unjuk kemampuan di dunia digital</span>.
                Tidak perlu latar belakang teknis untuk memulai — yang dibutuhkan
                hanyalah keberanian dan komunitas yang mendukung.
              </p>
              <p>
                Melalui berbagai program belajar dan kegiatan komunitas,{" "}
                <span className="text-[#E5007E]">Nonakoding hadir sebagai ruang aman</span>{" "}
                bagi perempuan untuk bertumbuh, berkarya, dan saling menginspirasi
                di bidang teknologi.
              </p>
            </div>

            {/* Quote/tagline */}
            <div className="mt-8 border-l-2 border-[#E5007E] pl-4">
              <p className="text-sm italic text-[#9A8F83]">
                "Yuk mulai perjalananmu bersama kami! 🚀"
              </p>
            </div>
          </motion.div>

          {/* Kanan: stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Visual placeholder */}
            <div className={cn(
              "relative overflow-hidden rounded-2xl border border-[#2E2A26] bg-[#1A1714]",
              "flex items-center justify-center",
              "h-48"
            )} aria-hidden="true">
              <div className="absolute inset-0 opacity-10" style={{
                background: "radial-gradient(circle at 30% 50%, #E5007E, transparent 60%), radial-gradient(circle at 70% 50%, #F572BE, transparent 60%)",
              }} />
              <div className="relative text-center">
                <p className="font-display text-lg font-bold text-[#E5007E]">nonakoding</p>
                <p className="mt-1 text-xs text-[#5C5550]">Empowering Women in Tech</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE_OUT, delay: i * 0.08 }}
                  className="flex flex-col p-4 rounded-xl border border-[#2E2A26] bg-[#1A1714]"
                >
                  <span className="font-display text-2xl font-bold text-[#E5007E]">{stat.value}</span>
                  <span className="mt-0.5 text-xs text-[#9A8F83]">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
