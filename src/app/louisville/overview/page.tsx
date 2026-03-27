import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title:
    "Things to Do in Louisville, KY | Louisville Travel Guide & Attractions",
  description:
    "Discover the best things to do in Louisville, Kentucky. A comprehensive travel guide to Louisville attractions, bourbon culture, top restaurants, neighborhoods, and why Derby City is worth visiting year-round.",
  keywords:
    "things to do in louisville, louisville travel guide, louisville kentucky attractions, louisville things to do, visit louisville ky",
};

const faqItems = [
  {
    question: "What is Louisville, Kentucky best known for?",
    answer:
      "Louisville is best known as the home of the Kentucky Derby at Churchill Downs, held annually on the first Saturday in May. Beyond the Derby, Louisville is renowned for its bourbon heritage (Kentucky produces 95% of the world's bourbon), the Louisville Slugger baseball bat factory, the Muhammad Ali Center, and a thriving culinary scene that has earned multiple James Beard Award nominations.",
  },
  {
    question: "What is the best time of year to visit Louisville?",
    answer:
      "The best time to visit Louisville is from April through June and September through November. Spring brings Derby season, blooming gardens, and comfortable temperatures in the 60s-70s. Fall offers vibrant foliage along the Ohio River, bourbon festival season, and pleasant weather. Summer can be hot and humid with temperatures above 90 degrees, but offers outdoor festivals and extended waterfront hours. Winter is the quietest season with lower hotel rates and holiday events.",
  },
  {
    question: "How many days do you need in Louisville?",
    answer:
      "Three to four days is ideal for experiencing Louisville's highlights. Spend one day exploring downtown attractions like the Louisville Slugger Museum and Muhammad Ali Center. Dedicate another day to bourbon experiences along Whiskey Row and the Urban Bourbon Trail. Use a third day to explore neighborhoods like NuLu and The Highlands. If visiting during Derby Week, add at least one more day for Churchill Downs events. Weekend visitors can cover the essentials in two packed days.",
  },
  {
    question: "Is Louisville a walkable city?",
    answer:
      "Downtown Louisville and several key neighborhoods are very walkable. The downtown core, including Whiskey Row, Museum Row, and the Waterfront Park area, is easily explored on foot. The Big Four Bridge connects Louisville to Jeffersonville, Indiana for a scenic pedestrian crossing. NuLu (East Market District) is a compact, walkable neighborhood with shops and restaurants. The Highlands along Bardstown Road is also pedestrian-friendly. For getting between neighborhoods, rideshare services, the TARC bus system, or Louisville's bike-share program (LouVelo) are convenient options.",
  },
];

