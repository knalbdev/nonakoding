import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Portfolio } from "@/components/sections/portfolio";
import { About } from "@/components/sections/about";
import { Mentors } from "@/components/sections/mentors";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Portfolio />
        <About />
        <Mentors />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
