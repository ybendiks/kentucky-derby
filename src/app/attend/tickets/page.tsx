import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title:
    "2026 Kentucky Derby Tickets & Prices | How to Buy Derby Tickets",
  description:
    "Buy 2026 Kentucky Derby tickets at Churchill Downs on May 2, 2026. Compare ticket prices from general admission ($80) to luxury suites ($5,000+). Seating guide, buying tips, and best value packages.",
  keywords:
    "kentucky derby tickets 2026, derby ticket prices, how to buy kentucky derby tickets, churchill downs tickets, derby day tickets",
};

const faqItems = [
  {
    question: "How much do Kentucky Derby tickets cost in 2026?",
    answer:
      "Kentucky Derby ticket prices in 2026 range from approximately $80 to $100 for general admission infield standing room, $200 to $800 or more for reserved Grandstand seats, $400 to $1,500 or more for Clubhouse access, $2,000 to $5,000 or more for Millionaires Row, and $5,000 or more per person for luxury suites. Prices vary by location, view, and amenities included.",
  },
  {
    question: "When do Kentucky Derby 2026 tickets go on sale?",
    answer:
      "Kentucky Derby tickets typically go on sale in the fall or early winter preceding the race. For the 2026 Derby on May 2, tickets are expected to become available through the official Churchill Downs website and Ticketmaster starting in late 2025 or early 2026. Signing up for the Churchill Downs email list is the best way to be notified of the exact on-sale date.",
  },
  {
    question: "Can I buy Kentucky Derby tickets at the gate on race day?",
    answer:
      "General admission infield tickets are sometimes available at the gate on Derby Day, but availability is not guaranteed and the event frequently sells out in advance. Reserved seating, Clubhouse, and premium sections almost always sell out well before race day. It is strongly recommended to purchase tickets in advance to secure your preferred section and price.",
  },
  {
    question: "Are Kentucky Derby tickets refundable?",
    answer:
      "Kentucky Derby tickets purchased through official channels are generally non-refundable. Churchill Downs typically does not offer refunds for inclement weather or personal schedule changes. Some third-party sellers and ticket insurance providers offer refund protection for an additional fee. Always review the refund policy before purchasing from any source.",
  },
];

