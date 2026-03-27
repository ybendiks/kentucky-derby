import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import EventJsonLd from "@/components/EventJsonLd";

export const metadata: Metadata = {
  title:
    "2026 Derby Week Schedule | Full Events Calendar April 25 - May 2",
  description:
    "Complete 2026 Kentucky Derby Week schedule from April 25 through May 2. Opening Day, Sunday Funday, Dawn at the Downs, 502'sDay, Thurby, Kentucky Oaks, Derby Day, plus Louisville events like the Barnstable Brown Gala and Thunder Over Louisville.",
  keywords: [
    "derby week schedule 2026",
    "derby week events",
    "kentucky derby week",
    "thurby derby",
    "dawn at the downs",
    "502sday derby",
    "barnstable brown gala",
    "derby week louisville",
  ],
  openGraph: {
    title: "2026 Derby Week Schedule | April 25 - May 2",
    description:
      "Your day-by-day guide to Derby Week 2026. Every event at Churchill Downs and across Louisville, from Opening Day through the 152nd Kentucky Derby.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What days are included in Derby Week 2026?",
    answer:
      "Derby Week 2026 runs from Saturday, April 25 through Saturday, May 2. The week begins with Opening Day of the Spring Meet at Churchill Downs and culminates with the 152nd Kentucky Derby on the final Saturday. In between, fans can enjoy Sunday Funday, Dawn at the Downs morning workouts, 502'sDay community celebrations, Thurby racing, and the Kentucky Oaks on Friday. Events also take place across Louisville throughout the week.",
  },
  {
    question: "What is Thurby and when is it during Derby Week?",
    answer:
      "Thurby falls on Wednesday, April 29 during the 2026 Derby Week calendar. It is considered the unofficial kickoff to the Derby weekend and is a local favorite among Louisville residents. The name is a play on 'Thursday' and 'Derby,' though in 2026 it is held on Wednesday due to scheduling. Thurby features live racing, concerts, and a lively atmosphere that many locals prefer over the larger Derby Day crowd.",
  },
  {
    question: "Are there Derby Week events outside of Churchill Downs?",
    answer:
      "Yes. Louisville hosts numerous events throughout Derby Week beyond the Churchill Downs racing card. The Barnstable Brown Gala is one of the most prestigious Derby Eve parties, attracting celebrities and socialites. The Taste of Derby is a culinary showcase featuring top Louisville chefs. Thunder Over Louisville, typically held weeks before the Derby, kicks off the broader festival season with one of the largest fireworks displays in the country. Restaurants, bars, and hotels throughout the city host Derby-themed events all week long.",
  },
];

