import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Diamond Reputation Management. The terms that govern your use of our website and services.",
  path: "/terms-of-service/",
  ogEyebrow: "Legal",
  ogTitle: "Terms of Service",
});

export default function TermsOfService() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        sub="Last updated June 24, 2026"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms-of-service/" },
        ]}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-gray-700 sm:px-6 lg:px-8">
          <p>
            These Terms of Service govern your use of the {SITE.name} website. By accessing or using
            our site you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <Section title="Our services">
            <p>
              {SITE.name} provides online reputation management services. The content on this website
              is for general information. Specific engagements, deliverables, timelines, and fees are
              defined in a separate written agreement between you and us.
            </p>
          </Section>

          <Section title="No guaranteed outcomes">
            <p>
              Reputation management depends on factors outside our control, including the policies of
              search engines and third-party platforms. We work diligently using ethical methods, but
              we do not guarantee specific rankings, removals, or timelines unless expressly stated in
              a signed agreement.
            </p>
          </Section>

          <Section title="Acceptable use">
            <p>
              You agree not to misuse the site, attempt to disrupt it, or use it for any unlawful
              purpose. All content on this site is owned by {SITE.name} or its licensors and may not
              be copied or reused without permission.
            </p>
          </Section>

          <Section title="Third-party links">
            <p>
              Our site may link to third-party websites. We are not responsible for the content or
              practices of those sites and provide the links for convenience only.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the fullest extent permitted by law, {SITE.name} is not liable for any indirect,
              incidental, or consequential damages arising from your use of this website.
            </p>
          </Section>

          <Section title="Changes to these terms">
            <p>
              We may update these terms from time to time. Continued use of the site after changes
              are posted constitutes acceptance of the updated terms.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              Questions about these terms? Email {SITE.email} or call {SITE.phone}.
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
