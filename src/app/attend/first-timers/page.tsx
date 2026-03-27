import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title:
    "First Time at the Kentucky Derby | Complete Beginner's Guide (2026)",
  description:
    "First-timer's guide to the Kentucky Derby at Churchill Downs. Day-of timeline, must-do experiences, navigation tips, what to bring, common mistakes, and insider advice for Derby Day beginners.",
  keywords:
    "first time kentucky derby, derby day tips, first derby experience, kentucky derby beginners guide, derby day checklist, churchill downs first visit",
};

const faqItems = [
  {
    question: "What time should I arrive at Churchill Downs for the Kentucky Derby?",
    answer:
      "Gates open at 8:00 AM on Derby Day, and arriving by 10:00 AM is strongly recommended, especially for infield and general admission ticket holders who want good standing spots. If you have reserved seating, arriving by noon gives you time to settle in before the undercard races. The Kentucky Derby race itself typically runs around 6:50 PM, but the entire day features a full card of races starting in the morning.",
  },
  {
    question: "How long does the Kentucky Derby event last?",
    answer:
      "While the Kentucky Derby race itself lasts approximately two minutes, the full Derby Day event at Churchill Downs spans the entire day. Gates open at 8:00 AM and the last race finishes around 7:30 PM. Most attendees spend between six and ten hours at the venue. Plan for a full-day event, not just a single race.",
  },
  {
    question: "Can I bring food and drinks into Churchill Downs?",
    answer:
      "Churchill Downs does not allow outside food or beverages to be brought into the venue on Derby Day. There are numerous food and drink vendors throughout the grandstand, clubhouse, and infield areas offering everything from classic Kentucky fare to gourmet dining options. Prices are typical of major sporting events.",
  },
  {
    question: "What is the bag policy at Churchill Downs on Derby Day?",
    answer:
      "Churchill Downs enforces a clear bag policy on Kentucky Derby Day. Bags must be clear plastic, vinyl, or PVC and must not exceed 12 inches by 6 inches by 12 inches. Small clutch purses no larger than 4.5 inches by 6.5 inches are also permitted regardless of material. Exceptions are made for medically necessary items after inspection at the gate.",
  },
  {
    question: "Do I have to bet on the horses at the Kentucky Derby?",
    answer:
      "Betting is completely optional at the Kentucky Derby. However, placing at least one small wager is one of the most recommended experiences for first-timers. You can bet as little as two dollars on a single race. The betting windows and self-service terminals throughout Churchill Downs have staff who can help you understand the basics of placing a bet.",
  },
];

