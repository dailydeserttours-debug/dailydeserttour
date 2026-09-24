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
  const staticRoutes = ["", "/about", "/contact", "/trip", "/destinations", "/blog", "/privacy", "/terms"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: (path === "" || path === "/trip" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: priorities[path] ?? 0.3,
    }),
  );

  const tourRoutes = tours.map((tour) => ({
    url: `${siteConfig.url}/trip/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const destinationRoutes = destinations.map((destination) => ({
    url: `${siteConfig.url}/destinations/${destination.slug}`,
    lastModified: new Date(),
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
