"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/container";
import { STATS, LEARNING_PATHS } from "@/lib/constants";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center" aria-label="About hero">
        <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full opacity-[0.07] blur-3xl -z-10"
          style={{ background: "radial-gradient(circle, #E5007E, transparent 70%)" }} aria-hidden="true" />
        <Container size="narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: E }}>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: "#E5007E" }}>
              Tentang Kami
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-[var(--c-text)] sm:text-5xl">
              Kami adalah <span style={{ color: "#E5007E" }}>Nonakoding</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--c-text-2)]">
              Komunitas yang percaya setiap perempuan berhak untuk unjuk kemampuan di dunia digital.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Misi */}
      <section className="py-16" aria-label="Misi">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, var(--c-border), transparent)" }} />
        <Container className="py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease: E }}>
              <h2 className="font-display text-2xl font-bold text-[var(--c-text)] sm:text-3xl">
                Misi Kami
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--c-text-2)]">
                <p>
                  Nonakoding lahir dari keyakinan bahwa representasi perempuan di dunia teknologi masih perlu ditingkatkan. Kami hadir untuk menjembatani kesenjangan itu dengan cara yang supportif dan inklusif.
                </p>
                <p>
                  Bukan hanya tentang belajar coding — kami membangun ekosistem di mana perempuan bisa bertumbuh sebagai <span className="text-[var(--c-text)] font-medium">Software Developer</span>,{" "}
                  <span className="text-[var(--c-text)] font-medium">Graphic Designer</span>, maupun{" "}
                  <span className="text-[var(--c-text)] font-medium">UI/UX Designer</span> yang kompeten dan percaya diri.
                </p>
                <p>
                  Semua program kami dirancang dengan pendekatan yang approachable — tidak ada pertanyaan bodoh, tidak ada yang tertinggal.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease: E, delay: 0.1 }}
              className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col p-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                  <span className="font-display text-3xl font-bold" style={{ color: "#E5007E" }}>{stat.value}</span>
                  <span className="mt-1 text-sm text-[var(--c-text-2)]">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, var(--c-border), transparent)" }} />
      </section>

      {/* 3 Spesialisasi */}
      <section className="py-16" aria-label="Spesialisasi">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: E }} className="mb-10 text-center">
            <h2 className="font-display text-2xl font-bold text-[var(--c-text)] sm:text-3xl">
              3 Bidang Spesialisasi
            </h2>
            <p className="mt-3 text-base text-[var(--c-text-2)]">
              Fokus pada tiga jalur karier digital yang paling dibutuhkan industri saat ini.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {LEARNING_PATHS.map((path, i) => (
              <motion.div key={path.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, ease: E, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                <div className="mb-3 h-1 w-8 rounded-full" style={{ backgroundColor: path.color }} />
                <h3 className="font-display text-base font-semibold text-[var(--c-text)]">{path.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--c-text-2)]">{path.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" aria-label="CTA">
        <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, var(--c-border), transparent)" }} />
        <Container size="narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: E }}>
            <h2 className="font-display text-2xl font-bold text-[var(--c-text)]">
              Mau ikut bergabung?
            </h2>
            <p className="mt-3 text-base text-[var(--c-text-2)]">
              Cek program kami atau langsung hubungi via email.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link href="/events" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E5007E] text-white text-sm font-semibold hover:bg-[#C4006A] transition-colors duration-200">
                Lihat Events <ArrowRight size={14} />
              </Link>
              <Link href="mailto:nonakoding@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] text-sm font-semibold hover:border-[var(--c-text-3)] transition-colors duration-200">
                nonakoding@gmail.com
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
