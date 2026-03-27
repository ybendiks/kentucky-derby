import JsonLd from "./JsonLd";

export default function EventJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "152nd Kentucky Derby",
    description:
      "The 152nd running of the Kentucky Derby, America's most iconic horse race, held at historic Churchill Downs in Louisville, Kentucky.",
    image: "https://www.kentuckyderby2026.net/images/kentucky-derby-churchill-downs.jpg",
    url: "https://www.kentuckyderby2026.net/race/overview",
    startDate: "2026-05-02T00:00:00-04:00",
    endDate: "2026-05-02T23:59:00-04:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Churchill Downs",
      address: {
        "@type": "PostalAddress",
        streetAddress: "700 Central Ave",
        addressLocality: "Louisville",
        addressRegion: "KY",
        postalCode: "40208",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Churchill Downs Incorporated",
      url: "https://www.churchilldowns.com",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.kentuckyderby2026.net/attend/tickets",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      validFrom: "2025-11-01T00:00:00-05:00",
    },
    performer: {
      "@type": "SportsTeam",
      name: "2026 Kentucky Derby Contenders",
    },
  };

  return <JsonLd data={data} />;
}
