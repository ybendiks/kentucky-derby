import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Where to Stay for the Kentucky Derby | Louisville Hotels & Lodging Guide",
  description:
    "Best hotels and accommodations for the Kentucky Derby in Louisville. Downtown luxury, boutique hotels, mid-range options, budget tips, and neighborhood-by-neighborhood lodging guide.",
  keywords: [
    "where to stay kentucky derby",
    "louisville hotels derby weekend",
    "brown hotel louisville",
    "omni louisville hotel",
    "hotels near churchill downs",
    "derby weekend accommodations",
  ],
  openGraph: {
    title: "Where to Stay for the Kentucky Derby | Louisville Lodging Guide",
    description:
      "Find the best Louisville hotels and accommodations for Derby weekend: luxury, boutique, mid-range, and budget options by neighborhood.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "How far in advance should I book a hotel for the Kentucky Derby?",
    answer:
      "You should book your Kentucky Derby hotel at least three to six months in advance, and earlier if possible. Downtown Louisville hotels and properties near Churchill Downs often sell out by January or February for Derby weekend. Prices increase dramatically as the event approaches, and last-minute availability is extremely limited. If you can't find availability downtown, look at hotels near the airport or across the river in Jeffersonville, Indiana.",
  },
  {
    question: "What is the best area to stay in Louisville for the Derby?",
    answer:
      "Downtown Louisville is the best area for most Derby visitors. It puts you within walking distance of bourbon distilleries, restaurants, nightlife, and the cultural attractions. The NuLu district is another excellent choice for its trendy restaurants and galleries. Staying near Churchill Downs is convenient on race day but offers fewer dining and nightlife options. The airport area provides budget-friendly rates and is only 15 minutes from both downtown and the track.",
  },
  {
    question: "How much do Louisville hotels cost during Derby weekend?",
    answer:
      "Louisville hotel prices during Kentucky Derby weekend are significantly higher than normal. Downtown luxury hotels typically range from 400 to 800 dollars or more per night. Mid-range hotels run 200 to 400 dollars per night. Budget hotels near the airport or in outlying areas start around 150 to 250 dollars per night. Many hotels enforce minimum stay requirements of two to three nights during Derby weekend. Airbnb and vacation rentals are alternatives but also command premium pricing.",
  },
];

