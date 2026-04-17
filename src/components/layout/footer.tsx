import Link from "next/link";
import { Mail } from "lucide-react";
import { NewsletterForm } from "@/components/common/newsletter-form";
import { Logo } from "@/components/common/logo";
import { Container } from "@/components/common/container";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  IconInstagram,
  IconLinkedin,
  IconGithub,
  IconYoutube,
  IconTiktok,
} from "@/components/common/social-icons";

const SOCIAL_ICONS = {
  Instagram: IconInstagram,
  Linkedin: IconLinkedin,
  Github: IconGithub,
  Youtube: IconYoutube,
  TikTok: IconTiktok,
};

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/nonakoding", icon: "Instagram" },
  { label: "LinkedIn", href: "https://linkedin.com/company/nonakoding", icon: "Linkedin" },
  { label: "GitHub", href: "https://github.com/nonakoding", icon: "Github" },
  { label: "YouTube", href: "https://youtube.com/@nonakoding", icon: "Youtube" },
  { label: "TikTok", href: "https://tiktok.com/@nonakoding", icon: "TikTok" },
] as const;

const LAYANAN_LINKS = [
  { label: "Pembuatan Website", href: "/jasa#website" },
  { label: "Aplikasi Web Custom", href: "/jasa#aplikasi" },
  { label: "Landing Page", href: "/jasa#landing" },
  { label: "Konsultasi Teknis", href: "/jasa#konsultasi" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#2E2A26] bg-[#0E0C0B]"
      aria-label="Footer"
    >
      {/* Main footer content */}
      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Kolom 1: Brand */}
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-[#9A8F83]">
              Platform belajar koding, jasa development, dan komunitas developer
              perempuan Indonesia. Belajar, bikin, dan berkarya bareng!
            </p>
            {/* Social links */}
            <div className="mt-5 flex items-center gap-2" role="list">
              {SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon as keyof typeof SOCIAL_ICONS];
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-md",
                      "text-[#5C5550] border border-[#2E2A26]",
                      "hover:text-[#D4692A] hover:border-[#D4692A]",
                      "transition-colors duration-150"
                    )}
                  >
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
                  <Link
                    href={link.href}
                    className="text-sm text-[#9A8F83] hover:text-[#F0E8DC] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#5C5550]">
              Layanan
            </h3>
            <ul className="space-y-2.5" role="list">
              {LAYANAN_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9A8F83] hover:text-[#F0E8DC] transition-colors duration-150"
                  >
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
            <Link
              href="mailto:hello@nonakoding.com"
              className={cn(
                "inline-flex items-center gap-2 text-sm",
                "text-[#9A8F83] hover:text-[#F0E8DC] transition-colors duration-150"
              )}
            >
              <Mail size={14} />
              hello@nonakoding.com
            </Link>

            {/* Newsletter signup */}
            <div className="mt-5">
              <p className="mb-2.5 text-sm text-[#9A8F83]">
                Subscribe untuk tips & tutorial terbaru.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[#2E2A26]">
        <Container className="flex flex-col gap-2 py-5 text-xs text-[#5C5550] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nonakoding. All rights reserved.</p>
          <p>
            Dibuat dengan ☕ dan{" "}
            <span className="text-[#D4692A]">Next.js</span> oleh Nonakoding
          </p>
        </Container>
      </div>
    </footer>
  );
}
