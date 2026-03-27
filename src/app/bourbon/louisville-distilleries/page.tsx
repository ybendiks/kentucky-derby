import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Louisville Distilleries | Best Bourbon Distillery Tours & Tastings",
  description:
    "The best distilleries to visit in Louisville: Angel's Envy, Evan Williams Bourbon Experience, Old Forester, Rabbit Hole, Michter's Fort Nelson, and Kentucky Peerless. Tour info, tastings, and what makes each unique.",
  keywords: [
    "louisville distilleries",
    "angels envy distillery",
    "evan williams bourbon experience",
    "old forester distillery",
    "rabbit hole distillery",
    "michters fort nelson",
    "kentucky peerless distillery",
  ],
  openGraph: {
    title: "Louisville Distilleries | Bourbon Tours & Tastings Guide",
    description:
      "Visit Louisville's best bourbon distilleries during Derby week. Tour details, tasting info, and what makes each distillery unique.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "How many distilleries are in Louisville?",
    answer:
      "Louisville is home to more than a dozen distilleries, with the highest concentration along Main Street's historic Whiskey Row. Major distilleries open for tours include Angel's Envy, Evan Williams Bourbon Experience, Old Forester, Rabbit Hole, Michter's Fort Nelson, and Kentucky Peerless. Several craft distilleries and newer operations round out the city's bourbon scene, making Louisville one of the top bourbon destinations in the world.",
  },
  {
    question: "Do you need reservations for Louisville distillery tours?",
    answer:
      "Reservations are strongly recommended for Louisville distillery tours, especially during Kentucky Derby week when demand is at its peak. Most distilleries allow online booking through their websites. Walk-ins are sometimes available on weekday afternoons, but popular weekend time slots sell out weeks in advance. Book your tours as soon as your travel dates are confirmed.",
  },
  {
    question: "How much do Louisville distillery tours cost?",
    answer:
      "Louisville distillery tour prices typically range from 15 to 30 dollars for a standard guided tour with tasting. Premium experiences, single-barrel selections, and extended tastings can run 40 to 75 dollars or more. Some distilleries offer free self-guided areas where you can browse exhibits and a gift shop without purchasing a tour ticket. Check each distillery's website for current pricing and tour options.",
  },
];

const distilleries = [
  {
    name: "Angel\u2019s Envy",
    location: "500 E Main St, Louisville",
    description:
      "Founded by the late master distiller Lincoln Henderson, Angel\u2019s Envy is known for its port barrel-finished bourbon. The distillery occupies a beautifully restored 1890s building on Main Street, combining industrial architecture with modern design. Tours walk you through the production process from grain to barrel, with special attention to the port wine barrel finishing process that gives Angel\u2019s Envy its distinctive character. The tasting room offers flights of their full lineup, including limited-edition releases available only at the distillery.",
    highlights: "Port barrel finishing process, architectural restoration, distillery-exclusive releases",
  },
  {
    name: "Evan Williams Bourbon Experience",
    location: "528 W Main St, Louisville",
    description:
      "The Evan Williams Bourbon Experience is both a distillery and an interactive museum celebrating the legacy of Evan Williams, Kentucky\u2019s first commercial distiller, who opened his distillery on this same stretch of Main Street in 1783. The tour combines artisanal bourbon making in a small-batch distillery with historical exhibits about Louisville\u2019s bourbon heritage. The experience concludes with a guided tasting in a speakeasy-themed room.",
    highlights: "Historical exhibits, artisanal small-batch production, speakeasy tasting room",
  },
  {
    name: "Old Forester Distilling Co.",
    location: "119 W Main St, Louisville",
    description:
      "Old Forester holds a unique place in bourbon history as the first bourbon sold exclusively in sealed glass bottles, a practice started by founder George Garvin Brown in 1870. The distillery on Whiskey Row features a full production facility where you can see bourbon made from grain to barrel. Old Forester is also the official bourbon of the Kentucky Derby, making a visit here particularly fitting during Derby week.",
    highlights: "Full grain-to-barrel production, Kentucky Derby\u2019s official bourbon, historic Whiskey Row location",
  },
  {
    name: "Rabbit Hole Distillery",
    location: "711 E Jefferson St, Louisville",
    description:
      "Rabbit Hole stands out among Louisville distilleries for its striking modern architecture, designed by renowned firm De Leon & Primmer. The three-story glass-and-steel facility allows visitors to see the distillation process from every level. Founded by Kaveh Zamanian, Rabbit Hole produces a range of distinctive bourbons and ryes using unique grain bills. The Overlook lounge on the top floor offers craft cocktails and panoramic views.",
    highlights: "Award-winning architecture, full-view production, Overlook cocktail lounge",
  },
  {
    name: "Michter\u2019s Fort Nelson Distillery",
    location: "801 W Main St, Louisville",
    description:
      "Michter\u2019s Fort Nelson Distillery occupies a meticulously restored 19th-century building at the corner of Main Street and 8th Street. The distillery features a gleaming copper pot still and a bar program led by a world-class cocktail team. Tours showcase Michter\u2019s commitment to quality at every stage, from the toasted and charred barrels to the small-batch distillation process. The bar on the second floor is one of the best cocktail destinations in Louisville.",
    highlights: "World-class bar program, restored 19th-century building, copper pot still tours",
  },
  {
    name: "Kentucky Peerless Distilling Co.",
    location: "120 N 10th St, Louisville",
    description:
      "Kentucky Peerless is a revived pre-Prohibition brand, re-established in 2015 by the Taylor family. The distillery uses a sweet mash process (rather than the more common sour mash), producing bourbon and rye whiskey with a distinctive sweet character. Peerless is one of the few Kentucky distilleries that distills, ages, bottles, and sells its product all under one roof. Tours are intimate and give a detailed look at small-batch production.",
    highlights: "Sweet mash process, grain-to-glass production, revived pre-Prohibition brand",
  },
];

