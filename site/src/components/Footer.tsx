import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { FooterSignup } from "./FooterSignup";
import { SITE, SERVICE_NAV } from "@/lib/site";
import { INDUSTRIES } from "@/lib/industries";

const company = [
  { label: "About Us", href: "/about/" },
  { label: "Resources", href: "/resources/" },
  { label: "Free ORM Scan", href: "/free-orm-scan/" },
  { label: "Request a Quote", href: "/request-a-quote/" },
  { label: "Contact Us", href: "/contact/" },
];

// Brand glyphs (lucide-react dropped brand icons, so these are inlined).
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.7.1 15.8 0 14.7 0 12.3 0 11 1.4 11 4v2H8v3h3v9h3V9z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H20v-5.4c0-1.3 0-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H12z" />
    </svg>
  );
}

// Social links point to the contact page until real profile URLs are provided.
const socials = [
  { label: "Facebook", icon: FacebookIcon, href: "/contact/" },
  { label: "Instagram", icon: InstagramIcon, href: "/contact/" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "/contact/" },
];

export function Footer() {
  return (
    <footer className="relative z-10 -mt-10 overflow-hidden rounded-t-[2.5rem] bg-ink text-blue-100/80">
      {/* decorative glow + texture + corner line art */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 60% at 12% 0%, rgba(37,99,235,0.22) 0%, rgba(17,24,39,0) 60%), radial-gradient(45% 50% at 95% 100%, rgba(79,70,229,0.18) 0%, rgba(17,24,39,0) 60%)",
        }}
      />
      <div className="dot-grid absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <CornerArt className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 text-blue-400/10" />
      <CornerArt className="pointer-events-none absolute -right-10 top-8 h-56 w-56 rotate-180 text-indigo-400/10" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        {/* Link columns */}
        <div className="grid gap-10 pb-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-100/70">
              {SITE.description}
            </p>
            <FooterSignup />
            <div className="mt-6 space-y-2 text-sm">
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

        {/* Social row */}
        <div className="mt-6 flex items-center justify-center gap-3 sm:justify-end">
          <span className="text-sm text-blue-100/60">Follow us</span>
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-blue-100/70 transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <s.icon className="h-4 w-4" />
            </Link>
          ))}
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

function CornerArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <path
        d="M10 190 C 70 150, 120 120, 190 40"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M60 168 l16 -26 18 8 z" stroke="currentColor" strokeWidth="2" />
      <path d="M104 132 l16 -26 18 8 z" stroke="currentColor" strokeWidth="2" />
      <path d="M150 92 l16 -26 18 8 z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M150 50 l12 -20 12 20 -12 20 z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
