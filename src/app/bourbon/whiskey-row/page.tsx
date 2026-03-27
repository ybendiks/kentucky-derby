import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Whiskey Row Louisville | Historic Main Street Bourbon District Guide",
  description:
    "Explore Louisville's historic Whiskey Row on Main Street. Distilleries, bourbon bars, restaurants, history of the warehouse district, and a walking guide to this revitalized bourbon destination.",
  keywords: [
    "whiskey row louisville",
    "main street louisville bourbon",
    "whiskey row distilleries",
    "whiskey row history",
    "louisville bourbon district",
  ],
  openGraph: {
    title: "Whiskey Row Louisville | Historic Bourbon District",
    description:
      "Walk Louisville's historic Whiskey Row: distilleries, bourbon bars, restaurants, and the story of Main Street's bourbon heritage.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What is Whiskey Row in Louisville?",
    answer:
      "Whiskey Row is the stretch of Main Street in downtown Louisville, Kentucky, that was historically the center of the American bourbon trade. In the late 1800s and early 1900s, this district housed dozens of bourbon warehouses, brokerages, and distilleries. After decades of decline, the area has been revitalized and now features working distilleries, bourbon bars, restaurants, and shops, making it one of Louisville's top attractions.",
  },
  {
    question: "Can you walk Whiskey Row in Louisville?",
    answer:
      "Yes, Whiskey Row is highly walkable. The main concentration of distilleries, bars, and restaurants spans roughly six blocks along Main Street between 1st Street and 9th Street. All major distilleries on the Row are within a 15-minute walk of each other. The flat terrain and wide sidewalks make it comfortable for visitors of all ages. Plan two to four hours to explore the highlights at a leisurely pace.",
  },
  {
    question: "Is Whiskey Row free to visit?",
    answer:
      "Walking along Whiskey Row and browsing the shops and restaurants is completely free. However, distillery tours require tickets that typically range from 15 to 30 dollars per person. Many distilleries have free areas including lobbies, gift shops, and exhibit spaces that you can explore without purchasing a tour. Dining and drinks at the bars and restaurants along the Row are pay-as-you-go.",
  },
];

