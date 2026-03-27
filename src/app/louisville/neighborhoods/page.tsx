import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Louisville Neighborhoods Guide | Downtown, NuLu, Highlands & More",
  description:
    "Explore Louisville's best neighborhoods: Downtown Bourbon District, NuLu, the Highlands, Germantown, Butchertown, Old Louisville, and Portland. What to see and do in each area during Derby week.",
  keywords: [
    "louisville neighborhoods",
    "nulu louisville",
    "highlands bardstown road",
    "germantown louisville",
    "old louisville",
    "butchertown louisville",
    "downtown louisville",
  ],
  openGraph: {
    title: "Louisville Neighborhoods Guide | Complete Area Overview",
    description:
      "Discover Louisville's distinct neighborhoods: where to eat, drink, shop, and explore during your Kentucky Derby visit.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What is the best neighborhood to visit in Louisville?",
    answer:
      "For Kentucky Derby visitors, downtown Louisville and NuLu are the two best neighborhoods to explore. Downtown puts you on Whiskey Row with its distilleries, has the best hotel selection, and offers easy access to 4th Street Live entertainment. NuLu (New Louisville) on East Market Street is the city's trendiest district with independent restaurants, art galleries, and boutique shops. Both are walkable and within a short rideshare of Churchill Downs.",
  },
  {
    question: "Is Louisville a walkable city?",
    answer:
      "Louisville is walkable within its individual neighborhoods but not between all of them. Downtown, NuLu, and the Whiskey Row area are all highly walkable, and you can stroll between them in 15 to 20 minutes. The Highlands along Bardstown Road is also a great walking neighborhood. However, getting from downtown to neighborhoods like Germantown, Butchertown, or Old Louisville requires a short rideshare or drive. On Derby Day, Churchill Downs is not walkable from downtown.",
  },
  {
    question: "Where do locals go in Louisville?",
    answer:
      "Louisville locals frequent the Highlands along Bardstown Road for its eclectic mix of shops, bars, and restaurants. Germantown has become a hotspot for hip restaurants and craft beverage spots. Butchertown draws a creative crowd with its art studios and food producers. On weekends, locals often head to the NuLu Farmers Market and the independent shops along East Market Street. For live music, locals hit Headliners Music Hall, Zanzabar, and the Mercury Ballroom.",
  },
];