export default function DerbyWeekSchedulePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "The Race", href: "/race" },
          { name: "Derby Week Schedule", href: "/race/derby-week-schedule" },
        ]}
      />
      <ArticleJsonLd
        title="2026 Derby Week Schedule"
        description="Day-by-day schedule for Kentucky Derby Week 2026, from Opening Day on April 25 through Derby Day on May 2, including events at Churchill Downs and across Louisville."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <EventJsonLd />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="bg-derby-green text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
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
                  The Race
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-derby-gold">Derby Week Schedule</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-derby-gold mb-4">
            2026 Derby Week Schedule
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Eight days of racing, celebrations, and Southern hospitality.
            Your complete guide to Derby Week at Churchill Downs and across
            Louisville, April 25 through May 2, 2026.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-derby-gold rounded-full" />
              April 25 &ndash; May 2
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-derby-gold rounded-full" />
              Churchill Downs
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-derby-gold rounded-full" />
              Louisville, KY
            </span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Introduction */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            A Week Unlike Any Other in American Sports
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kentucky Derby is far more than a single horse race. It is a
            week-long celebration that transforms Louisville into the center of
            the sporting world. From the first day of the Spring Meet to the
            final stride past the finish line on the first Saturday in May,
            Derby Week offers something for every type of fan: early-morning
            workouts with the horses, community festivals, world-class racing,
            celebrity-filled galas, and of course the main event itself.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The 2026 Derby Week runs from <strong>Saturday, April 25 through
            Saturday, May 2</strong>. Below is your day-by-day guide to
            everything happening at Churchill Downs and around Louisville.
          </p>
        </section>

        {/* Week at a Glance Visual */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Derby Week at a Glance
          </h2>
          <div className="overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-2 min-w-[700px]">
              {[
                { day: "Sat", date: "Apr 25", event: "Spring Meet Opens", intensity: "bg-green-100 border-green-300 text-green-800" },
                { day: "Sun", date: "Apr 26", event: "Dawn at the Downs", intensity: "bg-green-50 border-green-200 text-green-700" },
                { day: "Mon", date: "Apr 27", event: "Morning Workouts", intensity: "bg-green-50 border-green-200 text-green-700" },
                { day: "Tue", date: "Apr 28", event: "Taste of Derby", intensity: "bg-blue-100 border-blue-300 text-blue-800" },
                { day: "Wed", date: "Apr 29", event: "Derby Parties", intensity: "bg-blue-100 border-blue-300 text-blue-800" },
                { day: "Thu", date: "Apr 30", event: "Thurby", intensity: "bg-purple-100 border-purple-300 text-purple-800" },
                { day: "Fri", date: "May 1", event: "Kentucky Oaks", intensity: "bg-pink-200 border-pink-400 text-pink-800" },
                { day: "Sat", date: "May 2", event: "DERBY DAY", intensity: "bg-derby-gold border-derby-gold text-derby-green font-bold" },
              ].map((d, i) => (
                <div key={i} className={`flex-1 rounded-xl border-2 p-3 text-center ${d.intensity}`}>
                  <p className="text-[10px] uppercase tracking-wider font-semibold opacity-75">{d.day}</p>
                  <p className="text-sm font-bold">{d.date}</p>
                  <p className="text-[10px] mt-1 leading-tight">{d.event}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3 text-xs text-gray-500 justify-center">
            <span className="inline-block w-3 h-3 rounded bg-green-100 border border-green-300" /> Early week
            <span className="inline-block w-3 h-3 rounded bg-blue-100 border border-blue-300 ml-2" /> Mid-week events
            <span className="inline-block w-3 h-3 rounded bg-pink-200 border border-pink-400 ml-2" /> Oaks Friday
            <span className="inline-block w-3 h-3 rounded bg-derby-gold border border-derby-gold ml-2" /> Derby Day
          </div>
        </section>

        {/* Day-by-Day Schedule */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Full Derby Week Schedule: Day by Day
          </h2>

          <div className="space-y-6">
            {/* Saturday Apr 25 */}
            <div className="flex gap-4 items-start p-5 rounded-xl border border-gray-200 hover:border-derby-gold/40 transition-colors">
              <div className="flex-shrink-0 w-28 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold">Saturday</p>
                <p className="font-serif text-xl font-bold text-derby-green">Apr 25</p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  Opening Day of the Spring Meet
                </h3>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Churchill Downs opens its gates for the 2026 Spring Meet,
                  marking the official start of Derby Week. Opening Day features
                  a full card of live racing, setting the stage for the week
                  ahead. It is a chance for fans to get their first look at the
                  track in pristine condition and soak in the anticipation that
                  builds with each passing day toward the Derby.
                </p>
              </div>
            </div>

            {/* Sunday Apr 26 */}
            <div className="flex gap-4 items-start p-5 rounded-xl border border-gray-200 hover:border-derby-gold/40 transition-colors">
              <div className="flex-shrink-0 w-28 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold">Sunday</p>
                <p className="font-serif text-xl font-bold text-derby-green">Apr 26</p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  Sunday Funday
                </h3>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Sunday Funday returns to the Derby Week calendar for the first
                  time since 2010, bringing a family-friendly atmosphere to
                  Churchill Downs with live music, food trucks, lawn games, and
                  a relaxed afternoon of racing. This is an excellent entry point
                  for families and casual fans who want to experience the track
                  without the intensity of the larger mid-week and weekend
                  crowds.
                </p>
              </div>
            </div>

            {/* Monday Apr 27 */}
            <div className="flex gap-4 items-start p-5 rounded-xl border border-gray-200 hover:border-derby-gold/40 transition-colors">
              <div className="flex-shrink-0 w-28 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold">Monday</p>
                <p className="font-serif text-xl font-bold text-derby-green">Apr 27</p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  Dawn at the Downs Dining
                </h3>
                <p className="text-gray-700 leading-relaxed mt-2">
                  One of the most unique experiences of Derby Week, Dawn at
                  the Downs invites fans to watch the Derby contenders complete
                  their morning workouts on the Churchill Downs track while
                  enjoying a breakfast buffet. Racing analysts provide live
                  commentary as horses gallop and breeze past the grandstand in
                  the early morning light. It is a rare behind-the-scenes glimpse
                  into the preparation that goes into the biggest race of the
                  year, and a chance to see the horses up close in a quiet,
                  intimate setting.
                </p>
              </div>
            </div>

            {/* Tuesday Apr 28 */}
            <div className="flex gap-4 items-start p-5 rounded-xl border border-gray-200 hover:border-derby-gold/40 transition-colors">
              <div className="flex-shrink-0 w-28 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold">Tuesday</p>
                <p className="font-serif text-xl font-bold text-derby-green">Apr 28</p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  502&rsquo;sDay
                </h3>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Now in its fourth year, 502&rsquo;sDay is a community
                  celebration named after Louisville&rsquo;s 502 area code.
                  The event brings together local businesses, artists, musicians,
                  and food vendors for a day that celebrates Louisville culture
                  as much as it celebrates horse racing. Think of it as the
                  city&rsquo;s way of putting its own stamp on Derby Week, with
                  an emphasis on what makes Louisville special beyond the track.
                </p>
              </div>
            </div>

            {/* Wednesday Apr 29 */}
            <div className="flex gap-4 items-start p-5 rounded-xl border border-gray-200 hover:border-derby-gold/40 transition-colors">
              <div className="flex-shrink-0 w-28 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold">Wednesday</p>
                <p className="font-serif text-xl font-bold text-derby-green">Apr 29</p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  Thurby
                </h3>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Thurby is the unofficial kickoff to the Derby weekend and one
                  of the most popular days among Louisville locals. The name
                  blends &ldquo;Thursday&rdquo; and &ldquo;Derby,&rdquo; and
                  while the 2026 edition falls on a Wednesday, the spirit is the
                  same: a lively day of racing, concerts, and socializing that
                  signals the real beginning of Derby festivities. Many
                  Louisvillians consider Thurby their favorite day of the entire
                  week for its balance of great racing and a fun, manageable
                  crowd.
                </p>
              </div>
            </div>

            {/* Thursday Apr 30 */}
            <div className="flex gap-4 items-start p-5 rounded-xl border border-gray-200 hover:border-derby-gold/40 transition-colors">
              <div className="flex-shrink-0 w-28 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold">Thursday</p>
                <p className="font-serif text-xl font-bold text-derby-green">Apr 30</p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  Racing Card
                </h3>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Thursday features a full card of live racing at Churchill
                  Downs as the excitement builds toward the final two days. The
                  energy at the track is palpable, with many out-of-town
                  visitors arriving for the Oaks and Derby weekend. It is a
                  great day for serious handicappers to study the track
                  conditions and observe how horses are handling the surface
                  ahead of the marquee races.
                </p>
              </div>
            </div>

            {/* Friday May 1 */}
            <div className="flex gap-4 items-start p-5 rounded-xl border border-derby-gold bg-derby-cream/50">
              <div className="flex-shrink-0 w-28 text-center">
                <p className="text-xs text-pink-500 uppercase font-bold">Friday</p>
                <p className="font-serif text-xl font-bold text-derby-green">May 1</p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  Kentucky Oaks
                </h3>
                <p className="text-gray-700 leading-relaxed mt-2">
                  The premier race for three-year-old fillies headlines a
                  spectacular Friday at Churchill Downs. The entire day is
                  draped in pink in support of cancer awareness, with the
                  emotional Survivors Parade walking the stretch before the
                  races. Crowds often exceed 100,000, and many experienced fans
                  consider Oaks Day the best day of Derby Week for enjoying
                  world-class racing in a slightly more relaxed atmosphere than
                  Saturday.{" "}
                  <Link
                    href="/race/kentucky-oaks"
                    className="text-derby-green font-medium underline decoration-derby-gold/40 hover:decoration-derby-gold transition-colors"
                  >
                    Learn more about the Kentucky Oaks
                  </Link>.
                </p>
              </div>
            </div>

            {/* Saturday May 2 */}
            <div className="flex gap-4 items-start p-5 rounded-xl border-2 border-derby-gold bg-derby-cream">
              <div className="flex-shrink-0 w-28 text-center">
                <p className="text-xs text-derby-gold uppercase font-bold">Saturday</p>
                <p className="font-serif text-xl font-bold text-derby-green">May 2</p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-derby-green">
                  KENTUCKY DERBY DAY
                </h3>
                <p className="text-gray-700 leading-relaxed mt-2">
                  The culmination of everything. The 152nd Kentucky Derby takes
                  place at approximately 6:57 PM ET before a crowd of 150,000
                  and a national television audience on NBC. The day begins
                  early with a full card of undercard races, builds through the
                  afternoon with the singing of &ldquo;My Old Kentucky
                  Home,&rdquo; and reaches its crescendo as 20 three-year-olds
                  burst from the starting gate for the most exciting two minutes
                  in sports. Hats, mint juleps, roses, and the roar of the
                  crowd &mdash; Derby Day is an experience that stays with you
                  for a lifetime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Beyond Churchill Downs */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Events Beyond Churchill Downs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Derby Week extends far beyond the racetrack. Louisville comes alive
            with parties, galas, culinary events, and community celebrations
            that make the entire city part of the festivities.
          </p>

          <div className="space-y-4">
            <div className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Barnstable Brown Gala
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                One of the most prestigious Derby Eve events, the Barnstable
                Brown Gala is a star-studded charity party held at the historic
                Barnstable Brown mansion in Louisville. Celebrities, athletes,
                and socialites gather for an evening of music, dining, and
                fundraising. The gala benefits the Barnstable Brown Diabetes
                Center at the University of Kentucky.
              </p>
            </div>

            <div className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Taste of Derby
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A culinary showcase that brings together top chefs from across
                Louisville and beyond. The Taste of Derby celebrates the
                city&rsquo;s vibrant food scene with tastings, live cooking
                demonstrations, and pairings with bourbon and local beverages.
                It is a must-attend event for food lovers visiting during Derby
                Week.
              </p>
            </div>

            <div className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Thunder Over Louisville
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                While typically held a few weeks before Derby Week, Thunder Over
                Louisville is the traditional kickoff to the Kentucky Derby
                Festival. It features one of the largest annual fireworks
                displays in the country, set along the Ohio River waterfront.
                Hundreds of thousands of spectators line the riverbank for an
                evening of air shows and pyrotechnics that signals the start of
                the Derby season.
              </p>
            </div>
          </div>
        </section>

        {/* Tips for Planning */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Tips for Planning Your Derby Week
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Book Accommodations Early",
                text: "Louisville hotels fill up months in advance for Derby Week, and prices spike significantly. Book your hotel or rental as early as possible, ideally six months or more before the event. Consider staying slightly outside downtown for better rates and availability.",
              },
              {
                title: "Buy Tickets in Advance",
                text: "Tickets for Derby Day and Oaks Day sell out, particularly for reserved seating areas. General admission infield tickets are the most affordable option but still require advance purchase. Check the Churchill Downs website for official ticket sales to avoid third-party markups.",
              },
              {
                title: "Plan Your Transportation",
                text: "Parking near Churchill Downs is extremely limited on Oaks and Derby Day. Rideshare services experience surge pricing and long wait times. Consider the TARC bus shuttle, organized parking lots with shuttle service, or walking from nearby neighborhoods if your accommodations allow it.",
              },
              {
                title: "Attend Multiple Days",
                text: "If your schedule allows, attending two or more days of Derby Week gives you a much richer experience. Oaks Day and Derby Day are the headliners, but Thurby and Dawn at the Downs offer unique experiences that many visitors find even more memorable than the main event.",
              },
              {
                title: "Check the Weather",
                text: "Louisville weather in late April and early May can be unpredictable. Rain is not uncommon, and temperatures can range from cool to warm. Bring layers, pack a rain plan, and wear shoes that can handle wet conditions if the forecast calls for rain.",
              },
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 bg-derby-green text-white text-sm font-bold rounded-full shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-derby-green mb-1">
                    {tip.title}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Derby Week
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="border-b border-gray-200 pb-6 last:border-b-0"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section className="bg-derby-cream border border-derby-gold/20 rounded-xl p-6 md:p-8">
          <h2 className="font-serif text-2xl font-bold text-derby-green mb-4">
            Plan Your Derby Experience
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/attend/tickets"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Get Tickets
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Seating options and pricing for every day of Derby Week.
              </p>
            </Link>
            <Link
              href="/race/kentucky-oaks"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Kentucky Oaks Guide
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Everything about Friday's fillies race and pink theme.
              </p>
            </Link>
            <Link
              href="/attend/what-to-wear"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                What to Wear
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Hats, outfits, and dress code for every Derby Week event.
              </p>
            </Link>
            <Link
              href="/louisville/where-to-stay"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Where to Stay
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Hotels, rentals, and neighborhoods near Churchill Downs.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
