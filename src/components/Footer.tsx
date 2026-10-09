import Link from "next/link";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon } from "@/components/SocialIcons";
import { contactInfo, socialLinks, footerLinks, siteConfig } from "@/data/site";
import { destinations, getFeaturedTours } from "@/data/tours";
import { uiText, localizeHref, type Locale } from "@/data/i18n";

const socialIcons: Record<string, typeof FacebookIcon> = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Pinterest: PinterestIcon,
};

const topDestinations = destinations;
const featuredTours = getFeaturedTours(4);

export function Footer({ lang = "en" }: { lang?: Locale }) {
  const t = uiText[lang];
  const loc = (href: string) => localizeHref(href, lang);
  return (
    <footer className="border-t border-night-700 bg-night-800 text-sand-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="max-w-xs">
          <p className="font-display text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-4 font-display text-xl font-semibold leading-snug text-white">{siteConfig.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-sand-200/90">
            {t.footer.departingPrefix}{" "}
            {topDestinations.slice(0, 4).map((destination, i) => (
              <span key={destination.slug}>
                {i > 0 && (i === Math.min(3, topDestinations.length - 1) ? t.footer.and : ", ")}
                <Link href={loc(`/destinations/${destination.slug}`)} className="font-semibold text-white hover:text-terracotta-300">
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
          <p className="text-sm font-semibold text-white">{t.footer.planATrip}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-200/90">
            {featuredTours.map((tour) => (
              <li key={tour.slug}>
                <Link href={loc(`/trip/${tour.slug}`)} className="block truncate hover:text-white">
                  {tour.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href={loc("/trip")} className="font-semibold text-terracotta-400 hover:text-terracotta-300">
                {t.footer.allTours}
              </Link>
            </li>
            <li>
              <Link href={loc("/contact")} className="hover:text-white">
                {t.footer.fullyCustomItinerary}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">{t.footer.destinationsHeading}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-200/90">
            {topDestinations.map((destination) => (
              <li key={destination.slug}>
                <Link href={loc(`/destinations/${destination.slug}`)} className="hover:text-white">
                  {destination.city}
                </Link>
              </li>
            ))}
            <li>
              <Link href={loc("/destinations")} className="font-semibold text-terracotta-400 hover:text-terracotta-300">
                {t.footer.allDestinations}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">{t.footer.company}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-200/90">
            <li>
              <Link href={loc("/about")} className="hover:text-white">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href={loc("/blog")} className="hover:text-white">
                {t.nav.blog}
              </Link>
            </li>
            <li>
              <Link href={loc("/contact")} className="hover:text-white">
                {t.nav.contact}
              </Link>
            </li>
            {footerLinks.map((link) => (
              <li key={link.key}>
                <Link href={loc(link.href)} className="hover:text-white">
                  {t.footerLinks[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-sand-200/90">
            <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer noopener" className="flex items-center gap-2 hover:text-white">
              <MessageCircle className="h-4 w-4 text-terracotta-400" />
              {contactInfo.whatsapp}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 text-terracotta-400" />
              {contactInfo.email}
            </a>
          </div>
          <Link
            href={loc("/contact")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-700"
          >
            {t.footer.startPlanningMyTrip}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-sand-300 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.allRightsReserved}
          </p>
          <p>{t.footer.basedIn}</p>
        </div>
      </div>
    </footer>
  );
}
