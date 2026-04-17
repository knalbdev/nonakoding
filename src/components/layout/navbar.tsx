"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { Container } from "@/components/common/container";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Tambah background blur saat di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup drawer saat resize ke desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Cegah scroll saat mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[#2E2A26] bg-[#0E0C0B]/90 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav
            className="flex h-16 items-center justify-between md:h-18"
            aria-label="Navigasi utama"
          >
            {/* Logo */}
            <Logo />

            {/* Nav links — desktop */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 rounded-md text-sm font-medium",
                      "text-[#9A8F83] transition-colors duration-150",
                      "hover:text-[#F0E8DC] hover:bg-[#1A1714]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              {/* CTA — hanya di desktop */}
              <Link
                href="/kontak"
                className={cn(
                  "hidden md:inline-flex items-center gap-2",
                  "px-4 py-2 rounded-lg text-sm font-semibold",
                  "bg-ember text-[#F0E8DC]",
                  "hover:bg-ember-dark transition-colors duration-150",
                  "shadow-[0_0_20px_rgba(212,105,42,0.25)]"
                )}
              >
                Konsultasi Gratis
              </Link>

              {/* Hamburger — hanya di mobile */}
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className={cn(
                  "md:hidden flex items-center justify-center",
                  "w-9 h-9 rounded-md text-[#9A8F83]",
                  "hover:text-[#F0E8DC] hover:bg-[#1A1714]",
                  "transition-colors duration-150"
                )}
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={cn(
                "fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden",
                "bg-[#1A1714] border-l border-[#2E2A26]",
                "flex flex-col pt-20 pb-8 px-6"
              )}
            >
              {/* Tombol tutup */}
              <button
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "absolute top-4 right-4",
                  "w-9 h-9 flex items-center justify-center rounded-md",
                  "text-[#9A8F83] hover:text-[#F0E8DC] hover:bg-[#221E1A]",
                  "transition-colors duration-150"
                )}
                aria-label="Tutup menu"
              >
                <X size={20} />
              </button>

              {/* Nav links mobile */}
              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-medium",
                        "text-[#9A8F83] hover:text-[#F0E8DC] hover:bg-[#221E1A]",
                        "transition-colors duration-150"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* CTA mobile */}
              <div className="mt-auto pt-6 border-t border-[#2E2A26]">
                <Link
                  href="/kontak"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-center w-full",
                    "px-4 py-3 rounded-lg text-sm font-semibold",
                    "bg-ember text-[#F0E8DC]",
                    "hover:bg-ember-dark transition-colors duration-150"
                  )}
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
