import JsonLd from "./JsonLd";

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToJsonLdProps {
  name: string;
  description: string;
  steps: HowToStep[];
  image?: string;
  totalTime?: string;
}

export default function HowToJsonLd({
  name,
  description,
  steps,
  image,
  totalTime,
}: HowToJsonLdProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => {
      const stepData: Record<string, unknown> = {
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
      };
      if (step.image) {
        stepData.image = step.image;
      }
      return stepData;
    }),
  };

  if (image) {
    data.image = image;
  }

  if (totalTime) {
    data.totalTime = totalTime;
  }

  return <JsonLd data={data} />;
}
