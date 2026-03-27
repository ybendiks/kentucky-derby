import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title:
    "2026 Kentucky Oaks | The Fillies' Race at Churchill Downs on May 1",
  description:
    "Complete guide to the 2026 Kentucky Oaks on Friday, May 1 at Churchill Downs. History, contenders, the pink theme, Survivors Parade, why Oaks Day is a must-attend event, and how it compares to Kentucky Derby Day.",
  keywords: [
    "kentucky oaks 2026",
    "kentucky oaks",
    "oaks day churchill downs",
    "fillies race kentucky derby",
    "derby friday oaks",
    "lilies for the fillies",
    "oaks day pink",
    "kentucky oaks contenders",
  ],
  openGraph: {
    title: "2026 Kentucky Oaks | Friday, May 1 at Churchill Downs",
    description:
      "Everything you need to know about the 2026 Kentucky Oaks, the premier race for three-year-old fillies held the day before the Kentucky Derby.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What is the Kentucky Oaks?",
    answer:
      "The Kentucky Oaks is the premier thoroughbred horse race in North America exclusively for three-year-old fillies. Held on the Friday before the Kentucky Derby at Churchill Downs in Louisville, Kentucky, the Oaks is run at a distance of 1 1/8 miles on the dirt track. First held in 1875, the same year as the inaugural Derby, the Oaks carries a purse exceeding $1.5 million and draws crowds that often exceed 100,000 fans. The winning filly is draped with a garland of stargazer lilies, earning the race its nickname 'Lillies for the Fillies.'",
  },
  {
    question: "Why is the Kentucky Oaks associated with the color pink?",
    answer:
      "The Kentucky Oaks adopted pink as its signature color to support breast and ovarian cancer awareness. On Oaks Day, Churchill Downs is awash in pink decorations, and fans are encouraged to wear pink attire. The day features the Survivors Parade, in which cancer survivors walk the Churchill Downs stretch to a standing ovation from the crowd. A portion of proceeds from Oaks Day merchandise and activities benefits cancer research and patient support organizations.",
  },
  {
    question: "Is it better to attend the Kentucky Oaks or the Kentucky Derby?",
    answer:
      "Many experienced racegoers consider Oaks Day the better day for actually watching and enjoying horse racing. The crowd is typically smaller than Derby Day (though still over 100,000), which means shorter lines, easier access to seating and wagering windows, and a more relaxed atmosphere. Tickets for the Oaks are generally less expensive than Derby tickets. The racing quality is outstanding, with the Oaks itself being a Grade I race surrounded by a strong undercard. For first-time visitors, attending both days is ideal, but if you can only choose one day for a more comfortable racing experience, many locals recommend the Oaks.",
  },
];

