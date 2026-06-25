import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, SERVICE_NAV } from "@/lib/site";
import { INDUSTRIES } from "@/lib/industries";

const company = [
  { label: "About Us", href: "/about/" },
  { label: "Resources", href: "/resources/" },
  { label: "Free ORM Scan", href: "/free-orm-scan/" },
  { label: "Request a Quote", href: "/request-a-quote/" },
  { label: "Contact Us", href: "/contact/" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-ink text-blue-100/80">
      {/* decorative flourishes */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 60% at 12% 0%, rgba(37,99,235,0.22) 0%, rgba(17,24,39,0) 60%), radial-gradient(45% 50% at 95% 100%, rgba(79,70,229,0.18) 0%, rgba(17,24,39,0) 60%)",
        }}
      />
      <div className="dot-grid absolute inset-0 opacity-[0.05]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top CTA row */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
              See exactly what page one says about you.
            </h2>
            <p className="mt-2 text-blue-100/70">
              Free analysis in 48 hours. No contract, no obligation.
            </p>
          </div>
          <Link
            href="/free-orm-scan/"
            className="inline-flex shrink-0 items-center gap-2 rounded-full brand-gradient px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:opacity-90"
          >
            Get a Free ORM Scan
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 py-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-100/70">
              {SITE.description}
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={SITE.phoneHref} className="flex items-center gap-2 transition hover:text-white">
                <Phone className="h-4 w-4 text-blue-400" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 transition hover:text-white">
                <Mail className="h-4 w-4 text-blue-400" />
                {SITE.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span>
                  {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
                  {SITE.address.postal}
                </span>
              </p>
            </div>
          </div>

          <FooterCol title="Services" links={SERVICE_NAV} />
          <FooterCol
            title="Who We Serve"
            links={INDUSTRIES.map((i) => ({ label: i.name, href: `/industries/${i.slug}/` }))}
          />
          <FooterCol title="Company" links={company} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-blue-100/60 sm:flex-row">
          <p>&copy; 2011-2026 {SITE.name}. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/privacy-policy/" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="transition hover:text-white">
              Terms of Service
            </Link>
            <span>
              Built by{" "}
              <a
                href="https://www.caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-300 transition hover:text-white"
              >
                CalTech Web
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-blue-100/70 transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
