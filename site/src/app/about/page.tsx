import Link from "next/link";
import { Check, Quote } from "lucide-react";
import { SITE, STATS } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Diamond Reputation Management",
  description:
    "Diamond Reputation Management is a New Orleans based online reputation management firm founded in 2011 with 30+ years of combined expertise. Specialists, not generalists.",
  path: "/about/",
  keywords: [
    "about diamond reputation management",
    "reputation management company new orleans",
    "Brandon Hopkins reputation management",
  ],
  ogEyebrow: "About Us",
  ogTitle: "Reputation specialists since 2011",
});

const VALUES = [
  { title: "Specialists, not generalists", body: "Reputation is the only thing we do, and that focus is the entire advantage." },
  { title: "Honesty over hype", body: "We tell you what is removable, what must be suppressed, and how long it will really take." },
  { title: "Outcomes, not hours", body: "We measure success by ranking movement and the story page one tells, not by time billed." },
  { title: "Earned trust", body: "No lock-in contracts. We keep clients with results, month after month." },
];

export default function About() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <PageHero
        eyebrow="About Us"
        title="Reputation specialists since 2011"
        sub="A US-based team with 30+ years of combined expertise, focused entirely on what people find when they search your name."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Our story</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              Diamond Reputation Management grew out of the reputation work at our parent agency,
              DiamondLinks, founded in {SITE.founded}. Over more than a decade we watched the same
              pattern again and again: a single damaging result on page one quietly costing good
              people and good companies the clients, candidates, and deals they deserved.
            </p>
            <p>
              So we built a team that does one thing. We suppress the harmful, amplify the
              authentic, and defend page one for the long term. We are based in New Orleans and serve
              clients across the United States, from solo professionals to brands and agencies.
            </p>
          </div>

          <figure className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <Quote className="h-8 w-8 text-brand" />
            <blockquote className="mt-3 text-xl font-medium text-ink">
              Your reputation is built over a lifetime and can be damaged in a single search. We
              treat every client&apos;s name like it is our own.
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-gray-600">
              Brandon Hopkins, Founder
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <dt className="text-3xl font-bold text-brand">{s.value}</dt>
                <dd className="mt-1 text-sm text-gray-600">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">What we stand for</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                  <Check className="h-5 w-5 text-accent" />
                  {v.title}
                </h3>
                <p className="mt-2 text-gray-600">{v.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-gray-600">
            Ready to see where you stand?{" "}
            <Link href="/free-orm-scan/" className="font-semibold text-brand hover:underline">
              Request your free ORM scan
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
