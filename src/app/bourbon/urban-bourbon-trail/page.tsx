import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Urban Bourbon Trail Louisville | Passport Program & Top Stops",
  description:
    "Complete guide to Louisville's Urban Bourbon Trail: how the passport program works, top stops including Proof on Main, Down One Bourbon Bar, Silver Dollar, and Haymarket Whiskey Bar, and tips for completing the trail.",
  keywords: [
    "urban bourbon trail",
    "urban bourbon trail louisville",
    "bourbon passport louisville",
    "proof on main",
    "down one bourbon bar",
    "silver dollar louisville",
    "haymarket whiskey bar",
  ],
  openGraph: {
    title: "Urban Bourbon Trail Louisville | Complete Guide",
    description:
      "Navigate Louisville's Urban Bourbon Trail: the passport program, top bourbon bars, and how to complete the trail during Derby week.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What is the Urban Bourbon Trail?",
    answer:
      "The Urban Bourbon Trail is Louisville's curated collection of bourbon-centric bars and restaurants, each offering extensive bourbon menus with a minimum of 50 different bourbon selections. Created by Louisville Tourism, the trail includes a passport program where visitors collect stamps at participating locations to earn prizes. It's a self-guided experience that lets you explore Louisville's bourbon culture beyond the distilleries.",
  },
  {
    question: "How do you complete the Urban Bourbon Trail?",
    answer:
      "To complete the Urban Bourbon Trail, pick up a physical passport at any participating location or at the Louisville Visitor Center, or download the digital passport. Visit participating bars and restaurants, enjoy a bourbon, and get your passport stamped at each stop. You need to collect stamps from a specified number of locations to earn a completion prize, which is typically a branded t-shirt. The required number of stamps varies, so check the current program rules.",
  },
  {
    question: "How many stops are on the Urban Bourbon Trail?",
    answer:
      "The Urban Bourbon Trail features more than 40 participating bars, restaurants, and hotels across Louisville. Each location has been vetted to ensure it offers at least 50 bourbons and a knowledgeable staff. You don't need to visit every stop to complete the trail. The program sets a threshold number of stamps needed for the completion prize, making it achievable during a long weekend visit.",
  },
];

const topStops = [
  {
    name: "Proof on Main",
    location: "21c Museum Hotel, 702 W Main St",
    description:
      "Located inside the 21c Museum Hotel, Proof on Main is one of Louisville's most acclaimed restaurants and bourbon bars. The bourbon list is extensive, and the cocktail program features creative bourbon-forward drinks alongside a farm-to-table menu. The restaurant doubles as an art gallery, with rotating contemporary art exhibits throughout the space. Reservations are recommended, especially during Derby week.",
  },
  {
    name: "Down One Bourbon Bar & Restaurant",
    location: "321 W Main St",
    description:
      "Down One occupies a cellar space below Main Street, creating an intimate, speakeasy-like atmosphere. The bourbon selection is massive, with hundreds of bottles lining the walls, and the bartenders are exceptionally knowledgeable. The food menu features elevated Southern fare designed to pair with bourbon. The underground setting and dim lighting make this one of the most atmospheric bourbon bars in the city.",
  },
  {
    name: "Repeal Oak-Fired Steakhouse",
    location: "101 W Main St",
    description:
      "Named for the repeal of Prohibition, this upscale steakhouse combines premium oak-fired steaks with an extensive bourbon program. The bar offers rare and allocated pours alongside familiar favorites, and the knowledgeable staff can guide you to a bourbon that matches your steak selection. The elegant atmosphere makes it a popular choice for special Derby week dinners.",
  },
  {
    name: "Silver Dollar",
    location: "1761 Frankfort Ave",
    description:
      "The Silver Dollar brings honky-tonk charm to Louisville's Clifton neighborhood with a whiskey-forward bar program and Southern comfort food. The bourbon selection focuses on Kentucky and American whiskey, and the food menu features dishes like fried chicken, smoked meats, and biscuits. Live music, a lively atmosphere, and a covered patio make this a local favorite that visitors quickly adopt.",
  },
  {
    name: "Haymarket Whiskey Bar",
    location: "331 E Market St, NuLu",
    description:
      "Tucked into the NuLu neighborhood, Haymarket Whiskey Bar is a relaxed, no-pretense spot with one of the deepest whiskey selections in Louisville. The bar stocks hundreds of American whiskeys, including many hard-to-find and allocated bottles available by the pour. The vibe is casual and welcoming, making it a great place to explore bourbons you cannot find at home while chatting with knowledgeable bartenders.",
  },
];

