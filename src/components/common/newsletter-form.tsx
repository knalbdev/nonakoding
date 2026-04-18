"use client";

import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex gap-2" aria-label="Form subscribe newsletter">
      <input
        type="email"
        placeholder="Email kamu"
        aria-label="Alamat email"
        className="flex-1 min-w-0 px-3 py-2 rounded-lg text-sm bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-text)] placeholder:text-[var(--c-text-3)] focus:outline-none focus:border-[#E5007E] transition-colors duration-150"
      />
      <button type="submit" aria-label="Subscribe"
        className="flex items-center justify-center px-3 py-2 rounded-lg bg-[#E5007E] text-white hover:bg-[#C4006A] transition-colors duration-150 shrink-0">
        <ArrowRight size={15} />
      </button>
    </form>
  );
}
