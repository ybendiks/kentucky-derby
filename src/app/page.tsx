import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EventJsonLd from "@/components/EventJsonLd";

export const metadata: Metadata = {
  title:
    "2026 Kentucky Derby Guide | Race, Travel & Louisville Visitor Guide",
  description:
    "The ultimate guide to the 2026 Kentucky Derby at Churchill Downs on May 2, 2026. Everything you need for race day: contenders, betting, tickets, Louisville travel, bourbon tours, and Derby traditions.",
};

const sections = [
  {
    href: "/race",
    title: "Race Day",
    description:
      "Contenders, odds, race schedule, and everything about the 152nd Run for the Roses.",
    highlights: [
      "Top contenders & early odds",
      "Road to the Derby standings",
      "Post time & TV coverage",
      "Kentucky Oaks preview",
    ],
    image: "https://images.unsplash.com/photo-1507514604110-ba3347c457f6?w=600&q=75",
    imageAlt: "Thoroughbred horses racing on the track",
  },
  {
    href: "/betting",
    title: "Betting Guide",
    description:
      "How to bet on the Derby, bet types explained, strategies, and where to place your wagers.",
    highlights: [
      "Beginner's betting guide",
      "Exotic bets explained",
      "Bankroll strategies",
      "Best sportsbooks for racing",
    ],
    image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=600&q=75",
    imageAlt: "Horse racing action at the track",
  },
  {
    href: "/history",
    title: "Derby History",
    description:
      "Over 150 years of Kentucky Derby history, past winners, Triple Crown champions, and famous moments.",
    highlights: [
      "Complete winners list",
      "Triple Crown champions",
      "Famous upsets & records",
      "Churchill Downs history",
    ],
    image: "https://images.unsplash.com/photo-1555705920-ce69c04129c0?w=600&q=75",
    imageAlt: "Historic horse racing at a classic racetrack",
  },
  {
    href: "/attend",
    title: "Attend the Derby",
    description:
      "Tickets, seating guide, what to wear, Derby hats, and a first-timer's complete guide.",
    highlights: [
      "Ticket options & pricing",
      "Seating map & sections",
      "Dress code & outfit ideas",
      "First-timer checklist",
    ],
    image: "https://images.unsplash.com/photo-1526094633853-031707a44819?w=600&q=75",
    imageAlt: "Spectators in elegant attire at the races",
  },
  {
    href: "/louisville",
    title: "Louisville Guide",
    description:
      "Where to stay, eat, and explore in Louisville during Derby week and beyond.",
    highlights: [
      "Best hotels near Churchill Downs",
      "Top restaurants & bars",
      "Neighborhood guide",
      "Getting around Louisville",
    ],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=75",
    imageAlt: "Louisville, Kentucky skyline along the Ohio River",
  },
  {
    href: "/bourbon",
    title: "Bourbon Trail",
    description:
      "Distillery tours, the Urban Bourbon Trail, Whiskey Row, and Louisville's bourbon scene.",
    highlights: [
      "Distillery tours & maps",
      "Urban Bourbon Trail",
      "Whiskey Row guide",
      "Bourbon cocktail recipes",
    ],
    image: "https://images.unsplash.com/photo-1608543131872-5023af151686?w=600&q=75",
    imageAlt: "Bourbon barrels in a Kentucky distillery rickhouse",
  },
  {
    href: "/culture",
    title: "Derby Culture",
    description:
      "Mint juleps, Derby party planning, food recipes, fashion, and the traditions that define the Derby.",
    highlights: [
      "Mint julep recipe",
      "Derby party planning",
      "Hat traditions & fashion",
      "Classic Derby recipes",
    ],
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=75",
    imageAlt: "Mint julep cocktails with fresh mint garnish",
  },
];

const quickLinks = [
  { href: "/culture/mint-julep", label: "Mint Julep Recipe" },
  { href: "/attend/what-to-wear", label: "Derby Hats & Fashion" },
  { href: "/betting/how-to-bet", label: "Beginner's Betting Guide" },
  { href: "/bourbon/trail-guide", label: "Bourbon Trail Map" },
];

