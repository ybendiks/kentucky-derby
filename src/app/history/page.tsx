import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Kentucky Derby History | 150+ Years of Racing",
  description:
    "Explore over 150 years of Kentucky Derby history. Past winners, Triple Crown champions, Churchill Downs history, legendary moments, and the traditions that define the Run for the Roses.",
};

const subPages = [
  {
    href: "/history/overview",
    title: "Kentucky Derby History",
    description:
      "The origins and evolution of America's greatest horse race from 1875 to the present day.",
    icon: "📜",
  },
  {
    href: "/history/churchill-downs",
    title: "Churchill Downs",
    description:
      "The legendary racetrack that has hosted the Kentucky Derby since 1875, including its famous twin spires.",
    icon: "🏛️",
  },
  {
    href: "/history/past-winners",
    title: "Past Winners",
    description:
      "A complete list of every Kentucky Derby winner, jockey, trainer, and winning time from 1875 to 2025.",
    icon: "🥇",
  },
  {
    href: "/history/triple-crown",
    title: "Triple Crown",
    description:
      "The thirteen Triple Crown winners and the history of horse racing's most prestigious achievement.",
    icon: "👑",
  },
  {
    href: "/history/traditions",
    title: "Traditions",
    description:
      "The garland of roses, mint juleps, My Old Kentucky Home, and the beloved traditions of Derby Day.",
    icon: "🌹",
  },
  {
    href: "/history/famous-moments",
    title: "Famous Moments",
    description:
      "The most memorable and dramatic moments in Kentucky Derby history, from upsets to record-breaking performances.",
    icon: "⭐",
  },
];

export default function HistoryPage() {
  return (
    <>
      <HeroSection
        title="Kentucky Derby History"
        subtitle="Over 150 years of tradition, champions, and unforgettable moments at Churchill Downs."
        imageSrc="https://images.unsplash.com/photo-1555705920-ce69c04129c0?w=1920&q=80"
        imageAlt="Historic horse racing at a classic American racetrack"
        badge="Since 1875"
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
