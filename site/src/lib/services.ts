import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  EyeOff,
  Star,
  Siren,
  Radar,
  Sparkles,
  LineChart,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  icon: LucideIcon;
  // Short summary used on cards and listings
  summary: string;
  // SEO
  title: string;
  description: string;
  keywords: string[];
  // Page content
  heroHeadline: string;
  heroSub: string;
  intro: string;
  whatIncludes: { title: string; body: string }[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "online-reputation-management",
    name: "Online Reputation Management",
    navLabel: "Online Reputation Management",
    icon: ShieldCheck,
    summary:
      "A full page-one strategy that suppresses damaging results, amplifies positive owned media, and puts you back in control of your narrative.",
    title: "Online Reputation Management Services | Diamond Reputation Management",
    description:
      "Full service online reputation management. We audit page one, suppress harmful content, amplify positive owned media, and defend your search results with transparent monthly reporting.",
    keywords: [
      "online reputation management",
      "ORM services",
      "reputation management company",
      "fix Google search results",
      "manage online reputation",
    ],
    heroHeadline: "Negative content on page one costs you clients, revenue, and trust.",
    heroSub:
      "We suppress harmful results and amplify positive brand stories so your name owns its own narrative in search.",
    intro:
      "Your reputation is your most valuable asset. Page one of Google shapes how clients, partners, and employers see you long before they ever speak to you. Our online reputation management program audits exactly what is hurting you, then executes a custom plan to push the harmful content down and lift authentic, positive assets up.",
    whatIncludes: [
      {
        title: "Page-one audit",
        body: "We map every result on page one for your name or brand, flag the damaging items, and identify the fastest opportunities to take control.",
      },
      {
        title: "Negative content suppression",
        body: "We outrank damaging articles, reviews, and listings with stronger owned assets so they fall off page one where almost nobody looks.",
      },
      {
        title: "Positive asset amplification",
        body: "We build and promote owned media so Google's first page reflects your real strengths and the story you want told.",
      },
      {
        title: "Review management",
        body: "We grow authentic positive reviews, monitor sentiment, and respond in real time across Google, Yelp, and industry platforms.",
      },
      {
        title: "Crisis response",
        body: "If a story breaks or a competitor attacks, we move within 48 hours with coordinated content, links, and review action.",
      },
      {
        title: "Transparent monthly reporting",
        body: "Every month you see exactly what moved, what ranks where, and what comes next. No black boxes.",
      },
    ],
    whoFor: [
      "Executives and founders whose names carry the business",
      "Brands with a damaging article or review stuck on page one",
      "Public figures, athletes, and professionals managing scrutiny",
      "Any company where 75% of clicks going to the top three results works against them",
    ],
    faqs: [
      {
        q: "How long does online reputation management take?",
        a: "Most clients see meaningful movement within 90 to 120 days. Deeply entrenched results can take 6 to 12 months to fully suppress, and we map the realistic timeline during your free analysis.",
      },
      {
        q: "Can you remove the negative content completely?",
        a: "Sometimes content can be removed at the source. More often we suppress it by outranking the result with stronger positive assets so it drops off page one.",
      },
      {
        q: "Do I have to sign a long contract?",
        a: "No. We work month-to-month because results should keep you, not a contract.",
      },
    ],
  },
  {
    slug: "content-suppression",
    name: "Negative Content Suppression",
    navLabel: "Content Suppression",
    icon: EyeOff,
    summary:
      "Push damaging articles, reviews, and listings off page one with a targeted content and link strategy that keeps them buried.",
    title: "Negative Content Suppression Services | Diamond Reputation Management",
    description:
      "Bury negative search results. We suppress damaging articles, reviews, and listings with targeted content and authoritative link building so they fall off page one and stay there.",
    keywords: [
      "negative content suppression",
      "bury negative search results",
      "suppress google results",
      "remove negative articles google",
      "search result suppression",
    ],
    heroHeadline: "Push the damaging results down and keep them buried.",
    heroSub:
      "A single harmful link on page one can cost you the deal. We outrank it with stronger owned assets and defend the gains.",
    intro:
      "Content suppression is the core mechanic of reputation management. When a damaging article, review, or listing cannot be removed at the source, we move it where it does no harm by building stronger, more authoritative results that earn page-one positions ahead of it. Then we monitor so the suppressed content stays down.",
    whatIncludes: [
      {
        title: "Target mapping",
        body: "We identify every harmful result and the exact assets best positioned to outrank each one.",
      },
      {
        title: "Authoritative content",
        body: "We create and strengthen owned profiles, articles, and media that Google trusts more than the negative result.",
      },
      {
        title: "Strategic link building",
        body: "We earn and build the links that lift positive assets above the damaging content.",
      },
      {
        title: "Ongoing defense",
        body: "We monitor placements so suppressed results do not climb back, and we react fast if they try.",
      },
    ],
    whoFor: [
      "Anyone with a libelous or outdated article on page one",
      "Brands hit by a damaging news cycle",
      "Professionals whose name surfaces an old mistake",
      "Companies facing a coordinated negative campaign",
    ],
    faqs: [
      {
        q: "Is suppression the same as deletion?",
        a: "No. Deletion removes content at the source, which is not always possible. Suppression outranks it so it falls off page one where 75% of clicks never reach.",
      },
      {
        q: "How far down do you push negative results?",
        a: "The goal is page two or lower for the harmful result. Almost nobody clicks past the first page, so that is where the damage stops.",
      },
      {
        q: "Will the negative content come back?",
        a: "We monitor continuously and maintain the positive assets so suppressed results stay down. If anything shifts, we respond quickly.",
      },
    ],
  },
  {
    slug: "review-management",
    name: "Review Management",
    navLabel: "Review Management",
    icon: Star,
    summary:
      "Grow authentic positive reviews, monitor sentiment in real time, and recover from review attacks across every platform.",
    title: "Review Management Services | Diamond Reputation Management",
    description:
      "Online review management that grows authentic positive reviews, monitors sentiment across Google, Yelp, and industry platforms, and helps you recover from review attacks and false ratings.",
    keywords: [
      "review management",
      "online review management",
      "improve google reviews",
      "respond to negative reviews",
      "reputation review monitoring",
    ],
    heroHeadline: "Win more authentic reviews and protect the ones that matter.",
    heroSub:
      "Your star rating is the first number a prospect sees. We help you earn it, monitor it, and defend it.",
    intro:
      "Reviews are reputation in its most visible form. We build simple systems that encourage your happy customers to leave authentic reviews, monitor sentiment across the platforms that matter, and put a real-time response strategy in place. When false or malicious reviews appear, we help you fight back the right way.",
    whatIncludes: [
      {
        title: "Review generation",
        body: "We set up ethical, compliant systems that turn satisfied customers into authentic positive reviews.",
      },
      {
        title: "Sentiment monitoring",
        body: "We track new reviews across Google, Yelp, and industry platforms so nothing catches you off guard.",
      },
      {
        title: "Response strategy",
        body: "We give you a real-time playbook for responding to reviews that builds trust and defuses problems.",
      },
      {
        title: "Attack recovery",
        body: "When false ratings or review bombs hit, we coordinate the platform reports and the positive volume to recover.",
      },
    ],
    whoFor: [
      "Local businesses living and dying by the local pack",
      "Healthcare and legal practices held to a high trust bar",
      "Brands recovering from a wave of negative reviews",
      "Multi-location companies standardizing review response",
    ],
    faqs: [
      {
        q: "Can you get fake reviews removed?",
        a: "We help identify reviews that violate platform policies and manage the reporting process. We never buy or fabricate reviews, which violates platform rules and backfires.",
      },
      {
        q: "How do you grow positive reviews?",
        a: "We build compliant systems that make it easy for genuinely happy customers to leave honest reviews at the right moment.",
      },
      {
        q: "Which platforms do you cover?",
        a: "Google is the priority for most clients, alongside Yelp and the review platforms specific to your industry.",
      },
    ],
  },
  {
    slug: "crisis-response",
    name: "Crisis ORM Response",
    navLabel: "Crisis Response",
    icon: Siren,
    summary:
      "Rapid response protocols for viral press or competitor attacks, with coordinated content, link, and review action within 48 hours.",
    title: "Reputation Crisis Response Services | Diamond Reputation Management",
    description:
      "Reputation crisis management and rapid response. When a story breaks or a competitor attacks, we mobilize coordinated content, link, and review action within 48 hours to contain the damage.",
    keywords: [
      "reputation crisis management",
      "ORM crisis response",
      "online reputation crisis",
      "damage control online",
      "respond to viral negative press",
    ],
    heroHeadline: "When the story breaks, every hour counts.",
    heroSub:
      "Viral press and competitor attacks move fast. Our crisis protocols move faster, with one team and no hand-offs.",
    intro:
      "A reputation crisis is not the time for a slow agency and a chain of hand-offs. The moment a damaging story breaks, our team mobilizes a coordinated response across content, links, and reviews to contain the spread and start the long-term recovery of page one. Same team, same day.",
    whatIncludes: [
      {
        title: "Rapid assessment",
        body: "We map the spread of the story, the ranking threats, and the highest-leverage moves within hours.",
      },
      {
        title: "Coordinated action",
        body: "Content, links, and review response launch together within 48 hours, not over weeks.",
      },
      {
        title: "Containment",
        body: "We work to keep the damaging narrative from owning page one while the news cycle runs its course.",
      },
      {
        title: "Long-term recovery",
        body: "After containment, we execute the suppression and amplification plan that rebuilds your search results.",
      },
    ],
    whoFor: [
      "Executives and brands facing a breaking story",
      "Companies targeted by a competitor smear",
      "Public figures hit by a viral negative post",
      "Any business that needs to act today, not next month",
    ],
    faqs: [
      {
        q: "How fast can you start during a crisis?",
        a: "We mobilize within hours and have coordinated action live within 48 hours. Reputation crises reward speed, and our single-team model removes the hand-offs that slow other agencies down.",
      },
      {
        q: "Can you make a story disappear overnight?",
        a: "No honest firm can. We contain the spread quickly, then execute the suppression and amplification work that restores page one over the following weeks and months.",
      },
      {
        q: "Do you work with PR teams?",
        a: "Yes. We coordinate the search and content side while your PR and legal teams handle their lanes.",
      },
    ],
  },
  {
    slug: "brand-monitoring",
    name: "Brand Monitoring",
    navLabel: "Brand Monitoring",
    icon: Radar,
    summary:
      "Continuous tracking across search, news, and review platforms so you hear about new negative content first, not last.",
    title: "Brand Monitoring Services | Diamond Reputation Management",
    description:
      "Continuous brand and reputation monitoring across search, news, and review platforms. Get early alerts when new negative content appears so you can respond before it spreads.",
    keywords: [
      "brand monitoring",
      "reputation monitoring",
      "online brand tracking",
      "monitor brand mentions",
      "negative content alerts",
    ],
    heroHeadline: "Hear about it first, not after it ranks.",
    heroSub:
      "The earliest mover wins a reputation problem. We watch search, news, and reviews so you are never the last to know.",
    intro:
      "Most reputation damage is far cheaper to fix early. Our brand monitoring keeps continuous watch across search results, news, and review platforms, so when something negative appears we flag it while it is still small and easy to address. Monitoring also tracks your competitors and the broader conversation around your name.",
    whatIncludes: [
      {
        title: "Search surveillance",
        body: "We track page-one movement for your priority terms so ranking threats surface immediately.",
      },
      {
        title: "News and mention tracking",
        body: "We monitor news and the wider web for new mentions of your name and brand.",
      },
      {
        title: "Review alerts",
        body: "New reviews across your platforms trigger alerts so response never lags.",
      },
      {
        title: "Early-warning reporting",
        body: "You get clear, timely notice of anything that needs attention, with a recommended next step.",
      },
    ],
    whoFor: [
      "Brands that have already cleaned up page one and want to keep it",
      "Executives who need to know the moment their name moves",
      "Companies in competitive or litigious industries",
      "Anyone who wants to fix problems while they are still small",
    ],
    faqs: [
      {
        q: "What exactly do you monitor?",
        a: "Page-one search results for your priority terms, news and web mentions, and reviews across the platforms that matter to your business.",
      },
      {
        q: "How quickly will I be alerted?",
        a: "Our goal is to surface anything meaningful while it is still small. Early detection is what makes a reputation problem cheap to fix.",
      },
      {
        q: "Is monitoring included with other services?",
        a: "Monitoring is built into our ongoing reputation management programs and is also available as a standalone service.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// Extra benefits surfaced on the services overview page
export const EXTRA_PILLARS = [
  {
    icon: Sparkles,
    title: "Positive Asset Amplification",
    body: "We create and promote owned media so the first page of Google reflects your real strengths.",
  },
  {
    icon: LineChart,
    title: "Transparent Monthly Reporting",
    body: "Every month you see what ranks where, what moved, and what we are doing next. No black boxes.",
  },
];
