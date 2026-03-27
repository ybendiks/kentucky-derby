import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentImage from "@/components/ContentImage";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title:
    "Kentucky Derby Hats | Derby Hat Ideas for Women & Men (2026 Guide)",
  description:
    "The complete guide to Kentucky Derby hats. Derby hat ideas for women and men, hat etiquette at Churchill Downs, where to buy, DIY tips, and how to choose the perfect hat for Derby Day.",
  keywords:
    "kentucky derby hats, derby hat ideas, derby hats for women, derby hats for men, kentucky derby fascinators, derby day hats",
};

const faqItems = [
  {
    question: "Do you have to wear a hat to the Kentucky Derby?",
    answer:
      "No, wearing a hat to the Kentucky Derby is not required by any official dress code. However, hats are one of the most celebrated traditions at Churchill Downs, and the vast majority of attendees in the grandstand and premium seating areas do wear them. In the infield, hats are less common but still popular. Going without a hat will not get you turned away, but wearing one is a major part of the experience and makes for much better photos.",
  },
  {
    question: "How big should a Kentucky Derby hat be?",
    answer:
      "For women's Derby hats, the traditional wide-brim style has a brim measuring 4 to 6 inches or more, and many statement hats are even larger. However, if you are sitting in the grandstand, be considerate of the people behind you and avoid extremely oversized brims that block sight lines. Fascinators and smaller headpieces are excellent alternatives for reserved seating sections. In the infield and general admission areas, there is no practical size limit and the bigger and more creative the better.",
  },
  {
    question:
      "What is the difference between a fascinator and a Derby hat?",
    answer:
      "A fascinator is a smaller, lighter headpiece that attaches to the hair with a clip, comb, or headband rather than sitting on top of the head like a traditional hat. Fascinators typically feature feathers, netting, flowers, or other decorative elements and sit asymmetrically on one side of the head. A Derby hat is a full-sized hat with a crown and brim that rests on the head. Both are appropriate for the Kentucky Derby, though fascinators are more practical for reserved seating areas and are currently trending among younger attendees.",
  },
  {
    question: "How much does a Kentucky Derby hat cost?",
    answer:
      "Kentucky Derby hats range widely in price depending on whether you buy off the rack or commission a custom design. Mass-produced Derby hats from department stores or online retailers start around $30 to $75. Mid-range hats from specialty milliners typically run $150 to $400. Custom-designed hats from established milliners can cost $500 to $2,000 or more, depending on the complexity of the design, materials used, and the reputation of the maker. DIY hats made from a blank hat base and craft supplies can be assembled for $50 to $100.",
  },
];

