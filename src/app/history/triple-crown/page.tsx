import { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Triple Crown Winners | All 13 Champions & Complete History",
  description:
    "Complete guide to the Triple Crown of horse racing. All 13 winners from Sir Barton to Justify, the 37-year drought, near misses, and what makes winning so difficult.",
  keywords:
    "triple crown winners, triple crown horse racing, american pharoah triple crown, justify triple crown, triple crown history",
};

const tripleCrownWinners = [
  { year: 1919, horse: "Sir Barton", jockey: "Johnny Loftus", trainer: "H. Guy Bedwell" },
  { year: 1930, horse: "Gallant Fox", jockey: "Earl Sande", trainer: "Jim Fitzsimmons" },
  { year: 1935, horse: "Omaha", jockey: "Willie Saunders", trainer: "Jim Fitzsimmons" },
  { year: 1937, horse: "War Admiral", jockey: "Charles Kurtsinger", trainer: "George Conway" },
  { year: 1941, horse: "Whirlaway", jockey: "Eddie Arcaro", trainer: "Ben Jones" },
  { year: 1943, horse: "Count Fleet", jockey: "Johnny Longden", trainer: "Don Cameron" },
  { year: 1946, horse: "Assault", jockey: "Warren Mehrtens", trainer: "Max Hirsch" },
  { year: 1948, horse: "Citation", jockey: "Eddie Arcaro", trainer: "Ben Jones" },
  { year: 1973, horse: "Secretariat", jockey: "Ron Turcotte", trainer: "Lucien Laurin" },
  { year: 1977, horse: "Seattle Slew", jockey: "Jean Cruguet", trainer: "Billy Turner" },
  { year: 1978, horse: "Affirmed", jockey: "Steve Cauthen", trainer: "Laz Barrera" },
  { year: 2015, horse: "American Pharoah", jockey: "Victor Espinoza", trainer: "Bob Baffert" },
  { year: 2018, horse: "Justify", jockey: "Mike Smith", trainer: "Bob Baffert" },
];

