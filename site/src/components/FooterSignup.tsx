"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

// Email field styled like the Dermal footer. Sends the visitor to the full
// Free ORM Scan form, which carries the Turnstile widget and real submission.
export function FooterSignup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const q = email ? `?email=${encodeURIComponent(email)}` : "";
        router.push(`/free-orm-scan/${q}`);
      }}
      className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pl-4 pr-1.5 backdrop-blur-sm"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-blue-100/40"
      />
      <button
        type="submit"
        aria-label="Get your free scan"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full brand-gradient text-white transition hover:opacity-90"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
