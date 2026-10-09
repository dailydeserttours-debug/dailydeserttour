import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/images/hero/hero-1.jpg", width: 1600, height: 1080, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/hero/hero-1.jpg"],
  },
};

// `headers()`/middleware-based locale detection would force every route into dynamic
// rendering (it did, and broke static generation for all 78 pages — see git history).
// This runs before paint and is JS-crawler-visible (Google et al. render JS), so it
// corrects `<html lang>` for /it/* pages without sacrificing static generation.
const SET_HTML_LANG_SCRIPT = `(function(){if(location.pathname==="/it"||location.pathname.indexOf("/it/")===0){document.documentElement.lang="it";}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: SET_HTML_LANG_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
