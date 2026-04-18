import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ variable: "--font-jost", subsets: ["latin"], display: "swap", weight: ["300","400","500","600","700","800"] });

export const metadata: Metadata = {
  title: {
    default: "Nonakoding — Komunitas Belajar Digital untuk Perempuan Indonesia",
    template: "%s | Nonakoding",
  },
  description:
    "Komunitas perempuan Indonesia untuk belajar Software Development, Graphic Design, UI/UX, dan FullStack AI. Women Power Course — mulai perjalanan digitalmu bersama kami.",
  keywords: ["belajar koding", "ui ux design", "graphic design", "komunitas perempuan", "Nonakoding"],
  authors: [{ name: "Nonakoding" }],
  creator: "Nonakoding",
  metadataBase: new URL("https://nonakoding.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nonakoding.com",
    siteName: "Nonakoding",
    title: "Nonakoding — Komunitas Belajar Digital untuk Perempuan Indonesia",
    description: "Komunitas perempuan Indonesia untuk belajar Software Development, Graphic Design, UI/UX, dan FullStack AI.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nonakoding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonakoding — Komunitas Belajar Digital untuk Perempuan Indonesia",
    description: "Komunitas perempuan Indonesia untuk belajar Software Development, Graphic Design, UI/UX, dan FullStack AI.",
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
