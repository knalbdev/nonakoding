"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/container";
import { STATS, LEARNING_PATHS } from "@/lib/constants";
import { useState } from "react";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

const TEAM = [
  { name: "Setianing Budi", role: "Nona Founder", photo: "/images/mentors/setianing.png", linkedin: "https://www.linkedin.com/in/setianingbudi/" },
  { name: "Mane Mint Dahi", role: "Nona Mentor", photo: "/images/mentors/mane.png", linkedin: "https://www.linkedin.com/in/mane-mint-dahi/" },
  { name: "Anisa Azhar", role: "Nona Creative", photo: "/images/mentors/anisa.png", linkedin: "https://www.linkedin.com/in/anisahnurulazhar/" },
  { name: "Rosalina Saputri", role: "Nona Mentor", photo: "/images/mentors/rosalina.png", linkedin: "https://www.linkedin.com/in/profile-rosalina-saputri-08569220a/" },
];

function TeamCard({ member, delay }: { member: typeof TEAM[0]; delay: number }) {
  const [imgError, setImgError] = useState(false);
  const initials = member.name.split(" ").map(n => n[0]).join("").slice(0, 2);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: E, delay }}
      className="relative overflow-hidden flex flex-col items-center text-center p-6 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(229,0,126,0.12)] hover:border-[rgba(229,0,126,0.25)]"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(to right, #E5007E, #F572BE)" }} />
      <div className="mb-4 h-20 w-20 rounded-full overflow-hidden border-2 border-[var(--c-border)] flex items-center justify-center bg-[var(--c-surface-2)]">
        {!imgError ? (
          <Image
            src={member.photo}
            alt={member.name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="font-display text-xl font-bold" style={{ color: "#E5007E" }}>{initials}</span>
        )}
      </div>
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
        className="font-display text-sm font-semibold text-[var(--c-text)] hover:text-[#E5007E] transition-colors duration-150">
        {member.name}
      </a>
      <span className="mt-1 text-xs font-medium" style={{ color: "#E5007E" }}>{member.role}</span>
    </motion.div>
  );
}

export function AboutContent() {
  return (
    <>
      {/* Hero + Kisah */}
      <section className="pt-32 pb-20 text-center" aria-label="About hero">
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
            <p className="mt-5 text-base leading-relaxed text-[var(--c-text-2)]">
              Nonakoding dibentuk oleh sekelompok perempuan yang percaya bahwa teknologi bukan hanya milik satu ras atau gender — teknologi adalah hak semua manusia, termasuk perempuan.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Misi */}
      <section className="py-16" aria-label="Misi">
        <Container>
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
              className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col p-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
                  <span className="font-display text-3xl font-bold" style={{ color: "#E5007E" }}>{stat.value}</span>
                  <span className="mt-1 text-sm text-[var(--c-text-2)]">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16" aria-label="Tim Nonakoding">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, var(--c-border), transparent)" }} />
        <Container className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: E }}
            className="mb-10 text-center"
          >
            <h2 className="font-display text-2xl font-bold text-[var(--c-text)] sm:text-3xl">
              Perempuan dibalik Lahirnya <span style={{ color: "#E5007E" }}>Nonakoding</span>
            </h2>
            <p className="mt-3 text-base text-[var(--c-text-2)]">
              Mereka yang bersama-sama membangun komunitas ini dari nol.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {TEAM.map((member, i) => (
              <TeamCard key={member.name} member={member} delay={i * 0.08} />
            ))}
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
              4 Bidang Spesialisasi
            </h2>
            <p className="mt-3 text-base text-[var(--c-text-2)]">
              Fokus pada tiga jalur karier digital yang paling dibutuhkan industri saat ini.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {LEARNING_PATHS.map((path, i) => (
              <motion.div key={path.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, ease: E, delay: i * 0.1 }}
                className="relative overflow-hidden p-6 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(229,0,126,0.12)] hover:border-[rgba(229,0,126,0.25)]">
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(to right, ${path.color}, transparent)` }} />
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
              Cek program kami atau langsung gabung ke komunitas WhatsApp kami.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link href="/events" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E5007E] text-white text-sm font-semibold hover:bg-[#C4006A] transition-colors duration-200">
                Lihat Event <ArrowRight size={14} />
              </Link>
              <a href="https://chat.whatsapp.com/H3L6uQcea6dE2Dia2fo5wr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] text-sm font-semibold hover:border-[var(--c-text-3)] transition-colors duration-200">
                Gabung WhatsApp Community
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
