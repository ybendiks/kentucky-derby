import { Metadata } from "next";
import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Kentucky Derby History | Origins & Evolution Since 1875 | Complete Guide",
  description:
    "Discover the complete history of the Kentucky Derby from its founding in 1875 by Col. Meriwether Lewis Clark Jr. Learn how America's longest-running sporting event evolved over 151 years.",
  keywords:
    "kentucky derby history, when did kentucky derby start, first kentucky derby, kentucky derby origins, aristides kentucky derby",
};

export default function HistoryOverviewPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "History", href: "/history" },
          { name: "Overview", href: "/history/overview" },
        ]}
      />
      <ArticleJsonLd
        title="Kentucky Derby History: Origins & Evolution Since 1875"
        description="The complete history of the Kentucky Derby from its founding in 1875 to the modern era, covering 151+ years of America's greatest horse race."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd
        items={[
          {
            question: "When did the Kentucky Derby start?",
            answer:
              "The first Kentucky Derby was held on May 17, 1875, at the Louisville Jockey Club track (now Churchill Downs) in Louisville, Kentucky. It was founded by Col. Meriwether Lewis Clark Jr., the grandson of famed explorer William Clark.",
          },
          {
            question: "Who won the first Kentucky Derby?",
            answer:
              "Aristides won the first Kentucky Derby in 1875. He was trained by Ansel Williamson and ridden by jockey Oliver Lewis — both of whom were African American. Aristides won in front of an estimated crowd of 10,000 spectators.",
          },
          {
            question:
              "Is the Kentucky Derby the longest continuously held sporting event in America?",
            answer:
              "Yes. The Kentucky Derby has been held every year since 1875, making it the longest continuously held sporting event in the United States with over 151 consecutive runnings. It has never been canceled, even during World Wars.",
          },
          {
            question: "Why is the Kentucky Derby called the Run for the Roses?",
            answer:
              "The Kentucky Derby is called the Run for the Roses because the winner receives a garland made of over 500 red roses. The rose tradition dates back to 1883, and the phrase 'Run for the Roses' became the race's iconic nickname.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-white py-20 sm:py-28 relative overflow-hidden -mx-4 -mt-12 mb-10">
          <Image
            src="https://images.unsplash.com/photo-1565657739331-ca2241b47e95?w=1920&q=80"
            alt="Horse racing at a flat dirt track with enthusiastic crowd"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Kentucky Derby History: America&apos;s Greatest Horse Race Since
              1875
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              For more than 151 years, the Kentucky Derby has captivated the
              sporting world as the most celebrated horse race in America. From its
              humble beginnings at a Louisville racetrack to its status as a global
              sporting spectacle, the Derby&apos;s history is a story of ambition,
              tradition, and the enduring bond between horse and rider.
            </p>
          </div>
        </section>

        {/* Derby Eras Visual Timeline */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            151+ Years at a Glance
          </h2>
          <div className="bg-white border-2 border-derby-green/20 rounded-2xl p-6 overflow-x-auto">
            <div className="flex gap-2 min-w-[600px]">
              {[
                { era: "1875-1901", label: "Founding Era", desc: "First Derby, early champions, African American jockeys dominate", color: "bg-amber-200 text-amber-800", flex: 2 },
                { era: "1902-1945", label: "Growth Era", desc: "Twin Spires built, national prominence, two World Wars", color: "bg-green-200 text-green-800", flex: 3 },
                { era: "1946-1972", label: "Golden Age", desc: "Citation, Calumet Farm dynasty, televised nationally", color: "bg-blue-200 text-blue-800", flex: 2 },
                { era: "1973-2014", label: "Modern Era", desc: "Secretariat, Triple Crown drought, global audience", color: "bg-purple-200 text-purple-800", flex: 3 },
                { era: "2015-Now", label: "New Era", desc: "American Pharoah, Justify, 150K+ fans annually", color: "bg-derby-gold/30 text-derby-green", flex: 1 },
              ].map((period, i) => (
                <div
                  key={i}
                  className={`${period.color} rounded-lg p-3 text-center`}
                  style={{ flex: period.flex }}
                >
                  <p className="text-xs font-bold">{period.era}</p>
                  <p className="text-xs font-semibold mt-1">{period.label}</p>
                  <p className="text-[10px] mt-1 opacity-70">{period.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Founding */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Founding: Col. Meriwether Lewis Clark Jr.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kentucky Derby owes its existence to one man&apos;s vision.
            Colonel Meriwether Lewis Clark Jr., the grandson of legendary
            explorer William Clark of the Lewis and Clark expedition, traveled to
            England and France in the early 1870s and became fascinated by the
            European racing scene. He attended the Epsom Derby in England and the
            Grand Prix de Paris in France, and returned to Louisville determined
            to create an American race of equal prestige.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clark raised funds by selling membership subscriptions to the newly
            formed Louisville Jockey Club. He secured land from his uncles, John
            and Henry Churchill, on the outskirts of Louisville. On that parcel
            of land, Clark built a racetrack that would eventually become the
            world-famous Churchill Downs. His ambition was nothing less than to
            establish the premier horse racing event in the Western Hemisphere.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Clark modeled his vision on the great European classics, designing a
            race specifically for three-year-old Thoroughbreds at a distance of
            one and a half miles (later shortened to one and a quarter miles in
            1896). He wanted a race that would test both speed and stamina,
            producing champions worthy of the title.
          </p>
        </section>

        {/* The First Race */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            May 17, 1875: The First Kentucky Derby
          </h2>
          <div className="bg-derby-cream border-l-4 border-derby-gold p-6 rounded-r-lg mb-4">
            <p className="text-derby-green font-semibold text-lg">
              An estimated 10,000 spectators gathered at the Louisville Jockey
              Club on May 17, 1875, to witness the inaugural running of the
              Kentucky Derby.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            A field of fifteen horses lined up for that first race, and it was
            the chestnut colt Aristides who crossed the finish line first. What
            makes that first Derby particularly significant in hindsight is the
            African American heritage woven into its story. Aristides was trained
            by Ansel Williamson, one of the most respected horsemen of his era,
            and ridden by jockey Oliver Lewis. Both men were African American, a
            fact that speaks to the central role Black horsemen played in the
            early days of American horse racing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the first two decades of the Kentucky Derby, African American
            jockeys dominated the race. Fifteen of the first twenty-eight Derby
            winners were ridden by Black jockeys, including Isaac Murphy, who won
            three Derbies and is widely regarded as one of the greatest riders in
            the history of American racing. The contributions of these pioneering
            horsemen remain an essential chapter in the Derby&apos;s story.
          </p>
        </section>

        {/* Evolution Through the Decades */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Evolution Through the Decades
          </h2>

          <h3 className="font-serif text-2xl font-semibold text-derby-green mb-3">
            The Early Years (1875-1902)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Derby grew steadily in its early years, becoming a fixture of the
            Louisville social calendar. However, by the turn of the century, the
            race and Churchill Downs itself were in financial trouble. Attendance
            had declined, the facilities were deteriorating, and the future of
            the Derby was uncertain. Without intervention, America&apos;s
            greatest race might have faded into history.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-derby-green mb-3">
            Col. Matt Winn Saves the Derby (1902)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Enter Colonel Matt Winn, a Louisville businessman who had attended
            the very first Derby as a teenager. In 1902, Winn organized a
            syndicate of local businessmen to purchase Churchill Downs and rescue
            the race from potential extinction. Winn&apos;s promotional genius
            transformed the Derby from a regional race into a national
            sensation. He courted newspaper coverage, attracted wealthy horse
            owners, and introduced the pari-mutuel betting system that replaced
            bookmakers. Under Winn&apos;s stewardship, which lasted until his
            death in 1949, the Kentucky Derby became the single most important
            race in American Thoroughbred racing.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-derby-green mb-3">
            The Twin Spires and a Growing Legacy (1895-1950)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In 1895, architect Joseph Baldez designed a new grandstand for
            Churchill Downs, crowned by the now-iconic Twin Spires. Those
            slender, elegant spires have become the universal symbol of the
            Kentucky Derby and one of the most recognizable landmarks in all of
            sports. The first filly to win the Derby, Regret, accomplished the
            feat in 1915, and the race continued to produce legendary champions
            throughout the early twentieth century.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-derby-green mb-3">
            The Television Era and Beyond (1952-Present)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 1952 Kentucky Derby marked another milestone when CBS aired the
            first national television broadcast of the race, introducing the
            spectacle to millions of Americans in their living rooms. Television
            transformed the Derby from a Southern sporting tradition into a truly
            national event. Viewership grew steadily, and by the 1970s, the
            Derby had become appointment television for sports fans across the
            country.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The purse grew alongside the audience. The Derby first offered a
            $100,000 purse in 1946, and by 2024, the total purse had reached $5
            million. Prize money continues to climb, reflecting the race&apos;s
            enormous commercial value and its central place in the Thoroughbred
            industry.
          </p>
        </section>

        {/* The Triple Crown Connection */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Triple Crown Connection
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kentucky Derby gained even greater significance when it became
            the first leg of the American Triple Crown, established in 1919. The
            Triple Crown challenges a single horse to win three grueling races in
            just five weeks: the Kentucky Derby, the Preakness Stakes, and the
            Belmont Stakes. Only thirteen horses have accomplished this feat, and
            every Triple Crown campaign begins beneath the Twin Spires on the
            first Saturday in May. The Derby serves as both the gateway and the
            foundation of racing&apos;s ultimate achievement.
          </p>
        </section>

        {/* Key Milestones */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Key Milestones in Derby History
          </h2>
          <ul className="space-y-3">
            {[
              {
                year: "1875",
                event:
                  "First Kentucky Derby won by Aristides before 10,000 fans",
              },
              {
                year: "1895",
                event:
                  "The iconic Twin Spires added to Churchill Downs grandstand",
              },
              {
                year: "1902",
                event:
                  "Col. Matt Winn saves Churchill Downs from financial ruin",
              },
              {
                year: "1915",
                event: "Regret becomes the first filly to win the Kentucky Derby",
              },
              {
                year: "1919",
                event:
                  "Sir Barton wins first Triple Crown, establishing the Derby as leg one",
              },
              {
                year: "1952",
                event: "First national television broadcast of the Derby on CBS",
              },
              {
                year: "1973",
                event:
                  "Secretariat sets the all-time record of 1:59.4, still unbroken",
              },
              {
                year: "2015",
                event:
                  "American Pharoah ends 37-year Triple Crown drought",
              },
              {
                year: "2025",
                event: "The 151st running of the Kentucky Derby",
              },
            ].map((milestone) => (
              <li
                key={milestone.year}
                className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <span className="font-serif text-lg font-bold text-derby-gold whitespace-nowrap">
                  {milestone.year}
                </span>
                <span className="text-gray-700">{milestone.event}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* The Modern Era */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Modern Era
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Today&apos;s Kentucky Derby is a multi-day festival attracting over
            150,000 spectators to Churchill Downs and millions more watching on
            television and streaming platforms worldwide. Derby Week features
            concerts, culinary events, fashion showcases, and the Kentucky Oaks
            race on the Friday before the Derby. The event generates hundreds of
            millions of dollars in economic activity for the city of Louisville
            and the state of Kentucky.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Churchill Downs has undergone significant renovations in recent
            years, including expanded luxury suites, a modernized paddock, and
            enhanced fan amenities, while preserving the historic character and
            traditions that make the Derby unique. The track has embraced
            technology with advanced timing systems, high-definition video
            boards, and digital wagering platforms, all while maintaining the
            timeless rituals that connect today&apos;s fans to those who stood in
            the same grandstand more than a century ago.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Safety reforms have also become a major focus. Enhanced veterinary
            protocols, track surface improvements, and stricter medication rules
            have been implemented to protect both horses and riders. The modern
            Derby balances its storied traditions with a commitment to the
            welfare of the athletes — both equine and human — who make the race
            possible.
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
                When did the Kentucky Derby start?
              </h3>
              <p className="text-gray-700">
                The first Kentucky Derby was held on May 17, 1875, at the
                Louisville Jockey Club track, which is now known as Churchill
                Downs. It was founded by Col. Meriwether Lewis Clark Jr., who
                was inspired by the prestigious European races he had witnessed
                during his travels abroad.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Who won the first Kentucky Derby?
              </h3>
              <p className="text-gray-700">
                The chestnut colt Aristides won the inaugural Kentucky Derby in
                1875. He was trained by Ansel Williamson and ridden by jockey
                Oliver Lewis. Both the trainer and jockey were African American,
                reflecting the significant role Black horsemen played in the
                early history of American horse racing.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Is the Kentucky Derby the longest continuously held sporting
                event in America?
              </h3>
              <p className="text-gray-700">
                Yes, the Kentucky Derby is the longest continuously held sporting
                event in the United States. It has been run every year since 1875
                without interruption, spanning more than 151 consecutive
                runnings — through world wars, economic depressions, and a global
                pandemic.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Why is the Kentucky Derby called the Run for the Roses?
              </h3>
              <p className="text-gray-700">
                The winning horse receives a garland of more than 500 red roses,
                a tradition dating back to 1883. The phrase &quot;Run for the
                Roses&quot; became an enduring nickname for the race and is
                celebrated in the post-race Winner&apos;s Circle ceremony where
                the garland is draped over the champion.
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Explore More Derby History
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Churchill Downs",
                href: "/history/churchill-downs",
                desc: "The legendary racetrack and its iconic Twin Spires",
              },
              {
                title: "Past Winners",
                href: "/history/past-winners",
                desc: "Complete winners list, records, and statistics",
              },
              {
                title: "Triple Crown",
                href: "/history/triple-crown",
                desc: "The ultimate achievement in horse racing",
              },
              {
                title: "Derby Traditions",
                href: "/history/traditions",
                desc: "Roses, mint juleps, hats, and more",
              },
              {
                title: "Famous Moments",
                href: "/history/famous-moments",
                desc: "The most legendary races in Derby history",
              },
            ].map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                  {page.title}
                </h3>
                <p className="text-gray-600 text-sm">{page.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
