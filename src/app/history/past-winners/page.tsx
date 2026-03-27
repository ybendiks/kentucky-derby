import { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Kentucky Derby Past Winners List | Complete Results & Records",
  description:
    "Complete list of Kentucky Derby past winners including horse, jockey, trainer, and winning time. Records, statistics, and notable champions from Secretariat to the present.",
  keywords:
    "kentucky derby past winners, kentucky derby winners list, kentucky derby results, secretariat derby record",
};

const recentWinners = [
  { year: 2025, horse: "TBD", jockey: "TBD", trainer: "TBD", time: "TBD" },
  { year: 2024, horse: "Mystik Dan", jockey: "Brian Hernandez Jr.", trainer: "Kenny McPeek", time: "2:03.34" },
  { year: 2023, horse: "Mage", jockey: "Javier Castellano", trainer: "Gustavo Delgado", time: "2:01.57" },
  { year: 2022, horse: "Rich Strike", jockey: "Sonny Leon", trainer: "Eric Reed", time: "2:02.61" },
  { year: 2021, horse: "Medina Spirit", jockey: "John Velazquez", trainer: "Bob Baffert", time: "2:01.02" },
  { year: 2020, horse: "Authentic", jockey: "John Velazquez", trainer: "Bob Baffert", time: "2:00.61" },
  { year: 2019, horse: "Country House", jockey: "Flavien Prat", trainer: "Bill Mott", time: "2:03.93" },
  { year: 2018, horse: "Justify", jockey: "Mike Smith", trainer: "Bob Baffert", time: "2:04.20" },
  { year: 2017, horse: "Always Dreaming", jockey: "John Velazquez", trainer: "Todd Pletcher", time: "2:03.59" },
  { year: 2016, horse: "Nyquist", jockey: "Mario Gutierrez", trainer: "Doug O'Neill", time: "2:01.31" },
  { year: 2015, horse: "American Pharoah", jockey: "Victor Espinoza", trainer: "Bob Baffert", time: "2:03.02" },
  { year: 2014, horse: "California Chrome", jockey: "Victor Espinoza", trainer: "Art Sherman", time: "2:03.66" },
  { year: 2013, horse: "Orb", jockey: "Joel Rosario", trainer: "Shug McGaughey", time: "2:02.89" },
  { year: 2012, horse: "I'll Have Another", jockey: "Mario Gutierrez", trainer: "Doug O'Neill", time: "2:01.83" },
  { year: 2011, horse: "Animal Kingdom", jockey: "John Velazquez", trainer: "Graham Motion", time: "2:02.04" },
  { year: 2010, horse: "Super Saver", jockey: "Calvin Borel", trainer: "Todd Pletcher", time: "2:04.45" },
  { year: 2009, horse: "Mine That Bird", jockey: "Calvin Borel", trainer: "Bennie Woolley Jr.", time: "2:02.66" },
  { year: 2008, horse: "Big Brown", jockey: "Kent Desormeaux", trainer: "Rick Dutrow Jr.", time: "2:01.82" },
  { year: 2007, horse: "Street Sense", jockey: "Calvin Borel", trainer: "Carl Nafzger", time: "2:02.17" },
  { year: 2006, horse: "Barbaro", jockey: "Edgar Prado", trainer: "Michael Matz", time: "2:01.36" },
  { year: 2005, horse: "Giacomo", jockey: "Mike Smith", trainer: "John Shirreffs", time: "2:02.75" },
  { year: 2004, horse: "Smarty Jones", jockey: "Stewart Elliott", trainer: "John Servis", time: "2:04.06" },
  { year: 2003, horse: "Funny Cide", jockey: "Jose Santos", trainer: "Barclay Tagg", time: "2:01.19" },
  { year: 2002, horse: "War Emblem", jockey: "Victor Espinoza", trainer: "Bob Baffert", time: "2:01.13" },
  { year: 2001, horse: "Monarchos", jockey: "Jorge Chavez", trainer: "John Ward Jr.", time: "1:59.97" },
  { year: 2000, horse: "Fusaichi Pegasus", jockey: "Kent Desormeaux", trainer: "Neil Drysdale", time: "2:01.12" },
  { year: 1999, horse: "Charismatic", jockey: "Chris Antley", trainer: "D. Wayne Lukas", time: "2:03.29" },
  { year: 1998, horse: "Real Quiet", jockey: "Kent Desormeaux", trainer: "Bob Baffert", time: "2:02.40" },
  { year: 1997, horse: "Silver Charm", jockey: "Gary Stevens", trainer: "Bob Baffert", time: "2:02.44" },
  { year: 1996, horse: "Grindstone", jockey: "Jerry Bailey", trainer: "D. Wayne Lukas", time: "2:01.06" },
  { year: 1995, horse: "Thunder Gulch", jockey: "Gary Stevens", trainer: "D. Wayne Lukas", time: "2:01.27" },
  { year: 1994, horse: "Go for Gin", jockey: "Chris McCarron", trainer: "Nick Zito", time: "2:03.56" },
  { year: 1993, horse: "Sea Hero", jockey: "Jerry Bailey", trainer: "Mack Miller", time: "2:02.40" },
  { year: 1992, horse: "Lil E. Tee", jockey: "Pat Day", trainer: "Lynn Whiting", time: "2:03.00" },
  { year: 1991, horse: "Strike the Gold", jockey: "Chris Antley", trainer: "Nick Zito", time: "2:03.00" },
  { year: 1990, horse: "Unbridled", jockey: "Craig Perret", trainer: "Carl Nafzger", time: "2:02.00" },
  { year: 1989, horse: "Sunday Silence", jockey: "Pat Valenzuela", trainer: "Charlie Whittingham", time: "2:05.00" },
  { year: 1988, horse: "Winning Colors", jockey: "Gary Stevens", trainer: "D. Wayne Lukas", time: "2:02.20" },
  { year: 1987, horse: "Alysheba", jockey: "Chris McCarron", trainer: "Jack Van Berg", time: "2:03.40" },
  { year: 1986, horse: "Ferdinand", jockey: "Bill Shoemaker", trainer: "Charlie Whittingham", time: "2:02.80" },
];

