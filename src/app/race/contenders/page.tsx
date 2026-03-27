import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title:
    "2026 Kentucky Derby Contenders & Horses | Top Picks, Odds & Analysis",
  description:
    "Meet the top contenders for the 2026 Kentucky Derby including Paladin, Incredibolt, Commandment, and Nearly. In-depth profiles, qualifying points, trainer and jockey info, and what to watch heading into the 152nd Run for the Roses.",
  keywords: [
    "kentucky derby contenders 2026",
    "kentucky derby horses",
    "kentucky derby favorites",
    "kentucky derby 2026 field",
    "derby contenders",
    "paladin kentucky derby",
    "incredibolt derby",
    "road to the kentucky derby points",
  ],
  openGraph: {
    title: "2026 Kentucky Derby Contenders & Horses",
    description:
      "In-depth profiles and analysis of the leading contenders for the 152nd Kentucky Derby at Churchill Downs on May 2, 2026.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "Who is the favorite for the 2026 Kentucky Derby?",
    answer:
      "As of March 2026, Paladin is the current futures favorite at approximately 9-1 odds. He is undefeated in three career starts and has earned 60 qualifying points on the Road to the Kentucky Derby. However, the Derby futures market is fluid, and several other horses including Incredibolt, Commandment, and Nearly are considered serious contenders whose odds could shorten with strong performances in the remaining prep races.",
  },
  {
    question: "How do horses qualify for the 2026 Kentucky Derby?",
    answer:
      "Horses qualify for the Kentucky Derby through the Road to the Kentucky Derby points system. Points are awarded to the top four finishers in designated prep races held from September through April. The prep season races award 10-4-2-1 points, while the championship series races award 100-40-20-10 points. The 18 horses with the most accumulated points at the close of entries earn a spot in the starting gate, with up to 2 additional also-eligible entries.",
  },
  {
    question: "When is the deadline for Kentucky Derby qualifying?",
    answer:
      "The final qualifying prep races for the 2026 Kentucky Derby take place in April, with the last major preps typically run three to four weeks before the Derby on May 2. The official close of entries, when the final field is set, usually occurs two weeks before race day. Horses must have sufficient Road to the Kentucky Derby points to secure one of the 20 starting gate positions.",
  },
];

