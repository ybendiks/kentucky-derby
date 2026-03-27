import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Run for the Roses | Origin, Meaning & the Garland of Roses Tradition",
  description:
    "The meaning and history behind the Kentucky Derby's iconic nickname, the Run for the Roses. Learn about the garland of 554 roses, how it's made, and the tradition's origins dating to 1883.",
  keywords: [
    "run for the roses meaning",
    "garland of roses kentucky derby",
    "derby roses tradition",
    "kentucky derby blanket of roses",
    "why roses kentucky derby",
    "554 roses derby",
  ],
  openGraph: {
    title: "Run for the Roses | The Kentucky Derby Tradition",
    description:
      "The story behind the Kentucky Derby's garland of roses: 554 red roses, a tradition dating to 1883, and the meaning of the Run for the Roses.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "Why is the Kentucky Derby called the Run for the Roses?",
    answer:
      "The Kentucky Derby is called the Run for the Roses because the winning horse is draped in a garland of 554 red roses immediately after crossing the finish line. The tradition of presenting roses to the winner began in 1883, and the phrase Run for the Roses became the race's unofficial subtitle. The garland has been a continuous tradition since 1932 and is one of the most recognizable symbols in all of horse racing.",
  },
  {
    question: "How many roses are in the Kentucky Derby garland?",
    answer:
      "The Kentucky Derby garland contains 554 red roses. The garland is approximately 122 inches long, 22 inches wide, and weighs roughly 40 pounds. It takes a team of floral workers approximately seven hours to construct the garland the day before the race. The roses are provided by Kroger, which has been the official rose provider for the Kentucky Derby since the early 2000s.",
  },
  {
    question: "When did the garland of roses tradition start?",
    answer:
      "Roses have been associated with the Kentucky Derby since 1883, when New York socialite E. Berry Wall presented roses to ladies at a post-Derby party, and the tradition of giving roses to the winning horse followed shortly after. The garland in its current form has been presented to the winning horse continuously since 1932. The green satin banner across the garland reads 'Kentucky Derby' with the winning horse's name added after the race.",
  },
];

