"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/common/container";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

const PRODUCTS = [
  {
    id: "tshirt",
    name: "Nonakoding T-Shirt",
    description: "Kaos premium bahan cotton combed 30s. Nyaman dipakai sehari-hari, cocok untuk nge-code atau jalan-jalan. Tersedia dalam pilihan warna dan ukuran S–XL.",
    image: "/images/merchandise/shirt.png",
    tag: "Bestseller",
  },
  {
    id: "lanyard",
    name: "Nonakoding Lanyard",
    description: "Lanyard eksklusif dengan branding Nonakoding. Terbuat dari bahan polyester berkualitas, cocok untuk ID card, kunci, atau flash disk kamu.",
    image: "/images/merchandise/lanyard.png",
    tag: null,
  },
];

export function MerchContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center" aria-label="Merch hero">
        <div
          className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full opacity-[0.07] blur-3xl -z-10"
          style={{ background: "radial-gradient(circle, #E5007E, transparent 70%)" }}
          aria-hidden="true"
        />
        <Container size="narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: E }}>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: "#E5007E" }}>
              Official Merchandise
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-[var(--c-text)] sm:text-5xl">
              Merch <span style={{ color: "#E5007E" }}>Nonakoding</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--c-text-2)]">
              Tampil kece sambil dukung komunitas perempuan di dunia tech. Setiap pembelian membantu kami terus berkembang.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-12 md:py-16" aria-label="Daftar produk">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: E, delay: i * 0.1 }}
                className="flex flex-col rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden hover:shadow-[0_8px_32px_rgba(229,0,126,0.1)] transition-shadow duration-300"
              >
                {/* Product image */}
                <div className="relative aspect-square bg-[var(--c-surface-2)] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-[#E5007E] text-white">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="font-display text-lg font-semibold text-[var(--c-text)]">{product.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--c-text-2)] flex-1">{product.description}</p>

                  <a
                    href="https://instagram.com/nonakoding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg bg-[#E5007E] text-white text-sm font-semibold hover:bg-[#C4006A] transition-colors duration-200"
                  >
                    <ShoppingBag size={15} />
                    Order via Instagram
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: E }}
            className="mt-14 max-w-3xl mx-auto text-center p-8 rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)]"
          >
            <p className="text-sm text-[var(--c-text-2)]">
              Untuk info ketersediaan stok, ukuran, dan cara pemesanan — DM kami di Instagram{" "}
              <a href="https://instagram.com/nonakoding" target="_blank" rel="noopener noreferrer"
                className="font-semibold hover:underline" style={{ color: "#E5007E" }}>
                @nonakoding
              </a>{" "}
              atau kirim email ke{" "}
              <a href="mailto:nonakoding@gmail.com" className="font-semibold hover:underline" style={{ color: "#E5007E" }}>
                nonakoding@gmail.com
              </a>
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
