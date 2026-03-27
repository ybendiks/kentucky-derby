import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Attending the 2026 Kentucky Derby | Complete Visitor Guide",
  description:
    "Plan your visit to the 2026 Kentucky Derby at Churchill Downs. Tickets, seating guide, dress code, Derby hats, infield tips, and a complete first-timer's guide.",
};

const subPages = [
  {
    href: "/attend/tickets",
    title: "Tickets & Prices",
    description:
      "2026 Kentucky Derby ticket options, pricing tiers, where to buy, and tips for getting the best seats.",
    icon: "🎟️",
  },
  {
    href: "/attend/seating-guide",
    title: "Seating Guide",
    description:
      "A detailed map and guide to every seating section at Churchill Downs, from Millionaires Row to the infield.",
    icon: "🗺️",
  },
  {
    href: "/attend/what-to-wear",
    title: "What to Wear",
    description:
      "Kentucky Derby dress code guide for men and women. What to wear in every section of Churchill Downs.",
    icon: "👗",
  },
  {
    href: "/attend/hats",
    title: "Derby Hats",
    description:
      "The ultimate guide to Kentucky Derby hats and fascinators, from where to buy to how to choose the perfect one.",
    icon: "🎩",
  },
  {
    href: "/attend/first-timers",
    title: "First-Timer's Guide",
    description:
      "Everything first-time Derby attendees need to know: arrival tips, what to bring, and how to make the most of the day.",
    icon: "✅",
  },
  {
    href: "/attend/infield",
    title: "Infield Guide",
    description:
      "Your guide to the famous Churchill Downs infield on Derby Day, including what to expect and survival tips.",
    icon: "🎉",
  },
  {
    href: "/attend/faq",
    title: "FAQ",
    description:
      "Frequently asked questions about attending the Kentucky Derby, from parking to prohibited items.",
    icon: "❓",
  },
];

export default function AttendPage() {
  return (
    <>
      <HeroSection
        title="Attending the 2026 Kentucky Derby"
        subtitle="Your complete guide to attending the Kentucky Derby at Churchill Downs, from buying tickets to choosing the perfect hat."
        imageSrc="https://images.unsplash.com/photo-1526094633853-031707a44819?w=1920&q=80"
        imageAlt="Spectators in elegant hats and attire at the horse races"
        badge="Plan Your Visit"
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
