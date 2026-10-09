"use client";

import { ArrowUp } from "lucide-react";
import { useSyncExternalStore } from "react";
import { uiText, type Locale } from "@/data/i18n";

const SCROLL_THRESHOLD = 480;

function subscribe(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getSnapshot() {
  return window.scrollY > SCROLL_THRESHOLD;
}

function getServerSnapshot() {
  return false;
}

export function ScrollToTopButton({ lang = "en" }: { lang?: Locale }) {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={uiText[lang].scrollTop.backToTop}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-24 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-sand-300 bg-white text-night-700 shadow-lg shadow-black/10 transition-all duration-200 hover:bg-sand-50 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
