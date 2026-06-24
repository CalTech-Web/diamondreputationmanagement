import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Reputation Management Resources & Guides",
  description:
    "Practical guides on online reputation management: how to remove negative Google results, reputation management for doctors, and what ORM is and how it works.",
  path: "/resources/",
  keywords: [
    "reputation management guides",
    "online reputation management resources",
    "how to remove negative google results",
    "ORM guides",
  ],
  ogEyebrow: "Resources",
  ogTitle: "Guides to protecting your reputation",
});

export default function Resources() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/" },
        ])}
      />
      <PageHero
        eyebrow="Resources"
        title="Guides to protecting your online reputation"
        sub="Clear, honest answers to the questions clients ask us most, with no jargon and no hype."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <article
                key={a.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40 brand-gradient">
                  <div className="dot-grid absolute inset-0 opacity-20" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500">
                    <Clock className="h-3.5 w-3.5" />
                    {a.readTime}
                  </span>
                  <h2 className="mt-2 text-lg font-semibold leading-snug text-ink group-hover:text-brand">
                    <Link href={`/resources/${a.slug}/`}>{a.h1}</Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{a.excerpt}</p>
                  <Link
                    href={`/resources/${a.slug}/`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand"
                  >
                    Read the guide
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
