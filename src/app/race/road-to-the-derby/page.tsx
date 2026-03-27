import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title:
    "Road to the 2026 Kentucky Derby | Points Standings, Prep Races & Qualifying",
  description:
    "Follow the Road to the 2026 Kentucky Derby. Complete points standings, prep race schedule, qualifying system explained, and which horses are on track to earn a starting gate position for the 152nd Run for the Roses.",
  keywords: [
    "road to the kentucky derby 2026",
    "derby prep races",
    "kentucky derby points standings",
    "kentucky derby qualifying",
    "derby prep race schedule",
    "road to the derby leaderboard",
    "kentucky derby championship series",
    "derby qualifying points",
  ],
  openGraph: {
    title: "Road to the 2026 Kentucky Derby | Points & Prep Races",
    description:
      "Complete guide to the Road to the Kentucky Derby qualifying system, current 2026 standings, prep race schedule, and which horses are in or on the bubble.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "How does the Road to the Kentucky Derby points system work?",
    answer:
      "The Road to the Kentucky Derby awards points to the top four finishers in designated prep races held from September through April. Prep season races (September through February) award points on a 10-4-2-1 scale to the first through fourth place finishers. Championship series races (late February through April) award points on a 100-40-20-10 scale. The 18 horses with the most accumulated points at the close of entries secure a spot in the starting gate, with up to 2 also-eligible entries.",
  },
  {
    question: "How many horses qualify for the Kentucky Derby?",
    answer:
      "The Kentucky Derby field is limited to a maximum of 20 starters. The top 18 horses on the Road to the Kentucky Derby points leaderboard earn guaranteed spots. Up to 2 additional also-eligible entries can draw into the race if any of the top 18 scratch before race day. International qualifiers through the Japan Road and European Road to the Derby have separate reserved spots within the 20-horse field.",
  },
  {
    question: "What are the most important Kentucky Derby prep races?",
    answer:
      "The most important prep races are the championship series events that award 100 points to the winner. These include the Florida Derby at Gulfstream Park, the Santa Anita Derby at Santa Anita Park, the Blue Grass Stakes at Keeneland, the Wood Memorial at Aqueduct, the Arkansas Derby at Oaklawn Park, and the Louisiana Derby at Fair Grounds. Winning any one of these races typically secures a spot in the Derby starting gate.",
  },
];

