import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Legacy WordPress blog posts lived at the domain root; the new site nests them under /blog/.
      {
        source: "/explore-the-best-of-morocco-top-tours-for-every-type-of-traveler",
        destination: "/blog/explore-the-best-of-morocco-top-tours-for-every-type-of-traveler",
        permanent: true,
      },
      {
        source: "/15-things-to-do-in-marrakech-and-around",
        destination: "/blog/15-things-to-do-in-marrakech-and-around",
        permanent: true,
      },
      // No matching post on the new site for this slug — send to the blog index rather than 404.
      {
        source: "/10-sun-hats-for-beach-days-long-hikes-and-everything-in-between",
        destination: "/blog",
        permanent: true,
      },

      // Legacy page slugs.
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
      { source: "/terms-and-conditions-2", destination: "/terms", permanent: true },
      { source: "/destination", destination: "/destinations", permanent: true },

      // Old WP Travel Engine / theme-demo pages with no new-site equivalent — send to the closest section.
      { source: "/trip-types", destination: "/trip", permanent: true },
      { source: "/trip-types-2", destination: "/trip", permanent: true },
      { source: "/trip-search-result", destination: "/trip", permanent: true },
      { source: "/trip-search-result-2", destination: "/trip", permanent: true },
      { source: "/search-result", destination: "/trip", permanent: true },
      { source: "/activities", destination: "/trip", permanent: true },
      { source: "/activities-2", destination: "/trip", permanent: true },

      { source: "/travellers-information", destination: "/about", permanent: true },
      { source: "/travellers-information-2", destination: "/about", permanent: true },

      { source: "/enquiry-thank-you-page", destination: "/contact", permanent: true },
      { source: "/enquiry-thank-you-page-2", destination: "/contact", permanent: true },
      { source: "/thank-you", destination: "/contact", permanent: true },
      { source: "/thank-you-2", destination: "/contact", permanent: true },

      { source: "/home-01", destination: "/", permanent: true },
      { source: "/home-02", destination: "/", permanent: true },
      { source: "/home-04", destination: "/", permanent: true },
      { source: "/home-05", destination: "/", permanent: true },

      { source: "/wp-travel-engine-checkout", destination: "/", permanent: true },
      { source: "/wp-travel-engine-checkout-2", destination: "/", permanent: true },
      { source: "/wp-travel-engine-cart", destination: "/", permanent: true },
      { source: "/wp-travel-engine-cart-2", destination: "/", permanent: true },
      { source: "/checkout", destination: "/", permanent: true },
      { source: "/my-account", destination: "/", permanent: true },
      { source: "/my-account-2", destination: "/", permanent: true },
      { source: "/wishlist", destination: "/", permanent: true },
      { source: "/wishlist-2", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
