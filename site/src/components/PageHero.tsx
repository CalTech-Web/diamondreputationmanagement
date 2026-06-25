import { Breadcrumbs } from "./Breadcrumbs";
import { AuroraBackdrop } from "./AuroraBackdrop";

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
      <AuroraBackdrop network />
      <div className="relative mx-auto flex min-h-[360px] max-w-7xl flex-col px-4 py-20 sm:min-h-[420px] sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-auto pt-10">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {sub && <p className="mt-5 max-w-2xl text-lg text-blue-100/90">{sub}</p>}
        </div>
      </div>
    </section>
  );
}
