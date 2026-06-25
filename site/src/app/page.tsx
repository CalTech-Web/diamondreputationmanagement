import Link from "next/link";
import {
  ShieldCheck,
  Search,
  TrendingUp,
  ArrowRight,
  Star,
  Check,
  Clock,
  Phone,
  Award,
  Users,
  BarChart2,
  CalendarCheck,
} from "lucide-react";
import { SITE, STATS } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { INDUSTRIES } from "@/lib/industries";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { AuroraBackdrop } from "@/components/AuroraBackdrop";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Online Reputation Management Company | Diamond Reputation Management",
  description:
    "Diamond Reputation Management suppresses harmful search results, grows authentic reviews, and helps your brand own page one of Google. New Orleans based, serving clients nationwide. Free 48-hour analysis.",
  path: "/",
  keywords: [
    "online reputation management",
    "reputation management company",
    "ORM services",
    "fix Google search results",
    "remove negative search results",
    "review management",
  ],
  ogEyebrow: "Reputation Specialists Since 2011",
  ogTitle: "Own page one. Protect your reputation.",
});

const DIFFERENTIATORS = [
  "Trained reputation specialists, not generalists",
  "Custom strategy for every client, never templated",
  "Transparent monthly reporting tied to real ranking movement",
  "Results-driven, measured by outcomes and not billable hours",
  "No lock-in contracts, month-to-month",
  "US-based team with 30+ years of combined focus",
];

const PROCESS = [
  { phase: "Week 1-2", title: "Free Analysis", body: "A full page-one audit maps the damaging content, risks, and opportunities around your name or brand." },
  { phase: "Month 1-3", title: "Custom Strategy", body: "A tailored ORM roadmap goes live with content, link building, and positive asset amplification." },
  { phase: "Month 3-6", title: "Lasting Results", body: "Rankings improve, negative content loses prominence, and positive stories take page one." },
  { phase: "Ongoing", title: "Maintenance", body: "Page one is defended through monitoring and transparent monthly reporting." },
];

const TESTIMONIALS = [
  { name: "Rusty T.", role: "CEO, Finance Company", quote: "Finance can be messy, and I feel confident continuing by having the team manage my online reputation." },
  { name: "Inspect & Track", role: "SaaS Platform", quote: "They transformed our online presence. Their strategic approach to content and backlinks gave us visibility we never thought possible." },
  { name: "Richart R.", role: "CEO, Digital Agency", quote: "Brandon and team definitely know what they are doing. From SEO to reputation management they are a great asset to our agency." },
  { name: "Reed G.", role: "CEO, SEO Company", quote: "Brandon Hopkins is the brain behind our strategy. He has done a great job for us and has been key in driving our rankings up." },
];

const CASE_STUDIES = [
  { tag: "Finance", challenge: "A damaging article ranked on page one for the founder's name.", result: "Article suppressed below the fold, positive profile took the top spot.", timeline: "120 days" },
  { tag: "SaaS", challenge: "Thin search presence and no control of the brand narrative.", result: "Owned media and reviews filled page one.", timeline: "90 days" },
  { tag: "Healthcare", challenge: "A handful of negative reviews dominated the local pack.", result: "Positive review volume restored a 4.8 average.", timeline: "100 days" },
];

