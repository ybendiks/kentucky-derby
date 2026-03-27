import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Kentucky Derby Food & Recipes | Hot Brown, Derby Pie, Burgoo & More",
  description:
    "Classic Kentucky Derby recipes: the Hot Brown with history, Derby Pie (chocolate bourbon pecan pie), benedictine spread, bourbon balls, burgoo, beer cheese, pimento cheese, and cheese straws.",
  keywords: [
    "kentucky derby food",
    "hot brown recipe",
    "derby pie recipe",
    "benedictine spread recipe",
    "bourbon balls recipe",
    "burgoo recipe",
    "beer cheese recipe",
    "kentucky derby recipes",
  ],
  openGraph: {
    title: "Kentucky Derby Food & Recipes | Classic Southern Dishes",
    description:
      "Authentic Kentucky Derby recipes including the Hot Brown, Derby Pie, benedictine spread, bourbon balls, burgoo, and more Southern classics.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "What is the most famous food at the Kentucky Derby?",
    answer:
      "The Hot Brown is Louisville's most famous dish and a staple of Kentucky Derby dining. Created at the Brown Hotel in Louisville in 1926, the Hot Brown is an open-faced turkey sandwich covered in Mornay sauce, topped with bacon and tomato, and broiled until bubbly. Derby Pie, a chocolate bourbon pecan pie, is the most famous Derby dessert and is trademarked by Kern's Kitchen in Louisville.",
  },
  {
    question: "What is Derby Pie?",
    answer:
      "Derby Pie is a chocolate and walnut or pecan pie made with bourbon, created by the Melton family at the Melrose Inn in Prospect, Kentucky, in the 1950s. The name Derby Pie is a registered trademark of Kern's Kitchen, so many restaurants and cookbooks refer to similar recipes as chocolate bourbon pecan pie or chocolate nut pie. The key ingredients are semi-sweet chocolate chips, pecans or walnuts, bourbon, butter, eggs, and sugar in a flaky pie crust.",
  },
  {
    question: "What is benedictine spread?",
    answer:
      "Benedictine is a cream cheese and cucumber spread created by Louisville caterer Jennie Benedict in the early 1900s. The spread combines cream cheese, grated cucumber (with the juice squeezed out), grated onion, a touch of mayonnaise, and fresh dill. It is traditionally tinted a light green color. Benedictine is served on cucumber rounds, toast points, or as a sandwich filling and is a fixture at Kentucky Derby parties and Louisville social events.",
  },
];

