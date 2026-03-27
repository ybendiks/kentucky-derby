import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Kentucky Bourbon Trail Guide 2026 | Distillery Map, Tips & Itinerary",
  description:
    "Plan your Kentucky Bourbon Trail trip with our complete 2026 guide. 18+ distilleries, passport program details, Louisville starting points, route maps, tasting tips, and day-by-day itinerary planning.",
  keywords: [
    "kentucky bourbon trail",
    "bourbon trail guide",
    "kentucky bourbon trail map",
    "bourbon trail distilleries",
    "kentucky bourbon trail passport",
    "bourbon trail louisville",
    "bourbon distillery tours kentucky",
    "bourbon trail itinerary",
  ],
  openGraph: {
    title: "Kentucky Bourbon Trail Guide 2026 | Complete Distillery Tour Planner",
    description:
      "Everything you need to plan the perfect Kentucky Bourbon Trail experience. 18+ distilleries, passport program, tasting tips, and multi-day itinerary options.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "How long does it take to complete the Kentucky Bourbon Trail?",
    answer:
      "Most visitors need three to five days to visit all 18-plus member distilleries on the official Kentucky Bourbon Trail. If you focus on the Louisville-area distilleries and a few nearby stops like Maker's Mark and Woodford Reserve, a long weekend of two to three days is enough for a satisfying trip. Each distillery tour typically lasts 60 to 90 minutes, and you can realistically visit two or three distilleries per day while still enjoying the experience.",
  },
  {
    question: "Is the Kentucky Bourbon Trail free?",
    answer:
      "The Kentucky Bourbon Trail passport itself is free and can be picked up at the Frazier History Museum in Louisville or at any participating distillery. However, individual distillery tours and tastings are not free. Most tours cost between $15 and $30 per person, with some premium experiences running $50 or more. Some distilleries offer free self-guided grounds tours but charge for guided tours and tastings.",
  },
  {
    question: "Do you need reservations for the Kentucky Bourbon Trail?",
    answer:
      "Yes, reservations are strongly recommended and required at many distilleries, especially during peak seasons like Derby week in May, summer months, and fall foliage season in October. Popular distilleries such as Buffalo Trace, Maker's Mark, and Woodford Reserve can sell out days or weeks in advance. Book online through each distillery's website as soon as you have your travel dates.",
  },
  {
    question: "Can you drive the Kentucky Bourbon Trail yourself?",
    answer:
      "You can drive the Kentucky Bourbon Trail yourself, but you must plan for a designated driver since you will be sampling bourbon at each stop. Many visitors travel in groups so one person can stay sober each day, rotating the role. Alternatively, guided tour companies based in Louisville and Lexington handle all the driving for you, picking you up at your hotel and managing the logistics while you focus on tasting. This is the safest and most relaxing way to experience the trail.",
  },
];