export default function HatsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Attend", href: "/attend" },
          { name: "Derby Hats", href: "/attend/hats" },
        ]}
      />
      <ArticleJsonLd
        title="Kentucky Derby Hats: The Complete Guide to Derby Hat Ideas"
        description="Everything you need to know about Kentucky Derby hats, from women's wide-brim styles and fascinators to men's fedoras and Panama hats. Includes hat etiquette, where to buy, and DIY tips."
        datePublished="2025-01-20"
        dateModified="2026-03-01"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="text-white py-20 sm:py-28 relative overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/2369447/pexels-photo-2369447.jpeg?w=1920"
          alt="Woman wearing a colorful wide-brim hat and floral dress at an outdoor spring event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <p className="text-derby-gold font-semibold tracking-widest uppercase text-sm mb-4">
            Derby Day Fashion
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Kentucky Derby Hats: The Complete Guide
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
            No Derby outfit is complete without the perfect hat. From
            show-stopping wide-brim designs to sleek fascinators and classic
            men&rsquo;s fedoras, here is everything you need to know about
            choosing, buying, and wearing a Kentucky Derby hat.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* History & Tradition */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Why Hats Are a Derby Tradition
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The tradition of wearing elaborate hats to the Kentucky Derby dates
            back to the very first race in 1875. In the late nineteenth century,
            horse racing was a premier social event for America&rsquo;s upper
            class, and both women and men were expected to dress in their finest
            attire. Hats were an essential part of formal dress during that era,
            and wearing an impressive hat at Churchill Downs became a way to
            signal social standing and personal style.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As the decades passed, Derby hats evolved from functional accessories
            into artistic statements. By the mid-twentieth century, women&rsquo;s
            hats at the Derby had become increasingly ornate, and the tradition
            took on a life of its own &mdash; separate from broader fashion
            trends that were moving away from hats in everyday life. The Kentucky
            Derby became one of the few remaining occasions in American culture
            where extravagant hats were not only accepted but expected and
            celebrated.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, the hats are as much a spectacle as the horse race itself.
            Media coverage routinely features the most creative and outlandish
            designs, and many attendees spend months planning and commissioning
            their headwear. The tradition transcends age, gender, and fashion
            sensibility. Whether you prefer a classic wide-brim in a single
            elegant color or a towering sculptural piece covered in feathers and
            roses, the Derby invites you to express yourself through your hat in
            a way that few other events in the world can match.
          </p>
        </section>

        <ContentImage
          src="https://images.pexels.com/photos/30725894/pexels-photo-30725894.jpeg?w=800"
          alt="Elegant woman in pink vintage dress wearing a fascinator at a spring outdoor event"
          caption="A well-chosen hat is the centerpiece of any Derby Day outfit"
          aspectRatio="landscape"
          priority
        />

        {/* Women's Hat Styles */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Derby Hats for Women: Styles and Ideas
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Women&rsquo;s Derby hats run the full spectrum from understated
            elegance to over-the-top artistry. The style you choose should
            reflect your personality, complement your outfit, and suit the
            section of Churchill Downs you will be sitting in. Here are the most
            popular derby hat ideas for women attending the Kentucky Derby.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Wide-Brim & Cartwheel Hats
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The wide-brim hat is the quintessential Kentucky Derby look and
                the silhouette most people picture when they think of Derby
                fashion. These hats feature dramatic brims that extend four to
                six inches or more from the crown, creating an elegant frame for
                the face. Cartwheel hats take the wide-brim concept even further
                with flat, disc-like brims that can span up to 24 inches across.
                Wide-brim hats pair beautifully with structured dresses and
                tailored suits, and they photograph exceptionally well. Choose a
                single bold color for maximum impact, or opt for a neutral base
                with decorative embellishments. These are best suited for
                premium seating areas, the paddock, and Millionaires Row where
                the grand scale of the hat matches the formality of the setting.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Fascinators
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fascinators have surged in popularity at the Derby in recent
                years, influenced in part by their prominence at British royal
                events. These smaller headpieces attach to the hair with clips,
                combs, or a thin headband, and typically sit at an angle on one
                side of the head. Fascinators feature combinations of feathers,
                netting (also called veiling), silk flowers, beads, and
                sculptural elements. They are lighter, more comfortable over a
                long day, and less likely to obstruct views in seated areas,
                making them an excellent choice for grandstand seating. Modern
                fascinators range from subtle and refined to bold and
                architectural, so there is a design for every taste.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Pillbox Hats
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Made famous by Jacqueline Kennedy in the 1960s, the pillbox hat
                is a small, round, flat-crowned hat without a brim that sits on
                the top or back of the head. Pillbox hats offer a polished,
                vintage-inspired look that works well with both classic and
                modern outfits. They are comfortable to wear all day, easy to
                transport, and pair naturally with tailored dresses, jackets, and
                pearls. For a Derby twist, look for pillbox hats adorned with
                netting, silk roses, or feather accents. This style is
                particularly flattering for those who want a sophisticated hat
                without the commitment of a wide brim.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Church Hats & Statement Pieces
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The Southern church hat tradition and Derby hat culture share
                deep roots, and many of the most memorable hats at Churchill
                Downs draw from this heritage. These are full-sized, structured
                hats with tall crowns, upturned brims, and lavish ornamentation
                including ribbons, bows, feathers, and cascading floral
                arrangements. Church-style Derby hats make an unapologetic
                statement and are favorites for attendees who want to turn heads
                in the paddock and at Derby parties. They pair well with
                bold-colored suits, midi dresses, and high heels.
              </p>
            </div>

            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Floral Arrangements & Sculptural Designs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                For those who view their hat as wearable art, the Derby is the
                stage. Some of the most photographed hats each year feature
                towering floral arrangements with silk roses, peonies, and
                hydrangeas cascading from the crown. Others incorporate
                sculptural elements like horse silhouettes, horseshoes, miniature
                jockeys, or abstract geometric forms. These statement hats are
                conversation starters and often take weeks or months to design
                and construct. They are best suited for the infield, general
                admission areas, and Derby parties where there are no sight-line
                constraints and the goal is maximum visual impact.
              </p>
            </div>
          </div>
        </section>

        <ContentImage
          src="https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?w=800"
          alt="Woman wearing a sun hat surrounded by colorful flowers on a bright day"
          caption="Derby fashion blends elegance with personal expression"
          aspectRatio="wide"
        />

        {/* Men's Hat Styles */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Derby Hats for Men: Styles and Ideas
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While women&rsquo;s hats tend to dominate the conversation, men have
            their own strong hat tradition at the Kentucky Derby. A well-chosen
            hat completes a man&rsquo;s Derby outfit and shows respect for the
            event&rsquo;s traditions. Here are the most popular derby hats for
            men.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-derby-cream rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Fedora
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The fedora is the most versatile and popular men&rsquo;s hat
                choice at the Derby. Defined by its creased crown and
                medium-width brim, the fedora works with everything from a full
                suit to a sport coat with chinos. Choose a felt fedora in gray,
                navy, or tan for cooler weather, or a lightweight straw fedora
                for the warmth of early May. A grosgrain ribbon band in a
                contrasting color adds a touch of personality. The fedora strikes
                the ideal balance between dressing for the occasion and looking
                effortlessly stylish.
              </p>
            </div>

            <div className="bg-derby-cream rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Panama Straw Hat
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A genuine Panama hat &mdash; woven from toquilla straw palm
                fibers in Ecuador &mdash; is the classic warm-weather dress hat
                and a perfect match for the first Saturday in May. Panamas are
                lightweight, breathable, and look sharp with light-colored suits
                and seersucker jackets. Quality ranges dramatically: a basic
                Panama starts around $50, while finely woven Montecristi Panamas
                can cost several thousand dollars. The natural cream color of a
                Panama hat complements virtually any outfit and gives a polished,
                Southern-gentleman look.
              </p>
            </div>

            <div className="bg-derby-cream rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Boater (Straw Skimmer)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The flat-crowned, flat-brimmed boater hat has a distinctly
                vintage feel that evokes early twentieth-century horse racing
                culture. Boaters are made from stiff sennit straw and typically
                feature a striped grosgrain ribbon band. They pair well with
                bow ties, suspenders, and retro-inspired Derby outfits. The
                boater is a bold choice that signals you understand and
                appreciate the history of Derby fashion, and it stands out from
                the more common fedora in the best possible way.
              </p>
            </div>

            <div className="bg-derby-cream rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Newsboy Cap
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                For a more relaxed, approachable look, the newsboy cap (also
                called a baker boy or Gatsby cap) offers a smart-casual option
                that works particularly well in the infield and general
                admission areas. The rounded, full crown and small front brim
                create a jaunty silhouette that pairs well with blazers, rolled
                sleeves, and casual trousers. Linen and cotton newsboy caps in
                light colors are comfortable for a long day outdoors and travel
                well without the structural concerns of more formal hats.
              </p>
            </div>
          </div>
        </section>

        {/* Hat Etiquette */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Hat Etiquette at Churchill Downs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While the Kentucky Derby celebrates bold fashion, there are some
            practical considerations and unwritten rules about hat etiquette at
            Churchill Downs that will help you and the people around you enjoy
            the day.
          </p>

          <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <div>
                  <p className="font-semibold text-derby-green">
                    Grandstand and Reserved Seating: Mind the Brim
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    If you have reserved seats in the grandstand, clubhouse, or
                    premium areas, be mindful that an extremely wide-brim or
                    tall hat can block the view of the person seated directly
                    behind you. Fascinators, moderate-brim hats, and pillbox
                    styles are more considerate choices for these sections. You
                    are unlikely to be asked to remove your hat, but your
                    neighbors will appreciate the thoughtfulness.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <div>
                  <p className="font-semibold text-derby-green">
                    Infield: Anything Goes
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The Churchill Downs infield is where creativity runs wild
                    and there are no real limitations on hat size, height, or
                    extravagance. The infield is standing room with large open
                    areas, so oversized hats, novelty designs, themed group
                    hats, and towering sculptural pieces are all fair game. This
                    is where many of the most viral Derby hat photos originate.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <div>
                  <p className="font-semibold text-derby-green">
                    Secure Your Hat
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Derby Day can be windy, and you will be outdoors for hours.
                    Make sure your hat fits securely by using hat pins, combs,
                    elastic chin straps (hidden under the hair), or
                    bobby-pin anchoring techniques. There is nothing worse than
                    chasing your hat across the grandstand during the feature
                    race.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <div>
                  <p className="font-semibold text-derby-green">
                    Men: Remove Hats During the National Anthem
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Traditional etiquette calls for men to remove their hats
                    during the playing of the national anthem and during the
                    singing of &ldquo;My Old Kentucky Home&rdquo; before the
                    Derby race. Women are not traditionally required to remove
                    hats during these moments, though it is always a personal
                    choice.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Colors & Coordination */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Colors and Coordination Tips
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Choosing the right color for your Derby hat is about more than
            personal preference. Certain colors carry symbolic significance at
            Churchill Downs, and coordinating your hat with your outfit elevates
            the entire look.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-red-800 mb-2">
                Derby Day (Saturday): Red
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Red is the traditional power color for Kentucky Derby Saturday.
                A red hat, whether deep crimson, bright cherry, or dusty rose,
                signals that you know the tradition and are dressing for the main
                event. Red also photographs beautifully against the green
                backdrop of the Churchill Downs turf.
              </p>
            </div>
            <div className="bg-pink-50 border border-pink-200 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-pink-800 mb-2">
                Kentucky Oaks (Friday): Pink
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The Kentucky Oaks, held the day before the Derby, has adopted
                pink as its signature color in support of breast and ovarian
                cancer awareness. Wearing a pink hat on Oaks Day shows
                solidarity with the cause and aligns with the sea of pink that
                fills Churchill Downs on Friday.
              </p>
            </div>
          </div>

          <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
            <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
              General Coordination Guidelines
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Match or complement, do not clash.</strong> Your hat
                  should either match a color in your outfit directly or sit
                  within the same color family. A navy dress with a navy-and-white
                  hat looks intentional; a neon green hat with a pastel pink
                  dress looks accidental.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Consider scale and proportion.</strong> A petite person
                  can be overwhelmed by an enormous hat, and a tall person might
                  want to avoid adding excessive height. Try your hat with your
                  full outfit and shoes in front of a full-length mirror before
                  Derby Day.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Neutral hats are versatile.</strong> If you are
                  wearing a bold or patterned outfit, a neutral hat in ivory,
                  black, nude, or natural straw provides balance. If your outfit
                  is a solid neutral, let the hat be the star with a vivid color
                  or dramatic embellishments.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Coordinate with accessories.</strong> Tie the look
                  together by matching your hat to your shoes, clutch, or
                  jewelry rather than your dress. A white dress with gold
                  heels and a gold-trimmed hat looks polished and deliberate.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <ContentImage
          src="https://images.pexels.com/photos/6818590/pexels-photo-6818590.jpeg?w=800"
          alt="Jockeys and Thoroughbred horses breaking from the starting gates at a racetrack"
          caption="Your Derby hat is the finishing touch for a day of world-class horse racing at Churchill Downs"
          aspectRatio="landscape"
        />

        {/* Where to Buy */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Where to Buy Kentucky Derby Hats
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The right shopping approach depends on your budget, timeline, and
            how unique you want your hat to be. Here are the main options for
            finding your perfect Derby hat.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Custom Milliners
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                For a truly one-of-a-kind hat, commissioning a custom milliner
                is the gold standard. Louisville has a thriving millinery
                community, and many local hat makers specialize in Derby designs.
                A custom milliner will work with you to match your outfit, head
                shape, skin tone, and personal style preferences. Expect to book
                your consultation at least two to three months before Derby Day,
                as popular milliners fill up quickly. Prices typically start
                around $300 and can exceed $2,000 for complex designs. The
                advantage is a hat that fits perfectly, matches your outfit
                exactly, and cannot be duplicated by anyone else at Churchill
                Downs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Department Stores & Hat Shops
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Major department stores stock Derby-appropriate hats and
                fascinators in their accessories departments, typically starting
                in March. Louisville-area stores see the largest and most curated
                selections, but national retailers also carry seasonal options.
                Specialty hat shops like Hat Box in Louisville, Dee&rsquo;s
                Crafts and Gifts, and local boutiques in NuLu offer curated
                collections of ready-to-wear Derby hats with more personality
                than mass-market options. Prices range from $50 to $300 for
                quality ready-to-wear pieces.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Online Retailers
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Online shopping offers the widest selection and often the most
                competitive prices for Derby hats. Etsy features thousands of
                handmade Derby hats and fascinators from independent milliners
                across the country, with options at every price point. Amazon
                carries budget-friendly options for those prioritizing
                affordability. Specialty online retailers like Hat-A-Tude,
                Kentucky Derby Fascinator, and Church Derby Hats focus
                exclusively on occasion hats. When buying online, order at least
                three to four weeks early to allow time for shipping, trying on,
                and potential returns or exchanges. Pay close attention to head
                measurements and return policies.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Hat Rental Services
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                If you want a high-end hat without the high-end price tag,
                several companies now offer Derby hat rentals. This is an
                especially smart option if you are attending the Derby as a
                one-time experience and do not want to invest in a hat you may
                never wear again. Rental prices typically range from $50 to $150
                for hats that would retail for several hundred dollars or more.
                Some Louisville milliners offer rental programs for their own
                collections, and national hat-sharing services ship directly to
                your hotel. Reserve early, as the most popular designs are
                claimed months in advance.
              </p>
            </div>
          </div>
        </section>

        {/* DIY Tips */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            DIY Derby Hat Tips
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Making your own Derby hat is a beloved tradition, particularly for
            groups of friends who plan crafting parties in the weeks before the
            race. A DIY hat lets you express your creativity, ensures a unique
            design, and can be accomplished on a modest budget. Here is how to
            approach building your own hat.
          </p>

          <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
            <ol className="space-y-4 list-decimal list-inside">
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-derby-green">
                  Start with a blank hat base.
                </strong>{" "}
                Purchase a plain wide-brim hat, floppy hat, or straw hat from a
                craft store or online retailer. Blank hat bases specifically
                designed for decorating are available in straw, sinamay, and felt,
                typically priced between $10 and $30. Choose a base color that
                complements your planned outfit.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-derby-green">
                  Gather your materials.
                </strong>{" "}
                Craft stores carry silk flowers, feathers, ribbons, tulle,
                netting, beads, rhinestones, and decorative picks. Hot glue guns
                are the most practical adhesive for hat decorating, as the bond
                is strong, sets quickly, and can be carefully repositioned if
                needed. Plan your design before you start gluing &mdash; lay
                everything out on the hat first.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-derby-green">
                  Build in layers.
                </strong>{" "}
                Start with larger elements like a wide ribbon band, a sinamay
                bow, or a large flower cluster as the foundation, then layer
                smaller accents like feathers, leaves, and beads on top. Working
                from large to small creates depth and visual interest. Keep most
                of the decoration on one side or the front of the hat for a
                balanced, intentional look.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-derby-green">
                  Test the fit and weight.
                </strong>{" "}
                As you add decorations, periodically try the hat on and check
                that it sits comfortably and does not tilt or slide. Heavy
                embellishments on one side can pull the hat off-center. Add
                counterweight elements on the opposite side, or use hat pins
                and combs to secure the hat to your hair.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-derby-green">
                  Finish with details.
                </strong>{" "}
                Small touches make a DIY hat look polished rather than
                homemade. Trim any visible hot glue strings, tuck in loose ends,
                and add a ribbon or band around the crown to create a clean
                transition between the hat and the decorations. A light misting
                of hairspray can help feathers and delicate elements hold their
                shape.
              </li>
            </ol>
          </div>
        </section>

        {/* Hat Care & Transport */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Hat Care and Transport Tips
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            After investing time and money in your Derby hat, the last thing you
            want is for it to arrive at Churchill Downs crushed, bent, or
            damaged. Proper care and transport make the difference between a hat
            that looks fresh on Derby Day and one that shows signs of rough
            handling.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-serif text-base font-bold text-derby-green mb-2">
                Traveling by Air
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Invest in a hat box designed for travel &mdash; rigid hat boxes
                protect the brim and crown from compression in overhead bins. If
                a hat box is not practical, carry the hat on your lap or place
                it crown-down in an oversized tote bag stuffed with tissue paper.
                Never pack a structured hat in checked luggage. Some airlines
                will allow you to place a hat box in the overhead compartment if
                you board early enough.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-serif text-base font-bold text-derby-green mb-2">
                Traveling by Car
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Place the hat on a flat surface in the back seat, ideally in a
                hat box or on a hat stand. Avoid putting anything on top of the
                hat. If the brim is large, the passenger seat with the seat
                reclined slightly works well. Keep the car climate controlled,
                as extreme heat can warp straw and sinamay materials.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-serif text-base font-bold text-derby-green mb-2">
                Storage Before and After
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Store your hat in a cool, dry place away from direct sunlight,
                which can fade colors. Place tissue paper inside the crown to
                maintain its shape. If the brim loses its curve, a hat steamer
                or the steam from a boiling kettle (held at a safe distance) can
                reshape straw and fabric hats. Avoid hanging hats by the brim,
                which can cause warping over time.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-serif text-base font-bold text-derby-green mb-2">
                At Churchill Downs
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Be aware of your hat in crowds &mdash; wide brims can bump into
                neighbors, and tall decorations can catch on low overhangs.
                Bring a small emergency kit with hat pins, bobby pins, a mini
                hot glue gun or fabric glue, and a safety pin in case any
                embellishments come loose during the day. Sunscreen applied
                before you put on the hat prevents staining the interior band.
              </p>
            </div>
          </div>
        </section>

        {/* Celebrity Hat Moments */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Memorable Celebrity Derby Hat Moments
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Celebrities have used the Kentucky Derby as a runway for
            unforgettable hat moments that shape trends for years to come. The
            twin spires of Churchill Downs provide a backdrop that has been
            graced by Hollywood stars, musicians, royalty, and fashion icons who
            treat Derby Day as one of the top fashion events on the American
            calendar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over the years, attendees have seen everything from sweeping
            wide-brim hats in classic neutrals to gravity-defying sculptural
            creations adorned with feathers, crystals, and full floral gardens.
            The red carpet area near the paddock has become a destination in
            itself, with fans and photographers lining up to catch a glimpse of
            the most creative and extravagant headwear walking through the gates.
          </p>
          <p className="text-gray-700 leading-relaxed">
            What makes Derby hat fashion unique among celebrity events is that
            the audience participates as enthusiastically as the famous faces.
            Many of the most memorable hats each year belong not to celebrities
            but to regular attendees who have spent months crafting, commissioning,
            or curating the perfect piece. The Kentucky Derby remains one of the
            rare events where the crowd&rsquo;s fashion is as much a draw as
            the guest list, and that egalitarian spirit keeps the hat tradition
            alive and evolving year after year.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Derby Hats
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
            Your hat is just the beginning. Explore our full guides to Derby
            fashion, planning your Churchill Downs visit, and making the most of
            your time in Louisville.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/attend/what-to-wear"
              className="inline-block bg-derby-gold text-derby-green-dark font-bold px-8 py-3.5 rounded-lg hover:bg-derby-gold-light transition-colors"
            >
              What to Wear
            </Link>
            <Link
              href="/attend/tickets"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              Get Tickets
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
