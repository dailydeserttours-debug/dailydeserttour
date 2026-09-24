export function JsonLd({ data }: { data: object }) {
  // JSON-LD from trusted, statically-typed site data only — never user input.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
