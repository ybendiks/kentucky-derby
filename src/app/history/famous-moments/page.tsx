import { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Greatest Kentucky Derby Moments | Most Famous Races & Upsets",
  description:
    "Relive the greatest moments in Kentucky Derby history: Secretariat's record, Mine That Bird's miracle, Barbaro's triumph, American Pharoah's Triple Crown, and the most dramatic finishes ever.",
  keywords:
    "greatest kentucky derby moments, most famous derby races, secretariat 1973, mine that bird, barbaro kentucky derby, kentucky derby upsets",
};

export default function FamousMomentsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "History", href: "/history" },
          { name: "Famous Moments", href: "/history/famous-moments" },
        ]}
      />
      <ArticleJsonLd
        title="Greatest Kentucky Derby Moments: The Most Famous Races in History"
        description="The most legendary moments in Kentucky Derby history, from Secretariat's unbreakable record to shocking upsets, tragic stories, and controversial finishes that defined the Run for the Roses."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd
        items={[
          {
            question: "What was the greatest Kentucky Derby race ever?",
            answer:
              "Most racing historians consider Secretariat's 1973 Kentucky Derby the greatest performance in the race's history. He ran each quarter-mile faster than the last and set the all-time record of 1:59.4, which has stood for over 50 years. His dominance in the Derby launched one of the greatest Triple Crown campaigns ever seen.",
          },
          {
            question: "What was the biggest upset in Kentucky Derby history?",
            answer:
              "The biggest recent upset was Mine That Bird in 2009, who won at odds of 50-1 after trailing the field for most of the race. The all-time biggest longshot to win was Donerail in 1913 at 91-1 odds. Rich Strike in 2022, at 80-1, was the second-biggest longshot winner in Derby history.",
          },
          {
            question: "Has a Kentucky Derby winner ever been disqualified?",
            answer:
              "Yes. The most notable disqualifications are Dancer's Image in 1968, who was disqualified after testing positive for a prohibited substance (forward to Calumet Farm's Forward Pass), and the 2019 Derby where Maximum Security was disqualified for interference, with Country House declared the winner — the first time an apparent winner was DQ'd for an on-track infraction.",
          },
          {
            question: "How many fillies have won the Kentucky Derby?",
            answer:
              "Three fillies have won the Kentucky Derby: Regret in 1915, Genuine Risk in 1980, and Winning Colors in 1988. Rags to Riches did not win the Derby but notably won the 2007 Belmont Stakes, defeating colts in the final leg of the Triple Crown.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4">
            Greatest Kentucky Derby Moments in History
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Over more than 151 years, the Kentucky Derby has produced moments of
            breathtaking brilliance, shocking upsets, heartbreaking tragedy, and
            bitter controversy. These are the races and stories that define the
            Run for the Roses — the performances that transcended sport and
            became part of American culture.
          </p>
        </header>

        {/* Famous Moments Timeline */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Derby History Timeline
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-derby-green/20" />
            <div className="space-y-6">
              {[
                { year: "1875", event: "First Kentucky Derby", color: "bg-derby-green" },
                { year: "1915", event: "Regret: first filly to win", color: "bg-pink-500" },
                { year: "1968", event: "Dancer's Image DQ controversy", color: "bg-red-500" },
                { year: "1973", event: "Secretariat's 1:59.4 record", color: "bg-derby-gold" },
                { year: "1978", event: "Affirmed: last TC for 37 years", color: "bg-blue-500" },
                { year: "1988", event: "Winning Colors: last filly to win", color: "bg-pink-500" },
                { year: "2006", event: "Barbaro's triumph & tragedy", color: "bg-gray-500" },
                { year: "2009", event: "Mine That Bird's 50-1 miracle", color: "bg-purple-500" },
                { year: "2015", event: "American Pharoah ends TC drought", color: "bg-derby-gold" },
                { year: "2018", event: "Justify breaks Curse of Apollo", color: "bg-derby-gold" },
                { year: "2019", event: "Maximum Security DQ'd", color: "bg-red-500" },
                { year: "2022", event: "Rich Strike: 80-1 upset", color: "bg-purple-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 relative">
                  <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold shrink-0 z-10 shadow-md`}>
                    {item.year.slice(2)}
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex-1 shadow-sm">
                    <span className="font-bold text-derby-green text-sm">{item.year}</span>
                    <span className="text-gray-600 text-sm ml-2">{item.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 flex-wrap mt-6 text-xs">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-derby-gold inline-block" /> Triple Crown</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-pink-500 inline-block" /> Filly winners</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-purple-500 inline-block" /> Longshot upsets</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500 inline-block" /> Controversies</span>
          </div>
        </section>

        {/* Secretariat 1973 */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Secretariat&apos;s Record Run (1973)
          </h2>
          <div className="bg-derby-cream border-l-4 border-derby-gold p-6 rounded-r-lg mb-4">
            <p className="text-derby-green font-semibold text-lg">
              Final time: 1:59 2/5 — a record that has stood for more than 50
              years and may never be broken.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            No conversation about Kentucky Derby history can begin anywhere
            other than with Secretariat&apos;s 1973 masterpiece. The chestnut
            colt known as &quot;Big Red&quot; did something no horse had done
            before or has done since: he ran each successive quarter-mile of the
            Derby faster than the one before. His final quarter in :23 flat
            propelled him to a time of 1:59 2/5, shattering the record and
            making him the only horse ever to break two minutes in the
            Kentucky Derby.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Secretariat went on to win the Triple Crown in spectacular fashion,
            capping it with a 31-length victory in the Belmont Stakes that
            remains the most awe-inspiring performance in the history of
            Thoroughbred racing. But it all started on that May afternoon at
            Churchill Downs, when the greatest racehorse who ever lived
            announced himself to the world.
          </p>
        </section>

        {/* Mine That Bird 2009 */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Mine That Bird&apos;s Miracle (2009)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If Secretariat&apos;s Derby was the greatest display of dominance,
            Mine That Bird&apos;s 2009 victory was the greatest display of
            improbability. At odds of 50-1, the small gelding trailed the
            entire field down the backstretch and appeared hopelessly beaten as
            the leaders swept around the far turn. Then jockey Calvin Borel
            found an opening along the rail and Mine That Bird exploded through
            it, weaving past horse after horse in a stunning stretch run that
            left the Churchill Downs crowd in disbelief.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mine That Bird won by 6 3/4 lengths, one of the largest winning
            margins in Derby history, despite being last or near-last for most
            of the race. The call from announcer Tom Durkin has become one of
            the most replayed moments in racing broadcast history. Borel&apos;s
            masterful ride along the rail was a display of jockeymanship that
            will be studied and admired for generations.
          </p>
        </section>

        {/* Barbaro 2006 */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Barbaro: Triumph and Tragedy (2006)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Barbaro&apos;s 2006 Kentucky Derby victory was a performance of
            overwhelming power. The undefeated colt drew away from the field in
            the stretch to win by 6 1/2 lengths, looking every bit like a
            horse who could sweep the Triple Crown. The racing world buzzed with
            anticipation as Barbaro headed to the Preakness Stakes two weeks
            later.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Then disaster struck. Just steps out of the starting gate at
            Pimlico, Barbaro shattered his right hind leg in a catastrophic
            breakdown. Despite heroic surgical efforts and months of
            rehabilitation, the injuries ultimately proved too severe, and
            Barbaro was euthanized in January 2007. His story became a national
            conversation about the risks of horse racing and the bond between
            humans and horses. Barbaro&apos;s Derby victory, once a
            celebration of pure athletic brilliance, became a bittersweet memory
            inextricable from the tragedy that followed.
          </p>
        </section>

        {/* American Pharoah 2015 */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            American Pharoah Ends the Drought (2015)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For 37 years, the Triple Crown had been racing&apos;s white whale —
            an achievement that seemed increasingly unattainable. Thirteen
            horses had won the Derby and Preakness during the drought, only to
            fail in the Belmont. When American Pharoah won the 2015 Kentucky
            Derby with an authoritative front-running performance, the
            anticipation was intense but tempered by decades of disappointment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            American Pharoah delivered where so many others had fallen short. He
            won the Preakness and then, in front of a roaring crowd at Belmont
            Park, drew clear in the stretch to become the twelfth Triple Crown
            winner and the first since Affirmed in 1978. The outpouring of
            emotion at the finish was a testament to how deeply fans had yearned
            for someone to finally complete the task. His Derby victory was the
            spark that lit the fuse on one of racing&apos;s most triumphant
            stories.
          </p>
        </section>

        {/* Justify 2018 */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Justify Breaks the Curse of Apollo (2018)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Since Apollo in 1882, no horse that had failed to race as a
            two-year-old had won the Kentucky Derby. The 136-year-old pattern
            had become one of racing&apos;s most persistent superstitions,
            known as the &quot;Curse of Apollo.&quot; Justify, who did not make
            his first start until February of his three-year-old season,
            arrived at Churchill Downs undefeated but carrying the weight of
            that history.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Running in a driving rainstorm that turned the track into a sloppy
            mess, Justify splashed to the front and held off all challengers,
            winning by 2 1/2 lengths. Three weeks later he won the Preakness,
            and three weeks after that he completed the Triple Crown at the
            Belmont, going undefeated in his six-race career. His Derby victory
            was both a triumph of talent and a reminder that no curse in
            sports lasts forever.
          </p>
        </section>

        {/* Dancer's Image 1968 */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Dancer&apos;s Image and the 1968 Controversy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 1968 Kentucky Derby produced one of the most enduring
            controversies in racing history. Dancer&apos;s Image crossed the
            finish line first, but a post-race drug test revealed the presence
            of phenylbutazone (a pain reliever now commonly used but banned at
            the time in Kentucky). After lengthy legal battles, Dancer&apos;s
            Image was disqualified and the victory awarded to Forward Pass,
            owned by the legendary Calumet Farm.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dancer&apos;s Image&apos;s owner, Peter Fuller, contested the
            ruling for years, maintaining that his horse was never intentionally
            given the substance. The case raised fundamental questions about
            medication rules and testing procedures in horse racing. To this
            day, it remains one of the most debated results in Derby history,
            and Dancer&apos;s Image occupies a unique and uncomfortable place in
            the Derby record book.
          </p>
        </section>

        {/* Rags to Riches 2007 */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Rags to Riches: A Filly&apos;s Triumph (2007)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While Rags to Riches did not win the Kentucky Derby, her 2007
            Belmont Stakes victory deserves mention in any account of famous
            moments connected to the Triple Crown. Trained by Todd Pletcher, the
            filly became the first female horse to win the Belmont Stakes in 102
            years, defeating Curlin in a dramatic stretch duel that had the crowd
            on its feet.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Her victory recalled the exploits of the three fillies who have won
            the Kentucky Derby itself: Regret in 1915, who was the first;
            Genuine Risk in 1980, who went on to place second in the Preakness
            and Belmont; and Winning Colors in 1988, who led wire-to-wire in a
            breathtaking display of front-running speed under jockey Gary
            Stevens.
          </p>
        </section>

        {/* Country House 2019 */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Country House and the 2019 Disqualification
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 2019 Kentucky Derby produced a result that had never occurred
            before: the apparent on-track winner was disqualified for
            interference. Maximum Security crossed the finish line first, but
            after a dramatic stewards&apos; inquiry, he was taken down for
            impeding the path of several horses on the far turn. Country House,
            who finished second on the track, was elevated to the win at odds
            of 65-1.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The decision was the first disqualification of an on-track winner
            for an in-race infraction in Derby history. It ignited a firestorm
            of debate among racing fans, handicappers, and industry
            participants. Supporters of the decision pointed to clear video
            evidence of Maximum Security drifting out and impeding other horses,
            while critics argued that the punishment was disproportionate for
            the infraction. Regardless of where one stands, the 2019 Derby
            remains one of the most talked-about races in the event&apos;s
            history.
          </p>
        </section>

        {/* Notable Fillies */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Fillies Who Made Derby History
          </h2>
          <div className="space-y-4">
            <div className="bg-derby-cream p-5 rounded-lg">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Regret (1915)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Regret broke barriers as the first filly to win the Kentucky
                Derby. Her victory in 1915 was a seminal moment that proved
                female horses could compete with — and defeat — the best colts
                in the country on the biggest stage. She remains one of the most
                celebrated horses in early Derby history.
              </p>
            </div>
            <div className="bg-derby-cream p-5 rounded-lg">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Winning Colors (1988)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Winning Colors became only the third filly to win the Kentucky
                Derby and did it in spectacular fashion, leading from start to
                finish in a wire-to-wire performance. Under jockey Gary Stevens,
                the gray filly showed blazing speed and tenacity, holding off
                Forty Niner and Risen Star in a thrilling stretch battle. No
                filly has won the Derby since.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                What was the greatest Kentucky Derby race ever?
              </h3>
              <p className="text-gray-700">
                Secretariat&apos;s 1973 Kentucky Derby is widely regarded as the
                greatest performance in the race&apos;s history. He set the
                all-time record of 1:59.4 while running each quarter-mile faster
                than the last, a feat that has never been replicated. The record
                has stood for over 50 years.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                What was the biggest upset in Kentucky Derby history?
              </h3>
              <p className="text-gray-700">
                The all-time biggest longshot to win was Donerail in 1913 at
                91-1 odds. In the modern era, Mine That Bird (2009, 50-1) and
                Rich Strike (2022, 80-1) produced two of the most shocking
                upsets in Derby history, both rallying from far behind to win
                in dramatic fashion.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Has a Kentucky Derby winner ever been disqualified?
              </h3>
              <p className="text-gray-700">
                Yes. Dancer&apos;s Image was disqualified after the 1968 Derby
                for a post-race medication positive. In 2019, Maximum Security
                was disqualified for interference during the race — the first
                time a Derby winner was taken down for an on-track infraction.
                Country House was awarded the victory.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                How many fillies have won the Kentucky Derby?
              </h3>
              <p className="text-gray-700">
                Three fillies have won the Kentucky Derby: Regret (1915),
                Genuine Risk (1980), and Winning Colors (1988). No filly has won
                the Derby since Winning Colors, though several have entered the
                race in subsequent years.
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
                Past Winners
              </h3>
              <p className="text-gray-600 text-sm">
                Complete winners list and records
              </p>
            </Link>
            <Link
              href="/history/triple-crown"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Triple Crown Winners
              </h3>
              <p className="text-gray-600 text-sm">
                All 13 champions and the near misses
              </p>
            </Link>
            <Link
              href="/history/traditions"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Derby Traditions
              </h3>
              <p className="text-gray-600 text-sm">
                Roses, juleps, hats, and more
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
