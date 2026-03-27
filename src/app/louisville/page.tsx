import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Louisville Travel Guide | Kentucky Derby Visitors",
  description:
    "Complete Louisville travel guide for Kentucky Derby visitors. Where to stay, best restaurants, neighborhoods to explore, nightlife, and getting around the city during Derby week.",
};

const subPages = [
  {
    href: "/louisville/overview",
    title: "Louisville Overview",
    description:
      "An introduction to Louisville, Kentucky: the vibrant city that plays host to the Kentucky Derby each May.",
    icon: "🏙️",
  },
  {
    href: "/louisville/where-to-stay",
    title: "Where to Stay",
    description:
      "Best hotels, Airbnbs, and neighborhoods for Kentucky Derby visitors, from downtown luxury to budget-friendly options.",
    icon: "🏨",
  },
  {
    href: "/louisville/restaurants",
    title: "Restaurants",
    description:
      "Louisville's best restaurants for Derby week, from upscale dining to local favorites and Southern comfort food.",
    icon: "🍽️",
  },
  {
    href: "/louisville/neighborhoods",
    title: "Neighborhoods",
    description:
      "Explore Louisville's distinct neighborhoods: NuLu, the Highlands, Bardstown Road, Old Louisville, and more.",
    icon: "🏘️",
  },
  {
    href: "/louisville/nightlife",
    title: "Nightlife",
    description:
      "Louisville's best bars, live music venues, and nightlife spots to enjoy during Derby week and beyond.",
    icon: "🌃",
  },
  {
    href: "/louisville/getting-around",
    title: "Getting Around",
    description:
      "Transportation options in Louisville: rideshare, public transit, parking, and Derby Day shuttle services.",
    icon: "🚗",
  },
  {
    href: "/louisville/getting-here",
    title: "Getting to Louisville",
    description:
      "How to get to Louisville for the Derby by plane, car, or train, including airport info and driving directions.",
    icon: "✈️",
  },
];

export default function LouisvillePage() {
  return (
    <>
      <HeroSection
        title="Louisville Travel Guide"
        subtitle="Your complete guide to Louisville, Kentucky for Derby week and beyond."
        imageSrc="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
        imageAlt="Louisville, Kentucky skyline along the Ohio River"
        badge="Explore Louisville"
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
