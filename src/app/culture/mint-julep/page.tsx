import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import HowToJsonLd from "@/components/HowToJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Mint Julep Recipe | How to Make the Classic Kentucky Derby Drink",
  description:
    "The classic mint julep recipe, the official drink of the Kentucky Derby since 1939. Step-by-step instructions, pro tips, bourbon recommendations, and variations including the famous $1,000 julep.",
  keywords: [
    "mint julep recipe",
    "kentucky derby drink",
    "mint julep",
    "how to make a mint julep",
    "classic mint julep recipe",
    "bourbon cocktail",
    "derby day cocktail",
    "mint julep ingredients",
  ],
  openGraph: {
    title: "Mint Julep Recipe | The Official Kentucky Derby Cocktail",
    description:
      "Master the classic mint julep with our step-by-step recipe. The official drink of the Kentucky Derby since 1939 — over 120,000 served each Derby weekend at Churchill Downs.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What is a mint julep made of?",
    answer:
      "A classic mint julep is made with just four ingredients: bourbon whiskey, fresh spearmint leaves, simple syrup (or granulated sugar), and crushed ice. The drink is traditionally served in a silver or pewter julep cup, which frosts beautifully when filled with crushed ice.",
  },
  {
    question: "Why is the mint julep the official drink of the Kentucky Derby?",
    answer:
      "The mint julep became the official drink of the Kentucky Derby in 1939 when Churchill Downs began promoting it as the signature cocktail of the event. However, juleps had been associated with horse racing and Southern hospitality for over a century before that. The refreshing, ice-cold cocktail is perfectly suited to the warm spring weather of early May in Louisville.",
  },
  {
    question: "What is the best bourbon for a mint julep?",
    answer:
      "The best bourbon for a mint julep is a mid-range, 80 to 100 proof Kentucky straight bourbon. Popular choices include Woodford Reserve (the official bourbon of the Kentucky Derby), Maker's Mark, Buffalo Trace, Four Roses, and Wild Turkey 101. Avoid overly expensive single-barrel bourbons as the mint and sugar complement rather than showcase the whiskey.",
  },
  {
    question: "How many mint juleps are served at the Kentucky Derby?",
    answer:
      "Churchill Downs serves approximately 120,000 mint juleps over Kentucky Derby weekend, using roughly 1,000 pounds of fresh mint, 60,000 pounds of crushed ice, and 10,000 bottles of bourbon. On Derby Day alone, the track serves around 80,000 juleps.",
  },
];

const howToSteps = [
  {
    name: "Make the simple syrup",
    text: "Combine equal parts sugar and water (1 cup each) in a saucepan over medium heat. Stir until the sugar fully dissolves. Remove from heat and let cool completely. Store in the refrigerator for up to two weeks.",
  },
  {
    name: "Add mint and simple syrup to the cup",
    text: "Place 8 to 10 fresh spearmint leaves in the bottom of a julep cup or rocks glass. Add 1/2 ounce (1 tablespoon) of simple syrup over the mint leaves.",
  },
  {
    name: "Gently muddle the mint",
    text: "Using a muddler or the back of a wooden spoon, gently press the mint leaves against the bottom of the cup 5 to 6 times. You want to bruise the leaves to release their aromatic oils, not shred or tear them. Over-muddling creates a bitter taste.",
  },
  {
    name: "Add the bourbon",
    text: "Pour 2 to 2.5 ounces of Kentucky straight bourbon over the muddled mint and syrup. Stir briefly to combine.",
  },
  {
    name: "Pack with crushed ice",
    text: "Fill the cup halfway with finely crushed ice and stir for about 10 seconds. Then pack the cup with more crushed ice, mounding it above the rim of the glass. The ice should be tightly packed.",
  },
  {
    name: "Garnish and serve",
    text: "Slap a fresh sprig of mint between your palms to release its aroma and tuck it into the top of the crushed ice right next to a short straw. Add a light dusting of powdered sugar on top if desired. Serve immediately.",
  },
];

