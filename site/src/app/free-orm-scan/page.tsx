import { Clock, ShieldCheck, FileSearch, Lock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Free ORM Scan | Diamond Reputation Management",
  description:
    "Request a free online reputation management scan. We audit page one of Google for your name or brand and deliver the findings within 48 hours. No contract, no obligation.",
  path: "/free-orm-scan/",
  keywords: [
    "free reputation scan",
    "free ORM scan",
    "online reputation audit",
    "free reputation analysis",
  ],
  ogEyebrow: "Free Analysis",
  ogTitle: "See what page one says about you",
});

const POINTS = [
  { icon: FileSearch, title: "A full page-one audit", body: "Every result that ranks for your name or brand, mapped and assessed." },
  { icon: ShieldCheck, title: "The risks and opportunities", body: "What is hurting you, and where you can take control fastest." },
  { icon: Clock, title: "Delivered in 48 hours", body: "A clear, honest read on where you stand, with no obligation." },
  { icon: Lock, title: "Completely confidential", body: "Your information stays private and is never shared." },
];

export default function FreeOrmScan() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Free ORM Scan", path: "/free-orm-scan/" },
        ])}
      />
      <PageHero
        eyebrow="Free Analysis"
        title="See exactly what page one says about you"
        sub="Request your free ORM scan and we will audit your search results and send the findings within 48 hours. No contract, no obligation."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Free ORM Scan", path: "/free-orm-scan/" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              What your free scan includes
            </h2>
            <ul className="mt-8 space-y-5">
              {POINTS.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">Request your free ORM scan</h2>
            <p className="mt-1 text-sm text-gray-600">
              Tell us the name or brand to review and we will take it from there.
            </p>
            <div className="mt-6">
              <LeadForm source="free-quote" submitLabel="Get My Free Scan" showPhone />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
