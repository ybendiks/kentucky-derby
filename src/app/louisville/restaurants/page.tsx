import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title:
    "Best Louisville Restaurants for Derby Weekend 2026 | Where to Eat Guide",
  description:
    "The best restaurants in Louisville for Kentucky Derby visitors. Fine dining, Southern classics, bourbon-focused restaurants, budget-friendly spots, and reservation tips for Derby weekend 2026.",
  keywords: [
    "best restaurants louisville",
    "where to eat louisville",
    "louisville restaurants derby weekend",
    "louisville dining guide",
    "best restaurants near churchill downs",
    "louisville fine dining",
    "louisville southern food",
    "derby weekend restaurants",
  ],
  openGraph: {
    title: "Best Louisville Restaurants for Derby Weekend 2026",
    description:
      "A comprehensive guide to Louisville's best restaurants for Kentucky Derby visitors. Fine dining, Southern classics, bourbon-focused spots, and where to book for Derby weekend.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question:
      "How far in advance should I make restaurant reservations for Derby weekend?",
    answer:
      "For popular restaurants during Kentucky Derby weekend, you should book reservations at least four to six weeks in advance. The most sought-after spots like Jack Fry's, 610 Magnolia, and Jeff Ruby's may fill up even earlier. If you wait until Derby week, your options will be limited to walk-in casual spots and fast-casual restaurants. Many restaurants offer special Derby weekend menus at premium prices, so check with the restaurant when booking to understand any pricing changes.",
  },
  {
    question: "What is a Louisville Hot Brown?",
    answer:
      "The Hot Brown is an open-faced sandwich invented at The Brown Hotel in Louisville in 1926. It consists of sliced turkey breast on toast, covered in a rich Mornay cheese sauce, then broiled until the top is bubbly and golden. It is traditionally topped with crispy bacon strips and a tomato slice. The original Hot Brown is still served at The Brown Hotel's lobby bar and J. Graham's Cafe, and many Louisville restaurants offer their own versions. It is one of the most iconic dishes in Kentucky cuisine.",
  },
  {
    question: "What are the best neighborhoods for dining in Louisville?",
    answer:
      "Louisville's top dining neighborhoods are Downtown (walkable to many hotels, home to bourbon bars and upscale restaurants), NuLu (East Market District with trendy, chef-driven restaurants and galleries), Bardstown Road in the Highlands (eclectic mix of independent restaurants, coffee shops, and bars), and Butchertown (an emerging neighborhood with creative dining concepts). The Frankfort Avenue corridor in Crescent Hill also has excellent options. For Derby visitors, Downtown and NuLu are the most convenient and offer the widest range of price points.",
  },
  {
    question: "Are Louisville restaurants more expensive during Derby weekend?",
    answer:
      "Some Louisville restaurants raise prices during Derby weekend by offering special prix fixe menus or Derby-themed tasting menus that cost more than their regular offerings. Fine dining spots are more likely to implement special menus. Casual restaurants and chains generally keep their regular pricing. Expect longer wait times at popular spots even with a reservation. Tipping is standard at 18 to 20 percent in Louisville, and some restaurants add an automatic gratuity for large parties during the busy Derby weekend.",
  },
];