export default function RoadToDerbyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "The Race", href: "/race" },
          { name: "Road to the Derby", href: "/race/road-to-the-derby" },
        ]}
      />
      <ArticleJsonLd
        title="Road to the 2026 Kentucky Derby"
        description="Complete guide to the Road to the Kentucky Derby qualifying system, current 2026 points standings, prep race schedule, and bubble contenders."
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
              <li className="text-derby-gold">Road to the Derby</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-derby-gold mb-4">
            Road to the 2026 Kentucky Derby
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Follow the qualifying path to the 152nd Run for the Roses. Points
            standings, prep race results, and everything you need to know about
            how horses earn their way into the starting gate.
          </p>
          <p className="mt-4 text-sm text-white/50">
            Last updated: March 20, 2026 &middot; Standings subject to change
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* What Is the Road to the Derby */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What Is the Road to the Kentucky Derby?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Road to the Kentucky Derby is the official qualifying system
            that determines which three-year-old thoroughbreds earn a spot in
            the starting gate on the first Saturday in May. Introduced by
            Churchill Downs in 2013, the points-based system replaced the
            previous graded stakes earnings model and brought greater
            transparency and structure to the Derby qualification process.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Under this system, designated prep races across North America, Japan,
            Europe, and the Middle East award qualifying points to the top
            finishers. Horses accumulate points throughout the season, and the
            leaderboard determines who makes the field. The system rewards
            consistent performance across multiple races while still allowing a
            single dominant prep race victory to propel a horse into contention.
          </p>
        </section>

        {/* Points System Explained */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Points System Explained
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The qualifying season is divided into two distinct phases, each with
            its own points scale. This structure rewards horses that campaign
            throughout the winter while placing the greatest emphasis on
            performances in the major spring prep races closest to the Derby.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/20">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                Prep Season (Sep &ndash; Feb)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Early-season races that identify promising three-year-olds and
                begin sorting the Derby pecking order. These races test young
                horses at shorter distances and help trainers develop a plan
                for the spring campaign.
              </p>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p className="text-xs font-semibold text-derby-green/60 uppercase tracking-wider mb-2">
                  Points Scale
                </p>
                <div className="grid grid-cols-4 gap-2 text-center text-sm">
                  <div>
                    <p className="font-bold text-derby-green">10</p>
                    <p className="text-xs text-gray-500">1st</p>
                  </div>
                  <div>
                    <p className="font-bold text-derby-green">4</p>
                    <p className="text-xs text-gray-500">2nd</p>
                  </div>
                  <div>
                    <p className="font-bold text-derby-green">2</p>
                    <p className="text-xs text-gray-500">3rd</p>
                  </div>
                  <div>
                    <p className="font-bold text-derby-green">1</p>
                    <p className="text-xs text-gray-500">4th</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/20">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-3">
                Championship Series (Feb &ndash; Apr)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The major spring prep races that serve as the final auditions
                for the Kentucky Derby. These are the races that most directly
                determine the Derby field, and a single victory can secure a
                starting gate position.
              </p>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p className="text-xs font-semibold text-derby-green/60 uppercase tracking-wider mb-2">
                  Points Scale
                </p>
                <div className="grid grid-cols-4 gap-2 text-center text-sm">
                  <div>
                    <p className="font-bold text-derby-green">100</p>
                    <p className="text-xs text-gray-500">1st</p>
                  </div>
                  <div>
                    <p className="font-bold text-derby-green">40</p>
                    <p className="text-xs text-gray-500">2nd</p>
                  </div>
                  <div>
                    <p className="font-bold text-derby-green">20</p>
                    <p className="text-xs text-gray-500">3rd</p>
                  </div>
                  <div>
                    <p className="font-bold text-derby-green">10</p>
                    <p className="text-xs text-gray-500">4th</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            The top 18 horses on the leaderboard at the close of entries earn
            a guaranteed spot in the Derby. Up to 2 also-eligible entries can
            fill in if any of the top 18 scratch. In cases where horses are
            tied in points, the tiebreaker goes to the horse with the higher
            earnings in the designated prep races.
          </p>
        </section>

        {/* Current 2026 Standings */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Current 2026 Standings &amp; Leaderboard
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The leaderboard below reflects points earned through mid-March 2026.
            With several major championship series races still to come, these
            standings will shift significantly before the field is finalized.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-3 font-semibold text-derby-green w-10">#</th>
                  <th className="py-3 pr-4 font-semibold text-derby-green">Horse</th>
                  <th className="py-3 pr-4 font-semibold text-derby-green">Points</th>
                  <th className="py-3 font-semibold text-derby-green hidden sm:table-cell">Key Win</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { rank: 1, name: "Commandment", points: "64", win: "Multiple top finishes" },
                  { rank: 2, name: "Paladin", points: "60", win: "Undefeated, 3 starts" },
                  { rank: 3, name: "Incredibolt", points: "60", win: "Virginia Derby (Mar 14)" },
                  { rank: 4, name: "Nearly", points: "44", win: "Graded stakes winner" },
                  { rank: 5, name: "Sunset Strip", points: "40", win: "San Felipe Stakes" },
                  { rank: 6, name: "Thunderclap", points: "34", win: "Tampa Bay Derby" },
                  { rank: 7, name: "Iron Phoenix", points: "30", win: "Risen Star runner-up" },
                  { rank: 8, name: "Sovereign Rule", points: "26", win: "Fountain of Youth 3rd" },
                  { rank: 9, name: "High Command", points: "22", win: "Sam F. Davis winner" },
                  { rank: 10, name: "Midnight Monarch", points: "20", win: "UAE route qualifier" },
                ].map((horse) => (
                  <tr key={horse.rank} className={horse.rank <= 3 ? "bg-derby-cream/50" : ""}>
                    <td className="py-3 pr-3 font-bold text-derby-green">{horse.rank}</td>
                    <td className="py-3 pr-4 font-medium">{horse.name}</td>
                    <td className="py-3 pr-4">{horse.points}</td>
                    <td className="py-3 hidden sm:table-cell text-gray-600">{horse.win}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-derby-cream border border-derby-gold/30 rounded-xl p-5">
            <p className="text-sm text-gray-600">
              <strong className="text-derby-green">Note:</strong> These standings
              are approximate and reflect available data as of March 20, 2026.
              Official points are maintained by Churchill Downs and updated after
              each qualifying race. The championship series races in April will
              dramatically reshape the top 18.
            </p>
          </div>
        </section>

        {/* Key Prep Races */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Key Prep Races on the Road to the Derby
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Road to the Kentucky Derby features dozens of qualifying races
            at tracks across the country and around the world. Here are the
            marquee events that most often produce Derby starters.
          </p>

          {/* Map of Major Prep Race Tracks */}
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6500000!2d-89.0!3d36.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x4%21!2sUnited%20States!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing locations of major Kentucky Derby prep race tracks across the United States"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-3 text-sm mb-8">
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">East Coast</p>
              <p className="text-gray-600 text-xs">Gulfstream Park (FL) · Aqueduct (NY)</p>
            </div>
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">Central</p>
              <p className="text-gray-600 text-xs">Churchill Downs (KY) · Keeneland (KY) · Fair Grounds (LA) · Oaklawn (AR)</p>
            </div>
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">West Coast</p>
              <p className="text-gray-600 text-xs">Santa Anita Park (CA)</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { name: "Holy Bull Stakes", track: "Gulfstream Park", month: "February", note: "Early championship series test on the Florida circuit" },
              { name: "Risen Star Stakes", track: "Fair Grounds", month: "February", note: "Key New Orleans prep, often produces Derby starters" },
              { name: "Fountain of Youth Stakes", track: "Gulfstream Park", month: "March", note: "Traditional stepping stone to the Florida Derby" },
              { name: "Louisiana Derby", track: "Fair Grounds", month: "March", note: "Major 100-point championship series race" },
              { name: "Florida Derby", track: "Gulfstream Park", month: "April", note: "Premier East Coast final prep, 100 points to the winner" },
              { name: "Santa Anita Derby", track: "Santa Anita Park", month: "April", note: "Top West Coast final prep, launching pad for Derby winners" },
              { name: "Blue Grass Stakes", track: "Keeneland", month: "April", note: "Run at Keeneland in Lexington, a stone's throw from bluegrass country" },
              { name: "Wood Memorial", track: "Aqueduct", month: "April", note: "New York's premier Derby prep race" },
              { name: "Arkansas Derby", track: "Oaklawn Park", month: "April", note: "Historically one of the strongest final preps" },
            ].map((race, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-4 rounded-lg border border-gray-200 hover:border-derby-gold/40 transition-colors"
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <p className="text-xs text-gray-500 uppercase font-semibold">{race.month}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-derby-green">{race.name}</h3>
                  <p className="text-sm text-gray-500">{race.track}</p>
                  <p className="text-sm text-gray-600 mt-1">{race.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* International Prep Races */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            International Qualifying Paths
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kentucky Derby has become a global event, with international
            horses qualifying through dedicated pathways. The Japan Road to the
            Kentucky Derby awards points in races at major Japanese tracks, with
            horses occasionally shipping to Louisville to compete. The European
            Road to the Kentucky Derby features qualifying races in the United
            Kingdom, Ireland, and France.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The <strong>UAE Derby</strong> at Meydan Racecourse in Dubai is
            another important international qualifier, offering 100 points to
            the winner and serving as a pathway for horses campaigning in the
            Middle East. International qualifiers typically have reserved spots
            within the 20-horse Derby field, ensuring global representation in
            the Run for the Roses.
          </p>
        </section>

        {/* On the Bubble */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            On the Bubble: Horses Fighting to Qualify
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every talented three-year-old has a secure position on the
            leaderboard heading into April. Horses sitting between 15th and 25th
            on the points list are considered &ldquo;on the bubble&rdquo; and
            need strong performances in the remaining championship series races
            to punch their ticket to Churchill Downs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a bubble horse, the math is straightforward. Winning a
            championship series race earns 100 points, which would almost
            certainly vault a horse into the top 18. A second-place finish (40
            points) or third-place finish (20 points) might be enough depending
            on how the rest of the leaderboard shakes out. A fourth-place finish
            (10 points) is unlikely to move the needle for most bubble horses.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The bubble creates some of the most compelling drama of the prep
            season. Trainers must decide whether to target a specific prep race
            or spread their horse across multiple opportunities. Some
            connections choose a single major prep and put all their hopes on
            one performance, while others campaign aggressively to accumulate
            points from multiple races.
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Timeline of Remaining Qualification Races
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The final stretch of the Road to the Kentucky Derby features a
            packed calendar of championship series races. Here is the timeline
            of key dates remaining before the field is set.
          </p>

          <div className="space-y-4">
            {[
              { date: "March 29", event: "Louisiana Derby (Fair Grounds) &mdash; 100 pts", done: false },
              { date: "April 5", event: "Florida Derby (Gulfstream) &amp; Santa Anita Derby &mdash; 100 pts each", done: false },
              { date: "April 12", event: "Blue Grass Stakes, Wood Memorial &amp; Arkansas Derby &mdash; 100 pts each", done: false },
              { date: "April 19", event: "Lexington Stakes (Keeneland) &mdash; 20 pts, last chance", done: false },
              { date: "Late April", event: "Close of entries &mdash; final field announced", done: false },
              { date: "April 27", event: "Post position draw (Monday of Derby Week)", done: false },
              { date: "May 2", event: "152nd Kentucky Derby at Churchill Downs", done: false },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-24">
                  <p className="text-sm font-semibold text-derby-green">{item.date}</p>
                </div>
                <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                  <p
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.event }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions
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
            Continue Your Derby Research
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
                In-depth profiles of every leading horse in the 2026 Derby field.
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
                Current futures odds and expert analysis for the 152nd Derby.
              </p>
            </Link>
            <Link
              href="/race/overview"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Overview
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Date, time, TV coverage, and everything about the 2026 Kentucky Derby.
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
                Complete historical results and notable champions.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
