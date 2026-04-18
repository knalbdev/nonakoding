"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { Container } from "@/components/common/container";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
        scrolled && !mobileOpen
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
              <Link href="/events" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#E5007E] text-white hover:bg-[#C4006A] transition-colors duration-150 shadow-[0_0_16px_rgba(229,0,126,0.25)]">
                Gabung Komunitas
              </Link>
              <button
                onClick={() => setMobileOpen((p) => !p)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-[var(--c-text-2)] hover:text-[var(--c-text)] transition-colors duration-150"
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X size={22} />
                    </motion.span>
                  ) : (
                    <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu size={22} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--c-bg)] flex flex-col md:hidden"
          >
            {/* Top bar sama tinggi dengan navbar */}
            <div className="flex h-16 items-center justify-between px-5">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-9 h-9 text-[var(--c-text-2)]"
                aria-label="Tutup menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links — tengah */}
            <div className="flex flex-1 flex-col items-center justify-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: E, delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-8 py-3 text-2xl font-semibold text-[var(--c-text)] hover:text-[#E5007E] transition-colors duration-150 text-center"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: E, delay: NAV_LINKS.length * 0.06 }}
                className="mt-4"
              >
                <Link
                  href="/events"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center px-10 py-3.5 rounded-full text-base font-semibold bg-[#E5007E] text-white hover:bg-[#C4006A] transition-colors duration-200"
                >
                  Gabung Komunitas
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
