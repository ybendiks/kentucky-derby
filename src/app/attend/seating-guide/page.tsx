import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title:
    "Churchill Downs Seating Guide | Best Seats for the Kentucky Derby (2026)",
  description:
    "Complete Churchill Downs seating chart and guide. Compare every section from infield to Millionaires Row. Find the best Kentucky Derby seats for first-timers, families, racing fans, and photographers.",
  keywords:
    "churchill downs seating chart, best seats kentucky derby, kentucky derby seating guide, churchill downs sections, derby grandstand seats, millionaires row derby",
};

const faqItems = [
  {
    question: "What is the best section at Churchill Downs for first-time Derby attendees?",
    answer:
      "For first-time Kentucky Derby attendees, the Grandstand offers the best combination of value, views, and atmosphere. Reserved grandstand seats provide a clear view of the finish line, covered seating in many areas, and the classic Derby experience with well-dressed crowds and easy access to betting windows and concessions. The infield is a good budget option but offers limited race views.",
  },
  {
    question: "Can you see the entire race from the infield at Churchill Downs?",
    answer:
      "No, you cannot see the entire race from the Churchill Downs infield. The infield is located inside the track, and the horses run around the outside. From most infield positions, you can see portions of the backstretch and turns on the large video screens, but the finish line is not visible from the infield floor level. Most infield attendees watch the race on the big screens rather than seeing the horses directly.",
  },
  {
    question: "What is included with Millionaires Row tickets at Churchill Downs?",
    answer:
      "Millionaires Row tickets at Churchill Downs include reserved seating in climate-controlled, air-conditioned luxury with floor-to-ceiling windows overlooking the track and finish line. Access includes gourmet dining options, premium bar service, private wagering facilities, and upscale restroom facilities. The dress code is the most formal at the venue, and the views of the race are among the best available anywhere at Churchill Downs.",
  },
  {
    question: "Are there accessible seating options at Churchill Downs?",
    answer:
      "Yes, Churchill Downs offers ADA-accessible seating throughout the venue including the grandstand, clubhouse, and other sections. Accessible seating areas provide wheelchair-accessible locations with companion seating. Accessible restrooms are available, and the venue offers assistance with navigation. Contact Churchill Downs guest services in advance to arrange accessible seating and discuss specific accessibility needs.",
  },
  {
    question: "Can I switch between sections at Churchill Downs on Derby Day?",
    answer:
      "Movement between sections depends on your ticket type. Guests with premium tickets such as Clubhouse or Millionaires Row can typically access the grandstand areas as well. However, grandstand ticket holders cannot access the clubhouse or premium areas without the appropriate ticket. The infield is accessed through a separate tunnel, and moving between the infield and the main venue may be restricted depending on your ticket. Check your specific ticket terms before planning to move between areas.",
  },
];

