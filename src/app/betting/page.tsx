import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Kentucky Derby Betting Guide 2026",
  description:
    "Complete 2026 Kentucky Derby betting guide. Learn how to bet on the Derby, understand bet types, develop winning strategies, and find the best places to wager.",
};

const subPages = [
  {
    href: "/betting/how-to-bet",
    title: "How to Bet on the Kentucky Derby",
    description:
      "A beginner-friendly guide to placing bets on the Kentucky Derby, from reading a program to cashing tickets.",
    icon: "🎓",
  },
  {
    href: "/betting/bet-types",
    title: "Bet Types Explained",
    description:
      "Win, place, show, exacta, trifecta, superfecta, and every Derby bet type explained clearly.",
    icon: "🎰",
  },
  {
    href: "/betting/strategy",
    title: "Betting Strategy",
    description:
      "Advanced handicapping strategies, bankroll management, and expert tips for betting the Kentucky Derby.",
    icon: "🧠",
  },
  {
    href: "/betting/where-to-bet",
    title: "Where to Bet",
    description:
      "The best sportsbooks, online betting platforms, and OTB locations for wagering on the 2026 Kentucky Derby.",
    icon: "📍",
  },
];

export default function BettingPage() {
  return (
    <>
      <HeroSection
        title="Kentucky Derby Betting Guide"
        subtitle="Everything you need to wager on the 2026 Kentucky Derby, from beginner basics to advanced handicapping strategy."
        imageSrc="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=1920&q=80"
        imageAlt="Horse racing action at the track"
        badge="Wagering & Strategy"
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
