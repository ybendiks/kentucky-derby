import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Getting Around Louisville | Derby Week Transportation Guide",
  description:
    "Transportation options in Louisville during Kentucky Derby week: rideshare (Uber/Lyft surge pricing tips), TARC bus, rental cars, walking downtown, and shuttle services to Churchill Downs.",
  keywords: [
    "louisville transportation",
    "getting around louisville",
    "uber lyft derby day",
    "tarc bus louisville",
    "shuttle to churchill downs",
    "parking churchill downs",
    "derby day transportation",
  ],
  openGraph: {
    title: "Getting Around Louisville | Derby Week Transportation",
    description:
      "Navigate Louisville during Derby week: rideshare, TARC bus, shuttles to Churchill Downs, rental cars, and walking options.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "How do you get to Churchill Downs on Derby Day?",
    answer:
      "The most common ways to reach Churchill Downs on Derby Day are rideshare (Uber/Lyft), official shuttle services from downtown hotels, and driving with prepaid parking. Rideshare is convenient but expect significant surge pricing, especially before and after the Derby race. Official shuttles are the most stress-free option and typically cost 20 to 40 dollars round trip. If driving, prepaid parking in the Churchill Downs lots must be purchased in advance and fills up early.",
  },
  {
    question: "How much does Uber or Lyft cost on Derby Day in Louisville?",
    answer:
      "Rideshare pricing on Kentucky Derby Day is subject to extreme surge pricing. A ride that normally costs 10 to 15 dollars from downtown to Churchill Downs can surge to 40 to 80 dollars or more during peak demand, particularly in the hour before the Derby race and immediately after it ends. To minimize costs, travel to the track early in the afternoon before surge kicks in, and plan to stay for the final races rather than leaving right after the Derby.",
  },
  {
    question: "Is downtown Louisville walkable?",
    answer:
      "Yes, downtown Louisville is very walkable. The downtown core, including Whiskey Row, 4th Street Live, Museum Row, and the waterfront, can be covered on foot within a 20-to-30-minute walk. NuLu is a 15-minute walk east of downtown. However, Churchill Downs is about five miles south of downtown and is not walkable. You will need transportation to reach the track on race day.",
  },
];

