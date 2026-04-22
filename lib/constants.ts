import { ROUTES } from "./routes";

export const SITE_NAME = "Nitisetu AI";
export const SITE_TAGLINE = "Detect. Understand. Predict.";
export const SITE_DESCRIPTION =
  "Nitisetu AI connects social signals, editorial coverage, narrative clustering, influence mapping, and crisis detection into a single operator-first SaaS product.";

export type NavChild = { title: string; desc: string; href: string };
export type NavColumn = {
  title: string;
  links: { label: string; href: string }[];
};
export type NavFooterLink = { label: string; href: string };

export type NavEntry =
  | {
      key: string;
      label: string;
      href: string;
      children: NavChild[];
      footer: NavFooterLink[];
    }
  | {
      key: string;
      label: string;
      href: string;
      columns: NavColumn[];
    }
  | {
      key: string;
      label: string;
      href: string;
    };

export const NAV_LINKS: NavEntry[] = [
  {
    label: "Products",
    key: "products",
    href: ROUTES.products,
    children: [
      {
        title: "Narrative Intelligence",
        desc: "Real-time narrative clustering and tracking across social and editorial sources.",
        href: `${ROUTES.products}#narrative`,
      },
      {
        title: "KedarSetu Simulation",
        desc: "Scenario simulation engine for predicting narrative escalation and second-order effects.",
        href: `${ROUTES.products}#kedarsetu`,
      },
      {
        title: "Influence Mapper",
        desc: "Identify and rank actors driving political conversations across networks and media.",
        href: `${ROUTES.products}#influence`,
      },
      {
        title: "API Access",
        desc: "Programmatic access to feeds, entities, and risk scores for custom workflows.",
        href: `${ROUTES.products}#api`,
      },
    ],
    footer: [
      { label: "Get started", href: `${ROUTES.home}#contact` },
      { label: "Docs", href: ROUTES.help },
    ],
  },
  { label: "Research", key: "research", href: ROUTES.research },
  {
    label: "Resources",
    key: "resources",
    href: ROUTES.help,
    columns: [
      {
        title: "Learn",
        links: [
          { label: "Blog", href: ROUTES.blog },
          { label: "Help Center", href: ROUTES.help },
          { label: "Safety and Security", href: ROUTES.safety },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About us", href: ROUTES.about },
          { label: "Careers", href: ROUTES.careers },
        ],
      },
    ],
  },
];

export const FEATURES = [
  {
    title: "Narrative Tracking",
    desc: "Automatically cluster and timeline emerging narratives across Twitter, news, and regional media — updated in real time.",
  },
  {
    title: "Sentiment Analysis",
    desc: "Measure emotional tone and intensity around key entities and topics, segmented by geography and audience.",
  },
  {
    title: "Influencer Detection",
    desc: "Identify the accounts, journalists, and voices amplifying a narrative before it reaches mass attention.",
  },
  {
    title: "News Correlation",
    desc: "Cross-reference social signals with editorial coverage to detect coordinated campaigns and inauthentic amplification.",
  },
  {
    title: "Simulation (KedarSetu)",
    desc: "Model how a high-risk narrative might escalate across 48–72 hours using historical spread patterns and actor graphs.",
  },
  {
    title: "Risk Detection",
    desc: "Trigger alerts when a narrative crosses risk thresholds — reputational, electoral, or law-and-order sensitive.",
  },
];

export const PLATFORM_QUESTIONS = [
  "What narratives are forming?",
  "Is something going viral?",
  "Is this a reputational risk?",
  "Who is driving the conversation?",
  "Can it escalate into a national issue?",
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Data",
    desc: "Tweets, news, replies, and narrative-relevant coverage are ingested into a unified, real-time pipeline.",
  },
  {
    step: "02",
    title: "AI",
    desc: "Narratives are clustered, scored, and linked to risk levels, sentiment trends, and likely actor networks.",
  },
  {
    step: "03",
    title: "Insights",
    desc: "Operators get entity-level dashboards, trending narrative feeds, and influence signals — all in one view.",
  },
  {
    step: "04",
    title: "Prediction",
    desc: "High-risk narratives are escalated into scenario simulations for rapid response planning.",
  },
];

export const PRODUCT_PREVIEWS = [
  {
    label: "SCREENS",
    caption: "Command dashboard with live risk and narrative velocity",
    accent: "#3b82f6",
  },
  {
    label: "ENTITY",
    caption: "Entity intelligence with cross-platform mention graph",
    accent: "#8b5cf6",
  },
  {
    label: "NARRATIVE",
    caption: "Drilldown modal with timeline, drivers, and related coverage",
    accent: "#ec4899",
  },
];

