import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title:
    "Kentucky Derby Infield Guide | What to Expect in 2026",
  description:
    "Everything you need to know about the Kentucky Derby infield experience at Churchill Downs. Atmosphere, pros and cons, tips for infield attendees, food and drink options, and whether the infield is right for you.",
  keywords:
    "kentucky derby infield, infield experience, churchill downs infield, derby infield tickets, infield party, kentucky derby general admission",
};

const faqItems = [
  {
    question: "Can you see the horses race from the Kentucky Derby infield?",
    answer:
      "Direct views of the race from the infield are very limited. The infield sits inside the track, so the horses run around the outside perimeter. You can catch glimpses of horses during portions of the race, but the finish line is not visible from ground level in the infield. Large video screens are positioned throughout the infield so attendees can watch each race. Most infield-goers watch the Kentucky Derby itself on the big screens and experience the race through the energy of the crowd around them.",
  },
  {
    question: "How much do Kentucky Derby infield tickets cost?",
    answer:
      "General admission infield tickets for the Kentucky Derby are the most affordable option, typically starting around $80 to $100 at face value when purchased through official channels. Prices increase closer to Derby Day, and secondary market tickets may cost significantly more. The infield is standing room only with no reserved seating, so the low price reflects the trade-off between affordability and the lack of assigned seats or direct race views.",
  },
  {
    question: "What should I wear to the Kentucky Derby infield?",
    answer:
      "The infield has the most relaxed dress code at Churchill Downs. Casual, comfortable clothing is the norm, including sundresses, shorts, rompers, polo shirts, and casual button-downs. Comfortable shoes are essential since you will be standing and walking on grass for hours. Many infield attendees wear creative or themed outfits, fun hats, and bright colors. Stiletto heels and formal attire are impractical for the infield environment. Sunscreen and sunglasses are strongly recommended.",
  },
  {
    question: "Is the Kentucky Derby infield safe?",
    answer:
      "The Kentucky Derby infield is a safe, well-monitored environment with security personnel and medical staff present throughout the day. Churchill Downs has significantly improved infield management in recent years, with clearly defined areas, food and beverage zones, and emergency services. As with any large outdoor event, basic precautions apply: stay aware of your surroundings, keep valuables secure, stay hydrated, use the buddy system with your group, and pace your alcohol consumption over the long day.",
  },
  {
    question: "Can I leave the infield and go to the grandstand during the Derby?",
    answer:
      "Movement between the infield and the grandstand depends on your ticket type. General admission infield tickets typically restrict you to the infield area. Some premium infield packages or combined tickets may allow access to both areas. The infield is accessed through a tunnel under the track, and re-entry to the infield may be restricted. Check the specific terms of your ticket before planning to move between sections during the day.",
  },
];

