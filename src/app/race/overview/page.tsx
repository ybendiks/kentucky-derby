import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import EventJsonLd from "@/components/EventJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "2026 Kentucky Derby Overview | Date, Time, TV Coverage & Race Details",
  description:
    "The 2026 Kentucky Derby is Saturday, May 2 at Churchill Downs. Get the date, post time (~6:57 PM ET), TV coverage, purse ($5M+), contenders, Derby Week schedule, and everything you need to know about the 152nd Run for the Roses.",
  keywords: [
    "kentucky derby 2026",
    "kentucky derby date",
    "when is the kentucky derby",
    "kentucky derby post time",
    "kentucky derby tv coverage",
    "kentucky derby 2026 contenders",
    "derby week schedule",
    "churchill downs",
  ],
  openGraph: {
    title: "2026 Kentucky Derby Overview | May 2, 2026 at Churchill Downs",
    description:
      "Complete guide to the 152nd Kentucky Derby. Date, post time, TV coverage, contenders, Derby Week schedule, and how to watch the Run for the Roses.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "When is the 2026 Kentucky Derby?",
    answer:
      "The 2026 Kentucky Derby is on Saturday, May 2, 2026. It is the 152nd running of the Kentucky Derby, held at Churchill Downs in Louisville, Kentucky. Post time is approximately 6:57 PM Eastern Time.",
  },
  {
    question: "What channel is the Kentucky Derby on in 2026?",
    answer:
      "The 2026 Kentucky Derby will be broadcast on NBC. Coverage typically begins in the early afternoon with pre-race analysis, undercard races, and behind-the-scenes features before the main race at approximately 6:57 PM ET. The race is also available to stream on Peacock.",
  },
  {
    question: "How many horses run in the Kentucky Derby?",
    answer:
      "The Kentucky Derby field is limited to a maximum of 20 horses, plus up to 4 also-eligible entries. Horses earn their spot through the Road to the Kentucky Derby points system, which awards qualifying points in designated prep races throughout the season.",
  },
  {
    question: "How long is the Kentucky Derby race?",
    answer:
      "The Kentucky Derby is run at a distance of 1 1/4 miles (10 furlongs) on the dirt track at Churchill Downs. The race typically lasts about two minutes, earning it the nickname 'the most exciting two minutes in sports.'",
  },
];

