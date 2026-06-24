import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Request a Quote | Diamond Reputation Management",
  description:
    "Request a custom online reputation management quote. Tell us about your situation and we will recommend the right approach. Month-to-month, no lock-in contracts.",
  path: "/request-a-quote/",
  keywords: [
    "reputation management quote",
    "ORM pricing",
    "reputation management cost",
    "custom reputation management plan",
  ],
  ogEyebrow: "Get Started",
  ogTitle: "Request a custom ORM quote",
});

const POINTS = [
  "A custom strategy built around your specific search results",
  "Transparent, outcome-based pricing with no hidden fees",
  "Month-to-month engagement, never a lock-in contract",
  "One specialist team from analysis through execution",
];

export default function RequestQuote() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Request a Quote", path: "/request-a-quote/" },
        ])}
      />
      <PageHero
        eyebrow="Get Started"
        title="Request a custom quote"
        sub="Every situation is different, so every plan is custom. Tell us what you are facing and we will recommend the right approach."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Request a Quote", path: "/request-a-quote/" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              What to expect
            </h2>
            <ul className="mt-8 space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="font-medium text-gray-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">Tell us about your project</h2>
            <div className="mt-6">
              <LeadForm source="rfp-rfq" submitLabel="Request My Quote" showPhone showService />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
