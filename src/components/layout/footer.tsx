import Link from "next/link";
import { Mail } from "lucide-react";
import { NewsletterForm } from "@/components/common/newsletter-form";
import { Logo } from "@/components/common/logo";
import { Container } from "@/components/common/container";
import { NAV_LINKS } from "@/lib/constants";
import { IconInstagram, IconLinkedin, IconYoutube } from "@/components/common/social-icons";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/nonakoding", Icon: IconInstagram },
  { label: "LinkedIn", href: "https://linkedin.com/company/nonakoding", Icon: IconLinkedin },
  { label: "YouTube", href: "https://youtube.com/@nonakoding", Icon: IconYoutube },
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
    <footer className="border-t border-[var(--c-border)] bg-[var(--c-bg)]" aria-label="Footer">
      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-[var(--c-text-2)]">
              Komunitas belajar untuk perempuan Indonesia di bidang teknologi digital.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-md",
                    "text-[var(--c-text-3)] border border-[var(--c-border)]",
                    "hover:text-[#E5007E] hover:border-[#E5007E]",
                    "transition-colors duration-150"
                  )}>
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--c-text-3)]">Navigasi</h3>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--c-text-2)] hover:text-[var(--c-text)] transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--c-text-3)]">Program</h3>
            <ul className="space-y-2.5" role="list">
              {PROGRAM_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--c-text-2)] hover:text-[var(--c-text)] transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--c-text-3)]">Tetap Terhubung</h3>
            <Link href="mailto:nonakoding@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-[var(--c-text-2)] hover:text-[var(--c-text)] transition-colors duration-150">
              <Mail size={14} />
              nonakoding@gmail.com
            </Link>
            <div className="mt-5">
              <p className="mb-2.5 text-sm text-[var(--c-text-2)]">Daftarkan email untuk info program terbaru.</p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-[var(--c-border)]">
        <Container className="flex flex-col gap-2 py-5 text-xs text-[var(--c-text-3)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nonakoding. All rights reserved.</p>
          <p>Empowering Women in <span style={{ color: "#E5007E" }}>Tech</span></p>
        </Container>
      </div>
    </footer>
  );
}
