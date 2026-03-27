import JsonLd from "./JsonLd";

interface ArticleJsonLdProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
}

export default function ArticleJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  author,
  image,
}: ArticleJsonLdProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Kentucky Derby Guide",
      url: "https://www.kentuckyderby2026.net",
    },
  };

  if (image) {
    data.image = image;
  }

  return <JsonLd data={data} />;
}