export default function ContendersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "The Race", href: "/race" },
          { name: "Contenders", href: "/race/contenders" },
        ]}
      />
      <ArticleJsonLd
        title="2026 Kentucky Derby Contenders & Horses"
        description="In-depth profiles and analysis of every leading contender for the 152nd Kentucky Derby, including qualifying points, odds, and trainer spotlights."
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
              <li className="text-derby-gold">Contenders</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-derby-gold mb-4">
            2026 Kentucky Derby Contenders &amp; Horses
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            The 152nd Run for the Roses is taking shape. Meet the top
            three-year-olds vying for a spot in the starting gate at Churchill
            Downs on May 2, 2026.
          </p>
          <p className="mt-4 text-sm text-white/50">
            Last updated: March 20, 2026 &middot; Odds and points subject to change
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Introduction */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The 2026 Derby Field Is Taking Shape
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every spring, the three-year-old thoroughbred crop is whittled down
            through a demanding series of prep races to determine which horses
            have earned their way into the Kentucky Derby starting gate. The 2026
            season has produced a competitive group of contenders, with several
            horses holding strong positions on the Road to the Kentucky Derby
            leaderboard and others poised to make a late surge through the
            championship series races in April.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Below are the leading contenders as of mid-March 2026, along with
            details on their qualifying points, running styles, connections, and
            paths forward to the first Saturday in May.
          </p>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1507514604110-ba3347c457f6?w=800&q=75"
          alt="Thoroughbred horses racing on the track during a prep race"
          caption="The road to the Kentucky Derby runs through a demanding series of prep races across the country."
          aspectRatio="wide"
          priority
        />

        {/* Top Contenders */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Top Contenders for the 152nd Kentucky Derby
          </h2>

          <div className="space-y-8">
            {/* Paladin */}
            <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/20">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="font-serif text-2xl font-bold text-derby-green">
                  Paladin
                </h3>
                <div className="flex gap-2">
                  <span className="text-sm font-semibold bg-derby-green text-derby-gold px-3 py-1 rounded-full">
                    9-1 Favorite
                  </span>
                  <span className="text-sm font-semibold bg-derby-gold/20 text-derby-green px-3 py-1 rounded-full">
                    60 Points
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Paladin sits atop the futures board as the current favorite for
                the 2026 Kentucky Derby at 9-1 odds. He is undefeated in three
                career starts, a rare distinction at this stage of the prep
                season that speaks to both his raw talent and the patience his
                connections have shown in mapping out his campaign. With 60
                qualifying points already banked, Paladin has a secure spot in
                the starting gate and the luxury of choosing his final prep race
                based on readiness rather than necessity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                His running style blends tactical speed with a strong closing
                kick, the kind of versatility that serves horses well in the
                unpredictable 20-horse Derby field. Bettors and handicappers
                will be watching his final workout patterns at Churchill Downs
                closely in the weeks ahead.
              </p>
            </div>

            {/* Incredibolt */}
            <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/20">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="font-serif text-2xl font-bold text-derby-green">
                  Incredibolt
                </h3>
                <div className="flex gap-2">
                  <span className="text-sm font-semibold bg-derby-green/10 text-derby-green px-3 py-1 rounded-full">
                    Rising Fast
                  </span>
                  <span className="text-sm font-semibold bg-derby-gold/20 text-derby-green px-3 py-1 rounded-full">
                    60 Points
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Incredibolt entered the national spotlight with a commanding
                victory in the Virginia Derby on March 14, a win that vaulted
                him to 60 qualifying points and established him as one of the
                most dangerous horses in the 2026 crop. His explosive turn of
                foot in the stretch at Colonial Downs left the competition
                several lengths behind and suggested that he is rounding into
                peak form at exactly the right time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A deep closer by nature, Incredibolt thrives when the pace
                is honest up front. In a 20-horse Kentucky Derby with plenty of
                early speed, that closing style could be a significant advantage
                if he can secure a clean trip through traffic on the far turn.
              </p>
            </div>

            {/* Commandment */}
            <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/20">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="font-serif text-2xl font-bold text-derby-green">
                  Commandment
                </h3>
                <div className="flex gap-2">
                  <span className="text-sm font-semibold bg-derby-green text-derby-gold px-3 py-1 rounded-full">
                    #1 Leaderboard
                  </span>
                  <span className="text-sm font-semibold bg-derby-gold/20 text-derby-green px-3 py-1 rounded-full">
                    Top Points
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Commandment currently holds the number one position on the
                Road to the Kentucky Derby leaderboard, a testament to his
                remarkable consistency across multiple prep races this season.
                While other contenders have relied on one or two breakout
                performances, Commandment has accumulated his points through
                steady finishes in the money across a busy campaign.
              </p>
              <p className="text-gray-700 leading-relaxed">
                His tactical versatility allows him to race on or near the lead
                or sit just off the pace and accelerate in the stretch. That
                adaptability is a prized trait on Derby Day, when the pace
                scenario is nearly impossible to predict. His connections are
                targeting a final championship series prep to sharpen him for
                the mile-and-a-quarter test on the first Saturday in May.
              </p>
            </div>

            {/* Nearly */}
            <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/20">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="font-serif text-2xl font-bold text-derby-green">
                  Nearly
                </h3>
                <div className="flex gap-2">
                  <span className="text-sm font-semibold bg-derby-green text-derby-gold px-3 py-1 rounded-full">
                    10-1 Odds
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Nearly sits just behind Paladin on the futures board at 10-1
                and offers compelling value for bettors who believe he has
                another gear to show. A proven graded stakes performer with a
                pedigree that suggests stamina for the classic mile-and-a-quarter
                distance, Nearly has improved steadily with each start this
                season. His training reports from the backstretch have been
                consistently encouraging.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The key question for Nearly is whether he can deliver his best
                performance on the biggest stage. His prep races have shown
                flashes of brilliance mixed with the occasional rough trip, and
                a clean run through the Churchill Downs stretch could be the
                difference between hitting the board and hitting the wire first.
              </p>
            </div>
          </div>
        </section>

        {/* Other Contenders to Watch */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Other Contenders to Watch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond the top tier, a talented group of three-year-olds is
            positioned to make noise in the final weeks of qualifying. Any of
            these horses could improve their standing with a strong showing in
            the remaining championship series prep races.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Sunset Strip",
                detail: "Santa Anita Derby target, strong West Coast form",
              },
              {
                name: "Iron Phoenix",
                detail: "Blue Grass Stakes contender, steadily improving",
              },
              {
                name: "Thunderclap",
                detail: "Tampa Bay Derby winner, brings early speed",
              },
              {
                name: "Sovereign Rule",
                detail: "Louisiana Derby hopeful, deep closing style",
              },
              {
                name: "Midnight Monarch",
                detail: "European raider via UAE Derby route",
              },
              {
                name: "High Command",
                detail: "Lightly raced but talented, needs points in April",
              },
            ].map((horse) => (
              <div
                key={horse.name}
                className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-derby-gold/40 transition-colors"
              >
                <span className="w-2 h-2 bg-derby-gold rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-serif font-bold text-derby-green">
                    {horse.name}
                  </p>
                  <p className="text-sm text-gray-600">{horse.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How Horses Qualify */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How Horses Qualify for the Kentucky Derby
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The{" "}
            <Link
              href="/race/road-to-the-derby"
              className="text-derby-green font-medium underline decoration-derby-gold/40 hover:decoration-derby-gold transition-colors"
            >
              Road to the Kentucky Derby
            </Link>{" "}
            points system determines which horses earn a place in the starting
            gate. Introduced in 2013, the system awards points to the top four
            finishers in designated prep races throughout the season. The 18
            horses with the highest point totals at the close of entries are
            guaranteed a spot, with up to 2 also-eligible entries available if
            any top-18 horses scratch.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The qualifying season is divided into two phases. Early prep season
            races from September through February award points on a 10-4-2-1
            scale. The championship series from late February through April
            features the major preps, which award points on a 100-40-20-10
            scale. A single championship series win can catapult a horse from
            the bubble into a secure qualifying position.
          </p>
        </section>

        {/* Key Remaining Prep Races */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Key Remaining Prep Races Before May 2
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The championship series continues through April with several
            high-profile races that will finalize the Derby field. These are the
            final auditions before the big dance.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-semibold text-derby-green">Race</th>
                  <th className="py-3 pr-4 font-semibold text-derby-green">Date</th>
                  <th className="py-3 pr-4 font-semibold text-derby-green">Track</th>
                  <th className="py-3 font-semibold text-derby-green hidden sm:table-cell">Points (1st)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 font-medium">Florida Derby</td>
                  <td className="py-3 pr-4">April 5</td>
                  <td className="py-3 pr-4">Gulfstream Park</td>
                  <td className="py-3 hidden sm:table-cell">100</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Santa Anita Derby</td>
                  <td className="py-3 pr-4">April 5</td>
                  <td className="py-3 pr-4">Santa Anita Park</td>
                  <td className="py-3 hidden sm:table-cell">100</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Blue Grass Stakes</td>
                  <td className="py-3 pr-4">April 12</td>
                  <td className="py-3 pr-4">Keeneland</td>
                  <td className="py-3 hidden sm:table-cell">100</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Wood Memorial</td>
                  <td className="py-3 pr-4">April 12</td>
                  <td className="py-3 pr-4">Aqueduct</td>
                  <td className="py-3 hidden sm:table-cell">100</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Arkansas Derby</td>
                  <td className="py-3 pr-4">April 12</td>
                  <td className="py-3 pr-4">Oaklawn Park</td>
                  <td className="py-3 hidden sm:table-cell">100</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Lexington Stakes</td>
                  <td className="py-3 pr-4">April 19</td>
                  <td className="py-3 pr-4">Keeneland</td>
                  <td className="py-3 hidden sm:table-cell">20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1606184227191-b274b647d237?w=800&q=75"
          alt="Jockey riding a thoroughbred horse during a morning training workout on the track"
          caption="Jockeys and trainers play a critical role in preparing contenders for the first Saturday in May."
          aspectRatio="landscape"
        />

        {/* Trainer & Jockey Spotlights */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Trainer &amp; Jockey Spotlights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Kentucky Derby is as much about the human connections as the
            equine athletes. The trainer and jockey behind each contender bring
            experience, strategy, and nerve to the biggest stage in American
            racing.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Todd Pletcher
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A multiple Derby winner and the all-time leader in North
                American earnings for a trainer, Pletcher is known for patient
                campaign management and peaking his horses on the first Saturday
                in May. He typically brings multiple contenders to the Derby and
                has the depth of barn to adjust strategies based on how the race
                unfolds.
              </p>
            </div>
            <div className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Brad Cox
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Louisville native Brad Cox understands Churchill Downs better
                than most trainers in the game. His 2021 Derby victory
                demonstrated his ability to prepare a horse for the unique
                demands of the track, and his local knowledge of the surface
                and conditions gives his runners an intangible edge on Derby
                Day.
              </p>
            </div>
            <div className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Steve Asmussen
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The winningest trainer in North American racing history,
                Asmussen has been seeking a Kentucky Derby victory throughout
                his legendary career. Known for his horsemanship and ability to
                develop young horses, he always brings a well-prepared
                contender to Churchill Downs.
              </p>
            </div>
            <div className="bg-derby-cream rounded-lg p-5 border border-derby-gold/20">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Key Jockeys to Watch
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The jockey assignments for the 2026 Derby will be finalized as
                the field takes shape in April. Watch for top riders like
                Irad Ortiz Jr., Flavien Prat, Joel Rosario, and John
                Velazquez to secure mounts on the leading contenders. The
                jockey-horse pairing can be a decisive factor in a 20-horse
                race where split-second decisions through traffic determine the
                outcome.
              </p>
            </div>
          </div>
        </section>

        {/* What to Watch For */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What to Watch for in the Coming Weeks
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Championship Series Results",
                text: "The Florida Derby, Santa Anita Derby, Blue Grass Stakes, Wood Memorial, and Arkansas Derby will reshape the leaderboard and the futures odds board. A dominant winner from any of these races could become the new Derby favorite overnight.",
              },
              {
                title: "Workout Reports from Churchill Downs",
                text: "Many Derby contenders will ship to Louisville in mid-April to train over the track. Morning workout times, patterns, and reports from backstretch observers provide valuable clues about each horse's fitness and readiness.",
              },
              {
                title: "Post Position Draw",
                text: "Held on the Monday of Derby Week (April 27), the post position draw assigns starting gate positions. Historically, extreme inside and outside posts have been less favorable, and the draw can shift odds and strategies for every contender.",
              },
              {
                title: "Jockey Commitments",
                text: "As the field crystallizes, leading jockeys will choose their mounts. A top jockey committing to a particular horse often signals confidence from the connections and can move the betting market.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 bg-derby-green text-white text-sm font-bold rounded-full shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-derby-green mb-1">
                    {item.title}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Derby Contenders
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
              href="/race/road-to-the-derby"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Road to the Kentucky Derby
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Full points standings and prep race schedule for the 2026 qualifying season.
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
                Current futures odds, analysis, and value picks for every contender.
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
                A beginner-friendly guide to placing your first Derby wager.
              </p>
            </Link>
            <Link
              href="/race/derby-week-schedule"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Week Schedule
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Full schedule of events from April 25 through Derby Day on May 2.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
