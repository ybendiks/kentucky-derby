import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "2026 Kentucky Derby Odds & Predictions | Current Futures & Analysis",
  description:
    "Current 2026 Kentucky Derby odds, futures lines, and expert predictions. Compare morning line odds, understand pari-mutuel betting, and find early value picks for the 152nd Run for the Roses.",
  keywords: [
    "kentucky derby odds",
    "kentucky derby predictions 2026",
    "derby odds 2026",
    "kentucky derby futures",
    "kentucky derby favorites",
    "derby morning line odds",
    "kentucky derby longshots",
    "kentucky derby betting odds",
  ],
  openGraph: {
    title: "2026 Kentucky Derby Odds & Predictions",
    description:
      "Live 2026 Kentucky Derby odds, futures lines, and expert predictions. Find the favorites, longshots, and value picks for the Run for the Roses at Churchill Downs.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What are the current odds for the 2026 Kentucky Derby?",
    answer:
      "As of early 2026, the Kentucky Derby futures market lists Paladin at approximately 9-1, Nearly at 10-1, Incredibolt at 12-1, and Commandment at 14-1 among the early favorites. These odds will shift significantly as prep races are completed and the field becomes clearer in the weeks leading up to the first Saturday in May.",
  },
  {
    question: "How often does the favorite win the Kentucky Derby?",
    answer:
      "The post-time favorite wins the Kentucky Derby roughly 30 percent of the time. This means that in seven out of ten races, a horse other than the betting favorite crosses the finish line first. The Derby is famously unpredictable due to the large field size of 20 horses, the distance of a mile and a quarter that many three-year-olds are running for the first time, and the charged atmosphere at Churchill Downs.",
  },
  {
    question: "What is the difference between morning line odds and live odds?",
    answer:
      "Morning line odds are set by the track handicapper before any money is wagered and serve as an educated estimate of how the betting public will wager. Live odds, also called tote board odds, change continuously as bettors place wagers through the pari-mutuel system. By post time, the live odds often differ significantly from the morning line based on actual money placed on each horse.",
  },
  {
    question: "Can you bet on the Kentucky Derby before race day?",
    answer:
      "Yes. Kentucky Derby futures pools open months before the race, typically in the fall and winter preceding the May event. Futures bets lock in your odds at the time you place the wager, which can offer significant value if a horse improves or gains popularity closer to race day. Many online sportsbooks and some racetracks offer futures pools throughout the Derby prep season.",
  },
];