const HOME_FAQS = [
  { q: "How long does online reputation management take?", a: "Most clients see meaningful movement within 90 to 120 days. Deeply entrenched results can take 6 to 12 months to fully suppress, and we map the realistic timeline during your free analysis." },
  { q: "Can you actually remove negative content from Google?", a: "In some cases content can be removed at the source, but most ORM works by suppression. We outrank the negative result with stronger positive owned assets so it falls off page one where almost nobody looks." },
  { q: "Do you require a long-term contract?", a: "No. We work month-to-month because we believe results should keep you, not a contract." },
  { q: "How fast can you start?", a: "Your free analysis is delivered within 48 hours, and active campaigns launch quickly from there." },
  { q: "What does the free analysis include?", a: "A full review of page one for your name or brand, the specific risks and damaging content we find, and the opportunities to take control of the narrative." },
  { q: "Is reputation management worth it?", a: "97% of people research a brand or person online before they buy or engage, and 75% of clicks go to the top three results. If page one works against you, it is costing you clients, revenue, and trust." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-brand">
              <Star className="h-4 w-4 fill-current" />
              5.0 rating, reputation specialists since 2011
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              Negative content on page one costs you{" "}
              <span className="gradient-text">clients, revenue, and trust.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              We suppress harmful search results and amplify positive brand stories so your name
              owns its narrative. {SITE.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/free-orm-scan/"
                className="inline-flex items-center justify-center gap-2 rounded-full brand-gradient px-7 py-3.5 text-base font-semibold text-white shadow-md transition hover:opacity-90"
              >
                Get a Free ORM Scan
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                <Phone className="h-5 w-5" />
                {SITE.phone}
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-blue-50 bg-blue-50/60 px-4 py-3 shadow-sm"
                >
                  <dt className="text-2xl font-bold tracking-tight text-ink">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-gray-500">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual: search-results mockup */}
          <div className="animate-fade-up lg:justify-self-end" style={{ animationDelay: "120ms" }}>
            <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl shadow-blue-900/10 ring-1 ring-blue-100/60">
              {/* Browser chrome */}
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <div className="relative flex items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-400">
                <Search className="h-4 w-4 shrink-0" />
                <span>your name</span>
                {/* Scanning shimmer */}
                <div
                  className="animate-scan absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-4 space-y-2.5">
                <SerpRow rank={1} good title="Your verified profile" url="diamondreputationmanagement.com" />
                <SerpRow rank={2} good title="Featured interview and press" url="news.example.com" />
                <SerpRow rank={3} good title="Authentic 5-star reviews" url="google.com/reviews" />
                <div className="my-2 border-t border-dashed border-gray-200" />
                <SerpRow rank={8} title="Old damaging article" url="complaint-site.example" suppressed />
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                Page one under your control
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust credential bar */}
      <section className="border-b border-gray-100 bg-gray-50/80">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 lg:gap-12">
            <div className="flex items-center gap-2.5 text-sm font-medium text-gray-600">
              <Award className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>Reputation specialists since 2011</span>
            </div>
            <div className="hidden h-4 w-px bg-gray-300 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2.5 text-sm font-medium text-gray-600">
              <Users className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>30+ years of combined ORM expertise</span>
            </div>
            <div className="hidden h-4 w-px bg-gray-300 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2.5 text-sm font-medium text-gray-600">
              <BarChart2 className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>97% of buyers research online first</span>
            </div>
            <div className="hidden h-4 w-px bg-gray-300 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2.5 text-sm font-medium text-gray-600">
              <CalendarCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="font-semibold text-accent">Free analysis in 48 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              What we do
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Full service online reputation management
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              One specialist team covering every lever that shapes what people find when they
              search you.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/8"
              >
                <div className="relative h-24 brand-gradient">
                  <div className="dot-grid absolute inset-0 opacity-20" aria-hidden="true" />
                  <div className="absolute left-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition duration-200 group-hover:scale-105">
                    <s.icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-ink">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
            <Link
              href="/services/"
              className="group flex flex-col justify-center rounded-2xl brand-gradient p-6 text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20"
            >
              <TrendingUp className="h-8 w-8 opacity-90" />
              <h3 className="mt-4 text-lg font-semibold">See the full approach</h3>
              <p className="mt-2 text-sm text-blue-50/90">
                How suppression, amplification, reviews, and monitoring fit together.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                All services
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Why Diamond
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Specialists who treat your name like our own
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Reputation is the only thing we do. That focus is why clients across healthcare,
              legal, finance, and sport trust us with the search results that define them.
            </p>
            <Link
              href="/about/"
              className="mt-6 inline-flex items-center gap-1 text-base font-semibold text-brand"
            >
              More about our approach
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition duration-150 hover:border-emerald-100 hover:bg-emerald-50/30"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
                  <Check className="h-3.5 w-3.5 text-accent" />
                </span>
                <span className="text-sm font-medium text-gray-700">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              A clear path from free analysis to lasting results
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="relative rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-200 hover:border-blue-100 hover:bg-blue-50/30 hover:shadow-md">
                {/* Connector arrow (desktop only, not on last item) */}
                {i < PROCESS.length - 1 && (
                  <span
                    className="process-connector hidden lg:block"
                    aria-hidden="true"
                  />
                )}
                <span className="block text-5xl font-extrabold leading-none text-outline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand">
                  <Clock className="h-3.5 w-3.5" />
                  {step.phase}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case studies */}
      <section className="relative overflow-hidden bg-ink">
        <AuroraBackdrop network />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Proof of work
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Real before and after results
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {CASE_STUDIES.map((c) => (
              <div
                key={c.tag}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:border-white/20 hover:bg-white/10"
              >
                <span className="inline-block self-start rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
                  {c.tag}
                </span>
                <div className="mt-4 flex-1 space-y-3">
                  <p className="text-sm text-blue-100/80">
                    <span className="font-semibold text-white">Challenge: </span>
                    {c.challenge}
                  </p>
                  <p className="text-sm text-blue-100/80">
                    <span className="font-semibold text-white">Result: </span>
                    {c.result}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
                    <Clock className="h-4 w-4" />
                    {c.timeline}
                  </p>
                  <span className="text-xs text-blue-300/60">campaign duration</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Who we serve
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Reputation strategy tuned to your industry
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}/`}
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand transition duration-200 group-hover:bg-blue-100 group-hover:text-blue-700">
                  <i.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-ink transition group-hover:text-brand">{i.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{i.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Trusted by leaders who cannot afford a bad page one
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-200 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/6"
              >
                {/* Decorative large quote mark */}
                <span
                  className="pointer-events-none absolute right-4 top-2 select-none text-6xl font-serif leading-none text-blue-100"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <div className="relative flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="relative mt-4 text-gray-700 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4 text-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-brand">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block font-semibold text-ink">{t.name}</span>
                    <span className="text-gray-500">{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Faq items={HOME_FAQS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function SerpRow({
  title,
  url,
  rank,
  good = false,
  suppressed = false,
}: {
  title: string;
  url: string;
  rank?: number;
  good?: boolean;
  suppressed?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${suppressed ? "opacity-45" : ""}`}>
      {/* Rank badge */}
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
          suppressed
            ? "bg-gray-100 text-gray-400"
            : good
            ? "bg-emerald-50 text-emerald-600"
            : "bg-blue-50 text-blue-600"
        }`}
      >
        {rank}
      </span>
      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-sm font-semibold ${
            suppressed ? "text-gray-400 line-through" : "text-ink"
          }`}
        >
          {title}
        </p>
        <p className="truncate text-xs text-gray-400">{url}</p>
      </div>
      {good && (
        <span className="shrink-0">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
        </span>
      )}
    </div>
  );
}