export default function PastWinnersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "History", href: "/history" },
          { name: "Past Winners", href: "/history/past-winners" },
        ]}
      />
      <ArticleJsonLd
        title="Kentucky Derby Past Winners: Complete Results & Records"
        description="Complete list of Kentucky Derby winners with horse, jockey, trainer, and time. Records and statistics from the most famous horse race in America."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd
        items={[
          {
            question: "What is the fastest Kentucky Derby time ever?",
            answer:
              "Secretariat holds the all-time Kentucky Derby record with a time of 1:59.4 (officially 1:59 2/5), set in 1973. He is the only horse to break two minutes in the Derby. Monarchos ran the second-fastest Derby in 2001 with a time of 1:59.97.",
          },
          {
            question: "Which jockey has won the most Kentucky Derbies?",
            answer:
              "Eddie Arcaro and Bill Hartack each won five Kentucky Derbies, the most by any jockey. Arcaro won in 1938, 1941, 1945, 1948, and 1952. Hartack won in 1957, 1960, 1962, 1964, and 1969.",
          },
          {
            question: "Which trainer has won the most Kentucky Derbies?",
            answer:
              "Bob Baffert has trained the most Kentucky Derby winners in the modern era with seven victories: Silver Charm (1997), Real Quiet (1998), War Emblem (2002), American Pharoah (2015), Justify (2018), Authentic (2020), and Medina Spirit (2021). Ben Jones trained six Derby winners.",
          },
          {
            question: "Has a filly ever won the Kentucky Derby?",
            answer:
              "Yes, three fillies have won the Kentucky Derby: Regret in 1915, Genuine Risk in 1980, and Winning Colors in 1988. Rags to Riches, a filly, also won the Belmont Stakes in 2007 but did not win the Derby.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4">
            Kentucky Derby Past Winners &amp; Complete Results
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every Kentucky Derby champion, from the legendary Secretariat to the
            latest winner, has earned a place in racing immortality. Browse the
            complete winners list, discover the records that still stand, and
            explore the statistics that define the greatest horse race in
            America.
          </p>
        </header>

        {/* Winning Time Trend Visual */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Kentucky Derby Winning Times: A Visual History
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Derby winning times have evolved dramatically over 150 years. The
            chart below highlights key benchmarks in the race&rsquo;s history.
          </p>
          <div className="bg-white border-2 border-derby-green/20 rounded-2xl p-6 overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Time axis labels */}
              <div className="flex justify-between text-xs text-gray-400 mb-1 px-1">
                <span>2:10</span>
                <span>2:05</span>
                <span>2:00</span>
                <span>1:59</span>
              </div>
              <div className="space-y-3">
                {[
                  { year: "1875", horse: "Aristides", time: "2:37.75", pct: 10 },
                  { year: "1973", horse: "Secretariat", time: "1:59.40", pct: 100, highlight: true },
                  { year: "2001", horse: "Monarchos", time: "1:59.97", pct: 97 },
                  { year: "2020", horse: "Authentic", time: "2:00.61", pct: 92 },
                  { year: "2023", horse: "Mage", time: "2:01.57", pct: 84 },
                  { year: "2024", horse: "Mystik Dan", time: "2:03.34", pct: 70 },
                ].map((entry) => (
                  <div key={entry.year} className="flex items-center gap-3">
                    <div className="w-16 text-right text-sm font-bold text-derby-green shrink-0">
                      {entry.year}
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                      <div
                        className={`h-full rounded-full flex items-center justify-end pr-3 ${
                          entry.highlight
                            ? "bg-derby-gold text-derby-green"
                            : "bg-derby-green/70 text-white"
                        }`}
                        style={{ width: `${entry.pct}%` }}
                      >
                        <span className="text-xs font-bold whitespace-nowrap">
                          {entry.time}
                        </span>
                      </div>
                    </div>
                    <div className="w-28 text-xs text-gray-600 shrink-0 truncate">
                      {entry.horse}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                Longer bars = faster times. Gold bar = all-time record holder.
              </p>
            </div>
          </div>
        </section>

        {/* Derby Records at a Glance - Visual Stats */}
        <section className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "151+", label: "Years of Racing", sub: "Since 1875" },
              { stat: "1:59.4", label: "All-Time Record", sub: "Secretariat, 1973" },
              { stat: "13", label: "Triple Crown Winners", sub: "Last: Justify (2018)" },
              { stat: "91-1", label: "Longest Shot Winner", sub: "Donerail, 1913" },
            ].map((item, i) => (
              <div key={i} className="bg-derby-green rounded-xl p-5 text-center text-white">
                <p className="font-serif text-3xl font-bold text-derby-gold">{item.stat}</p>
                <p className="text-sm font-medium mt-1">{item.label}</p>
                <p className="text-xs text-white/60 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notable Champions */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Legendary Derby Champions
          </h2>

          <div className="space-y-6">
            <div className="bg-derby-cream border-l-4 border-derby-gold p-6 rounded-r-lg">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-2">
                Secretariat (1973) — The Greatest of All Time
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Secretariat&apos;s 1973 Kentucky Derby remains the single
                greatest performance in the race&apos;s history. The chestnut
                colt, affectionately known as &quot;Big Red,&quot; ran each
                successive quarter-mile faster than the last — a feat virtually
                unheard of in a race of that distance. His final time of 1:59
                2/5 (1:59.4) shattered the existing record and has never been
                equaled. Secretariat went on to sweep the Triple Crown, winning
                the Belmont Stakes by an astonishing 31 lengths.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-2">
                Seattle Slew (1977) — Undefeated Triple Crown Winner
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Seattle Slew arrived at Churchill Downs in 1977 as the only
                undefeated horse in the Derby field and delivered a dominant
                victory. He went on to become the only horse in history to win
                the Triple Crown while undefeated. Purchased for just $17,500 as
                a yearling, Seattle Slew was one of the greatest bargains in
                racing history and proved that greatness does not require a
                princely price tag.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-2">
                Affirmed (1978) — The Last Triple Crown for 37 Years
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Affirmed&apos;s 1978 Derby victory was the opening chapter of
                one of racing&apos;s greatest rivalries. Affirmed and his arch-
                rival Alydar battled head-to-head in all three Triple Crown
                races, with Affirmed prevailing each time by increasingly narrow
                margins. After Affirmed&apos;s sweep, it would take 37 years
                before another horse captured the Triple Crown.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-2">
                American Pharoah (2015) — Breaking the Drought
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When American Pharoah crossed the finish line at Churchill Downs
                in 2015, he began a journey that would end one of the longest
                droughts in all of sports. After sweeping all three legs of the
                Triple Crown, American Pharoah became the first horse since
                Affirmed in 1978 to accomplish the feat. His Derby victory was
                authoritative — he led from the early stages and drew clear in
                the stretch, signaling the brilliance that was to come.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-2">
                Justify (2018) — Breaking the Curse of Apollo
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Justify accomplished what no horse had done since Apollo in 1882:
                win the Kentucky Derby without having raced as a two-year-old.
                For 136 years, every Derby winner had raced at age two, and the
                so-called &quot;Curse of Apollo&quot; had become one of
                racing&apos;s most durable superstitions. Justify demolished it,
                then went on to complete a perfect Triple Crown sweep, going
                undefeated in his career before retiring.
              </p>
            </div>
          </div>
        </section>

        {/* Winners Table */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Kentucky Derby Winners (1986-2025)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-derby-green text-white">
                  <th className="px-3 py-3 text-left font-serif text-sm">
                    Year
                  </th>
                  <th className="px-3 py-3 text-left font-serif text-sm">
                    Winner
                  </th>
                  <th className="px-3 py-3 text-left font-serif text-sm">
                    Jockey
                  </th>
                  <th className="px-3 py-3 text-left font-serif text-sm">
                    Trainer
                  </th>
                  <th className="px-3 py-3 text-left font-serif text-sm">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentWinners.map((winner, index) => (
                  <tr
                    key={winner.year}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-derby-cream/50"
                    }
                  >
                    <td className="px-3 py-2 font-bold text-derby-green text-sm">
                      {winner.year}
                    </td>
                    <td className="px-3 py-2 font-semibold text-gray-800 text-sm">
                      {winner.horse}
                    </td>
                    <td className="px-3 py-2 text-gray-600 text-sm">
                      {winner.jockey}
                    </td>
                    <td className="px-3 py-2 text-gray-600 text-sm">
                      {winner.trainer}
                    </td>
                    <td className="px-3 py-2 text-gray-600 text-sm">
                      {winner.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Records and Statistics */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Kentucky Derby Records &amp; Statistics
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: "Fastest Time",
                value: "1:59.4 — Secretariat (1973)",
              },
              {
                label: "Largest Winning Margin",
                value: "8 lengths — Assault (1946) & Old Rosebud (1914)",
              },
              {
                label: "Most Wins (Jockey)",
                value: "5 — Eddie Arcaro & Bill Hartack",
              },
              {
                label: "Most Wins (Trainer)",
                value: "7 — Bob Baffert",
              },
              {
                label: "Most Wins (Owner)",
                value: "8 — Calumet Farm",
              },
              {
                label: "Longest Shot to Win",
                value: "91-1 — Donerail (1913)",
              },
              {
                label: "Largest Field",
                value: "23 starters (1974)",
              },
              {
                label: "Fillies to Win",
                value: "3 — Regret (1915), Genuine Risk (1980), Winning Colors (1988)",
              },
            ].map((record) => (
              <div
                key={record.label}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {record.label}
                </p>
                <p className="font-serif text-base font-bold text-derby-green mt-1">
                  {record.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fun Facts */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Fun Facts &amp; Derby Trivia
          </h2>
          <ul className="space-y-3">
            {[
              "Monarchos (2001) is the only horse besides Secretariat to break two minutes in the Derby, finishing in 1:59.97.",
              "Bill Shoemaker, at age 54, became the oldest jockey to win the Derby when he rode Ferdinand to victory in 1986.",
              "The post position producing the most winners is gate 1 (inside rail), though post 5 has also been statistically favorable.",
              "Fifteen of the first twenty-eight Derby winners were ridden by African American jockeys.",
              "Calumet Farm has owned eight Derby winners, more than any other ownership group in history.",
              "The most common winning margin is one length, reflecting how competitive the race typically is.",
              "Only two horses have won the Derby wire-to-wire in the modern era while also completing the Triple Crown: Seattle Slew and American Pharoah.",
              "Donerail in 1913 remains the longest shot to ever win the Derby at odds of 91-1.",
            ].map((fact, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-derby-cream p-4 rounded-lg"
              >
                <span className="text-derby-gold font-bold text-lg mt-0.5">
                  {index + 1}.
                </span>
                <span className="text-gray-700">{fact}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                What is the fastest Kentucky Derby time ever?
              </h3>
              <p className="text-gray-700">
                Secretariat holds the all-time Kentucky Derby record with a time
                of 1:59 2/5 (1:59.4), set in 1973. He is the only horse to
                break the two-minute barrier in the Derby, a record that has
                stood for more than 50 years. Monarchos came closest in 2001
                with a time of 1:59.97.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Which jockey has won the most Kentucky Derbies?
              </h3>
              <p className="text-gray-700">
                Eddie Arcaro and Bill Hartack share the record with five
                Kentucky Derby victories each. Among active or recently retired
                jockeys, John Velazquez and Calvin Borel each have three Derby
                wins.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Which trainer has won the most Kentucky Derbies?
              </h3>
              <p className="text-gray-700">
                Bob Baffert has trained seven Kentucky Derby winners, the most
                of any trainer in history. His wins span from Silver Charm in
                1997 through Medina Spirit in 2021, covering nearly a quarter
                century of dominance at Churchill Downs.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Has a filly ever won the Kentucky Derby?
              </h3>
              <p className="text-gray-700">
                Three fillies have won the Kentucky Derby: Regret (1915),
                Genuine Risk (1980), and Winning Colors (1988). Winning the
                Derby against colts is considered one of the most remarkable
                achievements in racing, given the physical advantages male
                horses typically hold.
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
              href="/history/triple-crown"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Triple Crown Winners
              </h3>
              <p className="text-gray-600 text-sm">
                All 13 Triple Crown champions and the near misses
              </p>
            </Link>
            <Link
              href="/history/famous-moments"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Famous Derby Moments
              </h3>
              <p className="text-gray-600 text-sm">
                The most legendary races in Derby history
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
            <Link
              href="/race/contenders"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                2026 Contenders
              </h3>
              <p className="text-gray-600 text-sm">
                Meet this year&apos;s Derby hopefuls
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
