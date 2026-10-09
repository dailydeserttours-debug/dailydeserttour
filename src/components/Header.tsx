"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Languages } from "lucide-react";
import { navLinks } from "@/data/site";
import { uiText, localizeHref, type Locale } from "@/data/i18n";

function otherLocalePath(pathname: string, lang: Locale): string {
  if (lang === "en") {
    return pathname === "/" ? "/it" : `/it${pathname}`;
  }
  const stripped = pathname.replace(/^\/it/, "");
  return stripped === "" ? "/" : stripped;
}

export function Header({ lang = "en" }: { lang?: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = uiText[lang];
  const home = localizeHref("/", lang);
  const contactHref = localizeHref("/contact", lang);
  const isActive = (href: string) => (href === home ? pathname === home : pathname.startsWith(href));
  const switchHref = otherLocalePath(pathname, lang);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/70 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={home} className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Daily Desert Tours"
            width={1600}
            height={206}
            preload
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const href = localizeHref(link.href, lang);
            return (
              <Link
                key={link.href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-terracotta-600 ${
                  isActive(href) ? "text-terracotta-600" : "text-night-700"
                }`}
              >
                {t.nav[link.key]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={switchHref}
            className="flex items-center gap-1.5 text-sm font-medium text-night-600 hover:text-terracotta-600"
            aria-label={lang === "en" ? "Passa all'italiano" : "Switch to English"}
          >
            <Languages className="h-4 w-4" />
            {lang === "en" ? "IT" : "EN"}
          </Link>
          <Link
            href={contactHref}
            className="rounded-full bg-terracotta-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-700"
          >
            {t.header.planMyTrip}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-night-800 lg:hidden"
          aria-label={open ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sand-200 bg-sand-50 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const href = localizeHref(link.href, lang);
              return (
                <Link
                  key={link.href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium hover:bg-sand-100 ${
                    isActive(href) ? "text-terracotta-600" : "text-night-800"
                  }`}
                >
                  {t.nav[link.key]}
                </Link>
              );
            })}
            <Link
              href={switchHref}
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-base font-medium text-night-800 hover:bg-sand-100"
            >
              <Languages className="h-4 w-4" />
              {lang === "en" ? "Italiano" : "English"}
            </Link>
          </nav>
          <Link
            href={contactHref}
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-terracotta-600 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            {t.header.planMyTrip}
          </Link>
        </div>
      )}
    </header>
  );
}