const neighborhoods = [
  {
    name: "Downtown (Bourbon District)",
    description:
      "Louisville's downtown core is where bourbon history, modern hospitality, and Derby culture converge. Main Street's Whiskey Row houses the city's top distilleries, including Old Forester, Evan Williams, Angel's Envy, and Michter's. Hotels, restaurants, and 4th Street Live entertainment district provide a full range of options within walking distance. The Louisville Slugger Museum, Muhammad Ali Center, and the waterfront Big Four Bridge add cultural depth beyond bourbon.",
    bestFor: "Hotels, distilleries, nightlife, first-time visitors",
  },
  {
    name: "NuLu / East Market District",
    description:
      "NuLu, short for New Louisville, is the city's creative heart. East Market Street is lined with chef-driven restaurants, craft cocktail bars, independent boutiques, and contemporary art galleries. The neighborhood has a vibrant, local energy that feels distinct from the tourist-oriented downtown. Saturday mornings bring the NuLu Farmers Market. Haymarket Whiskey Bar, one of the city's best bourbon bars, anchors the neighborhood's drink scene.",
    bestFor: "Trendy dining, independent shopping, art galleries, local vibe",
  },
  {
    name: "The Highlands / Bardstown Road",
    description:
      "Bardstown Road is Louisville's most eclectic strip, running through the Highlands neighborhood with an independent spirit that resists chain stores. Vintage shops, record stores, ethnic restaurants, dive bars, and local coffee shops line the road for several miles. The neighborhood is where Louisville's bohemian, artistic, and young professional communities overlap. It is the antidote to corporate homogeneity and a favorite of locals.",
    bestFor: "Local shops, eclectic dining, bar hopping, people watching",
  },
  {
    name: "Germantown",
    description:
      "Once a working-class German immigrant neighborhood, Germantown has transformed into one of Louisville's hippest districts while retaining its historic shotgun houses and tree-lined streets. The restaurant scene here rivals any neighborhood in the city, with acclaimed spots serving everything from wood-fired pizza to creative Southern cuisine. The Germantown Mill Lofts and small businesses give the area an artisanal, neighborhood feel.",
    bestFor: "Hip restaurants, historic architecture, local craft beverages",
  },
  {
    name: "Butchertown",
    description:
      "Named for the meat-packing industry that once dominated the area, Butchertown has reinvented itself as a food and art destination. Copper and Kings brandy distillery operates here, alongside food producers, art galleries, and restaurants. The neighborhood sits just east of NuLu and is easily walkable from East Market Street. Thomas Edison's childhood home is located here for history buffs.",
    bestFor: "Food scene, art galleries, craft spirits, Edison history",
  },
  {
    name: "Old Louisville",
    description:
      "Old Louisville contains the largest collection of Victorian-era homes in the United States. The grand mansions, tree-lined boulevards, and wrought-iron fences create a stunning architectural landscape. Walking tours of the neighborhood are popular, and St. James Court is the centerpiece with its fountain and surrounding estates. The neighborhood hosts an annual art fair that draws thousands.",
    bestFor: "Victorian architecture, walking tours, historic homes",
  },
  {
    name: "Portland",
    description:
      "Louisville's Portland neighborhood is an emerging arts district on the city's west side. Long an underinvested area, Portland is experiencing a creative renaissance led by artists, makers, and community organizations. Galleries, studios, and murals are appearing alongside new cafes and gathering spaces. Visitors looking for an off-the-beaten-path experience will find authentic Louisville culture here.",
    bestFor: "Emerging arts scene, murals, authentic local culture",
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Louisville", href: "/louisville" },
          { name: "Neighborhoods", href: "/louisville/neighborhoods" },
        ]}
      />
      <ArticleJsonLd
        title="Louisville Neighborhoods Guide"
        description="Explore Louisville's best neighborhoods during your Kentucky Derby visit: downtown, NuLu, the Highlands, Germantown, and more."
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
            <li className="text-derby-green font-medium">Neighborhoods</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            Louisville Neighborhoods Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Louisville is a city of distinct neighborhoods, each with its own
            personality, dining scene, and attractions. Understanding the
            geography helps you plan your Derby week beyond Churchill Downs
            and discover what makes Louisville one of America&rsquo;s most
            underrated cities.
          </p>
        </header>

        <ContentImage
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=75"
          alt="Louisville city street view with historic buildings and urban charm"
          caption="Louisville's neighborhoods each offer a distinct character and atmosphere"
          aspectRatio="wide"
          priority
        />

        {/* Neighborhood Listings */}
        <section className="mb-12">
          <div className="space-y-8">
            {neighborhoods.map((n, i) => (
              <div
                key={i}
                className="bg-white border-2 border-derby-green/20 rounded-2xl overflow-hidden shadow-md"
              >
                <div className="bg-derby-green/5 px-6 py-4 border-b border-derby-green/10">
                  <h2 className="font-serif text-2xl font-bold text-derby-green">
                    {n.name}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {n.description}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-derby-gold">Best for: </span>
                    <span className="text-gray-600">{n.bestFor}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1628559799795-1e8cb0b87bc7?w=800&q=75"
          alt="Louisville bridge illuminated at night over the Ohio River"
          caption="The Big Four Bridge connects Louisville's neighborhoods to Indiana and lights up at night"
          aspectRatio="landscape"
        />

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Louisville Neighborhoods
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
            <Link href="/louisville/where-to-stay" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Where to Stay</p>
              <p className="text-sm text-gray-500 mt-1">Hotels and accommodations by area and budget.</p>
            </Link>
            <Link href="/louisville/nightlife" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Louisville Nightlife</p>
              <p className="text-sm text-gray-500 mt-1">Bars, live music, and entertainment for Derby week.</p>
            </Link>
            <Link href="/louisville/restaurants" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Louisville Restaurants</p>
              <p className="text-sm text-gray-500 mt-1">Where to eat across Louisville&rsquo;s best neighborhoods.</p>
            </Link>
            <Link href="/louisville/getting-around" className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all">
              <p className="font-serif font-bold text-derby-green">Getting Around Louisville</p>
              <p className="text-sm text-gray-500 mt-1">Transportation options for navigating between neighborhoods.</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
