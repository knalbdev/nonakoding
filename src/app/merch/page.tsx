import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MerchContent } from "./merch-content";

export const metadata: Metadata = {
  title: "Merch",
  description: "Merchandise resmi Nonakoding — tampil kece sambil dukung komunitas perempuan di dunia tech.",
};

export default function MerchPage() {
  return (
    <>
      <Navbar />
      <main>
        <MerchContent />
      </main>
      <Footer />
    </>
  );
}