export default function SeatingGuidePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Attend", href: "/attend" },
          { name: "Seating Guide", href: "/attend/seating-guide" },
        ]}
      />
      <ArticleJsonLd
        title="Churchill Downs Seating Guide: Best Seats for the Kentucky Derby"
        description="A section-by-section guide to Churchill Downs seating for the Kentucky Derby, covering the infield, grandstand, clubhouse, Millionaires Row, The Mansion, and luxury suites with recommendations for every type of attendee."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="bg-derby-green text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-derby-gold font-semibold tracking-widest uppercase text-sm mb-4">
            Plan Your Visit
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Churchill Downs Seating Guide
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
            Churchill Downs offers a dramatically different experience depending
            on where you sit. From the raucous infield party to the
            air-conditioned elegance of Millionaires Row, this guide breaks down
            every section so you can choose the perfect spot for your Kentucky
            Derby experience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Venue Overview */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Churchill Downs: Venue Overview
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Churchill Downs has been the home of the Kentucky Derby since 1875,
            and the historic venue has expanded significantly over the decades
            to accommodate the massive crowds that attend the race each year.
            The facility spans 175 acres and can hold over 170,000 spectators
            on Derby Day, making it one of the largest single-day sporting
            events in the world.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The venue is organized around the one-and-a-quarter-mile dirt track,
            with the iconic twin spires rising above the grandstand at the
            finish line. Seating and viewing areas wrap around the track in
            distinct sections, each with its own character, price point, and
            experience. Understanding the layout is essential to choosing the
            right tickets and having the best possible Derby Day.
          </p>
        </section>

        {/* Visual Seating Diagram */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Churchill Downs Venue Map
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This simplified diagram shows the layout of Churchill Downs seating
            areas relative to the track. The finish line is on the homestretch
            directly below the Twin Spires.
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-8 overflow-hidden">
            {/* Track Diagram */}
            <div className="relative mx-auto" style={{ maxWidth: 640 }}>
              {/* Track oval */}
              <div className="relative border-4 border-derby-green rounded-[50%] mx-auto" style={{ width: '100%', paddingBottom: '55%' }}>
                {/* Track surface label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs sm:text-sm font-bold text-derby-green uppercase tracking-wider">Infield</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1">General Admission</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">Standing Room Only</p>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-2">📺 Big Screen TVs</p>
                  </div>
                </div>
                {/* Dirt track label */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2">
                  <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider">Backstretch</p>
                </div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                  <p className="text-[9px] sm:text-[10px] text-derby-green font-bold uppercase tracking-wider">Homestretch</p>
                </div>
                {/* First Turn label */}
                <div className="absolute top-1/3 right-0 translate-x-1/2">
                  <p className="text-[9px] sm:text-[10px] text-gray-500 rotate-90 origin-center whitespace-nowrap">First Turn ↓</p>
                </div>
              </div>

              {/* Grandstand - below the track */}
              <div className="mt-2 space-y-1">
                {/* Twin Spires marker */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="h-px flex-1 bg-derby-gold" />
                  <p className="text-xs sm:text-sm font-bold text-derby-gold whitespace-nowrap">⛪ Twin Spires &amp; Finish Line</p>
                  <div className="h-px flex-1 bg-derby-gold" />
                </div>
                <div className="bg-emerald-100 border border-emerald-300 rounded-lg p-2 text-center">
                  <p className="text-xs sm:text-sm font-bold text-emerald-800">Grandstand</p>
                  <p className="text-[10px] sm:text-xs text-emerald-600">Reserved Seating · Finish Line Views · Covered</p>
                </div>
                <div className="bg-purple-100 border border-purple-300 rounded-lg p-2 text-center">
                  <p className="text-xs sm:text-sm font-bold text-purple-800">Clubhouse</p>
                  <p className="text-[10px] sm:text-xs text-purple-600">Premium Dining · Elevated Views · Upscale</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-2 text-center">
                  <p className="text-xs sm:text-sm font-bold text-amber-800">Millionaires Row</p>
                  <p className="text-[10px] sm:text-xs text-amber-600">Climate-Controlled · Floor-to-Ceiling Windows · Gourmet</p>
                </div>
                <div className="bg-red-100 border border-red-300 rounded-lg p-2 text-center">
                  <p className="text-xs sm:text-sm font-bold text-red-800">The Mansion &amp; Luxury Suites</p>
                  <p className="text-[10px] sm:text-xs text-red-600">Private Suites · All-Inclusive · Ultra-Premium</p>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Diagram is a simplified representation. Actual venue layout may vary. Sections are stacked vertically from track level (Grandstand) to upper levels (Millionaires Row, Suites).
              </p>
            </div>
          </div>
        </section>

        {/* Price Comparison Table */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Section Comparison at a Glance
          </h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-derby-green text-white">
                  <th className="text-left p-3 rounded-tl-lg font-serif">Section</th>
                  <th className="text-center p-3 font-serif">Race View</th>
                  <th className="text-center p-3 font-serif">Seating</th>
                  <th className="text-center p-3 font-serif">Food &amp; Drink</th>
                  <th className="text-center p-3 font-serif">Dress Code</th>
                  <th className="text-center p-3 rounded-tr-lg font-serif">Price Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { section: "Infield", view: "★☆☆☆☆", seating: "Standing", food: "Concessions", dress: "Casual", price: "$" },
                  { section: "First Turn", view: "★★★☆☆", seating: "Reserved", food: "Concessions", dress: "Smart Casual", price: "$$" },
                  { section: "Grandstand", view: "★★★★☆", seating: "Reserved", food: "Concessions+", dress: "Cocktail", price: "$$$" },
                  { section: "Clubhouse", view: "★★★★★", seating: "Reserved", food: "Sit-Down Dining", dress: "Upscale", price: "$$$$" },
                  { section: "Millionaires Row", view: "★★★★★", seating: "Luxury", food: "Gourmet", dress: "Formal", price: "$$$$$" },
                  { section: "The Mansion", view: "★★★★★", seating: "Private Suite", food: "All-Inclusive", dress: "Formal", price: "$$$$$$" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-semibold text-derby-green">{row.section}</td>
                    <td className="p-3 text-center text-amber-500">{row.view}</td>
                    <td className="p-3 text-center text-gray-600">{row.seating}</td>
                    <td className="p-3 text-center text-gray-600">{row.food}</td>
                    <td className="p-3 text-center text-gray-600">{row.dress}</td>
                    <td className="p-3 text-center font-semibold text-derby-green">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Google Maps Embed */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Churchill Downs Location
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Churchill Downs is located at 700 Central Avenue in Louisville,
            Kentucky, approximately five miles south of downtown Louisville and
            fifteen minutes from Louisville Muhammad Ali International Airport
            (SDF).
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5!2d-85.7691!3d38.2027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886972b2e0e1ccaf%3A0xbce5e71b5a28c8e3!2sChurchill%20Downs!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Churchill Downs location on Google Maps"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            700 Central Avenue, Louisville, KY 40208
          </p>
        </section>

        {/* Section Breakdown */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Section-by-Section Breakdown
          </h2>

          <div className="space-y-8">
            {/* Infield */}
            <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl font-bold text-derby-green">
                  The Infield
                </h3>
                <span className="text-sm font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  Most Affordable
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The infield is the massive grassy area inside the track and is
                home to the Derby&rsquo;s famous party atmosphere. General
                admission infield tickets are the most affordable way to attend
                the Kentucky Derby, but this comes with significant trade-offs.
                The infield is standing room only with no assigned seats, no
                shade structures, and limited direct views of the race. Most
                infield attendees watch the races on large video screens rather
                than seeing the horses run past.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Views</p>
                  <p className="text-gray-600">Limited direct race views; big screens available</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Seating</p>
                  <p className="text-gray-600">Standing room only, open grass</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Atmosphere</p>
                  <p className="text-gray-600">Festival party, energetic, casual dress</p>
                </div>
              </div>
            </div>

            {/* First Turn */}
            <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl font-bold text-derby-green">
                  First Turn
                </h3>
                <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  Good Value
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The First Turn section offers reserved seating along the
                first turn of the track, providing affordable reserved seats
                with direct views of the horses as they run past. While you
                cannot see the finish line from this vantage point, the
                proximity to the track and the thundering sound of the horses
                running by create an exciting, visceral experience. First Turn
                seats are often among the best-value reserved seats at Churchill
                Downs and a solid choice for budget-conscious attendees who
                want a more structured experience than the infield.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Views</p>
                  <p className="text-gray-600">Close to track; first turn vantage, no finish view</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Seating</p>
                  <p className="text-gray-600">Reserved seats, some covered areas</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Atmosphere</p>
                  <p className="text-gray-600">Enthusiastic fans, casual-to-dressy</p>
                </div>
              </div>
            </div>

            {/* Grandstand */}
            <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl font-bold text-derby-green">
                  Grandstand
                </h3>
                <span className="text-sm font-semibold bg-derby-gold/30 text-derby-green px-3 py-1 rounded-full">
                  Classic Experience
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Grandstand is the heart of the Churchill Downs experience
                and where the classic Derby atmosphere lives. Located directly
                along the homestretch, grandstand seats offer clear views of the
                finish line beneath the iconic twin spires. Many grandstand
                sections are covered, providing protection from sun and rain.
                The crowd here is well-dressed, enthusiastic, and deeply engaged
                with the racing. Betting windows, concession stands, and
                restrooms are readily accessible throughout the grandstand
                levels.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Views</p>
                  <p className="text-gray-600">Excellent finish line views from upper levels</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Seating</p>
                  <p className="text-gray-600">Reserved, many sections covered</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Atmosphere</p>
                  <p className="text-gray-600">Traditional Derby fashion, cocktail attire</p>
                </div>
              </div>
            </div>

            {/* Clubhouse */}
            <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl font-bold text-derby-green">
                  Clubhouse
                </h3>
                <span className="text-sm font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  Upscale
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Clubhouse offers an elevated experience above the
                grandstand, with access to exclusive restaurants, lounges, and
                premium viewing areas. Clubhouse seating is covered and provides
                excellent views of the homestretch and finish line. The dining
                options in the clubhouse are significantly more refined than
                the grandstand concessions, with sit-down restaurants serving
                Kentucky cuisine and craft cocktails. The dress code is
                noticeably more formal, and the crowd tends to be older and more
                focused on the horse racing itself.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Views</p>
                  <p className="text-gray-600">Premium homestretch views, elevated perspective</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Seating</p>
                  <p className="text-gray-600">Reserved, covered, access to lounges</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Atmosphere</p>
                  <p className="text-gray-600">Upscale, refined dining, suits and cocktail dresses</p>
                </div>
              </div>
            </div>

            {/* Millionaires Row */}
            <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl font-bold text-derby-green">
                  Millionaires Row
                </h3>
                <span className="text-sm font-semibold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  Premium
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Millionaires Row is the premier seating area at Churchill Downs,
                offering the most exclusive Derby Day experience short of a
                private suite. Located on the upper levels of the clubhouse,
                Millionaires Row features climate-controlled, air-conditioned
                luxury with floor-to-ceiling windows providing panoramic views
                of the track and finish line. Gourmet dining, premium bar
                service, private wagering facilities, and impeccable service
                define the Millionaires Row experience. This section attracts
                celebrities, industry leaders, and the most fashion-forward
                attendees.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Views</p>
                  <p className="text-gray-600">Panoramic, floor-to-ceiling windows, best in venue</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Seating</p>
                  <p className="text-gray-600">Climate-controlled, air-conditioned luxury</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Atmosphere</p>
                  <p className="text-gray-600">Exclusive, gourmet dining, formal attire</p>
                </div>
              </div>
            </div>

            {/* The Mansion */}
            <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl font-bold text-derby-green">
                  The Mansion
                </h3>
                <span className="text-sm font-semibold bg-red-100 text-red-800 px-3 py-1 rounded-full">
                  Ultra-Premium
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Mansion at Churchill Downs represents the absolute pinnacle
                of the Derby experience. These ultra-premium suites offer
                private, fully catered luxury with dedicated service staff,
                gourmet food and premium spirits included in the package, and
                stunning views of the track. The Mansion suites accommodate
                groups and are popular with corporate entertaining, wedding
                parties, and high-net-worth individuals who want the ultimate
                Derby Day. Reservations are made well in advance, and
                availability is extremely limited.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Views</p>
                  <p className="text-gray-600">Private suite views, dedicated balcony access</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Seating</p>
                  <p className="text-gray-600">Private suites, all-inclusive catering</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Atmosphere</p>
                  <p className="text-gray-600">Exclusive private experience, formal dress</p>
                </div>
              </div>
            </div>

            {/* Luxury Suites */}
            <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl font-bold text-derby-green">
                  Luxury Suites
                </h3>
                <span className="text-sm font-semibold bg-red-100 text-red-800 px-3 py-1 rounded-full">
                  Ultra-Premium
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Churchill Downs offers private luxury suites throughout the
                venue that provide groups with their own enclosed space,
                catered food and beverage service, private betting terminals,
                and excellent views of the races. Suites vary in size, location,
                and amenities, accommodating groups from a dozen to several
                dozen guests. They are ideal for corporate events, large
                celebrations, and groups who want a private, comfortable base
                for the day while still being part of the larger Derby
                atmosphere. Suite packages are typically all-inclusive with food,
                drinks, and dedicated concierge service.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Views</p>
                  <p className="text-gray-600">Varies by location; all suites have track views</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Seating</p>
                  <p className="text-gray-600">Private enclosed space, catered service</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-derby-green">Atmosphere</p>
                  <p className="text-gray-600">Private group setting, formal dress expected</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Sections For */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Best Sections by Attendee Type
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Different sections suit different types of Derby attendees. Here
            are our recommendations based on what you are looking for.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Best for First-Timers
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Grandstand.</strong> The grandstand offers the most
                well-rounded Derby experience for newcomers. You get excellent
                finish line views, the classic dressed-up atmosphere, easy
                access to food and betting, and covered seating in many areas.
                It is the quintessential Derby experience at a mid-range price
                point.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Best for Families
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Grandstand or First Turn.</strong> These sections
                provide reserved seating (important for keeping a group
                together), proximity to restrooms and concessions, and a
                less rowdy atmosphere than the infield. Children are welcome
                at the Kentucky Derby, and reserved seating areas are the most
                family-friendly zones.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Best for Serious Racing Fans
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Clubhouse or Millionaires Row.</strong> Serious
                handicappers and racing enthusiasts thrive in the clubhouse
                and Millionaires Row, where the focus is squarely on the
                horses. Close access to the paddock, premium wagering
                facilities, televisions showing replays and odds, and a
                knowledgeable crowd make these sections ideal for those who
                take the racing seriously.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Best for the Party Atmosphere
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Infield.</strong> If the social experience matters more
                to you than watching the race, the infield is your section. The
                energy is unmatched, the dress code is relaxed, and the crowd
                is there to have fun. Just accept that you will watch the Derby
                itself on a screen rather than seeing the finish in person.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Best for Photography
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Grandstand, lower levels near the rail.</strong> The
                lower grandstand sections near the finish line provide the
                closest views of the horses crossing the wire. The combination
                of proximity to the track and the twin spires in the background
                creates the most photogenic setting at Churchill Downs. Morning
                and early afternoon light is best for photos.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Best for Corporate Entertaining
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Luxury Suites or The Mansion.</strong> Private suites
                provide the ideal setting for business entertaining, with
                all-inclusive food and beverage, private space for conversation,
                and the impressive backdrop of the Kentucky Derby to make a
                lasting impression on clients and colleagues.
              </p>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Accessibility at Churchill Downs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Churchill Downs is committed to providing accessible experiences
            for guests with disabilities. ADA-accessible seating is available
            in the grandstand, clubhouse, and other sections, with wheelchair
            spaces and companion seating. Accessible restrooms are located
            throughout the venue, and elevators provide access to upper levels.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Guests with mobility challenges should contact Churchill Downs
            guest services well in advance of Derby Day to arrange accessible
            seating and discuss specific needs. The infield involves extensive
            walking on grass and uneven surfaces, which may be challenging for
            some guests. The grandstand and clubhouse sections, with their
            paved paths and elevator access, tend to be more accessible
            options. Service animals are permitted throughout the venue.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Seating Guide Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-derby-green rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Choose Your Seats?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Now that you know the layout, explore our ticket guide for pricing
            and purchasing options, or dive deeper into the infield experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/attend/tickets"
              className="inline-block bg-derby-gold text-derby-green-dark font-bold px-8 py-3.5 rounded-lg hover:bg-derby-gold-light transition-colors"
            >
              Buy Tickets
            </Link>
            <Link
              href="/attend/infield"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              Infield Guide
            </Link>
            <Link
              href="/attend/first-timers"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              First-Timer&rsquo;s Guide
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
