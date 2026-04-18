import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ variable: "--font-jost", subsets: ["latin"], display: "swap", weight: ["300","400","500","600","700","800"] });

export const metadata: Metadata = {
  title: {
    default: "Nonakoding — Belajar, Bikin, dan Berkarya di Dunia Koding",
    template: "%s | Nonakoding",
  },
  description:
    "Platform belajar koding, desain grafis, dan UI/UX untuk perempuan Indonesia. Komunitas yang supportif untuk semua level.",
  keywords: ["belajar koding", "ui ux design", "graphic design", "komunitas perempuan", "Nonakoding"],
  authors: [{ name: "Nonakoding" }],
  creator: "Nonakoding",
  metadataBase: new URL("https://nonakoding.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nonakoding.com",
    siteName: "Nonakoding",
    title: "Nonakoding — Belajar, Bikin, dan Berkarya di Dunia Koding",
    description: "Platform belajar koding, desain grafis, dan UI/UX untuk perempuan Indonesia.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nonakoding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonakoding — Belajar, Bikin, dan Berkarya di Dunia Koding",
    description: "Platform belajar koding, desain grafis, dan UI/UX untuk perempuan Indonesia.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jost.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
