import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Louisville Nightlife | Best Bars, Live Music & Bourbon Lounges for Derby Week",
  description:
    "Louisville's best nightlife for Derby week: bourbon bars, live music venues, 4th Street Live, craft cocktail bars, late-night eats, and special Derby week events.",
  keywords: [
    "louisville nightlife",
    "louisville bourbon bars",
    "louisville live music",
    "4th street live louisville",
    "derby week nightlife",
    "mercury ballroom louisville",
    "headliners music hall",
  ],
  openGraph: {
    title: "Louisville Nightlife | Derby Week Guide",
    description:
      "Bourbon bars, live music, cocktail lounges, and late-night eats: everything you need for Derby week nightlife in Louisville.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What is Louisville nightlife like during Derby week?",
    answer:
      "Louisville nightlife during Derby week is significantly more energetic than a typical weekend. Bars and restaurants extend their hours, live music venues book bigger acts, and many establishments host special Derby-themed events and parties. Downtown and the NuLu district are the most active areas. Expect crowds, higher prices, and cover charges at popular venues. Make dinner reservations well in advance and arrive at bars early to secure a spot.",
  },
  {
    question: "What are the best bourbon bars in Louisville?",
    answer:
      "Louisville's top bourbon bars include Down One Bourbon Bar on Main Street (underground speakeasy atmosphere with hundreds of bottles), Silver Dollar on Frankfort Avenue (honky-tonk charm with whiskey-forward cocktails), Haymarket Whiskey Bar in NuLu (deep whiskey selection in a casual setting), Proof on Main at the 21c Museum Hotel (upscale bourbon and cocktails with contemporary art), and Michter's Fort Nelson bar (world-class cocktails above the distillery).",
  },
  {
    question: "Where is the best live music in Louisville?",
    answer:
      "Louisville's live music scene centers on several key venues. Mercury Ballroom on 4th Street hosts national touring acts in an intimate standing-room setting. Headliners Music Hall on Baxter Avenue is a beloved mid-size venue for indie, rock, and Americana. Zanzabar on South Preston features eclectic bookings from hip-hop to bluegrass. For smaller shows, check Kaiju and the Whirling Tiger. During Derby week, many venues host special events and after-parties.",
  },
];

