import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-blue-100">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {last ? (
                <span className="font-medium text-white" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="transition hover:text-white">
                    {item.name}
                  </Link>
                  <ChevronRight className="h-4 w-4 text-blue-200/70" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