export default function LouisvilleOverviewPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Louisville", href: "/louisville" },
          { name: "Overview", href: "/louisville/overview" },
        ]}
      />
      <ArticleJsonLd
        title="Things to Do in Louisville: The Complete Travel Guide"
        description="Comprehensive Louisville travel guide covering top attractions, culinary scene, bourbon culture, neighborhoods, arts, and practical visitor information."
        datePublished="2025-01-15"
        dateModified="2026-03-01"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="text-white py-16 sm:py-24 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1615825742158-5aac7849e4a4?w=1920&q=80"
          alt="Louisville city skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <p className="text-derby-gold font-semibold tracking-widest uppercase text-sm mb-4">
            Louisville Travel Guide
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Things to Do in Louisville, Kentucky
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
            Louisville is far more than the Kentucky Derby. This vibrant river
            city blends bourbon heritage, a world-class culinary scene, thriving
            arts districts, and Southern hospitality into one of America&rsquo;s
            most underrated destinations. Here is your complete guide to
            exploring Derby City.
          </p>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section className="bg-derby-green-dark text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-derby-gold font-serif text-xl font-bold">
                633,000+
              </p>
              <p className="text-white/60 text-sm mt-1">Metro Population</p>
            </div>
            <div>
              <p className="text-derby-gold font-serif text-xl font-bold">
                SDF
              </p>
              <p className="text-white/60 text-sm mt-1">Airport Code</p>
            </div>
            <div>
              <p className="text-derby-gold font-serif text-xl font-bold">
                Eastern
              </p>
              <p className="text-white/60 text-sm mt-1">Time Zone (ET)</p>
            </div>
            <div>
              <p className="text-derby-gold font-serif text-xl font-bold">
                Ohio River
              </p>
              <p className="text-white/60 text-sm mt-1">Waterfront City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Louisville Map */}
      <section className="max-w-4xl mx-auto px-4 pt-12">
        <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
          Louisville at a Glance
        </h2>
        <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50400!2d-85.78!3d38.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690b1ab35bd511%3A0xd4e12ae9de1de886!2sLouisville%2C%20KY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Louisville, Kentucky showing key areas for visitors"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-4 text-sm mb-8">
          <div className="bg-derby-cream rounded-lg p-3 text-center">
            <p className="font-semibold text-derby-green">Downtown</p>
            <p className="text-gray-600 text-xs">Hotels, dining, Whiskey Row</p>
          </div>
          <div className="bg-derby-cream rounded-lg p-3 text-center">
            <p className="font-semibold text-derby-green">NuLu</p>
            <p className="text-gray-600 text-xs">Trendy restaurants, galleries</p>
          </div>
          <div className="bg-derby-cream rounded-lg p-3 text-center">
            <p className="font-semibold text-derby-green">Churchill Downs</p>
            <p className="text-gray-600 text-xs">5 mi south of downtown</p>
          </div>
          <div className="bg-derby-cream rounded-lg p-3 text-center">
            <p className="font-semibold text-derby-green">SDF Airport</p>
            <p className="text-gray-600 text-xs">7 mi south of downtown</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Why Visit Louisville */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Why Louisville Is Worth Visiting
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Situated on the banks of the Ohio River at the border of Kentucky
            and Indiana, Louisville has quietly evolved into one of the most
            dynamic cities in the American South. While the Kentucky Derby draws
            international attention every May, the city offers compelling reasons
            to visit any time of year. Louisville combines the warmth and pace of
            a mid-sized Southern city with cultural offerings that rival
            destinations twice its size.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The bourbon renaissance has transformed Louisville into the
            undisputed capital of America&rsquo;s native spirit, with more than a
            dozen distilleries operating within city limits. The culinary scene
            has exploded with James Beard Award recognition, farm-to-table
            restaurants, and a food culture rooted in both Southern tradition and
            global innovation. Add in a flourishing arts community, walkable
            historic neighborhoods, and some of the friendliest locals
            you&rsquo;ll meet anywhere, and Louisville consistently punches
            above its weight as a travel destination.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you are planning a trip around the Kentucky Derby, mapping
            out a bourbon pilgrimage, or simply looking for a long-weekend
            getaway with outstanding food and genuine character, Louisville
            delivers. This guide covers everything you need to know about the
            best things to do in Louisville and how to make the most of your
            visit.
          </p>
        </section>

        {/* Top Attractions */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Top Louisville Attractions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Louisville&rsquo;s attractions span history, sports, culture, and
            the outdoors. Many are clustered in the downtown core along Main
            Street and the waterfront, making it easy to visit several in a
            single day. Here are the must-see Louisville Kentucky attractions
            that belong on every visitor&rsquo;s itinerary.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Kentucky Derby Museum at Churchill Downs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Located at the gates of Churchill Downs, the Kentucky Derby
                Museum is the definitive experience for understanding the
                history, pageantry, and athletic glory of the Run for the Roses.
                The museum features a 360-degree immersive theater that places
                you in the middle of a Derby race, interactive exhibits on
                Thoroughbred breeding and training, galleries of historic
                memorabilia, and behind-the-scenes walking tours of the
                legendary racetrack. General admission includes a guided tour of
                the Churchill Downs grounds, including the paddock area and the
                iconic twin spires. It is open year-round and is a must-visit
                even if you are not in town for Derby Day.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Louisville Slugger Museum & Factory
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You cannot miss it &mdash; a 120-foot steel baseball bat leans
                against the building on Main Street. The Louisville Slugger
                Museum and Factory is one of the most popular Louisville
                attractions for families and sports fans alike. The guided
                factory tour walks you through the process of crafting the
                iconic wooden bats used by Major League Baseball players, from
                raw timber billets to the finished product. Every visitor
                receives a miniature souvenir bat at the end of the tour.
                Exhibits showcase legendary bats used by Babe Ruth, Derek Jeter,
                and other Hall of Famers, and the batting cages let you take
                your own swings.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Muhammad Ali Center
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Louisville&rsquo;s most famous native son is celebrated at the
                Muhammad Ali Center, a museum and cultural center on the
                downtown waterfront. Far more than a boxing museum, the Ali
                Center explores the champion&rsquo;s six core principles:
                confidence, conviction, dedication, giving, respect, and
                spirituality. Interactive exhibits let visitors test their boxing
                reflexes, explore the civil rights movement, and understand
                Ali&rsquo;s global impact beyond the ring. The multi-level
                building features stunning architecture with panoramic views of
                the Ohio River, and rotating exhibitions address themes of social
                justice and personal courage that remain deeply relevant today.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Big Four Bridge & Waterfront Park
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The Big Four Bridge is a repurposed railroad bridge that now
                serves as a stunning pedestrian and bicycle crossing over the
                Ohio River, connecting Louisville&rsquo;s Waterfront Park to
                Jeffersonville, Indiana. At night, the bridge is illuminated
                with color-changing LED lights that make it one of the most
                photographed landmarks in Louisville. Waterfront Park stretches
                along 85 acres of the Ohio River shoreline and offers walking
                trails, splash pads for kids, event lawns, public art
                installations, and spectacular sunset views. The park hosts
                concerts, festivals, and outdoor yoga classes throughout the
                warmer months, and serves as a central gathering point for
                locals and visitors alike.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Louisville Mega Cavern
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Beneath the streets of Louisville lies a 100-acre underground
                limestone cavern that has been converted into a one-of-a-kind
                adventure park. Louisville Mega Cavern offers underground zip
                lines, a ropes challenge course, electric bike tours through
                miles of subterranean passages, and even a tram tour that covers
                the cavern&rsquo;s history as a limestone quarry. During the
                holiday season, Lights Under Louisville transforms the space
                into an underground drive-through light show with millions of
                holiday lights spanning over 30 underground acres. It is one of
                the most unique things to do in Louisville that you will not find
                in any other American city.
              </p>
            </div>
          </div>
        </section>

        {/* Culinary Scene */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Louisville&rsquo;s Culinary Scene
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Louisville has earned a reputation as one of the top food cities in
            the American South, with multiple James Beard Award semifinalists and
            winners drawing national attention to the city&rsquo;s dining scene.
            The culinary identity here is rooted in Southern comfort food
            elevated by local farms, bourbon-inspired creativity, and a growing
            community of chefs who are redefining what Louisville cuisine means.
          </p>

          <div className="bg-derby-cream rounded-xl p-6 sm:p-8 mb-6">
            <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
              Signature Louisville Foods You Must Try
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <div>
                  <p className="font-semibold text-derby-green">
                    The Hot Brown
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Invented at The Brown Hotel in 1926, the Hot Brown is
                    Louisville&rsquo;s signature dish: an open-faced turkey
                    sandwich smothered in Mornay sauce and bacon, broiled until
                    golden. The original version at The Brown Hotel&rsquo;s
                    lobby bar remains the gold standard, and variations appear on
                    menus across the city. No Louisville travel guide is complete
                    without recommending you try the original.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <div>
                  <p className="font-semibold text-derby-green">Derby Pie</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A chocolate-and-walnut pie that is synonymous with Kentucky
                    Derby season, though Louisville bakeries serve it year-round.
                    The original recipe from Kern&rsquo;s Kitchen is a closely
                    guarded secret (and a trademarked name), but countless local
                    interpretations feature bourbon-spiked chocolate, toasted
                    pecans, and flaky pastry crusts that make it an essential
                    Louisville dessert.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <div>
                  <p className="font-semibold text-derby-green">
                    Bourbon-Infused Cuisine
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Louisville chefs work bourbon into everything from glazed
                    salmon and smoked pork belly to ice cream, caramel sauces,
                    and cocktail-inspired appetizers. The city&rsquo;s proximity
                    to dozens of distilleries means restaurants have access to
                    rare barrels and private selections that appear in seasonal
                    menus and tasting dinners throughout the year.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <div>
                  <p className="font-semibold text-derby-green">
                    James Beard Award Winners
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Louisville has become a regular on the James Beard Award
                    semifinalist lists, with restaurants earning recognition for
                    outstanding hospitality and culinary innovation. The
                    city&rsquo;s dining scene spans farm-to-table fine dining,
                    inventive Southern comfort food, global cuisines along the
                    Bardstown Road corridor, and a fast-growing craft brewery and
                    cocktail bar community.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            For a deeper look at where to eat, see our{" "}
            <Link
              href="/louisville/restaurants"
              className="text-derby-green font-semibold hover:text-derby-gold transition-colors underline underline-offset-2"
            >
              Louisville restaurants guide
            </Link>{" "}
            for specific recommendations organized by neighborhood and cuisine
            type.
          </p>
        </section>

        {/* Bourbon District */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Bourbon District & Whiskey Row
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kentucky produces approximately 95 percent of the world&rsquo;s
            bourbon, and Louisville sits at the heart of that industry. The
            city&rsquo;s historic Main Street, known as Whiskey Row, was once
            lined with bourbon warehouses and distillery offices in the 1800s.
            After decades of decline, Whiskey Row has been dramatically restored
            and is now one of the hottest stretches in downtown Louisville, with
            working distilleries, tasting rooms, bourbon-focused restaurants, and
            craft cocktail bars packed into a few walkable blocks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Major bourbon brands including Evan Williams, Old Forester, Angel's
            Envy, Rabbit Hole, and Michter&rsquo;s operate distillery
            experiences along or near Whiskey Row. Tours range from
            behind-the-scenes production walkthroughs to single-barrel tasting
            sessions and cocktail masterclasses. The Urban Bourbon Trail
            connects over 40 bars and restaurants across Louisville that each
            carry at least 50 bourbons, and visitors who complete enough stops on
            the trail earn a commemorative t-shirt.
          </p>
          <div className="bg-derby-green/5 border border-derby-green/20 rounded-xl p-6 mb-4">
            <p className="text-derby-green font-semibold mb-2">
              Explore Our Full Bourbon Guides
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/bourbon"
                className="inline-block bg-derby-green text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-derby-green-light transition-colors"
              >
                Bourbon Trail Overview
              </Link>
              <Link
                href="/bourbon/whiskey-row"
                className="inline-block bg-white text-derby-green text-sm font-medium px-5 py-2.5 rounded-lg border border-derby-green hover:bg-derby-green hover:text-white transition-colors"
              >
                Whiskey Row Guide
              </Link>
              <Link
                href="/bourbon/urban-bourbon-trail"
                className="inline-block bg-white text-derby-green text-sm font-medium px-5 py-2.5 rounded-lg border border-derby-green hover:bg-derby-green hover:text-white transition-colors"
              >
                Urban Bourbon Trail
              </Link>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Louisville Neighborhoods to Explore
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            One of Louisville&rsquo;s greatest strengths is its collection of
            distinct neighborhoods, each with its own personality, dining scene,
            and streetscape. Spending time in different neighborhoods gives you a
            far richer picture of the city than staying exclusively in the hotel
            district. Here are the five neighborhoods that visitors should
            prioritize.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Downtown & Museum Row
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The heart of the city along Main Street, home to the Louisville
                Slugger Museum, Frazier History Museum, Whiskey Row distilleries,
                the KFC Yum! Center arena, and the waterfront. Most visitors
                start here, and the concentration of attractions makes it easy
                to fill an entire day on foot. Fourth Street Live is the
                city&rsquo;s main entertainment district with restaurants, bars,
                and live music venues.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                NuLu (East Market District)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                NuLu has become Louisville&rsquo;s trendiest neighborhood,
                spanning East Market Street with independent boutiques, art
                galleries, craft coffee shops, and some of the city&rsquo;s best
                restaurants. Converted warehouses house creative businesses and
                loft apartments. The Logan Street Market is a European-style
                food hall with local vendors. NuLu is walkable, photogenic, and
                perfect for an afternoon of browsing, eating, and people
                watching.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                The Highlands
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Running along Bardstown Road and Baxter Avenue, The Highlands is
                Louisville&rsquo;s bohemian heart. This is where you find
                eclectic restaurants ranging from Ethiopian to Vietnamese,
                independent bookstores, vintage shops, dive bars with live music,
                and a laid-back atmosphere that feels distinctly Louisville. The
                Highlands draws a younger, creative crowd and is the best
                neighborhood for bar-hopping and late-night dining.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Germantown & Schnitzelburg
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                South of downtown, these neighborhoods reflect Louisville&rsquo;s
                German immigrant heritage with shotgun houses, corner pubs, and
                traditional bakeries mixed alongside trendy new restaurants and
                breweries. Germantown has seen a culinary renaissance in recent
                years, and the area around Goss Avenue features craft distillers,
                local coffee roasters, and neighborhood eateries that cater to
                residents more than tourists, giving it an authentic local feel.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:col-span-2">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Portland
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Louisville&rsquo;s oldest neighborhood, Portland is an
                up-and-coming area along the western waterfront that offers a
                glimpse of the city&rsquo;s working-class roots and emerging
                creative energy. The Portland Museum documents the
                neighborhood&rsquo;s rich history, and new murals, galleries,
                and artist studios have begun appearing in former industrial
                spaces. Portland is less polished than NuLu or The Highlands,
                but that rawness is part of its appeal for visitors seeking
                something beyond the typical tourist circuit.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            For a more detailed neighborhood-by-neighborhood guide, visit our{" "}
            <Link
              href="/louisville/neighborhoods"
              className="text-derby-green font-semibold hover:text-derby-gold transition-colors underline underline-offset-2"
            >
              Louisville neighborhoods page
            </Link>
            .
          </p>
        </section>

        {/* Arts & Culture */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Arts & Culture Scene
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Louisville supports a vibrant arts community that ranges from
            world-class performing arts to grassroots gallery walks. The
            Kentucky Center for the Performing Arts hosts touring Broadway shows,
            the Louisville Orchestra, the Louisville Ballet, and the Kentucky
            Opera &mdash; making it one of the few mid-sized American cities
            with a professional company in all four major performing arts
            disciplines. Actors Theatre of Louisville is nationally celebrated
            for the Humana Festival of New American Plays, which has premiered
            works that have gone on to Broadway and regional theaters across the
            country.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The visual arts thrive in Louisville&rsquo;s gallery districts,
            particularly along East Market Street in NuLu and in the Portland
            neighborhood. The Speed Art Museum, located on the University of
            Louisville campus, is Kentucky&rsquo;s oldest and largest art museum,
            with collections spanning ancient Egyptian artifacts to contemporary
            installations. Monthly First Friday Trolley Hops bring visitors to
            galleries, studios, and pop-up exhibitions throughout downtown and
            NuLu, often paired with live music and street food.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Louisville&rsquo;s music scene is equally diverse, with venues
            hosting everything from bluegrass and country to indie rock, jazz,
            and hip-hop. Headliners Music Hall, Mercury Ballroom, and the
            intimate Zanzabar are favorite live music spots, while the annual
            Forecastle Festival draws national acts to Waterfront Park each
            summer.
          </p>
        </section>

        {/* Best Times to Visit */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Best Times to Visit Louisville
          </h2>
          <div className="space-y-4">
            <div className="bg-derby-cream rounded-lg p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Spring (April &ndash; May)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Peak season. Derby Week dominates late April through the first
                Saturday in May, when the city buzzes with events, parties, and
                international visitors. Hotel rates are at their highest, but the
                energy is unmatched. Temperatures range from the mid-60s to
                upper 70s. Book lodging months in advance if visiting during
                Derby Week.
              </p>
            </div>
            <div className="bg-derby-cream rounded-lg p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Summer (June &ndash; August)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Hot and humid with temperatures frequently above 90 degrees, but
                Louisville compensates with outdoor festivals, extended
                waterfront hours, and patio dining. The Forecastle Festival in
                July and the Kentucky State Fair in August are major draws.
                Hotel prices moderate after Derby season.
              </p>
            </div>
            <div className="bg-derby-cream rounded-lg p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Fall (September &ndash; November)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Many locals consider autumn the best time to visit. Comfortable
                temperatures in the 50s through 70s, stunning fall foliage along
                the river and in Cherokee Park, the Kentucky Bourbon Festival in
                Bardstown (a short drive from Louisville), and smaller crowds at
                major attractions. An excellent time for distillery tours and
                outdoor dining.
              </p>
            </div>
            <div className="bg-derby-cream rounded-lg p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Winter (December &ndash; March)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The quietest season, with temperatures in the 30s and 40s. Hotel
                rates are at their lowest, making it a budget-friendly time to
                visit. Lights Under Louisville at the Mega Cavern is a highlight
                of the holiday season. Indoor attractions like museums and
                distillery tours are available year-round, and Louisville&rsquo;s
                restaurant scene does not slow down.
              </p>
            </div>
          </div>
        </section>

        {/* Practical Info */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Quick Facts for Visitors
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-derby-green whitespace-nowrap">
                    Location
                  </td>
                  <td className="py-3 text-gray-700">
                    North-central Kentucky, on the Ohio River at the Indiana
                    border
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-derby-green whitespace-nowrap">
                    Population
                  </td>
                  <td className="py-3 text-gray-700">
                    Approximately 633,000 (city), 1.4 million (metro area)
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-derby-green whitespace-nowrap">
                    Airport
                  </td>
                  <td className="py-3 text-gray-700">
                    Louisville Muhammad Ali International Airport (SDF), located
                    approximately 15 minutes south of downtown
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-derby-green whitespace-nowrap">
                    Time Zone
                  </td>
                  <td className="py-3 text-gray-700">
                    Eastern Time (ET / UTC-5, UTC-4 during daylight saving)
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-derby-green whitespace-nowrap">
                    Driving Distances
                  </td>
                  <td className="py-3 text-gray-700">
                    Cincinnati (100 mi), Nashville (175 mi), Indianapolis (115
                    mi), Lexington (80 mi)
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-derby-green whitespace-nowrap">
                    Nickname
                  </td>
                  <td className="py-3 text-gray-700">
                    Derby City, River City, The Ville, Falls City
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-derby-green whitespace-nowrap">
                    Pronunciation
                  </td>
                  <td className="py-3 text-gray-700">
                    Locals say &ldquo;LOO-uh-vul&rdquo; or
                    &ldquo;LOO-ee-vil&rdquo; &mdash; never
                    &ldquo;Lewis-ville&rdquo;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Louisville
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Planning CTA */}
        <section className="bg-derby-green rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            Start Planning Your Louisville Trip
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Whether you are visiting for the Kentucky Derby or exploring on your
            own schedule, our Louisville guides cover everything from hotels and
            restaurants to getting around the city.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/louisville/where-to-stay"
              className="inline-block bg-derby-gold text-derby-green-dark font-bold px-8 py-3.5 rounded-lg hover:bg-derby-gold-light transition-colors"
            >
              Where to Stay
            </Link>
            <Link
              href="/louisville/restaurants"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              Where to Eat
            </Link>
            <Link
              href="/louisville/getting-here"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              Getting Here
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