export default function FirstTimersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Attend", href: "/attend" },
          { name: "First-Timer's Guide", href: "/attend/first-timers" },
        ]}
      />
      <ArticleJsonLd
        title="First Time at the Kentucky Derby: The Complete Beginner's Guide"
        description="Everything first-time Kentucky Derby attendees need to know, from planning months ahead to navigating Churchill Downs on race day. Includes timeline, must-do experiences, and common mistakes to avoid."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="text-white py-20 sm:py-28 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt="Your first Kentucky Derby experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <p className="text-derby-gold font-semibold tracking-widest uppercase text-sm mb-4">
            Your First Derby
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            First-Timer&rsquo;s Guide to the Kentucky Derby
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
            Attending the Kentucky Derby for the first time is an unforgettable
            experience &mdash; if you know how to prepare. This comprehensive
            guide covers everything from your planning timeline to navigating
            Churchill Downs on race day.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Planning Timeline */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Your Derby Planning Timeline
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Kentucky Derby is not a last-minute event. The most prepared
            attendees start planning months in advance. Here is a timeline to
            help you get everything in order.
          </p>

          <div className="space-y-6">
            <div className="bg-derby-cream rounded-xl p-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                Three to Six Months Before
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Buy your tickets early.</strong> Kentucky Derby
                    tickets go on sale months before the race, and popular
                    sections sell out quickly. General admission infield tickets
                    are the most affordable, while reserved grandstand and
                    clubhouse seats offer the best views and comfort. Waiting
                    too long means paying inflated secondary market prices.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Book your accommodations.</strong> Louisville hotels
                    fill up fast for Derby weekend, and prices spike
                    significantly. Downtown Louisville, the Bardstown Road area,
                    and the East Market District (NuLu) are the most popular
                    neighborhoods. Consider vacation rentals for groups.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Plan your transportation.</strong> Driving to
                    Churchill Downs and parking nearby is possible but
                    challenging. Rideshare services surge-price heavily on Derby
                    Day. Many experienced attendees use hotel shuttles, the TARC
                    bus system, or pre-arranged car services.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-derby-cream rounded-xl p-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                Two to Four Weeks Before
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Finalize your outfit.</strong> Choose your clothing,
                    hat, and shoes with your seating section in mind. Break in
                    new shoes by wearing them around the house for several days
                    before the event.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Learn the basics of horse racing betting.</strong>{" "}
                    Understanding terms like win, place, show, exacta, and
                    trifecta will make the betting experience more enjoyable.
                    You do not need to be an expert, but knowing the basics adds
                    to the fun.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Check the weather forecast.</strong> Louisville
                    weather in May ranges from the low 60s to the low 80s, and
                    rain is not uncommon. Have a rain plan that includes a clear
                    poncho and weather-appropriate shoes.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-derby-cream rounded-xl p-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                The Night Before
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Charge your phone fully and bring a portable battery pack.
                    Lay out your entire outfit including hat, shoes, and
                    accessories. Confirm your transportation plan and set an
                    early alarm. Get a good night&rsquo;s sleep &mdash; Derby
                    Day is a marathon, not a sprint.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Derby Day Packing Checklist Visual */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Derby Day Packing Checklist
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pack everything in a clear bag (required by Churchill Downs policy).
            Here is what experienced Derby-goers never leave behind.
          </p>
          <div className="bg-white border-2 border-derby-green/20 rounded-2xl p-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { item: "Clear bag", cat: "Required", color: "bg-red-100 text-red-700" },
                { item: "Tickets / mobile pass", cat: "Required", color: "bg-red-100 text-red-700" },
                { item: "Photo ID", cat: "Required", color: "bg-red-100 text-red-700" },
                { item: "Cash (small bills)", cat: "Essential", color: "bg-derby-gold/20 text-derby-green" },
                { item: "Phone + portable charger", cat: "Essential", color: "bg-derby-gold/20 text-derby-green" },
                { item: "Sunscreen", cat: "Essential", color: "bg-derby-gold/20 text-derby-green" },
                { item: "Sunglasses", cat: "Essential", color: "bg-derby-gold/20 text-derby-green" },
                { item: "Clear poncho (rain plan)", cat: "Smart", color: "bg-blue-50 text-blue-700" },
                { item: "Comfortable shoes", cat: "Smart", color: "bg-blue-50 text-blue-700" },
                { item: "Hat (for sun + style)", cat: "Tradition", color: "bg-green-50 text-green-700" },
                { item: "Racing program / app", cat: "Fun", color: "bg-purple-50 text-purple-700" },
                { item: "Betting budget (cash)", cat: "Fun", color: "bg-purple-50 text-purple-700" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2">
                  <div className="w-5 h-5 border-2 border-derby-green/40 rounded shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{item.item}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${item.color}`}>
                      {item.cat}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting There Early */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Getting to Churchill Downs on Derby Day
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gates open at 8:00 AM on Kentucky Derby Day, and arriving early is
            one of the most important tips for first-timers. By 10:00 AM, the
            best standing spots in the infield are already claimed, and the
            general atmosphere starts to build. If you have reserved seating,
            arriving by noon gives you time to find your seats, explore the
            venue, and settle in before the energy peaks in the afternoon.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Traffic around Churchill Downs becomes gridlocked by late morning.
            Roads leading to the venue are congested, rideshare pickup and
            drop-off points move to designated areas, and walking distances
            from parking lots can be significant. Arriving early avoids the
            worst of the congestion and gives you time to enjoy the full
            experience rather than rushing to arrive before the featured race.
          </p>
        </section>

        {/* Must-Do Experiences */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Five Must-Do Experiences for First-Timers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These are the experiences that define a Kentucky Derby visit. Even
            if you do nothing else, make sure you check these off your list.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                1. Place at Least One Bet
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You do not need to be a horse racing expert to place a bet, and
                even a two-dollar wager makes every race exponentially more
                exciting. Visit a betting window or self-service terminal, pick
                a horse based on name, jockey colors, or a gut feeling, and
                place a simple win bet. The thrill of cheering for your horse
                down the stretch is a core part of the Derby experience.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                2. Drink a Mint Julep
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The mint julep is the official cocktail of the Kentucky Derby,
                and Churchill Downs serves well over 100,000 of them on Derby
                Day. Made with bourbon, fresh mint, sugar, and crushed ice,
                the mint julep is a refreshing Southern classic. Whether or not
                you end up loving the drink, having one is a Derby rite of
                passage. Souvenir cups make a great keepsake.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                3. Sing &ldquo;My Old Kentucky Home&rdquo;
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Just before the Derby race, the entire crowd at Churchill Downs
                joins together to sing &ldquo;My Old Kentucky Home,&rdquo; the
                state song of Kentucky. The band plays, hats wave in the air,
                and the atmosphere is electric with anticipation. It is one of
                the most emotional and memorable moments in all of sports, and
                many attendees say it is the highlight of the day.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                4. Watch the Post Parade
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The post parade is when the Derby horses walk from the paddock
                onto the track and past the grandstand on their way to the
                starting gate. This is your chance to see these magnificent
                animals up close, notice the jockey silks, and feel the energy
                build as the crowd realizes the race is moments away. If you
                have a spot near the rail, the post parade is an unforgettable
                close-up experience.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                5. Explore the Paddock Area
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The paddock is where horses are saddled before each race, and
                it offers some of the best close-up views of the horses and
                trainers. Serious bettors study the horses in the paddock to
                assess their condition and demeanor before placing wagers. Even
                if you are not betting heavily, watching the pre-race rituals in
                the paddock provides insight into the traditions and preparation
                that go into each race.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Tips */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Navigating Churchill Downs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Churchill Downs is a massive venue, and first-timers are often
            surprised by its scale. The facility spans 175 acres and includes
            multiple levels of grandstand seating, the clubhouse, the infield,
            paddock area, dining areas, betting windows, and extensive outdoor
            spaces. Allow yourself time to explore and orient yourself when you
            first arrive.
          </p>

          <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Download the Churchill Downs app</strong> before
                  arriving. It includes a venue map, race schedule, betting
                  information, and real-time updates that make navigation much
                  easier.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Pick a meeting point</strong> with your group in case
                  you get separated. Cell service can be unreliable with over
                  150,000 people at the venue. Choose a landmark like the twin
                  spires, a specific gate, or a particular food stand.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Note that infield and grandstand are separate.</strong>{" "}
                  The infield is accessed through a tunnel under the track, and
                  moving between the infield and grandstand may not be possible
                  with all ticket types. Check your ticket access before planning
                  to move between areas.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Restrooms have long lines,</strong> especially in the
                  afternoon hours. Use the facilities during less popular
                  undercard races to avoid the worst waits. Know where multiple
                  restroom locations are throughout the venue.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Food and Drink */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Food and Drink at Churchill Downs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Churchill Downs offers a wide range of food and beverage options
            that vary by section. No outside food or drinks are permitted, so
            plan to eat and drink inside the venue. Prices are consistent with
            major sporting events, so budget accordingly.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-serif text-base font-bold text-derby-green mb-2">
                Infield Options
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The infield features food trucks, portable stands, and bars
                serving classic fare like hot dogs, burgers, barbecue, and fried
                chicken. Beer, bourbon drinks, and mint juleps are widely
                available. Lines can be long during peak hours, so grab food and
                drinks between races to minimize wait times.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-serif text-base font-bold text-derby-green mb-2">
                Grandstand &amp; Clubhouse
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The grandstand and clubhouse areas offer sit-down restaurants,
                concession stands, and bars with expanded menus including
                Kentucky classics like hot browns, burgoo, and bourbon balls.
                Premium sections include access to exclusive dining rooms with
                gourmet options and full bar service.
              </p>
            </div>
          </div>
        </section>

        {/* What to Bring / Not to Bring */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            What to Bring and What to Leave Behind
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-green-800 mb-3">
                Bring These
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-green-600 flex-shrink-0">&#10003;</span>
                  Sunscreen (apply before arriving)
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-green-600 flex-shrink-0">&#10003;</span>
                  Portable phone charger
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-green-600 flex-shrink-0">&#10003;</span>
                  Cash for betting windows and some vendors
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-green-600 flex-shrink-0">&#10003;</span>
                  Clear bag that meets the size policy
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-green-600 flex-shrink-0">&#10003;</span>
                  Hat pins or clips to secure your hat
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-green-600 flex-shrink-0">&#10003;</span>
                  Sunglasses
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-green-600 flex-shrink-0">&#10003;</span>
                  Clear poncho (in case of rain)
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-red-800 mb-3">
                Leave These Behind
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-red-500 flex-shrink-0">&#10007;</span>
                  Large bags, backpacks, or non-clear purses
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-red-500 flex-shrink-0">&#10007;</span>
                  Outside food or beverages
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-red-500 flex-shrink-0">&#10007;</span>
                  Coolers or lawn chairs
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-red-500 flex-shrink-0">&#10007;</span>
                  Selfie sticks or tripods
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-red-500 flex-shrink-0">&#10007;</span>
                  Weapons of any kind
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-red-500 flex-shrink-0">&#10007;</span>
                  Drones or remote-controlled devices
                </li>
                <li className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-red-500 flex-shrink-0">&#10007;</span>
                  Professional camera equipment with detachable lenses
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Common First-Timer Mistakes to Avoid
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            After talking to thousands of Derby attendees over the years,
            these are the mistakes first-timers regret most.
          </p>

          <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Arriving too late.</strong> Many first-timers plan to
                  arrive an hour or two before the Derby race and miss the
                  full-day experience. The undercard races, people-watching,
                  exploring the venue, and soaking in the atmosphere are all
                  part of what makes the day special.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Not bringing enough cash.</strong> While many vendors
                  accept cards, some food stands, betting windows, and tipping
                  situations work better with cash. Bring more than you think
                  you will need &mdash; ATMs at the venue have long lines and
                  high fees.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Wearing uncomfortable shoes.</strong> This is the
                  single most common regret. You will be on your feet for hours,
                  walking across grass, brick, and concrete. Comfortable,
                  broken-in shoes are non-negotiable.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Overindulging early.</strong> Derby Day is long, and
                  the main race does not happen until late afternoon. Pacing
                  yourself with food and especially alcohol ensures you are
                  alert and comfortable when the big moment arrives. Dehydration
                  in the May heat is a real concern.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Not having a transportation exit plan.</strong> After
                  the Derby ends, 150,000 people try to leave at once. Traffic
                  is gridlocked, rideshare surge pricing is extreme, and taxis
                  are nearly impossible to find. Have a clear plan for getting
                  back to your hotel, and consider staying nearby for a
                  post-Derby dinner to let the crowds thin.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Phone & Camera Etiquette */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Phone and Camera Etiquette
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cell service at Churchill Downs on Derby Day is notoriously
            unreliable due to the sheer number of people. Plan accordingly by
            downloading offline maps, saving your ticket digitally before
            arriving, and communicating with your group via text rather than
            calls when possible.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Personal cameras and smartphones are welcome for photos and video.
            Professional camera equipment with detachable lenses and tripods
            are not permitted. During the races, be mindful of holding your
            phone above your head for extended periods, as it blocks the view
            of people behind you. Capture the moment but also remember to put
            the phone down and experience the atmosphere firsthand &mdash;
            especially during the singing before the Derby race.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            First-Timer Frequently Asked Questions
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
            Ready to Plan Your First Derby?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Now that you have the insider knowledge, explore our guides to
            tickets, seating, fashion, and everything else you need for an
            unforgettable first Kentucky Derby.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/attend/tickets"
              className="inline-block bg-derby-gold text-derby-green-dark font-bold px-8 py-3.5 rounded-lg hover:bg-derby-gold-light transition-colors"
            >
              Get Tickets
            </Link>
            <Link
              href="/attend/seating-guide"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              Seating Guide
            </Link>
            <Link
              href="/attend/what-to-wear"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              What to Wear
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
