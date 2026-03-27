import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Getting to Louisville for the Kentucky Derby | Flights, Driving & Travel Guide",
  description:
    "How to get to Louisville for the Kentucky Derby: flights to SDF airport, driving distances from major cities, Amtrak options, and travel tips for reaching Churchill Downs.",
  keywords: [
    "getting to louisville",
    "louisville airport sdf",
    "flights to louisville derby",
    "driving to louisville",
    "louisville transportation",
    "how to get to kentucky derby",
  ],
  openGraph: {
    title: "Getting to Louisville for the Kentucky Derby",
    description:
      "Travel guide for reaching Louisville: flights to SDF, driving distances from major cities, Amtrak, and arrival tips for Derby week.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What airport do you fly into for the Kentucky Derby?",
    answer:
      "Louisville Muhammad Ali International Airport (SDF) is the primary airport for Kentucky Derby visitors. The airport is located about 15 minutes south of downtown Louisville and approximately 10 minutes from Churchill Downs. SDF is served by major airlines including Delta, American, United, Southwest, Allegiant, and Breeze. During Derby week, airlines often add extra flights to accommodate increased demand, but fares rise significantly. Book flights as early as possible for the best prices.",
  },
  {
    question: "How far is Louisville from major cities?",
    answer:
      "Louisville is centrally located and within driving distance of several major metropolitan areas. Indianapolis is about 115 miles (two hours) north. Cincinnati is 100 miles (one hour 45 minutes) northeast. Nashville is 175 miles (two hours 45 minutes) south. Chicago is 300 miles (four hours 30 minutes) north. St. Louis is 265 miles (four hours) west. Lexington, Kentucky, is 80 miles (one hour 15 minutes) east.",
  },
  {
    question: "When should I arrive in Louisville for the Kentucky Derby?",
    answer:
      "Most Derby visitors arrive on Thursday or Friday of Derby week. Arriving on Thursday gives you a full day to explore Louisville before Kentucky Oaks on Friday and the Kentucky Derby on Saturday. If you want to attend the Oaks race as well, arrive by Thursday evening at the latest. Some visitors arrive mid-week to enjoy distillery tours, restaurant reservations, and Derby Festival events without the weekend crowds.",
  },
];

