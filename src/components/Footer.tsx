import Link from "next/link";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon } from "@/components/SocialIcons";
import { contactInfo, socialLinks, footerLinks, siteConfig } from "@/data/site";
import { destinations, getFeaturedTours } from "@/data/tours";

const socialIcons: Record<string, typeof FacebookIcon> = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Pinterest: PinterestIcon,
};

const topDestinations = destinations.slice(0, 5);
const featuredTours = getFeaturedTours(4);

export function Footer() {
  return (
    <footer className="border-t border-night-700 bg-night-800 text-sand-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="max-w-xs">
          <p className="font-display text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-4 font-display text-xl font-semibold leading-snug text-white">{siteConfig.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-sand-200/90">
            Private tours, tailor-made around your pace, departing{" "}
            {topDestinations.slice(0, 4).map((destination, i) => (
              <span key={destination.slug}>
                {i > 0 && (i === Math.min(3, topDestinations.length - 1) ? " and " : ", ")}
                <Link href={`/destinations/${destination.slug}`} className="font-semibold text-white hover:text-terracotta-300">
                  {destination.city}
                </Link>
              </span>
            ))}
            .
          </p>

          <div className="mt-5 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.name] ?? MessageCircle;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-terracotta-600"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Plan a Trip</p>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-200/90">
            {featuredTours.map((tour) => (
              <li key={tour.slug}>
                <Link href={`/trip/${tour.slug}`} className="block truncate hover:text-white">
                  {tour.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/trip" className="font-semibold text-terracotta-400 hover:text-terracotta-300">
                All tours
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Fully custom itinerary
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Destinations</p>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-200/90">
            {topDestinations.map((destination) => (
              <li key={destination.slug}>
                <Link href={`/destinations/${destination.slug}`} className="hover:text-white">
                  {destination.city}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/destinations" className="font-semibold text-terracotta-400 hover:text-terracotta-300">
                All destinations
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-200/90">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-sand-200/90">
            <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
              <MessageCircle className="h-4 w-4 text-terracotta-400" />
              {contactInfo.whatsapp}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 text-terracotta-400" />
              {contactInfo.email}
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-700"
          >
            Start planning my trip
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-sand-300 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Based in Fès, Morocco — planning trips worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
