import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/common/theme-provider";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], display: "swap" });

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
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