export default function InfieldPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Attend", href: "/attend" },
          { name: "Infield Guide", href: "/attend/infield" },
        ]}
      />
      <ArticleJsonLd
        title="Kentucky Derby Infield Guide: What to Expect"
        description="A comprehensive guide to the Kentucky Derby infield experience at Churchill Downs, covering the atmosphere, pros and cons, practical tips, food and drink, and how to decide if the infield is right for you."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="bg-derby-green text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-derby-gold font-semibold tracking-widest uppercase text-sm mb-4">
            The Derby Experience
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Kentucky Derby Infield Guide
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
            The infield at Churchill Downs is where the Derby&rsquo;s famous
            party atmosphere lives. It is affordable, energetic, and unlike
            anything else in American sports. Here is everything you need to
            know about the infield experience before you buy your tickets.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* What Is the Infield */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            What Is the Kentucky Derby Infield?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The infield is the massive grassy area located inside the oval
            track at Churchill Downs. It spans dozens of acres and can hold
            tens of thousands of spectators on Derby Day. Unlike the grandstand
            and clubhouse sections that sit outside the track and face the
            homestretch, the infield places you inside the track itself, with
            the horses running around the perimeter during each race.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For decades, the infield has been the most talked-about and
            culturally distinctive part of the Kentucky Derby experience. It
            is where the party happens. The atmosphere has been compared to a
            music festival crossed with a college tailgate, set against the
            backdrop of one of the most historic horse races in the world.
            General admission infield tickets are the most affordable way to
            attend the Kentucky Derby, making it the entry point for many
            first-time attendees and younger crowds.
          </p>
        </section>

        {/* The Atmosphere */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            The Infield Atmosphere
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The energy in the infield is unlike anything else at Churchill
            Downs. From the moment the gates open in the morning, the infield
            fills with crowds who are there to socialize, celebrate, and soak
            in the festive atmosphere. Music plays from speakers and portable
            sound systems. Groups of friends stake out spots on the grass.
            Creative outfits, face paint, and themed group costumes are common
            sights.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As the day progresses and the featured races approach, the energy
            builds to a peak. The singing of &ldquo;My Old Kentucky
            Home&rdquo; before the Derby race is an emotional moment even in
            the infield, where the crowd joins together in a way that
            transcends the party atmosphere. When the Derby race begins, the
            roar from 170,000 people &mdash; including the massive infield
            crowd &mdash; is a visceral, unforgettable experience.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The infield also has a reputation as a place where things get
            rowdy, and that reputation is not entirely unearned. Churchill
            Downs has made significant improvements to the infield experience
            in recent years, adding more food and beverage options, better
            facilities, and enhanced security. The result is an atmosphere that
            remains energetic and fun while being better organized and more
            comfortable than in decades past.
          </p>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&q=75"
          alt="Crowd of people enjoying a sunny daytime outdoor event on green grass"
          caption="The Kentucky Derby infield draws tens of thousands of fans for one of America's biggest outdoor parties"
          aspectRatio="wide"
        />

        {/* Pros and Cons */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Infield Pros and Cons
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The infield is a polarizing experience &mdash; people tend to love
            it or feel it was not what they expected. Understanding the
            trade-offs before you buy tickets is essential.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-green-800 mb-4">
                Pros
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-600 flex-shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Most affordable tickets.</strong> General admission
                    infield tickets are the cheapest way to attend the Kentucky
                    Derby, typically starting around $80 to $100 at face value.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 flex-shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Unmatched energy.</strong> The infield party
                    atmosphere is legendary. If you thrive on crowds, music,
                    and social energy, there is no better place to be at the
                    Derby.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 flex-shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Fun, casual crowd.</strong> The dress code is
                    relaxed, the vibe is friendly, and the people-watching is
                    world-class. Groups of friends, creative outfits, and
                    spontaneous celebrations are everywhere.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 flex-shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Flexible experience.</strong> There are no assigned
                    seats, so you can move around, explore different areas of
                    the infield, and create your own experience throughout the
                    day.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-red-800 mb-4">
                Cons
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-500 flex-shrink-0 mt-0.5">&#10007;</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Very limited race views.</strong> You cannot see
                    the finish line from the infield. Most attendees watch the
                    races on the large video screens rather than seeing the
                    horses directly.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 flex-shrink-0 mt-0.5">&#10007;</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Very crowded.</strong> The infield packs tens of
                    thousands of people into an open field. Personal space is
                    limited, especially during the afternoon and evening races.
                    Moving through the crowd can be slow.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 flex-shrink-0 mt-0.5">&#10007;</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Long bathroom lines.</strong> Restroom facilities
                    in the infield are primarily portable toilets, and lines
                    can be significant during peak hours. Plan accordingly and
                    use the facilities during less busy times.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 flex-shrink-0 mt-0.5">&#10007;</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>No shade or shelter.</strong> The infield is an
                    open field with minimal shade structures. On hot or rainy
                    days, you are fully exposed to the elements for the
                    duration of your visit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Infield Tips */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Essential Infield Tips
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Veteran infield-goers know that preparation makes the difference
            between a great day and a miserable one. These tips will help you
            make the most of your infield experience.
          </p>

          <div className="bg-derby-cream rounded-xl p-6 sm:p-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Apply sunscreen before you arrive</strong> and
                  reapply throughout the day. Sunburn is one of the most common
                  infield complaints. With hours of direct sun exposure on open
                  grass, even overcast days can result in burns. SPF 30 or
                  higher is recommended, and do not forget your ears, neck, and
                  the tops of your feet if wearing sandals.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Stay hydrated throughout the day.</strong> Alternate
                  alcoholic beverages with water. The combination of sun, heat,
                  alcohol, and hours of standing takes a toll, and dehydration
                  is the number one health issue in the infield. Water is
                  available from vendors throughout the infield.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Wear comfortable, closed-toe shoes</strong> or sturdy
                  sandals. The infield grass becomes uneven and potentially
                  muddy, and you will be on your feet for six to ten hours.
                  Stilettos, flip-flops, and new shoes are recipes for
                  discomfort. Sneakers, boots, or wedges are the best choices.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Bring cash.</strong> While many vendors accept cards,
                  some food and drink stands in the infield are cash-only, and
                  ATM lines can be extremely long. Bring more cash than you
                  think you will need.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Arrive early to claim a good spot.</strong> The best
                  locations near the video screens and near the track rail
                  fill up by mid-morning. If you want a prime spot for watching
                  the races, plan to arrive when gates open at 8:00 AM.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-derby-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Establish a meeting point</strong> with your group.
                  Cell service is unreliable with 170,000 people at the venue.
                  Pick a specific, easy-to-find landmark as a regrouping point
                  in case you get separated.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1565657739331-ca2241b47e95?w=800&q=75"
          alt="Horse racing fans watching from the grandstand on a sunny day"
          caption="The infield atmosphere combines festival energy with the excitement of live horse racing"
          aspectRatio="landscape"
        />

        {/* Food and Drink */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Infield Food and Drink Options
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Churchill Downs does not allow outside food or beverages into the
            venue, so plan to eat and drink from the vendors inside the
            infield. The variety and quality of infield food options has
            improved considerably in recent years, though prices are consistent
            with what you would expect at a major sporting event.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-serif text-base font-bold text-derby-green mb-2">
                Food Options
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The infield features food trucks and portable stands offering
                burgers, hot dogs, barbecue, fried chicken, nachos, and other
                classic event fare. Several vendors offer Kentucky-specific
                items like bourbon-glazed dishes and regional barbecue. Lines
                are longest during the mid-afternoon hours, so eating earlier
                or between undercard races helps avoid the longest waits.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-serif text-base font-bold text-derby-green mb-2">
                Drink Options
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Beer, bourbon drinks, and the classic mint julep are the most
                popular beverages in the infield. Multiple bars are positioned
                throughout the space. Souvenir mint julep cups are available
                for an additional charge and make a popular keepsake. Non-
                alcoholic options including water, soft drinks, and lemonade
                are available at every food and drink station.
              </p>
            </div>
          </div>
        </section>

        {/* Is the Infield Right for You */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Is the Infield Right for You?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The infield is not for everyone, and that is perfectly fine.
            Choosing the right section is about matching your expectations to
            the experience. Here is a comparison to help you decide.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-derby-green text-white">
                  <th className="text-left p-4 font-serif font-bold rounded-tl-lg">Factor</th>
                  <th className="text-left p-4 font-serif font-bold">Infield</th>
                  <th className="text-left p-4 font-serif font-bold rounded-tr-lg">Grandstand</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold text-derby-green">Price</td>
                  <td className="p-4 text-gray-700">$80&ndash;$100 (most affordable)</td>
                  <td className="p-4 text-gray-700">$200&ndash;$800+ (mid-range)</td>
                </tr>
                <tr className="bg-derby-cream/50 border-b border-gray-100">
                  <td className="p-4 font-semibold text-derby-green">Race Views</td>
                  <td className="p-4 text-gray-700">Limited; big screens only</td>
                  <td className="p-4 text-gray-700">Excellent finish line views</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold text-derby-green">Seating</td>
                  <td className="p-4 text-gray-700">Standing room on grass</td>
                  <td className="p-4 text-gray-700">Reserved seats, many covered</td>
                </tr>
                <tr className="bg-derby-cream/50 border-b border-gray-100">
                  <td className="p-4 font-semibold text-derby-green">Atmosphere</td>
                  <td className="p-4 text-gray-700">Party, festival, social</td>
                  <td className="p-4 text-gray-700">Traditional, elegant, racing-focused</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold text-derby-green">Dress Code</td>
                  <td className="p-4 text-gray-700">Casual, anything goes</td>
                  <td className="p-4 text-gray-700">Cocktail attire, hats expected</td>
                </tr>
                <tr className="bg-derby-cream/50">
                  <td className="p-4 font-semibold text-derby-green rounded-bl-lg">Best For</td>
                  <td className="p-4 text-gray-700">Social groups, young adults, party atmosphere</td>
                  <td className="p-4 text-gray-700 rounded-br-lg">First-timers, families, racing fans</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            If watching the horses cross the finish line with your own eyes is
            important to you, the infield is not the right choice. If you want
            the most energetic, social, and affordable Derby experience and
            are happy watching the race on a screen, the infield delivers an
            atmosphere that the grandstand simply cannot match. Many Derby
            veterans recommend experiencing the infield at least once, even if
            you ultimately prefer the grandstand for subsequent visits.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Infield Frequently Asked Questions
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
            Planning Your Infield Experience?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Get your tickets, learn what to wear for the infield, and check out
            our complete first-timer&rsquo;s guide for more Derby Day tips.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/attend/tickets"
              className="inline-block bg-derby-gold text-derby-green-dark font-bold px-8 py-3.5 rounded-lg hover:bg-derby-gold-light transition-colors"
            >
              Get Tickets
            </Link>
            <Link
              href="/attend/what-to-wear"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              What to Wear
            </Link>
            <Link
              href="/attend/seating-guide"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              Full Seating Guide
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
