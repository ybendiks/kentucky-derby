import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import HowToJsonLd from "@/components/HowToJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "How to Throw a Kentucky Derby Party | Complete Planning Guide",
  description:
    "Plan the ultimate Kentucky Derby watch party: decorations, food menu with Hot Brown sliders and Derby Pie, mint julep bar, betting pools, best hat contest, dress code, and party activities.",
  keywords: [
    "kentucky derby party ideas",
    "derby watch party",
    "derby party decorations",
    "derby party food",
    "derby party betting pool",
    "derby hat contest",
    "how to host derby party",
  ],
  openGraph: {
    title: "How to Throw a Kentucky Derby Party | Planning Guide",
    description:
      "Everything you need for the ultimate Derby watch party: decorations, food, drinks, betting pools, hat contests, and dress code tips.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What time should a Kentucky Derby party start?",
    answer:
      "Plan for your Kentucky Derby party to start two to three hours before the main race, which typically runs around 6:50 PM Eastern. A 4:00 PM start gives guests time to arrive, grab drinks, fill out betting pool sheets, and watch the undercard races. The televised coverage on NBC usually begins in the early afternoon, so bourbon enthusiasts and racing fans may want to start even earlier.",
  },
  {
    question: "What food do you serve at a Kentucky Derby party?",
    answer:
      "Classic Kentucky Derby party food includes Hot Brown sliders or open-faced sandwiches, Derby Pie (chocolate bourbon pecan pie), pimento cheese with crackers, benedictine spread on cucumber rounds, bourbon balls, beer cheese with pretzel bites, and burgoo (Kentucky stew). For the main course, fried chicken and country ham biscuits are traditional and crowd-pleasing options that are easy to serve buffet-style.",
  },
  {
    question: "How do you set up a Derby party betting pool?",
    answer:
      "The simplest Derby party betting pool assigns each guest a random horse for a flat entry fee, typically five or 10 dollars. Write each horse's name on a slip of paper, fold them up, and have guests draw from a hat. The guest whose horse wins takes the pot, or split the pool among the top three finishers. For a more involved option, create a scoring sheet where guests pick their top three and earn points for correct predictions.",
  },
];

const howToSteps = [
  {
    name: "Set the date and send invitations",
    text: "The Kentucky Derby is always the first Saturday in May. Send invitations two to three weeks in advance with a note about the dress code. Include the party start time and mention that the main race is typically around 6:50 PM Eastern.",
  },
  {
    name: "Set up Derby-themed decorations",
    text: "Decorate with red roses, horse-themed accents, and Derby colors (red, green, and gold). Use a checkered tablecloth, display horseshoes, and create a centerpiece with roses in a julep cup. Hang a banner or garland with pennants in Derby colors.",
  },
  {
    name: "Prepare the mint julep bar and drinks",
    text: "Set up a self-serve mint julep station with pre-mixed bourbon and simple syrup, crushed ice, fresh mint sprigs, and julep cups or glasses. Also offer bourbon cocktails, beer, wine, and non-alcoholic options like sweet tea and virgin juleps.",
  },
  {
    name: "Prepare the food menu",
    text: "Prepare Hot Brown sliders, Derby Pie, pimento cheese, benedictine spread, bourbon balls, and other Kentucky classics. Set up a buffet-style spread so guests can graze throughout the afternoon. Make as much as possible the day before.",
  },
  {
    name: "Organize the betting pool and activities",
    text: "Set up a betting pool with printed sheets listing all horses and entry fees. Plan a best hat contest with a small prize. Prepare Kentucky Derby trivia questions for commercial breaks. Have scorecards ready for guests to track their picks.",
  },
  {
    name: "Tune in and enjoy the races",
    text: "Turn on NBC coverage, make sure the TV is visible from the main gathering area, and gather everyone together for the main race. Call the post parade, trumpet call, and race together for the full communal Derby experience.",
  },
];

