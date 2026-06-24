"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { q: string; a: string };

export function Faq({ items, heading = "Frequently asked questions" }: { items: Item[]; heading?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl">
      {heading && (
        <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {heading}
        </h2>
      )}
      <dl className="mt-8 divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="px-5">
              <dt>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </dt>
              {isOpen && (
                <dd className="pb-5 text-base leading-relaxed text-gray-600">{item.a}</dd>
              )}
            </div>
          );
        })}
      </dl>
    </div>
  );
}
