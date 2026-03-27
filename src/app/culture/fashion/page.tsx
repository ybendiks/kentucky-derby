import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContentImage from "@/components/ContentImage";

export const metadata: Metadata = {
  title:
    "Kentucky Derby Fashion Guide 2026 | What to Wear to the Derby",
  description:
    "Complete Kentucky Derby fashion guide for 2026. Derby outfits for women and men, dress codes by section, hat tips, 2026 trend predictions, and style advice for the best-dressed day in horse racing.",
  keywords:
    "kentucky derby fashion, derby outfits 2026, what to wear kentucky derby, derby day dress code, derby hats, derby style guide",
};

const faqItems = [
  {
    question: "What should a woman wear to the Kentucky Derby?",
    answer:
      "Women typically wear a colorful cocktail dress or fit-and-flare dress in spring colors or bold prints, paired with a statement hat or fascinator, wedge heels or dressy flats, and a clutch bag. The outfit should feel festive, polished, and weather-appropriate for a day outdoors in early May.",
  },
  {
    question: "What is the dress code for the Kentucky Derby infield?",
    answer:
      "The infield has no formal dress code. Guests wear everything from shorts and sundresses to costumes and themed outfits. Comfortable shoes are essential since you will be standing on grass all day. Sunscreen and sunglasses are highly recommended.",
  },
  {
    question: "Do men have to wear a suit to the Kentucky Derby?",
    answer:
      "Men are not strictly required to wear a full suit unless they are seated in premium sections like Millionaires Row. For Grandstand and Clubhouse seating, a blazer with trousers or a sport coat with chinos is appropriate. A stylish hat and colorful tie or bowtie complete the look.",
  },
  {
    question: "When should I start shopping for my Kentucky Derby outfit?",
    answer:
      "Start shopping in February or March for the best selection. Custom hats from milliners often require 6 to 8 weeks of lead time. Popular Derby dresses in trending colors sell out quickly, so early shopping gives you the widest range of options and time for alterations if needed.",
  },
];

