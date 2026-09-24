"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, contactInfo } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/70 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-terracotta-600 ${
                isActive(link.href) ? "text-terracotta-600" : "text-night-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={contactInfo.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-night-700 hover:text-terracotta-600"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {contactInfo.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-terracotta-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-700"
          >
            Plan My Trip
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-night-800 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sand-200 bg-sand-50 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-base font-medium hover:bg-sand-100 ${
                  isActive(link.href) ? "text-terracotta-600" : "text-night-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-terracotta-600 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Plan My Trip
          </Link>
        </div>
      )}
    </header>
  );
}