export default function FoodRecipesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Culture", href: "/culture" },
          { name: "Food & Recipes", href: "/culture/food-recipes" },
        ]}
      />
      <ArticleJsonLd
        title="Kentucky Derby Food and Recipes"
        description="Classic Kentucky Derby recipes including the Hot Brown, Derby Pie, benedictine spread, bourbon balls, burgoo, and more."
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
            <li className="text-derby-green font-medium">Food &amp; Recipes</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-white py-20 sm:py-28 relative overflow-hidden -mx-4 -mt-12 mb-12">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
            alt="Classic Kentucky Derby foods and recipes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Kentucky Derby Food &amp; Recipes
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              Derby Day is as much about the food as it is about the horses.
              From Louisville&rsquo;s legendary Hot Brown to chocolate bourbon
              pecan pie, these are the classic dishes that define Kentucky Derby
              cuisine, whether you are dining at Churchill Downs or hosting a
              watch party at home.
            </p>
          </div>
        </section>

        {/* The Hot Brown */}
        <section className="mb-12">
          <div className="bg-white border-2 border-derby-green rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-derby-green px-6 py-5">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                The Hot Brown
              </h2>
              <p className="text-derby-gold mt-1">Louisville&rsquo;s signature dish since 1926</p>
            </div>
            <div className="p-6 md:p-8">
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg mb-6">
                <p>
                  The Hot Brown was created by chef Fred Schmidt at the Brown
                  Hotel in downtown Louisville in 1926. The hotel hosted a
                  nightly dinner dance that drew over 1,200 guests, and Schmidt
                  needed a hearty late-night dish to satisfy the crowd. His
                  creation, an open-faced turkey sandwich draped in rich Mornay
                  sauce, topped with bacon and tomato, and broiled until golden,
                  became an instant classic.
                </p>
                <p>
                  Nearly a century later, the Hot Brown remains Louisville&rsquo;s
                  most iconic dish. The Brown Hotel still serves the original
                  recipe, and variations appear on menus throughout the city and
                  at Churchill Downs during Derby week.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
                  Key Ingredients
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                  {[
                    "Thick-sliced roasted turkey breast",
                    "Mornay sauce (b\u00e9chamel with Parmesan)",
                    "Crispy bacon strips",
                    "Sliced Roma tomato",
                    "Texas toast or thick white bread",
                    "Paprika for garnish",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-1.5 mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=75"
          alt="Southern comfort food dishes on a table"
          caption="Kentucky Derby cuisine draws from generations of Southern cooking tradition."
          aspectRatio="wide"
          priority
        />

        {/* Derby Pie */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Derby Pie (Chocolate Bourbon Pecan Pie)
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Derby Pie is a trademarked name belonging to Kern&rsquo;s Kitchen
              in Louisville, but the style of pie, a rich filling of chocolate
              chips, pecans, bourbon, butter, and eggs in a flaky crust, has
              become synonymous with Kentucky Derby celebrations everywhere.
              Many bakeries and home cooks make their own version under names
              like chocolate bourbon pecan pie or thoroughbred pie.
            </p>
            <p>
              The pie strikes a balance between a pecan pie and a brownie, with
              the bourbon adding warmth and complexity. Serve it at room
              temperature or slightly warm, optionally with a dollop of whipped
              cream or a scoop of vanilla ice cream.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
            <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
              Key Ingredients
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
              {[
                "One unbaked 9-inch pie crust",
                "1 cup semi-sweet chocolate chips",
                "1 cup chopped pecans",
                "2 tablespoons bourbon",
                "1/2 cup melted butter",
                "1 cup sugar, 2 eggs, 1 tsp vanilla",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-1.5 mr-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* More Recipes Grid */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            More Classic Derby Dishes
          </h2>
          <div className="space-y-8">
            {[
              {
                name: "Benedictine Spread",
                history: "Created by Louisville caterer Jennie Benedict in the early 1900s, benedictine is a cool, refreshing spread that has been a fixture at Kentucky social events for over a century.",
                description: "Blend softened cream cheese with finely grated cucumber (juice squeezed out), a small amount of grated onion, a touch of mayonnaise, salt, and fresh dill. Some recipes add a drop of green food coloring for the traditional tint. Serve on cucumber rounds, toast points, or tea sandwiches.",
              },
              {
                name: "Bourbon Balls",
                history: "A Kentucky confection dating back generations, bourbon balls are a no-bake candy traditionally made during the holiday season and Derby celebrations.",
                description: "Combine finely crushed vanilla wafers with chopped pecans, powdered sugar, corn syrup, and a generous pour of bourbon. Roll into one-inch balls, let them set in the refrigerator for several hours, then dip in melted semi-sweet chocolate. The bourbon flavor mellows as they age, so make them two to three days ahead for the best taste.",
              },
              {
                name: "Burgoo",
                history: "Burgoo is a thick, hearty stew rooted in Kentucky tradition, originally cooked in massive iron kettles at community gatherings and horse racing events.",
                description: "A proper burgoo combines multiple meats such as pork, beef, chicken, and sometimes lamb with a variety of vegetables including corn, lima beans, potatoes, tomatoes, and okra. The stew cooks low and slow for hours until thick and richly flavored. Each cook has their own recipe, and debates about the best version are a Kentucky pastime. Serve in bowls with cornbread on the side.",
              },
              {
                name: "Beer Cheese",
                history: "Beer cheese originated in Clark County, Kentucky, in the 1940s and has since spread across the state as a beloved appetizer at bars, restaurants, and parties.",
                description: "Combine sharp cheddar cheese (grated), cream cheese, beer (a lager or pale ale works best), garlic, dry mustard, Worcestershire sauce, and cayenne pepper in a food processor and blend until smooth. The dip should be thick enough to hold on a pretzel but smooth enough to spread. Serve at room temperature with pretzel bites, crackers, or raw vegetables.",
              },
              {
                name: "Pimento Cheese",
                history: "While pimento cheese is a Southern staple far beyond Kentucky, it has a special place on Derby Day menus and is served at Churchill Downs in sandwiches and as a spread.",
                description: "Combine grated sharp cheddar, diced pimentos (drained), mayonnaise, a touch of cream cheese for smoothness, and a pinch of cayenne pepper. Mix by hand for a chunky texture or use a food processor for a smoother spread. Serve with crackers, celery sticks, or on slider buns. Make it the day before your party for the flavors to meld.",
              },
              {
                name: "Cheese Straws",
                history: "Cheese straws are a classic Southern appetizer found at every self-respecting cocktail party and Derby celebration in the South.",
                description: "Mix grated sharp cheddar with softened butter, flour, cayenne pepper, and a pinch of salt. Pipe the dough through a cookie press fitted with a star tip, or roll and cut into thin strips. Bake at 375 degrees until golden and crisp, about 12 to 15 minutes. Cheese straws keep well in an airtight container for several days, making them ideal for advance preparation.",
              },
            ].map((recipe, i) => (
              <div key={i} className="border-l-4 border-derby-gold pl-6">
                <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                  {recipe.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 italic">
                  {recipe.history}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {recipe.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=75"
          alt="Beautifully arranged food spread on a dining table"
          caption="A well-prepared Derby Day spread brings friends and family together around classic Kentucky flavors."
          aspectRatio="landscape"
        />

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Derby Food
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
              href="/culture/derby-party"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Derby Party Planning
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Complete guide to hosting a Kentucky Derby watch party.
              </p>
            </Link>
            <Link
              href="/culture/mint-julep"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Mint Julep Recipe
              </p>
              <p className="text-sm text-gray-500 mt-1">
                The classic Kentucky Derby cocktail with step-by-step instructions.
              </p>
            </Link>
            <Link
              href="/bourbon/urban-bourbon-trail"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Urban Bourbon Trail
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Louisville&rsquo;s bourbon bars and restaurant passport program.
              </p>
            </Link>
            <Link
              href="/louisville/restaurants"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Louisville Restaurants
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Where to eat in Louisville during Derby week.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