export default function WhiskeyRowPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Bourbon", href: "/bourbon" },
          { name: "Whiskey Row", href: "/bourbon/whiskey-row" },
        ]}
      />
      <ArticleJsonLd
        title="Whiskey Row Louisville: Historic Main Street Bourbon District"
        description="Guide to Louisville's historic Whiskey Row on Main Street, including distilleries, bars, restaurants, history, and a walking guide."
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
            <li className="text-derby-green font-medium">Whiskey Row</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            Whiskey Row: Louisville&rsquo;s Historic Bourbon District
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Main Street in downtown Louisville was once the epicenter of the
            American bourbon trade. Today, Whiskey Row has been reborn as a
            vibrant bourbon destination where working distilleries, acclaimed
            restaurants, and historic architecture create one of the most
            compelling walks in any American city.
          </p>
        </header>

        {/* History */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The History of Whiskey Row
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Louisville&rsquo;s Main Street earned the name Whiskey Row in the
              mid-1800s when the bourbon industry was booming and the Ohio River
              made Louisville the natural shipping hub for Kentucky whiskey.
              Bourbon brokers, warehouses, and distilleries lined Main Street
              in cast-iron-front buildings that became architectural icons of
              the city. At its peak, Whiskey Row handled the majority of the
              world&rsquo;s bourbon supply.
            </p>
            <p>
              Prohibition devastated the district in 1920. Warehouses were
              emptied, businesses shuttered, and the once-thriving block fell
              into decades of neglect. Several fires damaged or destroyed
              historic buildings, and by the late 20th century, much of
              Whiskey Row stood empty or underused.
            </p>
            <p>
              The revitalization began in the 2010s when developers and
              distillers saw an opportunity to restore the historic buildings
              and bring bourbon back to its spiritual home. Old Forester led the
              charge by opening a full-production distillery in a restored
              Whiskey Row building. Others followed, and today the district is
              a thriving blend of history, bourbon, and modern hospitality.
            </p>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1611864072666-06ddb3070b19?w=800&q=75"
          alt="Warm amber-lit bourbon bar with rows of whiskey bottles on shelves"
          caption="Louisville's Whiskey Row is home to some of the finest bourbon bars in the country"
          aspectRatio="wide"
          priority
        />

        {/* Distilleries on the Row */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Distilleries on Whiskey Row
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Whiskey Row is home to several of Louisville&rsquo;s most
              prominent distilleries, all within easy walking distance of each
              other along Main Street.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {[
              {
                name: "Old Forester Distilling Co.",
                address: "119 W Main St",
                note: "The first bourbon sold exclusively in sealed bottles. Full grain-to-barrel production facility. The official bourbon of the Kentucky Derby.",
              },
              {
                name: "Evan Williams Bourbon Experience",
                address: "528 W Main St",
                note: "Interactive museum and artisanal distillery honoring Kentucky's first commercial distiller, who operated on this same street in 1783.",
              },
              {
                name: "Angel\u2019s Envy",
                address: "500 E Main St",
                note: "Known for port barrel-finished bourbon. Beautiful restored 1890s building with a modern tasting room and distillery-exclusive releases.",
              },
              {
                name: "Michter\u2019s Fort Nelson",
                address: "801 W Main St",
                note: "Meticulously restored 19th-century building. World-class cocktail bar on the second floor. Copper pot still tours.",
              },
              {
                name: "Kentucky Peerless",
                address: "120 N 10th St",
                note: "Revived pre-Prohibition brand using sweet mash process. One of the few Kentucky distilleries that does everything grain-to-glass under one roof.",
              },
              {
                name: "Rabbit Hole",
                address: "711 E Jefferson St",
                note: "Striking modern architecture with a three-story glass facility. Overlook cocktail lounge with panoramic views. Unique grain bills.",
              },
            ].map((d, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                  {d.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{d.address}</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {d.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Restaurants and Bars */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Restaurants and Bars on Whiskey Row
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Beyond the distilleries, Whiskey Row has become one of
              Louisville&rsquo;s top dining and nightlife destinations. The
              historic buildings now house restaurants, bourbon bars, and
              cocktail lounges that complement the distillery experiences.
            </p>
          </div>
          <div className="space-y-6 mt-6">
            {[
              {
                name: "Repeal Oak-Fired Steakhouse",
                description: "Upscale steakhouse with an extensive bourbon program. Named for the repeal of Prohibition. Oak-fired steaks paired with rare pours.",
              },
              {
                name: "Down One Bourbon Bar & Restaurant",
                description: "Underground speakeasy-style bourbon bar with hundreds of bottles and elevated Southern food. One of the most atmospheric spots on the Row.",
              },
              {
                name: "Proof on Main",
                description: "Located in the 21c Museum Hotel, this restaurant combines a world-class bourbon list with contemporary art and farm-to-table dining.",
              },
              {
                name: "Doc Crow\u2019s Southern Smokehouse & Raw Bar",
                description: "Casual spot known for smoked meats, oysters, and an impressive bourbon collection. Great for lunch during a distillery walk.",
              },
            ].map((spot, i) => (
              <div key={i} className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  {spot.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {spot.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1619616755641-5d27d6fe4244?w=800&q=75"
          alt="Mint julep cocktail next to a bourbon bottle on a bar"
          caption="A mint julep crafted from Kentucky bourbon — the perfect way to cap a Whiskey Row tour"
          aspectRatio="landscape"
        />

        {/* Whiskey Row Map */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Whiskey Row Map
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Whiskey Row runs along Main Street in downtown Louisville. The
            interactive map below shows the stretch between 1st Street and 9th
            Street where all the major distilleries, bars, and restaurants are
            located.
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151!2d-85.762!3d38.257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886972977e3c4c2f%3A0x7ac4d4db3ad6c3e!2sWhiskey%20Row%2C%20Louisville%2C%20KY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Whiskey Row on Main Street in downtown Louisville"
            />
          </div>
        </section>

        {/* Walking Guide */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Walking Guide to Whiskey Row
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The best way to experience Whiskey Row is on foot. The district
              is flat, the sidewalks are wide, and the buildings themselves are
              part of the attraction. Here is a suggested route for a half-day
              visit.
            </p>
          </div>
          <ol className="space-y-4 mt-6">
            {[
              {
                step: "Start at Old Forester (119 W Main St)",
                detail: "Begin with a morning tour of Louisville's most historically significant distillery. The grain-to-barrel production tour takes about an hour.",
              },
              {
                step: "Walk east to Evan Williams (528 W Main St)",
                detail: "The interactive museum and artisanal distillery combine bourbon education with tasting. Allow 60 to 90 minutes.",
              },
              {
                step: "Lunch at Doc Crow\u2019s or Down One",
                detail: "Refuel with smoked meats or Southern fare before your afternoon stops. Both are on or just off Main Street.",
              },
              {
                step: "Visit Angel\u2019s Envy (500 E Main St)",
                detail: "The afternoon tour showcases the port barrel finishing process in a beautifully restored building. Don't miss the distillery-exclusive releases in the gift shop.",
              },
              {
                step: "End at Michter\u2019s Fort Nelson (801 W Main St)",
                detail: "Cap the day with a tour of the copper pot still distillery, then head upstairs to the bar for a craft cocktail as the sun goes down.",
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

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Whiskey Row
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
              href="/bourbon/louisville-distilleries"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Louisville Distilleries
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Detailed profiles and tour info for every major Louisville distillery.
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
                The passport program connecting Louisville&rsquo;s best bourbon bars.
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
                Guided and self-guided options for exploring Kentucky bourbon country.
              </p>
            </Link>
            <Link
              href="/louisville/restaurants"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Louisville Restaurants
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Where to eat in Louisville during Derby week.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