export default function TrailGuidePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Bourbon", href: "/bourbon" },
          { name: "Trail Guide", href: "/bourbon/trail-guide" },
        ]}
      />
      <ArticleJsonLd
        title="Kentucky Bourbon Trail Guide 2026"
        description="Complete guide to planning your Kentucky Bourbon Trail experience, including distillery stops, passport program, route planning, and insider tasting tips."
        datePublished="2025-03-15"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="text-white py-16 sm:py-20 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1608543131872-5023af151686?w=1920&q=80"
          alt="Bourbon barrels in a Kentucky distillery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-derby-gold transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/bourbon" className="hover:text-derby-gold transition-colors">
                  Bourbon
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-derby-gold">Trail Guide</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-gold mb-4 leading-tight">
            Kentucky Bourbon Trail Guide: Plan Your 2026 Distillery Tour
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
            The Kentucky Bourbon Trail is the definitive pilgrimage for whiskey
            lovers, winding through the rolling hills and historic distilleries
            of the Bluegrass State. With 18-plus member distilleries, a free
            passport program, and Louisville as your home base, this is
            everything you need to plan an unforgettable bourbon trail trip.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* Quick Facts Box */}
        <div className="bg-derby-cream border border-derby-gold/30 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Distilleries</p>
              <p className="text-lg font-semibold text-derby-green">18+ stops</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Tour Cost</p>
              <p className="text-lg font-semibold text-derby-green">$15 &ndash; $30</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Ideal Duration</p>
              <p className="text-lg font-semibold text-derby-green">3 &ndash; 5 days</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Passport</p>
              <p className="text-lg font-semibold text-derby-green">Free</p>
            </div>
          </div>
        </div>

        {/* What Is the Kentucky Bourbon Trail */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What Is the Kentucky Bourbon Trail?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The Kentucky Bourbon Trail is an official tourism program created
              and managed by the Kentucky Distillers&rsquo; Association (KDA).
              Launched in 1999, the trail connects visitors with more than 18
              member distilleries scattered across the state, from downtown
              Louisville to the countryside of central Kentucky. These are not
              small craft operations &mdash; the trail features the largest and
              most storied bourbon producers in the world, including names like
              Maker&rsquo;s Mark, Woodford Reserve, Jim Beam, Wild Turkey,
              Buffalo Trace, and Four Roses.
            </p>
            <p>
              The KDA designed the trail as a way to showcase Kentucky&rsquo;s
              bourbon heritage, and it has grown into one of the most popular
              tourism experiences in the state. Over 2 million visitors travel
              the trail each year, and that number continues to climb.
              Kentucky produces roughly 95 percent of the world&rsquo;s bourbon
              supply, and the trail lets you see firsthand how the limestone
              water, charred oak barrels, and generations of craft come together
              in every bottle.
            </p>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1608543131872-5023af151686?w=800&q=75"
          alt="Rows of bourbon barrels aging in a Kentucky rickhouse"
          caption="Bourbon barrels aging in a traditional Kentucky rickhouse"
          aspectRatio="wide"
          priority
        />

        {/* Passport Program */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Bourbon Trail Passport Program
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The passport is the heart of the Kentucky Bourbon Trail
              experience. Pick up your free passport booklet at the Frazier
              History Museum in downtown Louisville, which serves as the
              official Welcome Center and starting point for the trail. You can
              also get a passport at any participating distillery or download
              the Kentucky Bourbon Trail mobile app, which tracks your visits
              digitally.
            </p>
            <p>
              At each distillery you visit, you collect a stamp in your
              passport. Visit all the member distilleries and you earn a
              reward &mdash; a commemorative T-shirt from the KDA and the
              bragging rights that come with completing the full trail. Many
              bourbon enthusiasts treat this as a bucket-list challenge,
              returning year after year to visit new additions to the trail.
            </p>
            <p>
              The Frazier History Museum itself is worth a visit even if you do
              not collect a single stamp. Its bourbon exhibits trace the history
              of Kentucky whiskey from the 1700s to the modern bourbon boom,
              and the museum bar offers tastings from dozens of distilleries
              all in one location.
            </p>
          </div>
        </section>

        {/* Louisville Distilleries */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Louisville: Your Bourbon Trail Starting Point
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Louisville is the natural home base for any bourbon trail trip.
              The city is the gateway to bourbon country and has more trail
              distilleries within its limits than any other location. Start at
              the Frazier History Museum on Main Street to grab your passport,
              then walk to several distilleries on historic Whiskey Row without
              ever moving your car.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Angel\u2019s Envy",
                detail:
                  "Located on Main Street in a beautifully restored facility. Known for port barrel-finished bourbon. Tours run frequently and include a tasting of their core lineup.",
              },
              {
                name: "Evan Williams Bourbon Experience",
                detail:
                  "An artisanal distillery and immersive museum on Whiskey Row. The guided experience walks you through the bourbon-making process with a tasting at the end.",
              },
              {
                name: "Old Forester Distilling Co.",
                detail:
                  "Housed in a stunning building on Whiskey Row, Old Forester is America\u2019s first bottled bourbon. Tours cover the full production process from grain to barrel to bottle.",
              },
              {
                name: "Rabbit Hole Distillery",
                detail:
                  "A modern, architecturally striking distillery in the NuLu neighborhood. Offers creative bourbons and ryes with a focus on transparency in the production process.",
              },
              {
                name: "Michter\u2019s Fort Nelson Distillery",
                detail:
                  "The restored Fort Nelson building on Main Street houses Michter\u2019s whiskey heritage with a gorgeous bar and detailed tours of their pot still operation.",
              },
            ].map((distillery, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {distillery.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {distillery.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            For a deeper look at every Louisville distillery, including hours,
            pricing, and reservation tips, see our{" "}
            <Link
              href="/bourbon/louisville-distilleries"
              className="text-derby-green font-medium underline hover:text-derby-gold transition-colors"
            >
              Louisville Distilleries Guide
            </Link>
            .
          </p>
        </section>

        {/* Nearby Distilleries */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Distilleries Worth the Drive from Louisville
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The distilleries outside Louisville are where the bourbon trail
              reveals its full beauty. Rolling horse farms, limestone creek
              beds, and rick houses stretching across hillsides &mdash; these
              are the landscapes that define Kentucky bourbon. Most of these
              stops are within 60 to 90 minutes of Louisville and can be
              grouped into day trips.
            </p>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-serif text-derby-green">Distillery</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Location</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Drive from Louisville</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Highlight</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Maker&rsquo;s Mark</td>
                  <td className="py-3 pr-4">Loretto</td>
                  <td className="py-3 pr-4">~1 hr</td>
                  <td className="py-3 pr-4">Dip your own bottle in the iconic red wax. Scenic National Historic Landmark campus.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Woodford Reserve</td>
                  <td className="py-3 pr-4">Versailles</td>
                  <td className="py-3 pr-4">~1 hr 15 min</td>
                  <td className="py-3 pr-4">Postcard-perfect limestone distillery. The official bourbon of the Kentucky Derby.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Wild Turkey</td>
                  <td className="py-3 pr-4">Lawrenceburg</td>
                  <td className="py-3 pr-4">~1 hr</td>
                  <td className="py-3 pr-4">Perched on a cliff overlooking the Kentucky River. Master distiller Jimmy Russell is a legend.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Jim Beam</td>
                  <td className="py-3 pr-4">Clermont</td>
                  <td className="py-3 pr-4">~40 min</td>
                  <td className="py-3 pr-4">The world&rsquo;s best-selling bourbon. Expansive campus with multiple tour options.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Four Roses</td>
                  <td className="py-3 pr-4">Lawrenceburg</td>
                  <td className="py-3 pr-4">~1 hr</td>
                  <td className="py-3 pr-4">Spanish Mission-style distillery with 10 unique bourbon recipes from two mash bills.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Buffalo Trace</td>
                  <td className="py-3 pr-4">Frankfort</td>
                  <td className="py-3 pr-4">~1 hr</td>
                  <td className="py-3 pr-4">Free tours at a National Historic Landmark. Home to Pappy Van Winkle and Eagle Rare.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Planning Your Trip */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Planning Your Kentucky Bourbon Trail Trip
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The amount of time you need depends on how many distilleries you
              want to visit. Each stop takes about 60 to 90 minutes for a
              standard tour, and you should plan for driving time between
              locations. Here is a practical framework for different trip
              lengths:
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="bg-white border-2 border-derby-green rounded-xl overflow-hidden">
              <div className="bg-derby-green px-5 py-3">
                <h3 className="font-serif text-lg font-bold text-white">Weekend Getaway</h3>
                <p className="text-derby-gold text-sm">2 days / 4 &ndash; 6 distilleries</p>
              </div>
              <div className="p-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  Focus on Louisville&rsquo;s Whiskey Row distilleries on day
                  one, then make a day trip to Maker&rsquo;s Mark and
                  Woodford Reserve on day two. This covers the most iconic
                  stops without feeling rushed.
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-derby-green rounded-xl overflow-hidden">
              <div className="bg-derby-green px-5 py-3">
                <h3 className="font-serif text-lg font-bold text-white">Extended Trip</h3>
                <p className="text-derby-gold text-sm">3 &ndash; 4 days / 8 &ndash; 12 distilleries</p>
              </div>
              <div className="p-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  Add Jim Beam, Wild Turkey, Four Roses, and Buffalo Trace to
                  your Louisville itinerary. Group nearby distilleries into
                  day trips heading south toward Bardstown or east toward
                  Frankfort and Lexington.
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-derby-green rounded-xl overflow-hidden">
              <div className="bg-derby-green px-5 py-3">
                <h3 className="font-serif text-lg font-bold text-white">Full Trail</h3>
                <p className="text-derby-gold text-sm">5+ days / 18+ distilleries</p>
              </div>
              <div className="p-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  Commit to the complete passport. Visit every member
                  distillery across the state, including newer additions.
                  Consider splitting the trip across two visits if time
                  is tight.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Guided vs Guided */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Self-Guided vs. Guided Tours
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              You have two main options for how you experience the trail:
              driving yourself or hiring a guided tour service. Both have real
              advantages, and many visitors mix the two approaches over the
              course of their trip.
            </p>
            <p>
              <strong>Self-guided driving</strong> gives you complete control
              over your schedule. You decide when to arrive, how long to stay,
              and which distilleries to prioritize. The downside is obvious:
              someone in your group needs to stay sober. Tasting samples at
              each distillery add up quickly, and Kentucky takes impaired
              driving seriously. If you go self-guided, designate a driver for
              each day and rotate the role among your group.
            </p>
            <p>
              <strong>Guided tour companies</strong> based in Louisville and
              Lexington handle all the logistics. They pick you up at your
              hotel, drive you to two or three distilleries, and bring you back
              safely. You pay a premium (typically $100 to $200 per person for
              a full-day tour), but everyone in your group gets to taste
              freely, and the guides often have insider knowledge and
              relationships with the distilleries that enhance the experience.
              This is especially valuable during peak season when parking and
              logistics can be stressful at the more popular stops.
            </p>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Best Time to Visit the Kentucky Bourbon Trail
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The trail is open year-round, but two seasons stand out above
              the rest.
            </p>
            <p>
              <strong>Spring around Derby (late April through early May)</strong>{" "}
              is the most exciting time to visit. Louisville buzzes with Derby
              energy, and many distilleries run special events and limited
              releases to coincide with race week. The weather is mild and the
              countryside is green. The tradeoff is that this is peak season
              &mdash; book your distillery tours and Louisville hotels well in
              advance because they sell out.
            </p>
            <p>
              <strong>Fall (September through October)</strong> is arguably the
              most beautiful time on the trail. The central Kentucky landscape
              lights up with autumn colors, making the drives between
              distilleries genuinely scenic. Crowds thin out compared to summer,
              and bourbon releases for the holiday season start hitting shelves.
              Many bourbon enthusiasts consider fall the sweet spot for a trail
              visit.
            </p>
            <p>
              Summer is perfectly fine but hot and humid, which can make
              walking distillery grounds less comfortable. Winter visits are
              quieter and easier to book, though some outdoor elements of
              certain distillery tours are less enjoyable in the cold.
            </p>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1619616755641-5d27d6fe4244?w=800&q=75"
          alt="Mint julep cocktail alongside a bottle of Kentucky bourbon"
          caption="Savoring a mint julep made with bourbon from the trail — the perfect way to end a distillery day"
          aspectRatio="landscape"
        />

        {/* Bourbon Trail + Derby Combo */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Bourbon Trail and Kentucky Derby Weekend Combo
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Many visitors combine a bourbon trail trip with Kentucky Derby
              attendance, and it is one of the best ways to experience
              Louisville. Here is a sample itinerary for a long Derby weekend:
            </p>
          </div>
          <div className="mt-6 space-y-4">
            {[
              {
                day: "Wednesday",
                plan: "Arrive in Louisville. Walk Whiskey Row and tour Angel\u2019s Envy and Old Forester. Dinner on Main Street.",
              },
              {
                day: "Thursday",
                plan: "Day trip south to Maker\u2019s Mark and Jim Beam in the Bardstown area. Evening: explore Louisville\u2019s NuLu neighborhood and visit Rabbit Hole if time allows.",
              },
              {
                day: "Friday \u2014 Kentucky Oaks",
                plan: "Attend Kentucky Oaks at Churchill Downs (the Friday races before the Derby). This is a full day at the track with great racing and smaller crowds than Saturday.",
              },
              {
                day: "Saturday \u2014 Derby Day",
                plan: "The Kentucky Derby. Arrive early, enjoy the atmosphere, place your bets, and witness the greatest two minutes in sports. See our attending guides for everything you need to know.",
              },
              {
                day: "Sunday",
                plan: "Day trip to Woodford Reserve and Buffalo Trace before heading home. Both are about an hour east of Louisville and can be visited back-to-back.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start border-l-4 border-derby-gold pl-6">
                <div>
                  <p className="font-serif font-bold text-derby-green mb-1">
                    {item.day}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{item.plan}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Craft Tour */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Kentucky Bourbon Trail Craft Tour
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              In addition to the main trail, the KDA operates the Kentucky
              Bourbon Trail Craft Tour, which highlights smaller, independent
              craft distilleries across the state. These operations are
              typically newer, more experimental, and offer a more intimate
              experience than the large heritage distilleries.
            </p>
            <p>
              The Craft Tour has its own passport and rewards program.
              Participating distilleries include operations like Wilderness
              Trail in Danville, Castle &amp; Key in Frankfort (housed in the
              beautifully restored Old Taylor distillery), and Boone County
              Distilling near the Cincinnati border. If you enjoy discovering
              up-and-coming producers and tasting innovative spirits alongside
              traditional bourbon, the Craft Tour is a rewarding complement
              to the main trail.
            </p>
          </div>
        </section>

        {/* Tasting Tips */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Bourbon Tasting Tips for Beginners
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Use the Dump Bucket",
                text: "Every tasting room provides dump cups or buckets. There is no shame in pouring out a sample you do not want to finish. Professional tasters do it constantly. Over the course of a day visiting multiple distilleries, the pours add up faster than you think.",
              },
              {
                title: "Nose Before You Sip",
                text: "Before tasting, hold the glass below your chin and slowly bring it toward your nose. Breathe gently through your mouth and nose together. Jamming your nose into the glass and inhaling deeply will overwhelm your senses with alcohol vapor and numb your palate.",
              },
              {
                title: "Add a Drop of Water",
                text: "A small splash of water opens up the flavors in high-proof bourbons. Most tasting rooms provide water for this purpose. Do not feel pressured to drink everything neat; even distillery master tasters add water regularly.",
              },
              {
                title: "Eat Between Stops",
                text: "Have a real meal or substantial snack between distillery visits. Kentucky is full of excellent restaurants and roadside spots between distilleries. Tasting on an empty stomach is a recipe for an early end to your day.",
              },
              {
                title: "Stay Hydrated",
                text: "Drink plenty of water throughout the day, especially in warmer months. Alternating a glass of water with each bourbon tasting keeps your palate sharp and your head clear for the next stop.",
              },
              {
                title: "Take Notes",
                text: "After three or four distilleries, the bourbons start blending together in your memory. Use your phone or a pocket notebook to jot down which bourbons stood out and why. This is especially useful when deciding what bottles to buy on the way home.",
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

        {/* Costs */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What Does the Bourbon Trail Cost?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The passport itself is free, but budget for individual tour and
              tasting fees at each distillery. Here is a realistic breakdown:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Standard tours:</strong> $15 to $30 per person at most
                  distilleries. These typically last 60 to 90 minutes and
                  include a guided walk through the production facility plus a
                  tasting of two to four bourbons.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Premium experiences:</strong> $40 to $75+ for
                  barrel-pick tastings, blending sessions, or VIP tours that
                  include access to limited-release products.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Free options:</strong> Buffalo Trace in Frankfort
                  offers free guided tours (reservations required). Some
                  distilleries have free self-guided outdoor tours of their
                  grounds.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Guided day tours:</strong> $100 to $200 per person
                  from Louisville or Lexington, usually covering two to three
                  distilleries with transportation and lunch included.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Bottle purchases:</strong> Budget extra if you plan to
                  buy bottles at distillery gift shops. Some offer exclusive
                  single-barrel picks and distillery-only releases not available
                  anywhere else.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Map / Route Planning */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Planning Your Bourbon Trail Route
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The Kentucky Bourbon Trail stretches across a wide area of the
              state, so grouping distilleries geographically saves you time
              and backtracking. Think of the trail in three clusters:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <span className="text-derby-gold font-bold mr-3 mt-0.5">1.</span>
                <span>
                  <strong>Louisville / Whiskey Row:</strong> Angel&rsquo;s Envy,
                  Old Forester, Evan Williams, Michter&rsquo;s Fort Nelson,
                  Rabbit Hole. All walkable from each other in downtown
                  Louisville.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-derby-gold font-bold mr-3 mt-0.5">2.</span>
                <span>
                  <strong>Bardstown / South of Louisville:</strong> Jim Beam
                  (Clermont), Maker&rsquo;s Mark (Loretto), Heaven Hill, Lux
                  Row. Bardstown calls itself the bourbon capital of the world,
                  and it is a great overnight stop.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-derby-gold font-bold mr-3 mt-0.5">3.</span>
                <span>
                  <strong>Frankfort / Lexington / East:</strong> Buffalo Trace,
                  Woodford Reserve, Wild Turkey, Four Roses, Castle &amp; Key.
                  This corridor runs along scenic Kentucky backroads through
                  horse farm country.
                </span>
              </li>
            </ul>
            <p>
              The Kentucky Bourbon Trail website and mobile app include an
              interactive map that helps you plan routes between stops. Use
              it to check tour times, book reservations, and estimate drive
              times before you hit the road.
            </p>
          </div>
        </section>

        {/* Transportation Safety */}
        <section className="mb-12">
          <div className="bg-derby-green rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">
              A Note on Transportation and Safety
            </h2>
            <p className="text-derby-cream leading-relaxed">
              This cannot be stressed enough: plan your transportation before
              you start tasting. Kentucky&rsquo;s bourbon country is rural,
              rideshare availability is limited outside Louisville, and
              distilleries are connected by two-lane roads. If you are driving
              yourself, designate a sober driver for each day of your trip
              and stick to that plan. If everyone in your group wants to taste
              freely, book a guided tour service. The bourbon will taste just
              as good when you know you are getting home safely.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About the Kentucky Bourbon Trail
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
            Continue Exploring Bourbon Country
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
                Detailed guide to every distillery in Louisville, with hours,
                prices, and booking tips.
              </p>
            </Link>
            <Link
              href="/bourbon/whiskey-row"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Whiskey Row Guide
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Walk the historic block where bourbon was born and visit five
                distilleries on foot.
              </p>
            </Link>
            <Link
              href="/bourbon/tours"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Bourbon Tours from Louisville
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Guided tour companies, private charters, and group excursion
                options with transportation included.
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
                Learn to make the official Derby cocktail with the bourbon you
                discover on the trail.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
