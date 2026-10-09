import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/site";
import { uiText, type Locale } from "@/data/i18n";

export function WhatsAppButton({ lang = "en" }: { lang?: Locale }) {
  return (
    <a
      href={contactInfo.whatsappHref}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={uiText[lang].whatsapp.chatWithUs}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </a>
  );
}
