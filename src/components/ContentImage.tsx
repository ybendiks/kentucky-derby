import Image from "next/image";

interface ContentImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: "landscape" | "square" | "wide";
  priority?: boolean;
}

export default function ContentImage({
  src,
  alt,
  caption,
  aspectRatio = "landscape",
  priority = false,
}: ContentImageProps) {
  const aspectClasses = {
    landscape: "aspect-[3/2]",
    square: "aspect-square",
    wide: "aspect-[2/1]",
  };

  return (
    <figure className="my-8">
      <div
        className={`relative ${aspectClasses[aspectRatio]} w-full overflow-hidden rounded-xl`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
