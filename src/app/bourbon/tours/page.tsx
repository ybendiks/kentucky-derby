import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Bourbon Tours in Louisville | Guided & Self-Guided Options",
  description:
    "The best bourbon tours in Louisville for Derby visitors. Guided bus tours, private tastings, self-guided distillery walks, half-day and full-day options, costs, and transportation tips.",
  keywords: [
    "bourbon tours louisville",
    "mint julep tours",
    "bourbon excursions louisville",
    "self-guided bourbon tour",
    "guided distillery tour louisville",
    "kentucky bourbon trail tour",
  ],
  openGraph: {
    title: "Bourbon Tours in Louisville | Guided & Self-Guided Options",
    description:
      "Plan the perfect bourbon tour in Louisville: guided bus tours, self-guided walks, half-day and full-day options with costs and tips.",
    type: "article",
    locale: "en_US",
  },
};

const faqItems = [
  {
    question: "How much does a bourbon tour in Louisville cost?",
    answer:
      "Bourbon tour costs in Louisville vary widely based on the type of experience. Self-guided walking tours cost nothing beyond individual distillery admission fees, which range from 15 to 30 dollars each. Guided group bus tours typically run 80 to 150 dollars per person and include transportation, multiple distillery visits, and tastings. Private and premium tours can cost 200 to 500 dollars per person for exclusive access, extended tastings, and behind-the-scenes experiences.",
  },
  {
    question: "How long is a bourbon tour in Louisville?",
    answer:
      "A half-day guided bourbon tour in Louisville typically lasts three to four hours and includes visits to two or three distilleries. A full-day tour runs six to eight hours and can cover four or more distilleries with a lunch stop. Self-guided tours are flexible, but plan 60 to 90 minutes per distillery visit including the tour and tasting. Most visitors find two to three distilleries in a day is the right pace.",
  },
  {
    question: "Do you need a designated driver for bourbon tours?",
    answer:
      "If you plan to taste bourbon at multiple distilleries, you absolutely need a plan for safe transportation. Guided bus tours handle this for you, which is one of their biggest advantages. For self-guided tours, use rideshare services, designate a non-drinking driver in your group, or stick to the downtown Whiskey Row distilleries that are all within walking distance of each other and your hotel.",
  },
];

