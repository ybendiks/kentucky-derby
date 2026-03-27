import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import HowToJsonLd from "@/components/HowToJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "How to Bet on the Kentucky Derby | Beginner's Guide 2026",
  description:
    "Learn how to bet on the Kentucky Derby step by step. Beginner-friendly guide to win, place, show, exacta, trifecta, reading the program, placing bets at the window or on apps, and Derby-specific strategies.",
  keywords: [
    "how to bet on kentucky derby",
    "derby betting for beginners",
    "how to bet on horse racing",
    "kentucky derby bet types",
    "pari-mutuel wagering",
    "exacta trifecta superfecta explained",
    "horse racing betting guide",
    "derby betting strategy",
  ],
  openGraph: {
    title: "How to Bet on the Kentucky Derby | Complete Beginner's Guide",
    description:
      "Everything first-time bettors need to know for the 2026 Kentucky Derby. Bet types, odds, strategies, and step-by-step instructions for placing your first wager.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What is the minimum bet at the Kentucky Derby?",
    answer:
      "The minimum bet for most wager types at the Kentucky Derby is $2. This applies to win, place, show, exacta, trifecta, and most other bets. Some exotic wagers like the superfecta have a $1 minimum. If you are betting at Churchill Downs on Derby Day, bring cash in small bills since the betting windows move fastest when you have exact amounts ready.",
  },
  {
    question: "Can I bet on the Kentucky Derby from my phone?",
    answer:
      "Yes, you can bet on the Kentucky Derby from your phone using licensed platforms such as TwinSpires, FanDuel Racing, TVG, and others. You must be located in a state where online horse racing wagering is legal, and you need to create an account and verify your identity before Derby Day. Most apps offer signup bonuses for new users. Download the app and set up your account at least a day before the race to avoid last-minute issues.",
  },
  {
    question: "What is the easiest bet for a first-time Derby bettor?",
    answer:
      "A win bet is the simplest and most straightforward wager for first-time bettors. Pick the horse you think will finish first and place a $2 or $5 bet. If your horse wins, you collect your payout. A show bet is even safer because your horse only needs to finish in the top three for you to win, though the payouts are smaller. Many beginners start with a $2 win bet on a horse they like combined with a $2 show bet on the same horse for insurance.",
  },
  {
    question: "How much money should I bring for Kentucky Derby betting?",
    answer:
      "A budget of $20 to $50 is plenty for a first-time Derby bettor to have fun with several different wagers across the day. The Kentucky Derby card typically features 14 races, so you can spread your bankroll across multiple races to extend the excitement. Set a firm budget before you arrive and treat it as entertainment money, the same as you would spend on a concert or sporting event. Never bet more than you are comfortable losing.",
  },
];

const howToSteps = [
  {
    name: "Get a racing program",
    text: "Purchase a racing program or pull up the free digital program on the TwinSpires or Churchill Downs app. The program lists every horse in each race along with the jockey, trainer, morning line odds, post position, and recent race history. Spend a few minutes reviewing the entries for the Derby race before you bet.",
  },
  {
    name: "Choose your horse or horses",
    text: "Review the program and pick the horse or horses you want to bet on. You can go with a favorite based on odds, a name you like, or do some research on each contender's recent performance. For your first time, there is nothing wrong with picking a horse because you like the jockey's silks or the horse's name.",
  },
  {
    name: "Decide on your bet type",
    text: "Choose what kind of wager to make. For beginners, start with a straight bet: win, place, or show. If you are feeling more adventurous, try an exacta box with two or three horses. Know how much each bet will cost before you approach the window.",
  },
  {
    name: "Approach the betting window or open your app",
    text: "At Churchill Downs, find a betting window or self-service terminal. On an app like TwinSpires, navigate to the Kentucky Derby race card. At the window, state your bet clearly using this format: the track name, race number, dollar amount, bet type, and horse number. For example: 'Churchill Downs, Race 12, two dollars to win on number five.'",
  },
  {
    name: "Place your bet and keep your ticket",
    text: "Hand over your cash at the window and receive your printed ticket, or confirm your wager on the app. Double-check that the ticket matches what you intended to bet. At the track, do not throw away or lose your ticket — it is your only proof of the wager and you need it to collect any winnings.",
  },
  {
    name: "Watch the race and collect your winnings",
    text: "Watch the race and cheer for your horse. After the race is declared official and results are confirmed, take your winning ticket to any cashier window to collect your payout. On betting apps, winnings are automatically credited to your account. Results typically become official within a few minutes of the race finishing.",
  },
];

