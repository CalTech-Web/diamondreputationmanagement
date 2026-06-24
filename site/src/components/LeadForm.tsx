"use client";

import { useState } from "react";
import Script from "next/script";
import { Loader2, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

type Source = "free-quote" | "rfp-rfq" | "contact-page";

type Props = {
  source: Source;
  submitLabel?: string;
  showPhone?: boolean;
  showService?: boolean;
};

const FORM_ENDPOINT = "https://forms.caltechweb.com/api/submit";

export function LeadForm({
  source,
  submitLabel = "Send",
  showPhone = true,
  showService = false,
}: Props) {
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
      showPhone && data.get("phone") ? `Phone: ${data.get("phone")}` : "",
      showService && data.get("service") ? `Interested in: ${data.get("service")}` : "",
      data.get("website") ? `Name or brand to review: ${data.get("website")}` : "",
      "",
      (data.get("message") as string) || "",
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
          source,
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
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h3 className="mt-3 text-xl font-semibold text-ink">Thank you. Your request is in.</h3>
        <p className="mt-2 text-gray-600">
          We will be in touch shortly. For anything urgent, call {SITE.phone}.
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
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" name="name" required autoComplete="name" />
          <Field label="Email" name="email" type="email" required autoComplete="email" />
        </div>
        {showPhone && (
          <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        )}
        <Field
          label="Your name or brand to review"
          name="website"
          placeholder="The name or company you want us to look up"
        />
        {showService && (
          <div>
            <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
              Service of interest
            </label>
            <select
              id="service"
              name="service"
              className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-ink shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-blue-100"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Online Reputation Management</option>
              <option>Content Suppression</option>
              <option>Review Management</option>
              <option>Crisis Response</option>
              <option>Brand Monitoring</option>
            </select>
          </div>
        )}
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-ink shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-blue-100"
            placeholder="Tell us what you are seeing in search."
          />
        </div>

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
          {status === "submitting" ? "Sending..." : submitLabel}
        </button>
        <p className="text-center text-xs text-gray-400">
          Protected by Cloudflare Turnstile. We never share your information.
        </p>
      </form>
    </>
  );
}

function Field({
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
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
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
