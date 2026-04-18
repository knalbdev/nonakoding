import Link from "next/link";
import { Mail } from "lucide-react";
import { NewsletterForm } from "@/components/common/newsletter-form";
import { Logo } from "@/components/common/logo";
import { Container } from "@/components/common/container";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { IconInstagram, IconLinkedin, IconYoutube } from "@/components/common/social-icons";

const SOCIAL_ICONS = {
  Instagram: IconInstagram,
  Linkedin: IconLinkedin,
  Youtube: IconYoutube,
};

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/nonakoding", icon: "Instagram" },
  { label: "LinkedIn", href: "https://linkedin.com/company/nonakoding", icon: "Linkedin" },
  { label: "YouTube", href: "https://youtube.com/@nonakoding", icon: "Youtube" },
] as const;

const PROGRAM_LINKS = [
  { label: "Mini Class", href: "/events#mini-class" },
  { label: "Intensive Class", href: "/events#intensive-class" },
  { label: "Expert Talks", href: "/events#expert-talks" },
  { label: "Seminar", href: "/events#seminar" },
  { label: "Nona Gathering", href: "/events#nona-gathering" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2E2A26] bg-[#0E0C0B]" aria-label="Footer">
      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Kolom 1: Brand */}
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-[#9A8F83]">
              Komunitas belajar koding untuk perempuan Indonesia. Belajar, berkarya,
              dan bertumbuh bersama di dunia digital.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon as keyof typeof SOCIAL_ICONS];
                return (
                  <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-md",
                      "text-[#5C5550] border border-[#2E2A26]",
                      "hover:text-[#E5007E] hover:border-[#E5007E]",
                      "transition-colors duration-150"
                    )}>
                    <Icon size={15} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#5C5550]">
              Navigasi
            </h3>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#9A8F83] hover:text-[#F0E8DC] transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Program */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#5C5550]">
              Program
            </h3>
            <ul className="space-y-2.5" role="list">
              {PROGRAM_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#9A8F83] hover:text-[#F0E8DC] transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Kontak & Newsletter */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#5C5550]">
              Tetap Terhubung
            </h3>
            <Link href="mailto:nonakoding@gmail.com" className="inline-flex items-center gap-2 text-sm text-[#9A8F83] hover:text-[#F0E8DC] transition-colors duration-150">
              <Mail size={14} />
              nonakoding@gmail.com
            </Link>
            <div className="mt-5">
              <p className="mb-2.5 text-sm text-[#9A8F83]">
                Subscribe untuk update program terbaru.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-[#2E2A26]">
        <Container className="flex flex-col gap-2 py-5 text-xs text-[#5C5550] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nonakoding. All rights reserved.</p>
          <p>Empowering Women in <span className="text-[#E5007E]">Tech</span></p>
        </Container>
      </div>
    </footer>
  );
}