export default function RunForTheRosesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Culture", href: "/culture" },
          { name: "Run for the Roses", href: "/culture/run-for-the-roses" },
        ]}
      />
      <ArticleJsonLd
        title="Run for the Roses: Origin and Meaning of the Kentucky Derby Tradition"
        description="The history and meaning behind the Kentucky Derby's garland of roses and the iconic nickname Run for the Roses."
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
              <Link href="/culture" className="hover:text-derby-green transition-colors">
                Culture
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-derby-green font-medium">Run for the Roses</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            Run for the Roses: The Kentucky Derby&rsquo;s Most Iconic Tradition
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Every first Saturday in May, the winning horse at Churchill Downs is
            draped in a magnificent garland of 554 red roses. This tradition,
            dating back to 1883, gives the Kentucky Derby its most beloved
            nickname and its most enduring visual symbol.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="bg-derby-cream border border-derby-gold/30 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Roses</p>
              <p className="text-lg font-semibold text-derby-green">554</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Tradition Since</p>
              <p className="text-lg font-semibold text-derby-green">1883</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Build Time</p>
              <p className="text-lg font-semibold text-derby-green">7 Hours</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Weight</p>
              <p className="text-lg font-semibold text-derby-green">~40 lbs</p>
            </div>
          </div>
        </div>

        {/* Origin of the Name */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Origin of &ldquo;Run for the Roses&rdquo;
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The association between roses and the Kentucky Derby traces back
              to 1883, when New York socialite E. Berry Wall reportedly
              presented roses to ladies at a post-Derby party at Churchill
              Downs. The gesture captured the imagination of the racing world,
              and soon roses became intertwined with the event itself.
            </p>
            <p>
              Colonel Meriwether Lewis Clark Jr., the founder of the Kentucky
              Derby, adopted the rose as the official flower of the race. By the
              late 1800s, roses were being presented to the winning horse, and
              the phrase &ldquo;Run for the Roses&rdquo; entered the American
              sporting vocabulary. The rose symbolized beauty, tradition, and the
              pinnacle of achievement in thoroughbred racing.
            </p>
            <p>
              The nickname stuck because it perfectly captured what the Derby
              represents: the ultimate prize in horse racing, wrapped in a
              garland that is as beautiful as the race is thrilling. No other
              sporting event in America is so closely identified with a single
              flower.
            </p>
          </div>
        </section>

        {/* Visual: Anatomy of the Garland */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Anatomy of the Derby Garland
          </h2>
          <div className="bg-white border-2 border-derby-green/20 rounded-2xl p-6">
            {/* Garland visual representation */}
            <div className="relative max-w-lg mx-auto">
              {/* Horse silhouette shape - simplified garland */}
              <div className="bg-gradient-to-b from-red-600 via-red-500 to-red-700 rounded-3xl mx-auto p-6 text-center text-white relative overflow-hidden" style={{ maxWidth: "400px" }}>
                {/* Roses texture overlay */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
                <div className="relative">
                  {/* Crown rose */}
                  <div className="w-10 h-10 bg-red-800 border-2 border-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <p className="text-xs text-red-100 mb-4">The &ldquo;Crown&rdquo; Rose</p>

                  {/* Green satin banner */}
                  <div className="bg-green-800 border-2 border-green-600 rounded-lg px-4 py-2 mx-auto mb-4 max-w-xs">
                    <p className="text-xs tracking-widest uppercase font-bold text-green-200">Kentucky Derby</p>
                    <p className="text-[10px] text-green-300 mt-0.5">Winner&rsquo;s name added post-race</p>
                  </div>

                  {/* Rose count */}
                  <div className="grid grid-cols-3 gap-3 text-center mt-4">
                    <div>
                      <p className="text-2xl font-bold">554</p>
                      <p className="text-[10px] text-red-200">Red Roses</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">122&quot;</p>
                      <p className="text-[10px] text-red-200">Length</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">40</p>
                      <p className="text-[10px] text-red-200">Pounds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 text-center text-sm">
              <div className="bg-red-50 rounded-lg p-3">
                <p className="font-semibold text-red-700">Hand-placed</p>
                <p className="text-xs text-gray-500">Each rose wired individually</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="font-semibold text-green-700">Satin Banner</p>
                <p className="text-xs text-gray-500">Green with gold lettering</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3">
                <p className="font-semibold text-yellow-700">7 Hours</p>
                <p className="text-xs text-gray-500">To construct the garland</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Garland Tradition */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Garland of Roses: 554 Roses and a Century of Tradition
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The garland of roses in its modern form has been presented to the
              Kentucky Derby winner continuously since 1932. It has grown in
              size and significance over the decades, becoming one of the most
              recognizable symbols in sports.
            </p>
            <p>
              The garland is constructed from 554 red roses, a number that has
              remained consistent in recent years. The roses are specifically
              selected for their deep red color, long stems, and full blooms.
              The garland measures approximately 122 inches long (just over 10
              feet) and 22 inches wide, forming a cape-like draping that covers
              the horse&rsquo;s withers and shoulders.
            </p>
            <p>
              A green satin banner runs across the center of the garland,
              embroidered with the words &ldquo;Kentucky Derby&rdquo; and the
              year. The winning horse&rsquo;s name is added to the banner after
              the race, and the garland is placed over the horse in the
              winner&rsquo;s circle during the trophy presentation. A single
              red rose is placed at the top pointing upward, known as the
              &ldquo;crown,&rdquo; representing the heart and spirit of the
              event.
            </p>
          </div>
        </section>

        {/* How It's Made */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How the Garland Is Made
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Kroger, the Cincinnati-based grocery chain with deep roots in
              Kentucky, has served as the official rose provider for the
              Kentucky Derby since the early 2000s. The roses are sourced from
              select farms and delivered to Louisville in the days before the
              race.
            </p>
            <p>
              On the Friday before the Derby, a team of skilled floral designers
              begins the meticulous process of constructing the garland. Each of
              the 554 roses is individually placed and secured by hand. The
              process takes approximately seven hours and is carried out in a
              climate-controlled environment to keep the roses fresh.
            </p>
            <p>
              The floral team works from a specific pattern, layering roses in
              overlapping rows to create the lush, full appearance. The stems
              are cut short and each rose is wired and taped before being
              attached to the satin backing. The finished garland is kept
              refrigerated overnight and brought to Churchill Downs on Derby
              morning, where it remains chilled until the winner&rsquo;s circle
              presentation.
            </p>
          </div>
        </section>

        {/* Significance */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Rose&rsquo;s Significance in Horse Racing
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The rose holds unique significance in horse racing culture beyond
              the Kentucky Derby. The flower represents the intersection of
              natural beauty and competitive achievement, themes that run
              deep in the sport. The garland of roses is the most prestigious
              floral presentation in all of horse racing, and receiving it
              marks the pinnacle of a thoroughbred&rsquo;s career.
            </p>
            <p>
              Each Triple Crown race has its own floral tradition. The
              Preakness Stakes at Pimlico drapes the winner in a blanket of
              black-eyed Susans (Maryland&rsquo;s state flower), while the
              Belmont Stakes presents a blanket of white carnations. But it is
              the rose garland of the Kentucky Derby that captures the public
              imagination most powerfully, in part because the Derby is the
              first and most watched leg of the Triple Crown.
            </p>
          </div>
        </section>

        {/* In Popular Culture */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            &ldquo;Run for the Roses&rdquo; in Popular Culture
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The phrase has transcended horse racing to become part of
              American popular culture. Musicians, filmmakers, and writers have
              used the imagery of running for the roses to evoke themes of
              ambition, glory, and the pursuit of a dream. The phrase appears in
              songs, book titles, and documentary narratives about the
              Kentucky Derby.
            </p>
            <p>
              In everyday language, &ldquo;run for the roses&rdquo; has become
              a metaphor for any high-stakes competition or the pursuit of a
              prestigious goal. Political races, business competitions, and
              academic achievements are all described using the rose imagery
              that originated at Churchill Downs.
            </p>
            <p>
              The visual of the winning horse wearing the garland has become
              one of the most photographed moments in American sports. Those
              images appear on magazine covers, in museum exhibits, and in
              the marketing materials of everything from bourbon brands to
              luxury fashion, reinforcing the deep cultural connection between
              the Derby, the roses, and American tradition.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About the Run for the Roses
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
            Explore Kentucky Derby Culture
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/history/traditions"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Traditions
              </p>
              <p className="text-sm text-gray-500 mt-1">
                All the traditions that make the Kentucky Derby unique.
              </p>
            </Link>
            <Link
              href="/history/famous-moments"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Famous Derby Moments
              </p>
              <p className="text-sm text-gray-500 mt-1">
                The most unforgettable moments in Kentucky Derby history.
              </p>
            </Link>
            <Link
              href="/culture/derby-party"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Party Planning
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Host the ultimate Derby watch party with our complete guide.
              </p>
            </Link>
            <Link
              href="/history/triple-crown"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Triple Crown
              </p>
              <p className="text-sm text-gray-500 mt-1">
                The Derby, Preakness, and Belmont: horse racing&rsquo;s ultimate prize.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