export default function UrbanBourbonTrailPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Bourbon", href: "/bourbon" },
          { name: "Urban Bourbon Trail", href: "/bourbon/urban-bourbon-trail" },
        ]}
      />
      <ArticleJsonLd
        title="Urban Bourbon Trail Louisville: Passport Program and Top Stops"
        description="Complete guide to Louisville's Urban Bourbon Trail, including the passport program, top bourbon bars, and tips for completing the trail."
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
              <Link href="/bourbon" className="hover:text-derby-green transition-colors">
                Bourbon
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-derby-green font-medium">Urban Bourbon Trail</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            The Urban Bourbon Trail: Louisville&rsquo;s Bourbon Bar Passport
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Louisville&rsquo;s Urban Bourbon Trail connects more than 40 of the
            city&rsquo;s best bourbon bars and restaurants into a single
            passport-driven experience. Grab a passport, collect stamps, and
            explore the city one pour at a time.
          </p>
        </header>

        {/* What Is It */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What Is the Urban Bourbon Trail?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Created by Louisville Tourism, the Urban Bourbon Trail is a
              curated collection of bars, restaurants, and hotels across
              Louisville, each committed to offering an exceptional bourbon
              experience. Every participating establishment stocks a minimum of
              50 different bourbons and trains its staff to guide guests through
              selections.
            </p>
            <p>
              The trail is not a structured, guided experience. It is a
              self-paced exploration of Louisville&rsquo;s bourbon culture
              through its best drinking and dining establishments. You set your
              own pace, choose your own stops, and visit on your own schedule.
              The passport program adds a gamification element that encourages
              visitors to explore beyond the obvious choices.
            </p>
          </div>
        </section>

        {/* Passport Program */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How the Passport Program Works
          </h2>
          <ol className="space-y-4 mt-6">
            {[
              {
                step: "Get Your Passport",
                detail: "Pick up a physical passport booklet at any participating Urban Bourbon Trail location, at the Louisville Visitor Center downtown, or download the digital version. The passport is free.",
              },
              {
                step: "Visit Participating Locations",
                detail: "Browse the list of 40-plus participating bars and restaurants. There's no required order. Choose stops based on your interests, location, or the bourbon selections that catch your eye.",
              },
              {
                step: "Enjoy a Bourbon and Get Stamped",
                detail: "Order a bourbon at each stop and ask your server or bartender to stamp your passport. Each location has its own unique stamp. One stamp per visit, per location.",
              },
              {
                step: "Earn Your Reward",
                detail: "Once you've collected the required number of stamps, redeem your completed passport at the Louisville Visitor Center to claim your completion prize. The required number of stamps and the prize vary by year.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 bg-derby-green text-white text-sm font-bold rounded-full shrink-0 mr-4 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-derby-green mb-1">
                    {item.step}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1611864072666-06ddb3070b19?w=800&q=75"
          alt="Warm amber-lit bourbon bar with whiskey bottles displayed on shelves"
          caption="Each Urban Bourbon Trail stop offers at least 50 bourbons to explore"
          aspectRatio="landscape"
        />

        {/* Top Stops */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Top Stops on the Urban Bourbon Trail
          </h2>
          <div className="space-y-6">
            {topStops.map((stop, i) => (
              <div
                key={i}
                className="border-l-4 border-derby-gold pl-6"
              >
                <h3 className="font-serif text-xl font-bold text-derby-green mb-1">
                  {stop.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{stop.location}</p>
                <p className="text-gray-700 leading-relaxed">
                  {stop.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/l1kZD3_dySY?w=800&q=75"
          alt="Bourbon barrels aging at Kentucky Peerless Distilling Co in Louisville"
          caption="Louisville's bourbon bars source from Kentucky's finest distilleries, many just steps away on Whiskey Row"
          aspectRatio="wide"
        />

        {/* Tips for Completing */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Tips for Completing the Trail
          </h2>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {[
              {
                title: "Start During Derby Week",
                text: "Derby week gives you multiple days in Louisville, and many trail stops host special events and bourbon features during the celebration. It's the ideal time to make progress on your passport.",
              },
              {
                title: "Cluster Your Visits by Neighborhood",
                text: "Group stops by area: downtown and Main Street, NuLu, Frankfort Avenue, and Bardstown Road. This minimizes travel time and lets you explore each neighborhood's character.",
              },
              {
                title: "Mix Dining and Drinking",
                text: "Many trail stops are full-service restaurants, not just bars. Plan meals at trail locations to earn stamps while enjoying great food. This also helps pace your bourbon consumption over the day.",
              },
              {
                title: "Ask Bartenders for Recommendations",
                text: "The bartenders at trail locations are bourbon enthusiasts. Tell them what you usually drink and ask for something new. This is the best way to discover bourbons you would never try on your own.",
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About the Urban Bourbon Trail
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

        {/* Internal Links */}
        <section className="bg-derby-cream border border-derby-gold/20 rounded-xl p-6 md:p-8">
          <h2 className="font-serif text-2xl font-bold text-derby-green mb-4">
            More Bourbon in Louisville
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/bourbon/louisville-distilleries"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Louisville Distilleries
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Tour and tasting guides for every major Louisville distillery.
              </p>
            </Link>
            <Link
              href="/bourbon/whiskey-row"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Whiskey Row
              </p>
              <p className="text-sm text-gray-500 mt-1">
                The historic Main Street district at the heart of Louisville&rsquo;s bourbon scene.
              </p>
            </Link>
            <Link
              href="/louisville/nightlife"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Louisville Nightlife
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Bars, live music, and late-night spots for Derby week.
              </p>
            </Link>
            <Link
              href="/louisville/neighborhoods"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Louisville Neighborhoods
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Explore the distinct areas that make Louisville a great walking city.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