export default function TicketsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Attend the Derby", href: "/attend" },
          { name: "Tickets & Prices", href: "/attend/tickets" },
        ]}
      />
      <ArticleJsonLd
        title="2026 Kentucky Derby Tickets & Prices | How to Buy Derby Tickets"
        description="Complete guide to buying 2026 Kentucky Derby tickets. Compare pricing tiers from general admission to luxury suites, find the best deals, and learn when to buy."
        datePublished="2025-09-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      <main>
        {/* Hero Section */}
        <section className="text-white py-20 sm:py-28 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
            alt="Churchill Downs on Kentucky Derby day"
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
                  <Link href="/attend" className="hover:text-derby-gold transition-colors">
                    Attend
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-derby-gold">Tickets &amp; Prices</li>
              </ol>
            </nav>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              2026 Kentucky Derby Tickets{" "}
              <span className="text-derby-gold">&amp; Prices</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
              The 152nd Kentucky Derby takes place on Saturday, May 2, 2026 at
              Churchill Downs in Louisville, Kentucky. From general admission in
              the infield to private luxury suites, here is everything you need to
              know about securing your spot at the greatest two minutes in sports.
            </p>
          </div>
        </section>

        {/* Quick Price Overview Bar */}
        <section className="bg-derby-green-dark text-white border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-derby-gold font-serif text-xl font-bold">From $80</p>
                <p className="text-white/60 text-xs mt-1">General Admission</p>
              </div>
              <div>
                <p className="text-derby-gold font-serif text-xl font-bold">From $200</p>
                <p className="text-white/60 text-xs mt-1">Reserved Grandstand</p>
              </div>
              <div>
                <p className="text-derby-gold font-serif text-xl font-bold">From $400</p>
                <p className="text-white/60 text-xs mt-1">Clubhouse</p>
              </div>
              <div>
                <p className="text-derby-gold font-serif text-xl font-bold">$2,000+</p>
                <p className="text-white/60 text-xs mt-1">Premium &amp; Suites</p>
              </div>
            </div>
          </div>
        </section>

        {/* Buy Tickets CTA */}
        <div className="text-center my-8">
          <a
            href="https://www.kentuckyderby.com/tickets/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-derby-gold hover:bg-derby-gold/90 text-derby-green-dark font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-colors"
          >
            Buy Official Kentucky Derby Tickets →
          </a>
          <p className="text-sm text-gray-500 mt-2">Purchase directly from the official Kentucky Derby website</p>
        </div>

        {/* Table of Contents */}
        <section className="bg-derby-cream border-b border-derby-gold/20">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="font-serif text-lg font-bold text-derby-green mb-4">
              In This Guide
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              <a href="#overview" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                2026 Ticket Overview
              </a>
              <a href="#where-to-buy" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                Where to Buy Tickets
              </a>
              <a href="#ticket-tiers" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                Ticket Tiers &amp; Pricing
              </a>
              <a href="#when-to-buy" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                When to Buy for Best Value
              </a>
              <a href="#packages" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                Multi-Day &amp; Value Packages
              </a>
              <a href="#accessibility" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                Accessibility &amp; Policies
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">

          {/* Overview */}
          <section id="overview" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              2026 Kentucky Derby Ticket Overview
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Attending the Kentucky Derby in person is a bucket-list experience
                for horse racing fans, sports enthusiasts, and anyone who appreciates
                grand spectacle. More than 150,000 people fill Churchill Downs each
                Derby Day, making it one of the largest single-day sporting events in
                the world. Whether you want to sip mint juleps in an air-conditioned
                suite or stand shoulder-to-shoulder in the raucous infield, there is a
                ticket tier for every budget and every style of celebration.
              </p>
              <p>
                Ticket prices for the Kentucky Derby vary widely depending on your
                section, seating type, and whether you purchase directly from
                Churchill Downs or through the secondary market. Prices range from
                under $100 for standing-room general admission to several thousand
                dollars for premium hospitality packages. Understanding the
                differences between each tier is essential to choosing the right
                experience and getting the best value for your money.
              </p>
              <p>
                Below, we break down every ticket category available for the 2026
                Kentucky Derby, including approximate pricing, what each section
                offers, and tips for securing the best seats at the best prices.
              </p>
            </div>
          </section>

          {/* Ticket Tiers */}
          <section id="ticket-tiers" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Ticket Tiers &amp; Pricing for the 2026 Kentucky Derby
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
              <p>
                Churchill Downs offers a range of ticket options to accommodate
                different budgets and preferences. Here is a detailed look at each
                tier, from the most affordable to the most exclusive. All prices are
                approximate and based on historical pricing trends; official 2026
                prices will be confirmed when tickets go on sale.
              </p>
            </div>

            {/* Visual Ticket Price Comparison */}
            <div className="bg-white border-2 border-derby-green/20 rounded-2xl p-6 mb-8">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-4 text-center">
                Ticket Tier Comparison at a Glance
              </h3>
              <div className="space-y-3">
                {[
                  { tier: "Infield GA", price: "$80-100", bar: 8, color: "bg-green-400", view: "Standing · No track view", vibe: "Party atmosphere" },
                  { tier: "Grandstand", price: "$200-800", bar: 40, color: "bg-blue-400", view: "Reserved seat · Track view", vibe: "Classic Derby" },
                  { tier: "Clubhouse", price: "$400-1,500", bar: 60, color: "bg-purple-400", view: "Premium seat · Great view", vibe: "Upscale" },
                  { tier: "Millionaires Row", price: "$2,000-5,000", bar: 80, color: "bg-derby-gold", view: "Best view · VIP service", vibe: "Luxury" },
                  { tier: "Suites", price: "$5,000+", bar: 100, color: "bg-derby-green", view: "Private suite · All-inclusive", vibe: "Ultimate" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-28 text-right shrink-0">
                      <p className="text-sm font-bold text-derby-green">{t.tier}</p>
                      <p className="text-[10px] text-gray-500">{t.price}</p>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-full h-7 relative overflow-hidden">
                      <div
                        className={`h-full rounded-full ${t.color} flex items-center justify-between px-3`}
                        style={{ width: `${t.bar}%`, minWidth: "100px" }}
                      >
                        <span className="text-[10px] text-white font-medium truncate">{t.view}</span>
                      </div>
                    </div>
                    <div className="w-20 text-[10px] text-gray-500 shrink-0">{t.vibe}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                Bar length represents relative cost. Prices are approximate and vary by exact location.
              </p>
            </div>

            <div className="space-y-8">
              {/* General Admission Infield */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-derby-green">
                    General Admission &mdash; Infield
                  </h3>
                  <span className="bg-derby-green text-derby-gold text-sm font-bold px-4 py-1 rounded-full">
                    ~$80&ndash;$100
                  </span>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>
                    The infield is the beating heart of the Kentucky Derby party scene.
                    General admission infield tickets are the most affordable way to
                    experience Derby Day in person, and they deliver an atmosphere
                    unlike anything else in sports. This is standing-room only with
                    no reserved seats, and the crowd skews younger and more casual.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-derby-green mb-2">What You Get</h4>
                      <ul className="text-sm space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Standing-room access to the infield area
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Views of the track from the inner rail
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Food and drink vendors throughout the infield
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Live entertainment and big screen viewing
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-derby-green mb-2">Best For</h4>
                      <ul className="text-sm space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Groups of friends looking for a party atmosphere
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Budget-conscious attendees
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          First-timers wanting the full festival experience
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reserved Grandstand */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-derby-green">
                    Reserved Grandstand Seating
                  </h3>
                  <span className="bg-derby-green text-derby-gold text-sm font-bold px-4 py-1 rounded-full">
                    ~$200&ndash;$800+
                  </span>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Reserved Grandstand seats are the backbone of the traditional
                    Derby experience. You get an assigned seat with a view of the
                    track, covered overhead protection from sun and rain, and access
                    to the Grandstand&rsquo;s concourse with betting windows, bars,
                    and food options. Pricing varies significantly by row and
                    proximity to the finish line &mdash; seats near the wire command
                    the highest premiums.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-derby-green mb-2">What You Get</h4>
                      <ul className="text-sm space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Assigned reserved seat with track views
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Covered seating area (rain or shine)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Access to Grandstand concourse dining and betting
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Official Derby Day program included
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-derby-green mb-2">Best For</h4>
                      <ul className="text-sm space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Couples and families
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Serious racing fans who want to watch the horses
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Best balance of value and experience
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clubhouse */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-derby-green">
                    Clubhouse Seating
                  </h3>
                  <span className="bg-derby-gold text-derby-green-dark text-sm font-bold px-4 py-1 rounded-full">
                    ~$400&ndash;$1,500+
                  </span>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>
                    The Clubhouse offers an elevated Derby experience with upscale
                    amenities, more refined dining options, and some of the best
                    sightlines at Churchill Downs. Clubhouse ticket holders enjoy
                    access to exclusive restaurants, premium bar service, and a more
                    dressed-up atmosphere compared to the Grandstand. If you want
                    the classic Derby experience with a touch of luxury, the
                    Clubhouse is the sweet spot.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-derby-green mb-2">What You Get</h4>
                      <ul className="text-sm space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Reserved seating in the Clubhouse section
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Access to Clubhouse-exclusive restaurants and bars
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Premium track views with covered overhead
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Climate-controlled indoor spaces
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-derby-green mb-2">Best For</h4>
                      <ul className="text-sm space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Those who want upscale dining with their racing
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Business entertaining and client hospitality
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Special occasion celebrations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Millionaires Row */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-derby-gold/30">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-derby-green">
                    Millionaires Row
                  </h3>
                  <span className="bg-derby-gold text-derby-green-dark text-sm font-bold px-4 py-1 rounded-full">
                    ~$2,000&ndash;$5,000+
                  </span>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Millionaires Row is the premier seating experience at Churchill
                    Downs. Located on the upper levels of the Clubhouse with
                    commanding views of the entire track, these seats put you in the
                    heart of the most exclusive section of the venue. Expect
                    all-inclusive food and premium open bar, dedicated wagering
                    stations, and a dress code that reflects the sophistication of
                    the setting. This is where celebrities, horse owners, and VIPs
                    gather on Derby Day.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-derby-green mb-2">What You Get</h4>
                      <ul className="text-sm space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Premium reserved seating with panoramic track views
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          All-inclusive gourmet food and premium open bar
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Private wagering windows
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Official Derby Day program and commemorative gift
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-derby-green mb-2">Best For</h4>
                      <ul className="text-sm space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          VIP and all-inclusive experience seekers
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          High-end corporate entertaining
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-1.5 flex-shrink-0" />
                          Once-in-a-lifetime celebrations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Luxury Suites */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-derby-gold/30">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-derby-green">
                    Luxury Suites &amp; The Mansion
                  </h3>
                  <span className="bg-derby-gold text-derby-green-dark text-sm font-bold px-4 py-1 rounded-full">
                    $5,000+ per person
                  </span>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>
                    For the ultimate Derby Day experience, private luxury suites
                    and The Mansion at Churchill Downs represent the pinnacle of
                    hospitality. Suites are private enclosed spaces with balcony
                    seating overlooking the track, dedicated wait staff, gourmet
                    catering, premium spirits, and personal television monitors for
                    following every race. The Mansion is the most exclusive offering
                    &mdash; an ultra-premium hospitality venue with a curated culinary
                    experience, top-shelf bourbon, and an intimate setting for a
                    limited number of guests.
                  </p>
                  <p>
                    These options are typically purchased as full suites (accommodating
                    groups of 10 to 30 guests) rather than individual seats, making
                    them ideal for corporate events, large family celebrations, or
                    groups of friends pooling resources for an unforgettable day.
                    Individual packages for The Mansion are occasionally available
                    at a significant per-person premium.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Multi-Day Packages */}
          <section id="packages" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Multi-Day &amp; Value Packages
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
              <p>
                Churchill Downs offers several multi-day and bundled ticket options
                that provide better value than purchasing individual day tickets
                separately. If you are planning to attend more than one day of Derby
                Week, these packages are worth serious consideration.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-derby-cream rounded-xl p-6 sm:p-8 border border-derby-gold/10">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                  Oaks + Derby 2-Day Package
                </h3>
                <p className="text-gray-700 mb-3">
                  The Kentucky Oaks (Friday, May 1) is the premier race for
                  three-year-old fillies and has become a major event in its own right,
                  drawing over 100,000 spectators. A 2-day Oaks + Derby package
                  includes tickets for both Friday and Saturday in the same section,
                  often at a discount compared to buying each day separately. This is
                  the most popular package option and the best way to experience the
                  full Derby weekend.
                </p>
                <p className="text-sm text-derby-green font-semibold">
                  Tip: Oaks Day is widely considered the insider&rsquo;s favorite.
                  The crowd is slightly smaller, the fashion is spectacular (pink is
                  the traditional color), and the racing is world-class.
                </p>
              </div>

              <div className="bg-derby-cream rounded-xl p-6 sm:p-8 border border-derby-gold/10">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                  Run for the Roses Package
                </h3>
                <p className="text-gray-700 mb-3">
                  For the ultimate Derby Week experience, the Run for the Roses
                  Package includes admission to all six days of racing during Derby
                  Week at an approximate cost of $268. This covers everything from
                  the opening day of the spring meet through Oaks Day and Derby Day
                  itself. It is outstanding value for racing enthusiasts who want to
                  immerse themselves in the full week of competition and festivities.
                </p>
                <p className="text-sm text-derby-green font-semibold">
                  Value: At roughly $45 per day for six full days of racing, this is
                  the most economical way to experience Derby Week.
                </p>
              </div>

              <div className="bg-derby-cream rounded-xl p-6 sm:p-8 border border-derby-gold/10">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                  Derby Experiences &amp; Hospitality Packages
                </h3>
                <p className="text-gray-700">
                  Third-party hospitality companies offer all-inclusive packages that
                  bundle tickets with hotel accommodations, transportation, premium
                  food and beverages, and exclusive Derby Week events. These turnkey
                  packages range from moderate to ultra-premium and are ideal for
                  out-of-town visitors who want a seamless experience without
                  coordinating logistics separately. Popular providers include
                  official Churchill Downs hospitality partners and licensed
                  experience companies that have been serving Derby visitors for
                  years.
                </p>
              </div>
            </div>
          </section>

          {/* Where to Buy */}
          <section id="where-to-buy" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Where to Buy Kentucky Derby Tickets
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
              <p>
                Choosing the right source for your Derby tickets can mean the
                difference between a great deal and an overpriced or fraudulent
                purchase. Here are the primary channels for buying 2026 Kentucky
                Derby tickets.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                  Official Channels: Churchill Downs &amp; Ticketmaster
                </h3>
                <p className="text-gray-700">
                  The safest and most reliable way to buy Derby tickets is directly
                  through the Churchill Downs website or through Ticketmaster, the
                  official ticketing partner. Tickets purchased through official
                  channels are guaranteed authentic, and you will have direct access
                  to customer service for any issues. Official on-sale dates are
                  announced via the Churchill Downs email list and social media
                  channels. Sign up early to get first access when tickets drop.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                  Third-Party Resellers &amp; Secondary Market
                </h3>
                <p className="text-gray-700">
                  Platforms like StubHub, SeatGeek, and Vivid Seats offer Derby
                  tickets on the secondary market, often at a premium above face
                  value. The secondary market is useful when official channels sell
                  out or when you need specific seats in high-demand sections.
                  Always verify the seller&rsquo;s reputation, look for buyer
                  protection guarantees, and be aware that secondary market prices
                  can fluctuate significantly as Derby Day approaches.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                  Hospitality &amp; Experience Packages
                </h3>
                <p className="text-gray-700">
                  Several licensed hospitality companies sell all-inclusive Derby
                  packages that bundle tickets with hotels, transportation, and VIP
                  events. These are typically premium-priced but include significant
                  convenience for out-of-town visitors. Always confirm that the
                  company is a licensed Churchill Downs partner or has verifiable
                  reviews and a track record.
                </p>
              </div>

              <div className="bg-derby-green/5 rounded-xl p-6 border border-derby-green/20">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  Avoiding Ticket Scams
                </h3>
                <p className="text-gray-700 text-sm">
                  Counterfeit Derby tickets are a real concern, especially on social
                  media marketplaces and classified ad sites. Never buy tickets from
                  unverified individuals, never pay via wire transfer or cryptocurrency,
                  and always insist on purchasing through platforms that offer buyer
                  protection. If a deal looks too good to be true, it almost certainly
                  is.
                </p>
              </div>
            </div>
          </section>

          {/* When to Buy */}
          <section id="when-to-buy" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              When to Buy for the Best Value
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
              <p>
                Timing your ticket purchase can save you hundreds of dollars. Here
                is the typical timeline for Kentucky Derby tickets and our advice for
                getting the best price.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-derby-green rounded-lg flex items-center justify-center">
                  <span className="text-derby-gold font-serif font-bold text-xs">FALL</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                    Fall / Early Winter: Initial On-Sale
                  </h3>
                  <p className="text-gray-700">
                    Derby tickets typically go on sale in the fall or early winter
                    preceding the race. This is the best time to buy at face value
                    through official channels. Popular sections sell out quickly
                    during the initial on-sale window, so be ready to purchase as
                    soon as tickets become available. Premium sections like
                    Millionaires Row and suites can sell out within days.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-derby-green rounded-lg flex items-center justify-center">
                  <span className="text-derby-gold font-serif font-bold text-xs">JAN</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                    January &ndash; March: Steady Availability
                  </h3>
                  <p className="text-gray-700">
                    In the early months of the year, many sections still have
                    availability at or near face value. Secondary market prices begin
                    to climb as Derby Day gets closer. If you missed the initial sale,
                    this window still offers reasonable pricing, especially for
                    Grandstand seating and general admission.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-derby-green rounded-lg flex items-center justify-center">
                  <span className="text-derby-gold font-serif font-bold text-xs">APR</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                    April &ndash; May: Premium Pricing
                  </h3>
                  <p className="text-gray-700">
                    As April progresses and the Derby field takes shape, demand surges
                    and secondary market prices peak. Buying in April or on the week
                    of the Derby itself typically means paying a significant premium
                    over face value. However, last-minute deals occasionally appear on
                    resale platforms in the final 48 hours if sellers are trying to
                    avoid being stuck with unsold tickets.
                  </p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="mt-8 bg-derby-cream rounded-xl p-6 sm:p-8 border border-derby-gold/10">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-4">
                Tips for Getting the Best Value
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Sign up for the Churchill Downs email list</strong> to receive
                    advance notice of on-sale dates and exclusive presale opportunities.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Consider the 2-day Oaks + Derby package</strong> for a lower
                    per-day cost and a richer overall experience.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Buy early</strong> for the best selection and face-value pricing.
                    Waiting until spring almost always means paying more.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Compare sections carefully.</strong> A lower-priced Grandstand
                    seat near the finish line can offer a better experience than a more
                    expensive seat further from the action. Check our{" "}
                    <Link
                      href="/attend/seating-guide"
                      className="text-derby-green font-semibold hover:text-derby-gold transition-colors underline decoration-derby-gold/30"
                    >
                      seating guide
                    </Link>{" "}
                    for a detailed comparison.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Factor in total cost.</strong> A general admission ticket is
                    cheap, but food and drink in the infield adds up. A Clubhouse ticket
                    costs more upfront but includes access to better dining options and
                    a more comfortable environment.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* What Your Ticket Includes */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              What Your Ticket Includes
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Regardless of your ticket tier, every Derby Day ticket grants you
                access to Churchill Downs for the full day of racing, which
                typically includes 14 races culminating in the Kentucky Derby
                itself. Gates open early in the morning, and the Derby post time
                is traditionally in the late afternoon (around 6:57 PM ET).
              </p>
              <p>
                Most ticket levels include an official Derby Day racing program,
                which contains the full card, post positions, morning line odds, and
                jockey and trainer information for every race. Premium ticket holders
                typically receive additional perks such as commemorative glasses,
                souvenir programs, and access to exclusive areas within their section.
              </p>
              <p>
                Parking is generally not included with your ticket and must be
                purchased separately or arranged through a nearby lot. Churchill Downs
                also offers shuttle services from select Louisville locations during
                Derby Week. Plan your transportation in advance, as traffic around the
                track is significant on Derby Day.
              </p>
            </div>
          </section>

          {/* Accessibility */}
          <section id="accessibility" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Accessibility, ADA Seating &amp; Policies
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                  ADA Accessible Seating
                </h3>
                <p className="text-gray-700">
                  Churchill Downs provides ADA-compliant accessible seating in multiple
                  sections of the venue, including the Grandstand and Clubhouse.
                  Wheelchair-accessible locations with companion seating are available
                  and should be requested at the time of ticket purchase. Contact the
                  Churchill Downs box office directly for specific accessibility
                  questions and to ensure your needs are accommodated.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                  Refund Policy
                </h3>
                <p className="text-gray-700">
                  Kentucky Derby tickets purchased through official channels are
                  generally non-refundable. The event is held rain or shine, and
                  inclement weather does not warrant a refund. If the race is
                  postponed (an extremely rare occurrence), tickets are typically
                  honored for the rescheduled date. Third-party ticket insurance is
                  available from some resellers and can provide coverage for unexpected
                  cancellations, travel disruptions, or personal emergencies.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                  Bag Policy &amp; Prohibited Items
                </h3>
                <p className="text-gray-700">
                  Churchill Downs enforces a clear bag policy on Derby Day. Bags must
                  be clear plastic and no larger than 12 inches by 12 inches by 6
                  inches. Small clutch purses (approximately the size of your hand)
                  are also permitted regardless of material. Coolers, backpacks,
                  outside food and beverages, and large umbrellas are prohibited.
                  Check the official Churchill Downs website for the complete list of
                  permitted and prohibited items before you pack.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Frequently Asked Questions About Derby Tickets
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-derby-green rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              Plan the Rest of Your Derby Day
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              You have the ticket information. Now explore our guides on what to wear,
              where to sit, and how to make the most of your day at Churchill Downs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/attend/seating-guide"
                className="inline-block bg-derby-gold text-derby-green-dark font-bold px-8 py-3.5 rounded-lg hover:bg-derby-gold-light transition-colors"
              >
                View Seating Guide
              </Link>
              <Link
                href="/culture/fashion"
                className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
              >
                Derby Fashion Guide
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
