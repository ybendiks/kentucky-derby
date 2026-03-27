import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Kentucky Derby Bet Types Explained | Exacta, Trifecta, Superfecta & More",
  description:
    "Every Kentucky Derby bet type explained with examples and costs: win, place, show, exacta, trifecta, superfecta, daily double, Pick 3, Pick 4, Pick 6, box bets, and wheeling strategies.",
  keywords: [
    "kentucky derby bet types",
    "exacta trifecta superfecta",
    "derby betting explained",
    "horse racing wagers",
    "exotic bets kentucky derby",
    "box bet horse racing",
    "wheeling strategy derby",
  ],
  openGraph: {
    title: "Kentucky Derby Bet Types Explained | Complete Guide",
    description:
      "Every Kentucky Derby bet type broken down with real examples, costs, and payout potential. From simple win bets to complex exotic wagers.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What is the easiest bet to make at the Kentucky Derby?",
    answer:
      "A win bet is the simplest wager at the Kentucky Derby. You pick one horse and if it finishes first, you collect. Place and show bets are also straightforward: a place bet pays if your horse finishes first or second, while a show bet pays if your horse finishes in the top three. The minimum wager is typically two dollars.",
  },
  {
    question: "What is the difference between an exacta, trifecta, and superfecta?",
    answer:
      "An exacta requires picking the first two finishers in exact order. A trifecta requires the first three finishers in exact order. A superfecta requires the first four finishers in exact order. Each wager gets progressively harder to hit, but the payouts increase dramatically. You can box any of these bets to cover all possible orders, though boxing increases the total cost.",
  },
  {
    question: "How much does a Kentucky Derby superfecta box cost?",
    answer:
      "The cost of a superfecta box depends on how many horses you include. A four-horse superfecta box at a one-dollar base costs 24 dollars because there are 24 possible finish combinations. A five-horse box costs 120 dollars, and a six-horse box costs 360 dollars. The formula is the number of horses multiplied by one less, then one less again, then one less again, times the base bet amount.",
  },
];