export default function FashionPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Derby Culture", href: "/culture" },
          { name: "Fashion Guide", href: "/culture/fashion" },
        ]}
      />
      <ArticleJsonLd
        title="Kentucky Derby Fashion Guide 2026 | What to Wear to the Derby"
        description="Complete Kentucky Derby fashion guide for 2026. Derby outfits for women and men, dress codes by section, hat tips, 2026 trend predictions, and style advice."
        datePublished="2025-10-15"
        dateModified="2026-03-20"
        author="Kentucky Derby Guide"
      />
      <FaqJsonLd items={faqItems} />

      <main>
        {/* Hero Section */}
        <section className="text-white py-20 sm:py-28 relative overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/2369447/pexels-photo-2369447.jpeg?w=1920"
            alt="Woman wearing a colorful blue polka dot dress and black-and-white striped hat at an outdoor event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/60">
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
                <li className="text-derby-gold">Fashion Guide</li>
              </ol>
            </nav>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Kentucky Derby Fashion Guide{" "}
              <span className="text-derby-gold">2026</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
              The Kentucky Derby is the single most fashion-forward day in American
              sports. From show-stopping hats to seersucker suits, your outfit is
              part of the experience. Here is everything you need to know about what
              to wear to the 152nd Run for the Roses on May 2, 2026 at Churchill Downs.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-derby-cream border-b border-derby-gold/20">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="font-serif text-lg font-bold text-derby-green mb-4">
              In This Guide
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              <a href="#significance" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                Why Fashion Matters at the Derby
              </a>
              <a href="#mens-fashion" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                Men&rsquo;s Derby Fashion
              </a>
              <a href="#womens-fashion" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                Women&rsquo;s Derby Fashion
              </a>
              <a href="#dress-code" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                Dress Code by Section
              </a>
              <a href="#hats" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                The Derby Hat
              </a>
              <a href="#2026-trends" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                2026 Trend Predictions
              </a>
              <a href="#celebrity" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                Celebrity Derby Fashion
              </a>
              <a href="#shopping" className="text-derby-green hover:text-derby-gold transition-colors text-sm py-1">
                Shopping Guide &amp; Packing Tips
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">

          {/* Why Fashion Matters */}
          <section id="significance" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Why Fashion Matters at the Kentucky Derby
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                The Kentucky Derby is more than a horse race. It is a living cultural
                tradition that stretches back to 1875, and fashion has been woven into
                the fabric of Derby Day from the very beginning. When the gates of
                Churchill Downs open each first Saturday in May, over 150,000 spectators
                arrive dressed in their finest spring attire, transforming the
                grandstands and infield into one of the most colorful gatherings in
                American sports.
              </p>
              <p>
                Getting dressed for the Derby is a ritual unto itself. Outfits are
                planned weeks or even months in advance. Hats are custom ordered from
                milliners across the country. Suits are pressed, ties are selected,
                and accessories are coordinated down to the last detail. For many
                attendees, Derby fashion is not vanity &mdash; it is participation.
                Your outfit signals respect for the occasion and connects you to a
                lineage of Southern elegance, bold self-expression, and communal
                celebration that defines the event.
              </p>
              <p>
                Whether you are sitting in Millionaires Row with a cocktail or dancing
                in the infield with friends, what you wear shapes your entire Derby
                Day experience. This guide will walk you through every element of Derby
                fashion for 2026, from head-to-toe outfit ideas for women and men
                to section-specific dress codes, trend forecasts, and practical shopping
                advice.
              </p>
            </div>
          </section>

          {/* Women's Fashion */}
          <section id="womens-fashion" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Women&rsquo;s Kentucky Derby Fashion
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Women&rsquo;s Derby fashion is the centerpiece of the spectacle.
                Churchill Downs is your runway, and the goal is to look polished,
                colorful, and confident while staying comfortable enough to enjoy
                a full day of racing, socializing, and celebration.
              </p>
            </div>

            {/* Dresses */}
            <div className="mt-8 bg-derby-cream rounded-xl p-6 sm:p-8 border border-derby-gold/10">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-4">
                Dresses &amp; Silhouettes
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  A beautiful dress is the foundation of most women&rsquo;s Derby
                  outfits. The most popular silhouettes at Churchill Downs are
                  fit-and-flare dresses that cinch at the waist and flow outward,
                  creating a flattering shape that moves well in the spring breeze.
                  Cocktail-length hemlines (just above or at the knee) are the standard
                  for Grandstand and Clubhouse seating, striking the right balance
                  between elegance and practicality.
                </p>
                <p>
                  Floral prints are a perennial Derby favorite, evoking the lush
                  springtime atmosphere of Louisville in May. Bold, large-scale floral
                  patterns make a strong impression, while more subdued ditsy prints
                  work beautifully for a refined look. Beyond florals, geometric
                  patterns, abstract watercolors, and solid colors all have a place
                  at the Derby. A-line dresses, sheath dresses, and midi skirts with
                  coordinated tops are all excellent choices.
                </p>
                <p>
                  For those who prefer separates, a tailored jumpsuit in a bright
                  spring shade or a palazzo pants set with a statement blouse can be
                  just as eye-catching as a dress. The key is choosing something that
                  feels celebratory and appropriate for the section you are sitting in.
                </p>
              </div>
            </div>

            {/* Colors */}
            <div className="mt-6 bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-4">
                Colors to Wear
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  Color is everything at the Derby. This is not the place for a little
                  black dress. Think vibrant, joyful, and spring-forward. Here are the
                  colors and their significance at Churchill Downs:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-derby-green">Red:</strong> A tribute to the
                    Run for the Roses. Red dresses are a classic Derby choice, especially
                    in rich shades like crimson, cherry, and scarlet that echo the famed
                    garland of 554 roses draped over the winning horse.
                  </li>
                  <li>
                    <strong className="text-derby-green">Pink:</strong> Traditionally
                    associated with Kentucky Oaks Day (the day before the Derby), but
                    pink is stunning on Derby Day as well. From soft blush to hot pink,
                    it complements every skin tone.
                  </li>
                  <li>
                    <strong className="text-derby-green">Pastels:</strong> Mint green,
                    lavender, soft yellow, peach, and powder blue are quintessentially
                    Derby. They photograph beautifully against the green of the track
                    and the spring sky.
                  </li>
                  <li>
                    <strong className="text-derby-green">Bold Prints:</strong> Don&rsquo;t
                    be afraid to go big. Multi-colored florals, abstract geometric
                    patterns, and color-blocked designs all stand out in the crowd and
                    show personality.
                  </li>
                  <li>
                    <strong className="text-derby-green">White &amp; Cream:</strong> Elegant
                    and timeless, especially when paired with colorful accessories or a
                    dramatic hat. Many attendees opt for an all-white ensemble with a
                    single bold accent piece.
                  </li>
                </ul>
              </div>
            </div>

            {/* Shoes */}
            <div className="mt-6 bg-derby-cream rounded-xl p-6 sm:p-8 border border-derby-gold/10">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-4">
                Shoes: Style Meets Practicality
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  Churchill Downs is an outdoor venue with grassy areas, brick walkways,
                  and a lot of walking. Your shoe choice can make or break your Derby
                  Day comfort, so think carefully about what goes on your feet.
                </p>
                <p>
                  <strong>Wedges</strong> are the gold standard for Derby footwear.
                  They provide height and elegance without the sinking-into-grass problem
                  that plagues stiletto heels. Platform wedges in a color that coordinates
                  with your dress are a popular and practical choice.
                </p>
                <p>
                  <strong>Block heels</strong> are another smart option, offering
                  stability on uneven surfaces while maintaining a dressed-up appearance.
                  If you prefer traditional heels, stick to a chunky or kitten heel
                  rather than a pencil-thin stiletto.
                </p>
                <p>
                  For the <strong>infield</strong>, where you will be standing on grass
                  all day, comfortable flats, espadrilles, or even stylish sandals are
                  your best bet. Many infield veterans swear by fashion sneakers in a
                  fun color. Leave your expensive shoes at the hotel for the infield
                  &mdash; things get muddy if it rains.
                </p>
              </div>
            </div>

            {/* Accessories */}
            <div className="mt-6 bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-4">
                Accessories
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  Accessories elevate a Derby outfit from good to unforgettable. Here
                  are the essentials every woman should consider:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-derby-green">Statement Jewelry:</strong> Bold
                    earrings, layered necklaces, or a striking cocktail ring add sparkle.
                    If your hat is the showpiece, keep jewelry minimal. If your hat is
                    simpler, let your jewelry shine.
                  </li>
                  <li>
                    <strong className="text-derby-green">Clutch Bag:</strong> A
                    structured clutch or small crossbody in a complementary or
                    contrasting color keeps your hands free for mint juleps and betting
                    slips. Avoid large purses &mdash; space is limited in most sections.
                  </li>
                  <li>
                    <strong className="text-derby-green">Sunglasses:</strong> The Derby
                    is outdoors in early May, and the Kentucky sun can be intense.
                    A stylish pair of oversized sunglasses is both fashionable and
                    functional. Choose a frame that complements your hat without competing
                    for attention.
                  </li>
                  <li>
                    <strong className="text-derby-green">Sunscreen:</strong> Not a fashion
                    accessory, strictly speaking, but absolutely essential. A sunburn will
                    ruin your evening plans faster than a losing longshot.
                  </li>
                </ul>
              </div>
            </div>

            {/* The Hat */}
            <div id="hats" className="mt-6 bg-derby-green/5 rounded-xl p-6 sm:p-8 border border-derby-green/20">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-4">
                The Hat: The Crown of Your Derby Look
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  No single element defines Kentucky Derby fashion more than the hat.
                  A Derby hat is not just an accessory &mdash; it is the centerpiece
                  of your entire ensemble, the first thing people notice, and the
                  detail that appears in every photograph. The tradition of wearing
                  elaborate hats at Churchill Downs dates back to the earliest runnings
                  of the race, and it remains the most beloved and visible aspect of
                  Derby Day style.
                </p>
                <p>
                  Wide-brimmed hats are the classic choice for Derby Day and remain
                  the most photographed style. Look for brims of four inches or wider,
                  decorated with ribbons, flowers, feathers, or sculptural elements
                  that match or complement your outfit. Fascinators &mdash; smaller,
                  ornamental headpieces attached with a clip or headband &mdash; have
                  grown in popularity and are a wonderful option for those who find
                  large hats uncomfortable or impractical.
                </p>
                <p>
                  For a deep dive into selecting, buying, and styling your Derby hat,
                  visit our{" "}
                  <Link
                    href="/attend/hats"
                    className="text-derby-green font-semibold hover:text-derby-gold transition-colors underline decoration-derby-gold/30"
                  >
                    complete guide to Kentucky Derby hats and fascinators
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          <ContentImage
            src="https://images.pexels.com/photos/30725894/pexels-photo-30725894.jpeg?w=800"
            alt="Woman in a pink dress with a matching pink fascinator headpiece"
            caption="A colorful dress paired with a statement fascinator is quintessential Derby fashion"
            aspectRatio="landscape"
            priority
          />

          {/* Men's Fashion */}
          <section id="mens-fashion" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Men&rsquo;s Kentucky Derby Fashion
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Gentlemen, the Derby is your chance to break free from the predictable
                navy-suit-white-shirt uniform and embrace bold color, pattern, and
                personality. Derby Day is one of the few occasions in American life where
                men are not just allowed but encouraged to dress with flair. A great Derby
                outfit signals confidence, attention to detail, and respect for tradition.
              </p>
            </div>

            {/* Suits */}
            <div className="mt-8 bg-derby-cream rounded-xl p-6 sm:p-8 border border-derby-gold/10">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-4">
                Suits &amp; Blazers
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  The <strong>seersucker suit</strong> is arguably the most iconic
                  piece of men&rsquo;s Derby fashion. Its lightweight, puckered cotton
                  fabric was practically designed for warm Southern days, and its
                  distinctive striped texture looks effortlessly dapper. Classic
                  blue-and-white seersucker is the standard, but modern variations in
                  pink, lavender, and mint green are increasingly popular.
                </p>
                <p>
                  <strong>Linen suits</strong> in light colors &mdash; cream, sky blue,
                  pale pink, or mint &mdash; are another excellent choice. Linen breathes
                  beautifully in the May heat and has a relaxed elegance that fits the
                  Derby atmosphere perfectly. Expect wrinkles; they are part of
                  linen&rsquo;s charm.
                </p>
                <p>
                  <strong>Cotton suits and chinos</strong> in spring-weight fabrics
                  round out the options. A well-fitted blazer in a bold color (coral,
                  Kelly green, or French blue) paired with contrasting trousers (cream,
                  khaki, or white) is a versatile look that works for Grandstand and
                  Clubhouse seating.
                </p>
                <p>
                  Avoid heavy dark wool suits. A charcoal or black suit will feel
                  out of place and uncomfortably warm. The Derby is about lightness,
                  color, and celebration.
                </p>
              </div>
            </div>

            {/* Ties and Neckwear */}
            <div className="mt-6 bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-4">
                Ties, Bowties &amp; Pocket Squares
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  Neckwear is where men can truly express their Derby personality.
                  Bold, colorful patterns are the order of the day. Think paisley
                  prints, equestrian motifs (horses, horseshoes, jockeys), floral
                  patterns, and bright stripes. A pink paisley tie with a seersucker
                  suit is a timeless Derby combination.
                </p>
                <p>
                  <strong>Bowties</strong> are a Derby favorite and carry a distinctly
                  Southern charm. A self-tie bowtie in a vibrant pattern makes a
                  statement, and many Derby-goers view the bowtie as the preferred
                  choice over a standard necktie. Pre-tied bowties work too &mdash; the
                  important thing is the color and pattern.
                </p>
                <p>
                  A coordinated <strong>pocket square</strong> adds a finishing touch.
                  It does not need to match your tie exactly; a complementary color or
                  pattern creates a more interesting look than a perfect match.
                </p>
              </div>
            </div>

            {/* Men's Hats */}
            <div className="mt-6 bg-derby-cream rounded-xl p-6 sm:p-8 border border-derby-gold/10">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-4">
                Men&rsquo;s Derby Hats
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  While hats are optional for men, they are strongly encouraged and
                  complete a Derby look like nothing else. The top choices for
                  gentlemen include:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-derby-green">Fedora:</strong> A classic felt
                    or straw fedora in a light color is the most popular men&rsquo;s
                    hat at the Derby. Wide-brimmed fedoras in cream, tan, or grey look
                    especially sharp with a blazer.
                  </li>
                  <li>
                    <strong className="text-derby-green">Panama Straw Hat:</strong> Lightweight,
                    breathable, and timelessly elegant. A genuine Panama hat (woven from
                    toquilla palm) is an investment piece that works at the Derby and
                    beyond.
                  </li>
                  <li>
                    <strong className="text-derby-green">Boater:</strong> The flat-topped
                    straw boater has strong vintage appeal and pairs beautifully with
                    seersucker. A grosgrain ribbon band in a color that ties into your
                    outfit adds cohesion.
                  </li>
                </ul>
              </div>
            </div>

            {/* Men's Shoes */}
            <div className="mt-6 bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-4">
                Shoes for Men
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  Your shoes should be light, comfortable, and suited to warm weather.
                  The best options include:
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong className="text-derby-green">Loafers:</strong> Tassel loafers,
                    penny loafers, or bit loafers in tan, cognac, or suede are easy to
                    wear and look refined.
                  </li>
                  <li>
                    <strong className="text-derby-green">Bucks:</strong> White bucks or
                    dirty bucks (tan suede) are a Southern staple and pair perfectly with
                    seersucker and linen.
                  </li>
                  <li>
                    <strong className="text-derby-green">Oxfords:</strong> Cap-toe oxfords
                    in light tan or two-tone spectator styles work well for premium
                    seating sections.
                  </li>
                </ul>
                <p>
                  Avoid heavy, dark dress shoes. Black wingtips and chunky brogues feel
                  out of step with Derby&rsquo;s breezy atmosphere. Think lighter in
                  both color and weight.
                </p>
              </div>
            </div>
          </section>

          <ContentImage
            src="https://images.unsplash.com/photo-1599012305187-2ce93c1649f8?w=800&q=75"
            alt="Man in a tailored suit with vest and tie at an outdoor garden setting"
            caption="A well-fitted suit with bold accessories defines the modern Derby gentleman"
            aspectRatio="landscape"
          />

          {/* Dress Code by Section */}
          <section id="dress-code" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Dress Code by Section at Churchill Downs
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
              <p>
                Your ticket determines your section, and each section at Churchill
                Downs has its own unwritten (and sometimes written) dress code. Here
                is what to expect in every major area of the venue on Derby Day.
              </p>
            </div>

            <div className="space-y-6">
              {/* Grandstand / Clubhouse */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-derby-green text-derby-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Smart Upscale
                  </span>
                  <h3 className="font-serif text-xl font-bold text-derby-green">
                    Grandstand &amp; Clubhouse
                  </h3>
                </div>
                <p className="text-gray-700">
                  These are the core reserved seating areas and the standard for
                  dressed-up Derby attire. Women should plan on a cocktail dress
                  or elegant separates with a hat or fascinator. Men should wear
                  a suit or blazer with trousers. This is where you will see the
                  full range of classic Derby fashion &mdash; colorful dresses,
                  elaborate hats, seersucker suits, and coordinated accessories.
                  It is the look most people picture when they think of Derby Day.
                </p>
              </div>

              {/* Millionaires Row / Premium */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-derby-gold text-derby-green-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Formal Cocktail
                  </span>
                  <h3 className="font-serif text-xl font-bold text-derby-green">
                    Millionaires Row &amp; Premium Sections
                  </h3>
                </div>
                <p className="text-gray-700">
                  Premium seating calls for a step up in formality. Think formal
                  cocktail attire. Women should consider a refined cocktail dress
                  or tailored suit with polished accessories and a statement hat.
                  Men should wear a well-fitted suit (not just a blazer) in a
                  spring-appropriate fabric and color. Grooming should be meticulous,
                  and accessories should feel curated rather than casual. This is
                  where you are most likely to spot celebrities and high-profile
                  guests.
                </p>
              </div>

              {/* Infield */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Casual &amp; Creative
                  </span>
                  <h3 className="font-serif text-xl font-bold text-derby-green">
                    The Infield
                  </h3>
                </div>
                <p className="text-gray-700">
                  The infield is the Derby&rsquo;s famous party zone, and there is no
                  formal dress code here. Shorts, tank tops, sundresses, and casual
                  wear are all perfectly acceptable. Many infield attendees embrace
                  creative and fun outfits: themed costumes, matching group ensembles,
                  humorous hats, and bold accessories are part of the culture. Comfort
                  is paramount since you will be on your feet all day on grass.
                  Prioritize sunscreen, comfortable shoes you do not mind getting
                  dirty, and an outfit that lets you enjoy the party atmosphere without
                  worrying about stains or damage.
                </p>
              </div>
            </div>
          </section>

          <ContentImage
            src="https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?w=800"
            alt="Woman wearing a sun hat surrounded by vibrant flowers on a sunny day"
            caption="Derby fashion is about confidence, color, and celebrating the occasion"
            aspectRatio="wide"
          />

          {/* 2026 Trends */}
          <section id="2026-trends" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              2026 Kentucky Derby Fashion Trend Predictions
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Every year brings fresh trends to Churchill Downs while honoring
                the timeless traditions that make Derby fashion special. Here is
                what we expect to see on the runway of the 152nd Kentucky Derby.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/10">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  Sculptural Hats
                </h3>
                <p className="text-gray-700 text-sm">
                  Expect to see more architectural and three-dimensional hat designs
                  in 2026. Think asymmetric brims, origami-inspired folds, and bold
                  geometric shapes that push beyond traditional wide-brimmed styles
                  while remaining elegant.
                </p>
              </div>
              <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/10">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  Saturated Jewel Tones
                </h3>
                <p className="text-gray-700 text-sm">
                  While pastels will always have a place at the Derby, 2026 is
                  trending toward rich, saturated jewel tones: emerald green, sapphire
                  blue, deep coral, and marigold. These colors photograph strikingly
                  and stand out in the crowd.
                </p>
              </div>
              <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/10">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  Matching Sets for Men
                </h3>
                <p className="text-gray-700 text-sm">
                  Coordinated printed sets &mdash; a patterned blazer with matching
                  trousers in tropical prints, botanical motifs, or tonal stripes
                  &mdash; are gaining momentum in men&rsquo;s Derby fashion,
                  offering a modern alternative to the traditional suit.
                </p>
              </div>
              <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/10">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  Sustainable &amp; Vintage Fashion
                </h3>
                <p className="text-gray-700 text-sm">
                  Vintage and secondhand Derby outfits are having a moment.
                  Pre-loved designer dresses, vintage brooches, and heirloom hats
                  carry character and sustainability credentials that resonate with
                  a growing number of style-conscious attendees.
                </p>
              </div>
              <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/10">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  Statement Sleeves
                </h3>
                <p className="text-gray-700 text-sm">
                  Dramatic sleeves &mdash; puff, balloon, bell, and flutter styles
                  &mdash; continue to dominate spring fashion and translate beautifully
                  to Derby Day dresses and tops. They add visual interest and movement
                  without requiring heavy accessories.
                </p>
              </div>
              <div className="bg-derby-cream rounded-xl p-6 border border-derby-gold/10">
                <h3 className="font-serif text-lg font-bold text-derby-green mb-2">
                  Colorful Men&rsquo;s Shoes
                </h3>
                <p className="text-gray-700 text-sm">
                  Watch for men stepping out in brightly colored loafers, printed
                  driving shoes, and pastel suede bucks. Footwear is becoming as
                  much of a statement piece for men as neckwear and hats.
                </p>
              </div>
            </div>
          </section>

          <ContentImage
            src="https://images.pexels.com/photos/30725894/pexels-photo-30725894.jpeg?w=800"
            alt="Elegant woman in a pink dress wearing a fascinator at a spring outdoor event"
            caption="Statement hats remain the most iconic element of Derby day fashion"
            aspectRatio="square"
          />

          {/* Celebrity Fashion */}
          <section id="celebrity" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Celebrity Derby Fashion Moments
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                The Kentucky Derby has long attracted celebrities who bring their
                own style to Churchill Downs, and their outfits often set trends
                for seasons to come. Over the years, the Derby has been a magnet
                for A-list fashion moments that blend Hollywood glamour with
                Southern tradition.
              </p>
              <p>
                Celebrities and public figures frequently appear in Millionaires Row
                and the exclusive Turf Club, wearing designer outfits and custom
                millinery that generate significant media coverage. Their presence
                has helped elevate the Derby from a regional racing event to a
                nationally recognized fashion occasion. Whether it is a pop star in
                a dramatic wide-brimmed hat or an athlete in a boldly colored suit,
                celebrity style at the Derby inspires everyday attendees to push
                their own fashion boundaries.
              </p>
              <p>
                Social media has amplified this effect in recent years. Derby fashion
                moments trend on platforms within minutes, and many first-time
                attendees cite celebrity outfits from previous years as a major
                influence on their own style choices. Keep an eye on entertainment
                and fashion coverage in the weeks leading up to the 2026 Derby for
                the latest celebrity confirmations.
              </p>
            </div>
          </section>

          {/* Shopping Guide */}
          <section id="shopping" className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Shopping Guide: Where &amp; When to Find Your Derby Outfit
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Planning ahead is the single best thing you can do for your Derby
                fashion. Here is a timeline and set of recommendations to help you
                put together a winning look without the last-minute stress.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-derby-green rounded-lg flex items-center justify-center">
                  <span className="text-derby-gold font-serif font-bold text-sm">FEB</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                    February &ndash; March: Start Shopping
                  </h3>
                  <p className="text-gray-700">
                    Spring collections hit stores in February, giving you the widest
                    selection of colors, prints, and sizes. This is also the time to
                    order a custom hat from a milliner, as most require 6 to 8 weeks
                    of lead time. Department stores, specialty boutiques, and online
                    retailers all stock Derby-appropriate options during this window.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-derby-green rounded-lg flex items-center justify-center">
                  <span className="text-derby-gold font-serif font-bold text-sm">MAR</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                    March &ndash; April: Finalize &amp; Accessorize
                  </h3>
                  <p className="text-gray-700">
                    By late March, you should have your dress or suit locked in and
                    any alterations scheduled. Focus on accessories: shoes, bag, jewelry,
                    and sunglasses. Try everything on together to make sure the full
                    look is cohesive. This is a great time to check Louisville boutiques
                    if you are local or plan on arriving early.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-derby-green rounded-lg flex items-center justify-center">
                  <span className="text-derby-gold font-serif font-bold text-sm">APR</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-derby-green mb-1">
                    April: Final Details &amp; Weather Check
                  </h3>
                  <p className="text-gray-700">
                    Two weeks before the Derby, start monitoring the weather forecast for
                    Louisville. Kentucky weather in May is unpredictable, so have a
                    backup plan: a lightweight pashmina or shawl for cool evenings, a
                    compact umbrella that coordinates with your outfit, and a slightly
                    heavier option if temperatures drop.
                  </p>
                </div>
              </div>
            </div>

            {/* Packing Tips */}
            <div className="mt-10 bg-derby-green/5 rounded-xl p-6 sm:p-8 border border-derby-green/20">
              <h3 className="font-serif text-2xl font-bold text-derby-green mb-4">
                Packing Tips for Out-of-Town Visitors
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  If you are traveling to Louisville for the Derby, careful packing
                  will save you headaches on race day. Here are the essentials:
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong className="text-derby-green">Hat box or structured bag:</strong>{" "}
                    Never pack your Derby hat in a suitcase. A dedicated hat box
                    protects it during travel and can be left at your hotel.
                  </li>
                  <li>
                    <strong className="text-derby-green">Garment bag:</strong>{" "}
                    Pack your dress or suit in a garment bag to avoid wrinkles. Hang
                    it as soon as you arrive at your hotel.
                  </li>
                  <li>
                    <strong className="text-derby-green">Backup outfit:</strong>{" "}
                    Pack a second outfit option in case of unexpected weather changes.
                    A light jacket or cardigan and a pair of comfortable backup shoes
                    can be lifesavers.
                  </li>
                  <li>
                    <strong className="text-derby-green">Weather essentials:</strong>{" "}
                    Sunscreen (SPF 30 or higher), a compact umbrella, sunglasses, and
                    a small portable fan are all wise additions for a long day outdoors.
                  </li>
                  <li>
                    <strong className="text-derby-green">Evening attire:</strong>{" "}
                    Many Derby-goers head out to Louisville&rsquo;s restaurants and
                    bars after the races. Pack a separate evening outfit if you do not
                    want to wear your Derby look all night.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-derby-green mb-6">
              Frequently Asked Questions About Derby Fashion
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <h3 className="font-serif text-lg font-bold text-derby-green mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-derby-green rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Plan Your Derby Look?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Your outfit is half the fun of Derby Day. Start with the hat, build
              around it, and remember: the Kentucky Derby is the one day where
              overdressing is impossible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/attend/hats"
                className="inline-block bg-derby-gold text-derby-green-dark font-bold px-8 py-3.5 rounded-lg hover:bg-derby-gold-light transition-colors"
              >
                Explore Derby Hats
              </Link>
              <Link
                href="/attend/tickets"
                className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-derby-gold hover:text-derby-gold transition-colors"
              >
                Get Your Tickets
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
