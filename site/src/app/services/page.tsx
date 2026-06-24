import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, EXTRA_PILLARS } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Online Reputation Management Services | Diamond Reputation Management",
  description:
    "Explore our online reputation management services: content suppression, review management, crisis response, brand monitoring, and full ORM strategy. One specialist team, transparent reporting.",
  path: "/services/",
  keywords: [
    "reputation management services",
    "ORM services",
    "online reputation management",
    "content suppression",
    "review management",
  ],
  ogEyebrow: "Our Services",
  ogTitle: "Full service reputation management",
});

export default function ServicesOverview() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ])}
      />
      <PageHero
        eyebrow="Our Services"
        title="Everything that shapes what people find when they search you"
        sub="From suppressing a single damaging result to defending page one for the long term, every service is delivered by one specialist team."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-ink">{s.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it fits together */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Suppress, amplify, defend
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Reputation management is not one tactic. It is a coordinated system, and these two
              pillars run through everything we do.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {EXTRA_PILLARS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.body}</p>
              </div>
            ))}
          </div>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {[
              "One team, no hand-offs",
              "Custom strategy per client",
              "Transparent monthly reporting",
              "Month-to-month, no lock-in",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Check className="h-5 w-5 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
