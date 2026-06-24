import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Who We Serve | Industry Reputation Management",
  description:
    "We provide online reputation management for healthcare, legal, athletes, financial services, SaaS, and marketing agencies. New Orleans based, serving clients nationwide.",
  path: "/who-we-serve/",
  keywords: [
    "reputation management industries",
    "reputation management for doctors",
    "reputation management for lawyers",
    "reputation management for athletes",
    "white label reputation management",
  ],
  ogEyebrow: "Who We Serve",
  ogTitle: "Industry-specific reputation strategy",
});

export default function WhoWeServe() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Who We Serve", path: "/who-we-serve/" },
        ])}
      />
      <PageHero
        eyebrow="Who We Serve"
        title="Reputation strategy tuned to your industry"
        sub="The risks are different for a surgeon, an attorney, an athlete, and a SaaS founder. Our approach adapts to the stakes you actually face."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Who We Serve", path: "/who-we-serve/" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}/`}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand">
                  <i.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-ink">{i.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{i.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-gray-600">
            Do not see your industry? Reputation management principles apply across every field.{" "}
            <Link href="/contact/" className="font-semibold text-brand hover:underline">
              Talk to our team
            </Link>{" "}
            about your situation.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
