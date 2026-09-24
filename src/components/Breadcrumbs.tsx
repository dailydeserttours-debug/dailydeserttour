import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: { name: string; url: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-night-500">
        {items.map((item, i) => (
          <li key={item.url} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3 text-night-400" aria-hidden />}
            {i === items.length - 1 ? (
              <span className="font-medium text-night-700" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.url} className="hover:text-terracotta-600">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
