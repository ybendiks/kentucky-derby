import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Where to Bet on the Kentucky Derby | Online, On-Track & OTB Options",
  description:
    "Find the best places to bet on the Kentucky Derby: at Churchill Downs, online racebooks like TwinSpires and TVG, off-track betting locations, state-by-state legality, and how to set up an account.",
  keywords: [
    "where to bet kentucky derby",
    "online horse racing betting",
    "twinspires kentucky derby",
    "tvg horse racing",
    "off-track betting derby",
    "churchill downs betting windows",
  ],
  openGraph: {
    title: "Where to Bet on the Kentucky Derby | Complete Guide",
    description:
      "Every option for betting the Kentucky Derby: on-track at Churchill Downs, online racebooks, off-track betting, and a state-by-state legality overview.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "Can I bet on the Kentucky Derby online?",
    answer:
      "Yes, you can bet on the Kentucky Derby online through licensed advance deposit wagering (ADW) platforms such as TwinSpires, TVG, DK Horse, FanDuel Racing, and BetMGM Horse Racing. Online horse racing betting is legal in most US states because it falls under the Interstate Horseracing Act rather than traditional sports betting laws. You must be at least 18 or 21 years old depending on your state, and you need to create and fund an account before race day.",
  },
  {
    question: "What is the minimum bet at Churchill Downs on Derby Day?",
    answer:
      "The minimum bet at Churchill Downs on Kentucky Derby Day is two dollars for straight wagers such as win, place, and show. For exotic bets, the minimums are typically two dollars for exactas, one dollar for trifectas, and 10 cents for superfectas. Multi-race wagers like the Pick 4 have a 50-cent minimum and the Pick 6 has a 20-cent minimum. Self-service betting machines accept the same minimums as staffed windows.",
  },
  {
    question: "Can I bet on the Kentucky Derby if I don't live near a racetrack?",
    answer:
      "Yes, most Americans can bet on the Kentucky Derby regardless of their proximity to a racetrack. Online ADW platforms are available in the majority of US states. Additionally, many states have off-track betting (OTB) facilities, simulcast centers, and partner venues that broadcast and accept wagers on the Kentucky Derby. Check your state's racing commission website to confirm which platforms and locations are licensed to operate in your area.",
  },
];

