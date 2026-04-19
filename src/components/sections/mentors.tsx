"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/common/container";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

const MENTORS = [
  {
    name: "Setianing Budi",
    role: "Mentor Software Development & AI",
    photo: "/images/mentors/setianing.png",
    linkedin: "https://www.linkedin.com/in/setianingbudi/",
    initials: "SB",
  },
  {
    name: "Rosalina Saputri",
    role: "Mentor UI/UX Design",
    photo: "/images/mentors/rosalina.png",
    linkedin: "https://www.linkedin.com/in/profile-rosalina-saputri-08569220a/",
    initials: "RS",
  },
  {
    name: "Mane Mint Dahi",
    role: "Mentor Graphic Design",
    photo: "/images/mentors/mane.png",
    linkedin: "https://www.linkedin.com/in/mane-mint-dahi/",
    initials: "MM",
  },
];

function MentorCard({ mentor, delay }: { mentor: typeof MENTORS[0]; delay: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: E, delay }}
      className="relative overflow-hidden flex flex-col items-center text-center p-6 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(229,0,126,0.12)] hover:border-[rgba(229,0,126,0.25)]"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(to right, #E5007E, #F572BE)" }} />
      {/* Photo */}
      <div className="mb-4 h-24 w-24 rounded-full overflow-hidden border-2 flex items-center justify-center bg-[var(--c-surface-2)]"
        style={{ borderColor: "#E5007E" }}>
        {!imgError ? (
          <Image
            src={mentor.photo}
            alt={mentor.name}
            width={96}
            height={96}
            className="object-cover w-full h-full"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="font-display text-2xl font-bold" style={{ color: "#E5007E" }}>{mentor.initials}</span>
        )}
      </div>

      {/* Name — clickable to LinkedIn */}
      <a
        href={mentor.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="font-display text-base font-semibold text-[var(--c-text)] hover:text-[#E5007E] transition-colors duration-150"
      >
        {mentor.name}
      </a>

      <p className="mt-1 text-sm text-[var(--c-text-3)]">{mentor.role}</p>
    </motion.div>
  );
}

export function Mentors() {
  return (
    <section className="relative py-14 md:py-24" aria-labelledby="mentors-heading">
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
            Mentor
          </span>
          <h2 id="mentors-heading" className="font-display text-3xl font-bold tracking-tight text-[var(--c-text)] sm:text-4xl">
            Belajar Bersama <span style={{ color: "#E5007E" }}>Mentor Terbaik</span>
          </h2>
          <p className="mt-4 text-base text-[var(--c-text-2)] max-w-xl mx-auto">
            Dipandu oleh mentor berpengalaman yang siap mendukung perjalanan belajarmu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
          {MENTORS.map((mentor, i) => (
            <MentorCard key={mentor.name} mentor={mentor} delay={i * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
