import type { MetadataRoute } from "next";

const BASE_URL = "https://www.kentuckyderby2026.net";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

interface PageEntry {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}

const pages: PageEntry[] = [
  // Home
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  // Section hubs (0.9)
  { path: "/race", priority: 0.9, changeFrequency: "weekly" },
  { path: "/betting", priority: 0.9, changeFrequency: "weekly" },
  { path: "/history", priority: 0.9, changeFrequency: "weekly" },
  { path: "/attend", priority: 0.9, changeFrequency: "weekly" },
  { path: "/louisville", priority: 0.9, changeFrequency: "weekly" },
  { path: "/bourbon", priority: 0.9, changeFrequency: "weekly" },
  { path: "/culture", priority: 0.9, changeFrequency: "weekly" },

  // High-traffic pages (0.8)
  { path: "/culture/mint-julep", priority: 0.8, changeFrequency: "weekly" },
  { path: "/race/odds", priority: 0.8, changeFrequency: "daily" },
  { path: "/attend/hats", priority: 0.8, changeFrequency: "weekly" },
  { path: "/race/contenders", priority: 0.8, changeFrequency: "daily" },
  { path: "/race/results", priority: 0.8, changeFrequency: "daily" },
  { path: "/betting/how-to-bet", priority: 0.8, changeFrequency: "weekly" },
  { path: "/attend/tickets", priority: 0.8, changeFrequency: "weekly" },
  { path: "/attend/what-to-wear", priority: 0.8, changeFrequency: "weekly" },
  { path: "/history/past-winners", priority: 0.8, changeFrequency: "weekly" },
  { path: "/bourbon/trail-guide", priority: 0.8, changeFrequency: "weekly" },

  // Standard pages (0.7)
  { path: "/race/overview", priority: 0.7, changeFrequency: "weekly" },
  { path: "/race/road-to-the-derby", priority: 0.7, changeFrequency: "weekly" },
  { path: "/race/kentucky-oaks", priority: 0.7, changeFrequency: "weekly" },
  { path: "/race/derby-week-schedule", priority: 0.7, changeFrequency: "weekly" },
  { path: "/betting/bet-types", priority: 0.7, changeFrequency: "weekly" },
  { path: "/betting/strategy", priority: 0.7, changeFrequency: "weekly" },
  { path: "/betting/where-to-bet", priority: 0.7, changeFrequency: "weekly" },
  { path: "/history/overview", priority: 0.7, changeFrequency: "weekly" },
  { path: "/history/churchill-downs", priority: 0.7, changeFrequency: "weekly" },
  { path: "/history/triple-crown", priority: 0.7, changeFrequency: "weekly" },
  { path: "/history/traditions", priority: 0.7, changeFrequency: "weekly" },
  { path: "/history/famous-moments", priority: 0.7, changeFrequency: "weekly" },
  { path: "/attend/seating-guide", priority: 0.7, changeFrequency: "weekly" },
  { path: "/attend/first-timers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/attend/infield", priority: 0.7, changeFrequency: "weekly" },
  { path: "/attend/faq", priority: 0.7, changeFrequency: "weekly" },
  { path: "/louisville/overview", priority: 0.7, changeFrequency: "weekly" },
  { path: "/louisville/where-to-stay", priority: 0.7, changeFrequency: "weekly" },
  { path: "/louisville/restaurants", priority: 0.7, changeFrequency: "weekly" },
  { path: "/louisville/neighborhoods", priority: 0.7, changeFrequency: "weekly" },
  { path: "/louisville/nightlife", priority: 0.7, changeFrequency: "weekly" },
  { path: "/louisville/getting-around", priority: 0.7, changeFrequency: "weekly" },
  { path: "/louisville/getting-here", priority: 0.7, changeFrequency: "weekly" },
  { path: "/bourbon/louisville-distilleries", priority: 0.7, changeFrequency: "weekly" },
  { path: "/bourbon/tours", priority: 0.7, changeFrequency: "weekly" },
  { path: "/bourbon/urban-bourbon-trail", priority: 0.7, changeFrequency: "weekly" },
  { path: "/bourbon/whiskey-row", priority: 0.7, changeFrequency: "weekly" },
  { path: "/culture/derby-party", priority: 0.7, changeFrequency: "weekly" },
  { path: "/culture/food-recipes", priority: 0.7, changeFrequency: "weekly" },
  { path: "/culture/fashion", priority: 0.7, changeFrequency: "weekly" },
  { path: "/culture/run-for-the-roses", priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
