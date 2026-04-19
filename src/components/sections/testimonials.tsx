"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/container";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

const TESTIMONIALS = [
  {
    name: "Bunga Sari",
    role: "Peserta Mini Class",
    quote: "Pengalaman ikut Mini Class UI/UX di Nonakoding benar-benar seru dan berkesan! Materinya dibawakan dengan santai tapi tetap berbobot, jadi mudah dipahami bahkan buat pemula. Dari mini class ini aku jadi lebih paham pentingnya user experience dalam desain. Recommended banget!",
    initials: "BS",
  },
  {
    name: "Inas Wafiyah",
    role: "Peserta Expert Talks",
    quote: "Pengalamannya sangat bermanfaat. Banyak insight baru tentang dunia kerja di bidang coding, apalagi penjelasan dari Nonakoding mudah dipahami dan aplikatif.",
    initials: "IW",
  },
  {
    name: "Athiyah Humaira Khairani",
    role: "Peserta Expert Talks",
    quote: "Seru dan bermanfaat! Materinya jelas, praktis, dan nambah insight soal dunia teknologi dan kerja. Bisa tanya langsung juga, jadi makin dapet gambaran dunia industri tech.",
    initials: "AH",
  },
  {
    name: "Nisrina Asad Alkatiri",
    role: "Peserta Expert Talks",
    quote: "Pengalaman expert talk ini bener-bener insightful dan inspiratif. Materinya dibawain dengan cara yang ringan tapi tetap deep, jadi mudah dipahami, apalagi buat pelajar atau pemula yang lagi mulai terjun ke dunia coding.",
    initials: "NA",
  },
  {
    name: "Raisa Amanda Utami",
    role: "Peserta Expert Talks",
    quote: "Seru banget! Sangat insightful, dan tips dari kakaknya berguna banget buat yang mau mulai belajar IT ataupun yang mau mulai personal branding. Aku jadi tau cara bikin profil LinkedIn biar makin eye-catching!",
    initials: "RA",
  },
  {
    name: "Hilwa Ilham",
    role: "Peserta Expert Talks",
    quote: "Seru banget! Awalnya aku mikir IT itu isinya cuma ngoding doang, tapi ternyata lewat Expert Talk ini aku jadi sadar kalau ada banyak banget peran lain yang bisa dijelajahi. Jadi makin terbuka mataku dan lebih pede buat nyoba.",
    initials: "HI",
  },
];

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="relative overflow-hidden flex flex-col w-[320px] shrink-0 p-6 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(229,0,126,0.12)] hover:border-[rgba(229,0,126,0.25)]">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(to right, #E5007E, #F572BE)" }} />
      <span className="mb-3 text-4xl leading-none font-display" style={{ color: "#E5007E" }}>"</span>
      <p className="flex-1 text-sm leading-relaxed text-[var(--c-text-2)]">{t.quote}</p>
      <div className="mt-5 flex items-center gap-3 border-t border-[var(--c-border)] pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ background: "linear-gradient(135deg, #E5007E, #F572BE)" }}>
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--c-text)]">{t.name}</p>
          <p className="text-xs text-[var(--c-text-3)]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, var(--c-border), transparent)" }} />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: E }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: "#E5007E" }}>
            Testimoni
          </span>
          <h2 id="testimonials-heading" className="font-display text-3xl font-bold tracking-tight text-[var(--c-text)] sm:text-4xl">
            Kata Mereka yang Sudah <span style={{ color: "#E5007E" }}>Bergabung</span>
          </h2>
          <p className="mt-4 text-base text-[var(--c-text-2)] max-w-xl mx-auto">
            Pengalaman nyata dari perempuan-perempuan yang sudah memulai perjalanan digitalnya bersama Nonakoding.
          </p>
        </motion.div>
      </Container>

      {/* Marquee */}
      <div className="relative group">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, var(--c-bg), transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, var(--c-bg), transparent)" }} />

        <div className="flex gap-5 w-max group-hover:[animation-play-state:paused]"
          style={{ animation: "marquee 30s linear infinite" }}>
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
