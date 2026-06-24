import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
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
    <footer className="mt-auto border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
              {SITE.description}
            </p>
            <div className="mt-5 space-y-2 text-sm text-gray-600">
              <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-brand">
                <Phone className="h-4 w-4 text-brand" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-brand">
                <Mail className="h-4 w-4 text-brand" />
                {SITE.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
                  {SITE.address.postal}
                </span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Services</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICE_NAV.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-600 transition hover:text-brand">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Who We Serve</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {INDUSTRIES.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}/`}
                    className="text-gray-600 transition hover:text-brand"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Company</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-gray-600 transition hover:text-brand">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row">
          <p>
            &copy; 2011-2026 {SITE.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy/" className="hover:text-brand">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="hover:text-brand">
              Terms of Service
            </Link>
            <span>
              Built by{" "}
              <a
                href="https://www.caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-brand"
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