export default function GettingHerePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Louisville", href: "/louisville" },
          { name: "Getting Here", href: "/louisville/getting-here" },
        ]}
      />
      <ArticleJsonLd
        title="Getting to Louisville for the Kentucky Derby"
        description="Complete travel guide for reaching Louisville for the Kentucky Derby: flights, driving, train, and arrival tips."
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
            <li className="text-derby-green font-medium">Getting Here</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            Getting to Louisville for the Kentucky Derby
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Louisville is well connected by air, road, and rail, and reaching
            the city for the Kentucky Derby is straightforward with some
            advance planning. Here is everything you need to know about
            getting to the Derby City.
          </p>
        </header>

        {/* Map: Airport to Churchill Downs */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Louisville at a Glance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Louisville Muhammad Ali International Airport (SDF) is just seven
            miles south of downtown, and Churchill Downs sits five miles south of
            the city center. The map below shows the key landmarks for Derby
            visitors.
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50400!2d-85.78!3d38.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690b1ab35bd511%3A0xd4e12ae9de1de886!2sLouisville%2C%20KY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Louisville, Kentucky showing airport and Churchill Downs"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-3 text-sm">
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">SDF Airport → Downtown</p>
              <p className="text-gray-600">7 miles · 15 min drive</p>
            </div>
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">Downtown → Churchill Downs</p>
              <p className="text-gray-600">5 miles · 12 min drive</p>
            </div>
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">SDF → Churchill Downs</p>
              <p className="text-gray-600">4 miles · 10 min drive</p>
            </div>
          </div>
        </section>

        {/* Flying */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Flying to Louisville (SDF)
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Louisville Muhammad Ali International Airport (airport code SDF)
              is the primary airport for Kentucky Derby visitors. The airport
              is conveniently located about seven miles south of downtown
              Louisville, making it one of the closest major airports to a
              city center in the United States. A rideshare or taxi from SDF
              to a downtown hotel typically takes 15 to 20 minutes outside of
              rush hour.
            </p>
            <p>
              SDF is served by all major domestic carriers including Delta,
              American Airlines, United, Southwest, Allegiant, and Breeze
              Airways. Nonstop flights are available from most major US cities.
              During Derby week, airlines frequently add additional flights and
              larger aircraft to meet the surge in demand.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
            <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
              Flight Booking Tips
            </h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Book flights three to six months in advance. Derby week fares increase sharply as the date approaches.",
                "Consider flying in mid-week (Wednesday or Thursday) for lower fares than Thursday evening or Friday arrivals.",
                "Check nearby airports: Cincinnati (CVG) is 90 minutes away and may offer lower fares or better availability.",
                "Return flights on Sunday evening and Monday morning after Derby fill up fast. Book early or consider staying an extra day.",
                "Set fare alerts on Google Flights or similar tools to catch price drops.",
              ].map((tip, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Driving */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Driving to Louisville
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Louisville&rsquo;s central location in the eastern United States
              makes it a manageable drive from many major cities. The city sits
              at the crossroads of Interstate 65 (north-south) and Interstate
              64 (east-west), providing easy highway access from all directions.
            </p>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-serif text-derby-green">City</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Distance</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Drive Time</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Route</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {[
                  { city: "Indianapolis, IN", distance: "115 miles", time: "~2 hours", route: "I-65 South" },
                  { city: "Cincinnati, OH", distance: "100 miles", time: "~1h 45m", route: "I-71 South" },
                  { city: "Lexington, KY", distance: "80 miles", time: "~1h 15m", route: "I-64 West" },
                  { city: "Nashville, TN", distance: "175 miles", time: "~2h 45m", route: "I-65 North" },
                  { city: "Chicago, IL", distance: "300 miles", time: "~4h 30m", route: "I-65 South" },
                  { city: "St. Louis, MO", distance: "265 miles", time: "~4 hours", route: "I-64 East" },
                  { city: "Columbus, OH", distance: "210 miles", time: "~3h 15m", route: "I-71 South" },
                  { city: "Atlanta, GA", distance: "420 miles", time: "~6h 15m", route: "I-65 North" },
                ].map((route, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-medium">{route.city}</td>
                    <td className="py-3 pr-4">{route.distance}</td>
                    <td className="py-3 pr-4">{route.time}</td>
                    <td className="py-3 pr-4">{route.route}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Drive times are approximate and based on normal traffic conditions.
            Add extra time during Derby week, especially on Friday and Saturday
            when traffic increases significantly near Louisville.
          </p>
        </section>

        {/* Amtrak */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Train (Amtrak)
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Amtrak does not currently serve Louisville with direct train
              service. The nearest Amtrak stations are in Indianapolis (the
              Cardinal line), Cincinnati, and Lexington. From these stations,
              you would need to arrange a bus, rental car, or rideshare to
              complete the trip to Louisville.
            </p>
            <p>
              For travelers coming from the East Coast or Midwest who prefer
              rail travel, the most practical approach is to take Amtrak to
              Indianapolis or Cincinnati and then drive or take a bus the
              remaining distance to Louisville. Greyhound and regional bus
              services also connect Louisville to nearby cities.
            </p>
          </div>
        </section>

        {/* When to Arrive */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            When to Arrive
          </h2>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            {[
              {
                title: "Wednesday Arrival",
                text: "The most relaxed option. Explore Louisville at your own pace before the crowds peak. Book distillery tours and restaurant reservations for Thursday. Enjoy Louisville like a local before the Derby energy takes over.",
              },
              {
                title: "Thursday Arrival",
                text: "The most common choice for visitors attending both Oaks and Derby. Gives you a full evening to settle in, grab dinner, and start exploring. Friday morning is Kentucky Oaks day at Churchill Downs.",
              },
              {
                title: "Friday Arrival",
                text: "Workable if you are only attending Saturday's Derby. You can attend Oaks if you arrive early enough Friday. Be aware that Friday evening is one of the busiest nights in Louisville's restaurants and bars.",
              },
            ].map((option, i) => (
              <div key={i} className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">{option.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{option.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Getting to Louisville
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
            <Link href="/louisville/getting-around" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Getting Around Louisville</p>
              <p className="text-sm text-gray-500 mt-1">Rideshare, shuttles, and local transportation options.</p>
            </Link>
            <Link href="/louisville/where-to-stay" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Where to Stay</p>
              <p className="text-sm text-gray-500 mt-1">Hotels and accommodations for every budget.</p>
            </Link>
            <Link href="/louisville/neighborhoods" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Louisville Neighborhoods</p>
              <p className="text-sm text-gray-500 mt-1">Explore the city&rsquo;s distinct areas and attractions.</p>
            </Link>
            <Link href="/attend/first-timers" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">First-Timer&rsquo;s Guide</p>
              <p className="text-sm text-gray-500 mt-1">Everything you need for your first Kentucky Derby experience.</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
