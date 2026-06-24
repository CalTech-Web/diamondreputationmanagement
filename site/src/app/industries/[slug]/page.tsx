import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import { INDUSTRIES, getIndustry } from "@/lib/industries";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.title,
    description: industry.description,
    path: `/industries/${industry.slug}/`,
    keywords: industry.keywords,
    ogEyebrow: "Who We Serve",
    ogTitle: `Reputation management for ${industry.name}`,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const path = `/industries/${industry.slug}/`;
  const related = INDUSTRIES.filter((i) => i.slug !== industry.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Reputation Management for ${industry.name}`,
            description: industry.description,
            path,
          }),
          faqSchema(industry.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Who We Serve", path: "/who-we-serve/" },
            { name: industry.name, path },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Who We Serve"
        title={`Online reputation management for ${industry.name}`}
        sub={industry.heroSub}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Who We Serve", path: "/who-we-serve/" },
          { name: industry.name, path },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient text-white">
            <industry.icon className="h-7 w-7" />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">{industry.intro}</p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-ink">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              Common challenges
            </h2>
            <ul className="mt-6 space-y-3">
              {industry.challenges.map((c) => (
                <li key={c} className="rounded-xl border border-gray-100 bg-white p-4 text-gray-700">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-ink">
              <Check className="h-6 w-6 text-accent" />
              How we help
            </h2>
            <ul className="mt-6 space-y-3">
              {industry.approach.map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="font-medium text-gray-700">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Faq items={industry.faqs} />
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink">Other industries we serve</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/industries/${r.slug}/`}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-blue-100 hover:shadow-md"
              >
                <r.icon className="h-7 w-7 text-brand" />
                <h3 className="mt-3 font-semibold text-ink group-hover:text-brand">{r.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{r.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