export default function DerbyPartyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Culture", href: "/culture" },
          { name: "Derby Party", href: "/culture/derby-party" },
        ]}
      />
      <ArticleJsonLd
        title="How to Throw a Kentucky Derby Party"
        description="Complete planning guide for hosting the ultimate Kentucky Derby watch party."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <HowToJsonLd
        name="How to Host a Kentucky Derby Watch Party"
        description="Step-by-step guide to planning and hosting the perfect Kentucky Derby party with decorations, food, drinks, and activities."
        totalTime="PT4H"
        steps={howToSteps}
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
            <li className="text-derby-green font-medium">Derby Party</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-white py-20 sm:py-28 relative overflow-hidden -mx-4 -mt-12 mb-12">
          <Image
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80"
            alt="Kentucky Derby party celebration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              How to Throw a Kentucky Derby Watch Party
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              You do not need to be at Churchill Downs to experience the
              excitement of the Kentucky Derby. A well-planned watch party brings
              the tradition, the fashion, the food, and the thrill of the race
              right to your living room. Here is everything you need.
            </p>
          </div>
        </section>

        {/* Decorations */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Decorations: Setting the Derby Scene
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The Kentucky Derby is a visual spectacle, and your party should
              reflect that energy. Focus on three themes: roses, horses, and
              classic Derby colors of red, green, and gold.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {[
              {
                title: "Roses Everywhere",
                text: "Red roses are the signature of the Derby. Place fresh roses in vases as centerpieces, scatter rose petals on the buffet table, and use rose-patterned napkins. Artificial roses work just as well and are more budget-friendly for large parties.",
              },
              {
                title: "Horse-Themed Accents",
                text: "Horse figurines, jockey silks prints, horseshoe decorations, and equestrian artwork add authentic racing atmosphere. Place small toy horses along the buffet or use them as place card holders.",
              },
              {
                title: "Derby Colors",
                text: "Red, green, and gold are the classic Derby palette. Use these colors for tablecloths, napkins, streamers, and balloons. A checkered-flag runner on the buffet table adds a racetrack touch.",
              },
              {
                title: "Photo Backdrop",
                text: "Set up a photo area with a frame of roses, oversized hats, and props like binoculars and betting slips. Guests love documenting their Derby outfits, and a dedicated spot keeps the photos festive.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1526094633853-031707a44819?w=800&q=75"
          alt="Festive party table with food and drinks"
          caption="A well-set Derby party table with Southern fare and mint juleps sets the scene for race day"
          aspectRatio="landscape"
        />

        {/* Food Menu */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Derby Party Food Menu
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Kentucky Derby food is Southern comfort at its finest. The menu
              should be buffet-friendly, allowing guests to graze throughout the
              afternoon. Here are the essentials.
            </p>
          </div>
          <div className="space-y-6 mt-6">
            {[
              {
                name: "Hot Brown Sliders",
                description: "A miniature version of Louisville's famous open-faced sandwich. Layer turkey, Mornay sauce, bacon, and tomato on slider buns or toast points. These can be assembled ahead of time and broiled just before serving.",
              },
              {
                name: "Derby Pie",
                description: "The chocolate bourbon pecan pie that defines Derby dessert. Serve in small slices or make mini versions in a muffin tin for easy grabbing. The bourbon flavor intensifies when served at room temperature.",
              },
              {
                name: "Pimento Cheese",
                description: "Sharp cheddar, pimentos, mayonnaise, and a pinch of cayenne. Serve with crackers, celery sticks, or as a spread on slider buns. Make it the day before for the best flavor.",
              },
              {
                name: "Benedictine Spread",
                description: "A Louisville original: cream cheese blended with cucumber, onion, and a touch of dill. Serve on cucumber rounds or toast points. Light and refreshing alongside the richer items on the menu.",
              },
              {
                name: "Bourbon Balls",
                description: "No-bake confections made with bourbon, pecans, powdered sugar, and chocolate. These are easy to make in large batches and can be prepared several days ahead. A sweet end to any Derby buffet.",
              },
              {
                name: "Beer Cheese and Burgoo",
                description: "Beer cheese with pretzel bites is a Kentucky party staple. For heartier appetites, set out a slow cooker of burgoo, a thick Kentucky stew made with multiple meats and vegetables.",
              },
            ].map((food, i) => (
              <div key={i} className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  {food.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {food.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed text-lg mt-6">
            For detailed recipes, see our{" "}
            <Link
              href="/culture/food-recipes"
              className="text-derby-green font-medium underline hover:text-derby-gold transition-colors"
            >
              Derby Foods &amp; Recipes
            </Link>{" "}
            guide.
          </p>
        </section>

        {/* Drinks */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Drinks: The Mint Julep Bar and Beyond
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The mint julep is the non-negotiable centerpiece of any Derby
              party drink menu. Set up a self-serve station so you are not
              playing bartender all afternoon. Pre-mix the bourbon and simple
              syrup in a pitcher, set out a bowl of crushed ice with a scoop,
              and arrange fresh mint sprigs in a glass of water.
            </p>
            <p>
              Beyond juleps, offer a selection of bourbon cocktails like an
              old fashioned or a whiskey sour. Stock beer and wine for guests
              who prefer other options, and always have a non-alcoholic
              alternative like sweet tea or a virgin julep made with ginger ale.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            For the complete mint julep recipe, see our{" "}
            <Link
              href="/culture/mint-julep"
              className="text-derby-green font-medium underline hover:text-derby-gold transition-colors"
            >
              Mint Julep Recipe Guide
            </Link>
            .
          </p>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1565657739331-ca2241b47e95?w=800&q=75"
          alt="Horse racing fans watching from the grandstand on a sunny day"
          caption="Derby watch parties bring the excitement of Churchill Downs right to your living room"
          aspectRatio="wide"
        />

        {/* Activities */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Party Activities: Betting Pools, Hat Contest, and Trivia
          </h2>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            {[
              {
                title: "Betting Pool",
                text: "Set a flat entry fee (five or 10 dollars). Write each horse on a slip of paper and have guests draw at random. The guest whose horse wins takes the pot, or split among the top three. For more involvement, let guests pick their own top three and score points.",
              },
              {
                title: "Best Hat Contest",
                text: "Encourage guests to wear elaborate hats or fascinators. Set up a voting station and let everyone cast a ballot during the undercard races. Award a prize for the most creative, most elegant, and funniest hat. This is often the highlight of the party.",
              },
              {
                title: "Derby Trivia",
                text: "Prepare 10 to 15 trivia questions about Kentucky Derby history, Louisville, and bourbon. Run the quiz during commercial breaks or between races. Questions about famous Derby winners, record times, and traditions always spark conversation.",
              },
            ].map((activity, i) => (
              <div
                key={i}
                className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {activity.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dress Code */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Dress Code for Your Guests
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Part of the fun of a Derby party is dressing up. Include a dress
              code suggestion on your invitation. The traditional Derby look is
              spring cocktail attire: sundresses and hats for women, blazers or
              sport coats with colorful ties for men. Encourage bold patterns,
              bright colors, and statement hats.
            </p>
            <p>
              Not everyone will go all out, and that is perfectly fine. The dress
              code should be inviting, not intimidating. Mention that hats are
              encouraged but not required, and that the overall vibe is festive
              and fun. Some guests will show up in full Derby regalia while
              others will wear a nice pair of jeans with a sport coat, and both
              should feel welcome.
            </p>
          </div>
        </section>

        {/* Step by Step Planning */}
        <section className="mb-12">
          <div className="bg-white border-2 border-derby-green rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-derby-green px-6 py-5">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                Step-by-Step Party Planning Checklist
              </h2>
            </div>
            <div className="p-6 md:p-8">
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
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Derby Parties
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
            More Derby Culture
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/culture/mint-julep"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Mint Julep Recipe
              </p>
              <p className="text-sm text-gray-500 mt-1">
                The classic Derby cocktail with step-by-step instructions and pro tips.
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
                Hot browns, Derby pie, bourbon balls, and all the classic recipes.
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
                What to wear and how to dress for Derby Day or your watch party.
              </p>
            </Link>
            <Link
              href="/culture/run-for-the-roses"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Run for the Roses
              </p>
              <p className="text-sm text-gray-500 mt-1">
                The meaning and tradition behind the Derby&rsquo;s garland of roses.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
