import { Gem } from "lucide-react";

const WORDS = [
  "Reputation Management",
  "Content Suppression",
  "Review Management",
  "Crisis Response",
  "Brand Monitoring",
  "Own Page One",
];

// Big scrolling keyword band, sits above the footer.
export function Marquee() {
  const sequence = [...WORDS, ...WORDS];
  return (
    <section
      aria-hidden="true"
      className="marquee-mask relative overflow-hidden border-t border-gray-100 bg-gradient-to-b from-white to-blue-50/60 py-8"
    >
      <div className="marquee-track">
        {sequence.map((w, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${
                i % 2 === 0 ? "text-ink" : "text-outline"
              }`}
            >
              {w}
            </span>
            <Gem className="h-6 w-6 shrink-0 text-brand sm:h-7 sm:w-7" />
          </span>
        ))}
      </div>
    </section>
  );
}
