"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/container";
import { STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="about-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E2A26] to-transparent" />

      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* Kiri: teks */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#D4692A]">
              Kenapa Nonakoding?
            </span>
            <h2
              id="about-heading"
              className="font-display text-3xl font-bold tracking-tight text-[#F0E8DC] sm:text-4xl"
            >
              Lebih dari Sekadar{" "}
              <span className="text-[#9A8F83]">Tutorial</span>
            </h2>

            <div className="mt-6 space-y-4 text-[#9A8F83] text-base leading-relaxed">
              <p>
                Nonakoding lahir dari keyakinan bahwa belajar coding seharusnya
                tidak mengintimidasi — terutama bagi perempuan yang ingin masuk
                dunia teknologi. Aku percaya setiap orang punya potensi untuk
                membangun sesuatu yang bermakna dengan kode.
              </p>
              <p>
                Di sini, kamu bisa belajar web development dari nol dengan
                pendekatan yang{" "}
                <span className="text-[#F0E8DC]">praktis dan terstruktur</span>.
                Tidak ada jargon berlebihan, tidak ada asumsi pengetahuan awal
                yang bikin frustrasi.
              </p>
              <p>
                Selain konten edukasi, aku juga menerima proyek pembuatan website
                dan aplikasi untuk klien — dari UMKM yang ingin hadir secara
                online, hingga startup yang butuh{" "}
                <span className="text-[#F0E8DC]">produk digital berkualitas</span>{" "}
                tanpa biaya agensi besar.
              </p>
              <p>
                Dan yang paling aku banggakan:{" "}
                <span className="text-[#D4692A]">komunitas developer perempuan</span>{" "}
                yang supportif, saling mengangkat, dan terus bertumbuh bersama.
              </p>
            </div>
          </motion.div>

          {/* Kanan: avatar placeholder + stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Avatar placeholder */}
            <div
              className={cn(
                "relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl",
                "border border-[#2E2A26] bg-[#1A1714]",
                "aspect-square"
              )}
              aria-label="Foto profil Nonakoding"
            >
              {/* Geometric placeholder — diganti foto asli nanti */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Lingkaran dekoratif */}
                  <div className="h-32 w-32 rounded-full border-2 border-[#2E2A26] flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-[#221E1A] border border-[#D4692A]/30 flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-[#D4692A]">N</span>
                    </div>
                  </div>
                  {/* Titik dekorasi */}
                  <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-[#D4692A] opacity-60" />
                  <div className="absolute -bottom-3 -left-3 h-3 w-3 rounded-full border border-[#D4692A] opacity-40" />
                </div>
              </div>
              {/* Label placeholder */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-xs text-[#5C5550]">Foto akan ditambahkan</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={cn(
                    "flex flex-col p-4 rounded-xl",
                    "border border-[#2E2A26] bg-[#1A1714]"
                  )}
                >
                  <span className="font-display text-2xl font-bold text-[#D4692A]">
                    {stat.value}
                  </span>
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
