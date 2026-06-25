export const SITE = {
  name: "Diamond Reputation Management",
  shortName: "Diamond Reputation",
  domain: "diamondreputationmanagement.com",
  url: "https://www.diamondreputationmanagement.com",
  formSite: "diamondreputationmanagement.com",
  tagline: "Powered by People, Perfected with AI.",
  description:
    "New Orleans based online reputation management specialists with 30+ years of combined expertise. We suppress harmful content, win back trust, and help your brand own page one of Google.",
  phone: "504.233.4365",
  phoneHref: "tel:+15042334365",
  email: "sales@diamondlinks.com",
  founded: 2011,
  address: {
    street: "3436 Magazine Street #622",
    city: "New Orleans",
    region: "LA",
    regionName: "Louisiana",
    postal: "70115",
    country: "US",
  },
  geo: {
    lat: 29.9276,
    lng: -90.0907,
  },
  rating: {
    value: "5.0",
    count: 4,
  },
  // Cloudflare Turnstile site key for diamondreputationmanagement.com.
  turnstileSiteKey: "0x4AAAAAADqkO_8SWtoeCMlm",
  // GA4 Measurement ID is pending from the client. Leave empty to disable the tag.
  gaId: "",
} as const;

export const STATS = [
  { value: "30+", label: "Years combined expertise" },
  { value: "5.0", label: "Verified client rating" },
  { value: "90-120", label: "Days to first results" },
  { value: "48hr", label: "Free analysis turnaround" },
];

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const SERVICE_NAV: NavChild[] = [
  { label: "Online Reputation Management", href: "/services/online-reputation-management/" },
  { label: "Content Suppression", href: "/services/content-suppression/" },
  { label: "Review Management", href: "/services/review-management/" },
  { label: "Crisis Response", href: "/services/crisis-response/" },
  { label: "Brand Monitoring", href: "/services/brand-monitoring/" },
];

export const NAV: NavItem[] = [
  { label: "Services", href: "/services/", children: SERVICE_NAV },
  { label: "Who We Serve", href: "/who-we-serve/" },
  { label: "About", href: "/about/" },
  { label: "Resources", href: "/resources/" },
];