export default function OddsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "The Race", href: "/race" },
          { name: "Odds & Predictions", href: "/race/odds" },
        ]}
      />
      <ArticleJsonLd
        title="2026 Kentucky Derby Odds & Predictions"
        description="Current 2026 Kentucky Derby odds, futures lines, morning line analysis, and expert predictions for the 152nd Run for the Roses."
        datePublished="2025-11-15"
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
              <Link href="/race" className="hover:text-derby-green transition-colors">
                The Race
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-derby-green font-medium">Odds &amp; Predictions</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-white py-20 sm:py-28 relative overflow-hidden -mx-4 -mt-12 mb-12">
          <Image
            src="https://images.unsplash.com/photo-1516673699707-4f2a243fafaf?w=1920&q=80"
            alt="Horse racing at the Kentucky Derby"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              2026 Kentucky Derby Odds &amp; Predictions
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              The Kentucky Derby is the most-wagered horse race in North America, with
              hundreds of millions of dollars flowing through the betting pools each year.
              Whether you are a seasoned handicapper or placing your first Derby wager,
              understanding the odds is essential to making informed bets on the first
              Saturday in May.
            </p>
            <p className="mt-4 text-sm text-white/60">
              Last updated: March 20, 2026 &middot; Odds subject to change
            </p>
          </div>
        </section>

        {/* Current Futures Odds */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Current 2026 Kentucky Derby Futures Odds
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The 2026 Kentucky Derby futures market has been active since late 2025,
              with odds shifting as three-year-olds compete in graded stakes prep races
              across the country. The Road to the Kentucky Derby points system helps
              determine which horses earn a spot in the starting gate, and strong
              performances in points races tend to shorten a horse&rsquo;s futures
              price quickly.
            </p>
            <p>
              Below are the current futures odds for the leading contenders. These odds
              reflect the prices available at major sportsbooks and futures pools as of
              March 2026. Keep in mind that futures odds are locked at the time of your
              wager, which can be an advantage if you spot value early.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-serif text-derby-green">Horse</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Futures Odds</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Trainer</th>
                  <th className="py-3 pr-4 font-serif text-derby-green hidden md:table-cell">Notable Prep Race</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Paladin</td>
                  <td className="py-3 pr-4">9-1</td>
                  <td className="py-3 pr-4">Todd Pletcher</td>
                  <td className="py-3 pr-4 hidden md:table-cell">Florida Derby contender</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Nearly</td>
                  <td className="py-3 pr-4">10-1</td>
                  <td className="py-3 pr-4">Brad Cox</td>
                  <td className="py-3 pr-4 hidden md:table-cell">Louisiana Derby prospect</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Incredibolt</td>
                  <td className="py-3 pr-4">12-1</td>
                  <td className="py-3 pr-4">Steve Asmussen</td>
                  <td className="py-3 pr-4 hidden md:table-cell">Risen Star runner</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Commandment</td>
                  <td className="py-3 pr-4">14-1</td>
                  <td className="py-3 pr-4">Chad Brown</td>
                  <td className="py-3 pr-4 hidden md:table-cell">Wood Memorial target</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Sunset Strip</td>
                  <td className="py-3 pr-4">16-1</td>
                  <td className="py-3 pr-4">Bob Baffert</td>
                  <td className="py-3 pr-4 hidden md:table-cell">Santa Anita Derby</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Iron Phoenix</td>
                  <td className="py-3 pr-4">18-1</td>
                  <td className="py-3 pr-4">Bill Mott</td>
                  <td className="py-3 pr-4 hidden md:table-cell">Blue Grass Stakes entry</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Thunderclap</td>
                  <td className="py-3 pr-4">20-1</td>
                  <td className="py-3 pr-4">Mark Casse</td>
                  <td className="py-3 pr-4 hidden md:table-cell">Tampa Bay Derby winner</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Field (all others)</td>
                  <td className="py-3 pr-4">Varies</td>
                  <td className="py-3 pr-4">Various</td>
                  <td className="py-3 pr-4 hidden md:table-cell">Multiple preps remaining</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-derby-cream border border-derby-gold/30 rounded-xl p-5">
            <p className="text-sm text-gray-600">
              <strong className="text-derby-green">Important:</strong> Futures odds
              represent early market prices and can change dramatically after major prep
              races. A horse listed at 20-1 in March could be the post-time favorite in
              May, or vice versa. Check back regularly for updated odds as the Derby
              prep season unfolds.
            </p>
          </div>
        </section>

        {/* How Derby Odds Work */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How Kentucky Derby Odds Work
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Horse racing in the United States uses a pari-mutuel wagering system, which
              is fundamentally different from fixed-odds sports betting. Understanding
              how this system works is the key to reading the tote board and making
              smart wagers on Derby Day.
            </p>

            <h3 className="font-serif text-xl font-bold text-derby-green mt-8 mb-3">
              The Pari-Mutuel System Explained
            </h3>
            <p>
              In pari-mutuel betting, all wagers on a particular bet type are pooled
              together. The track takes its commission (called the takeout, typically
              between 15 and 22 percent depending on the bet type), and the remaining
              money is divided among the winning ticket holders. This means your final
              payout depends not on a bookmaker&rsquo;s line but on how much money
              other bettors wager on each horse.
            </p>
            <p>
              Because the pools are constantly updated as new bets come in, the odds
              displayed on the tote board change right up until the moment the starting
              gate opens. A horse might be listed at 5-1 twenty minutes before the race
              and drift to 8-1 by post time if money flows to other horses, or shorten
              to 3-1 if a late wave of bets comes in.
            </p>

            <h3 className="font-serif text-xl font-bold text-derby-green mt-8 mb-3">
              Morning Line vs. Live Odds
            </h3>
            <p>
              The morning line is set by the track handicapper, usually the day before
              the race, and published in the official program. It represents the
              handicapper&rsquo;s educated prediction of what the final odds will be at
              post time. The morning line is not a betting line you can wager at. It is
              simply a starting reference point.
            </p>
            <p>
              Once the betting windows and mobile apps open (typically 30 to 60 minutes
              before the race), the live odds begin to appear on the tote board and
              online platforms. These odds update every 60 seconds or so and reflect
              the actual money being wagered. By post time, the live odds are the true
              odds that determine your payout if you hold a winning ticket.
            </p>
            <p>
              It is common for the morning line to differ significantly from the final
              post-time odds. A horse with a morning line of 8-1 might close at 4-1 if
              the betting public hammers it, or drift out to 15-1 if bettors shy away.
              Tracking this line movement is a valuable handicapping tool because it
              reveals where the money is going.
            </p>
          </div>
        </section>

        {/* Understanding Odds Formats */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Understanding Odds Formats
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Depending on where you look, Kentucky Derby odds can be displayed in
              three different formats. All three express the same probability and
              potential payout, just in different notation. Here is how to read each one.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Fractional Odds
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm mb-3">
                The traditional format used at racetracks in the United States and
                displayed on the tote board at Churchill Downs. Fractional odds show
                your profit relative to your stake.
              </p>
              <div className="bg-white rounded-lg p-3 border border-gray-200 text-sm">
                <p className="font-medium text-derby-green mb-1">Example: 5-1 (five to one)</p>
                <p className="text-gray-600">
                  A $2 bet returns $12 total: $10 profit plus your original $2 stake.
                </p>
              </div>
            </div>

            <div className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Decimal Odds
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm mb-3">
                Common in Europe and on many online platforms. Decimal odds represent
                the total payout (including your original stake) per dollar wagered.
              </p>
              <div className="bg-white rounded-lg p-3 border border-gray-200 text-sm">
                <p className="font-medium text-derby-green mb-1">Example: 6.00</p>
                <p className="text-gray-600">
                  A $2 bet returns $12 total. Equivalent to 5-1 fractional odds.
                </p>
              </div>
            </div>

            <div className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Moneyline (American) Odds
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm mb-3">
                Used widely in sports betting. Positive numbers show profit on a $100
                bet. Negative numbers show how much you must bet to profit $100.
              </p>
              <div className="bg-white rounded-lg p-3 border border-gray-200 text-sm">
                <p className="font-medium text-derby-green mb-1">Example: +500</p>
                <p className="text-gray-600">
                  A $100 bet returns $600 total. Equivalent to 5-1 fractional odds.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-serif text-derby-green">Fractional</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Decimal</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Moneyline</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">$2 Bet Pays</th>
                  <th className="py-3 pr-4 font-serif text-derby-green hidden md:table-cell">Implied Probability</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">2-1</td>
                  <td className="py-3 pr-4">3.00</td>
                  <td className="py-3 pr-4">+200</td>
                  <td className="py-3 pr-4">$6.00</td>
                  <td className="py-3 pr-4 hidden md:table-cell">33.3%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">5-1</td>
                  <td className="py-3 pr-4">6.00</td>
                  <td className="py-3 pr-4">+500</td>
                  <td className="py-3 pr-4">$12.00</td>
                  <td className="py-3 pr-4 hidden md:table-cell">16.7%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">10-1</td>
                  <td className="py-3 pr-4">11.00</td>
                  <td className="py-3 pr-4">+1000</td>
                  <td className="py-3 pr-4">$22.00</td>
                  <td className="py-3 pr-4 hidden md:table-cell">9.1%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">20-1</td>
                  <td className="py-3 pr-4">21.00</td>
                  <td className="py-3 pr-4">+2000</td>
                  <td className="py-3 pr-4">$42.00</td>
                  <td className="py-3 pr-4 hidden md:table-cell">4.8%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">50-1</td>
                  <td className="py-3 pr-4">51.00</td>
                  <td className="py-3 pr-4">+5000</td>
                  <td className="py-3 pr-4">$102.00</td>
                  <td className="py-3 pr-4 hidden md:table-cell">2.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Factors That Influence Odds */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Key Factors That Influence Kentucky Derby Odds
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Kentucky Derby odds are shaped by a combination of on-track performance,
              connections, conditions, and public perception. Handicappers weigh these
              factors differently, but all of them play a role in determining which
              horses attract the most betting action.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Prep Race Performance",
                text: "A horse's performance in the Derby prep races is the single most important factor in setting its odds. Impressive wins in graded stakes like the Florida Derby, Santa Anita Derby, Wood Memorial, Blue Grass Stakes, and Louisiana Derby shorten odds quickly. Speed figures, margins of victory, and the quality of horses defeated all matter. A horse that wins multiple preps convincingly will likely be among the favorites.",
              },
              {
                title: "Trainer and Jockey Combinations",
                text: "Certain trainers and jockeys have proven track records at the Kentucky Derby. A top trainer like Todd Pletcher, Brad Cox, or Steve Asmussen paired with a leading jockey signals to the betting public that a horse is well-prepared and well-ridden. First-time Derby trainers or jockeys may see their horse's odds lengthen simply due to the inexperience factor, even if the horse has talent.",
              },
              {
                title: "Post Position Draw",
                text: "Post position matters in the Kentucky Derby. Historically, extreme inside positions (posts 1 and 2) and extreme outside positions (posts 18 through 20) have produced fewer winners than mid-range draws. The post position draw takes place the Monday before the Derby, and odds often shift immediately afterward. A talented horse drawing post 20 might see its odds lengthen, while a mid-pack draw can tighten them.",
              },
              {
                title: "Track and Weather Conditions",
                text: "A sloppy or muddy track at Churchill Downs changes everything. Some horses handle wet footing better than others, and rain in the forecast can reshape the odds board dramatically on race morning. Horses with proven ability on off tracks gain an edge, while horses who have only run on fast surfaces become riskier plays. Checking the weather forecast for Louisville in the days before the Derby is a critical handicapping step.",
              },
              {
                title: "Pedigree and Distance Aptitude",
                text: "The Derby is contested at a mile and a quarter, a distance that most three-year-olds have never raced. Handicappers study a horse's pedigree to assess whether its bloodlines suggest stamina for the classic distance. Horses by sires with strong records at ten furlongs or beyond tend to attract more betting confidence. Speed horses with primarily sprinting pedigrees may see their odds lengthen as bettors worry about them fading in the stretch.",
              },
              {
                title: "Public Perception and Media Buzz",
                text: "The Kentucky Derby attracts enormous casual betting action. A horse that has been featured heavily in media coverage or that has a compelling story (an owner's first Derby starter, a comeback from injury, a local Louisville connection) can attract disproportionate money from casual bettors, driving its odds down regardless of its actual chances. Sharp handicappers look for value by betting against overbet favorites and identifying overlooked contenders.",
              },
            ].map((factor, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {factor.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {factor.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Odds Analysis */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Historical Kentucky Derby Odds Analysis
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              One of the most important lessons for any Kentucky Derby bettor is this:
              favorites do not win as often as you might expect. Over the past several
              decades, the post-time favorite has won the Derby roughly 30 percent of
              the time. That means the horse with the lowest odds at post time loses
              about seven out of every ten Derbies. This unpredictability is precisely
              what makes the race so thrilling and so profitable for bettors who look
              beyond the chalk.
            </p>
            <p>
              The 20-horse field is the largest in American racing at the top level,
              and the chaos of the first turn with that many runners creates scenarios
              where the best horse does not always win. Trips matter enormously. A horse
              stuck behind a wall of traffic while a closer rallies along the rail can
              turn the odds board on its head.
            </p>

            <h3 className="font-serif text-xl font-bold text-derby-green mt-8 mb-3">
              Famous Longshot Winners
            </h3>
            <p>
              Some of the most memorable moments in Kentucky Derby history belong to
              longshots that defied their odds. Mine That Bird in 2009 broke from the
              outside at 50-1 odds, dropped to last early, and rallied through
              impossible traffic along the inside rail to win by nearly seven lengths
              in one of the most stunning finishes in horse racing. Giacomo won in 2005
              at 50-1, returning over $100 on a $2 win ticket. Rich Strike shocked the
              racing world in 2022 as an 80-1 entrant who was a late addition to the
              field and passed the leaders deep in the stretch.
            </p>
            <p>
              These upsets illustrate why experienced Derby bettors spread their action
              across multiple horses rather than loading up on a single favorite. The
              Kentucky Derby rewards bettors who do their homework and find value at
              prices the public has overlooked.
            </p>
          </div>

          <div className="mt-6 bg-white border-2 border-derby-green rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-derby-green px-6 py-4">
              <h3 className="font-serif text-xl font-bold text-white">
                Notable Kentucky Derby Winners by Odds
              </h3>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-2 pr-4 text-sm font-serif text-derby-green">Year</th>
                    <th className="py-2 pr-4 text-sm font-serif text-derby-green">Winner</th>
                    <th className="py-2 pr-4 text-sm font-serif text-derby-green">Odds</th>
                    <th className="py-2 pr-4 text-sm font-serif text-derby-green hidden md:table-cell">Category</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">2022</td>
                    <td className="py-2 pr-4 font-medium">Rich Strike</td>
                    <td className="py-2 pr-4">80-1</td>
                    <td className="py-2 pr-4 hidden md:table-cell">Extreme longshot</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">2009</td>
                    <td className="py-2 pr-4 font-medium">Mine That Bird</td>
                    <td className="py-2 pr-4">50-1</td>
                    <td className="py-2 pr-4 hidden md:table-cell">Longshot</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">2005</td>
                    <td className="py-2 pr-4 font-medium">Giacomo</td>
                    <td className="py-2 pr-4">50-1</td>
                    <td className="py-2 pr-4 hidden md:table-cell">Longshot</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">2023</td>
                    <td className="py-2 pr-4 font-medium">Mage</td>
                    <td className="py-2 pr-4">15-1</td>
                    <td className="py-2 pr-4 hidden md:table-cell">Mid-range price</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">2024</td>
                    <td className="py-2 pr-4 font-medium">Mystik Dan</td>
                    <td className="py-2 pr-4">18-1</td>
                    <td className="py-2 pr-4 hidden md:table-cell">Mid-range price</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">2015</td>
                    <td className="py-2 pr-4 font-medium">American Pharoah</td>
                    <td className="py-2 pr-4">5-2</td>
                    <td className="py-2 pr-4 hidden md:table-cell">Favorite</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Early Value Picks */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Finding Early Betting Value in the Derby Futures Market
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The futures market is where sharp bettors find the most value in Kentucky
              Derby wagering. Because futures odds are locked at the time of your bet,
              you can secure a higher price on a horse months before the race and
              benefit if that horse improves, wins major preps, and sees its odds
              shorten as race day approaches.
            </p>
            <p>
              The tradeoff is risk. Futures bets are non-refundable, and a horse you
              bet in January might suffer an injury, skip the Derby, or simply not
              develop as expected. But for bettors who study pedigrees, watch morning
              workouts, and follow two-year-old form, futures pools offer opportunities
              that are no longer available by post time on the first Saturday in May.
            </p>
            <p>
              When evaluating early value, look for horses with strong two-year-old
              campaigns that may be overlooked because they have not yet run as
              three-year-olds. Lightly raced horses from top barns often improve
              significantly over the winter, and a horse sitting at 30-1 in December
              can easily become a 6-1 contender by May if it reels off two impressive
              prep victories.
            </p>
            <p>
              Conversely, be cautious about horses that are heavily bet early based on
              name recognition or hype rather than demonstrated ability. Buzz around
              a well-bred colt from a famous stable can drive its futures price down
              before it has proven itself against top competition. The value in Derby
              futures lies in finding ability before the crowd does.
            </p>
          </div>
        </section>

        {/* How Odds Change */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How Derby Odds Change from Futures to Race Day
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The journey from futures odds to post-time odds follows a predictable
              pattern driven by information, performance, and money flow. Understanding
              this timeline helps bettors decide when to place their wagers for
              maximum value.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {[
              {
                period: "November through January",
                description:
                  "Early futures pools open with wide-ranging odds. Horses are priced largely on two-year-old form, pedigree, and trainer reputation. The field is wide open and prices are the most generous. This is where the biggest potential value exists, but also the most uncertainty.",
              },
              {
                period: "February through March",
                description:
                  "Three-year-old prep races begin, and the futures market starts to sharpen. Horses that win the Risen Star, Fountain of Youth, or San Felipe see their odds tighten. Horses that lose or fail to fire in early preps see their odds lengthen or disappear from the market entirely.",
              },
              {
                period: "April (Major Prep Races)",
                description:
                  "The major preps — the Florida Derby, Santa Anita Derby, Wood Memorial, Blue Grass Stakes, and Arkansas Derby — are the final auditions. Winners of these races often become the Derby favorites. The futures market narrows significantly, and odds compress as the probable field takes shape.",
              },
              {
                period: "Derby Week (Post Position Draw)",
                description:
                  "The post position draw on Monday of Derby week reshuffles the odds. Horses with unfavorable draws may drift, while horses with advantageous positions tighten. Final futures pools close and the race day wagering pools begin to form.",
              },
              {
                period: "Derby Day (Morning to Post Time)",
                description:
                  "Live pari-mutuel wagering opens and the odds on the tote board start to reflect real money. Early in the day, the odds may swing wildly as smaller bets come in. In the final 30 minutes before the race, the large wagers land and the odds stabilize toward their final post-time numbers.",
              },
            ].map((phase, i) => (
              <div key={i} className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 bg-derby-green text-white text-sm font-bold rounded-full shrink-0 mr-4 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-derby-green mb-1">
                    {phase.period}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where to Check Live Odds */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Where to Check Live Kentucky Derby Odds
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              On Derby Day, you can follow the live odds through several channels. If
              you are at Churchill Downs, the massive tote board in the infield displays
              the current win odds for every horse and updates approximately every 60
              seconds. Television broadcasts from NBC show the odds regularly during
              their pre-race coverage.
            </p>
            <p>
              Online, the TwinSpires platform (Churchill Downs&rsquo; official
              wagering site) displays live pool data, including win, place, show, and
              exotic pool totals. Other ADW (advance deposit wagering) platforms such as
              TVG, FanDuel Racing, and DraftKings Horse Racing also display live odds.
              Many of these platforms offer mobile apps, letting you follow the odds and
              place bets from anywhere.
            </p>
            <p>
              For the most accurate snapshot of where the money is, check the odds in
              the final five minutes before post time. That is when the largest wagers
              typically land and the odds settle closest to where they will close.
            </p>
          </div>
        </section>

        {/* Beginner CTA */}
        <section className="mb-12">
          <div className="bg-white border-2 border-derby-green rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-derby-green px-6 py-5">
              <h2 className="font-serif text-2xl font-bold text-white">
                New to Derby Betting?
              </h2>
              <p className="text-derby-gold mt-1">
                Start with our step-by-step beginner guide
              </p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                If this is your first time betting on the Kentucky Derby, odds are
                just one piece of the puzzle. Our beginner&rsquo;s guide walks you
                through everything from reading the racing program to placing your
                first bet at the window or on your phone. You will learn about win,
                place, and show bets, exactas, trifectas, and how to set a budget for
                Derby Day wagering.
              </p>
              <Link
                href="/betting/how-to-bet"
                className="inline-block bg-derby-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-derby-green/90 transition-colors"
              >
                Read the Beginner&rsquo;s Guide to Derby Betting
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Kentucky Derby Odds
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
            Continue Your Derby Research
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/betting/how-to-bet"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                How to Bet on the Derby
              </p>
              <p className="text-sm text-gray-500 mt-1">
                A step-by-step guide for first-time bettors at the Kentucky Derby.
              </p>
            </Link>
            <Link
              href="/race/contenders"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                2026 Derby Contenders
              </p>
              <p className="text-sm text-gray-500 mt-1">
                In-depth profiles and analysis for every horse in the Derby field.
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
                Advanced handicapping strategies and tips for profitable wagering.
              </p>
            </Link>
            <Link
              href="/history/past-winners"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Past Derby Winners
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Complete list of Kentucky Derby winners, odds, and historical results.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