export default function LouisvilleDistilleriesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Bourbon", href: "/bourbon" },
          { name: "Louisville Distilleries", href: "/bourbon/louisville-distilleries" },
        ]}
      />
      <ArticleJsonLd
        title="Louisville Distilleries: Best Bourbon Tours and Tastings"
        description="Guide to the best distilleries to visit in Louisville, Kentucky, with tour details and tasting information."
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
            <li className="text-derby-green font-medium">Louisville Distilleries</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-white py-20 sm:py-28 relative overflow-hidden -mx-4 -mt-12 mb-12">
          <Image
            src="https://images.unsplash.com/l1kZD3_dySY?w=1920&q=80"
            alt="Bourbon barrels aging at Kentucky Peerless Distilling Co in Louisville"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Louisville Distilleries: Best Bourbon Tours and Tastings
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              Louisville has transformed into one of the world&rsquo;s top bourbon
              destinations, with a remarkable concentration of distilleries in the
              heart of downtown. Whether you are visiting for Derby week or making
              a dedicated bourbon pilgrimage, these are the distilleries that
              deserve your time.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-12">
          <div className="bg-derby-cream border border-derby-gold/30 rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Distilleries</p>
                <p className="text-lg font-semibold text-derby-green">12+</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">On Whiskey Row</p>
                <p className="text-lg font-semibold text-derby-green">6</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Tour Cost Range</p>
                <p className="text-lg font-semibold text-derby-green">$15 - $75</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Book Ahead</p>
                <p className="text-lg font-semibold text-derby-green">Required</p>
              </div>
            </div>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/l1kZD3_dySY?w=800&q=75"
          alt="Whiskey and rye barrels aging at Kentucky Peerless Distilling Co in Louisville"
          caption="Bourbon barrels aging at Kentucky Peerless Distilling Co on Louisville's Whiskey Row"
          aspectRatio="wide"
          priority
        />

        {/* Distillery Listings */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Top Louisville Distilleries to Visit
          </h2>
          <div className="space-y-8">
            {distilleries.map((distillery, i) => (
              <div
                key={i}
                className="bg-white border-2 border-derby-green/20 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-derby-green/5 px-6 py-4 border-b border-derby-green/10">
                  <h3 className="font-serif text-2xl font-bold text-derby-green">
                    {distillery.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{distillery.location}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {distillery.description}
                  </p>
                  <p className="text-sm text-derby-gold font-medium">
                    <strong>Highlights:</strong> {distillery.highlights}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1619616755641-5d27d6fe4244?w=800&q=75"
          alt="Mint julep cocktail alongside a bottle of Kentucky bourbon"
          caption="Louisville's distilleries produce the bourbon that makes the perfect mint julep"
          aspectRatio="landscape"
        />

        {/* Planning Tips */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Planning Your Distillery Visits
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Book Early for Derby Week",
                text: "Distillery tours sell out quickly during Kentucky Derby week. Book your preferred time slots at least two to four weeks in advance. Weekday mornings tend to be less crowded than weekends.",
              },
              {
                title: "Pace Yourself",
                text: "Plan to visit two or three distilleries in a day at most. Each tour with tasting takes 60 to 90 minutes, and you want to appreciate each experience without rushing. Leave time for lunch between stops.",
              },
              {
                title: "Arrange Transportation",
                text: "If you plan to taste at multiple distilleries, arrange a designated driver, use rideshare, or book a guided tour with transportation included. Most downtown distilleries are within walking distance of each other.",
              },
              {
                title: "Take Advantage of Gift Shops",
                text: "Distillery gift shops often carry bottles and expressions that are only available at the source. Limited editions, single-barrel selections, and distillery-exclusive bottlings make excellent souvenirs and gifts.",
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
            Frequently Asked Questions About Louisville Distilleries
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
            Explore More Bourbon in Louisville
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/bourbon/whiskey-row"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Whiskey Row
              </p>
              <p className="text-sm text-gray-500 mt-1">
                History and guide to Louisville&rsquo;s iconic Main Street bourbon district.
              </p>
            </Link>
            <Link
              href="/bourbon/urban-bourbon-trail"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Urban Bourbon Trail
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Louisville&rsquo;s collection of bourbon bars and the passport program.
              </p>
            </Link>
            <Link
              href="/bourbon/tours"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Bourbon Tours
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Guided and self-guided tour options in and around Louisville.
              </p>
            </Link>
            <Link
              href="/culture/mint-julep"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Mint Julep Recipe
              </p>
              <p className="text-sm text-gray-500 mt-1">
                How to make the classic Kentucky Derby cocktail with the right bourbon.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
