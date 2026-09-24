import type { MetadataRoute } from "next";
import { tours, destinations } from "@/data/tours";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const priorities: Record<string, number> = {
    "": 1,
    "/trip": 0.9,
    "/destinations": 0.7,
    "/blog": 0.6,
    "/about": 0.5,
    "/contact": 0.5,
  };
  // /privacy and /terms are intentionally excluded — they're noindexed placeholder
  // pages (see their metadata) and don't belong in the sitemap until real copy lands.
  const staticRoutes = ["", "/about", "/contact", "/trip", "/destinations", "/blog"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: (path === "" || path === "/trip" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: priorities[path] ?? 0.3,
  }));

  // No per-tour/per-destination "last updated" timestamp exists in the data — omitting
  // lastModified (rather than stamping every URL with the build time) keeps the signal honest.
  const tourRoutes = tours.map((tour) => ({
    url: `${siteConfig.url}/trip/${tour.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const destinationRoutes = destinations.map((destination) => ({
    url: `${siteConfig.url}/destinations/${destination.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...tourRoutes, ...destinationRoutes, ...blogRoutes];
}
