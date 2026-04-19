"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/common/container";
import { STATS } from "@/lib/constants";
import { IconWhatsapp } from "@/components/common/social-icons";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function About() {
  return (
    <section className="relative py-14 md:py-24" aria-labelledby="about-heading">
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
            <div className="relative overflow-hidden rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-8 flex flex-col items-center justify-center gap-5">
              <div className="absolute inset-0 opacity-10" style={{
                background: "radial-gradient(circle at 30% 50%, #E5007E, transparent 60%), radial-gradient(circle at 70% 50%, #F572BE, transparent 60%)",
              }} aria-hidden="true" />
              <div className="relative">
                <Image src="/images/logo/nonakoding-logo.png" alt="Nonakoding" width={160} height={40} className="object-contain" />
              </div>
              <p className="relative text-sm text-center text-[var(--c-text-2)]">
                Komunitas perempuan Indonesia di dunia teknologi digital. Bergabung sekarang, gratis!
              </p>
              <a href="https://chat.whatsapp.com/H3L6uQcea6dE2Dia2fo5wr" target="_blank" rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E5007E] text-white text-sm font-semibold hover:bg-[#C4006A] transition-colors duration-200">
                <IconWhatsapp size={15} />
                Gabung Komunitas WhatsApp
              </a>
            </div>

            <div className="flex items-center rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-4">
              {STATS.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, ease: E, delay: i * 0.08 }}
                    className="flex flex-col items-center text-center flex-1">
                    <span className="font-display text-xl font-bold" style={{ color: "#E5007E" }}>{stat.value}</span>
                    <span className="mt-0.5 text-[10px] text-[var(--c-text-2)] leading-tight">{stat.label}</span>
                  </motion.div>
                  {i < STATS.length - 1 && <div className="h-8 w-px bg-[var(--c-border)]" />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
