import Link from "next/link";
import type { ReactNode } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Renders "[label](url)" links inside plain-text paragraphs — internal links use
 * next/link, external links (http...) open in a new tab with rel=noopener noreferrer.
 */
export function renderRichText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text))) {
    const [full, label, href] = match;
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (href.startsWith("http")) {
      nodes.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-terracotta-700 underline decoration-terracotta-300 underline-offset-2 hover:text-terracotta-800"
        >
          {label}
        </a>,
      );
    } else {
      nodes.push(
        <Link
          key={key++}
          href={href}
          className="font-medium text-terracotta-700 underline decoration-terracotta-300 underline-offset-2 hover:text-terracotta-800"
        >
          {label}
        </Link>,
      );
    }

    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
