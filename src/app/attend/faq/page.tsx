import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title:
    "Kentucky Derby FAQ | Frequently Asked Questions (2026)",
  description:
    "Answers to the most common Kentucky Derby questions. Bag policy, arrival times, parking, children, accessibility, weather, re-entry, Wi-Fi, ATMs, umbrellas, pets, and more for Churchill Downs on Derby Day.",
  keywords:
    "kentucky derby faq, derby questions, churchill downs rules, derby bag policy, kentucky derby parking, can children attend kentucky derby, derby day questions",
};

const faqItems = [
  {
    question: "Can I bring a bag to the Kentucky Derby?",
    answer:
      "Churchill Downs enforces a clear bag policy on Kentucky Derby Day. All bags must be clear plastic, vinyl, or PVC and cannot exceed 12 inches by 6 inches by 12 inches. Small clutch purses no larger than 4.5 inches by 6.5 inches are permitted regardless of material or color. Medically necessary items are allowed after inspection at the gate. Backpacks, large purses, camera bags, and non-clear tote bags are not permitted. Plan ahead and transfer your essentials to a clear bag before arriving.",
  },
  {
    question: "Is there re-entry at Churchill Downs on Derby Day?",
    answer:
      "Churchill Downs does not allow re-entry on Kentucky Derby Day. Once you leave the venue, you cannot return with your ticket. This policy applies to all ticket types including infield, grandstand, clubhouse, and premium areas. Plan to bring everything you need for the entire day inside a clear bag that meets the venue policy. If you need to retrieve something from your car, you will not be able to re-enter the venue afterward.",
  },
  {
    question: "Can I bring food or drinks into Churchill Downs?",
    answer:
      "No, outside food and beverages are not permitted at Churchill Downs on Derby Day. The venue offers a wide variety of food and drink options throughout the grandstand, clubhouse, and infield areas, ranging from classic event fare like hot dogs and burgers to Kentucky specialties like hot browns and bourbon balls. Mint juleps, beer, bourbon cocktails, wine, and non-alcoholic options are available at bars and concession stands throughout the venue. Prices are consistent with major sporting events.",
  },
  {
    question: "What time should I arrive at Churchill Downs for the Kentucky Derby?",
    answer:
      "Gates open at 8:00 AM on Kentucky Derby Day, and arriving early is strongly recommended. For infield and general admission ticket holders, arriving by 10:00 AM helps secure a good standing spot near the video screens. For reserved grandstand and clubhouse seats, arriving by noon gives you time to explore the venue and settle in. Traffic around Churchill Downs becomes heavily congested by late morning, so early arrival also avoids the worst transportation delays. The Kentucky Derby race typically runs around 6:50 PM, but the full day features a card of races starting in the morning.",
  },
  {
    question: "Is there parking at Churchill Downs? How much does it cost?",
    answer:
      "Churchill Downs offers limited on-site parking on Kentucky Derby Day, and most of it is reserved for premium ticket holders. General parking is available in nearby lots and residential areas within walking distance of the venue, typically costing $40 to $100 or more depending on proximity. Many homeowners and businesses near Churchill Downs offer private parking in their lots and yards. Pre-purchased parking passes through Churchill Downs or authorized third-party services are recommended to guarantee a spot. Rideshare services, taxis, hotel shuttles, and the TARC public bus system are popular alternatives to driving.",
  },
  {
    question: "Can children attend the Kentucky Derby?",
    answer:
      "Yes, children are welcome at the Kentucky Derby. Children under two years old are admitted free of charge and do not require a ticket, though they must sit on a parent or guardian's lap. Children age two and older require their own ticket. The grandstand and reserved seating areas are the most family-friendly sections, with covered seats, nearby restrooms, and a less rowdy atmosphere than the infield. The infield, with its party atmosphere, large crowds, and limited facilities, is generally not recommended for young children. Consider the length of the day when bringing children, as Derby Day spans many hours.",
  },
  {
    question: "Is Churchill Downs wheelchair accessible?",
    answer:
      "Yes, Churchill Downs offers ADA-accessible seating and facilities throughout the venue. Wheelchair-accessible seating is available in the grandstand, clubhouse, and other sections, with companion seating adjacent. Accessible restrooms are located throughout the venue, and elevators provide access to upper levels of the grandstand and clubhouse. Paved walkways connect most areas of the main venue, though the infield involves walking on grass and uneven terrain that may be challenging for wheelchair users. Contact Churchill Downs guest services well in advance of Derby Day to arrange accessible seating and discuss specific accessibility needs. Service animals are permitted throughout the venue.",
  },
  {
    question: "What happens if it rains on Kentucky Derby Day?",
    answer:
      "The Kentucky Derby runs rain or shine. Racing is not canceled due to rain, and the event proceeds on its normal schedule in all but the most extreme weather conditions. Many grandstand and clubhouse sections are covered, providing shelter from rain. Infield attendees have no shelter and are fully exposed to the elements. Experienced Derby-goers recommend bringing a clear poncho that fits over your outfit and hat. Small, compact umbrellas are permitted but can obstruct the view of other guests when opened in seated areas. Rain boots or waterproof shoes are highly practical, as Churchill Downs grounds become muddy quickly in wet weather.",
  },
  {
    question: "How long does the Kentucky Derby last?",
    answer:
      "The Kentucky Derby race itself lasts approximately two minutes, covering one and a quarter miles on the dirt track. However, the full Kentucky Derby Day event at Churchill Downs spans the entire day, from gates opening at 8:00 AM through the final race around 7:30 PM. A full card of undercard races runs throughout the day before the featured Derby race, which is typically the second-to-last race on the card and runs around 6:50 PM. Most attendees spend between six and ten hours at the venue, making it a full-day commitment.",
  },
  {
    question: "Can I switch between sections at Churchill Downs?",
    answer:
      "Movement between sections depends on your ticket type. Guests with premium tickets such as Clubhouse or Millionaires Row can typically access the grandstand areas below their section as well. However, grandstand ticket holders cannot access the clubhouse, Millionaires Row, or other premium areas without the appropriate ticket. The infield is accessed through a separate tunnel under the track, and general admission infield tickets typically restrict you to the infield area only. Some combined or premium infield packages may allow access to both areas. Check the specific terms of your ticket before planning to move between sections.",
  },
  {
    question: "Is there Wi-Fi at Churchill Downs?",
    answer:
      "Churchill Downs offers complimentary Wi-Fi in some areas of the venue, but connectivity on Derby Day is extremely unreliable due to the sheer volume of over 150,000 people using their devices simultaneously. Cell service is similarly challenged, with dropped calls and slow data speeds being common throughout the day. Download any apps, maps, or digital tickets before arriving. Consider using text messaging rather than calls for communication with your group, as texts are more likely to go through on congested networks. A portable phone charger is essential for keeping your device powered throughout the long day.",
  },
  {
    question: "Where are the ATMs at Churchill Downs?",
    answer:
      "ATMs are located throughout Churchill Downs in the grandstand, clubhouse, and infield areas. However, on Kentucky Derby Day, ATM lines can be extremely long, wait times can exceed 30 minutes during peak hours, and some machines may run out of cash by the afternoon. Transaction fees at venue ATMs are typically higher than standard bank fees. The best strategy is to bring sufficient cash with you before entering the venue. Many food and drink vendors accept credit and debit cards, but some infield vendors and all betting windows benefit from having cash on hand.",
  },
  {
    question: "Can I bring an umbrella to the Kentucky Derby?",
    answer:
      "Small, compact umbrellas are permitted at Churchill Downs on Derby Day. However, large golf umbrellas and oversized umbrellas are prohibited because they obstruct the views of other guests in the crowded venue. Even small umbrellas can block the sight lines of people behind you in seated sections, so many experienced attendees recommend bringing a clear poncho instead. Ponchos provide full rain protection without affecting the experience of the people around you, and they protect your outfit and hat simultaneously. If you do bring an umbrella, use it primarily in open areas rather than in the grandstand seats.",
  },
  {
    question: "What is the pet policy at Churchill Downs?",
    answer:
      "Pets are not permitted at Churchill Downs on Kentucky Derby Day. The only exception is for trained service animals that are individually trained to perform tasks for a person with a disability, in compliance with the Americans with Disabilities Act. Emotional support animals, therapy animals, and companion animals do not qualify as service animals under ADA guidelines and are not permitted in the venue. The large crowds, loud noise, and long duration of Derby Day make the environment unsuitable and potentially stressful for animals. Do not bring your pet to Churchill Downs on Derby Day.",
  },
  {
    question: "How do I get to Churchill Downs?",
    answer:
      "Churchill Downs is located at 700 Central Avenue in Louisville, Kentucky, approximately four miles south of downtown Louisville. Getting to the venue on Derby Day requires advance planning due to heavy traffic and road closures. Options include driving and parking in nearby lots (pre-purchase parking recommended), rideshare services like Uber and Lyft (expect surge pricing and designated pickup/drop-off areas), the TARC public bus system which runs special Derby Day routes, hotel shuttle services offered by many Louisville-area hotels, and pre-arranged private car services. Walking from nearby neighborhoods is an option if your accommodations are within a mile or two of the venue. After the event, expect significant delays leaving the area regardless of your transportation method.",
  },
  {
    question: "Can I place bets at the Kentucky Derby if I have never bet on horse racing before?",
    answer:
      "Absolutely. Betting on the races is one of the most popular activities at the Kentucky Derby, and it is designed to be accessible to beginners. You can place bets as low as two dollars at betting windows staffed by tellers who can walk you through the process, or at self-service terminals with on-screen instructions. The simplest bets are win (your horse finishes first), place (your horse finishes first or second), and show (your horse finishes first, second, or third). More advanced bets like exacta, trifecta, and superfecta involve picking multiple horses in order and offer larger potential payouts. Grab a racing program when you arrive to see the horse names, jockey information, and odds for each race.",
  },
  {
    question: "What time does the actual Kentucky Derby race start?",
    answer:
      "The Kentucky Derby race is typically scheduled for approximately 6:50 PM Eastern Time, though the exact post time can vary slightly from year to year and may be adjusted based on the pace of the undercard races. The Derby is usually the second-to-last race on the day's card. Pre-race ceremonies, including the singing of 'My Old Kentucky Home' and the post parade, begin approximately 30 minutes before the race. The full card of undercard races starts in the morning and runs throughout the day. Check the official Churchill Downs schedule as Derby Day approaches for the confirmed post time.",
  },
  {
    question: "Are there designated smoking areas at Churchill Downs?",
    answer:
      "Churchill Downs has designated smoking areas throughout the venue. Smoking is prohibited in enclosed and covered seating areas, restaurants, and indoor spaces. The infield, being an open-air space, is generally more permissive regarding smoking. Churchill Downs policies on e-cigarettes and vaping follow the same rules as traditional smoking. Check for posted signage when you arrive to identify the specific designated smoking areas in your section of the venue.",
  },
];

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Attend", href: "/attend" },
          { name: "FAQ", href: "/attend/faq" },
        ]}
      />
      <ArticleJsonLd
        title="Kentucky Derby FAQ: Frequently Asked Questions"
        description="Comprehensive answers to the most common questions about attending the Kentucky Derby at Churchill Downs, including bag policy, parking, accessibility, weather, betting, and venue rules."
        datePublished="2025-12-01"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="bg-derby-green text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-derby-gold font-semibold tracking-widest uppercase text-sm mb-4">
            Quick Answers
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Kentucky Derby Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
            Attending the Kentucky Derby raises a lot of questions, especially
            for first-timers. We&rsquo;ve compiled the most commonly asked
            questions with detailed answers to help you plan a smooth and
            enjoyable Derby Day at Churchill Downs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Quick Navigation */}
        <section className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-derby-green mb-5">
            Common Derby Day Questions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Below you will find answers to the most frequently asked questions
            about attending the Kentucky Derby. These cover venue policies,
            logistics, accessibility, weather preparation, and practical tips
            for making the most of your visit to Churchill Downs.
          </p>

          {/* Quick Reference Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "🎒", title: "Bag Policy", detail: "Clear bags only, max 12×6×12 in." },
              { icon: "🕐", title: "Gates Open", detail: "8:00 AM · Derby race ~6:57 PM" },
              { icon: "🚫", title: "No Re-Entry", detail: "Once you leave, you cannot return" },
              { icon: "🍔", title: "No Outside Food", detail: "Food & drinks sold inside" },
              { icon: "🅿️", title: "Parking", detail: "$40-$100+ · Pre-purchase recommended" },
              { icon: "♿", title: "ADA Access", detail: "Wheelchair seating & elevators" },
              { icon: "🌧️", title: "Rain or Shine", detail: "Derby runs in all weather" },
              { icon: "📱", title: "Wi-Fi", detail: "Unreliable · Download apps beforehand" },
            ].map((card, i) => (
              <div key={i} className="bg-derby-cream border border-derby-gold/20 rounded-xl p-4 text-center">
                <p className="text-2xl mb-1">{card.icon}</p>
                <p className="font-serif font-bold text-derby-green text-sm">{card.title}</p>
                <p className="text-[11px] text-gray-600 mt-1">{card.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Venue Policies */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl font-bold text-derby-green mb-6">
            Venue Policies and Rules
          </h2>
          <div className="space-y-6">
            {faqItems.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting There */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl font-bold text-derby-green mb-6">
            Getting There and Logistics
          </h2>
          <div className="space-y-6">
            {faqItems.slice(3, 6).map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Accessibility and Weather */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl font-bold text-derby-green mb-6">
            Accessibility and Weather
          </h2>
          <div className="space-y-6">
            {faqItems.slice(6, 9).map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Inside the Venue */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl font-bold text-derby-green mb-6">
            Inside the Venue
          </h2>
          <div className="space-y-6">
            {faqItems.slice(9, 14).map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The Race and Betting */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl font-bold text-derby-green mb-6">
            The Race, Betting, and More
          </h2>
          <div className="space-y-6">
            {faqItems.slice(14).map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-derby-green rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our in-depth guides cover every aspect of attending the Kentucky
            Derby, from buying tickets to choosing the perfect outfit. Explore
            the resources below to plan your perfect Derby Day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/attend/first-timers"
              className="inline-block bg-derby-gold text-derby-green-dark font-bold px-8 py-3.5 rounded-lg hover:bg-derby-gold-light transition-colors"
            >
              First-Timer&rsquo;s Guide
            </Link>
            <Link
              href="/attend/tickets"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              Tickets &amp; Pricing
            </Link>
            <Link
              href="/attend/what-to-wear"
              className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
            >
              What to Wear
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
