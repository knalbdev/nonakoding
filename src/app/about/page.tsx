import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description: "Kenali Nonakoding — komunitas belajar teknologi untuk perempuan Indonesia.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
