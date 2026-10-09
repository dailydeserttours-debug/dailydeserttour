import type { Metadata } from "next";
import { MapPin, Mail, Phone, MessageCircle, Clock, Zap, CheckCircle2 } from "lucide-react";
import { ContactFormIt } from "./ContactFormIt";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { contactInfo, socialLinks, siteConfig } from "@/data/site";
import { contactFaqsIt } from "@/data/site.it";

const trustPoints = [
  { icon: Zap, label: "Di solito rispondiamo lo stesso giorno" },
  { icon: MessageCircle, label: "WhatsApp è il modo più veloce per contattarci" },
  { icon: CheckCircle2, label: "Consulenza gratuita e senza impegno sull'itinerario" },
];

export const metadata: Metadata = {
  title: "Contattaci",
  description:
    "Mettiti in contatto con Daily Desert Tours — indirizzo, telefono, WhatsApp, orari d'ufficio e un modulo di contatto per pianificare il tuo viaggio in Marocco.",
  alternates: { canonical: "/it/contact", languages: { en: "/contact", it: "/it/contact" } },
};

export default function ItContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contatta Daily Desert Tours",
          url: `${siteConfig.url}/it/contact`,
          mainEntity: { "@id": `${siteConfig.url}/#organization` },
          inLanguage: "it",
        }}
      />

      <section className="bg-night-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">Contattaci</h1>
          <p className="mt-4 text-sand-200/90">
            La tua porta d&rsquo;accesso ad autentiche avventure nel deserto marocchino. Siamo specializzati nel
            creare esperienze indimenticabili che ti portano nel cuore del Marocco.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Home", url: "/it" }, { name: "Contatti", url: "/it/contact" }]} />

      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point.label} className="flex items-center gap-3 rounded-2xl border border-sand-200 bg-white p-4">
              <point.icon className="h-5 w-5 shrink-0 text-terracotta-600" />
              <p className="text-sm font-medium text-night-700">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-3">
          <ContactFormIt />
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-sand-200 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-night-800">Contattaci direttamente</h2>
            <ul className="mt-4 space-y-4 text-sm text-night-700">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600" />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-terracotta-600" />
                <a href={contactInfo.phoneHref} className="hover:text-terracotta-700">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 shrink-0 text-terracotta-600" />
                <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-terracotta-700">
                  WhatsApp: {contactInfo.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-terracotta-600" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-terracotta-700">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-sand-200 bg-white p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-night-800">
              <Clock className="h-5 w-5 text-terracotta-600" />
              Orari d&rsquo;Ufficio
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-night-700">
              {contactInfo.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-3">
                  <span>{h.days}</span>
                  <span className="font-medium text-night-800">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-sand-300 px-4 py-2 text-xs font-semibold text-night-700 hover:border-terracotta-500 hover:text-terracotta-700"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-sand-200">
          <iframe
            title="Sede di Daily Desert Tours"
            src={contactInfo.mapEmbedSrc}
            className="h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={contactFaqsIt} heading="Domande Frequenti" />
        </div>
      </section>
    </>
  );
}