export default function RestaurantsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Louisville", href: "/louisville" },
          { name: "Restaurants", href: "/louisville/restaurants" },
        ]}
      />
      <ArticleJsonLd
        title="Best Louisville Restaurants for Derby Weekend 2026"
        description="A comprehensive guide to Louisville's best restaurants for Kentucky Derby visitors, covering fine dining, Southern cuisine, bourbon-focused spots, and budget-friendly options."
        datePublished="2025-10-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                href="/"
                className="hover:text-derby-green transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/louisville"
                className="hover:text-derby-green transition-colors"
              >
                Louisville
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-derby-green font-medium">Restaurants</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-white py-20 sm:py-28 relative overflow-hidden -mx-4 -mt-12 mb-12">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Fine dining in Louisville"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Best Louisville Restaurants for Derby Weekend 2026
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              Louisville has evolved into one of the most exciting food cities in
              the American South. With multiple James Beard Award nominations, a
              thriving farm-to-table movement fueled by the rich agricultural land
              of the Bluegrass State, and a bourbon culture that infuses everything
              from sauces to desserts, Derby visitors will find dining that rivals
              any major metropolitan area. Here is where to eat before, during,
              and after the big race.
            </p>
          </div>
        </section>

        {/* Must-Try Louisville Dishes */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Must-Try Louisville Dishes
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Before diving into specific restaurants, every visitor to Louisville
              should know about the signature dishes that define the city&rsquo;s
              culinary identity. These are the foods that locals are proud of and
              that you simply cannot get the same way anywhere else.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                name: "The Hot Brown",
                where: "The Brown Hotel (original)",
                description:
                  "Louisville's most famous dish, invented at The Brown Hotel in 1926. An open-faced turkey sandwich smothered in Mornay sauce, broiled until bubbly, and topped with bacon and tomato. Rich, indulgent, and unmissable.",
              },
              {
                name: "Derby Pie",
                where: "Kern's Kitchen (original recipe)",
                description:
                  "A chocolate and walnut tart in a pastry shell, often made with a splash of bourbon. The trademarked name belongs to Kern's Kitchen, but many Louisville bakeries and restaurants serve their own versions under names like \"thoroughbred pie\" or \"race day pie.\"",
              },
              {
                name: "Benedictine Spread",
                where: "Various restaurants citywide",
                description:
                  "A creamy cucumber and cream cheese spread created by Louisville caterer Jennie Benedict in the early 1900s. Served as a dip, on sandwiches, or as a tea sandwich filling. It is a staple at Derby parties and Louisville gatherings.",
              },
              {
                name: "Bourbon Balls",
                where: "Ruth Hunt Candies, various shops",
                description:
                  "Chocolate-coated confections made with bourbon, butter, sugar, and pecans. These bite-sized treats are a beloved Kentucky gift and souvenir. You will find them at candy shops, distillery gift shops, and restaurant dessert menus throughout Louisville.",
              },
              {
                name: "Burgoo",
                where: "Feast BBQ, various Southern spots",
                description:
                  "A thick, hearty stew traditionally made with a mix of meats (pork, chicken, and sometimes lamb or mutton), slow-cooked with vegetables for hours. Burgoo is a Kentucky tradition at outdoor gatherings and is served at Churchill Downs during Derby weekend.",
              },
              {
                name: "Modjeskas",
                where: "Muth's Candies",
                description:
                  "Soft caramel-dipped marshmallows named after a famous 19th-century actress who performed in Louisville. Muth's Candies on East Market Street has been making them by hand since 1921. A sweet, uniquely Louisville treat.",
              },
            ].map((dish, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                  {dish.name}
                </h3>
                <p className="text-xs text-derby-gold font-medium mb-2">
                  {dish.where}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=75"
          alt="Beautifully plated dish at a Louisville restaurant during Derby weekend"
          caption="Louisville's culinary scene blends Southern tradition with modern creativity"
          aspectRatio="landscape"
          priority
        />

        {/* Fine Dining */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Fine Dining in Louisville
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Louisville&rsquo;s fine dining scene has earned national recognition,
              with several chefs receiving James Beard Award nominations and the
              city gaining a reputation as a destination for serious food lovers.
              These restaurants represent the top tier of Louisville dining, where
              seasonal ingredients from Kentucky farms meet refined technique and
              creative menus.
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Jack Fry&rsquo;s
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A Bardstown Road institution since 1933, Jack Fry&rsquo;s is
                  Louisville&rsquo;s quintessential fine dining destination. The
                  intimate, white-tablecloth dining room has hosted generations of
                  Derby visitors and Louisville locals. The menu blends Southern
                  comfort with French technique: think shrimp and grits elevated
                  to an art form, pan-seared fish with seasonal vegetables, and
                  one of the best bone-in pork chops in the city. The bourbon
                  list is extensive, and the live jazz on weekend evenings sets
                  the mood perfectly. Reserve well in advance for Derby weekend.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  610 Magnolia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Chef Edward Lee&rsquo;s flagship restaurant offers a
                  multi-course tasting menu that showcases the intersection of
                  Southern cooking and Korean flavors. Located in Old Louisville
                  in a converted Victorian home, the intimate setting seats only
                  a few dozen diners per evening. The menu changes regularly
                  based on what is available from local farms, but expect dishes
                  that are inventive, beautifully plated, and unlike anything
                  else in the city. This is Louisville&rsquo;s most celebrated
                  restaurant for a special occasion dinner during Derby week.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Proof on Main
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Located inside the 21c Museum Hotel on West Main Street, Proof
                  on Main combines contemporary art with farm-to-table cuisine.
                  The restaurant sources ingredients from regional producers and
                  changes its menu seasonally. The space itself is stunning, with
                  rotating art installations that make dining here a visual
                  experience as much as a culinary one. The bar program features
                  creative bourbon cocktails and an impressive whiskey selection.
                  Derby weekend brunch here is particularly popular.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Barn8 at Hermitage Farm
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For a truly unique Derby-week dining experience, Barn8 is set
                  on a working Thoroughbred farm in Goshen, about 30 minutes
                  northeast of Louisville. The restaurant operates inside a
                  beautifully restored barn and serves a seasonal, prix fixe menu
                  sourced heavily from the farm&rsquo;s own gardens and nearby
                  producers. Dining here connects you to Kentucky&rsquo;s
                  agricultural heritage in a way that no downtown restaurant can
                  match. The drive through horse country is worth it on its own.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=75"
          alt="Upscale restaurant interior with warm lighting in Louisville"
          caption="Fine dining in Louisville offers a refined backdrop for Derby weekend celebrations"
          aspectRatio="wide"
        />

        {/* Best for Derby Weekend */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Best Restaurants for Derby Weekend Dining
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Derby weekend demands restaurants that match the occasion: places
              where you can dress up, celebrate, and feel the energy of the city
              at its most festive. These restaurants are the top choices for a
              memorable pre-race dinner or post-Derby celebration.
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  The Brown Hotel &mdash; J. Graham&rsquo;s Cafe &amp; English Grill
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Brown Hotel is a Louisville landmark that is synonymous
                  with Derby tradition. J. Graham&rsquo;s Cafe serves the
                  original Hot Brown in a casual lobby setting, while the English
                  Grill upstairs offers an upscale, white-tablecloth experience
                  with classic Southern dishes and a Derby-week prix fixe menu.
                  Staying at or dining in The Brown Hotel during Derby is a rite
                  of passage for many visitors. Both restaurants fill up quickly,
                  so reservations are essential.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Jeff Ruby&rsquo;s Steakhouse
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Located on Fourth Street downtown, Jeff Ruby&rsquo;s is the
                  premier steakhouse experience in Louisville. Known for USDA
                  Prime steaks, a lively atmosphere, and impeccable service,
                  this is where many Derby owners, trainers, and celebrities
                  celebrate on Derby eve and race night. The bourbon selection
                  is outstanding, and the side dishes — particularly the lobster
                  mac and cheese — are meals in themselves. Expect premium
                  pricing, especially during Derby week.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Repeal Oak-Fired Steakhouse
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Inside the Hotel Distil on Whiskey Row, Repeal specializes in
                  steaks and seafood cooked over an oak-fired grill. The
                  restaurant&rsquo;s location on Main Street puts it in the
                  heart of Louisville&rsquo;s bourbon district, and the menu
                  embraces that heritage with bourbon-glazed dishes and a
                  whiskey-forward cocktail list. The ambiance is modern and
                  sleek, making it a popular choice for groups looking for a
                  high-energy Derby weekend dinner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bourbon-Focused Dining */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Bourbon-Focused Restaurants
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Louisville sits at the center of bourbon country, and many of the
              city&rsquo;s restaurants weave bourbon into their menus, cocktail
              programs, and overall dining experience. For visitors who want to
              combine great food with Kentucky&rsquo;s signature spirit, these
              spots deliver.
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Doc Crow&rsquo;s Southern Smokehouse &amp; Raw Bar
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Located on Whiskey Row, Doc Crow&rsquo;s pairs smoked meats
                  and fresh oysters with one of the largest bourbon collections
                  in the city. The bourbon list runs over 100 selections deep,
                  and the staff can guide you through a tasting flight while you
                  enjoy pulled pork, smoked brisket, or a raw bar platter. The
                  outdoor patio on Main Street is a prime people-watching spot
                  during Derby week.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Bourbon Barrel Foods &amp; The Garage
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Bourbon Barrel Foods produces artisan sauces, seasonings, and
                  condiments aged in bourbon barrels. Their retail space and
                  tasting room in Butchertown lets you sample products that
                  incorporate bourbon culture into everyday cooking. Pick up
                  bourbon-smoked soy sauce, bourbon barrel-aged Worcestershire,
                  or specialty sauces as edible souvenirs to bring home from
                  your Derby trip.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Merle&rsquo;s Whiskey Kitchen
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  On Frankfort Avenue in the Crescent Hill neighborhood,
                  Merle&rsquo;s combines comfort food with an extensive whiskey
                  program. The fried chicken, pimento cheese, and hot brown egg
                  rolls are standouts, and the whiskey list features hard-to-find
                  bottles alongside approachable pours. The atmosphere is relaxed
                  and fun, making it a great spot for a casual dinner before
                  heading to the track.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NuLu Restaurants */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            NuLu (East Market District) Restaurants
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              NuLu, short for New Louisville, is the city&rsquo;s trendiest
              dining and shopping district. Located along East Market Street just
              east of downtown, this walkable neighborhood is packed with
              chef-driven restaurants, art galleries, boutiques, and some of the
              best casual dining in the city. It is the ideal neighborhood for
              an afternoon of exploring followed by dinner.
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Royals Hot Chicken
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Louisville&rsquo;s answer to Nashville hot chicken, Royals
                  serves fiery fried chicken in heat levels ranging from
                  &ldquo;Country&rdquo; (no heat) to &ldquo;Gonzo&rdquo; (not
                  for the faint of heart). The chicken is brined, hand-battered,
                  fried to order, and served on white bread with pickles. Sides
                  like mac and cheese and baked beans round out the meal. Order
                  at the counter and grab a seat in the casual, lively space.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Garage Bar
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Built inside a converted auto garage, Garage Bar is one of the
                  most popular patios in Louisville. The wood-fired pizza oven
                  turns out excellent pies, and the charcuterie boards feature
                  locally sourced meats and cheeses. The outdoor space, with
                  ping pong tables and string lights, captures the casual,
                  creative spirit of the NuLu neighborhood. Expect a wait on
                  warm evenings during Derby week, but the atmosphere makes it
                  worthwhile.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Mayan Cafe
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Chef Bruce Uchan brings Yucatecan and Belizean flavors to
                  Louisville at this beloved NuLu restaurant. The menu focuses
                  on slow-cooked meats, fresh salsas, and dishes built around
                  traditional Mayan ingredients like pepitas, achiote, and
                  habanero. The farm-to-table approach uses Kentucky produce
                  prepared through a Latin American lens. It is one of the most
                  unique dining experiences in the city and a perfect change of
                  pace from traditional Southern fare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Budget-Friendly */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Budget-Friendly Restaurants
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              You do not need to spend a fortune to eat well in Louisville.
              The city has a deep roster of casual restaurants, counter-service
              spots, and neighborhood joints that serve outstanding food at
              reasonable prices. These picks let you save your money for betting
              at the track while still eating like a local.
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Ollie&rsquo;s Trolley
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A Louisville institution on South Third Street, Ollie&rsquo;s
                  has been serving some of the best burgers in the city since
                  1973. The Ollieburger is the signature: a seasoned smash-style
                  patty with a secret-recipe sauce that keeps locals coming back.
                  The menu is simple, the prices are low, and the location near
                  the University of Louisville campus makes it a convenient stop
                  on the way to or from Churchill Downs.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Wild Rita&rsquo;s
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Colorful, festive, and full of flavor, Wild Rita&rsquo;s
                  serves generous portions of Tex-Mex at wallet-friendly prices.
                  The margaritas are strong and come in a variety of flavors.
                  With multiple Louisville locations, it is easy to find one near
                  wherever you are staying. The casual, high-energy vibe makes
                  it a fun stop for groups before a night out during Derby week.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Joella&rsquo;s Hot Chicken
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A local chain that has expanded across the region for good
                  reason. Joella&rsquo;s serves crispy, juicy hot chicken in
                  heat levels from mild to &ldquo;fire in the hole.&rdquo; The
                  chicken sandwiches, tenders, and sides are consistently
                  excellent, and the prices are reasonable for the quality. The
                  multiple Louisville locations offer quick, satisfying meals
                  for visitors on a packed Derby-week schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breakfast and Brunch */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Breakfast &amp; Brunch Spots
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Derby Day starts early, with gates at Churchill Downs opening in
              the morning. A hearty breakfast sets the foundation for a long day
              at the track. Louisville&rsquo;s brunch scene is one of the
              strongest in the South, with plenty of options to fuel up before
              the races.
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Wild Eggs
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A Louisville-born breakfast concept with several locations
                  across the metro area. Wild Eggs goes beyond standard diner
                  fare with creative dishes like chorizo-scrambled eggs, lemon
                  blueberry goat cheese pancakes, and the &ldquo;Kalamity
                  Katie&rsquo;s Border Benedict&rdquo; with pulled pork and
                  chipotle hollandaise. The menu is large, the portions are
                  generous, and the quality is consistent. Expect a wait on
                  Derby weekend mornings, especially at the downtown location.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Biscuit Belly
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Southern biscuit sandwiches are the star at Biscuit Belly,
                  where every item is built on a freshly baked, buttery biscuit.
                  The &ldquo;Biscuit French Toast&rdquo; and loaded biscuit
                  sandwiches filled with fried chicken, pimento cheese, or
                  smoked ham are indulgent morning meals that will carry you
                  through the first several races. Multiple locations make it
                  accessible from most Louisville neighborhoods.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Toast on Market
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Located in NuLu, Toast on Market is a neighborhood brunch
                  favorite that does breakfast classics with care and creativity.
                  The avocado toast and breakfast burritos are popular, but the
                  rotating seasonal specials are the real draw. The bright,
                  modern space has a welcoming vibe, and the NuLu location makes
                  it easy to pair brunch with a morning walk through the East
                  Market District galleries and shops before heading to the track.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BBQ and Southern */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            BBQ &amp; Southern Cooking
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              You are in the South, and the barbecue and Southern comfort food in
              Louisville does not disappoint. From traditional smoked meats to
              creative takes on Southern classics, these restaurants deliver the
              kind of hearty, soulful cooking that Kentucky is known for.
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Feast BBQ
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With locations in NuLu and on Frankfort Avenue, Feast BBQ
                  takes craft barbecue seriously. The smoked brisket, pulled
                  pork, and ribs are cooked low and slow over hardwood. Sides
                  like bourbon baked beans, smoked mac and cheese, and
                  jalapeno-cheddar cornbread stand on their own. The NuLu
                  location has a lively outdoor area that is perfect for a
                  casual Derby-week meal with a group. The burgoo is available
                  seasonally and is one of the best in Louisville.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Hammerheads
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tucked into a small space in the Highlands, Hammerheads is a
                  local legend for creative Southern comfort food. The menu
                  changes regularly and features items like duck fat fries,
                  smoked meat tacos, and towering burgers built with
                  locally sourced ingredients. The kitchen is adventurous and the
                  flavors are bold. It is a cash-only spot with limited seating,
                  so plan accordingly. The devoted local following tells you
                  everything you need to know about the quality.
                </p>
              </div>

              <div className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  Butchertown Grocery
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Set in a renovated 19th-century grocery store in the
                  Butchertown neighborhood, this restaurant elevates Southern
                  cooking with refined technique and local sourcing. The menu
                  changes seasonally but consistently features beautiful
                  preparations of Kentucky lamb, regional fish, and
                  garden-fresh vegetables. The cocktail program is excellent,
                  and the intimate dining room has a warmth that makes it feel
                  like dining in a friend&rsquo;s beautifully restored home. It
                  strikes a balance between fine dining and comfortable
                  neighborhood restaurant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation Tips */}
        <section className="mb-12">
          <div className="bg-white border-2 border-derby-green rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-derby-green px-6 py-5">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                Derby Weekend Reservation Tips
              </h2>
              <p className="text-derby-gold mt-1">
                Plan ahead to avoid disappointment
              </p>
            </div>
            <div className="p-6 md:p-8">
              <ul className="space-y-4">
                {[
                  {
                    tip: "Book four to six weeks early.",
                    detail:
                      "Top restaurants like Jack Fry's, 610 Magnolia, and Jeff Ruby's fill their Derby weekend reservations weeks in advance. Set a reminder to book as soon as your travel dates are confirmed.",
                  },
                  {
                    tip: "Use OpenTable or Resy for real-time availability.",
                    detail:
                      "Most Louisville restaurants accept reservations through OpenTable or Resy. These platforms show real-time availability and let you set alerts if a sold-out restaurant has a cancellation.",
                  },
                  {
                    tip: "Consider off-peak dining times.",
                    detail:
                      "If you are flexible, try booking lunch instead of dinner, or dine early (before 6 PM) or late (after 9 PM). These off-peak windows are often easier to book, even during Derby weekend.",
                  },
                  {
                    tip: "Have a backup plan.",
                    detail:
                      "Even with a reservation, delays can happen during the busiest weekend of the year. Keep a list of walk-in-friendly casual spots as a backup in case your plans change after a long day at the track.",
                  },
                  {
                    tip: "Expect special menus and pricing.",
                    detail:
                      "Many upscale restaurants offer special Derby weekend menus (often prix fixe) at higher price points than their regular menu. Call ahead to ask about Derby weekend pricing and menu options so there are no surprises.",
                  },
                  {
                    tip: "Confirm your reservation the day before.",
                    detail:
                      "Restaurants sometimes overbook during Derby weekend. A quick confirmation call or app check the day before ensures your table is secured and helps the restaurant plan for their busiest service of the year.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 bg-derby-green text-white text-sm font-bold rounded-full shrink-0 mr-4 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-derby-green mb-1">
                        {item.tip}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Neighborhoods for Dining */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Louisville Dining Neighborhoods
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Louisville is a city of distinct neighborhoods, each with its own
              character and dining scene. Knowing which neighborhoods to target
              helps you plan your meals around your Derby-week schedule and
              where you are staying.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Downtown / Whiskey Row",
                vibe: "Walkable, upscale, bourbon-centric",
                highlights:
                  "The Brown Hotel, Jeff Ruby's, Repeal, Doc Crow's, and numerous bourbon bars line Main Street and Fourth Street. This is where most Derby visitors stay, and it has the highest concentration of restaurants within walking distance of major hotels. Expect crowds but also the most dining choices.",
              },
              {
                name: "NuLu (East Market District)",
                vibe: "Trendy, chef-driven, walkable",
                highlights:
                  "Royals Hot Chicken, Garage Bar, Mayan Cafe, Feast BBQ, and numerous boutiques and galleries. NuLu is about a 10-minute drive or short rideshare from downtown. The neighborhood is compact and walkable once you arrive, making it ideal for an afternoon of exploring and dining.",
              },
              {
                name: "Bardstown Road / The Highlands",
                vibe: "Eclectic, independent, local favorite",
                highlights:
                  "Jack Fry's, Hammerheads, and dozens of independent restaurants, bars, and coffee shops line this vibrant corridor. Bardstown Road has been Louisville's bohemian Main Street for decades. It is about 15 minutes from downtown and offers more of a local, off-the-tourist-path dining experience.",
              },
              {
                name: "Butchertown",
                vibe: "Emerging, creative, artisan",
                highlights:
                  "Butchertown Grocery, Bourbon Barrel Foods, and a growing number of craft cocktail bars and restaurants. This formerly industrial neighborhood east of downtown has become one of Louisville's most exciting areas for food and drink. The walkable core along Story Avenue rewards exploration.",
              },
            ].map((hood, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                  {hood.name}
                </h3>
                <p className="text-xs text-derby-gold font-medium mb-2">
                  {hood.vibe}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {hood.highlights}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            For a deeper dive into Louisville&rsquo;s neighborhoods, including
            transportation tips and what to see beyond dining, visit our{" "}
            <Link
              href="/louisville/neighborhoods"
              className="text-derby-green font-medium underline hover:text-derby-gold transition-colors"
            >
              Louisville Neighborhoods Guide
            </Link>
            .
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Louisville Restaurants
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

        {/* Internal Links / Related Content */}
        <section className="bg-derby-cream border border-derby-gold/20 rounded-xl p-6 md:p-8">
          <h2 className="font-serif text-2xl font-bold text-derby-green mb-4">
            Plan the Rest of Your Louisville Trip
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/louisville/where-to-stay"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Where to Stay in Louisville
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Hotels, Airbnbs, and neighborhoods for every budget during Derby
                week.
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
                Tour Louisville&rsquo;s best bourbon bars and distilleries
                between meals.
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
                Where to go after dinner during Derby week for live music, bars,
                and entertainment.
              </p>
            </Link>
            <Link
              href="/culture/food-recipes"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Foods &amp; Recipes
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Make Louisville&rsquo;s signature dishes at home with our
                recipes.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
