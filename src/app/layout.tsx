import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import MobileNav from "@/components/MobileNav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kentuckyderby2026.net"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | 2026 Kentucky Derby Guide",
    default:
      "2026 Kentucky Derby Guide | Race, Travel & Louisville Visitor Guide",
  },
  description:
    "Your complete guide to the 2026 Kentucky Derby. Get race info, contender analysis, betting tips, travel guides, bourbon trail tours, and everything you need to experience Churchill Downs and Louisville.",
  keywords: [
    "Kentucky Derby 2026",
    "Churchill Downs",
    "Louisville",
    "horse racing",
    "Derby betting",
    "bourbon trail",
  ],
  openGraph: {
    title: "2026 Kentucky Derby Guide | Race, Travel & Louisville Visitor Guide",
    description:
      "Your complete guide to the 2026 Kentucky Derby at Churchill Downs. Race info, betting, travel, bourbon, and more.",
    type: "website",
    locale: "en_US",
    url: "https://www.kentuckyderby2026.net",
  },
};

const navLinks = [
  { href: "/race", label: "Race" },
  { href: "/betting", label: "Betting" },
  { href: "/history", label: "History" },
  { href: "/attend", label: "Attend" },
  { href: "/louisville", label: "Louisville" },
  { href: "/bourbon", label: "Bourbon" },
  { href: "/culture", label: "Culture" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "2026 Kentucky Derby Guide",
            url: "https://www.kentuckyderby2026.net",
            description:
              "Your complete guide to the 2026 Kentucky Derby. Get race info, contender analysis, betting tips, travel guides, bourbon trail tours, and everything you need to experience Churchill Downs and Louisville.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://www.kentuckyderby2026.net/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Kentucky Derby Guide",
            url: "https://www.kentuckyderby2026.net",
            logo: "https://www.kentuckyderby2026.net/images/logo.png",
            description:
              "The most comprehensive online guide to the Kentucky Derby, Churchill Downs, and Louisville, Kentucky.",
            sameAs: [
              "https://www.facebook.com/kentuckyderbyguide",
              "https://www.twitter.com/kyderbyguide",
              "https://www.instagram.com/kentuckyderbyguide",
            ],
          }}
        />
        <header className="sticky top-0 z-50 bg-derby-green border-b border-derby-green-light">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                className="font-serif text-xl sm:text-2xl font-bold text-derby-gold tracking-tight"
              >
                2026 Kentucky Derby Guide
              </Link>
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-white/90 hover:text-derby-gold transition-colors rounded-md"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <MobileNav />
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-derby-green-dark text-white/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-derby-gold font-serif font-semibold mb-3">
                  Race Day
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/race/overview" className="hover:text-white transition-colors">
                      Race Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/race/contenders" className="hover:text-white transition-colors">
                      Contenders
                    </Link>
                  </li>
                  <li>
                    <Link href="/race/odds" className="hover:text-white transition-colors">
                      Odds & Predictions
                    </Link>
                  </li>
                  <li>
                    <Link href="/betting/how-to-bet" className="hover:text-white transition-colors">
                      How to Bet
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-derby-gold font-serif font-semibold mb-3">
                  Plan Your Visit
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/attend/tickets" className="hover:text-white transition-colors">
                      Tickets
                    </Link>
                  </li>
                  <li>
                    <Link href="/attend/what-to-wear" className="hover:text-white transition-colors">
                      What to Wear
                    </Link>
                  </li>
                  <li>
                    <Link href="/louisville/where-to-stay" className="hover:text-white transition-colors">
                      Where to Stay
                    </Link>
                  </li>
                  <li>
                    <Link href="/louisville/restaurants" className="hover:text-white transition-colors">
                      Restaurants
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-derby-gold font-serif font-semibold mb-3">
                  Explore
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/bourbon/trail-guide" className="hover:text-white transition-colors">
                      Bourbon Trail
                    </Link>
                  </li>
                  <li>
                    <Link href="/history/overview" className="hover:text-white transition-colors">
                      Derby History
                    </Link>
                  </li>
                  <li>
                    <Link href="/culture/mint-julep" className="hover:text-white transition-colors">
                      Mint Julep
                    </Link>
                  </li>
                  <li>
                    <Link href="/culture/derby-party" className="hover:text-white transition-colors">
                      Derby Party
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-derby-gold font-serif font-semibold mb-3">
                  Louisville
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/louisville/overview" className="hover:text-white transition-colors">
                      City Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/louisville/neighborhoods" className="hover:text-white transition-colors">
                      Neighborhoods
                    </Link>
                  </li>
                  <li>
                    <Link href="/louisville/nightlife" className="hover:text-white transition-colors">
                      Nightlife
                    </Link>
                  </li>
                  <li>
                    <Link href="/louisville/getting-here" className="hover:text-white transition-colors">
                      Getting Here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-sm">
              <p>&copy; 2026 Kentucky Derby Guide. All rights reserved.</p>
              <p className="mt-1 text-white/50">
                Not affiliated with Churchill Downs or the Kentucky Derby.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
