"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SERVICE_NAV, SITE } from "@/lib/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="shrink-0" aria-label="Diamond Reputation Management home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:text-brand"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mt-1 overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-xl shadow-gray-900/5">
                    {SERVICE_NAV.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-brand"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:text-brand"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-1.5 text-sm font-semibold text-ink transition hover:text-brand"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Link
            href="/free-orm-scan/"
            className="rounded-full brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Free ORM Scan
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-800"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                className={`h-5 w-5 transition ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="ml-3 space-y-1 border-l border-gray-100 pl-3">
                <Link
                  href="/services/"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600"
                  onClick={() => setMobileOpen(false)}
                >
                  All Services
                </Link>
                {SERVICE_NAV.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
            {NAV.filter((i) => !i.children).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-semibold text-ink"
              >
                <Phone className="h-5 w-5" />
                {SITE.phone}
              </a>
              <Link
                href="/free-orm-scan/"
                className="rounded-full brand-gradient px-4 py-2.5 text-center text-base font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Free ORM Scan
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
