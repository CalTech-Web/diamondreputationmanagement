"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  ShieldCheck,
  Search,
  ArrowRight,
  Star,
  Phone,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { SITE, STATS } from "@/lib/site";

const FORM_ENDPOINT = "https://forms.caltechweb.com/api/submit";

export function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-brand">
            <Star className="h-4 w-4 fill-current" />
            5.0 rating, reputation specialists since 2011
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            Negative content on page one costs you{" "}
            <span className="gradient-text">clients, revenue, and trust.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            We suppress harmful search results and amplify positive brand stories so your name
            owns its narrative. {SITE.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full brand-gradient px-7 py-3.5 text-base font-semibold text-white shadow-md transition hover:opacity-90"
            >
              Get a Free ORM Scan
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              <Phone className="h-5 w-5" />
              {SITE.phone}
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-blue-50 bg-blue-50/60 px-4 py-3 shadow-sm"
              >
                <dt className="text-2xl font-bold tracking-tight text-ink">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-gray-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual: search-results mockup, or inquiry form once requested */}
        <div className="animate-fade-up lg:justify-self-end" style={{ animationDelay: "120ms" }}>
          {showForm ? (
            <HeroScanForm onClose={() => setShowForm(false)} />
          ) : (
            <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl shadow-blue-900/10 ring-1 ring-blue-100/60">
              {/* Browser chrome */}
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <div className="relative flex items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-400">
                <Search className="h-4 w-4 shrink-0" />
                <span>your name</span>
                {/* Scanning shimmer */}
                <div
                  className="animate-scan absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-4 space-y-2.5">
                <SerpRow rank={1} good title="Your verified profile" url="diamondreputationmanagement.com" />
                <SerpRow rank={2} good title="Featured interview and press" url="news.example.com" />
                <SerpRow rank={3} good title="Authentic 5-star reviews" url="google.com/reviews" />
                <div className="my-2 border-t border-dashed border-gray-200" />
                <SerpRow rank={8} title="Old damaging article" url="complaint-site.example" suppressed />
              </div>
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100 transition hover:bg-emerald-100"
              >
                <ShieldCheck className="h-4 w-4 shrink-0" />
                Page one under your control
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function HeroScanForm({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const token = (data.get("cf-turnstile-response") as string) || "";

    const parts = [
      data.get("phone") ? `Phone: ${data.get("phone")}` : "",
      data.get("keyword") ? `Keyword or search term of concern: ${data.get("keyword")}` : "",
    ].filter(Boolean);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: SITE.formSite,
          name: data.get("name"),
          email: data.get("email"),
          message: parts.join("\n"),
          source: "free-quote",
          turnstileToken: token,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please call us at " + SITE.phone + " or try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto w-full max-w-md rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-2xl shadow-blue-900/10">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h3 className="mt-3 text-xl font-semibold text-ink">Thank you. Your request is in.</h3>
        <p className="mt-2 text-sm text-gray-600">
          We will review your search results and be in touch shortly. For anything urgent, call{" "}
          {SITE.phone}.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl shadow-blue-900/10 ring-1 ring-blue-100/60">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-ink">Get your free ORM scan</h2>
            <p className="mt-1 text-sm text-gray-600">
              Tell us what to look up and we will send the findings within 48 hours.
            </p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="mt-5 space-y-3.5">
          <HeroField
            label="Keyword or search term of concern"
            name="keyword"
            placeholder="The name, brand, or search term you want reviewed"
            required
          />
          <HeroField label="Name" name="name" required autoComplete="name" />
          <HeroField label="Email" name="email" type="email" required autoComplete="email" />
          <HeroField label="Phone" name="phone" type="tel" autoComplete="tel" />

          <div className="cf-turnstile" data-sitekey={SITE.turnstileSiteKey} />

          {status === "error" && (
            <p className="text-sm font-medium text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full brand-gradient px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
          >
            {status === "submitting" && <Loader2 className="h-5 w-5 animate-spin" />}
            {status === "submitting" ? "Sending..." : "Get My Free Scan"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="block w-full text-center text-xs font-medium text-gray-400 transition hover:text-brand"
          >
            Back to preview
          </button>
          <p className="text-center text-xs text-gray-400">
            Protected by Cloudflare Turnstile. We never share your information.
          </p>
        </form>
      </div>
    </>
  );
}

function HeroField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={`hero-${name}`} className="mb-1 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={`hero-${name}`}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-ink shadow-sm outline-none transition placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

function SerpRow({
  title,
  url,
  rank,
  good = false,
  suppressed = false,
}: {
  title: string;
  url: string;
  rank?: number;
  good?: boolean;
  suppressed?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${suppressed ? "opacity-45" : ""}`}>
      {/* Rank badge */}
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
          suppressed
            ? "bg-gray-100 text-gray-400"
            : good
            ? "bg-emerald-50 text-emerald-600"
            : "bg-blue-50 text-blue-600"
        }`}
      >
        {rank}
      </span>
      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-sm font-semibold ${
            suppressed ? "text-gray-400 line-through" : "text-ink"
          }`}
        >
          {title}
        </p>
        <p className="truncate text-xs text-gray-400">{url}</p>
      </div>
      {good && (
        <span className="shrink-0">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
        </span>
      )}
    </div>
  );
}
