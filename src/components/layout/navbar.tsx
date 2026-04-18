"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Container } from "@/components/common/container";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--c-border)] bg-[var(--c-bg)]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}>
        <Container>
          <nav className="flex h-16 items-center justify-between" aria-label="Navigasi utama">
            <Logo />

            <ul className="hidden md:flex items-center gap-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="px-3.5 py-2 rounded-md text-sm font-medium text-[var(--c-text-2)] hover:text-[var(--c-text)] hover:bg-[var(--c-surface)] transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link href="/events" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#E5007E] text-white hover:bg-[#C4006A] transition-colors duration-150 shadow-[0_0_16px_rgba(229,0,126,0.25)]">
                Gabung Komunitas
              </Link>
              <button
                onClick={() => setMobileOpen((p) => !p)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-[var(--c-text-2)] hover:text-[var(--c-text)] hover:bg-[var(--c-surface)] transition-colors duration-150"
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden bg-[var(--c-bg)] border-l border-[var(--c-border)] flex flex-col pt-20 pb-8 px-6"
            >
              <button onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-md text-[var(--c-text-2)] hover:text-[var(--c-text)] hover:bg-[var(--c-surface)] transition-colors duration-150"
                aria-label="Tutup menu">
                <X size={20} />
              </button>

              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map((link, i) => (
                  <motion.li key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 + 0.1 }}>
                    <Link href={link.href} onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-lg text-base font-medium text-[var(--c-text-2)] hover:text-[var(--c-text)] hover:bg-[var(--c-surface)] transition-colors duration-150">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-[var(--c-border)] flex flex-col gap-2">
                <ThemeToggle className="w-full justify-center" />
                <Link href="/events" onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-sm font-semibold bg-[#E5007E] text-white hover:bg-[#C4006A] transition-colors duration-150">
                  Gabung Komunitas
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
