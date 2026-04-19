"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Masukkan email yang valid.");
      return;
    }
    setError("");
    setSubmitted(true);
    fetch("https://script.google.com/macros/s/AKfycbw0RVv9ZvdpFwFvyzb0OaU6pe-waEoVEEHZn668pgiwHEP5C0nyG-J9qAVtQSfBjUSd6A/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ email }),
    }).catch(() => {});
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-sm text-[var(--c-text-2)]">
        <CheckCircle2 size={16} style={{ color: "#E5007E" }} />
        Email kamu sudah kami catat. Nantikan info terbaru dari Nonakoding!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1.5" aria-label="Form subscribe newsletter">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          placeholder="Email kamu"
          aria-label="Alamat email"
          className="flex-1 min-w-0 px-3 py-2 rounded-lg text-sm bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-text)] placeholder:text-[var(--c-text-3)] focus:outline-none focus:border-[#E5007E] transition-colors duration-150"
        />
        <button type="submit" aria-label="Subscribe"
          className="flex items-center justify-center px-3 py-2 rounded-lg bg-[#E5007E] text-white hover:bg-[#C4006A] transition-colors duration-150 shrink-0">
          <ArrowRight size={15} />
        </button>
      </div>
      {error && <p className="text-xs" style={{ color: "#E5007E" }}>{error}</p>}
    </form>
  );
}
