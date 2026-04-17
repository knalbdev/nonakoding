"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-2"
      aria-label="Form subscribe newsletter"
    >
      <input
        type="email"
        placeholder="Email kamu"
        aria-label="Alamat email"
        className={cn(
          "flex-1 min-w-0 px-3 py-2 rounded-lg text-sm",
          "bg-[#1A1714] border border-[#2E2A26]",
          "text-[#F0E8DC] placeholder:text-[#5C5550]",
          "focus:outline-none focus:border-[#D4692A]",
          "transition-colors duration-150"
        )}
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className={cn(
          "flex items-center justify-center px-3 py-2 rounded-lg",
          "bg-[#D4692A] text-[#F0E8DC]",
          "hover:bg-[#B85A22] transition-colors duration-150",
          "shrink-0"
        )}
      >
        <ArrowRight size={15} />
      </button>
    </form>
  );
}