export default function BourbonToursPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Bourbon", href: "/bourbon" },
          { name: "Tours", href: "/bourbon/tours" },
        ]}
      />
      <ArticleJsonLd
        title="Bourbon Tours in Louisville"
        description="Complete guide to guided and self-guided bourbon tours in Louisville, Kentucky."
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
              <Link href="/bourbon" className="hover:text-derby-green transition-colors">
                Bourbon
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-derby-green font-medium">Tours</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-derby-green mb-4 leading-tight">
            Bourbon Tours in Louisville
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Louisville is the gateway to Kentucky&rsquo;s bourbon country, with
            more than a dozen distilleries within city limits and dozens more
            within an hour&rsquo;s drive. Whether you prefer a guided bus
            experience or a self-paced walking tour, there is an option that
            fits your schedule and budget.
          </p>
        </header>

        {/* Kentucky Bourbon Trail Map */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Kentucky Bourbon Country Map
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Kentucky&rsquo;s bourbon distilleries are spread across the central
            part of the state, from Louisville east through Bardstown (the
            &ldquo;Bourbon Capital of the World&rdquo;) and south to Lawrenceburg
            and Versailles. The map below shows the region.
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400000!2d-85.5!3d38.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690b1ab35bd511%3A0xd4e12ae9de1de886!2sKentucky%20Bourbon%20Trail!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Kentucky Bourbon Trail distillery region"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-3 text-sm">
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">Louisville</p>
              <p className="text-gray-600">6+ distilleries in the city</p>
            </div>
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">Bardstown</p>
              <p className="text-gray-600">40 miles south · 5+ distilleries</p>
            </div>
            <div className="bg-derby-cream rounded-lg p-3 text-center">
              <p className="font-semibold text-derby-green">Versailles / Lawrenceburg</p>
              <p className="text-gray-600">60 miles east · Woodford &amp; Wild Turkey</p>
            </div>
          </div>
        </section>

        {/* Guided Tours */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Guided Bourbon Tours
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Guided tours are the most popular option for visitors who want
              a comprehensive bourbon experience without worrying about
              navigation, designated drivers, or booking individual distillery
              tours. Several companies operate regular tours from Louisville.
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Mint Julep Experiences
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mint Julep Experiences is one of Louisville&rsquo;s most
                established bourbon tour operators, offering a range of
                group and private tours. Their offerings include Urban Bourbon
                tours focused on downtown Louisville distilleries, as well as
                day trips to Bardstown and the Kentucky Bourbon Trail. Tours
                depart from downtown Louisville hotels and include
                transportation in climate-controlled vehicles, distillery
                admissions, and tastings.
              </p>
            </div>
            <div className="border-l-4 border-derby-gold pl-6">
              <h3 className="font-serif text-xl font-bold text-derby-green mb-2">
                Louisville Bourbon Excursions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Several local tour companies offer bourbon-focused excursions
                ranging from small-group van tours to luxury private
                experiences. These operators often have relationships with
                distilleries that provide behind-the-scenes access not
                available to regular visitors. Private tours can be customized
                to focus on specific interests like rye whiskey, craft
                distillers, or the history of bourbon.
              </p>
            </div>
          </div>
        </section>

        {/* Self-Guided vs Guided */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Self-Guided vs. Guided: Which Is Right for You?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="bg-white border-2 border-derby-green rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-derby-green px-6 py-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  Guided Tours
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Transportation handled for you, no driving after tastings",
                    "Expert guides share insider knowledge and bourbon history",
                    "Distillery admissions and tastings typically included",
                    "Set schedule keeps you on track and maximizes your time",
                    "Great for groups, couples, and first-time bourbon visitors",
                    "Cost: $80 to $200+ per person depending on duration and exclusivity",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white border-2 border-derby-green rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-derby-green px-6 py-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  Self-Guided Tours
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Complete flexibility to visit distilleries at your own pace",
                    "Choose only the distilleries that interest you most",
                    "No group to slow you down or rush you through",
                    "Lower cost since you only pay individual admission fees",
                    "Requires planning for transportation if tasting at multiple stops",
                    "Cost: $15 to $30 per distillery for tour and tasting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-derby-green rounded-full mt-2 mr-3 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Half-Day vs Full-Day */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Half-Day vs. Full-Day Tours
          </h2>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <div className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Half-Day Tours (3-4 Hours)
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Ideal for visitors with limited time or those who want to save
                part of the day for other Derby week activities. A typical
                half-day tour covers two or three downtown distilleries, leaving
                you free for an afternoon at Churchill Downs or an evening on
                the Urban Bourbon Trail. Most half-day tours depart in the
                morning or early afternoon.
              </p>
            </div>
            <div className="bg-derby-cream border border-derby-gold/20 rounded-xl p-5">
              <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                Full-Day Tours (6-8 Hours)
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                The deep dive for bourbon enthusiasts. Full-day tours typically
                visit four or more distilleries and include a lunch stop at a
                bourbon-themed restaurant. Some full-day tours venture beyond
                Louisville to Bardstown, the Bourbon Capital of the World,
                where you can visit Maker&rsquo;s Mark, Heaven Hill, and other
                iconic distilleries along the Kentucky Bourbon Trail.
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            What to Expect on a Bourbon Tour
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              A standard distillery tour in Louisville follows a similar format
              regardless of which distillery you visit. You will walk through
              the production facility learning about the mashing, fermenting,
              distilling, and aging process. Most tours last 45 to 75 minutes
              and conclude with a guided tasting of two to four expressions.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
            <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
              Practical Tips for Your Tour
            </h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Wear comfortable, closed-toe shoes. Distillery floors can be wet and uneven.",
                "Eat a good meal before your first tasting. Bourbon on an empty stomach intensifies quickly.",
                "Bring water and stay hydrated between stops, especially on warm spring days.",
                "Ask questions. Distillery guides are passionate and knowledgeable about their craft.",
                "Bring a small cooler or insulated bag if you plan to purchase bottles at distillery gift shops.",
                "Take notes or photos to remember which bourbons you liked best.",
              ].map((tip, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-derby-gold rounded-full mt-2 mr-3 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Transportation */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Transportation and Safety
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Safety is the top priority when visiting multiple distilleries.
              Each tasting typically involves sampling two to four pours of
              bourbon, and after two or three distillery visits, those tastings
              add up. Plan your transportation before your first stop.
            </p>
            <p>
              For downtown Louisville distilleries along Whiskey Row, walking is
              the easiest option. All six major Whiskey Row distilleries are
              within a 15-minute walk of each other. For distilleries outside
              downtown or trips to Bardstown, a guided tour with included
              transportation or a designated driver is essential.
            </p>
            <p>
              Rideshare services like Uber and Lyft operate throughout
              Louisville and provide a convenient option for self-guided tours.
              During Derby week, rideshare pricing may surge, so budget
              accordingly or consider booking a private car service.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
            Frequently Asked Questions About Bourbon Tours
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
            Explore More Bourbon in Louisville
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/bourbon/louisville-distilleries"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Louisville Distilleries
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Detailed profiles of every major distillery in Louisville.
              </p>
            </Link>
            <Link
              href="/bourbon/whiskey-row"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Whiskey Row
              </p>
              <p className="text-sm text-gray-500 mt-1">
                The historic Main Street district where bourbon history lives.
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
                The passport program connecting Louisville&rsquo;s best bourbon bars.
              </p>
            </Link>
            <Link
              href="/louisville/getting-around"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <p className="font-serif font-bold text-derby-green">
                Getting Around Louisville
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Transportation options for navigating the city during Derby week.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
