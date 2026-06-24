import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <p className="text-7xl font-bold gradient-text">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink">Page not found</h1>
        <p className="mt-3 text-gray-600">
          The page you are looking for moved or no longer exists. Let us get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full brand-gradient px-6 py-3 text-base font-semibold text-white"
          >
            <Home className="h-5 w-5" />
            Back to home
          </Link>
          <Link
            href="/free-orm-scan/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-base font-semibold text-ink transition hover:border-brand hover:text-brand"
          >
            <Search className="h-5 w-5" />
            Free ORM Scan
          </Link>
        </div>
      </div>
    </section>
  );
}