export default function WhereToStayPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Louisville", href: "/louisville" },
          { name: "Where to Stay", href: "/louisville/where-to-stay" },
        ]}
      />
      <ArticleJsonLd
        title="Where to Stay for the Kentucky Derby"
        description="Complete lodging guide for the Kentucky Derby in Louisville, covering downtown, NuLu, near Churchill Downs, and budget options."
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
              <Link href="/" className="hover:text-derby-green transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/louisville" className="hover:text-derby-green transition-colors">
                Louisville
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-derby-green font-medium">Where to Stay</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            Where to Stay for the Kentucky Derby
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Louisville offers accommodations for every budget and style, but
            Derby weekend is the city&rsquo;s busiest time of year. Book early,
            know your neighborhoods, and choose the location that matches your
            Derby experience. Here is everything you need to know.
          </p>
        </header>

        {/* Hotel Areas Map */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Louisville Hotel Areas Map
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Most Derby visitors choose to stay downtown or near Churchill Downs.
            The map below shows Louisville&rsquo;s key lodging areas. Downtown
            offers the most dining and nightlife options, while hotels near the
            track minimize Derby Day commute time.
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25200!2d-85.765!3d38.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690b1ab35bd511%3A0xd4e12ae9de1de886!2sLouisville%2C%20KY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Louisville hotel areas for Kentucky Derby visitors"
            />
          </div>
        </section>

        {/* By Area */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Lodging by Area
          </h2>
          <div className="space-y-6 mt-6">
            {[
              {
                area: "Downtown Louisville",
                description: "The most popular area for Derby visitors. Walking distance to Whiskey Row distilleries, restaurants, 4th Street Live entertainment, and the waterfront. The highest concentration of luxury and boutique hotels. Best for visitors who want a full Louisville experience beyond just the race.",
                pros: "Walkable, nightlife, dining, distilleries",
                cons: "Highest prices, books up fastest",
              },
              {
                area: "NuLu / East Market District",
                description: "Louisville's trendiest neighborhood, just east of downtown. Independent boutiques, art galleries, and some of the city's best restaurants line East Market Street. A short rideshare to both downtown and Churchill Downs. Great for visitors who want a more local, less touristy feel.",
                pros: "Trendy dining, galleries, local vibe",
                cons: "Fewer hotel options, slightly farther from track",
              },
              {
                area: "Near Churchill Downs",
                description: "Hotels along Central Avenue, near the University of Louisville, and in the Iroquois neighborhood are closest to the track. Ideal if race day convenience is your top priority. The area has fewer restaurants and nightlife options compared to downtown.",
                pros: "Closest to Churchill Downs, easier race day logistics",
                cons: "Limited dining and nightlife, less walkable",
              },
              {
                area: "Airport Area (SDF)",
                description: "Hotels near Louisville Muhammad Ali International Airport offer the best value during Derby weekend. The airport is about 15 minutes from both downtown and Churchill Downs. Major chain hotels cluster along airport access roads with reliable shuttle service.",
                pros: "Best prices, easy airport access, chain hotel reliability",
                cons: "Requires car or rideshare for everything, no walkability",
              },
            ].map((loc, i) => (
              <div key={i} className="bg-white border-2 border-derby-green/20 rounded-2xl overflow-hidden shadow-md">
                <div className="bg-derby-green/5 px-6 py-4 border-b border-derby-green/10">
                  <h3 className="font-serif text-2xl font-bold text-derby-green">
                    {loc.area}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">{loc.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="font-medium text-derby-green">Pros</p>
                      <p className="text-gray-600 mt-1">{loc.pros}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="font-medium text-red-700">Cons</p>
                      <p className="text-gray-600 mt-1">{loc.cons}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Luxury Hotels */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Luxury Hotels
          </h2>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            {[
              {
                name: "Omni Louisville Hotel",
                note: "The city's premier full-service hotel with a rooftop pool, multiple restaurants, and a bourbon bar. Connected to the Kentucky International Convention Center. Central downtown location.",
              },
              {
                name: "The Brown Hotel",
                note: "Louisville's most historic hotel, operating since 1923. Home of the original Hot Brown sandwich. Old-world elegance with modern amenities. A Derby tradition in itself.",
              },
              {
                name: "Galt House Hotel",
                note: "Louisville's only waterfront hotel, with panoramic Ohio River views. Two towers with over 1,300 rooms. Multiple restaurants and bars on-site. The city's largest hotel.",
              },
            ].map((hotel, i) => (
              <div key={i} className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {hotel.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{hotel.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Boutique Hotels */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Boutique Hotels
          </h2>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            {[
              {
                name: "Hotel Distil",
                note: "Part of the Autograph Collection, located on Whiskey Row in a beautifully restored building. Bourbon-themed decor, excellent bar program, and walking distance to every downtown distillery.",
              },
              {
                name: "21c Museum Hotel",
                note: "A contemporary art museum and boutique hotel in one. Rotating art installations throughout the property. Home to Proof on Main restaurant. A unique Louisville experience.",
              },
              {
                name: "The Grady Hotel",
                note: "An intimate boutique property in NuLu with a rooftop bar offering skyline views. Modern design, local art, and a prime location for NuLu dining and shopping.",
              },
            ].map((hotel, i) => (
              <div key={i} className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {hotel.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{hotel.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Budget Tips */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Budget Tips for Derby Weekend
          </h2>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {[
              {
                title: "Consider Airbnb and Vacation Rentals",
                text: "Private homes and apartments in neighborhoods like Germantown, the Highlands, and Old Louisville can offer more space and better value than hotels, especially for groups. Book early, as Derby-week rentals command premium rates too.",
              },
              {
                title: "Stay Outside Downtown",
                text: "Hotels near the airport, in Jeffersonville (Indiana, just across the river), or along the I-65 corridor south of the city offer rates 30 to 50 percent lower than downtown. Budget for rideshare costs to offset the savings.",
              },
              {
                title: "Book as Early as Possible",
                text: "The single biggest factor in Derby weekend hotel cost is timing. Hotels that sell for 200 dollars in January may list at 400 or more by April. Set a calendar reminder for fall to book your room for the following May.",
              },
              {
                title: "Check Minimum Stay Requirements",
                text: "Many Louisville hotels enforce two or three-night minimum stays during Derby weekend. Factor this into your budget. If you only need one night, airport-area hotels and vacation rentals may have more flexibility.",
              },
            ].map((tip, i) => (
              <div key={i} className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{tip.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Derby Accommodations
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
            Plan Your Louisville Visit
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/louisville/neighborhoods" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Louisville Neighborhoods</p>
              <p className="text-sm text-gray-500 mt-1">Explore each neighborhood&rsquo;s character and attractions.</p>
            </Link>
            <Link href="/louisville/getting-here" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Getting to Louisville</p>
              <p className="text-sm text-gray-500 mt-1">Flights, driving distances, and travel options.</p>
            </Link>
            <Link href="/louisville/getting-around" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Getting Around Louisville</p>
              <p className="text-sm text-gray-500 mt-1">Transportation options during Derby week.</p>
            </Link>
            <Link href="/louisville/nightlife" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Louisville Nightlife</p>
              <p className="text-sm text-gray-500 mt-1">Bars, live music, and after-dark entertainment.</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
