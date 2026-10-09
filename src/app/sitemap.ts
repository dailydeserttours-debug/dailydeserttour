import type { MetadataRoute } from "next";
import { tours, destinations } from "@/data/tours";
import { blogPosts } from "@/data/blog";
import { blogPostsIt } from "@/data/blog.it";
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
  // No Italian equivalent either, for the same reason.
  const staticPaths = ["", "/about", "/contact", "/trip", "/destinations", "/blog"];
  const staticRoutes = staticPaths.flatMap((path) => [
    {
      url: `${siteConfig.url}${path}`,
      changeFrequency: (path === "" || path === "/trip" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: priorities[path] ?? 0.3,
      alternates: { languages: { en: `${siteConfig.url}${path}`, it: `${siteConfig.url}/it${path}` } },
    },
    {
      url: `${siteConfig.url}/it${path}`,
      changeFrequency: (path === "" || path === "/trip" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: priorities[path] ?? 0.3,
      alternates: { languages: { en: `${siteConfig.url}${path}`, it: `${siteConfig.url}/it${path}` } },
    },
  ]);

  // No per-tour/per-destination "last updated" timestamp exists in the data — omitting
  // lastModified (rather than stamping every URL with the build time) keeps the signal honest.
  const tourRoutes = tours.flatMap((tour) => [
    {
      url: `${siteConfig.url}/trip/${tour.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: { en: `${siteConfig.url}/trip/${tour.slug}`, it: `${siteConfig.url}/it/trip/${tour.slug}` },
      },
    },
    {
      url: `${siteConfig.url}/it/trip/${tour.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: { en: `${siteConfig.url}/trip/${tour.slug}`, it: `${siteConfig.url}/it/trip/${tour.slug}` },
      },
    },
  ]);

  const destinationRoutes = destinations.flatMap((destination) => [
    {
      url: `${siteConfig.url}/destinations/${destination.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${siteConfig.url}/destinations/${destination.slug}`,
          it: `${siteConfig.url}/it/destinations/${destination.slug}`,
        },
      },
    },
    {
      url: `${siteConfig.url}/it/destinations/${destination.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${siteConfig.url}/destinations/${destination.slug}`,
          it: `${siteConfig.url}/it/destinations/${destination.slug}`,
        },
      },
    },
  ]);

  const blogRoutes = blogPosts.flatMap((post) => {
    const postIt = blogPostsIt.find((p) => p.slug === post.slug);
    return [
      {
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "yearly" as const,
        priority: 0.5,
        alternates: {
          languages: { en: `${siteConfig.url}/blog/${post.slug}`, it: `${siteConfig.url}/it/blog/${post.slug}` },
        },
      },
      ...(postIt
        ? [
            {
              url: `${siteConfig.url}/it/blog/${post.slug}`,
              lastModified: new Date(postIt.date),
              changeFrequency: "yearly" as const,
              priority: 0.5,
              alternates: {
                languages: {
                  en: `${siteConfig.url}/blog/${post.slug}`,
                  it: `${siteConfig.url}/it/blog/${post.slug}`,
                },
              },
            },
          ]
        : []),
    ];
  });

  return [...staticRoutes, ...tourRoutes, ...destinationRoutes, ...blogRoutes];
}
