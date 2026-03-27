import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title:
    "What to Wear to the Kentucky Derby | Dress Code Guide (2026)",
  description:
    "Complete guide to Kentucky Derby dress code for women and men. What to wear by section at Churchill Downs, color tips, shoe advice, weather prep, and what NOT to wear on Derby Day.",
  keywords:
    "what to wear to kentucky derby, derby dress code, kentucky derby outfit, derby day fashion, what to wear churchill downs, derby attire",
};

const faqItems = [
  {
    question: "Is there a strict dress code at the Kentucky Derby?",
    answer:
      "There is no single enforced dress code for the entire Kentucky Derby. Churchill Downs does not turn away guests based on clothing in general admission or infield areas. However, certain premium sections such as Millionaires Row and luxury suites may enforce a smart-casual or business-casual minimum. The grandstand and clubhouse have strong traditions of dressing up, and most attendees in those sections wear cocktail attire or better. The infield is far more relaxed, and casual clothing is perfectly acceptable there.",
  },
  {
    question: "Can I wear jeans to the Kentucky Derby?",
    answer:
      "You can wear jeans in the infield and general admission areas without any issue. Many infield attendees wear jeans, shorts, or casual summer clothing. However, jeans are uncommon in the grandstand and clubhouse sections, where most guests opt for dresses, suits, or sport coats. If you have premium or reserved seating, dressing up is strongly recommended to match the atmosphere and traditions of those areas.",
  },
  {
    question: "What colors should I wear to the Kentucky Derby?",
    answer:
      "Spring pastels, bright colors, and floral prints are the most popular choices for the Kentucky Derby. Red is a traditional power color for Derby Saturday, symbolizing the red roses in the winner's garland. Pink is the signature color for Kentucky Oaks on Friday. Beyond those traditions, virtually any vibrant spring color works well. Avoid dark, heavy winter colors like black or charcoal unless they are part of an intentionally stylish ensemble.",
  },
  {
    question: "Do I need to wear a hat to the Kentucky Derby?",
    answer:
      "Wearing a hat is not required at the Kentucky Derby, but it is one of the most beloved traditions. The vast majority of women in the grandstand and clubhouse wear hats or fascinators, and many men wear fedoras or Panama hats. In the infield, hats are less universal but still popular. Going without a hat will not prevent entry, but wearing one enhances the experience and makes for better photos.",
  },
  {
    question: "What kind of shoes should I wear to the Derby?",
    answer:
      "Wedges are strongly recommended over stiletto heels for women because Churchill Downs has grassy areas, brick walkways, and uneven surfaces that make thin heels impractical and uncomfortable. Block heels, platform sandals, and dressy flats are also excellent choices. For men, loafers, oxfords, or clean dress shoes work well. In the infield, comfortable sneakers or casual shoes are perfectly acceptable since you will be standing and walking for hours.",
  },
];

