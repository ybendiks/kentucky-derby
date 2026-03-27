import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title:
    "2026 Kentucky Derby Results | Winner, Payouts & Race Replay",
  description:
    "Official 2026 Kentucky Derby results page. The 152nd Run for the Roses takes place Saturday, May 2, 2026 at Churchill Downs. Find race day info, historical results from recent years, and where to watch.",
  keywords: [
    "kentucky derby results 2026",
    "kentucky derby winner 2026",
    "derby results",
    "kentucky derby payouts",
    "kentucky derby finishing order",
    "kentucky derby past winners",
    "kentucky derby replay",
    "who won the kentucky derby",
  ],
  openGraph: {
    title: "2026 Kentucky Derby Results",
    description:
      "Results for the 152nd Kentucky Derby on May 2, 2026. Finishing order, payouts, race replay, and historical results from recent years.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "When will the 2026 Kentucky Derby results be available?",
    answer:
      "The 2026 Kentucky Derby will be run on Saturday, May 2, 2026 at approximately 6:57 PM Eastern Time. Official results, including the finishing order, win/place/show payouts, and exotic wager payouts, are typically available within minutes of the race being declared official by the Churchill Downs stewards. This page will be updated with full results immediately after the race is finalized.",
  },
  {
    question: "How are Kentucky Derby results determined?",
    answer:
      "Kentucky Derby results are determined by the order in which horses cross the finish line, as captured by the photo finish camera. The race is declared official by the stewards after reviewing the running of the race for any fouls, interference, or rule violations. In some cases, a stewards' inquiry or jockey objection can change the order of finish after the horses have crossed the wire. Pari-mutuel payouts are calculated and posted once the result is declared official.",
  },
  {
    question: "Where can I watch a replay of the 2026 Kentucky Derby?",
    answer:
      "After the race, replays of the 2026 Kentucky Derby will be available on NBC's website and the Peacock streaming platform. Churchill Downs and TwinSpires also typically post official race replays. Major sports networks and YouTube channels covering horse racing usually have replay footage available within hours of the race. This page will include direct links to official replays once they become available.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "The Race", href: "/race" },
          { name: "Results", href: "/race/results" },
        ]}
      />
      <ArticleJsonLd
        title="2026 Kentucky Derby Results"
        description="Official results page for the 152nd Kentucky Derby. Race day details, historical results, and where to watch the 2026 Run for the Roses."
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
              <li className="text-derby-gold">Results</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-derby-gold mb-4">
            2026 Kentucky Derby Results
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            The 152nd Run for the Roses takes place Saturday, May 2, 2026 at
            Churchill Downs. This page will be updated with full results after
            the race.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-derby-gold rounded-full" />
              May 2, 2026
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-derby-gold rounded-full" />
              ~6:57 PM ET
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-derby-gold rounded-full" />
              NBC / Peacock
            </span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Pre-Race Placeholder */}
        <section className="mb-14">
          <div className="bg-derby-cream border-2 border-derby-gold/30 rounded-2xl p-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
              The 2026 Kentucky Derby Has Not Yet Been Run
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
              The 152nd Kentucky Derby is scheduled for <strong>Saturday,
              May 2, 2026</strong> at approximately <strong>6:57 PM
              Eastern Time</strong> at Churchill Downs in Louisville, Kentucky.
              This page will be updated with complete results, finishing order,
              payouts, and race replay links immediately after the race is
              declared official.
            </p>
            <p className="text-gray-500 text-sm">
              Bookmark this page and check back on race day for live updates.
            </p>
          </div>
        </section>

        {/* Race Day Timeline Visual */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Derby Day Timeline
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Here is a visual overview of how Kentucky Derby Day unfolds at
            Churchill Downs.
          </p>
          <div className="bg-white border-2 border-derby-green/20 rounded-2xl p-6 overflow-x-auto">
            <div className="flex gap-2 min-w-[700px]">
              {[
                { time: "8:00 AM", event: "Gates Open", color: "bg-gray-200 text-gray-700", flex: 1 },
                { time: "10:30 AM", event: "First Race", color: "bg-derby-green/20 text-derby-green", flex: 1 },
                { time: "12-3 PM", event: "Undercard Races", color: "bg-derby-green/40 text-derby-green", flex: 3 },
                { time: "3-5 PM", event: "Stakes Races", color: "bg-derby-green/60 text-white", flex: 2 },
                { time: "5:00 PM", event: "Pre-Derby Pageantry", color: "bg-derby-gold/60 text-derby-green", flex: 1 },
                { time: "~6:57 PM", event: "THE DERBY", color: "bg-derby-gold text-derby-green", flex: 1 },
                { time: "7-9 PM", event: "Final Races & Exit", color: "bg-gray-300 text-gray-700", flex: 2 },
              ].map((block, i) => (
                <div
                  key={i}
                  className={`${block.color} rounded-lg p-3 text-center flex flex-col justify-center`}
                  style={{ flex: block.flex }}
                >
                  <p className="text-xs font-bold">{block.time}</p>
                  <p className="text-xs mt-1">{block.event}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Approximate times. The Kentucky Derby post time is typically around 6:57 PM ET.
            </p>
          </div>
        </section>

        {/* What to Expect on Race Day */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What to Expect on Race Day
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kentucky Derby Day at Churchill Downs is a full-day spectacle. Gates
            open early in the morning, with a packed card of undercard races
            beginning around mid-morning. The atmosphere builds throughout the
            afternoon as the crowd swells, the mint juleps flow, and the
            anticipation mounts for the main event.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the hour before the Derby, the pageantry reaches its peak. The
            University of Louisville marching band leads the post parade, the
            crowd sings &ldquo;My Old Kentucky Home,&rdquo; and the horses are
            loaded into the starting gate beneath the twin spires. When the gates
            open, 20 three-year-old thoroughbreds thunder down the stretch in
            what is often called the most exciting two minutes in sports.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The race covers 1&frac14; miles on the Churchill Downs dirt track,
            starting on the backstretch and navigating two turns before the
            field charges down the 1,234.5-foot homestretch. The winning horse
            is draped with a garland of 554 red roses in the winner&rsquo;s
            circle, and the owner, trainer, and jockey celebrate one of the
            greatest achievements in all of sports.
          </p>
        </section>

        {/* How Results Are Determined */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How Kentucky Derby Results Are Determined
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The order of finish is captured by a high-speed photo finish camera
            positioned at the finish line. In extremely close finishes, stewards
            review the photo to determine the exact order in which horses crossed
            the wire. The margin of victory is measured in lengths, heads, noses,
            or, in the tightest finishes, a bob of the head.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            After the horses cross the finish line, the result is not immediately
            official. The stewards review the race for any infractions, including
            fouls, interference, or bumping that may have affected the outcome.
            A <strong>stewards&rsquo; inquiry</strong> may be called if the
            officials detect a potential issue, and jockeys can also file an
            <strong> objection</strong> if they believe they were impacted by
            another horse&rsquo;s actions during the race.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Once the result is declared official, pari-mutuel payouts are
            calculated based on the total amount wagered in each pool. Win,
            place, and show payouts are posted on the tote board and through
            online wagering platforms. Exotic wager payouts (exacta, trifecta,
            superfecta) are calculated based on their respective pools and can
            produce substantial returns, especially in a race as unpredictable
            as the Kentucky Derby.
          </p>
        </section>

        {/* Historical Results */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Recent Kentucky Derby Results
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While we await the 2026 results, here is a look at the winners from
            the past ten Kentucky Derbies. The Derby has produced some memorable
            winners and stunning upsets in recent years.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-semibold text-derby-green">Year</th>
                  <th className="py-3 pr-4 font-semibold text-derby-green">Winner</th>
                  <th className="py-3 pr-4 font-semibold text-derby-green">Jockey</th>
                  <th className="py-3 pr-4 font-semibold text-derby-green hidden sm:table-cell">Trainer</th>
                  <th className="py-3 font-semibold text-derby-green hidden md:table-cell">Odds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 font-medium">2025</td>
                  <td className="py-3 pr-4">Sovereignty</td>
                  <td className="py-3 pr-4">Flavien Prat</td>
                  <td className="py-3 pr-4 hidden sm:table-cell">Brad Cox</td>
                  <td className="py-3 hidden md:table-cell">7-2</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">2024</td>
                  <td className="py-3 pr-4">Mystik Dan</td>
                  <td className="py-3 pr-4">Brian Hernandez Jr.</td>
                  <td className="py-3 pr-4 hidden sm:table-cell">Kenny McPeek</td>
                  <td className="py-3 hidden md:table-cell">18-1</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">2023</td>
                  <td className="py-3 pr-4">Mage</td>
                  <td className="py-3 pr-4">Javier Castellano</td>
                  <td className="py-3 pr-4 hidden sm:table-cell">Gustavo Delgado</td>
                  <td className="py-3 hidden md:table-cell">15-1</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">2022</td>
                  <td className="py-3 pr-4">Rich Strike</td>
                  <td className="py-3 pr-4">Sonny Leon</td>
                  <td className="py-3 pr-4 hidden sm:table-cell">Eric Reed</td>
                  <td className="py-3 hidden md:table-cell">80-1</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">2021</td>
                  <td className="py-3 pr-4">Medina Spirit*</td>
                  <td className="py-3 pr-4">John Velazquez</td>
                  <td className="py-3 pr-4 hidden sm:table-cell">Bob Baffert</td>
                  <td className="py-3 hidden md:table-cell">12-1</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">2020</td>
                  <td className="py-3 pr-4">Authentic</td>
                  <td className="py-3 pr-4">John Velazquez</td>
                  <td className="py-3 pr-4 hidden sm:table-cell">Bob Baffert</td>
                  <td className="py-3 hidden md:table-cell">8-1</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">2019</td>
                  <td className="py-3 pr-4">Country House</td>
                  <td className="py-3 pr-4">Flavien Prat</td>
                  <td className="py-3 pr-4 hidden sm:table-cell">Bill Mott</td>
                  <td className="py-3 hidden md:table-cell">65-1</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">2018</td>
                  <td className="py-3 pr-4">Justify</td>
                  <td className="py-3 pr-4">Mike Smith</td>
                  <td className="py-3 pr-4 hidden sm:table-cell">Bob Baffert</td>
                  <td className="py-3 hidden md:table-cell">5-2</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">2017</td>
                  <td className="py-3 pr-4">Always Dreaming</td>
                  <td className="py-3 pr-4">John Velazquez</td>
                  <td className="py-3 pr-4 hidden sm:table-cell">Todd Pletcher</td>
                  <td className="py-3 hidden md:table-cell">9-2</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">2016</td>
                  <td className="py-3 pr-4">Nyquist</td>
                  <td className="py-3 pr-4">Mario Gutierrez</td>
                  <td className="py-3 pr-4 hidden sm:table-cell">Doug O&rsquo;Neill</td>
                  <td className="py-3 hidden md:table-cell">2-1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            * Medina Spirit was disqualified after a post-race drug test.
            Mandaloun was elevated to first place as the official winner of
            the 2021 Kentucky Derby.
          </p>
        </section>

        {/* Where to Watch */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Where to Watch the 2026 Kentucky Derby
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 2026 Kentucky Derby will be broadcast live on <strong>NBC</strong>,
            with coverage beginning in the early afternoon and building toward
            the main race at approximately 6:57 PM ET. For streaming viewers,
            the race is also available on <strong>Peacock</strong>, NBC&rsquo;s
            streaming platform.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are at Churchill Downs, the race unfolds live before you on
            the track, with the giant video boards and public address system
            bringing the action to every corner of the facility. For those
            watching from home, Derby watch parties are a beloved tradition
            &mdash; mix up a batch of mint juleps, don your best hat, and cheer
            your horse home from your living room.
          </p>
          <p className="text-gray-700 leading-relaxed">
            International viewers can find coverage through NBC&rsquo;s global
            partners or through streaming services that carry U.S. sports
            programming. Many licensed sportsbooks also offer live race streams
            for account holders.
          </p>
        </section>

        {/* Post-Race Links Placeholder */}
        <section className="mb-14">
          <div className="bg-white border-2 border-derby-green rounded-2xl overflow-hidden">
            <div className="bg-derby-green px-6 py-4">
              <h2 className="font-serif text-xl font-bold text-white">
                Post-Race Coverage (Coming May 2)
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                After the 2026 Kentucky Derby is complete, this page will be
                updated with the following information:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  Official finishing order for all 20 horses
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  Win, place, and show payouts
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  Exacta, trifecta, and superfecta payouts
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  Final time and fractional splits
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  Race replay video link
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  Winning trainer and jockey interviews
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                  Triple Crown implications (Preakness Stakes: May 16)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Derby Results
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
            More Derby Coverage
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/race/contenders"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                2026 Derby Contenders
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Meet the horses competing in the 152nd Kentucky Derby.
              </p>
            </Link>
            <Link
              href="/race/odds"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Odds &amp; Predictions
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Current futures odds and analysis for the 2026 Kentucky Derby.
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
                Complete list of Kentucky Derby winners throughout history.
              </p>
            </Link>
            <Link
              href="/betting/how-to-bet"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                How to Bet on the Derby
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Beginner guide to placing wagers on the Kentucky Derby.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