export default function GettingAroundPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Louisville", href: "/louisville" },
          { name: "Getting Around", href: "/louisville/getting-around" },
        ]}
      />
      <ArticleJsonLd
        title="Getting Around Louisville During Derby Week"
        description="Complete transportation guide for navigating Louisville during Kentucky Derby week."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-derby-green transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/louisville" className="hover:text-derby-green transition-colors">Louisville</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-derby-green font-medium">Getting Around</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            Getting Around Louisville During Derby Week
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Navigating Louisville during the Kentucky Derby requires a plan,
            especially on race day itself. From rideshare surge pricing to
            shuttle services and downtown walking, here is everything you need
            to know about getting from point A to point B.
          </p>
        </header>

        {/* Downtown Louisville Map */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Downtown Louisville Map
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Most Derby visitors stay downtown and travel south to Churchill
            Downs for race day. The map below shows the downtown core where
            the majority of hotels, restaurants, and nightlife are
            concentrated.
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12600!2d-85.765!3d38.255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690b1ab35bd511%3A0xd4e12ae9de1de886!2sDowntown%20Louisville!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of downtown Louisville showing key areas for Derby visitors"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 text-sm">
            <div className="bg-derby-cream rounded-lg p-3">
              <p className="font-semibold text-derby-green">Key Derby Areas</p>
              <ul className="text-gray-600 mt-1 space-y-1">
                <li>• <strong>Whiskey Row</strong> — Main St (distilleries &amp; bourbon bars)</li>
                <li>• <strong>4th Street Live</strong> — Entertainment district</li>
                <li>• <strong>NuLu</strong> — East Market St (restaurants &amp; shops)</li>
              </ul>
            </div>
            <div className="bg-derby-cream rounded-lg p-3">
              <p className="font-semibold text-derby-green">Distance to Churchill Downs</p>
              <ul className="text-gray-600 mt-1 space-y-1">
                <li>• <strong>By car:</strong> 5 miles, 12-15 min (non-Derby day)</li>
                <li>• <strong>Derby Day:</strong> 30-60+ min due to traffic</li>
                <li>• <strong>Shuttle services</strong> available from major hotels</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rideshare */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Rideshare: Uber and Lyft
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Uber and Lyft are the most popular transportation options for
              Derby visitors. Both services operate throughout Louisville and
              are widely available during the week. However, Derby Day itself
              brings extreme surge pricing that can catch visitors off guard.
            </p>
            <p>
              A standard ride from downtown Louisville to Churchill Downs
              normally costs 10 to 15 dollars. On Derby Day, that same ride
              can surge to 40 to 80 dollars or more, particularly in the hours
              before and after the main race. The worst surge typically hits
              between 4 PM and 5 PM (when everyone is heading to the track)
              and between 7 PM and 9 PM (when everyone is leaving).
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
            <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
              Tips to Reduce Rideshare Costs
            </h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Arrive at Churchill Downs early in the afternoon before surge pricing kicks in",
                "Stay for the full card of races rather than leaving immediately after the Derby",
                "Walk several blocks away from the Churchill Downs designated pickup zone to find lower prices",
                "Split rides with friends or other Derby-goers heading the same direction",
                "Consider the official shuttle services as a fixed-cost alternative",
              ].map((tip, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Shuttles */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Shuttle Services to Churchill Downs
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Official shuttle services run from downtown Louisville hotels and
              designated pickup points to Churchill Downs on both Oaks Day
              (Friday) and Derby Day (Saturday). Shuttles typically cost 20 to
              40 dollars for a round-trip ticket and eliminate the stress of
              parking, navigation, and rideshare surge pricing.
            </p>
            <p>
              Shuttle tickets should be purchased in advance online, as they
              often sell out. The shuttles run on a regular schedule throughout
              the afternoon, with increased frequency in the hours before post
              time for the Kentucky Derby. Return shuttles operate for
              approximately two hours after the final race.
            </p>
            <p>
              Check with your hotel directly, as many downtown properties
              organize their own shuttle service for guests. Some premium
              ticket packages at Churchill Downs also include shuttle
              transportation.
            </p>
          </div>
        </section>

        {/* TARC Bus */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            TARC Public Transit
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              TARC (Transit Authority of River City) operates Louisville&rsquo;s
              public bus system. Several bus routes connect downtown Louisville
              to the Churchill Downs area, and TARC typically adds special
              service on Derby Day with express routes from downtown to the
              track.
            </p>
            <p>
              Standard TARC fare is affordable, making it the budget-friendly
              option for reaching Churchill Downs. The trade-off is that bus
              schedules can be less frequent and travel times longer compared
              to rideshare or shuttles. Check the TARC website for Derby Day
              special service schedules and routes closer to the event.
            </p>
          </div>
        </section>

        {/* Rental Cars and Parking */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Rental Cars and Parking
          </h2>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <div className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Rental Cars
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                A rental car is useful for exploring neighborhoods beyond
                downtown and for day trips to Bardstown or the Kentucky Bourbon
                Trail. However, on Derby Day itself, a car can be more of a
                burden than a benefit due to traffic congestion and expensive
                parking near Churchill Downs. Reserve your rental well in
                advance, as Derby week availability is limited.
              </p>
            </div>
            <div className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Parking at Churchill Downs
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Official Churchill Downs parking lots require prepaid passes
                that sell out quickly. Lots range from general parking (farther
                from the gates) to premium reserved spots. Neighborhood lots
                and private residences near the track also sell parking spaces,
                typically for 20 to 60 dollars. Arrive early on race day, as
                traffic around Churchill Downs builds rapidly after noon.
              </p>
            </div>
          </div>
        </section>

        {/* Walking Downtown */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Walking Downtown
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Downtown Louisville is compact and highly walkable. The core
              area from the riverfront south to Broadway, and from 1st Street
              west to 9th Street, contains most of the major attractions,
              hotels, and restaurants within a comfortable walking radius.
            </p>
            <p>
              Whiskey Row distilleries are all along Main Street. The Big Four
              Bridge pedestrian crossing to Indiana is a scenic walk from
              Waterfront Park. NuLu is a 15-minute walk east along Market
              Street. During Derby week, the downtown streets are energetic
              and safe for pedestrians, with increased police presence and
              event security throughout the area.
            </p>
            <p>
              Churchill Downs, however, is approximately five miles south of
              downtown and is not within walking distance. Plan motorized
              transportation for race day.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Louisville Transportation
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="bg-derby-cream border border-derby-gold/20 rounded-xl p-6 md:p-8">
          <h2 className="font-serif text-2xl font-bold text-derby-green mb-4">
            Plan Your Louisville Trip
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/louisville/getting-here" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Getting to Louisville</p>
              <p className="text-sm text-gray-500 mt-1">Flights, driving, and travel options to reach the city.</p>
            </Link>
            <Link href="/louisville/where-to-stay" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Where to Stay</p>
              <p className="text-sm text-gray-500 mt-1">Hotels and accommodations by area and budget.</p>
            </Link>
            <Link href="/louisville/neighborhoods" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Louisville Neighborhoods</p>
              <p className="text-sm text-gray-500 mt-1">Explore the distinct areas of the city.</p>
            </Link>
            <Link href="/attend/first-timers" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">First-Timer&rsquo;s Guide</p>
              <p className="text-sm text-gray-500 mt-1">Everything you need for your first Kentucky Derby.</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