export default function HowToBetPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Betting", href: "/betting" },
          { name: "How to Bet", href: "/betting/how-to-bet" },
        ]}
      />
      <ArticleJsonLd
        title="How to Bet on the Kentucky Derby: A Beginner's Guide"
        description="Step-by-step guide for first-time bettors at the Kentucky Derby, covering bet types, odds, strategies, and how to place wagers at the track or online."
        datePublished="2025-03-15"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <HowToJsonLd
        name="How to Place a Bet on the Kentucky Derby"
        description="Step-by-step instructions for placing your first bet on the Kentucky Derby, from reading the program to collecting your winnings."
        totalTime="PT10M"
        steps={howToSteps}
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
            <li className="text-derby-green font-medium">How to Bet</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-white py-20 sm:py-28 relative overflow-hidden -mx-4 -mt-12 mb-12">
          <Image
            src="https://images.unsplash.com/photo-1509399316151-9b86c70fdd40?w=1920&q=80"
            alt="Betting on the Kentucky Derby"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              How to Bet on the Kentucky Derby: A Beginner&rsquo;s Guide
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              The Kentucky Derby is the single biggest day in American horse
              racing, and placing a bet is part of the tradition even if you have
              never wagered on a horse in your life. This guide covers everything
              a first-time bettor needs to know &mdash; from understanding the
              odds to placing your first wager at the window or on your phone.
            </p>
          </div>
        </section>

        {/* Quick Reference Box */}
        <div className="bg-derby-cream border border-derby-gold/30 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Minimum Bet</p>
              <p className="text-lg font-semibold text-derby-green">$2</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Easiest Bet</p>
              <p className="text-lg font-semibold text-derby-green">Win / Show</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Biggest Payout</p>
              <p className="text-lg font-semibold text-derby-green">Superfecta</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Where to Bet</p>
              <p className="text-lg font-semibold text-derby-green">Track / Apps</p>
            </div>
          </div>
        </div>

        {/* Why Derby Is Great for Beginners */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Why the Kentucky Derby Is Perfect for First-Time Bettors
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Most horse racing takes place on quiet weekday afternoons at
              regional tracks, which can feel intimidating if you do not know
              the sport. The Kentucky Derby is different. Over 150,000 people
              pack Churchill Downs on the first Saturday in May, and a huge
              portion of them are casual fans placing their very first horse
              racing bet. The atmosphere is festive and welcoming, the staff at
              betting windows are accustomed to helping newcomers, and the
              shared excitement of the crowd makes the experience accessible
              regardless of your expertise level.
            </p>
            <p>
              The Derby is also a single race with a field of around 20 horses,
              so you only need to focus on one race to participate. You do not
              need to handicap an entire card of 14 races (though you certainly
              can). A simple $2 bet on a horse whose name catches your eye is
              enough to make the two-minute race one of the most thrilling
              experiences in sports.
            </p>
          </div>
        </section>

        {/* Pari-Mutuel Wagering */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How Horse Racing Betting Works: Pari-Mutuel Wagering
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Horse racing uses a system called pari-mutuel wagering, which is
              fundamentally different from sports betting against a bookmaker.
              In pari-mutuel betting, all wagers on a race are pooled together.
              The track takes a percentage of the pool (called the takeout,
              typically 15 to 25 percent depending on the bet type), and the
              remainder is divided among the winning bettors proportionally.
            </p>
            <p>
              This means you are not betting against the house &mdash; you are
              betting against every other bettor at the track and online. The
              odds are not set in advance by a bookmaker; they shift in real
              time based on how much money the public bets on each horse. A
              horse that receives a lot of betting action becomes the favorite
              with lower odds, while a horse with less action offers higher
              potential payouts. The final odds are not locked in until the
              gates open and betting closes.
            </p>
          </div>
        </section>

        {/* Straight Bets */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Straight Bets: Win, Place, and Show
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Straight bets are the foundation of horse racing wagering and
              where every beginner should start. They are simple: you pick one
              horse and one finishing position requirement.
            </p>
          </div>
          <div className="mt-6 space-y-6">
            {/* Win */}
            <div className="bg-white border-2 border-derby-green rounded-xl overflow-hidden">
              <div className="bg-derby-green px-6 py-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  Win Bet
                </h3>
                <p className="text-derby-gold text-sm">Your horse must finish 1st</p>
              </div>
              <div className="p-6 text-gray-700 leading-relaxed">
                <p>
                  The most straightforward wager in horse racing. You pick one
                  horse and it must cross the finish line first for you to win.
                  Win bets offer the highest payouts among straight bets because
                  they are the hardest to hit.
                </p>
                <div className="mt-4 bg-derby-cream rounded-lg p-4 border border-derby-gold/20">
                  <p className="text-sm font-medium text-derby-green">Example:</p>
                  <p className="text-sm mt-1">
                    You bet $10 on a horse at 5-1 odds. If that horse wins, you
                    receive $60 back &mdash; your original $10 stake plus $50
                    in profit. A 5-1 horse means for every $1 wagered, you win
                    $5 in profit.
                  </p>
                </div>
              </div>
            </div>

            {/* Place */}
            <div className="bg-white border-2 border-derby-green rounded-xl overflow-hidden">
              <div className="bg-derby-green px-6 py-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  Place Bet
                </h3>
                <p className="text-derby-gold text-sm">Your horse must finish 1st or 2nd</p>
              </div>
              <div className="p-6 text-gray-700 leading-relaxed">
                <p>
                  A place bet pays off if your horse finishes first or second.
                  You have twice the chance of winning compared to a win bet,
                  but the payouts are smaller because the pool is split among
                  more winners. Place bets are a good choice when you believe a
                  horse will run competitively but are not sure it can win
                  outright in a large Derby field.
                </p>
              </div>
            </div>

            {/* Show */}
            <div className="bg-white border-2 border-derby-green rounded-xl overflow-hidden">
              <div className="bg-derby-green px-6 py-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  Show Bet
                </h3>
                <p className="text-derby-gold text-sm">Your horse must finish 1st, 2nd, or 3rd</p>
              </div>
              <div className="p-6 text-gray-700 leading-relaxed">
                <p>
                  The safest straight bet. Your horse just needs to finish in
                  the top three. Show bets have the lowest payouts of the three
                  straight bet types, but they give you the best chance of
                  cashing a ticket. In a 20-horse Derby field, a show bet on a
                  mid-range contender can still return a reasonable payout while
                  keeping your ticket alive through a chaotic race.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exotic Bets */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Exotic Bets: Exacta, Trifecta, Superfecta, and Box Bets
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Exotic bets involve picking the finishing order of multiple
              horses. They are harder to hit than straight bets but offer
              significantly larger payouts. The Kentucky Derby, with its large
              field of 20 horses and unpredictable outcomes, is famous for
              producing enormous exotic bet payoffs.
            </p>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-serif text-derby-green">Bet Type</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">What You Pick</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Difficulty</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Typical Derby Payout</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Exacta</td>
                  <td className="py-3 pr-4">1st and 2nd in exact order</td>
                  <td className="py-3 pr-4">Moderate</td>
                  <td className="py-3 pr-4">$100 &ndash; $500+ on a $2 bet</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Trifecta</td>
                  <td className="py-3 pr-4">1st, 2nd, and 3rd in exact order</td>
                  <td className="py-3 pr-4">Hard</td>
                  <td className="py-3 pr-4">$500 &ndash; $5,000+ on a $2 bet</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Superfecta</td>
                  <td className="py-3 pr-4">1st, 2nd, 3rd, and 4th in exact order</td>
                  <td className="py-3 pr-4">Very Hard</td>
                  <td className="py-3 pr-4">$1,000 &ndash; $100,000+ on a $1 bet</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Box Bets Explainer */}
          <div className="mt-8 bg-derby-cream border border-derby-gold/30 rounded-xl p-6">
            <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
              What Is a Box Bet?
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                A box bet covers all possible finishing order combinations of
                the horses you select. Instead of needing your picks to finish
                in one exact order, a box lets them finish in any order among
                the positions you are betting on.
              </p>
              <p>
                For example, a $2 exacta box with horses 3, 7, and 10 costs $12
                because it covers all six possible finishing combinations of
                those three horses in the top two positions. A $2 trifecta box
                with three horses costs $12 and covers all six orderings of
                those horses finishing 1st, 2nd, and 3rd. Boxing four horses in
                a trifecta costs $48 (24 combinations at $2 each).
              </p>
              <p>
                Box bets are popular for the Derby because the large field
                makes predicting the exact finishing order extremely difficult.
                They cost more than a straight exotic bet but dramatically
                increase your chances of cashing a ticket.
              </p>
            </div>
          </div>
        </section>

        {/* Reading the Program */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How to Read the Racing Program
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The racing program (also called the racing form or past
              performances) is your primary tool for making informed bets. It
              looks dense and intimidating at first glance, but you only need
              to focus on a few key data points as a beginner:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Post position (PP):</strong> The starting gate number.
                  In the Derby, inside posts (1 through 5) can get crowded in a
                  20-horse field, while far outside posts (18 through 20) force
                  the horse to cover extra ground on the first turn.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Morning line odds:</strong> The track handicapper&rsquo;s
                  estimate of each horse&rsquo;s chances, released the day before
                  the race. These are a starting point, not the final odds. Live
                  odds change right up until post time.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Jockey and trainer:</strong> Top jockeys and trainers
                  win at higher rates. Names like leading riders and
                  trainers with strong Derby records are worth noting. The
                  program lists each horse&rsquo;s connections.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Recent race results:</strong> Look at each
                  horse&rsquo;s last three to five races. Did it finish in the
                  top three? Was it running against strong competition? Horses
                  trending upward in their recent starts tend to run well on
                  Derby Day.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Speed figures:</strong> Numerical ratings (like Beyer
                  Speed Figures) that quantify how fast a horse ran in previous
                  races. Higher is better. Comparing speed figures across
                  horses gives you an objective way to rank the field.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* How to Place a Bet - Step by Step */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How to Place a Bet: Step by Step
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg mb-6">
            <p>
              Whether you are standing at a betting window at Churchill Downs
              or using an app on your couch, the process follows the same
              basic steps. Here is how to place your first Kentucky Derby bet:
            </p>
          </div>
          <ol className="space-y-6">
            {howToSteps.map((step, i) => (
              <li key={i} className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 bg-derby-green text-white text-sm font-bold rounded-full shrink-0 mr-4 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-derby-green mb-1">
                    {step.name}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Where to Bet */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Where to Place Your Kentucky Derby Bets
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              You have several options for placing Kentucky Derby bets, whether
              you are attending the race in person or watching from home.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="bg-white border-2 border-derby-green rounded-xl overflow-hidden">
              <div className="bg-derby-green px-5 py-3">
                <h3 className="font-serif text-lg font-bold text-white">At the Track</h3>
              </div>
              <div className="p-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  Churchill Downs has betting windows staffed by tellers and
                  self-service machines throughout the facility. Bring cash in
                  small bills. State your bet clearly: track, race number,
                  amount, bet type, and horse number. Lines get long before
                  the Derby race, so place your bets early.
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-derby-green rounded-xl overflow-hidden">
              <div className="bg-derby-green px-5 py-3">
                <h3 className="font-serif text-lg font-bold text-white">Mobile Apps</h3>
              </div>
              <div className="p-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  TwinSpires (the official Churchill Downs betting app),
                  FanDuel Racing, TVG, and other licensed platforms allow you
                  to bet from your phone. Create your account and fund it
                  before Derby Day. You can even use these apps while sitting
                  in the Churchill Downs grandstands to skip the window lines.
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-derby-green rounded-xl overflow-hidden">
              <div className="bg-derby-green px-5 py-3">
                <h3 className="font-serif text-lg font-bold text-white">Off-Track Venues</h3>
              </div>
              <div className="p-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  Off-track betting (OTB) locations, simulcast facilities, and
                  some casinos offer in-person Derby wagering even if you are
                  not at Churchill Downs. Check your state&rsquo;s regulations
                  for off-track betting venues near you.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            For a detailed comparison of every platform, see our{" "}
            <Link
              href="/betting/where-to-bet"
              className="text-derby-green font-medium underline hover:text-derby-gold transition-colors"
            >
              Where to Bet on the Kentucky Derby
            </Link>{" "}
            guide.
          </p>
        </section>

        {/* Visual: Pari-Mutuel Pool Flow Diagram */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How Pari-Mutuel Payouts Work
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Understanding how the pool system determines your payout is key to
            smart betting. Here is a simplified visual of how money flows.
          </p>
          <div className="bg-white border-2 border-derby-green/20 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 justify-center">
              <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-4 text-center w-full md:w-40">
                <p className="text-2xl font-bold text-blue-700">$10M</p>
                <p className="text-xs text-blue-600 mt-1">Total Win Pool</p>
                <p className="text-[10px] text-blue-400">All bettors combined</p>
              </div>
              <div className="text-2xl text-gray-300 hidden md:block">&rarr;</div>
              <div className="text-2xl text-gray-300 md:hidden">&darr;</div>
              <div className="bg-red-100 border-2 border-red-300 rounded-xl p-4 text-center w-full md:w-40">
                <p className="text-2xl font-bold text-red-700">-18%</p>
                <p className="text-xs text-red-600 mt-1">Track Takeout</p>
                <p className="text-[10px] text-red-400">$1.8M to track/state</p>
              </div>
              <div className="text-2xl text-gray-300 hidden md:block">&rarr;</div>
              <div className="text-2xl text-gray-300 md:hidden">&darr;</div>
              <div className="bg-green-100 border-2 border-green-300 rounded-xl p-4 text-center w-full md:w-40">
                <p className="text-2xl font-bold text-green-700">$8.2M</p>
                <p className="text-xs text-green-600 mt-1">Payout Pool</p>
                <p className="text-[10px] text-green-400">Split among winners</p>
              </div>
              <div className="text-2xl text-gray-300 hidden md:block">&rarr;</div>
              <div className="text-2xl text-gray-300 md:hidden">&darr;</div>
              <div className="bg-derby-gold/20 border-2 border-derby-gold rounded-xl p-4 text-center w-full md:w-40">
                <p className="text-lg font-bold text-derby-green">Your Share</p>
                <p className="text-xs text-derby-green/70 mt-1">Based on winning pool %</p>
                <p className="text-[10px] text-gray-500">More $ on horse = lower odds</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              This is why odds change in real time &mdash; every bet shifts the pool distribution.
            </p>
          </div>
        </section>

        {/* Morning Line vs Live Odds */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Morning Line vs. Live Odds: What&rsquo;s the Difference?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The morning line is the track handicapper&rsquo;s prediction of
              what the final odds will look like, published the day before the
              race. It gives you a rough sense of which horses are favored and
              which are longshots, but it is not what you actually get paid on.
            </p>
            <p>
              Live odds (also called tote board odds) are the real-time odds
              that change continuously as money comes into the pools. Every
              time someone places a bet, the odds adjust. A horse listed at
              10-1 on the morning line might go off at 6-1 if the public bets
              heavily on it, or drift to 15-1 if money flows elsewhere. The
              odds you see when the starting gate opens are your final payout
              odds.
            </p>
            <p>
              This is important for beginners to understand: the number on
              your ticket when you bet is not necessarily what you get paid.
              Your payout is determined by the final odds at post time. In a
              pari-mutuel system, early bets on a horse can lower its odds
              significantly by race time.
            </p>
          </div>
        </section>

        {/* Derby Betting Strategies */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Kentucky Derby Betting Strategies for Beginners
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Start with Win, Place, or Show",
                text: "If this is your first time betting on horses, stick to straight bets. A $5 win bet on a horse you like gives you a clear rooting interest. Add a $2 show bet on a second horse for a backup wager. Simple bets are the most fun when you are learning.",
              },
              {
                title: "Box a Small Trifecta",
                text: "Pick three horses you think will finish in the top three and box them in a $2 trifecta. This costs $12 and covers all six possible orderings. If all three hit the top three in any order, you win. Trifecta payouts in the Derby regularly reach hundreds or thousands of dollars.",
              },
              {
                title: "Spread Your Budget Across Races",
                text: "The Derby Day card has 14 races, not just the main event. Spread a few small bets across the undercard races to get comfortable before the big race. By the time the Derby rolls around, you will have practiced the betting process and feel confident at the window.",
              },
              {
                title: "Consider a Longshot on Top",
                text: "The Derby has been won by double-digit longshots more often than most people realize. If you box a trifecta or superfecta, include at least one horse at 15-1 or higher. The payout when a longshot finishes in the money makes exotic bets exponentially more valuable.",
              },
            ].map((strategy, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {strategy.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {strategy.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Common Betting Mistakes to Avoid
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Betting too much on one race:</strong> Set a total
                  budget for the day and divide it across multiple bets. Never
                  put your entire bankroll on a single wager, no matter how
                  confident you feel.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Chasing losses:</strong> If your early bets do not
                  hit, resist the urge to increase your bet sizes to win it
                  back. Stick to your plan and your budget.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Only betting the favorite:</strong> Derby favorites
                  win roughly a third of the time, which means they lose about
                  two thirds of the time. The favorite is not a sure thing in a
                  20-horse field. Spread your action across different horses
                  and bet types.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Overcomplicating exotic bets:</strong> Boxing seven
                  horses in a superfecta sounds fun until you realize it costs
                  $840. Before placing an exotic bet, calculate the total cost
                  and make sure it fits your budget. Start small.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                <span>
                  <strong>Throwing away your ticket:</strong> At the track,
                  your paper ticket is your receipt. Do not discard it until
                  results are official and you have confirmed it is not a
                  winner. Photo-finish reviews and disqualifications can change
                  results after the race.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Responsible Gambling */}
        <section className="mb-12">
          <div className="bg-derby-green rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">
              A Note on Responsible Gambling
            </h2>
            <p className="text-derby-cream leading-relaxed">
              Betting on the Kentucky Derby should be entertainment, not a
              financial strategy. Set a firm budget before Derby Day and treat
              it the same way you would treat money spent on a concert, a nice
              dinner, or a day at a theme park. Never bet money you cannot
              afford to lose. If you or someone you know is struggling with
              gambling, the National Council on Problem Gambling offers a free,
              confidential helpline at 1-800-522-4700 and resources at
              ncpgambling.org.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Betting on the Kentucky Derby
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
            Continue Learning About Derby Betting
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/betting/bet-types"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                All Bet Types Explained
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Deep dive into every wager type available at the Kentucky Derby,
                including Pick 4, Pick 6, and daily doubles.
              </p>
            </Link>
            <Link
              href="/betting/strategy"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Betting Strategy
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Advanced handicapping methods, value betting, and bankroll
                management for experienced bettors.
              </p>
            </Link>
            <Link
              href="/betting/where-to-bet"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Where to Bet on the Derby
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Compare TwinSpires, FanDuel Racing, TVG, and other platforms
                for online Derby wagering.
              </p>
            </Link>
            <Link
              href="/race/odds"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                2026 Derby Odds
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Current odds, morning line projections, and contender analysis
                for the 2026 Kentucky Derby field.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