export default function WhatToWearPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Attend", href: "/attend" },
          { name: "What to Wear", href: "/attend/what-to-wear" },
        ]}
      />
      <ArticleJsonLd
        title="What to Wear to the Kentucky Derby: The Complete Dress Code Guide"
        description="Everything you need to know about dressing for the Kentucky Derby, from women's cocktail dresses and men's suits to infield casual wear, colors, shoes, and weather preparation."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="bg-derby-green text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-derby-gold font-semibold tracking-widest uppercase text-sm mb-4">
            Derby Day Fashion
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            What to Wear to the Kentucky Derby
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
            The Kentucky Derby is as much a fashion event as a horse race. From
            elegant cocktail dresses and tailored suits to relaxed infield
            styles, here is everything you need to know about dressing for
            Derby Day at Churchill Downs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Dress Code Philosophy */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            The Kentucky Derby Dress Code Philosophy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            One of the most common questions from first-time Derby attendees is
            whether there is a strict dress code. The honest answer is that it
            depends entirely on where you are sitting. Churchill Downs does not
            enforce a single dress code across the entire venue, and what you
            wear should be guided by your seating section, personal comfort, and
            how much you want to embrace the tradition of dressing up for the
            races.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The grandstand and clubhouse sections have a long-standing tradition
            of elegant attire. Most women wear cocktail dresses, fascinators or
            wide-brim hats, and heels, while most men wear suits or sport coats
            with ties. Premium areas like Millionaires Row and The Mansion take
            the formality up another level, with some guests wearing designer
            outfits that would be at home on a red carpet.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The infield, by contrast, is a party. Casual clothing, creative
            costumes, comfortable shoes, and a relaxed attitude define the
            infield experience. There is no wrong answer in the infield as long
            as you are prepared for a long day outdoors. Wherever you are seated,
            the key principle is the same: dress for the experience you want to
            have and the weather you are likely to encounter.
          </p>
        </section>

        {/* Women's Guide by Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Women&rsquo;s Derby Dress Code by Section
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your seating section is the single biggest factor in determining
            what to wear. Here is a section-by-section breakdown of
            women&rsquo;s attire at Churchill Downs.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Grandstand: Cocktail Elegance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The grandstand is where classic Derby fashion shines. A
                knee-length or midi cocktail dress is the most popular choice,
                paired with a statement hat or fascinator and heels. Fit-and-flare
                dresses, A-line silhouettes, and wrap dresses in spring prints or
                solid pastels photograph beautifully against the green backdrop of
                the track. Accessorize with a clutch or small crossbody bag, bold
                earrings, and a hat that complements your dress without blocking
                the view of guests behind you. Wedge heels are practical because
                you will walk on grass, brick, and pavement throughout the day.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Clubhouse &amp; Millionaires Row: Upscale Sophistication
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The clubhouse and premium sections call for your most polished
                look. Think designer cocktail dresses, tailored jumpsuits, or
                chic midi skirts with structured blazers. Fabrics like silk, lace,
                and crepe elevate the look beyond standard cocktail attire.
                Millionaires Row guests often wear outfits that rival red-carpet
                fashion, with custom hats, statement jewelry, and designer heels.
                If you are attending a private suite or The Mansion, treat the
                dress code as you would a high-end garden party or upscale
                wedding. A coordinated hat-and-outfit combination signals that you
                understand the tradition and atmosphere of these premium areas.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Infield: Casual, Fun, and Festival-Ready
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The infield is the Derby&rsquo;s festival zone, and the dress
                code reflects that energy. Sundresses, rompers, denim shorts with
                a fun top, and casual jumpsuits are all popular choices. Comfort
                is king in the infield &mdash; you will be standing, walking on
                grass, and navigating crowds for hours. Many women wear creative
                or themed outfits, from matching group costumes to DIY Derby hats
                that are more fun than formal. Flat sandals, sneakers, or boots
                are far more practical than heels. Bring sunglasses, and
                consider a hat with function over fashion &mdash; sun protection
                matters when you are outdoors all day.
              </p>
            </div>
          </div>
        </section>

        <ContentImage
          src="https://images.pexels.com/photos/30725894/pexels-photo-30725894.jpeg?w=800"
          alt="Elegant woman in a pink dress wearing a fascinator at a bright outdoor spring event"
          caption="Classic Derby fashion pairs vibrant cocktail dresses with statement hats and accessories"
          aspectRatio="landscape"
        />

        {/* Men's Guide by Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Men&rsquo;s Derby Dress Code by Section
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Men&rsquo;s Derby fashion has evolved from stuffy formality into a
            celebration of color and personal style. Here is what to wear by
            section.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="bg-derby-cream rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Grandstand
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A suit or blazer with dress pants is the standard for men in the
                grandstand. A full suit in a light spring color like tan, light
                gray, or light blue is a strong choice. Alternatively, a sport
                coat or blazer paired with contrasting chinos or dress pants
                works well. Add a tie or bow tie for a polished finish. A
                pocket square in a coordinating color and a fedora or Panama hat
                complete the look. Dress shoes or loafers are the standard
                footwear choice.
              </p>
            </div>

            <div className="bg-derby-cream rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Clubhouse
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The clubhouse calls for a full suit, and this is where you can
                make a sartorial statement. Seersucker suits, pastel-colored
                suits, bold plaid sport coats, and custom-tailored ensembles are
                all welcomed and celebrated. Pair with a quality tie or bow tie,
                polished dress shoes, and a well-chosen hat. The clubhouse is
                where men&rsquo;s Derby fashion truly thrives, and guests often
                coordinate their outfits with their partners for a cohesive look.
              </p>
            </div>

            <div className="bg-derby-cream rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Infield
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The infield is casual territory. Khaki shorts or chinos with
                a polo shirt, a button-down with rolled sleeves, or a fun
                printed shirt all work well. Some men opt for a sport coat over
                a casual outfit to add a touch of Derby spirit without full
                formality. Boat shoes, clean sneakers, or casual loafers are
                comfortable choices for a day on your feet. Sunglasses and a
                casual hat for sun protection are practical additions.
              </p>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Derby Day Colors: What to Choose
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Color is central to Kentucky Derby fashion. The right palette makes
            your outfit pop in photos and shows that you understand the
            traditions of the event.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-red-800 mb-2">
                Red for Derby Saturday
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Red is the traditional power color of Kentucky Derby Saturday,
                echoing the red roses draped over the winning horse. From deep
                crimson to bright cherry to dusty rose, red in any shade
                connects your outfit to the signature symbol of the race. A red
                dress, a red hat, or even red accessories signal that you are
                dressing with intention and tradition in mind.
              </p>
            </div>
            <div className="bg-pink-50 border border-pink-200 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-pink-800 mb-2">
                Pink for Kentucky Oaks Friday
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Kentucky Oaks, the fillies-only race held the day before the
                Derby, has adopted pink as its signature color to support breast
                and ovarian cancer awareness. Wearing pink on Oaks Friday shows
                solidarity with the cause and connects you to the sea of pink
                that fills Churchill Downs on that day.
              </p>
            </div>
          </div>

          <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
            <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
              Spring Colors That Work
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Pastels:</strong> Mint, lavender, blush, baby blue,
                  and soft yellow are quintessential Derby colors that
                  photograph beautifully in the May sunlight. These hues work
                  for both women&rsquo;s dresses and men&rsquo;s suits or
                  blazers.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Bright spring colors:</strong> Coral, turquoise,
                  fuchsia, kelly green, and cobalt blue make bold statements and
                  stand out in the grandstand crowd. These vivid hues are
                  popular choices for those who want to be noticed.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Florals and prints:</strong> Floral patterns are a
                  natural fit for a spring horse race. Bold, large-scale florals
                  are trending, while classic small prints remain timeless.
                  Geometric and abstract prints also work well when the colors
                  are bright and spring-appropriate.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1599012305187-2ce93c1649f8?w=800&q=75"
          alt="Man in a tailored suit with vest and tie at an outdoor event"
          caption="A polished suit with a vest and tie is the standard for men in the grandstand and clubhouse"
          aspectRatio="landscape"
        />

        {/* Shoes */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Derby Day Shoe Guide
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Shoe choice can make or break your Derby experience. Churchill Downs
            covers a massive area, and you will walk far more than you expect.
            The venue includes grass, brick, pavement, stairs, and packed-dirt
            paths. Choosing the right shoes is about balancing style with
            all-day comfort.
          </p>
          <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Wedges over stilettos:</strong> Wedge heels distribute
                  your weight across a wider surface, preventing you from sinking
                  into grass or getting stuck in brick gaps. They are far more
                  comfortable for a full day on your feet and look just as
                  polished with a cocktail dress or jumpsuit.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Block heels and platforms:</strong> Chunky block heels
                  and platform sandals offer height without sacrificing stability.
                  These styles are trending at the Derby and pair well with both
                  dresses and jumpsuits.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Dressy flats:</strong> Pointed-toe flats, embellished
                  ballet flats, and mule slides are elegant options that let you
                  walk all day without pain. These are especially smart choices
                  for anyone who prioritizes comfort.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Men&rsquo;s footwear:</strong> Loafers, oxfords, and
                  monk-strap shoes in brown or tan complement spring suits
                  beautifully. Avoid heavy black dress shoes unless your suit
                  calls for them. In the infield, clean boat shoes or fashion
                  sneakers are acceptable.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Weather Prep */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Weather Preparation for Derby Day
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kentucky Derby takes place on the first Saturday in May, and
            Louisville weather in early May can be unpredictable. Temperatures
            typically range from the low 60s to the low 80s Fahrenheit,
            but rain is always a possibility. Historically, some of the most
            memorable Derby Days have been rainy, and experienced attendees plan
            accordingly.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-serif text-base font-bold text-derby-green mb-2">
                If It&rsquo;s Hot and Sunny
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Choose lightweight, breathable fabrics like cotton, linen, or
                chiffon. Sunscreen is essential even if you are in covered
                seating, since you will likely spend time walking outdoors. A
                wide-brim hat serves double duty as fashion and sun protection.
                Stay hydrated throughout the day, especially if you are in the
                infield with limited shade.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-serif text-base font-bold text-derby-green mb-2">
                If Rain Is in the Forecast
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pack a clear or stylish poncho that fits over your outfit and
                hat without crushing either. Clear ponchos are popular because
                they protect your clothes while still showing off your outfit.
                Bring waterproof or water-resistant shoes &mdash; grass becomes
                mud quickly at Churchill Downs. A small umbrella is allowed but
                can block views of other guests. Rain boots with a heel have
                become a popular fashion-forward solution for rainy Derby Days.
              </p>
            </div>
          </div>
        </section>

        {/* What NOT to Wear */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            What NOT to Wear to the Kentucky Derby
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While the Derby is a celebration of personal expression, there are
            some choices that experienced attendees know to avoid. These tips
            apply primarily to the grandstand and premium sections; the infield
            is far more forgiving.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 sm:p-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Stiletto heels:</strong> Thin heels sink into grass,
                  catch in brick, and become painful after hours of standing and
                  walking. Choose wedges, block heels, or flats instead.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>All black or dark winter colors:</strong> Unless you
                  are making an intentional fashion statement, all-black outfits
                  look out of place amid the sea of spring pastels and bright
                  colors. Save the dark palette for other events.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Overly revealing clothing in premium sections:</strong>{" "}
                  Very short hemlines, plunging necklines, and club-style
                  outfits do not match the traditional atmosphere of the
                  grandstand, clubhouse, or Millionaires Row. Save those looks
                  for the after-parties.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>New shoes you have not broken in:</strong> Derby Day
                  involves hours of standing and walking. New shoes that have
                  not been worn before are a recipe for blisters and misery.
                  Break in your Derby shoes at least a week before the race.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Heavy fabrics and layers:</strong> May in Louisville
                  can be warm and humid. Wool suits, heavy blazers, and layered
                  outfits will leave you overheated. Stick to linen, cotton,
                  and lightweight blends.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Oversized bags:</strong> Churchill Downs enforces a
                  clear bag policy. Large purses and backpacks are not permitted
                  inside the venue. Bring a small clutch or a clear bag that
                  meets the size requirements.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Derby Dress Code
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

        {/* CTA Section */}
        <section className="bg-derby-green rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            Complete Your Derby Day Look
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Now that you know what to wear, explore our hat guide for the
            perfect headwear and dive into the full story of Derby fashion
            through the decades.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/attend/hats"
              className="inline-block bg-derby-gold text-derby-green-dark font-bold px-8 py-3.5 rounded-lg hover:bg-derby-gold-light transition-colors"
            >
              Derby Hat Guide
            </Link>
            <Link
              href="/culture/fashion"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              Derby Fashion History
            </Link>
            <Link
              href="/attend/first-timers"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              First-Timer&rsquo;s Guide
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