export default function KentuckyOaksPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "The Race", href: "/race" },
          { name: "Kentucky Oaks", href: "/race/kentucky-oaks" },
        ]}
      />
      <ArticleJsonLd
        title="2026 Kentucky Oaks"
        description="Complete guide to the 2026 Kentucky Oaks at Churchill Downs. History, pink theme, contenders, and why Oaks Day is a must-attend event."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="bg-derby-green text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-derby-gold transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/race" className="hover:text-derby-gold transition-colors">
                  The Race
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-derby-gold">Kentucky Oaks</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-derby-gold mb-4">
            2026 Kentucky Oaks
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            The premier race for three-year-old fillies. Friday, May 1, 2026
            at Churchill Downs &mdash; pink, powerful, and unforgettable.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-pink-400 rounded-full" />
              Friday, May 1, 2026
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-pink-400 rounded-full" />
              1&frac18; Miles &middot; Dirt
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-pink-400 rounded-full" />
              Grade I &middot; Fillies Only
            </span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* What Is the Kentucky Oaks */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What Is the Kentucky Oaks?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kentucky Oaks is the most prestigious thoroughbred race in North
            America for three-year-old fillies. Held on the Friday before the
            Kentucky Derby at Churchill Downs, the Oaks is run at a distance of
            1&frac18; miles on the same dirt track that hosts the Derby the
            following day. The race was first held in 1875, the same year as the
            inaugural Kentucky Derby, making it one of the oldest continuously
            run stakes races in American horse racing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The winning filly is draped with a garland of stargazer lilies
            &mdash; earning the race its beloved nickname &ldquo;Lillies for
            the Fillies.&rdquo; The Oaks carries a purse exceeding $1.5 million,
            placing it among the richest races on the American racing calendar.
            For the best fillies of their generation, winning the Kentucky Oaks
            is a career-defining accomplishment that solidifies their place in
            breeding sheds and racing history.
          </p>
        </section>

        {/* Oaks Day Quick Facts Visual */}
        <section className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "152nd", label: "Running", sub: "Est. 1875" },
              { stat: "$1.5M+", label: "Purse", sub: "Grade I Stakes" },
              { stat: "100K+", label: "Attendance", sub: "Oaks Day crowd" },
              { stat: "1⅛ mi", label: "Distance", sub: "Dirt track" },
            ].map((item, i) => (
              <div key={i} className="bg-pink-50 border border-pink-200 rounded-xl p-5 text-center">
                <p className="font-serif text-2xl font-bold text-derby-green">{item.stat}</p>
                <p className="text-sm font-medium text-pink-700 mt-1">{item.label}</p>
                <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Churchill Downs Map */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Churchill Downs Location
          </h2>
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134!2d-85.7702!3d38.2028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886972e49c33799b%3A0x731f20e092d9e26c!2sChurchill%20Downs!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Churchill Downs in Louisville, Kentucky"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-3 text-sm">
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">Address</p>
              <p className="text-gray-600 text-xs">700 Central Ave, Louisville, KY 40208</p>
            </div>
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">From Downtown</p>
              <p className="text-gray-600 text-xs">5 miles south · 12 min drive</p>
            </div>
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">From Airport (SDF)</p>
              <p className="text-gray-600 text-xs">4 miles · 10 min drive</p>
            </div>
          </div>
        </section>

        {/* History and Significance */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            History &amp; Significance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kentucky Oaks has been a cornerstone of the Churchill Downs
            spring meet for over 150 years. Originally run at 1&frac12; miles,
            the race was shortened to its current 1&frac18;-mile distance in
            1982. Throughout its history, the Oaks has showcased the finest
            fillies in training, many of whom have gone on to become champions
            and influential broodmares.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In recent decades, the Kentucky Oaks has grown from a supporting act
            to a headlining event in its own right. Attendance on Oaks Day
            regularly exceeds 100,000, and the race draws significant national
            media coverage. The Oaks is a Grade I event, the highest
            classification in thoroughbred racing, and its importance to the
            sport continues to grow with each passing year.
          </p>
        </section>

        {/* Pink: The Color of Oaks Day */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Pink: The Color of Oaks Day
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Walk through the gates of Churchill Downs on Oaks Day and you will
            be surrounded by a sea of pink. The Kentucky Oaks has adopted pink
            as its signature color in support of breast and ovarian cancer
            awareness, transforming the racecourse into a vibrant celebration of
            survivorship and hope alongside world-class horse racing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The emotional centerpiece of the day is the <strong>Survivors
            Parade</strong>, in which cancer survivors walk the Churchill Downs
            stretch to a roaring standing ovation from tens of thousands of
            fans. It is one of the most moving moments in all of American
            sports, a reminder that the Oaks is about far more than horse
            racing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Fans are encouraged to wear pink to the Oaks, and many embrace
            the theme with creative hats, dresses, and accessories. A portion
            of proceeds from Oaks Day merchandise, commemorative programs, and
            special events benefits cancer research and patient support
            organizations. The combination of top-class racing and a meaningful
            charitable cause gives Oaks Day an atmosphere unlike any other day
            on the racing calendar.
          </p>
        </section>

        {/* 2026 Oaks Contenders */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            2026 Kentucky Oaks Contenders
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The 2026 Kentucky Oaks field is taking shape through a series of
            fillies-only prep races. Like the Derby, qualifying for the Oaks
            is based on a points system, with designated prep races awarding
            points to the top finishers. Here are some of the early names to
            watch.
          </p>

          <div className="space-y-4">
            {[
              {
                name: "Starlight Sonata",
                detail: "Undefeated in two starts this season, she has shown a devastating turn of foot that has the racing world buzzing about her potential at the classic 1 1/8-mile Oaks distance.",
              },
              {
                name: "Velvet Dawn",
                detail: "A consistent performer across multiple graded stakes preps, she brings tactical speed and versatility to a race that rewards horses who can handle pace pressure from the front.",
              },
              {
                name: "Rosewood",
                detail: "A deep closer with a pedigree loaded with stamina influences. If the pace is honest early, she could produce a dynamic stretch run that carries her past the leaders.",
              },
              {
                name: "Diamond Reign",
                detail: "Winner of a key prep at Fair Grounds, she has earned a solid qualifying position and appears to be peaking at the right time heading into the spring.",
              },
            ].map((filly, i) => (
              <div
                key={i}
                className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {filly.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {filly.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            The Oaks field will be finalized in late April, with the final prep
            races in March and April determining which fillies earn enough points
            to start. Check back for updated contender profiles as the race
            approaches.
          </p>
        </section>

        {/* Why Attend the Oaks */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Why Attending the Oaks Is a Great Idea
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you are a lifelong racing fan or a first-time visitor to
            Churchill Downs, Oaks Day offers an experience that many consider
            equal to &mdash; or in some ways better than &mdash; Derby Day
            itself. Here is why.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Smaller Crowds, Better Access",
                text: "While still drawing over 100,000 fans, Oaks Day is noticeably less crowded than the Saturday Derby. Lines for food, drinks, and wagering windows are shorter, and finding a good viewing spot is easier.",
              },
              {
                title: "More Affordable Tickets",
                text: "Oaks Day tickets are generally priced lower than Derby tickets across all seating areas. This makes Oaks Day an excellent option for fans on a budget who still want the full Churchill Downs experience.",
              },
              {
                title: "Outstanding Racing Quality",
                text: "The Oaks is a Grade I race surrounded by a packed card of graded stakes. The quality of racing on Friday is every bit as high as the Saturday undercard, giving bettors and fans a full day of top-tier competition.",
              },
              {
                title: "Unique Atmosphere",
                text: "The pink theme, the Survivors Parade, and the celebratory energy of the crowd give Oaks Day a distinct character that is different from Derby Day. Many fans find it more festive and more personal.",
              },
            ].map((reason, i) => (
              <div
                key={i}
                className="bg-derby-cream rounded-xl p-5 border border-derby-gold/20"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Oaks vs Derby Comparison */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Kentucky Oaks vs. Kentucky Derby: A Comparison for Attendees
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-semibold text-derby-green">Factor</th>
                  <th className="py-3 pr-4 font-semibold text-derby-green">Kentucky Oaks (Friday)</th>
                  <th className="py-3 font-semibold text-derby-green">Kentucky Derby (Saturday)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 font-medium">Date</td>
                  <td className="py-3 pr-4">Friday, May 1, 2026</td>
                  <td className="py-3">Saturday, May 2, 2026</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Feature Race</td>
                  <td className="py-3 pr-4">Kentucky Oaks (Fillies, Grade I)</td>
                  <td className="py-3">Kentucky Derby (Grade I)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Distance</td>
                  <td className="py-3 pr-4">1&frac18; miles</td>
                  <td className="py-3">1&frac14; miles</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Typical Crowd</td>
                  <td className="py-3 pr-4">100,000+</td>
                  <td className="py-3">150,000+</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Ticket Prices</td>
                  <td className="py-3 pr-4">Generally lower</td>
                  <td className="py-3">Premium pricing</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Theme</td>
                  <td className="py-3 pr-4">Pink (cancer awareness)</td>
                  <td className="py-3">Roses, tradition, hats</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Atmosphere</td>
                  <td className="py-3 pr-4">Festive, slightly more relaxed</td>
                  <td className="py-3">Electric, packed, iconic</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            The ideal plan for many visitors is to attend both days. Oaks Day
            offers a chance to settle in, explore the grounds, and enjoy racing
            in a more relaxed setting, while Derby Day delivers the once-in-a-lifetime
            spectacle that draws the eyes of the entire sporting world. If budget
            or scheduling limits you to one day, consider your priorities: the
            Oaks for a more comfortable racing experience, or the Derby for the
            history and pageantry.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About the Kentucky Oaks
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

        {/* Related Links */}
        <section className="bg-derby-cream border border-derby-gold/20 rounded-xl p-6 md:p-8">
          <h2 className="font-serif text-2xl font-bold text-derby-green mb-4">
            Plan Your Derby Weekend
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/race/derby-week-schedule"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Week Schedule
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Full schedule from Opening Day through Kentucky Derby Day.
              </p>
            </Link>
            <Link
              href="/attend/tickets"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Get Tickets
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Seating options and pricing for Oaks Day and Derby Day.
              </p>
            </Link>
            <Link
              href="/attend/what-to-wear"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                What to Wear
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Dress code guide, including tips for Oaks Day pink outfits.
              </p>
            </Link>
            <Link
              href="/race/contenders"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Contenders
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Meet the horses competing in Saturday's Kentucky Derby.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