/** Home page — credibility strip */
export const STATS = [
  { value: "50M+", label: "Posts & articles indexed / month", sub: "Regional + national sources" },
  { value: "<90s", label: "Median detection latency", sub: "For high-velocity spikes" },
  { value: "24/7", label: "Crisis watch coverage", sub: "Configurable alert rules" },
  { value: "ISO-ready", label: "Security posture", sub: "Audit logs & data residency options" },
];

export const USE_CASES = [
  {
    title: "Campaign war rooms",
    desc: "Track opponent narratives, local media pickup, and influencer pivots in one place — before they hit primetime.",
    tag: "Elections",
  },
  {
    title: "Reputation & policy desks",
    desc: "See how a statement or event is reframed across channels, and which stakeholders are amplifying or resisting.",
    tag: "Corporate",
  },
  {
    title: "Newsroom verification",
    desc: "Correlate breaking social claims with wire and regional coverage to prioritize what to cover next.",
    tag: "Media",
  },
];

export const RESEARCH_TEASER = {
  headline: "Method notes & model cards",
  body: "We publish evaluation protocols, bias reviews, and dataset cards for our narrative models so teams can trust what they ship to production.",
  cta: "Read research",
  href: ROUTES.research,
};

export const TESTIMONIAL = {
  quote:
    "We replaced three tools and a spreadsheet with Nitisetu. The simulation view alone changed how fast our desk responds when a story breaks wrong.",
  role: "Head of digital strategy",
  org: "Regional campaign team",
};

export const BLOG_POSTS = [
  {
    slug: "narrative-clusters-101",
    title: "How we cluster political narratives without hand-tagged topics",
    excerpt: "A look at embedding alignment, temporal decay, and human-in-the-loop review.",
    date: "2026-03-12",
    readMins: 8,
  },
  {
    slug: "risk-scores-explained",
    title: "What goes into a Nitisetu risk score",
    excerpt: "Velocity, actor diversity, geographic spread, and historical analogues — in plain language.",
    date: "2026-02-28",
    readMins: 6,
  },
  {
    slug: "kedarsetu-simulation",
    title: "Inside KedarSetu: scenario trees for narrative escalation",
    excerpt: "Why we model 48–72 hour windows and how teams stress-test response plans.",
    date: "2026-02-14",
    readMins: 10,
  },
];

export const CAREERS_ROLES = [
  {
    title: "Senior ML Engineer — NLP",
    location: "Bengaluru / Remote (IN)",
    type: "Full-time",
    href: ROUTES.careers,
  },
  {
    title: "Product Designer — Data surfaces",
    location: "Hybrid",
    type: "Full-time",
    href: ROUTES.careers,
  },
  {
    title: "Forward Deployed Analyst",
    location: "Delhi NCR",
    type: "Full-time",
    href: ROUTES.careers,
  },
];

export const PRODUCT_SECTIONS = [
  {
    id: "narrative",
    title: "Narrative Intelligence",
    body: "Surface forming and trending narratives with provenance: who said what first, how it spread, and which outlets picked it up. Built for operators who need signal, not noise.",
    bullets: ["Entity-linked threads", "Cross-language clustering", "Editorial ↔ social correlation"],
  },
  {
    id: "kedarsetu",
    title: "KedarSetu Simulation",
    body: "Stress-test escalation paths when a narrative is still small but moving fast. Compare scenarios against historical analogues and your own response playbooks.",
    bullets: ["48–72 hour projection windows", "Actor graph stress tests", "Exportable briefs for leadership"],
  },
  {
    id: "influence",
    title: "Influence Mapper",
    body: "Rank who moves the conversation: verified journalists, political accounts, regional pages, and coordinated clusters — with explainable scores.",
    bullets: ["Network overlays", "Amplification vs. originality", "Watchlists per entity"],
  },
  {
    id: "api",
    title: "API & integrations",
    body: "Stream structured narrative objects, risk scores, and entity updates into your CRM, ticketing, or internal BI with keys, quotas, and audit trails.",
    bullets: ["REST + webhooks", "Sandbox environment", "SLA tiers for enterprise"],
  },
];

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
  instagram: "https://instagram.com",
};

export const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Privacy Policy", href: ROUTES.privacy },
  { label: "Safety & Security", href: ROUTES.safety },
  { label: "Help Center", href: ROUTES.help },
  { label: "Blog", href: ROUTES.blog },
];

/** Mobile drawer — full primary nav without nested dropdowns */
export const MOBILE_NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: ROUTES.home },
  { label: "Products", href: ROUTES.products },
  { label: "Research", href: ROUTES.research },
  { label: "Blog", href: ROUTES.blog },
  { label: "Help Center", href: ROUTES.help },
  { label: "About", href: ROUTES.about },
  { label: "Careers", href: ROUTES.careers },
];
