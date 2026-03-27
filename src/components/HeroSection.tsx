import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
}

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  badge,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden text-white py-16 sm:py-24">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-derby-green-dark/80 via-derby-green/40 to-derby-green/10" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {badge && (
          <p className="text-derby-gold font-semibold tracking-widest uppercase text-sm mb-3">
            {badge}
          </p>
        )}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
