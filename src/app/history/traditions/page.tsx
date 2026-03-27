import { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import Link from "next/link";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title:
    "Kentucky Derby Traditions | Roses, Mint Juleps, Hats & My Old Kentucky Home",
  description:
    "Discover every Kentucky Derby tradition: the Garland of Roses, mint juleps, singing My Old Kentucky Home, Derby fashion and hats, the Infield party, and the Winner's Circle ceremony.",
  keywords:
    "kentucky derby traditions, run for the roses meaning, derby mint julep, my old kentucky home derby, derby hats, derby fashion",
};

export default function TraditionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "History", href: "/history" },
          { name: "Traditions", href: "/history/traditions" },
        ]}
      />
      <ArticleJsonLd
        title="Kentucky Derby Traditions: Roses, Mint Juleps, Hats & More"
        description="A comprehensive guide to every Kentucky Derby tradition, from the Garland of Roses and mint juleps to singing My Old Kentucky Home and the famous Derby fashion."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd
        items={[
          {
            question: "Why is the Kentucky Derby called the Run for the Roses?",
            answer:
              "The Kentucky Derby is called the 'Run for the Roses' because the winning horse receives a garland made of more than 554 red roses. The rose tradition dates back to 1883 when roses were first associated with the race. The garland in its current form has been presented since 1932 and is handcrafted the night before the Derby.",
          },
          {
            question: "What is the official drink of the Kentucky Derby?",
            answer:
              "The mint julep has been the official drink of the Kentucky Derby since 1939. Made with bourbon, simple syrup, fresh mint, and crushed ice in a silver or pewter cup, approximately 120,000 mint juleps are served at Churchill Downs during Derby weekend.",
          },
          {
            question: "When do they sing My Old Kentucky Home at the Derby?",
            answer:
              "My Old Kentucky Home is sung as the horses parade onto the track for the post parade, just before the Kentucky Derby. The tradition is believed to have started around 1921, and the University of Louisville marching band has performed the song since 1936. It is one of the most emotional moments of Derby Day.",
          },
          {
            question: "Why do people wear hats to the Kentucky Derby?",
            answer:
              "Wearing elaborate hats to the Kentucky Derby is a tradition that dates back to the race's founding in 1875, when attending the Derby was a high-society event and hats were standard formal attire. Over the decades, Derby hats evolved from a social convention into a beloved fashion statement, with attendees now competing to wear the most creative and eye-catching designs.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4">
            Kentucky Derby Traditions: The Heart of the Run for the Roses
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The Kentucky Derby is more than a horse race. It is a celebration
            wrapped in traditions that have been passed down for generations —
            from the haunting strains of &quot;My Old Kentucky Home&quot; to the
            blanket of red roses draped over the winner, from the cold tang of a
            mint julep to the spectacle of elaborate hats. These traditions make
            the Derby one of the most unique sporting events on earth.
          </p>
        </header>

        {/* My Old Kentucky Home */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            &quot;My Old Kentucky Home&quot;
          </h2>
          <div className="bg-derby-cream border-l-4 border-derby-gold p-6 rounded-r-lg mb-4">
            <p className="text-derby-green font-semibold text-lg">
              The singing of &quot;My Old Kentucky Home&quot; as the horses
              enter the track is the single most emotional moment of Derby Day,
              drawing tears from even the most seasoned racegoers.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The tradition of singing the Stephen Foster ballad at the Kentucky
            Derby is believed to have begun around 1921. Since 1936, the
            University of Louisville marching band has performed the song live
            at Churchill Downs as the Derby horses parade from the paddock to
            the starting gate. The entire crowd of more than 150,000 joins in,
            creating a communal moment that transcends sport.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For many attendees, this is the moment that defines their Derby
            experience. The combination of live music, the sight of the
            Thoroughbreds striding onto the track, and the realization that a
            century and a half of history is about to add another chapter makes
            it one of the most powerful traditions in American sports. Whether
            you are in the grandstand or watching from the infield, the sound of
            that song marks the official beginning of Derby time.
          </p>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1548094967-e25a127d1f6d?w=800&q=75"
          alt="Vibrant red roses in full bloom"
          caption="Red roses are the enduring symbol of the Kentucky Derby, with over 554 used to craft the winner's garland each year."
          aspectRatio="landscape"
          priority
        />

        {/* Garland of Roses */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Garland of Roses — &quot;Run for the Roses&quot;
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The association between roses and the Kentucky Derby dates back to
            1883, when New York socialite E. Berry Wall presented roses to the
            ladies at a post-Derby party, and the flower became linked to the
            event. By 1896, a rose garland was being presented to the winning
            horse, and the tradition was formalized in its current form in 1932.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Today, the garland is crafted from more than 554 red roses, weighs
            approximately 40 pounds, and requires over seven hours of painstaking
            handwork the night before the race. The garland is made by the same
            Louisville florist each year, using a pattern that includes a crown
            of roses at the center and the number of the running sewn in. A
            single rose at the top, pointing upward, is known as the &quot;
            crown&quot; rose.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The phrase &quot;Run for the Roses&quot; became the Derby&apos;s
            most enduring nickname, immortalized in song and synonymous with
            the race itself. When the garland is draped over the winning
            horse&apos;s withers in the Winner&apos;s Circle, it represents the
            culmination of a dream that every owner, trainer, and jockey in
            Thoroughbred racing shares.
          </p>
        </section>

        {/* Mint Julep */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Mint Julep
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The mint julep was named the official drink of the Kentucky Derby
            in 1939, though it had been a fixture at Churchill Downs for decades
            before that. Made with Kentucky bourbon, fresh mint, simple syrup,
            and crushed ice, the julep is traditionally served in a silver or
            pewter cup that frosts over as the ice melts — a tactile pleasure on
            a warm May afternoon.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbers are staggering: approximately 120,000 mint juleps are
            served at Churchill Downs over the course of Derby weekend. That
            requires roughly 60,000 pounds of ice, 10,000 bottles of bourbon,
            and 1,000 pounds of fresh mint. In recent years, premium juleps
            featuring top-shelf bourbons and served in commemorative cups have
            been offered at prices ranging into the thousands of dollars,
            with proceeds benefiting charitable causes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For those who want to recreate the experience at home, the classic
            recipe is simple but requires attention to technique. The mint
            should be gently muddled — not crushed — to release its oils without
            turning bitter. For more on perfecting your julep, visit our{" "}
            <Link
              href="/culture/mint-julep"
              className="text-derby-green underline hover:text-derby-gold transition-colors"
            >
              mint julep guide
            </Link>
            .
          </p>
        </section>

        {/* Derby Trophy */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Derby Trophy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kentucky Derby gold trophy was first presented in 1924 for the
            50th running of the race. Crafted of 14-karat gold and adorned with
            a horse and rider finial, the trophy has become one of the most
            coveted prizes in all of sports. It stands approximately 22 inches
            tall and is valued at more than $200,000. The winning owner receives
            the trophy permanently, making it a prized possession that has found
            its way into private collections and museum displays around the
            world.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In addition to the gold trophy, the winning jockey receives a
            replica trophy, and various silver trophies and commemorative items
            are presented to the trainer and breeder. The trophy presentation
            ceremony, conducted in the Winner&apos;s Circle immediately after
            the race, is broadcast worldwide and represents the pinnacle
            moment of Derby Day.
          </p>
        </section>

        {/* Fashion and Hats */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Derby Fashion &amp; Hats
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The tradition of wearing elaborate hats and formal attire to the
            Kentucky Derby dates back to the race&apos;s founding in 1875, when
            attending the Derby was a high-society affair and proper dress was
            expected. In the nineteenth century, hats were a standard element
            of formal dress for both men and women, and the Derby was the
            premier social event of the Louisville season.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over the decades, Derby fashion evolved from a social obligation
            into a beloved form of self-expression. Today, women (and
            increasingly men) compete to wear the most creative, colorful, and
            eye-catching hats and fascinators. Designs range from elegant
            wide-brimmed classics to outlandish sculptural creations featuring
            flowers, feathers, miniature horses, and everything in between. The
            hat has become as much a symbol of the Derby as the roses and the
            juleps.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Derby fashion is not limited to the grandstand. Even infield
            attendees have adopted the hat tradition, often with a more playful
            and irreverent approach. Whether your style is Southern elegance or
            creative whimsy, the Derby is the one day of the year where no hat
            is too big and no outfit is too bold. For styling tips, see our{" "}
            <Link
              href="/attend/what-to-wear"
              className="text-derby-green underline hover:text-derby-gold transition-colors"
            >
              what to wear guide
            </Link>
            .
          </p>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1593319943263-642eda64963d?w=800&q=75"
          alt="Close-up portrait of a thoroughbred horse with bridle"
          caption="The thoroughbred athletes at the heart of every Kentucky Derby tradition."
          aspectRatio="landscape"
        />

        {/* The Infield */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Infield: The Party Within the Party
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While the grandstand offers the classic Derby experience, the
            infield is where the party truly comes alive. Located inside the
            oval of the racetrack, the infield hosts tens of thousands of fans
            who come for the atmosphere, the music, the food, and the social
            scene as much as the racing. The infield has its own stages,
            concessions, and entertainment areas, making it a self-contained
            festival within the larger event.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The infield experience has evolved significantly in recent years.
            Churchill Downs now offers premium infield areas with better sight
            lines, upgraded amenities, and reserved seating. General admission
            infield tickets remain the most affordable way to attend the
            Kentucky Derby, making the event accessible to fans of all budgets.
            For a detailed breakdown of the infield experience, visit our{" "}
            <Link
              href="/attend/infield"
              className="text-derby-green underline hover:text-derby-gold transition-colors"
            >
              infield guide
            </Link>
            .
          </p>
        </section>

        {/* Bugle Call and Riders Up */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Bugle Call &amp; &quot;Riders Up!&quot;
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before each race at Churchill Downs, a bugler sounds the
            traditional &quot;Call to the Post,&quot; signaling that the horses
            are about to leave the paddock and head to the starting gate. On
            Derby Day, this bugle call takes on heightened significance, marking
            the transition from anticipation to action.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The command &quot;Riders Up!&quot; is given by the paddock judge,
            directing the jockeys to mount their horses. It is the final
            instruction before the horses leave the paddock, and on Derby Day,
            it sends a ripple of excitement through the crowd. The jockeys, clad
            in their owners&apos; silks, are lifted into the saddle, and within
            moments, the post parade begins and &quot;My Old Kentucky
            Home&quot; fills the air.
          </p>
        </section>

        {/* Winner's Circle Ceremony */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Winner&apos;s Circle Ceremony
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            After the race, the winning horse is led to the Winner&apos;s
            Circle at Churchill Downs for one of the most iconic ceremonies in
            sports. The garland of roses is draped over the horse, the gold
            trophy is presented to the owner, and the connections — owner,
            trainer, jockey, and their families — gather for photographs that
            will be preserved in the racing record forever.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Governor of Kentucky traditionally presents the trophy, and the
            ceremony is broadcast live to a worldwide television audience. For
            the winning jockey, the tradition of standing in the stirrups and
            accepting the congratulations of the crowd is a moment of pure
            triumph. The Winner&apos;s Circle ceremony brings together all of
            the Derby&apos;s traditions — the roses, the trophy, the silks, the
            emotion — into a single, unforgettable scene.
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
                Why is the Kentucky Derby called the Run for the Roses?
              </h3>
              <p className="text-gray-700">
                The Derby is called the &quot;Run for the Roses&quot; because
                the winning horse receives a garland of more than 554 red
                roses. The rose tradition dates back to 1883, and the garland
                in its current form has been presented since 1932. It is
                handcrafted the night before the race and weighs approximately
                40 pounds.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                What is the official drink of the Kentucky Derby?
              </h3>
              <p className="text-gray-700">
                The mint julep has been the official drink of the Kentucky Derby
                since 1939. Made with Kentucky bourbon, fresh mint, simple
                syrup, and crushed ice, approximately 120,000 mint juleps are
                served at Churchill Downs over Derby weekend.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                When do they sing My Old Kentucky Home at the Derby?
              </h3>
              <p className="text-gray-700">
                &quot;My Old Kentucky Home&quot; is sung as the horses parade
                onto the track for the post parade, just before the Kentucky
                Derby race. The University of Louisville marching band has
                performed the song live since 1936, and the entire crowd joins
                in. It is one of the most emotional and memorable moments of
                Derby Day.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Why do people wear hats to the Kentucky Derby?
              </h3>
              <p className="text-gray-700">
                Wearing hats to the Derby dates back to 1875, when it was a
                high-society event and hats were standard formal attire. Over
                the decades, Derby hats evolved from social convention into a
                beloved fashion tradition. Today, attendees wear everything from
                elegant wide-brimmed classics to playful, creative designs.
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
              href="/culture/mint-julep"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Mint Julep Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Perfect your julep with our recipe and tips
              </p>
            </Link>
            <Link
              href="/attend/what-to-wear"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                What to Wear
              </h3>
              <p className="text-gray-600 text-sm">
                Derby fashion guide for every section
              </p>
            </Link>
            <Link
              href="/history/churchill-downs"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Churchill Downs
              </h3>
              <p className="text-gray-600 text-sm">
                The legendary home of the Kentucky Derby
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
                The greatest races and most dramatic finishes
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
