/** Central route map — use in nav, footer, and CTAs */
export const ROUTES = {
  home: "/",
  products: "/products",
  research: "/research",
  about: "/about",
  careers: "/careers",
  blog: "/blog",
  help: "/help",
  privacy: "/privacy",
  safety: "/safety",
  login: "/login",
} as const;

export type RouteKey = keyof typeof ROUTES;
