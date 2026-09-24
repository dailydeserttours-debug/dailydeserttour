import { HelpCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export interface Faq {
  question: string;
  answer: string;
}

export function FaqSection({
  faqs,
  heading = "Frequently Asked Questions",
  className = "",
}: {
  faqs: Faq[];
  heading?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <JsonLd data={faqSchema(faqs)} />
      <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-night-800 sm:text-3xl">
        <HelpCircle className="h-5 w-5 text-terracotta-600" />
        {heading}
      </h2>
      <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="text-sm font-semibold text-night-800">{faq.question}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-night-600">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
