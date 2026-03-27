import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Kentucky Derby Betting Strategy | Handicapping Guide & Tips",
  description:
    "Kentucky Derby betting strategy guide covering handicapping basics, speed figures, trainer and jockey angles, post position statistics, track conditions, bankroll management, and value betting.",
  keywords: [
    "kentucky derby betting strategy",
    "derby handicapping",
    "horse racing speed figures",
    "post position statistics derby",
    "bankroll management horse racing",
    "value betting kentucky derby",
  ],
  openGraph: {
    title: "Kentucky Derby Betting Strategy | Handicapping Guide",
    description:
      "How to handicap the Kentucky Derby: speed figures, class analysis, trainer angles, post positions, and bankroll management strategies.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What is the best betting strategy for the Kentucky Derby?",
    answer:
      "The best Kentucky Derby betting strategy combines multiple handicapping factors rather than relying on a single angle. Start with speed figures to identify contenders, then evaluate trainer and jockey records in graded stakes. Factor in post position data and running style to determine which horses have tactical advantages. Finally, compare your analysis to the morning line and tote board to find value where a horse's actual chance of winning is higher than its odds suggest.",
  },
  {
    question: "Do post positions matter in the Kentucky Derby?",
    answer:
      "Post positions do matter in the Kentucky Derby, though their importance is often overstated. Historically, posts 1 through 3 on the far inside and posts 17 through 20 on the far outside have produced fewer winners. The middle posts, particularly 5 through 15, have the strongest track record. However, a superior horse can overcome a bad draw. Speed and class matter more than gate position in a 20-horse field running a mile and a quarter.",
  },
  {
    question: "How much should I bet on the Kentucky Derby?",
    answer:
      "Most experienced handicappers recommend wagering no more than two to five percent of your total bankroll on any single race, including the Kentucky Derby. If you have set aside 200 dollars for Derby Day betting, that means individual bets of four to 10 dollars. Spread your bankroll across the card rather than putting everything on the Derby race itself. The undercard races at Churchill Downs on Derby Day offer excellent wagering opportunities with smaller fields.",
  },
];

