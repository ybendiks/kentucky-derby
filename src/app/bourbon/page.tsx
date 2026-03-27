import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Kentucky Bourbon Guide | Distilleries, Tours & Bourbon Trail",
  description:
    "Explore Kentucky's bourbon scene during Derby week. Bourbon Trail guide, Louisville distilleries, Urban Bourbon Trail, Whiskey Row, and the best bourbon tours and tastings.",
};

const subPages = [
  {
    href: "/bourbon/trail-guide",
    title: "Bourbon Trail Guide",
    description:
      "Plan your Kentucky Bourbon Trail experience with distillery stops, route planning, and insider tips.",
    icon: "🗺️",
  },
  {
    href: "/bourbon/louisville-distilleries",
    title: "Louisville Distilleries",
    description:
      "Louisville's best distilleries to visit during Derby week, from craft operations to iconic bourbon houses.",
    icon: "🏭",
  },
  {
    href: "/bourbon/tours",
    title: "Bourbon Tours",
    description:
      "Guided and self-guided bourbon tours in and around Louisville, including transportation and tasting options.",
    icon: "🚌",
  },
  {
    href: "/bourbon/urban-bourbon-trail",
    title: "Urban Bourbon Trail",
    description:
      "Navigate Louisville's Urban Bourbon Trail with stops at the city's best bourbon bars and restaurants.",
    icon: "🥃",
  },
  {
    href: "/bourbon/whiskey-row",
    title: "Whiskey Row",
    description:
      "Explore Louisville's historic Whiskey Row on Main Street, where bourbon history meets modern craft distilling.",
    icon: "🏚️",
  },
];

export default function BourbonPage() {
  return (
    <>
      <HeroSection
        title="Kentucky Bourbon Guide"
        subtitle="Distilleries, tours, tastings, and the bourbon culture that makes Kentucky famous."
        imageSrc="https://images.unsplash.com/photo-1608543131872-5023af151686?w=1920&q=80"
        imageAlt="Rows of bourbon barrels aging in a Kentucky distillery rickhouse"
        badge="The Bourbon Trail"
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
