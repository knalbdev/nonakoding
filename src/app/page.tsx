import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Section berikutnya ditambahkan bertahap */}
      </main>
      <Footer />
    </>
  );
}