export default function BetTypesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Betting", href: "/betting" },
          { name: "Bet Types", href: "/betting/bet-types" },
        ]}
      />
      <ArticleJsonLd
        title="Kentucky Derby Bet Types Explained"
        description="Every Kentucky Derby bet type explained with examples and costs."
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
              <Link href="/betting" className="hover:text-derby-green transition-colors">
                Betting
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-derby-green font-medium">Bet Types</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            Kentucky Derby Bet Types Explained
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Whether you are placing your first two-dollar wager or building a complex
            exotic ticket, understanding every bet type is essential to making
            smart decisions at the Kentucky Derby betting windows.
          </p>
        </header>

        {/* Bet Types Overview Visual */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Bet Types at a Glance
          </h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-derby-green text-white">
                  <th className="text-left p-3 rounded-tl-lg font-serif">Bet Type</th>
                  <th className="text-center p-3 font-serif">Difficulty</th>
                  <th className="text-center p-3 font-serif">Min Bet</th>
                  <th className="text-center p-3 font-serif">Typical Payout</th>
                  <th className="text-center p-3 rounded-tr-lg font-serif">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Win", difficulty: "🟢 Easy", min: "$2", payout: "Low-Medium", best: "Beginners" },
                  { type: "Place", difficulty: "🟢 Easy", min: "$2", payout: "Low", best: "Conservative" },
                  { type: "Show", difficulty: "🟢 Easy", min: "$2", payout: "Lowest", best: "Safe bettors" },
                  { type: "Exacta", difficulty: "🟡 Medium", min: "$2", payout: "Medium-High", best: "Intermediate" },
                  { type: "Trifecta", difficulty: "🔴 Hard", min: "$1", payout: "High", best: "Experienced" },
                  { type: "Superfecta", difficulty: "🔴 Hard", min: "$0.10", payout: "Very High", best: "Risk-takers" },
                  { type: "Daily Double", difficulty: "🟡 Medium", min: "$2", payout: "Medium", best: "Multi-race" },
                  { type: "Pick 4/5/6", difficulty: "🔴 Hard", min: "$0.50", payout: "Very High", best: "Advanced" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-semibold text-derby-green">{row.type}</td>
                    <td className="p-3 text-center">{row.difficulty}</td>
                    <td className="p-3 text-center text-gray-600">{row.min}</td>
                    <td className="p-3 text-center text-gray-600">{row.payout}</td>
                    <td className="p-3 text-center text-gray-600">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Payouts vary based on odds and field size. The Kentucky Derby typically has 20 horses, creating larger potential exotic payouts.
          </p>
        </section>

        {/* Straight Bets */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Straight Bets: Win, Place, and Show
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Straight bets are the foundation of horse racing wagering. They are
              simple, affordable, and perfect for newcomers to the Kentucky Derby.
              The minimum wager on straight bets is two dollars at Churchill Downs.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            {[
              {
                title: "Win",
                text: "Your horse must finish first. This is the most straightforward bet and offers the highest payout among straight wagers. If you bet two dollars to win on a horse at 10-1 odds, you collect 22 dollars (20 dollars profit plus your two-dollar stake).",
              },
              {
                title: "Place",
                text: "Your horse must finish first or second. The payout is lower than a win bet because you have two chances to cash. A two-dollar place bet on a 10-1 longshot might pay eight to 12 dollars depending on who finishes alongside your horse.",
              },
              {
                title: "Show",
                text: "Your horse must finish in the top three. This is the safest straight bet but returns the least. Show payouts at the Derby are often modest, typically paying between three and six dollars on a two-dollar wager, even on longer-priced horses.",
              },
            ].map((bet, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  {bet.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {bet.text}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Across the Board:</strong> When you bet &ldquo;across the board,&rdquo;
              you are placing three separate bets on the same horse: win, place, and show.
              A two-dollar across-the-board wager costs six dollars total. If your horse
              wins, you collect all three payouts. If it finishes second, you collect place
              and show. If it finishes third, you collect only the show payout.
            </p>
          </div>
        </section>

        {/* Exotic Bets */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Exotic Bets: Exacta, Trifecta, and Superfecta
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Exotic bets require picking multiple horses in the correct order of
              finish. They are harder to win than straight bets, but the payouts
              can be life-changing. The Kentucky Derby, with its large 20-horse
              field, regularly produces some of the biggest exotic payouts in all
              of horse racing.
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Exacta
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pick the first two finishers in exact order. With a 20-horse field,
                there are 380 possible exacta combinations, making this a challenging
                but popular bet. A two-dollar exacta at the Derby typically pays
                anywhere from 30 dollars on a chalk result to several hundred dollars
                when a longshot finishes in the top two. The minimum wager is typically
                two dollars for a straight exacta.
              </p>
            </div>
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Trifecta
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pick the first three finishers in exact order. The number of
                possible combinations jumps to 6,840 in a 20-horse field, which is
                why trifecta payouts at the Derby can reach thousands of dollars on
                a one-dollar base bet. Getting the order right is the challenge, but
                the potential return makes the trifecta one of the most popular
                exotic wagers on Derby Day.
              </p>
            </div>
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Superfecta
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pick the first four finishers in exact order. With 116,280 possible
                combinations in a full 20-horse Derby field, this is the most
                difficult standard wager, but it also delivers the biggest rewards.
                The minimum bet on a superfecta is typically 10 cents, allowing
                bettors to spread their money across many combinations. The 2005
                Kentucky Derby superfecta famously paid over 864,000 dollars on a
                one-dollar bet.
              </p>
            </div>
          </div>
        </section>

        {/* Multi-Race Bets */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Multi-Race Bets: Daily Double, Pick 3, Pick 4, Pick 6
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Multi-race wagers require picking the winner of two or more
              consecutive races on a single ticket. These bets carry over from one
              race to the next, meaning you cannot collect until the final leg
              completes. The appeal is that multi-race bets often pay
              substantially more than simply betting each race individually.
            </p>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-serif text-derby-green">Bet Type</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Races</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Minimum</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Daily Double</td>
                  <td className="py-3 pr-4">2</td>
                  <td className="py-3 pr-4">$2</td>
                  <td className="py-3 pr-4">Pick the winners of two consecutive races. A popular wager for the Kentucky Oaks/Derby sequence.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Pick 3</td>
                  <td className="py-3 pr-4">3</td>
                  <td className="py-3 pr-4">$1</td>
                  <td className="py-3 pr-4">Pick the winner of three consecutive races. Lower base cost allows more combinations.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Pick 4</td>
                  <td className="py-3 pr-4">4</td>
                  <td className="py-3 pr-4">$0.50</td>
                  <td className="py-3 pr-4">Pick four consecutive winners. Usually offered on the late card leading into the Derby.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Pick 6</td>
                  <td className="py-3 pr-4">6</td>
                  <td className="py-3 pr-4">$0.20</td>
                  <td className="py-3 pr-4">Pick six consecutive winners. Often features carryover pools worth hundreds of thousands. Low base cost enables wide coverage.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Boxing and Wheeling */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Box Bets and Wheeling Strategies
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Boxing and wheeling are techniques that allow you to cover multiple
              finishing orders on exotic bets without having to buy every
              combination individually. They increase your chances of hitting
              the bet, but they also increase the total cost of your wager.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="bg-white border-2 border-derby-green rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-derby-green px-6 py-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  Box Bets
                </h3>
              </div>
              <div className="p-6 space-y-3 text-gray-700 leading-relaxed">
                <p>
                  A box covers all possible finishing orders among your selected
                  horses. If you box three horses in an exacta, you cover all six
                  possible first-second combinations for a total cost of 12 dollars
                  at a two-dollar base.
                </p>
                <p className="text-sm bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <strong>Exacta box (3 horses, $2 base):</strong> 3 x 2 = 6 combos x $2 = $12<br />
                  <strong>Trifecta box (4 horses, $1 base):</strong> 4 x 3 x 2 = 24 combos x $1 = $24<br />
                  <strong>Superfecta box (5 horses, $0.10):</strong> 5 x 4 x 3 x 2 = 120 combos x $0.10 = $12
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-derby-green rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-derby-green px-6 py-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  Wheeling
                </h3>
              </div>
              <div className="p-6 space-y-3 text-gray-700 leading-relaxed">
                <p>
                  A wheel uses one or more key horses in specific positions with
                  other horses filling the remaining spots. This is more cost-efficient
                  than boxing because you are structuring your bet around your strongest
                  opinions.
                </p>
                <p className="text-sm bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <strong>Exacta wheel (1 key horse on top with 5 others):</strong> 5 combos x $2 = $10<br />
                  <strong>Trifecta key (1 on top, 5 for 2nd/3rd):</strong> 20 combos x $1 = $20<br />
                  <strong>Superfecta key (1 on top, 5 for 2nd-4th):</strong> 60 combos x $0.10 = $6
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Calculator Examples */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Cost Calculator: Common Derby Betting Tickets
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Before you finalize your ticket at the betting window, it helps to
              know exactly what your wager will cost. Here are some common Derby
              Day ticket configurations and their total price.
            </p>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-serif text-derby-green">Ticket</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Base</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Combos</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Total Cost</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">$2 Win bet</td>
                  <td className="py-3 pr-4">$2</td>
                  <td className="py-3 pr-4">1</td>
                  <td className="py-3 pr-4">$2</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">$2 Exacta box (4 horses)</td>
                  <td className="py-3 pr-4">$2</td>
                  <td className="py-3 pr-4">12</td>
                  <td className="py-3 pr-4">$24</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">$1 Trifecta box (5 horses)</td>
                  <td className="py-3 pr-4">$1</td>
                  <td className="py-3 pr-4">60</td>
                  <td className="py-3 pr-4">$60</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">$0.10 Superfecta box (6 horses)</td>
                  <td className="py-3 pr-4">$0.10</td>
                  <td className="py-3 pr-4">360</td>
                  <td className="py-3 pr-4">$36</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">$1 Trifecta key (1 with 6)</td>
                  <td className="py-3 pr-4">$1</td>
                  <td className="py-3 pr-4">30</td>
                  <td className="py-3 pr-4">$30</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">$0.50 Pick 4 (2x3x2x4)</td>
                  <td className="py-3 pr-4">$0.50</td>
                  <td className="py-3 pr-4">48</td>
                  <td className="py-3 pr-4">$24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Derby Bet Types
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
            Continue Exploring Derby Betting
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/betting/strategy"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Betting Strategy Guide
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Handicapping fundamentals, value betting, and bankroll management for the Derby.
              </p>
            </Link>
            <Link
              href="/betting/where-to-bet"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Where to Bet the Derby
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Online racebooks, Churchill Downs windows, and OTB options.
              </p>
            </Link>
            <Link
              href="/betting/how-to-bet"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                How to Bet the Derby
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Step-by-step guide to placing your first Kentucky Derby wager.
              </p>
            </Link>
            <Link
              href="/race/odds"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Odds &amp; Contenders
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Current morning line odds and analysis for the upcoming Kentucky Derby.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