export default function RaceOverviewPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Race", href: "/race" },
          { name: "Race Overview", href: "/race/overview" },
        ]}
      />
      <EventJsonLd />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="text-white py-16 sm:py-20 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1533284133567-0da9844151ce?w=1920&q=80"
          alt="Horses on the racetrack"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-derby-gold transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/race" className="hover:text-derby-gold transition-colors">
                  Race
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-derby-gold">Overview</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-derby-gold mb-4">
            2026 Kentucky Derby Overview
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Everything you need to know about the 152nd Run for the Roses.
            Saturday, May 2, 2026 at Churchill Downs in Louisville, Kentucky.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-derby-gold rounded-full" />
              May 2, 2026
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-derby-gold rounded-full" />
              ~6:57 PM ET Post Time
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-derby-gold rounded-full" />
              NBC / Peacock
            </span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Quick Facts Grid */}
        <section className="mb-16">
          <h2 className="sr-only">Quick Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Date", value: "May 2, 2026", sub: "Saturday" },
              { label: "Post Time", value: "~6:57 PM ET", sub: "Approximate" },
              { label: "Distance", value: "1\u00BC Miles", sub: "Dirt Track" },
              { label: "Purse", value: "$5 Million+", sub: "Guaranteed" },
              { label: "Running", value: "152nd", sub: "Since 1875" },
              { label: "Field Size", value: "Up to 20", sub: "Horses" },
              { label: "Location", value: "Churchill Downs", sub: "Louisville, KY" },
              { label: "Broadcast", value: "NBC", sub: "& Peacock" },
            ].map((fact) => (
              <div
                key={fact.label}
                className="bg-derby-cream rounded-lg p-4 text-center border border-derby-gold/20"
              >
                <p className="text-xs font-semibold text-derby-green/60 uppercase tracking-wider mb-1">
                  {fact.label}
                </p>
                <p className="font-serif text-lg font-bold text-derby-green">
                  {fact.value}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{fact.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Churchill Downs Map */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Churchill Downs Location
          </h2>
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6268!2d-85.7702!3d38.2028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886972e49c33799b%3A0x731f20e092d9e26c!2sChurchill%20Downs!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Churchill Downs in Louisville, Kentucky"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-3 text-sm">
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">Address</p>
              <p className="text-gray-600 text-xs">700 Central Ave, Louisville, KY 40208</p>
            </div>
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">From Downtown</p>
              <p className="text-gray-600 text-xs">5 miles south · 12 min drive</p>
            </div>
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">From Airport (SDF)</p>
              <p className="text-gray-600 text-xs">4 miles · 10 min drive</p>
            </div>
          </div>
        </section>

        {/* What Is the Kentucky Derby */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What Is the Kentucky Derby?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kentucky Derby is the longest continuously held sporting event in
            the United States and widely considered the most prestigious
            thoroughbred horse race in the world. First run in 1875, the Derby
            takes place on the first Saturday in May at Churchill Downs in
            Louisville, Kentucky. Often called &ldquo;The Run for the Roses&rdquo;
            for the garland of 554 red roses draped over the winning horse, the
            race draws over 150,000 spectators and millions of television viewers
            each year.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 2026 Kentucky Derby marks the 152nd running of this iconic race.
            Three-year-old thoroughbreds will compete over 1&frac14; miles on the
            Churchill Downs dirt track in what many call &ldquo;the most exciting
            two minutes in sports.&rdquo; The winning owner receives the
            lion&rsquo;s share of a guaranteed purse exceeding $5 million, while
            the winning jockey earns a place in racing history.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Derby is also the first leg of the{" "}
            <Link href="/history/triple-crown" className="text-derby-green font-medium underline decoration-derby-gold/40 hover:decoration-derby-gold transition-colors">
              Triple Crown
            </Link>, followed by the Preakness Stakes and the Belmont Stakes.
            Winning all three races in a single year is one of the rarest
            achievements in all of sports. For a deeper dive into over 150 years of
            tradition, see our{" "}
            <Link href="/history/overview" className="text-derby-green font-medium underline decoration-derby-gold/40 hover:decoration-derby-gold transition-colors">
              complete Derby history
            </Link>.
          </p>
        </section>

        {/* 2026 Race Details */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            2026 Kentucky Derby Date, Time & TV Coverage
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 152nd Kentucky Derby will be run on <strong>Saturday, May 2, 2026</strong> at
            Churchill Downs, located at 700 Central Avenue in Louisville, Kentucky.
            The race has been held at Churchill Downs every year since its inception,
            and the 2026 edition continues that unbroken tradition.
          </p>

          <h3 className="font-serif text-xl font-bold text-derby-green mt-8 mb-3">
            Post Time
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kentucky Derby post time is approximately <strong>6:57 PM Eastern Time</strong>.
            The exact post time may shift slightly depending on the broadcast
            schedule, but it historically falls between 6:50 and 7:01 PM ET. The
            race itself lasts roughly two minutes, though the lead-up &mdash;
            including the post parade, singing of &ldquo;My Old Kentucky
            Home,&rdquo; and the call to the post &mdash; is part of the
            unforgettable experience.
          </p>

          <h3 className="font-serif text-xl font-bold text-derby-green mt-8 mb-3">
            TV Coverage & How to Watch
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>NBC</strong> holds the broadcast rights for the Kentucky Derby.
            Coverage on race day typically begins in the early afternoon with
            pre-race analysis, undercard race coverage, and behind-the-scenes
            features. For cord-cutters, the race is also available to stream live on
            <strong> Peacock</strong>, NBC&rsquo;s streaming platform. Check your
            local listings for the exact broadcast window.
          </p>
          <p className="text-gray-700 leading-relaxed">
            International viewers can often find coverage through NBC&rsquo;s
            international partners or streaming services that carry U.S. sports
            packages. Many sportsbooks also offer live race streams for account
            holders.
          </p>

          <h3 className="font-serif text-xl font-bold text-derby-green mt-8 mb-3">
            Race Distance & Track
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The Kentucky Derby is run at <strong>1&frac14; miles (10 furlongs)</strong> on
            the Churchill Downs dirt track. The race starts on the backstretch, and
            the field navigates two turns before thundering down the 1,234.5-foot
            homestretch in front of the historic twin spires. Track conditions on
            race day can significantly impact the outcome, with some horses
            preferring a fast track while others excel on an off or muddy surface.
          </p>
        </section>

        {/* Purse & Field */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Purse & Field Size
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kentucky Derby carries a guaranteed purse of <strong>$5 million or
            more</strong>, making it one of the richest races in North America. The
            winner&rsquo;s share is typically 62% of the total purse, with the
            remainder distributed among the top five finishers. In recent years, the
            purse has steadily increased, reflecting the growing commercial value of
            the event.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The field is limited to a <strong>maximum of 20 starters</strong>, plus
            up to 4 also-eligible entries who can draw into the race if any of the
            top 20 scratch. This field size cap ensures competitive racing and
            manageable conditions on the track. The starting gate at Churchill Downs
            is a 20-stall auxiliary gate, and post position draws are held the
            Monday of Derby week.
          </p>
        </section>

        {/* Road to the Derby */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How Horses Qualify: The Road to the Kentucky Derby
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Entry into the Kentucky Derby is based on the{" "}
            <Link href="/race/road-to-the-derby" className="text-derby-green font-medium underline decoration-derby-gold/40 hover:decoration-derby-gold transition-colors">
              Road to the Kentucky Derby points system
            </Link>, introduced in 2013. Points are awarded to the top finishers in
            designated prep races held throughout the fall, winter, and spring at
            tracks across the United States, Japan, Europe, and the UAE.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The qualifying season is divided into two phases. The prep season
            (September through February) features races awarding 10-4-2-1 points to
            the top four finishers. The championship series (late February through
            April) features major races awarding 100-40-20-10 points. The horses
            with the most points at the close of entries earn their spots in the
            starting gate.
          </p>
          <p className="text-gray-700 leading-relaxed">
            International horses can qualify through the Japan Road to the Kentucky
            Derby or the European Road to the Kentucky Derby, which have their own
            designated prep races and point structures. This global qualifying system
            has increased international participation and made the Derby a truly
            worldwide event.
          </p>
        </section>

        {/* Contenders */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            2026 Kentucky Derby Top Contenders
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The 2026 Kentucky Derby field is taking shape, with several talented
            three-year-olds emerging from the prep season. Here are the early
            favorites and horses to watch heading into the first Saturday in May.
          </p>

          <div className="space-y-6">
            <div className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  Paladin
                </h3>
                <span className="text-sm font-semibold bg-derby-green text-derby-gold px-3 py-1 rounded-full">
                  9-1 Favorite
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                The current early favorite on the futures board, Paladin has
                established himself as the horse to beat through an impressive
                campaign of prep race performances. His combination of speed and
                stamina makes him a strong fit for the 1&frac14;-mile Derby
                distance. Watch for his final prep to confirm his status as the
                leading contender.
              </p>
            </div>

            <div className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  Incredibolt
                </h3>
                <span className="text-sm font-semibold bg-derby-green/10 text-derby-green px-3 py-1 rounded-full">
                  Top Contender
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                A fast-closing runner who has shown the ability to rally from off
                the pace, Incredibolt could be perfectly suited to the often
                chaotic Derby pace scenario. His late-running style means he
                could capitalize if the early speed collapses, a common pattern
                in 20-horse fields. He is one of the most feared closers in the
                2026 crop.
              </p>
            </div>

            <div className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  Commandment
                </h3>
                <span className="text-sm font-semibold bg-derby-green/10 text-derby-green px-3 py-1 rounded-full">
                  Top Contender
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                A versatile colt with tactical speed, Commandment has
                demonstrated an ability to race near the lead or sit just off
                the pace and accelerate when asked. His consistency across
                multiple preps has earned him a high ranking on the Road to the
                Derby leaderboard.
              </p>
            </div>

            <div className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  Nearly
                </h3>
                <span className="text-sm font-semibold bg-derby-green text-derby-gold px-3 py-1 rounded-full">
                  10-1
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Nearly sits just behind Paladin on the futures board and offers
                compelling value at 10-1. A proven graded stakes performer, he
                has the pedigree and ability to handle the Derby distance. His
                steady improvement throughout the prep season suggests he may
                peak at the right time.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/race/contenders"
              className="inline-flex items-center gap-2 text-derby-green font-semibold hover:text-derby-gold transition-colors"
            >
              View All 2026 Contenders & Detailed Analysis
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* Kentucky Oaks */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Kentucky Oaks: Friday, May 1, 2026
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The day before the Derby features the <strong>Kentucky Oaks</strong>,
            the premier race for three-year-old fillies. Run at 1&frac18; miles on
            the Churchill Downs dirt track, the Oaks carries its own rich purse and
            draws a massive crowd &mdash; often exceeding 100,000 fans. Known as
            &ldquo;Lillies for the Fillies,&rdquo; the Oaks winner is draped with a
            garland of stargazer lilies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Oaks Day has become a major event in its own right, with many fans
            considering it the best day of the entire Derby week for actually
            watching and enjoying horse racing without the crush of the Saturday
            crowd. The pink theme (supporting breast and ovarian cancer awareness)
            adds a unique atmosphere.{" "}
            <Link
              href="/race/kentucky-oaks"
              className="text-derby-green font-medium underline decoration-derby-gold/40 hover:decoration-derby-gold transition-colors"
            >
              Learn more about the 2026 Kentucky Oaks
            </Link>.
          </p>
        </section>

        {/* Derby Week Schedule */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Derby Week Schedule: April 25 &ndash; May 2, 2026
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Kentucky Derby is more than a single race &mdash; it&rsquo;s a week-long
            celebration of horse racing, Louisville culture, and Southern hospitality.
            Here is an overview of the key events during Derby Week 2026.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 rounded-lg border border-gray-200 hover:border-derby-gold/40 transition-colors">
              <div className="flex-shrink-0 w-24 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold">Saturday</p>
                <p className="font-serif text-lg font-bold text-derby-green">Apr 25</p>
              </div>
              <div>
                <h3 className="font-semibold text-derby-green">Opening Night / Sunday Funday Eve</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Derby Week kicks off with opening night racing at Churchill Downs
                  and festivities across Louisville as the city transforms for the week ahead.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg border border-gray-200 hover:border-derby-gold/40 transition-colors">
              <div className="flex-shrink-0 w-24 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold">Sunday</p>
                <p className="font-serif text-lg font-bold text-derby-green">Apr 26</p>
              </div>
              <div>
                <h3 className="font-semibold text-derby-green">Sunday Funday</h3>
                <p className="text-sm text-gray-600 mt-1">
                  A fan-favorite day of live music, food trucks, and family-friendly
                  activities at Churchill Downs. A great entry point for casual fans
                  and families new to the track.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg border border-gray-200 hover:border-derby-gold/40 transition-colors">
              <div className="flex-shrink-0 w-24 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold">Tues&ndash;Wed</p>
                <p className="font-serif text-lg font-bold text-derby-green">Apr 28&ndash;29</p>
              </div>
              <div>
                <h3 className="font-semibold text-derby-green">Dawn at the Downs</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Free early-morning events where fans can watch Derby contenders
                  during their final workouts on the Churchill Downs track. Includes
                  complimentary coffee, live commentary from racing analysts, and a
                  chance to see the horses up close.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg border border-gray-200 hover:border-derby-gold/40 transition-colors">
              <div className="flex-shrink-0 w-24 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold">Thursday</p>
                <p className="font-serif text-lg font-bold text-derby-green">Apr 30</p>
              </div>
              <div>
                <h3 className="font-semibold text-derby-green">502&rsquo;sDay (Thurby)</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Named after Louisville&rsquo;s 502 area code, Thurby is a local
                  favorite featuring live racing, concerts, and Louisville-themed
                  celebrations. Locals consider this the best day for a relaxed yet
                  festive racing atmosphere.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg border border-gray-200 hover:border-derby-gold/40 transition-colors">
              <div className="flex-shrink-0 w-24 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold">Friday</p>
                <p className="font-serif text-lg font-bold text-derby-green">May 1</p>
              </div>
              <div>
                <h3 className="font-semibold text-derby-green">Kentucky Oaks Day</h3>
                <p className="text-sm text-gray-600 mt-1">
                  The Kentucky Oaks for three-year-old fillies headlines a stacked
                  card of graded stakes races. The pink-themed day supports cancer
                  awareness and draws crowds that rival Derby Day itself.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg border border-derby-gold bg-derby-cream">
              <div className="flex-shrink-0 w-24 text-center">
                <p className="text-xs text-derby-gold uppercase font-bold">Saturday</p>
                <p className="font-serif text-lg font-bold text-derby-green">May 2</p>
              </div>
              <div>
                <h3 className="font-semibold text-derby-green">Kentucky Derby Day</h3>
                <p className="text-sm text-gray-600 mt-1">
                  The main event. Gates open early for a full day of undercard racing
                  before the 152nd Kentucky Derby at approximately 6:57 PM ET. The
                  day includes the singing of &ldquo;My Old Kentucky Home,&rdquo;
                  the iconic post parade, and of course, the most exciting two
                  minutes in sports.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/race/derby-week-schedule"
              className="inline-flex items-center gap-2 text-derby-green font-semibold hover:text-derby-gold transition-colors"
            >
              View the Complete Derby Week Schedule
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* Key Dates */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Key Dates & Timeline for the 2026 Kentucky Derby
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-semibold text-derby-green">Date</th>
                  <th className="py-3 font-semibold text-derby-green">Event</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 font-medium whitespace-nowrap">November 2025</td>
                  <td className="py-3 text-gray-700">Tickets go on sale for Derby Week events</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium whitespace-nowrap">Sep 2025 &ndash; Feb 2026</td>
                  <td className="py-3 text-gray-700">Road to the Derby prep season races</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium whitespace-nowrap">Mar &ndash; Apr 2026</td>
                  <td className="py-3 text-gray-700">Championship Series qualifying races</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium whitespace-nowrap">April 25, 2026</td>
                  <td className="py-3 text-gray-700">Derby Week opens at Churchill Downs</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium whitespace-nowrap">April 27, 2026</td>
                  <td className="py-3 text-gray-700">Post position draw (Monday of Derby Week)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium whitespace-nowrap">May 1, 2026</td>
                  <td className="py-3 text-gray-700">Kentucky Oaks (Fillies)</td>
                </tr>
                <tr className="bg-derby-cream">
                  <td className="py-3 pr-4 font-bold whitespace-nowrap text-derby-green">May 2, 2026</td>
                  <td className="py-3 font-bold text-derby-green">152nd Kentucky Derby (~6:57 PM ET)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium whitespace-nowrap">May 16, 2026</td>
                  <td className="py-3 text-gray-700">Preakness Stakes (Second leg of the Triple Crown)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium whitespace-nowrap">June 6, 2026</td>
                  <td className="py-3 text-gray-700">Belmont Stakes (Third leg of the Triple Crown)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Planning Links */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Planning Your Derby Experience
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/attend/tickets"
              className="group flex items-center gap-4 p-5 rounded-lg border border-gray-200 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-derby-cream rounded-full flex items-center justify-center">
                <span className="text-xl" role="img" aria-label="Ticket">&#127915;</span>
              </div>
              <div>
                <p className="font-serif font-bold text-derby-green group-hover:text-derby-gold transition-colors">
                  Get Tickets
                </p>
                <p className="text-sm text-gray-500">Seating options & pricing</p>
              </div>
            </Link>

            <Link
              href="/betting/how-to-bet"
              className="group flex items-center gap-4 p-5 rounded-lg border border-gray-200 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-derby-cream rounded-full flex items-center justify-center">
                <span className="text-xl" role="img" aria-label="Money">&#128176;</span>
              </div>
              <div>
                <p className="font-serif font-bold text-derby-green group-hover:text-derby-gold transition-colors">
                  Betting Guide
                </p>
                <p className="text-sm text-gray-500">How to bet on the Derby</p>
              </div>
            </Link>

            <Link
              href="/attend/what-to-wear"
              className="group flex items-center gap-4 p-5 rounded-lg border border-gray-200 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-derby-cream rounded-full flex items-center justify-center">
                <span className="text-xl" role="img" aria-label="Hat">&#127913;</span>
              </div>
              <div>
                <p className="font-serif font-bold text-derby-green group-hover:text-derby-gold transition-colors">
                  What to Wear
                </p>
                <p className="text-sm text-gray-500">Hats, outfits & dress code</p>
              </div>
            </Link>

            <Link
              href="/louisville/where-to-stay"
              className="group flex items-center gap-4 p-5 rounded-lg border border-gray-200 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-derby-cream rounded-full flex items-center justify-center">
                <span className="text-xl" role="img" aria-label="Hotel">&#127976;</span>
              </div>
              <div>
                <p className="font-serif font-bold text-derby-green group-hover:text-derby-gold transition-colors">
                  Where to Stay
                </p>
                <p className="text-sm text-gray-500">Hotels near Churchill Downs</p>
              </div>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
