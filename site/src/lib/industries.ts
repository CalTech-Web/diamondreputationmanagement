import type { LucideIcon } from "lucide-react";
import {
  HeartPulse,
  Scale,
  Trophy,
  Landmark,
  Cloud,
  Megaphone,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  title: string;
  description: string;
  keywords: string[];
  heroSub: string;
  intro: string;
  challenges: string[];
  approach: string[];
  faqs: { q: string; a: string }[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    summary:
      "Protect the trust a patient needs before they ever book. We manage reviews and search results for practices and providers.",
    title: "Reputation Management for Healthcare & Doctors | Diamond Reputation Management",
    description:
      "Online reputation management for doctors, dentists, and healthcare practices. We grow patient reviews, suppress damaging results, and protect the trust patients need before they book.",
    keywords: [
      "reputation management for doctors",
      "healthcare reputation management",
      "medical practice reviews",
      "doctor online reputation",
    ],
    heroSub:
      "Patients research a provider before they book. We make sure what they find earns their trust.",
    intro:
      "In healthcare, reputation is trust, and trust is the whole decision. A patient choosing a provider reads reviews and scans page one before they ever call. We help practices and individual providers grow authentic patient reviews, suppress damaging or outdated results, and present a search presence that reflects the care you actually deliver.",
    challenges: [
      "A handful of negative reviews dominating the local pack",
      "An outdated or damaging article ranking for a provider's name",
      "HIPAA-sensitive responses that have to be handled carefully",
      "Multi-provider practices with inconsistent online presence",
    ],
    approach: [
      "Grow authentic patient reviews with compliant systems",
      "Suppress damaging results for the practice and provider names",
      "Coordinate careful, compliant review responses",
      "Monitor every provider profile for new issues",
    ],
    faqs: [
      {
        q: "Can you help an individual doctor, not just a practice?",
        a: "Yes. We manage reputation at the practice level and for individual providers whose personal name drives patient decisions.",
      },
      {
        q: "Do you handle review responses in a HIPAA-safe way?",
        a: "We coordinate response strategies that protect patient privacy and stay within platform and compliance rules.",
      },
    ],
  },
  {
    slug: "legal",
    name: "Legal",
    icon: Scale,
    summary:
      "Clients hire the attorney they trust on page one. We protect firm and attorney reputations in a high-scrutiny field.",
    title: "Reputation Management for Law Firms & Attorneys | Diamond Reputation Management",
    description:
      "Online reputation management for law firms and attorneys. We protect firm and attorney search results, grow client reviews, and suppress damaging content in a high-scrutiny profession.",
    keywords: [
      "reputation management for lawyers",
      "law firm reputation management",
      "attorney online reputation",
      "legal reputation management",
    ],
    heroSub:
      "A client hires the attorney they trust, and trust starts with what they find in search.",
    intro:
      "Legal is a high-scrutiny, high-stakes profession where a single damaging result can cost a firm serious cases. We protect the search presence of firms and individual attorneys, grow authentic client reviews, and suppress the kind of damaging or misleading content that erodes the trust your practice is built on.",
    challenges: [
      "Damaging results ranking for an attorney's name",
      "Negative or false reviews from difficult cases",
      "Bar and ethics constraints around marketing and responses",
      "Competitors and disgruntled parties seeding negative content",
    ],
    approach: [
      "Suppress damaging results for firm and attorney names",
      "Grow authentic client reviews within ethical guidelines",
      "Build authoritative owned profiles that rank",
      "Monitor continuously for new threats",
    ],
    faqs: [
      {
        q: "Do you understand bar advertising rules?",
        a: "We work within the ethical and advertising constraints of the profession and coordinate with your compliance team where needed.",
      },
      {
        q: "Can you help with a single damaging article?",
        a: "Yes. Suppressing one entrenched result for an attorney or firm name is one of the most common projects we take on.",
      },
    ],
  },
  {
    slug: "athletes",
    name: "Athletes",
    icon: Trophy,
    summary:
      "A name is a brand and a livelihood. We protect athletes and public figures from search results that follow them everywhere.",
    title: "Reputation Management for Athletes & Public Figures | Diamond Reputation Management",
    description:
      "Online reputation management for athletes and public figures. We protect your name in search, suppress damaging content, and shape a positive narrative that supports your brand and deals.",
    keywords: [
      "reputation management for athletes",
      "athlete online reputation",
      "public figure reputation management",
      "personal brand reputation",
    ],
    heroSub:
      "Your name is your brand and your livelihood. We protect how it shows up in search.",
    intro:
      "For athletes and public figures, your name is your brand, and page one follows you into every deal, contract, and opportunity. We suppress damaging content, amplify the positive story, and protect the search results that sponsors, teams, and fans see when they look you up.",
    challenges: [
      "Old posts or articles resurfacing at the worst time",
      "Viral negative content spreading fast",
      "Sponsors and teams scrutinizing your search results",
      "A personal name that is hard to control across platforms",
    ],
    approach: [
      "Suppress damaging results for your name",
      "Amplify positive owned media and verified profiles",
      "Stand up rapid crisis response when stories break",
      "Monitor your name continuously across platforms",
    ],
    faqs: [
      {
        q: "Can you act fast when something goes viral?",
        a: "Yes. Our crisis response mobilizes within 48 hours, which is exactly when a viral negative story is most dangerous.",
      },
      {
        q: "Do you work with agents and managers?",
        a: "Yes. We coordinate with your representation so the search and content side aligns with your overall brand strategy.",
      },
    ],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: Landmark,
    summary:
      "Money decisions run on trust. We help finance professionals and firms present a search presence clients can rely on.",
    title: "Reputation Management for Financial Services | Diamond Reputation Management",
    description:
      "Online reputation management for financial services, advisors, and finance executives. We protect search results, grow trust signals, and suppress damaging content in a trust-driven industry.",
    keywords: [
      "reputation management for financial services",
      "financial advisor reputation",
      "finance executive reputation management",
      "wealth management reputation",
    ],
    heroSub:
      "Money decisions run on trust, and trust starts with what clients find when they search your name.",
    intro:
      "Finance is messy and high-stakes, and clients hand over their money based on trust. We help advisors, firms, and finance executives present a search presence that earns confidence, suppress damaging results, and protect the reputation that every client relationship depends on.",
    challenges: [
      "A damaging article or complaint ranking for your name",
      "Regulatory and compliance constraints on messaging",
      "High-net-worth clients who research thoroughly",
      "Reputation risk that follows you between firms",
    ],
    approach: [
      "Suppress damaging results for advisor and firm names",
      "Build authoritative, compliant owned profiles",
      "Grow trust signals and authentic reviews",
      "Monitor continuously for new reputation risk",
    ],
    faqs: [
      {
        q: "Can you work within compliance rules?",
        a: "Yes. We build content and responses that respect the regulatory and compliance constraints of financial services.",
      },
      {
        q: "Do you help individuals or only firms?",
        a: "Both. We protect firm reputations and the personal names of advisors and executives who carry the relationships.",
      },
    ],
  },
  {
    slug: "saas",
    name: "SaaS",
    icon: Cloud,
    summary:
      "Buyers research before they trial. We strengthen brand search, manage reviews, and control the narrative for software companies.",
    title: "Reputation Management for SaaS & Software | Diamond Reputation Management",
    description:
      "Online reputation management for SaaS and software companies. We strengthen brand search, manage review platforms, and help you own the narrative buyers find before they ever start a trial.",
    keywords: [
      "reputation management for saas",
      "software company reputation",
      "saas review management",
      "b2b reputation management",
    ],
    heroSub:
      "Buyers research your brand before they trial. We make sure page one sells for you.",
    intro:
      "SaaS buyers research before they commit, and your brand search plus review platforms decide whether a trial ever starts. We strengthen your owned search presence, manage the review platforms that buyers trust, and help you control the narrative so visibility works in your favor.",
    challenges: [
      "Thin brand search with little owned control",
      "Negative or outdated reviews on software platforms",
      "Competitor comparison content ranking against you",
      "A founder or executive name that needs protection",
    ],
    approach: [
      "Build and rank owned brand assets",
      "Manage and grow reviews on key software platforms",
      "Suppress damaging or outdated results",
      "Protect founder and executive names",
    ],
    faqs: [
      {
        q: "Do you handle software review platforms?",
        a: "Yes. We work across the review platforms that matter for B2B and SaaS buyers, in addition to general search.",
      },
      {
        q: "Can you help our founder's personal reputation?",
        a: "Yes. For many SaaS companies the founder's name is a core trust signal, and we protect it alongside the brand.",
      },
    ],
  },
  {
    slug: "marketing-agencies",
    name: "Marketing Agencies",
    icon: Megaphone,
    summary:
      "Deliver reputation management for your clients under your own brand. A white-label partner that scales with you.",
    title: "White Label Reputation Management for Agencies | Diamond Reputation Management",
    description:
      "White label reputation management for marketing agencies. Deliver enterprise ORM results to your clients under your own brand, with our specialist team behind the scenes.",
    keywords: [
      "white label reputation management",
      "reputation management for agencies",
      "white label ORM",
      "agency reputation partner",
    ],
    heroSub:
      "Offer reputation management to your clients without building a team. We work behind the scenes, under your brand.",
    intro:
      "Marketing agencies trust us as the specialist team behind their reputation management offering. We deliver enterprise-grade ORM under your brand, scaling from a single client to a hundred, so you can add a high-value service without hiring specialists or building it from scratch.",
    challenges: [
      "Clients asking for reputation help you cannot staff",
      "The cost and risk of building an ORM team in house",
      "Needing results that hold up under your brand",
      "Scaling delivery as demand grows",
    ],
    approach: [
      "White-label delivery under your brand",
      "Scales from one client to a hundred plus",
      "Specialist team with 30+ years of combined focus",
      "Reporting you can hand straight to your client",
    ],
    faqs: [
      {
        q: "Will my clients know you are involved?",
        a: "No. We work entirely behind the scenes, and reporting is built for you to deliver under your own brand.",
      },
      {
        q: "How quickly can you scale with us?",
        a: "Our model scales from a single client to a hundred plus, so you can sell with confidence and we deliver.",
      },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