export default function Home() {
  return (
    <>
      <EventJsonLd />

      {/* Hero Section */}
      <section className="text-white py-20 sm:py-32 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516673699707-4f2a243fafaf?w=1920&q=80"
          alt="Close-up of a thoroughbred racehorse galloping at full speed"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-derby-green/10 via-derby-green/40 to-derby-green-dark/80" />
        <div className="max-w-5xl mx-auto px-4 text-center relative">
          <p className="text-derby-gold font-semibold tracking-widest uppercase text-sm mb-4">
            May 2, 2026 | Churchill Downs, Louisville KY
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Complete Guide to the{" "}
            <span className="text-derby-gold">2026 Kentucky Derby</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Everything you need for the 152nd Run for the Roses &mdash; from
            contenders and betting to Louisville travel, bourbon distilleries,
            and the traditions that make the Derby unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/race/overview"
              className="inline-block bg-derby-gold text-derby-green-dark font-bold px-8 py-3.5 rounded-lg hover:bg-derby-gold-light transition-colors text-lg"
            >
              Explore the 2026 Derby
            </Link>
            <Link
              href="/attend/tickets"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors text-lg"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section className="bg-derby-green-dark text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-derby-gold font-serif text-2xl font-bold">152nd</p>
              <p className="text-white/60 text-sm mt-1">Running</p>
            </div>
            <div>
              <p className="text-derby-gold font-serif text-2xl font-bold">May 2, 2026</p>
              <p className="text-white/60 text-sm mt-1">Race Day</p>
            </div>
            <div>
              <p className="text-derby-gold font-serif text-2xl font-bold">Churchill Downs</p>
              <p className="text-white/60 text-sm mt-1">Louisville, KY</p>
            </div>
            <div>
              <p className="text-derby-gold font-serif text-2xl font-bold">$5M+</p>
              <p className="text-white/60 text-sm mt-1">Guaranteed Purse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Previews */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-derby-green mb-3">
            Everything You Need to Know
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seven comprehensive guides covering every aspect of the Kentucky
            Derby experience, from the race itself to the bourbon that flows
            all week long.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block rounded-xl border border-gray-200 hover:border-derby-gold hover:shadow-lg transition-all bg-white overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/60 to-transparent" />
                <h3 className="absolute bottom-3 left-4 font-serif text-xl font-bold text-white drop-shadow-lg">
                  {section.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                <ul className="space-y-1.5">
                  {section.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="w-1 h-1 bg-derby-gold rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-derby-green group-hover:text-derby-gold transition-colors">
                  Explore {section.title} <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Start Planning */}
      <section className="bg-derby-cream py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-derby-green mb-3">
              Start Planning Your Derby Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you&rsquo;re attending in person or watching from home,
              here&rsquo;s how to make the most of the first Saturday in May.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-derby-gold/10">
              <div className="w-10 h-10 bg-derby-green rounded-lg flex items-center justify-center mb-4">
                <span className="text-derby-gold font-serif font-bold">1</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Learn the Basics
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Start with the race overview to understand the date, time, field,
                and what makes the Derby special. Then check out the current
                contenders and early odds.
              </p>
              <Link
                href="/race/overview"
                className="text-sm font-semibold text-derby-green hover:text-derby-gold transition-colors"
              >
                Race Overview <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-derby-gold/10">
              <div className="w-10 h-10 bg-derby-green rounded-lg flex items-center justify-center mb-4">
                <span className="text-derby-gold font-serif font-bold">2</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Plan Your Visit
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Secure tickets early, book a hotel near Churchill Downs, and plan
                your outfits. Derby Week sells out fast, so advance planning is
                essential.
              </p>
              <Link
                href="/attend"
                className="text-sm font-semibold text-derby-green hover:text-derby-gold transition-colors"
              >
                Attendance Guide <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-derby-gold/10">
              <div className="w-10 h-10 bg-derby-green rounded-lg flex items-center justify-center mb-4">
                <span className="text-derby-gold font-serif font-bold">3</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Place Your Bets
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Whether it&rsquo;s your first bet or you&rsquo;re a seasoned
                handicapper, our guides cover everything from win/place/show to
                exotic wagers.
              </p>
              <Link
                href="/betting/how-to-bet"
                className="text-sm font-semibold text-derby-green hover:text-derby-gold transition-colors"
              >
                Betting Guide <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-derby-gold/10">
              <div className="w-10 h-10 bg-derby-green rounded-lg flex items-center justify-center mb-4">
                <span className="text-derby-gold font-serif font-bold">4</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Explore Louisville
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Louisville is much more than the Derby. Discover incredible
                restaurants, vibrant neighborhoods, and the world-famous bourbon
                scene.
              </p>
              <Link
                href="/louisville"
                className="text-sm font-semibold text-derby-green hover:text-derby-gold transition-colors"
              >
                Louisville Guide <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-derby-gold/10">
              <div className="w-10 h-10 bg-derby-green rounded-lg flex items-center justify-center mb-4">
                <span className="text-derby-gold font-serif font-bold">5</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Tour the Bourbon Trail
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                No Derby trip is complete without bourbon. Visit legendary
                distilleries, explore Whiskey Row, and sample Kentucky&rsquo;s
                signature spirit.
              </p>
              <Link
                href="/bourbon/trail-guide"
                className="text-sm font-semibold text-derby-green hover:text-derby-gold transition-colors"
              >
                Bourbon Trail <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-derby-gold/10">
              <div className="w-10 h-10 bg-derby-green rounded-lg flex items-center justify-center mb-4">
                <span className="text-derby-gold font-serif font-bold">6</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Embrace the Traditions
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Mix the perfect mint julep, plan a Derby party, and dive into the
                fashion, food, and culture that make the Derby an American
                institution.
              </p>
              <Link
                href="/culture"
                className="text-sm font-semibold text-derby-green hover:text-derby-gold transition-colors"
              >
                Derby Culture <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Quick Links */}
      <section className="bg-derby-green text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-derby-gold mb-1">
                Most Popular Guides
              </h2>
              <p className="text-white/60 text-sm">
                Jump straight to our readers&rsquo; favorites.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-block bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Placeholder */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-derby-green mb-3">
            Latest Derby Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest contender news, odds movements, and
            Derby Week developments as we count down to May 2.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 bg-white">
            <p className="text-xs font-semibold text-derby-gold uppercase tracking-wider mb-2">
              Contenders
            </p>
            <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
              Early Favorites Emerging for 2026
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Paladin leads the futures market at 9-1 as the prep season heats
              up, with Incredibolt and Commandment close behind on the Road to
              the Derby leaderboard.
            </p>
            <Link
              href="/race/contenders"
              className="text-sm font-semibold text-derby-green hover:text-derby-gold transition-colors"
            >
              Read More <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 bg-white">
            <p className="text-xs font-semibold text-derby-gold uppercase tracking-wider mb-2">
              Planning
            </p>
            <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
              Derby Week 2026 Schedule Announced
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              From Sunday Funday to Dawn at the Downs, the full Derby Week
              schedule is packed with events from April 25 through May 2 at
              Churchill Downs.
            </p>
            <Link
              href="/race/derby-week-schedule"
              className="text-sm font-semibold text-derby-green hover:text-derby-gold transition-colors"
            >
              Read More <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 bg-white">
            <p className="text-xs font-semibold text-derby-gold uppercase tracking-wider mb-2">
              Culture
            </p>
            <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
              The Perfect Mint Julep for Derby Day
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Master the official cocktail of the Kentucky Derby with our
              step-by-step recipe guide, from selecting your bourbon to the
              proper crushed ice technique.
            </p>
            <Link
              href="/culture/mint-julep"
              className="text-sm font-semibold text-derby-green hover:text-derby-gold transition-colors"
            >
              Read More <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-derby-cream py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The 152nd Kentucky Derby Awaits
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Saturday, May 2, 2026 at Churchill Downs. Whether you&rsquo;re a
            lifelong fan or experiencing the Derby for the first time, we&rsquo;ve
            got you covered from post to finish.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/race/overview"
              className="inline-block bg-derby-green text-white font-bold px-8 py-3.5 rounded-lg hover:bg-derby-green-light transition-colors"
            >
              Start with the Race Overview
            </Link>
            <Link
              href="/attend"
              className="inline-block border-2 border-derby-green text-derby-green font-semibold px-8 py-3.5 rounded-lg hover:bg-derby-green hover:text-white transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
