import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact Diamond Reputation Management",
  description:
    "Contact Diamond Reputation Management in New Orleans. Call 504.233.4365 or send a message and our reputation specialists will get back to you quickly.",
  path: "/contact/",
  keywords: [
    "contact reputation management",
    "reputation management new orleans",
    "online reputation management contact",
  ],
  ogEyebrow: "Contact",
  ogTitle: "Talk to a reputation specialist",
});

export default function Contact() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to a reputation specialist"
        sub="Whether it is a single damaging result or a full strategy, we are ready to help. Reach out and we will respond quickly."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-gray-600">
              Prefer to talk it through? Call us directly. Everything you share stays confidential.
            </p>
            <ul className="mt-8 space-y-5">
              <ContactRow icon={Phone} label="Phone" value={SITE.phone} href={SITE.phoneHref} />
              <ContactRow icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
              <ContactRow
                icon={MapPin}
                label="Office"
                value={`${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}`}
              />
              <ContactRow icon={Clock} label="Free analysis turnaround" value="Within 48 hours" />
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">Send us a message</h2>
            <div className="mt-6">
              <LeadForm source="contact-page" submitLabel="Send Message" showPhone />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-ink">{label}</p>
        {href ? (
          <a href={href} className="text-gray-600 transition hover:text-brand">
            {value}
          </a>
        ) : (
          <p className="text-gray-600">{value}</p>
        )}
      </div>
    </li>
  );
}
