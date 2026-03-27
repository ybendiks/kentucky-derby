import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Kentucky Derby Culture | Traditions, Food, Fashion & Parties",
  description:
    "Explore Kentucky Derby culture: mint juleps, Derby party planning, traditional foods and recipes, fashion guide, and the meaning behind the Run for the Roses.",
};

const subPages = [
  {
    href: "/culture/mint-julep",
    title: "The Mint Julep",
    description:
      "The official drink of the Kentucky Derby. History, classic recipe, variations, and how to make the perfect mint julep.",
    icon: "🍸",
  },
  {
    href: "/culture/derby-party",
    title: "Derby Party Planning",
    description:
      "How to throw the ultimate Kentucky Derby watch party with decorations, drinks, food, games, and betting pools.",
    icon: "🎊",
  },
  {
    href: "/culture/food-recipes",
    title: "Derby Foods & Recipes",
    description:
      "Classic Kentucky Derby recipes: hot browns, burgoo, benedictine, Derby pie, and more Southern favorites.",
    icon: "🍗",
  },
  {
    href: "/culture/fashion",
    title: "Fashion Guide",
    description:
      "Kentucky Derby fashion trends, style inspiration, and outfit ideas for the best-dressed day in racing.",
    icon: "👒",
  },
  {
    href: "/culture/run-for-the-roses",
    title: "Run for the Roses",
    description:
      "The meaning and history behind the Kentucky Derby's iconic nickname, the garland of roses, and its symbolism.",
    icon: "🌹",
  },
];

export default function CulturePage() {
  return (
    <>
      <HeroSection
        title="Kentucky Derby Culture"
        subtitle="The traditions, flavors, fashion, and celebrations that make the Kentucky Derby more than just a horse race."
        imageSrc="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80"
        imageAlt="Mint julep cocktails in silver cups with fresh mint garnish"
        badge="Traditions & Celebrations"
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