export default function WhereToBetPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Betting", href: "/betting" },
          { name: "Where to Bet", href: "/betting/where-to-bet" },
        ]}
      />
      <ArticleJsonLd
        title="Where to Bet on the Kentucky Derby"
        description="Complete guide to where and how to bet on the Kentucky Derby, including online, on-track, and off-track options."
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
            <li className="text-derby-green font-medium">Where to Bet</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            Where to Bet on the Kentucky Derby
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            You do not need to be at Churchill Downs to wager on the Kentucky
            Derby. From online racebooks to off-track betting facilities, there
            are more ways than ever to get your money down on the first Saturday
            in May.
          </p>
        </header>

        {/* Betting Options Decision Flowchart */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Which Betting Method Is Right for You?
          </h2>
          <div className="bg-white border-2 border-derby-green/20 rounded-2xl p-6">
            <div className="text-center mb-6">
              <div className="inline-block bg-derby-green text-white rounded-full px-6 py-3 font-serif font-bold">
                Are you attending the Derby in person?
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Yes branch */}
              <div className="border-2 border-derby-green/30 rounded-xl overflow-hidden">
                <div className="bg-derby-green/10 px-4 py-3 text-center">
                  <p className="font-bold text-derby-green">YES &mdash; At Churchill Downs</p>
                </div>
                <div className="p-4 space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-derby-gold rounded-full flex items-center justify-center text-xs font-bold text-derby-green shrink-0">1</span>
                    <span className="text-gray-700"><strong>Best:</strong> TwinSpires app (skip window lines)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-derby-gold/60 rounded-full flex items-center justify-center text-xs font-bold text-derby-green shrink-0">2</span>
                    <span className="text-gray-700"><strong>Good:</strong> Self-service betting machines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">3</span>
                    <span className="text-gray-700"><strong>Classic:</strong> Staffed betting windows</span>
                  </div>
                </div>
              </div>
              {/* No branch */}
              <div className="border-2 border-derby-green/30 rounded-xl overflow-hidden">
                <div className="bg-derby-green/10 px-4 py-3 text-center">
                  <p className="font-bold text-derby-green">NO &mdash; Watching from Home</p>
                </div>
                <div className="p-4 space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-derby-gold rounded-full flex items-center justify-center text-xs font-bold text-derby-green shrink-0">1</span>
                    <span className="text-gray-700"><strong>Best:</strong> Online ADW platform (TwinSpires, TVG, FanDuel)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-derby-gold/60 rounded-full flex items-center justify-center text-xs font-bold text-derby-green shrink-0">2</span>
                    <span className="text-gray-700"><strong>Social:</strong> Off-track betting (OTB) venue near you</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">3</span>
                    <span className="text-gray-700"><strong>Alt:</strong> Casino simulcast center</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              Set up your online account at least 24 hours before race day to avoid verification delays.
            </p>
          </div>
        </section>

        {/* At Churchill Downs */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Betting at Churchill Downs
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              If you are attending the Kentucky Derby in person, Churchill Downs
              offers two primary ways to place your wagers: staffed betting
              windows and self-service machines. Both accept the same bet types
              and minimums.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <div className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Staffed Betting Windows
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Traditional teller windows are located throughout the grandstand,
                clubhouse, and premium areas. Tell the teller the race number,
                dollar amount, bet type, and horse number. Lines on Derby Day
                can be extremely long, so place your bets early. Windows may
                close five minutes before post time for the Derby race itself.
              </p>
            </div>
            <div className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Self-Service Machines
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Automated wagering terminals accept cash and allow you to build
                your tickets using a touchscreen. They are generally faster than
                staffed windows, especially for complex exotic bets. You can
                review your ticket before confirming, which reduces errors. The
                machines print a voucher that you scan at any window or machine
                to collect winnings.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Pro tip:</strong> Download the TwinSpires app before arriving
              at Churchill Downs. You can place bets directly from your phone
              while on the grounds, skipping the lines entirely. Your account
              must be funded in advance and you must enable location services to
              verify you are at the track.
            </p>
          </div>
        </section>

        {/* Online Racebooks */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Online Racebooks
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Online advance deposit wagering (ADW) platforms are the most
              convenient way to bet on the Kentucky Derby from anywhere in the
              United States. These platforms are licensed under the Interstate
              Horseracing Act and are legal in most states. Here are the
              major platforms:
            </p>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-serif text-derby-green">Platform</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Highlights</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Signup Bonus</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">TwinSpires</td>
                  <td className="py-3 pr-4">Official betting platform of Churchill Downs. Best interface for exotic wagers. Live streaming included.</td>
                  <td className="py-3 pr-4">Varies by season</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">TVG</td>
                  <td className="py-3 pr-4">Owned by FanDuel Group. Excellent TV coverage and expert analysis. Strong mobile app.</td>
                  <td className="py-3 pr-4">Varies by season</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">DK Horse</td>
                  <td className="py-3 pr-4">DraftKings horse racing platform. Familiar interface for DFS players. Integrated with DraftKings account.</td>
                  <td className="py-3 pr-4">Varies by season</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">FanDuel Racing</td>
                  <td className="py-3 pr-4">Clean mobile experience. Easy for beginners. Shares pools with TVG for deeper liquidity.</td>
                  <td className="py-3 pr-4">Varies by season</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">BetMGM Horse Racing</td>
                  <td className="py-3 pr-4">Part of the BetMGM ecosystem. Good rewards program. Available in most states.</td>
                  <td className="py-3 pr-4">Varies by season</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Off-Track Betting */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Off-Track Betting (OTB) Locations
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Off-track betting facilities broadcast live racing from Churchill
              Downs and accept wagers into the same pari-mutuel pools as
              on-track bettors. OTBs are a great option if you want the
              communal atmosphere of watching the Derby with other racing fans
              but cannot be in Louisville.
            </p>
            <p>
              OTB locations exist in many states and go by different names:
              simulcast centers, racinos, and off-track wagering parlors. Some
              are standalone facilities, while others operate inside casinos or
              racetracks that run their own live racing at other times of the
              year.
            </p>
            <p>
              On Kentucky Derby Day, many OTBs host special events with
              food, drinks, hat contests, and enhanced wagering promotions.
              Arrive early to secure a seat, as these venues fill up quickly
              for the Derby. Contact your local OTB or check your state racing
              commission website for locations near you.
            </p>
          </div>
        </section>

        {/* State Legality */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            State-by-State Legality Overview
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Horse racing wagering and sports betting are regulated differently
              in the United States. While sports betting legality varies widely,
              pari-mutuel horse racing wagering through licensed ADW platforms
              is available in most states under federal law.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            {[
              {
                title: "Available in Most States",
                text: "ADW horse racing betting through platforms like TwinSpires and TVG is legal and accessible in the vast majority of US states. These platforms operate under the Interstate Horseracing Act of 1978, which is separate from state sports betting laws.",
              },
              {
                title: "States With Restrictions",
                text: "A small number of states do not permit online ADW horse racing wagering or have specific restrictions. Check with the platform directly during sign-up, as they will verify your state eligibility automatically based on your address and location.",
              },
              {
                title: "Age Requirements",
                text: "Most states require you to be at least 18 years old to bet on horse racing, though some states set the minimum at 21. ADW platforms verify your age and identity during the account creation process.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Setting Up an Account */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How to Set Up an Online Betting Account
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Setting up an online horse racing betting account is
              straightforward, but do not wait until Derby Day to create one.
              Account verification can take a few hours to a full business day,
              and you want to have a funded, working account before post time.
            </p>
          </div>
          <ol className="space-y-4 mt-6">
            {[
              {
                step: "Choose a Licensed Platform",
                detail: "Select a licensed ADW platform like TwinSpires, TVG, DK Horse, or FanDuel Racing. Compare their mobile app reviews, interface, and any signup offers.",
              },
              {
                step: "Create Your Account",
                detail: "Provide your name, date of birth, address, email, and the last four digits of your Social Security Number for identity verification. This is required by law for all pari-mutuel wagering platforms.",
              },
              {
                step: "Verify Your Identity",
                detail: "Most platforms verify instantly using the information you provide. Some may request a photo of your government ID. Complete this step as early as possible to avoid delays on Derby Day.",
              },
              {
                step: "Fund Your Account",
                detail: "Deposit funds using a bank transfer (ACH), debit card, PayPal, or other accepted methods. Bank transfers are typically free but may take one to three business days. Debit cards fund instantly but may carry a small fee on some platforms.",
              },
              {
                step: "Place Your Bets",
                detail: "Navigate to the Churchill Downs card on Derby Day, select the race, choose your bet type, enter your horses and dollar amount, and confirm. Your account balance updates in real time as results are posted.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 bg-derby-green text-white text-sm font-bold rounded-full shrink-0 mr-4 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-derby-green mb-1">
                    {item.step}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Betting the Derby
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
            More Derby Betting Resources
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/betting/bet-types"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Bet Types Explained
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Win, place, show, exacta, trifecta, and every wager type broken down.
              </p>
            </Link>
            <Link
              href="/betting/strategy"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Betting Strategy Guide
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Handicapping, value betting, and bankroll management for the Derby.
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
                Derby Odds
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Current odds and morning line for the upcoming Kentucky Derby.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
