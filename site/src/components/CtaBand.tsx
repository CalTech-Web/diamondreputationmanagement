import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { AuroraBackdrop } from "./AuroraBackdrop";

export function CtaBand({
  heading = "See exactly what page one says about you.",
  sub = "Your free analysis is delivered within 48 hours. No contract, no obligation.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl brand-gradient px-6 py-14 text-center shadow-xl shadow-blue-900/20 sm:px-12">
          <AuroraBackdrop blobs={false} network />
          {/* Radial light burst */}
          <div
            className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-50">{sub}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/free-orm-scan/"
                className="rounded-full bg-white px-7 py-3 text-base font-semibold text-brand shadow-sm transition hover:bg-blue-50"
              >
                Get My Free ORM Scan
              </Link>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