export default function BettingStrategyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Betting", href: "/betting" },
          { name: "Strategy", href: "/betting/strategy" },
        ]}
      />
      <ArticleJsonLd
        title="Kentucky Derby Betting Strategy Guide"
        description="Comprehensive handicapping and betting strategy guide for the Kentucky Derby."
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
            <li className="text-derby-green font-medium">Strategy</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            Kentucky Derby Betting Strategy Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            The Kentucky Derby is the most unpredictable race in American horse
            racing. A 20-horse field, a mile and a quarter distance, and the
            pressure of the biggest stage in the sport combine to create chaos
            and opportunity. Here is how to handicap it wisely.
          </p>
        </header>

        {/* Handicapping Basics */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Handicapping Basics: Speed Figures, Class, and Pace
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Handicapping is the process of evaluating each horse&rsquo;s
              chance of winning based on measurable performance data. Three
              core factors drive most serious Derby analysis: speed figures,
              class ratings, and pace dynamics.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            {[
              {
                title: "Speed Figures",
                text: "Speed figures translate raw finishing times into comparable numbers that account for track surface, distance, and weather. Beyer Speed Figures, published in the Daily Racing Form, are the industry standard. A horse earning figures consistently in the upper 90s to low 100s in its prep races is typically a serious Derby contender. Look for an upward trajectory rather than a single big number.",
              },
              {
                title: "Class Assessment",
                text: "Class refers to the level of competition a horse has faced. A horse winning a Grade 1 prep like the Santa Anita Derby or Florida Derby has proven itself against top company. Compare earnings, graded stakes placings, and the quality of defeated opponents. Horses stepping up dramatically in class for the Derby often struggle against the depth of talent in a 20-horse field.",
              },
              {
                title: "Pace Analysis",
                text: "Pace is how the race unfolds. The Derby often features several speed horses who contest the early lead, setting up closers to rally. Identify which horses need the lead, which can stalk, and which prefer to close from far back. When the pace scenario favors a particular running style, horses with that style gain a clear edge. A pace meltdown is how longshots close to win.",
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

        {/* Trainer/Jockey Angles */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Trainer and Jockey Angles That Matter
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The human element in horse racing is enormous. Certain trainers
              have the experience and resources to prepare horses specifically
              for the unique demands of the Derby, while top jockeys understand
              the tactical complexities of navigating a 20-horse field over
              a mile and a quarter.
            </p>
            <p>
              When evaluating trainers, look for those with a proven history in
              Triple Crown races. Trainers like Todd Pletcher, Steve Asmussen,
              and Brad Cox have extensive Derby experience and understand the
              training patterns that produce peak performance on the first
              Saturday in May. A first-time Derby trainer is not disqualified,
              but the learning curve is steep.
            </p>
            <p>
              For jockeys, Derby experience is arguably even more critical.
              Riding in a 20-horse cavalry charge requires patience, positioning
              awareness, and the judgment to avoid traffic trouble while saving
              ground. Veteran Derby riders like John Velazquez, Joel Rosario,
              Irad Ortiz Jr., and Flavien Prat have navigated these situations
              many times. A horse with a talented but inexperienced jockey faces
              a real tactical disadvantage.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
            <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
              Key Trainer Statistics to Research
            </h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Win percentage in graded stakes races over the past three years",
                "Record with horses running a mile and a quarter for the first time",
                "Performance when entering off a specific prep race (e.g., Florida Derby, Wood Memorial)",
                "Track record at Churchill Downs, particularly during the spring meet",
                "History of shipping horses from other regions to run on Derby Day",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Post Position Statistics */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Post Position Statistics
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The Kentucky Derby post position draw takes place the Monday
              before the race and can shift the odds significantly. Here is
              what the historical data tells us about gate positions at Churchill
              Downs.
            </p>
          </div>
          {/* Visual Post Position Chart */}
          <div className="bg-white border-2 border-derby-green/20 rounded-2xl p-6 mt-6 mb-6">
            <h3 className="font-serif text-lg font-bold text-derby-green mb-4 text-center">
              Post Position Win Rate (Historical)
            </h3>
            <div className="flex items-end gap-1 justify-center h-40">
              {[
                { post: 1, pct: 6 },
                { post: 2, pct: 8 },
                { post: 3, pct: 7 },
                { post: 4, pct: 8 },
                { post: 5, pct: 12 },
                { post: 6, pct: 9 },
                { post: 7, pct: 8 },
                { post: 8, pct: 10 },
                { post: 9, pct: 7 },
                { post: 10, pct: 11 },
                { post: 11, pct: 7 },
                { post: 12, pct: 6 },
                { post: 13, pct: 5 },
                { post: 14, pct: 5 },
                { post: 15, pct: 4 },
                { post: 16, pct: 3 },
                { post: 17, pct: 3 },
                { post: 18, pct: 2 },
                { post: 19, pct: 2 },
                { post: 20, pct: 1 },
              ].map((p) => (
                <div key={p.post} className="flex flex-col items-center gap-1" style={{ width: "4.5%" }}>
                  <span className="text-[10px] text-gray-500 font-medium">{p.pct}%</span>
                  <div
                    className={`w-full rounded-t ${
                      p.pct >= 10
                        ? "bg-derby-gold"
                        : p.pct >= 7
                        ? "bg-derby-green/70"
                        : "bg-gray-300"
                    }`}
                    style={{ height: `${p.pct * 10}px` }}
                  />
                  <span className="text-[10px] text-gray-500">{p.post}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-derby-gold inline-block" /> Best (10%+)</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-derby-green/70 inline-block" /> Average (7-9%)</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-gray-300 inline-block" /> Below avg (&lt;7%)</span>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Approximate historical win rates. Posts 5, 8, and 10 have the strongest track records.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { posts: "1-4", label: "Inside", note: "Below average. Post 1 has the lowest win rate historically. Tight quarters at the start create traffic risk." },
              { posts: "5-10", label: "Middle Inside", note: "The sweet spot. Post 5 and post 10 have both produced many winners. Clean break with room to maneuver." },
              { posts: "11-15", label: "Middle Outside", note: "Solid. Enough room to find position without being too wide on the first turn." },
              { posts: "16-20", label: "Far Outside", note: "Challenging. Extra ground to cover, though not impossible for horses with tactical speed." },
            ].map((group, i) => (
              <div key={i} className="bg-derby-cream border border-derby-gold/20 rounded-xl p-4">
                <p className="font-serif font-bold text-derby-green text-lg">{group.posts}</p>
                <p className="text-sm font-medium text-derby-gold">{group.label}</p>
                <p className="text-xs text-gray-600 mt-2">{group.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Post position matters less in a mile-and-a-quarter race than in a
            sprint. Horses have the entire first turn and backstretch to find
            their position. A great horse can win from any post.
          </p>
        </section>

        {/* Track Conditions */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Track Condition Impact
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Weather is a wildcard at the Kentucky Derby. Louisville in early
              May can deliver anything from blazing sunshine to torrential
              downpours, and track condition is one of the most important
              variables in handicapping.
            </p>
            <p>
              A fast, dry track generally favors speed horses and those with
              proven form on firm surfaces. When rain hits Churchill Downs, the
              main dirt track can range from good to sloppy, fundamentally
              changing the dynamics of the race. Some horses thrive in the mud,
              while others lose all form when the track turns wet.
            </p>
            <p>
              Check the weather forecast closely in the days leading up to the
              Derby. Look at each contender&rsquo;s past performances on off
              tracks. Horses with a pedigree that includes mud-loving sires
              like Curlin, Tapit, or Street Sense tend to handle wet conditions
              better. If rain is expected, horses with proven wet-track form or
              strong pedigree indicators gain a significant edge over untested
              rivals.
            </p>
          </div>
        </section>

        {/* Bankroll Management */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Bankroll Management
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Bankroll management is the discipline that separates recreational
              bettors from those who can sustain their wagering over time. The
              Kentucky Derby, with its emotional intensity, is exactly the kind
              of event that tempts people to overbet. Resist that temptation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {[
              {
                title: "Set a Budget Before You Arrive",
                text: "Decide on a total amount you are comfortable losing. That is your bankroll for the day. Never chase losses by going back to the ATM or using money earmarked for other expenses.",
              },
              {
                title: "Spread Your Action Across the Card",
                text: "The Derby card features 14 races, not just the Kentucky Derby. Allocate roughly half your bankroll to the undercard and half to the main event. Smaller undercard fields are easier to handicap.",
              },
              {
                title: "Size Bets by Confidence Level",
                text: "Put more money behind your strongest opinions and less on speculative longshot plays. A strong handicapping opinion deserves a larger bet. A hunch deserves the minimum.",
              },
              {
                title: "Use Exotic Minimums Wisely",
                text: "The 10-cent superfecta and 20-cent Pick 6 minimums let you build wide tickets without breaking your bankroll. Spread combinations rather than making large base bets on narrow tickets.",
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Odds-to-Payout Quick Reference */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Odds-to-Payout Quick Reference
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Use this table to quickly estimate your return on a $2 win bet at
            different odds levels.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-serif text-derby-green">Odds</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">$2 Bet Pays</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Implied Win %</th>
                  <th className="py-3 font-serif text-derby-green">Category</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  { odds: "1-1 (Even)", pays: "$4.00", pct: "50%", cat: "Heavy Favorite", color: "bg-red-100 text-red-700" },
                  { odds: "2-1", pays: "$6.00", pct: "33%", cat: "Favorite", color: "bg-red-50 text-red-600" },
                  { odds: "5-1", pays: "$12.00", pct: "17%", cat: "Contender", color: "bg-yellow-50 text-yellow-700" },
                  { odds: "10-1", pays: "$22.00", pct: "9%", cat: "Mid-Range", color: "bg-blue-50 text-blue-600" },
                  { odds: "20-1", pays: "$42.00", pct: "5%", cat: "Longshot", color: "bg-purple-50 text-purple-600" },
                  { odds: "50-1", pays: "$102.00", pct: "2%", cat: "Deep Longshot", color: "bg-purple-100 text-purple-700" },
                  { odds: "80-1", pays: "$162.00", pct: "1.2%", cat: "Rich Strike Territory", color: "bg-derby-cream text-derby-green" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">{row.odds}</td>
                    <td className="py-3 pr-4 font-bold text-derby-green">{row.pays}</td>
                    <td className="py-3 pr-4">{row.pct}</td>
                    <td className="py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${row.color}`}>
                        {row.cat}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Value Betting vs Chalk */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Value Betting vs. Chalk Betting
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The betting favorite wins the Kentucky Derby roughly 30 to 35
              percent of the time. That means roughly two out of every three
              years, the chalk loses. This reality is the foundation of value
              betting.
            </p>
            <p>
              Value betting means finding horses whose actual probability of
              winning exceeds what their odds suggest. If you believe a horse
              has a 15 percent chance of winning but is listed at 20-1 (implied
              probability of about five percent), that horse represents
              excellent value regardless of the outcome. Over time, consistently
              betting value produces profit even when individual wagers lose.
            </p>
            <p>
              Chalk betting, wagering on favorites and obvious contenders,
              feels safe but is often a losing long-term strategy in big-field
              races like the Derby. Favorites are typically overbet by the
              public, which depresses their payout relative to their actual
              chance of winning. The best strategy combines respect for the
              top contenders with a willingness to use longshots in exotic
              wagers where higher payouts compensate for lower win probability.
            </p>
          </div>
          <div className="bg-white border-2 border-derby-green rounded-2xl overflow-hidden shadow-lg mt-6">
            <div className="bg-derby-green px-6 py-4">
              <h3 className="font-serif text-xl font-bold text-white">
                Value Betting in Practice
              </h3>
            </div>
            <div className="p-6 space-y-3 text-gray-700 leading-relaxed">
              <p>
                Build your own odds line before looking at the tote board.
                Assign a win percentage to each horse based on your handicapping.
                Then compare your percentages to the actual odds. Any horse where
                your estimated win probability significantly exceeds the implied
                probability of the odds is a value play.
              </p>
              <p>
                For example, if you assign Horse A a 20 percent chance and the
                tote board shows 8-1 (implied probability 11 percent), that is
                a strong value candidate. If you assign Horse B a 10 percent
                chance but it is bet down to 3-1 (implied 25 percent), it is
                an underlay and should be avoided or used sparingly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Derby Betting Strategy
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
                Win, place, show, exacta, trifecta, superfecta, and every wager type broken down.
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
                Online racebooks, on-track betting, and OTB locations.
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
                Profiles and analysis for the top horses on the road to the Derby.
              </p>
            </Link>
            <Link
              href="/race/road-to-the-derby"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Road to the Derby
              </p>
              <p className="text-sm text-gray-500 mt-1">
                The prep race schedule and points system that determines the Derby field.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