export default function TripleCrownPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "History", href: "/history" },
          { name: "Triple Crown", href: "/history/triple-crown" },
        ]}
      />
      <ArticleJsonLd
        title="Triple Crown Winners: All 13 Champions in Horse Racing History"
        description="The complete history of the Triple Crown of horse racing, including all 13 winners, the famous 37-year drought, heartbreaking near misses, and what makes the Triple Crown so difficult to win."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd
        items={[
          {
            question: "What is the Triple Crown in horse racing?",
            answer:
              "The Triple Crown of horse racing is achieved when a single horse wins three races in a five-week span: the Kentucky Derby (first Saturday in May, 1.25 miles), the Preakness Stakes (two weeks later, 1 3/16 miles), and the Belmont Stakes (three weeks after the Preakness, 1.5 miles). All three races are restricted to three-year-old Thoroughbreds.",
          },
          {
            question: "How many horses have won the Triple Crown?",
            answer:
              "Only 13 horses have won the Triple Crown since its inception in 1919. The most recent winners are Justify (2018) and American Pharoah (2015). Before American Pharoah, there was a 37-year drought without a Triple Crown winner, dating back to Affirmed in 1978.",
          },
          {
            question: "Why is it so hard to win the Triple Crown?",
            answer:
              "The Triple Crown is extremely difficult because it requires a horse to win three grueling races in just five weeks, each at a different distance and a different track. The increasing distances test stamina, the short intervals between races limit recovery time, and different track surfaces and conditions add variables. Only 13 horses have accomplished it in over 100 years.",
          },
          {
            question: "Who was the last Triple Crown winner?",
            answer:
              "Justify, trained by Bob Baffert and ridden by Mike Smith, was the most recent Triple Crown winner in 2018. He went undefeated in his racing career. Before Justify, American Pharoah won the Triple Crown in 2015, ending a 37-year drought.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4">
            Triple Crown Winners: Horse Racing&apos;s Ultimate Achievement
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The Triple Crown of Thoroughbred racing stands as the most coveted
            prize in the sport. Only thirteen horses in more than a century have
            accomplished the feat of winning the Kentucky Derby, Preakness
            Stakes, and Belmont Stakes in a single season. It is a test of
            speed, stamina, and heart that has broken the dreams of dozens of
            would-be champions.
          </p>
        </header>

        {/* The Three Races Visual */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            The Three Jewels of the Triple Crown
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">LEG 1</div>
              <p className="text-3xl mt-2">🌹</p>
              <h3 className="font-serif text-lg font-bold text-red-800 mt-2">Kentucky Derby</h3>
              <p className="text-sm text-gray-600 mt-1">Churchill Downs, Louisville</p>
              <div className="mt-3 space-y-1 text-sm">
                <p className="font-semibold text-red-700">1.25 miles</p>
                <p className="text-gray-500">First Saturday in May</p>
                <p className="text-gray-500">Dirt surface</p>
              </div>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">LEG 2</div>
              <p className="text-3xl mt-2">🖤</p>
              <h3 className="font-serif text-lg font-bold text-yellow-800 mt-2">Preakness Stakes</h3>
              <p className="text-sm text-gray-600 mt-1">Pimlico, Baltimore</p>
              <div className="mt-3 space-y-1 text-sm">
                <p className="font-semibold text-yellow-700">1.1875 miles</p>
                <p className="text-gray-500">Two weeks after Derby</p>
                <p className="text-gray-500">Dirt surface</p>
              </div>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">LEG 3</div>
              <p className="text-3xl mt-2">💎</p>
              <h3 className="font-serif text-lg font-bold text-blue-800 mt-2">Belmont Stakes</h3>
              <p className="text-sm text-gray-600 mt-1">Belmont Park, New York</p>
              <div className="mt-3 space-y-1 text-sm">
                <p className="font-semibold text-blue-700">1.5 miles</p>
                <p className="text-gray-500">Three weeks after Preakness</p>
                <p className="text-gray-500">Dirt surface</p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-derby-cream rounded-xl p-4 text-center">
            <p className="text-sm text-gray-700">
              <strong>The Challenge:</strong> Three races · Three different distances · Three different tracks · Five weeks · Only 13 winners in 150+ years
            </p>
          </div>
        </section>

        {/* What is the Triple Crown */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What Is the Triple Crown?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Triple Crown challenges a single three-year-old Thoroughbred to
            win three prestigious races within a span of just five weeks. Each
            leg tests different qualities: the Kentucky Derby (1.25 miles at
            Churchill Downs) rewards a blend of speed and tactical ability; the
            Preakness Stakes (1 3/16 miles at Pimlico Race Course, two weeks
            later) demands sustained speed around tight turns; and the Belmont
            Stakes (1.5 miles at Belmont Park or Saratoga, three weeks after
            the Preakness) is a grueling test of endurance known as the &quot;
            Test of the Champion.&quot;
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-derby-cream p-5 rounded-lg text-center">
              <p className="font-serif text-xl font-bold text-derby-green">
                Leg 1
              </p>
              <p className="font-serif text-lg font-semibold text-derby-gold mt-1">
                Kentucky Derby
              </p>
              <p className="text-gray-600 text-sm mt-1">
                1.25 miles — Churchill Downs
              </p>
              <p className="text-gray-500 text-xs mt-1">
                First Saturday in May
              </p>
            </div>
            <div className="bg-derby-cream p-5 rounded-lg text-center">
              <p className="font-serif text-xl font-bold text-derby-green">
                Leg 2
              </p>
              <p className="font-serif text-lg font-semibold text-derby-gold mt-1">
                Preakness Stakes
              </p>
              <p className="text-gray-600 text-sm mt-1">
                1 3/16 miles — Pimlico
              </p>
              <p className="text-gray-500 text-xs mt-1">Two weeks after Derby</p>
            </div>
            <div className="bg-derby-cream p-5 rounded-lg text-center">
              <p className="font-serif text-xl font-bold text-derby-green">
                Leg 3
              </p>
              <p className="font-serif text-lg font-semibold text-derby-gold mt-1">
                Belmont Stakes
              </p>
              <p className="text-gray-600 text-sm mt-1">
                1.5 miles — &quot;Test of the Champion&quot;
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Three weeks after Preakness
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The concept of the Triple Crown was not formally recognized until
            1930, but Sir Barton is retroactively credited as the first winner
            after sweeping all three races in 1919. The term gained widespread
            use after sportswriter Charles Hatton popularized it while covering
            Gallant Fox&apos;s three-race sweep in 1930.
          </p>
        </section>

        {/* All 13 Winners */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            All 13 Triple Crown Winners
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-derby-green text-white">
                  <th className="px-4 py-3 text-left font-serif text-sm">
                    Year
                  </th>
                  <th className="px-4 py-3 text-left font-serif text-sm">
                    Horse
                  </th>
                  <th className="px-4 py-3 text-left font-serif text-sm">
                    Jockey
                  </th>
                  <th className="px-4 py-3 text-left font-serif text-sm">
                    Trainer
                  </th>
                </tr>
              </thead>
              <tbody>
                {tripleCrownWinners.map((winner, index) => (
                  <tr
                    key={winner.year}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-derby-cream/50"
                    }
                  >
                    <td className="px-4 py-2 font-bold text-derby-green text-sm">
                      {winner.year}
                    </td>
                    <td className="px-4 py-2 font-semibold text-gray-800 text-sm">
                      {winner.horse}
                    </td>
                    <td className="px-4 py-2 text-gray-600 text-sm">
                      {winner.jockey}
                    </td>
                    <td className="px-4 py-2 text-gray-600 text-sm">
                      {winner.trainer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The 37-Year Drought */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The 37-Year Drought (1978-2015)
          </h2>
          <div className="bg-derby-cream border-l-4 border-derby-gold p-6 rounded-r-lg mb-4">
            <p className="text-derby-green font-semibold text-lg">
              From Affirmed in 1978 to American Pharoah in 2015, no horse could
              complete the Triple Crown — a drought that lasted 37 years and
              produced some of racing&apos;s most heartbreaking moments.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            After Affirmed&apos;s 1978 sweep, horse after horse came agonizingly
            close to the Triple Crown only to fall short in the Belmont Stakes.
            The drought became one of the most discussed storylines in all of
            American sports, and each failed attempt added to the growing sense
            that the feat might never be accomplished again.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            During those 37 years, thirteen horses won both the Derby and the
            Preakness but could not seal the deal in the Belmont. The weight of
            history, the fatigue from three races in five weeks, and the
            demanding 1.5-mile distance of the Belmont all conspired against
            them. As the years passed, some wondered if the modern racing
            schedule and training methods had made the Triple Crown
            unattainable.
          </p>
        </section>

        {/* Near Misses */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Heartbreaking Near Misses
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 p-5 rounded-lg">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Real Quiet (1998)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                After winning the Derby and Preakness, Real Quiet appeared to
                have the Belmont Stakes won as he led deep into the stretch. But
                Victory Gallop surged alongside him in the final strides and
                caught him at the wire by a nose — one of the most
                heartbreaking finishes in Triple Crown history.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded-lg">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Smarty Jones (2004)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Smarty Jones captured the nation&apos;s imagination as an
                undefeated horse with a compelling backstory. After dominant
                victories in the Derby and Preakness, he entered the Belmont
                as the heavy favorite. He led deep into the stretch but was
                overtaken by 36-1 longshot Birdstone in the final furlong,
                shattering the dreams of a massive crowd that had come to
                witness history.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded-lg">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Big Brown (2008)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Big Brown entered the Belmont as perhaps the most hyped Triple
                Crown contender in decades after demolishing his fields in the
                Derby and Preakness. But the seemingly invincible colt was
                pulled up by his jockey in the stretch of the Belmont and
                finished last — one of the most shocking collapses in racing
                history.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded-lg">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                I&apos;ll Have Another (2012)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I&apos;ll Have Another won the Derby and Preakness with
                thrilling stretch runs, and anticipation for his Belmont attempt
                was enormous. But the day before the race, his connections
                announced he had been scratched with a leg injury. The
                retirement was the right call for the horse&apos;s welfare, but
                the racing world was left wondering what might have been.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded-lg">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                California Chrome (2014)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                California Chrome, the beloved &quot;people&apos;s horse&quot;
                bred by a working-class partnership, won the Derby and Preakness
                convincingly. In the Belmont, he was in contention turning for
                home but faded to fourth as Tonalist won. It was the final near
                miss before American Pharoah finally ended the drought a year
                later.
              </p>
            </div>
          </div>
        </section>

        {/* Why It's So Difficult */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What Makes the Triple Crown So Difficult?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Several factors combine to make the Triple Crown the most demanding
            challenge in horse racing. The five-week timeframe gives horses
            minimal recovery between maximum efforts. Each race is at a
            different distance, requiring a horse to display both speed and
            stamina. The three tracks have different configurations, and fresh
            horses — those who skipped earlier legs — join the competition at the
            Preakness and Belmont with a rest advantage.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Belmont Stakes, at 1.5 miles, is the longest of the three and
            the point where most Triple Crown bids have failed. Horses that
            have already run hard in the Derby and Preakness may simply not have
            the stamina reserves to maintain their form over the grueling
            distance. The Belmont is rightly known as the &quot;Test of the
            Champion&quot; — and only true champions pass it.
          </p>
        </section>

        {/* 2026 Discussion */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            2026 Triple Crown Outlook
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As the 2026 Kentucky Derby approaches, racing fans are once again
            dreaming of a Triple Crown sweep. The Road to the Derby prep season
            has produced several exciting contenders, and the question on
            everyone&apos;s mind is whether any of these three-year-olds
            possess the rare combination of talent and durability needed to win
            all three legs. History tells us the odds are long — but as American
            Pharoah and Justify proved, the impossible can happen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Follow our{" "}
            <Link
              href="/race/contenders"
              className="text-derby-green underline hover:text-derby-gold transition-colors"
            >
              2026 contenders page
            </Link>{" "}
            and{" "}
            <Link
              href="/race/odds"
              className="text-derby-green underline hover:text-derby-gold transition-colors"
            >
              current Derby odds
            </Link>{" "}
            for the latest updates on which horses might have a shot at the
            sport&apos;s ultimate prize.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                What is the Triple Crown in horse racing?
              </h3>
              <p className="text-gray-700">
                The Triple Crown is achieved when a single three-year-old
                Thoroughbred wins the Kentucky Derby, the Preakness Stakes, and
                the Belmont Stakes in the same year. The three races are held
                within a five-week period, making it an extraordinarily
                demanding feat of speed, stamina, and consistency.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                How many horses have won the Triple Crown?
              </h3>
              <p className="text-gray-700">
                Thirteen horses have won the Triple Crown since Sir Barton first
                accomplished the feat in 1919. The most recent winners are
                Justify (2018) and American Pharoah (2015), both trained by Bob
                Baffert. Before American Pharoah, the sport endured a 37-year
                drought without a Triple Crown winner.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Why is it so hard to win the Triple Crown?
              </h3>
              <p className="text-gray-700">
                The Triple Crown is extremely difficult because it requires
                winning three races at increasing distances in just five weeks.
                The short recovery time between races, the varying track
                conditions at three different venues, and the entry of fresh
                challengers at each leg all conspire against the Derby winner.
                The 1.5-mile Belmont Stakes, the final leg, is where most
                Triple Crown bids have ended.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Who was the last Triple Crown winner?
              </h3>
              <p className="text-gray-700">
                Justify won the Triple Crown in 2018, going undefeated in his
                six-race career before retirement. He was trained by Bob Baffert
                and ridden by Mike Smith. Justify also broke the so-called
                &quot;Curse of Apollo&quot; by winning the Derby without having
                raced as a two-year-old.
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Related Pages
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/history/past-winners"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Derby Past Winners
              </h3>
              <p className="text-gray-600 text-sm">
                Complete winners list and records
              </p>
            </Link>
            <Link
              href="/history/famous-moments"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Famous Moments
              </h3>
              <p className="text-gray-600 text-sm">
                The greatest races in Derby history
              </p>
            </Link>
            <Link
              href="/race/contenders"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                2026 Contenders
              </h3>
              <p className="text-gray-600 text-sm">
                Could this year produce a Triple Crown winner?
              </p>
            </Link>
            <Link
              href="/history/overview"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Derby History Overview
              </h3>
              <p className="text-gray-600 text-sm">
                The complete story from 1875 to today
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
