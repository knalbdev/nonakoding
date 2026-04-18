import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Tutorials } from "@/components/sections/tutorials";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <About />
        <Portfolio />
        <Tutorials />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
