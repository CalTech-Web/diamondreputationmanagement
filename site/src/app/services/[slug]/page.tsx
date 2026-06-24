import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, getService } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}/`,
    keywords: service.keywords,
    ogEyebrow: "Reputation Services",
    ogTitle: service.name,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}/`;
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: service.name, description: service.description, path }),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: service.name, path },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Reputation Services"
        title={service.heroHeadline}
        sub={service.heroSub}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: service.navLabel, path },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient text-white">
            <service.icon className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {service.name}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{service.intro}</p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What is included
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {service.whatIncludes.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                  <Check className="h-5 w-5 text-accent" />
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Who this is for</h2>
            <p className="mt-4 text-lg text-gray-600">
              {service.name} is the right fit when the stakes around your search results are real.
            </p>
          </div>
          <ul className="space-y-3">
            {service.whoFor.map((w) => (
              <li key={w} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="font-medium text-gray-700">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Faq items={service.faqs} />
        </div>
      </section>

      {/* Related services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink">Related services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}/`}
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