export default function MintJulepPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Culture", href: "/culture" },
          { name: "Mint Julep", href: "/culture/mint-julep" },
        ]}
      />
      <HowToJsonLd
        name="How to Make a Classic Mint Julep"
        description="Step-by-step instructions for making the perfect mint julep, the official cocktail of the Kentucky Derby."
        totalTime="PT10M"
        steps={howToSteps}
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="text-white py-16 sm:py-20 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1920&q=80"
          alt="Mint julep cocktail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-derby-gold transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/culture" className="hover:text-derby-gold transition-colors">
                  Culture
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-derby-gold">Mint Julep</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-gold mb-4 leading-tight">
            Mint Julep Recipe: How to Make the Classic Kentucky Derby Drink
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
            The mint julep has been the official cocktail of the Kentucky Derby
            since 1939. Each year, Churchill Downs serves over 120,000 of these
            iconic bourbon cocktails over Derby weekend. Here is everything you
            need to know to make the perfect mint julep at home.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* Quick Summary Box */}
        <div className="bg-derby-cream border border-derby-gold/30 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Prep Time</p>
              <p className="text-lg font-semibold text-derby-green">5 minutes</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Total Time</p>
              <p className="text-lg font-semibold text-derby-green">10 minutes</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Servings</p>
              <p className="text-lg font-semibold text-derby-green">1 cocktail</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Difficulty</p>
              <p className="text-lg font-semibold text-derby-green">Easy</p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The History of the Mint Julep and the Kentucky Derby
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The mint julep predates the Kentucky Derby by nearly a century. The
              word &ldquo;julep&rdquo; derives from the Persian <em>gul&#257;b</em>,
              meaning rosewater, and variations of the drink appeared in the
              American South as early as the late 1700s. By the early 1800s,
              Virginia senator Henry Clay was reportedly introducing the bourbon
              version of the cocktail to Washington, D.C., while Kentucky farmers
              were already sipping juleps on warm afternoons.
            </p>
            <p>
              When the Kentucky Derby began at Churchill Downs in 1875, mint
              juleps were already a fixture of Southern social gatherings and
              horse racing events. The cocktail was a natural fit for the spring
              spectacle in Louisville. However, it was not until 1939 that
              Churchill Downs officially adopted the mint julep as the signature
              drink of the Kentucky Derby, cementing its place in American
              cocktail history.
            </p>
            <p>
              Today, the numbers tell the story of the julep&rsquo;s enduring
              popularity. Over a typical Derby weekend, Churchill Downs uses
              roughly 1,000 pounds of fresh mint, 60,000 pounds of crushed ice,
              and 10,000 bottles of Old Forester bourbon to produce the iconic
              cocktails served in souvenir glasses that fans collect year after
              year.
            </p>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=75"
          alt="A refreshing mint julep cocktail served in a traditional silver cup with crushed ice and fresh mint garnish"
          caption="The classic mint julep — bourbon, fresh mint, simple syrup, and crushed ice served in a silver julep cup."
          aspectRatio="landscape"
          priority
        />

        {/* Recipe Card */}
        <section className="mb-12" id="recipe">
          <div className="bg-white border-2 border-derby-green rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-derby-green px-6 py-5">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                Classic Mint Julep Recipe
              </h2>
              <p className="text-derby-gold mt-1">
                The official cocktail of the Kentucky Derby
              </p>
            </div>

            <div className="p-6 md:p-8">
              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-4">
                  Ingredients
                </h3>
                <ul className="space-y-2">
                  {[
                    "2 to 2.5 oz Kentucky straight bourbon whiskey",
                    "1/2 oz simple syrup (or 1 teaspoon granulated sugar)",
                    "8 to 10 fresh spearmint leaves, plus a sprig for garnish",
                    "Finely crushed ice",
                    "Powdered sugar for dusting (optional)",
                  ].map((ingredient, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Equipment */}
              <div className="mb-8">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-4">
                  Equipment
                </h3>
                <ul className="space-y-2">
                  {[
                    "Silver or pewter julep cup (or a rocks glass)",
                    "Muddler or wooden spoon",
                    "Lewis bag and mallet for crushing ice (or use a blender)",
                    "Short cocktail straw",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-derby-green rounded-full mt-2 mr-3 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step by step */}
              <div>
                <h3 className="font-serif text-xl font-bold text-derby-green mb-6">
                  Step-by-Step Instructions
                </h3>
                <ol className="space-y-6">
                  {howToSteps.map((step, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex items-center justify-center w-8 h-8 bg-derby-green text-white text-sm font-bold rounded-full shrink-0 mr-4 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-derby-green mb-1">
                          {step.name}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=75"
          alt="Bartender preparing a cocktail with fresh ingredients and crushed ice"
          caption="Building the perfect julep requires gentle muddling, quality bourbon, and plenty of finely crushed ice."
          aspectRatio="wide"
        />

        {/* Simple Syrup Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            How to Make Simple Syrup for Mint Juleps
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Simple syrup dissolves evenly into cold drinks, making it far
              superior to granulated sugar for cocktails. Making it takes just a
              few minutes and the syrup keeps for up to two weeks in the
              refrigerator.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
                Basic Simple Syrup (1:1 ratio)
              </h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Combine 1 cup granulated sugar and 1 cup water in a small saucepan.</li>
                <li>Heat over medium, stirring constantly, until the sugar fully dissolves.</li>
                <li>Remove from heat and let cool to room temperature.</li>
                <li>Transfer to a glass jar or bottle and refrigerate.</li>
              </ol>
              <p className="mt-4 text-sm text-gray-500">
                <strong>Mint-infused variation:</strong> After removing from
                heat, add a handful of fresh mint leaves to the hot syrup, let
                steep for 30 minutes, then strain. This adds another layer of
                mint flavor to your julep.
              </p>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Pro Tips for the Perfect Mint Julep
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Crushed Ice Is Non-Negotiable",
                text: "A mint julep demands finely crushed ice, not cubed. The crushed ice melts slowly, chills the drink rapidly, and creates the signature frost on a metal julep cup. Use a Lewis bag and wooden mallet, or pulse ice cubes in a blender.",
              },
              {
                title: "Use a Julep Cup",
                text: "Silver or pewter julep cups are traditional for a reason. The metal conducts cold from the crushed ice, creating a beautiful frost on the outside of the cup. If you do not have a julep cup, a double old-fashioned glass works in a pinch.",
              },
              {
                title: "Fresh Mint Only",
                text: "Use fresh spearmint, never peppermint or dried mint. Spearmint has a sweeter, more delicate flavor that pairs beautifully with bourbon. Look for bright green leaves without dark spots. Gently clap the garnish sprig between your palms to release its aroma before placing it in the cup.",
              },
              {
                title: "Choose the Right Bourbon",
                text: "Pick a quality Kentucky straight bourbon between 80 and 100 proof. The bourbon should have enough character to stand up to the sweetness and mint but not be so complex that you lose its nuances in the cocktail. Save the expensive single-barrel selections for sipping neat.",
              },
              {
                title: "Muddle Gently",
                text: "The most common mistake is over-muddling. Press the mint leaves gently five or six times to bruise them and release their essential oils. Shredding or tearing the leaves releases chlorophyll and tannins that make the drink taste bitter and turn it an unappealing green color.",
              },
              {
                title: "Hold the Cup by the Rim or Base",
                text: "Once built, hold the julep cup only by the top rim or the bottom. Touching the sides with warm hands melts the frost and warms the drink. The frost on the cup is part of the experience and presentation.",
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

        {/* Variations */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Mint Julep Variations
          </h2>
          <div className="space-y-6">
            {/* Woodford Reserve */}
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Woodford Reserve Mint Julep
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As the official bourbon of the Kentucky Derby, Woodford Reserve
                has its own take on the classic. Use 2 ounces of Woodford
                Reserve bourbon, muddle the mint with a touch of simple syrup
                made from turbinado sugar for a richer flavor, and garnish with a
                generous bouquet of fresh mint. The caramel and vanilla notes of
                Woodford Reserve complement the sweetness beautifully.
              </p>
            </div>

            {/* Frozen */}
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Frozen Mint Julep
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Perfect for hot Derby Day afternoons. Blend 2 ounces of bourbon,
                1 ounce of simple syrup, 6 to 8 mint leaves, and 2 cups of ice
                in a blender until smooth and slushy. Pour into a julep cup and
                garnish with a mint sprig. This version is refreshing, easy to
                batch for large parties, and appeals to guests who prefer a
                lighter, smoother cocktail experience.
              </p>
            </div>

            {/* Non-Alcoholic */}
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Virgin Mint Julep (Non-Alcoholic)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Everyone at the party deserves a julep. Muddle the mint and
                simple syrup as usual, then add 2 ounces of strong brewed sweet
                tea or ginger ale in place of the bourbon. Some bartenders use
                non-alcoholic bourbon alternatives that have become widely
                available. Pack with crushed ice and garnish just like the
                classic. The sweet tea version is especially popular among
                designated drivers and younger guests at Derby parties.
              </p>
            </div>

            {/* Peach */}
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Peach Mint Julep
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A Southern twist that adds seasonal fruit flavor. Muddle 2 to 3
                slices of ripe peach along with the mint and simple syrup. Add
                your bourbon and crushed ice as usual. You can also add a splash
                of peach liqueur for an extra layer of flavor. Garnish with a
                mint sprig and a thin peach slice.
              </p>
            </div>
          </div>
        </section>

        {/* $1,000 Mint Julep */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The $1,000 Mint Julep at Churchill Downs
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Since 2006, Churchill Downs has offered a premium mint julep that
              costs $1,000 per cocktail. This ultra-luxury version has featured
              ingredients such as Woodford Reserve Baccarat Edition bourbon, ice
              sourced from high-mountain springs, hand-selected mint from
              specific farms, and house-made syrups infused with exotic
              ingredients. The drinks are served in gold-plated or
              specially-commissioned julep cups that the buyer keeps as a
              collector&rsquo;s piece.
            </p>
            <p>
              The tradition is more than a novelty. Proceeds from sales of the
              premium julep go to charitable organizations, having raised
              hundreds of thousands of dollars over the years for causes
              including horse welfare, retired jockey support, and community
              organizations in Louisville. The cup designs change every year,
              making them sought-after collectibles.
            </p>
          </div>
        </section>

        {/* Best Bourbons */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What Bourbon to Use for a Mint Julep
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The bourbon you choose shapes the character of your julep. You want
              a whiskey that brings warmth and flavor without being so high-proof
              or complex that it overwhelms the mint and sugar. Here are some
              well-suited options across different price points:
            </p>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-derby-green">
                  <th className="py-3 pr-4 font-serif text-derby-green">Bourbon</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Proof</th>
                  <th className="py-3 pr-4 font-serif text-derby-green">Why It Works</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Woodford Reserve</td>
                  <td className="py-3 pr-4">90.4</td>
                  <td className="py-3 pr-4">The official Derby bourbon. Rich vanilla and caramel notes pair naturally with mint.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Maker&rsquo;s Mark</td>
                  <td className="py-3 pr-4">90</td>
                  <td className="py-3 pr-4">Wheated bourbon with a soft, sweet profile that blends smoothly into a julep.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Buffalo Trace</td>
                  <td className="py-3 pr-4">90</td>
                  <td className="py-3 pr-4">Excellent value. Balanced caramel and spice that holds its own against the mint.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Four Roses Small Batch</td>
                  <td className="py-3 pr-4">90</td>
                  <td className="py-3 pr-4">Fruity and floral with a mellow spice. Adds complexity without overpowering.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Wild Turkey 101</td>
                  <td className="py-3 pr-4">101</td>
                  <td className="py-3 pr-4">Higher proof stands up well to the dilution from crushed ice. Bold and spicy.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Old Forester 86</td>
                  <td className="py-3 pr-4">86</td>
                  <td className="py-3 pr-4">Churchill Downs&rsquo; house pour. Reliable, approachable, and budget-friendly for batching.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1619616755641-5d27d6fe4244?w=800&q=75"
          alt="Mint julep cocktail alongside a bottle of Kentucky bourbon"
          caption="Choosing the right bourbon — look for a Kentucky straight bourbon between 80 and 100 proof for the ideal julep."
          aspectRatio="landscape"
        />

        {/* Derby Party Serving Tips */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Derby Party Serving Tips
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Serving mint juleps at a watch party for 10 or more guests requires
              some advance planning. Trying to muddle and build juleps to order
              while the horses are loading into the starting gate is a recipe for
              stress, not cocktails.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <span className="text-derby-gold font-bold mr-3 mt-0.5">1.</span>
                <span>
                  <strong>Batch your simple syrup in advance.</strong> Make it
                  the night before and refrigerate. A mint-infused simple syrup
                  saves a muddling step and delivers consistent flavor in every
                  glass.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-derby-gold font-bold mr-3 mt-0.5">2.</span>
                <span>
                  <strong>Pre-mix the bourbon and syrup.</strong> Combine 1 part
                  simple syrup with 4 parts bourbon in a large pitcher or bottle.
                  Refrigerate until party time. This base mixture can be poured
                  straight over crushed ice in individual cups.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-derby-gold font-bold mr-3 mt-0.5">3.</span>
                <span>
                  <strong>Prepare more ice than you think you need.</strong> Plan
                  for about one pound of crushed ice per guest. Buy bagged
                  crushed ice or crush your own using a Lewis bag the morning of
                  the party. Keep it in a cooler until ready to serve.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-derby-gold font-bold mr-3 mt-0.5">4.</span>
                <span>
                  <strong>Set up a self-serve julep station.</strong> Arrange
                  cups, the pre-mixed bourbon and syrup, a large bowl of crushed
                  ice with a scoop, fresh mint sprigs in a glass of water, and
                  short straws. Guests can build their own juleps while you enjoy
                  the races.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-derby-gold font-bold mr-3 mt-0.5">5.</span>
                <span>
                  <strong>Offer a non-alcoholic option.</strong> Keep sweet tea or
                  ginger ale on hand for guests who want a virgin julep. Set it
                  up alongside the bourbon so everyone can participate.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              For a complete party planning guide, including decorations, food
              pairings, betting pools, and dress code ideas, see our{" "}
              <Link
                href="/culture/derby-party"
                className="text-derby-green font-medium underline hover:text-derby-gold transition-colors"
              >
                Kentucky Derby Party Planning Guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Mint Juleps
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

        {/* Internal Links / Related Content */}
        <section className="bg-derby-cream border border-derby-gold/20 rounded-xl p-6 md:p-8">
          <h2 className="font-serif text-2xl font-bold text-derby-green mb-4">
            Continue Exploring Kentucky Derby Culture
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/culture/derby-party"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Party Planning Guide
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Decorations, food, games, and everything you need for the
                ultimate watch party.
              </p>
            </Link>
            <Link
              href="/culture/food-recipes"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Foods &amp; Recipes
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Hot browns, burgoo, Derby pie, and classic Southern dishes to
                pair with your juleps.
              </p>
            </Link>
            <Link
              href="/bourbon/trail-guide"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Kentucky Bourbon Trail
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Tour the distilleries that produce the bourbon in your julep.
              </p>
            </Link>
            <Link
              href="/culture/fashion"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Fashion &amp; Style
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Hats, attire, and style tips for looking the part on Derby Day.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
