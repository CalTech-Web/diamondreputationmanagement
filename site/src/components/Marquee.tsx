import { Gem } from "lucide-react";

const WORDS = [
  "Reputation Management",
  "Content Suppression",
  "Review Management",
  "Crisis Response",
  "Brand Monitoring",
  "Own Page One",
];

// Big scrolling keyword band. Sits directly above the footer, which pulls up
// over its lower edge so the text tucks behind the footer (Dermal-style).
export function Marquee() {
  const sequence = [...WORDS, ...WORDS];
  return (
    <section
      aria-hidden="true"
      className="marquee-mask relative z-0 overflow-hidden bg-white pt-10 pb-16"
    >
      <div className="marquee-track">
        {sequence.map((w, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-8 text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl ${
                i % 2 === 0 ? "text-ink" : "text-outline"
              }`}
            >
              {w}
            </span>
            <Gem className="h-7 w-7 shrink-0 text-brand sm:h-9 sm:w-9" />
          </span>
        ))}
      </div>
    </section>
  );
}
