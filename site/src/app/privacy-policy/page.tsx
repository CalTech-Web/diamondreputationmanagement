import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Diamond Reputation Management. How we collect, use, and protect the information you share with us.",
  path: "/privacy-policy/",
  ogEyebrow: "Legal",
  ogTitle: "Privacy Policy",
});

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        sub="Last updated June 24, 2026"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy/" },
        ]}
      />
      <section className="bg-white">
        <div className="prose-legal mx-auto max-w-3xl space-y-6 px-4 py-16 text-gray-700 sm:px-6 lg:px-8">
          <p>
            {SITE.name} respects your privacy. This policy explains what information we collect, how
            we use it, and the choices you have. By using our website you agree to the practices
            described here.
          </p>

          <Section title="Information we collect">
            <p>
              We collect information you provide directly, such as your name, email, phone number,
              and the details you share when you request a scan, ask for a quote, or contact us. We
              also collect limited technical data automatically, such as your IP address, browser
              type, and pages visited, through standard analytics.
            </p>
          </Section>

          <Section title="How we use your information">
            <p>We use the information you provide to:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Respond to your inquiry and deliver the services you request</li>
              <li>Prepare your free analysis and any proposal</li>
              <li>Improve our website and communications</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="How we share information">
            <p>
              We do not sell your personal information. We share it only with service providers who
              help us operate, such as our form and email processor and analytics provider, and only
              as needed to deliver our services or as required by law.
            </p>
          </Section>

          <Section title="Cookies and analytics">
            <p>
              We use cookies and similar technologies to understand how visitors use our site. You
              can control cookies through your browser settings. Disabling cookies may affect some
              site features.
            </p>
          </Section>

          <Section title="Data security">
            <p>
              We use reasonable safeguards to protect your information. No method of transmission or
              storage is completely secure, so we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Your choices">
            <p>
              You may request access to, correction of, or deletion of your personal information by
              contacting us. You can also opt out of marketing communications at any time.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              Questions about this policy? Email {SITE.email} or call {SITE.phone}. Our office is at{" "}
              {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postal}.
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}
