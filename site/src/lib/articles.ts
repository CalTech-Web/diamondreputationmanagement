export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Article = {
  slug: string;
  title: string; // SEO title
  h1: string;
  description: string;
  keywords: string[];
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  body: Block[];
  faqs: { q: string; a: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "how-to-remove-negative-google-search-results",
    title: "How to Remove Negative Google Search Results (2026 Guide)",
    h1: "How to Remove Negative Google Search Results",
    description:
      "A practical guide to removing or suppressing negative Google search results. Learn what can be deleted, what must be outranked, and how professional reputation management works.",
    keywords: [
      "how to remove negative google search results",
      "remove negative content from google",
      "delete google search results",
      "bury negative search results",
      "negative content suppression",
    ],
    excerpt:
      "Some negative results can be deleted at the source. Most have to be outranked. Here is the honest, practical playbook for cleaning up page one.",
    datePublished: "2026-06-24",
    dateModified: "2026-06-24",
    readTime: "8 min read",
    body: [
      {
        type: "p",
        text: "A single negative result on page one of Google can quietly cost you clients, candidates, and deals. The good news is that you have more control than it feels like in the moment. The honest news is that the right fix depends on what the result is and who controls it. This guide walks through every realistic path, from outright removal to professional suppression, so you can choose the approach that actually works for your situation.",
      },
      {
        type: "h2",
        text: "First, understand the two ways results go away",
      },
      {
        type: "p",
        text: "There are only two ways a negative result stops hurting you. Either it is removed from the web at the source, or it is pushed so far down the rankings that almost nobody sees it. Removal is permanent but only possible in specific cases. Suppression works in nearly every case and is the backbone of professional reputation management.",
      },
      {
        type: "p",
        text: "Why does suppression work so well? Because of how people actually use search. Roughly 75% of clicks go to the top three results, and the vast majority never reach page two. If a damaging result sits at the bottom of page two, it has effectively stopped existing for your audience.",
      },
      {
        type: "h2",
        text: "When you can actually remove a result",
      },
      {
        type: "p",
        text: "Removal is realistic in a handful of situations. It is worth pursuing these first because a deleted result never comes back.",
      },
      {
        type: "ul",
        items: [
          "The content violates the host site's own policies. Many sites will remove defamatory, harassing, or fake content if you report it correctly.",
          "You own or control the page. If it lives on a profile, directory, or old site you control, you can edit or delete it directly.",
          "It contains personal information Google removes. Google removes results that expose certain sensitive personal data through its dedicated removal tools.",
          "It is legally actionable. Genuinely defamatory or unlawful content can sometimes be removed through legal channels, which is a conversation for your attorney.",
        ],
      },
      {
        type: "h3",
        text: "How to request removal the right way",
      },
      {
        type: "ol",
        items: [
          "Identify who controls the page, the website owner or the platform.",
          "Find the correct removal or content-policy channel for that site.",
          "Make a specific, factual request that points to the exact policy the content violates.",
          "Use Google's own removal tools for outdated pages and qualifying personal information.",
          "Keep records of every request and response.",
        ],
      },
      {
        type: "h2",
        text: "When you cannot remove it, you suppress it",
      },
      {
        type: "p",
        text: "Most negative results live on sites you do not control and that will not take them down. This is where suppression comes in. The strategy is straightforward to describe and hard to execute well: build and strengthen positive, authoritative results until they outrank the negative one and push it off page one.",
      },
      {
        type: "p",
        text: "Suppression works because Google ranks the most relevant, authoritative pages for your name or brand. When you create more of those pages and earn the signals that make them rank, they climb above the negative result. The negative content does not disappear from the internet, but it disappears from where your audience looks.",
      },
      {
        type: "h3",
        text: "The assets that do the work",
      },
      {
        type: "ul",
        items: [
          "Owned profiles on high-authority platforms that rank for your name",
          "A strong, optimized website or personal site you control",
          "Authoritative articles, interviews, and press that reflect your real story",
          "Active, verified social and professional profiles",
          "Positive reviews on the platforms that show up in your search results",
        ],
      },
      {
        type: "h2",
        text: "How long does it take?",
      },
      {
        type: "p",
        text: "For most names and brands, meaningful movement shows up within 90 to 120 days. Deeply entrenched results on very high-authority sites can take 6 to 12 months to fully suppress. Anyone promising to erase a stubborn result overnight is selling something that does not exist.",
      },
      {
        type: "h2",
        text: "Mistakes that make it worse",
      },
      {
        type: "ul",
        items: [
          "Engaging publicly with the author or commenters, which often feeds the story and its ranking.",
          "Buying fake reviews or fake positive content, which violates platform rules and backfires badly.",
          "Filing aggressive legal threats over content that is unflattering but legal, which can trigger more coverage.",
          "Doing nothing, because early problems are far cheaper to fix than entrenched ones.",
        ],
      },
      {
        type: "h2",
        text: "When to bring in a professional",
      },
      {
        type: "p",
        text: "If the result sits on a high-authority site, ranks for a high-stakes term like your name or brand, or is part of a coordinated attack, professional reputation management is usually the fastest and safest path. A specialist team maps the exact targets, builds the assets that can realistically outrank them, and defends the gains so the negative result does not climb back.",
      },
      {
        type: "p",
        text: "At Diamond Reputation Management, we start every engagement with a free page-one analysis that tells you, honestly, what can be removed, what has to be suppressed, and how long it will realistically take. That clarity alone is often worth the call.",
      },
    ],
    faqs: [
      {
        q: "Can negative Google results be removed permanently?",
        a: "Sometimes. If the content violates the host site's policies, exposes certain personal information, lives on a page you control, or is legally actionable, removal is possible. When it is not, suppression pushes the result off page one instead.",
      },
      {
        q: "How long does it take to remove or suppress a result?",
        a: "Removal can be quick when a site cooperates. Suppression typically shows meaningful movement in 90 to 120 days, and entrenched results can take 6 to 12 months.",
      },
      {
        q: "Is it safe to respond to the negative content myself?",
        a: "Usually not in public. Engaging often amplifies the content and its ranking. A measured, strategic approach works far better than a public back and forth.",
      },
    ],
  },
  {
    slug: "online-reputation-management-for-doctors",
    title: "Online Reputation Management for Doctors and Healthcare Providers",
    h1: "Online Reputation Management for Doctors and Healthcare Providers",
    description:
      "How doctors and healthcare practices protect their online reputation. Grow patient reviews, suppress damaging results, and respond to reviews in a HIPAA-aware way.",
    keywords: [
      "online reputation management for doctors",
      "reputation management for healthcare",
      "doctor reviews online",
      "medical practice reputation",
      "healthcare reputation management",
    ],
    excerpt:
      "In healthcare, reputation is trust and trust is the decision. Here is how providers build and protect it online.",
    datePublished: "2026-06-24",
    dateModified: "2026-06-24",
    readTime: "7 min read",
    body: [
      {
        type: "p",
        text: "When a patient chooses a provider, they almost always look you up first. They read your reviews, scan page one for your name and your practice, and form an impression before they ever call. In healthcare, that impression is built on trust, and trust is the entire decision. This guide covers how doctors and practices build, protect, and recover their online reputation.",
      },
      {
        type: "h2",
        text: "Why reputation matters more in healthcare",
      },
      {
        type: "p",
        text: "Few decisions feel as personal as choosing who will care for your health. Patients weigh reviews heavily, and a small number of negative reviews can carry outsized influence. Around 97% of people research a provider or brand online before engaging, and in medicine the stakes of that research are higher than almost anywhere else.",
      },
      {
        type: "h2",
        text: "The three pillars of healthcare reputation",
      },
      {
        type: "h3",
        text: "1. Grow authentic patient reviews",
      },
      {
        type: "p",
        text: "The single most effective thing most practices can do is make it easy for satisfied patients to leave honest reviews. A steady stream of authentic positive reviews lifts your average rating, improves how you appear in the local pack, and dilutes the impact of any one negative review. The key word is authentic. Compliant systems that gently invite real patients to share their experience work. Fake reviews violate platform rules and put your practice at risk.",
      },
      {
        type: "h3",
        text: "2. Suppress damaging search results",
      },
      {
        type: "p",
        text: "Sometimes the problem is not a review but a result. An outdated article, a complaint site, or a damaging story can rank for a provider's name. When that content cannot be removed at the source, the answer is suppression: building stronger, authoritative owned assets that outrank the damaging result and push it off page one.",
      },
      {
        type: "h3",
        text: "3. Respond carefully and compliantly",
      },
      {
        type: "p",
        text: "Review responses in healthcare require special care. You cannot confirm someone is a patient or discuss any detail of their care without violating privacy rules. The right approach uses measured, compliant language that shows you take feedback seriously without ever disclosing protected information. A consistent response strategy builds trust with everyone reading, not just the reviewer.",
      },
      {
        type: "h2",
        text: "Practice reputation and provider reputation",
      },
      {
        type: "p",
        text: "Healthcare reputation lives at two levels. The practice has its own search presence and reviews, and individual providers have their own names that patients search directly. Both matter. A strong practice presence does not protect a provider whose personal name surfaces a damaging result, and a great individual reputation does not fix a practice with a poor local rating. A complete program covers both.",
      },
      {
        type: "h2",
        text: "Common reputation challenges for providers",
      },
      {
        type: "ul",
        items: [
          "A handful of negative reviews dominating the local pack",
          "An outdated or damaging article ranking for a provider's name",
          "Review responses that have to protect patient privacy",
          "Multi-provider practices with inconsistent online presence",
          "Negative content from a single difficult patient interaction",
        ],
      },
      {
        type: "h2",
        text: "A simple plan to start",
      },
      {
        type: "ol",
        items: [
          "Audit how your practice and each provider appear on page one of Google.",
          "Put a compliant review-generation system in place for happy patients.",
          "Establish a privacy-safe response strategy for every new review.",
          "Identify any damaging result that needs suppression and build the owned assets to outrank it.",
          "Monitor every provider profile so new issues surface early.",
        ],
      },
      {
        type: "h2",
        text: "When to get help",
      },
      {
        type: "p",
        text: "If a damaging result ranks for your name, if negative reviews are shaping your local presence, or if you simply do not have time to manage this alongside patient care, a specialist team is worth the investment. At Diamond Reputation Management we manage reputation for practices and individual providers, and we start with a free analysis of exactly what patients see when they look you up.",
      },
    ],
    faqs: [
      {
        q: "Can you help an individual doctor or only a practice?",
        a: "Both. We manage reputation at the practice level and for individual providers whose personal name drives patient decisions.",
      },
      {
        q: "How do you grow reviews without breaking the rules?",
        a: "We build compliant systems that make it easy for genuinely satisfied patients to leave honest reviews. We never buy or fabricate reviews, which violates platform rules.",
      },
      {
        q: "How do you respond to reviews without violating HIPAA?",
        a: "We use measured, compliant responses that never confirm a patient relationship or disclose any care detail, while still showing that feedback is taken seriously.",
      },
    ],
  },
  {
    slug: "what-is-online-reputation-management",
    title: "What Is Online Reputation Management and How Does It Work?",
    h1: "What Is Online Reputation Management and How Does It Work?",
    description:
      "A clear explanation of online reputation management (ORM): what it is, how suppression and amplification work, what it costs in time, and how to know if you need it.",
    keywords: [
      "what is online reputation management",
      "online reputation management explained",
      "how does ORM work",
      "reputation management meaning",
      "ORM services",
    ],
    excerpt:
      "Online reputation management is the practice of shaping what people find when they search your name or brand. Here is how it actually works.",
    datePublished: "2026-06-24",
    dateModified: "2026-06-24",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Online reputation management, often shortened to ORM, is the practice of shaping what people find when they search for your name or your brand. It combines search strategy, content, reviews, and monitoring to make sure page one of Google reflects the truth you want represented rather than the worst thing anyone has ever said about you. This guide explains what ORM is, how it works, and how to tell whether you need it.",
      },
      {
        type: "h2",
        text: "Why your search results are your reputation",
      },
      {
        type: "p",
        text: "For most people and businesses, page one of Google is the reputation. About 97% of people research a brand or person online before they buy or engage, and roughly 75% of clicks go to the top three results. Whatever sits at the top of your search results is, for practical purposes, what the world believes about you. ORM is the discipline of making sure those results work in your favor.",
      },
      {
        type: "h2",
        text: "The core mechanics of ORM",
      },
      {
        type: "h3",
        text: "Suppression",
      },
      {
        type: "p",
        text: "Suppression is the practice of pushing negative or unwanted results down in the rankings by building stronger, more authoritative results that outrank them. The negative content stays on the web, but it moves to page two or lower where almost nobody looks. Suppression is the workhorse of ORM because most damaging content lives on sites you do not control and cannot simply delete.",
      },
      {
        type: "h3",
        text: "Amplification",
      },
      {
        type: "p",
        text: "Amplification is the positive side of the same coin. It means creating and promoting owned media, profiles, articles, and verified pages that tell your real story and earn page-one positions. Amplification both fills your results with positive content and provides the assets that do the suppressing.",
      },
      {
        type: "h3",
        text: "Review management",
      },
      {
        type: "p",
        text: "For many businesses, reviews are the most visible form of reputation. Review management grows the volume of authentic positive reviews, monitors sentiment across platforms, and puts a real-time response strategy in place. Your star rating is often the very first signal a prospect sees.",
      },
      {
        type: "h3",
        text: "Monitoring",
      },
      {
        type: "p",
        text: "Monitoring keeps continuous watch across search, news, and review platforms so new negative content surfaces while it is still small and cheap to address. The earliest mover almost always wins a reputation problem.",
      },
      {
        type: "h2",
        text: "What ORM is not",
      },
      {
        type: "ul",
        items: [
          "It is not buying fake reviews or fake positive content, which violates platform rules and backfires.",
          "It is not a magic delete button that erases stubborn results overnight.",
          "It is not a one-time project, because reputation is defended over time.",
          "It is not the same as PR, though the two work well together.",
        ],
      },
      {
        type: "h2",
        text: "How long ORM takes and what it costs",
      },
      {
        type: "p",
        text: "Most clients see meaningful movement within 90 to 120 days. Entrenched results on very high-authority sites can take 6 to 12 months. Cost varies with how difficult the targets are and how much positive presence already exists, which is why a real analysis comes before any quote.",
      },
      {
        type: "h2",
        text: "How to tell if you need ORM",
      },
      {
        type: "ul",
        items: [
          "Something negative ranks on page one for your name or brand.",
          "Your reviews are dragging down decisions before a prospect ever calls.",
          "You are about to raise money, hire, sell, or step into the public eye.",
          "A story, post, or competitor attack is gaining traction.",
          "You have cleaned up page one and want to keep it that way.",
        ],
      },
      {
        type: "h2",
        text: "Getting started",
      },
      {
        type: "p",
        text: "The right first step is always a clear-eyed look at what people actually find when they search you. At Diamond Reputation Management, our free page-one analysis maps the risks and the opportunities and gives you an honest plan, whether you work with us or not.",
      },
    ],
    faqs: [
      {
        q: "What does online reputation management actually do?",
        a: "It shapes what people find when they search your name or brand, by suppressing negative results, amplifying positive owned media, managing reviews, and monitoring for new issues.",
      },
      {
        q: "Is ORM the same as SEO?",
        a: "They overlap. ORM uses search strategy and content like SEO, but the goal is controlling the narrative around a name or brand rather than driving traffic to a single site.",
      },
      {
        q: "How quickly does ORM work?",
        a: "Most clients see meaningful movement within 90 to 120 days, with entrenched results taking 6 to 12 months.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
