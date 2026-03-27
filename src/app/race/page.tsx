import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "2026 Kentucky Derby Race Guide",
  description:
    "Complete 2026 Kentucky Derby race information including contenders, odds, the Road to the Derby, Kentucky Oaks, Derby week schedule, and results.",
};

const subPages = [
  {
    href: "/race/overview",
    title: "2026 Kentucky Derby Overview",
    description:
      "Date, time, TV coverage, purse, and essential details for the 152nd running of the Kentucky Derby.",
    icon: "📋",
  },
  {
    href: "/race/contenders",
    title: "Contenders & Horses",
    description:
      "Profiles, pedigrees, and analysis of the top contenders for the 2026 Kentucky Derby.",
    icon: "🐎",
  },
  {
    href: "/race/odds",
    title: "Odds & Predictions",
    description:
      "Current morning-line odds, expert picks, and predictions for the 2026 Kentucky Derby.",
    icon: "📊",
  },
  {
    href: "/race/road-to-the-derby",
    title: "Road to the Derby",
    description:
      "Points standings, prep race results, and the qualifying path to the 2026 Kentucky Derby.",
    icon: "🏆",
  },
  {
    href: "/race/kentucky-oaks",
    title: "Kentucky Oaks 2026",
    description:
      "Everything about the 2026 Kentucky Oaks, the premier race for three-year-old fillies on the Friday before the Derby.",
    icon: "🌸",
  },
  {
    href: "/race/derby-week-schedule",
    title: "Derby Week Schedule",
    description:
      "Full schedule of events, undercard races, and activities for Kentucky Derby week 2026.",
    icon: "📅",
  },
  {
    href: "/race/results",
    title: "Results",
    description:
      "Official results, finishing order, payouts, and race replay for the 2026 Kentucky Derby.",
    icon: "🏁",
  },
];

export default function RacePage() {
  return (
    <>
      <HeroSection
        title="2026 Kentucky Derby Race Guide"
        subtitle="Everything you need to know about the 152nd Run for the Roses at Churchill Downs."
        imageSrc="https://images.unsplash.com/photo-1507514604110-ba3347c457f6?w=1920&q=80"
        imageAlt="Thoroughbred horses racing down the homestretch"
        badge="Race Day — May 2, 2026"
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {subPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group block p-5 rounded-lg border border-gray-200 hover:border-derby-gold hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-0.5">{page.icon}</span>
                <div>
                  <h2 className="font-serif text-lg font-bold text-derby-green group-hover:text-derby-gold transition-colors mb-1">
                    {page.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{page.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
