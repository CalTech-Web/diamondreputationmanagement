import { Breadcrumbs } from "./Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  sub,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  breadcrumbs: { name: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="dot-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 0%, rgba(37,99,235,0.35) 0%, rgba(17,24,39,0) 60%), radial-gradient(50% 50% at 90% 10%, rgba(79,70,229,0.3) 0%, rgba(17,24,39,0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow && (
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {sub && <p className="mt-4 max-w-2xl text-lg text-blue-100/90">{sub}</p>}
      </div>
    </section>
  );
}