export default function NightlifePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Louisville", href: "/louisville" },
          { name: "Nightlife", href: "/louisville/nightlife" },
        ]}
      />
      <ArticleJsonLd
        title="Louisville Nightlife Guide for Derby Week"
        description="Complete guide to Louisville nightlife during Kentucky Derby week: bourbon bars, live music, cocktail lounges, and late-night eats."
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
            <li className="text-derby-green font-medium">Nightlife</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            Louisville Nightlife: Derby Week After Dark
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Louisville&rsquo;s nightlife punches well above its weight, and
            during Derby week the energy reaches its peak. From world-class
            bourbon bars to legendary live music venues, the city comes alive
            after sundown with something for every taste.
          </p>
        </header>

        {/* Bourbon Bars */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Bourbon Bars
          </h2>
          <div className="space-y-6 mt-6">
            {[
              {
                name: "Down One Bourbon Bar & Restaurant",
                location: "321 W Main St",
                description: "An underground bourbon sanctuary below Main Street with hundreds of bottles lining the walls. The speakeasy atmosphere, dim lighting, and knowledgeable bartenders create one of the most immersive bourbon experiences in the city. The food menu pairs elevated Southern dishes with the extensive whiskey selection.",
              },
              {
                name: "Silver Dollar",
                location: "1761 Frankfort Ave",
                description: "Honky-tonk energy meets serious whiskey in the Clifton neighborhood. The bourbon selection focuses on Kentucky and American whiskey, while the kitchen serves Southern comfort food that draws crowds on its own. Live music, a lively covered patio, and a welcoming vibe make this a local favorite.",
              },
              {
                name: "Haymarket Whiskey Bar",
                location: "331 E Market St, NuLu",
                description: "A relaxed, no-pretense whiskey bar in NuLu with one of the deepest selections in the city. Hundreds of American whiskeys line the shelves, including hard-to-find and allocated bottles. The bartenders are passionate and happy to guide you to something special.",
              },
            ].map((bar, i) => (
              <div key={i} className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-1">{bar.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{bar.location}</p>
                <p className="text-gray-700 leading-relaxed">{bar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1611864072666-06ddb3070b19?w=800&q=75"
          alt="Warm amber-lit bourbon bar with rows of whiskey bottles on shelves"
          caption="Louisville's bourbon bars come alive during Derby week with special tastings and events"
          aspectRatio="wide"
          priority
        />

        {/* Live Music */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Live Music Venues
          </h2>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            {[
              {
                name: "Mercury Ballroom",
                note: "Located on 4th Street, this intimate standing-room venue hosts national touring acts. Capacity around 900. Excellent sound system and sightlines. During Derby week, expect bigger bookings and special events.",
              },
              {
                name: "Headliners Music Hall",
                note: "A beloved mid-size venue on Baxter Avenue known for indie rock, Americana, and eclectic bookings. The room holds about 1,000 and maintains an intimate feel. Louisville's favorite venue for discovering new music.",
              },
              {
                name: "Zanzabar",
                note: "An eclectic venue on South Preston Street hosting everything from hip-hop to bluegrass to DJ nights. The diverse booking policy and neighborhood bar atmosphere make it uniquely Louisville. Pizza and bar food available.",
              },
            ].map((venue, i) => (
              <div key={i} className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">{venue.name}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{venue.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4th Street Live */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            4th Street Live! Entertainment District
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              4th Street Live is Louisville&rsquo;s downtown entertainment
              district, an open-air complex of bars, restaurants, and event
              spaces between Muhammad Ali Boulevard and Liberty Street. The
              district draws the largest crowds during Derby week, with live
              music stages, DJ sets, and themed events running throughout the
              celebration.
            </p>
            <p>
              The venues within 4th Street Live range from sports bars to
              country-themed honky-tonks to craft cocktail spots. The atmosphere
              is festive and high-energy, especially on Thursday and Friday
              nights leading up to Derby Day. Cover charges and drink prices
              increase during Derby week, and lines can form at popular
              venues after 9 PM.
            </p>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1628559799795-1e8cb0b87bc7?w=800&q=75"
          alt="Louisville bridge lit up at night with colorful reflections on the Ohio River"
          caption="Louisville's skyline sets the stage for an evening out during Derby week"
          aspectRatio="landscape"
        />

        {/* Craft Cocktail Bars */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Craft Cocktail Bars
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Louisville&rsquo;s cocktail scene extends well beyond bourbon
              neat. The city has cultivated a strong craft cocktail culture,
              with bartenders drawing on the local bourbon heritage while
              incorporating modern techniques and seasonal ingredients.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {[
              {
                name: "Michter\u2019s Fort Nelson Bar",
                note: "Upstairs from the distillery, this bar features a world-class cocktail program with drinks that showcase Michter\u2019s spirits alongside classic and modern cocktails. Reservations recommended.",
              },
              {
                name: "Proof on Main",
                note: "Inside the 21c Museum Hotel, the bar serves creative bourbon cocktails amid rotating contemporary art. The atmosphere is sophisticated without being stuffy.",
              },
              {
                name: "Hell or High Water",
                note: "A speakeasy-inspired bar with creative cocktails and a focus on presentation. Small, intimate space that rewards early arrivals. Look for the unmarked entrance.",
              },
              {
                name: "Rabbit Hole Overlook",
                note: "The lounge atop the Rabbit Hole Distillery offers craft cocktails featuring their bourbon and rye, with panoramic views of the Louisville skyline.",
              },
            ].map((bar, i) => (
              <div key={i} className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">{bar.name}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{bar.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Late Night Eats */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Late-Night Eats
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              After a night of bourbon and live music, Louisville offers solid
              late-night dining options. Downtown and the Highlands are the
              best areas for food after 10 PM. Pizza, tacos, and diner fare
              are the late-night staples, with several spots serving until
              1 AM or later on weekends.
            </p>
            <p>
              During Derby week, many restaurants extend their kitchen hours to
              accommodate the increased crowds. Check individual restaurant
              hours closer to your visit, as Derby week schedules often differ
              from regular operations.
            </p>
          </div>
        </section>

        {/* Derby Week Events */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Derby Week Nightlife Events
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Derby week transforms Louisville&rsquo;s nightlife calendar.
              Throughout the week leading up to the race, bars and venues
              host special events including bourbon tastings, live music
              showcases, celebrity DJ sets, themed parties, and after-parties
              following each day&rsquo;s racing at Churchill Downs.
            </p>
            <p>
              The biggest nights are typically Thursday (Thunder Over
              Louisville fireworks afterparties in late April, which kicks off
              Derby Festival season) and Friday (Kentucky Oaks after-parties).
              Saturday night after the Derby itself features celebrations
              throughout downtown and beyond. Many events require advance
              tickets, so check local event listings as Derby week approaches.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Louisville Nightlife
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
            Plan Your Louisville Evenings
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/bourbon/urban-bourbon-trail" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Urban Bourbon Trail</p>
              <p className="text-sm text-gray-500 mt-1">The passport program connecting Louisville&rsquo;s best bourbon bars.</p>
            </Link>
            <Link href="/louisville/neighborhoods" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Louisville Neighborhoods</p>
              <p className="text-sm text-gray-500 mt-1">Find the best area for your evening out.</p>
            </Link>
            <Link href="/louisville/where-to-stay" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Where to Stay</p>
              <p className="text-sm text-gray-500 mt-1">Hotels and accommodations near the nightlife action.</p>
            </Link>
            <Link href="/louisville/getting-around" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Getting Around</p>
              <p className="text-sm text-gray-500 mt-1">Rideshare tips and safe transportation options.</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
