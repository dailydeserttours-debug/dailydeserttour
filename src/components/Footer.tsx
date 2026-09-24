import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon } from "@/components/SocialIcons";
import { contactInfo, socialLinks, footerLinks, siteConfig, navLinks } from "@/data/site";

const socialIcons: Record<string, typeof FacebookIcon> = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Pinterest: PinterestIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-night-700 bg-night-800 text-sand-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-sand-200/90">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.name] ?? MapPin;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-terracotta-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sand-300">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-200/90">
            {navLinks
              .filter((l, i, arr) => arr.findIndex((x) => x.href === l.href) === i)
              .map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sand-300">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-sand-200/90">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-400" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-terracotta-400" />
              <a href={contactInfo.phoneHref} className="hover:text-white">
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-terracotta-400" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-sand-300 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
