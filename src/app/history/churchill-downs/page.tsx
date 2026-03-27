import { Metadata } from "next";
import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import Link from "next/link";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title:
    "Churchill Downs History | Twin Spires, Track Facts & Visitor Guide",
  description:
    "Explore the history of Churchill Downs in Louisville, KY — home of the Kentucky Derby since 1875. Learn about the iconic Twin Spires, track specifications, renovations, and how to visit.",
  keywords:
    "churchill downs history, twin spires, churchill downs louisville, churchill downs track, visiting churchill downs",
};

export default function ChurchillDownsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "History", href: "/history" },
          { name: "Churchill Downs", href: "/history/churchill-downs" },
        ]}
      />
      <ArticleJsonLd
        title="Churchill Downs: Home of the Kentucky Derby Since 1875"
        description="The complete history of Churchill Downs racetrack, including the iconic Twin Spires, track specifications, major renovations, and visitor information."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd
        items={[
          {
            question: "What are the Twin Spires at Churchill Downs?",
            answer:
              "The Twin Spires are the iconic architectural feature atop the Churchill Downs grandstand, designed by Joseph Baldez and built in 1895. They have become the universal symbol of the Kentucky Derby and are one of the most recognizable landmarks in American sports.",
          },
          {
            question: "How long is the Churchill Downs racetrack?",
            answer:
              "Churchill Downs features a one-mile dirt oval as its main track, along with a seven-furlong turf course inside the dirt track. The Kentucky Derby is run at a distance of 1.25 miles (10 furlongs) on the dirt surface.",
          },
          {
            question: "Can you visit Churchill Downs when there is no race?",
            answer:
              "Yes. Churchill Downs is home to the Kentucky Derby Museum, which is open year-round. Visitors can take guided walking tours of the historic track, explore interactive exhibits, and view the Winner's Circle area. The museum offers daily tours most days of the year.",
          },
          {
            question: "Is Churchill Downs a National Historic Landmark?",
            answer:
              "Yes, Churchill Downs was designated a National Historic Landmark in 1986, recognizing its significance as the home of the longest continuously held sporting event in America and its architectural importance.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-white py-20 sm:py-28 relative overflow-hidden -mx-4 -mt-12 mb-10">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Twin_Spires_at_Churchill_Downs.jpg/1280px-Twin_Spires_at_Churchill_Downs.jpg"
            alt="The iconic Twin Spires of Churchill Downs with a packed grandstand on Kentucky Derby Day"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Churchill Downs: Home of the Kentucky Derby
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Beneath the iconic Twin Spires of Churchill Downs, champions have
              been crowned for more than a century and a half. This legendary
              Louisville racetrack is more than a venue — it is the spiritual home
              of American horse racing and a National Historic Landmark that draws
              visitors from around the world.
            </p>
          </div>
        </section>

        {/* Founding */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Founding of Churchill Downs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Churchill Downs traces its origins to Colonel Meriwether Lewis Clark
            Jr., who leased approximately eighty acres of land from his uncles,
            John and Henry Churchill, in the early 1870s. Clark&apos;s vision
            was to build a world-class racetrack on the south side of Louisville
            that could host a race rivaling the great European classics. The
            track he constructed became home to the Louisville Jockey Club, and
            on May 17, 1875, it hosted the inaugural Kentucky Derby.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Although the facility was initially known simply as the Louisville
            Jockey Club track, the name &quot;Churchill Downs&quot; gradually
            came into popular use, honoring the family that provided the land.
            The name was officially adopted in 1937, cementing a connection
            between the Churchill family legacy and the most famous racetrack in
            the world.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In its earliest years, the racetrack was a modest facility with a
            simple wooden grandstand. Attendance at the first Derby was estimated
            at 10,000, a strong showing that validated Clark&apos;s ambitious
            vision. But the track&apos;s most recognizable feature was still two
            decades away.
          </p>
        </section>

        <ContentImage
          src="https://images.unsplash.com/photo-1565657739331-ca2241b47e95?w=800&q=75"
          alt="Thoroughbred horses racing on a dirt track with a cheering crowd in the grandstand"
          caption="Thoroughbreds thunder down the homestretch at Churchill Downs, one of the longest in North American racing."
          aspectRatio="wide"
          priority
        />

        {/* Twin Spires */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Iconic Twin Spires
          </h2>
          <div className="bg-derby-cream border-l-4 border-derby-gold p-6 rounded-r-lg mb-4">
            <p className="text-derby-green font-semibold text-lg">
              Designed by architect Joseph Baldez and completed in 1895, the
              Twin Spires have become the most recognizable symbol in all of
              horse racing.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            When Churchill Downs built a new grandstand in 1895, architect Joseph
            Baldez included a distinctive design element that would become
            legendary: two slender hexagonal spires rising from the roofline.
            Originally a purely aesthetic addition, the Twin Spires quickly
            captured the imagination of racegoers and became synonymous with the
            Kentucky Derby itself.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standing approximately 137 feet above the ground, the spires are
            visible from throughout the facility and have appeared in countless
            photographs, paintings, and broadcasts. They have been carefully
            preserved through every subsequent renovation, and Churchill Downs
            Inc. has trademarked the Twin Spires as a corporate logo. No image
            says &quot;Kentucky Derby&quot; quite like the view of those two
            elegant towers framing a field of Thoroughbreds thundering down the
            homestretch.
          </p>
        </section>

        {/* National Historic Landmark */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            National Historic Landmark
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In 1986, Churchill Downs was designated a National Historic Landmark
            by the United States Department of the Interior. This recognition
            honors the track&apos;s significance as the home of the longest
            continuously held sporting event in America and its architectural
            and cultural importance to the nation. The landmark designation
            places Churchill Downs alongside sites like Fenway Park and the
            Indianapolis Motor Speedway as one of America&apos;s most treasured
            sporting venues.
          </p>
        </section>

        {/* Track Specifications */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Track Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {[
              { label: "Main Track", value: "1-mile dirt oval" },
              { label: "Turf Course", value: "7-furlong inner turf" },
              {
                label: "Derby Distance",
                value: "1.25 miles (10 furlongs)",
              },
              { label: "Surface", value: "Dirt (main track)" },
              { label: "Stretch Length", value: "1,234.5 feet" },
              { label: "Seating Capacity", value: "60,000+" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {spec.label}
                </p>
                <p className="font-serif text-lg font-bold text-derby-green">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The main track at Churchill Downs is a one-mile dirt oval, one of
            the most classic configurations in American racing. The Kentucky
            Derby is contested at a distance of one and a quarter miles, which
            means the field starts on the backstretch chute and makes one full
            turn before navigating the final turn and the long homestretch run
            to the wire. That homestretch, measuring over 1,200 feet, is one of
            the longest in North American racing and provides thrilling finishes
            as horses make their final bids for glory.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Inside the dirt oval lies a seven-furlong turf course used for grass
            races throughout the spring and fall meets. Churchill Downs also
            features a training track separate from the main racing surface,
            allowing horses to prepare without disrupting race-day operations.
          </p>
        </section>

        {/* Renovations */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Major Renovations and Expansions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Churchill Downs has been continuously renovated and expanded while
            preserving its historic character. The most significant recent
            transformation began in 2001 with a $121 million renovation that
            added luxury suites, new grandstand sections, and modernized
            facilities throughout the property.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Additional major projects followed. A 2004 expansion added a
            Jockey Club Suites building along the first turn. In 2014, a $32
            million renovation transformed the paddock and winner&apos;s circle
            area, creating a more intimate and accessible experience for fans.
            The Turn 1 Experience, completed in recent years, added premium
            outdoor viewing areas with modern amenities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through every renovation, the Twin Spires and the historic facade of
            the original grandstand have been meticulously preserved. Churchill
            Downs has struck a remarkable balance between honoring its past and
            providing a world-class experience for modern racegoers.
          </p>
        </section>

        <ContentImage
          src="https://images.pexels.com/photos/6818590/pexels-photo-6818590.jpeg?w=800"
          alt="Jockeys and Thoroughbreds leaving the starting gates at a horse racing track"
          caption="Horses break from the starting gate — one of the most thrilling moments in horse racing."
          aspectRatio="landscape"
        />

        {/* Beyond Derby Day */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Churchill Downs Beyond Derby Day
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While the Kentucky Derby is the crown jewel, Churchill Downs hosts
            live racing throughout the spring meet (late April through early
            July) and the fall meet (late October through late November). These
            meets feature dozens of graded stakes races, attracting top
            Thoroughbreds from across North America. The Kentucky Oaks, held the
            day before the Derby, has become a major event in its own right,
            drawing over 100,000 fans annually.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Churchill Downs property also includes Derby City Gaming, a
            historical horse racing facility offering year-round gaming
            entertainment adjacent to the main racetrack. This venue has become
            a popular destination for visitors who want to experience the
            Churchill Downs atmosphere outside of the live racing season.
          </p>
        </section>

        {/* The Paddock and Winner's Circle */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            The Paddock, Winner&apos;s Circle &amp; Museum
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The paddock at Churchill Downs is where the pre-race excitement
            builds as horses are saddled and paraded before the crowd. After
            recent renovations, the paddock provides excellent viewing from
            multiple levels and features a walking ring surrounded by mature
            trees. For many fans, the paddock is the best place to study the
            horses up close before placing their wagers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Winner&apos;s Circle is where Derby history is made. After each
            race, the victorious horse and connections gather for the trophy
            presentation and photographs. On Derby Day, the Winner&apos;s Circle
            ceremony includes the draping of the garland of roses and the
            presentation of the gold Derby trophy, moments that are broadcast to
            millions worldwide.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Kentucky Derby Museum, located on the Churchill Downs grounds, is
            open year-round and features two floors of interactive exhibits
            covering the history of the Derby, the Thoroughbred industry, and the
            culture surrounding the race. The museum&apos;s signature exhibit is
            a 360-degree high-definition film experience that puts visitors in
            the middle of a Derby Day finish.
          </p>
        </section>

        {/* Visiting */}
        <section className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Visiting Churchill Downs
          </h2>
          <div className="bg-derby-cream p-6 rounded-lg mb-4">
            <h3 className="font-serif text-xl font-semibold text-derby-green mb-3">
              Plan Your Visit
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-derby-gold font-bold mt-1">&#8226;</span>
                <span>
                  <strong>Location:</strong> 700 Central Avenue, Louisville, KY
                  40208
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-derby-gold font-bold mt-1">&#8226;</span>
                <span>
                  <strong>Kentucky Derby Museum:</strong> Open year-round with
                  daily guided walking tours of the track
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-derby-gold font-bold mt-1">&#8226;</span>
                <span>
                  <strong>Live Racing:</strong> Spring meet (April-July) and
                  fall meet (October-November)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-derby-gold font-bold mt-1">&#8226;</span>
                <span>
                  <strong>Getting There:</strong> Located 5 miles south of
                  downtown Louisville, accessible via I-264 and I-65
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-derby-gold font-bold mt-1">&#8226;</span>
                <span>
                  <strong>Parking:</strong> General parking lots surround the
                  facility; premium parking and shuttle services available on
                  race days
                </span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Whether you visit on Derby Day or on a quiet Tuesday afternoon, the
            experience of standing beneath the Twin Spires and walking the
            grounds where champions have raced for over 151 years is something
            every horse racing fan should experience at least once. The Kentucky
            Derby Museum tours offer an excellent introduction to the
            track&apos;s history and are highly recommended for first-time
            visitors.
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
                What are the Twin Spires at Churchill Downs?
              </h3>
              <p className="text-gray-700">
                The Twin Spires are the iconic architectural feature atop the
                Churchill Downs grandstand. Designed by architect Joseph Baldez
                and completed in 1895, they have become the universal symbol of
                the Kentucky Derby and one of the most recognizable landmarks in
                American sports. They stand approximately 137 feet above the
                ground.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                How long is the Churchill Downs racetrack?
              </h3>
              <p className="text-gray-700">
                The main track at Churchill Downs is a one-mile dirt oval. The
                Kentucky Derby is run at a distance of 1.25 miles (10 furlongs).
                There is also a seven-furlong turf course situated inside the
                main dirt track for grass races during the spring and fall meets.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Can you visit Churchill Downs when there is no race?
              </h3>
              <p className="text-gray-700">
                Yes. The Kentucky Derby Museum, located on the Churchill Downs
                grounds, is open year-round and offers daily guided walking tours
                of the historic racetrack. Visitors can explore interactive
                exhibits, view the Winner&apos;s Circle, and learn about the
                history of the Derby and Thoroughbred racing.
              </p>
            </div>
            <div className="bg-derby-cream p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-derby-green mb-2">
                Is Churchill Downs a National Historic Landmark?
              </h3>
              <p className="text-gray-700">
                Yes, Churchill Downs received National Historic Landmark
                designation in 1986 from the U.S. Department of the Interior.
                This recognizes its significance as the home of the longest
                continuously held sporting event in America and its cultural and
                architectural importance.
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-4">
            Continue Exploring
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
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
              href="/history/traditions"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Derby Traditions
              </h3>
              <p className="text-gray-600 text-sm">
                Roses, mint juleps, hats, and historic rituals
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
                The greatest races beneath the Twin Spires
              </p>
            </Link>
            <Link
              href="/attend/seating-guide"
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-derby-gold hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                Seating Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Find the best seats and sections at Churchill Downs
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
