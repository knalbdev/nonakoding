import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { EventsContent } from "./events-content";

export const metadata: Metadata = {
  title: "Events",
  description: "Ikuti program dan events Nonakoding — Mini Class, Intensive Class, Expert Talks, Seminar, dan Nona Gathering.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        <EventsContent />
      </main>
      <Footer />
    </>
  );
}
