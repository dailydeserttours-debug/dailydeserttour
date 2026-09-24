import type { Metadata } from "next";
import { MapPin, Mail, Phone, MessageCircle, Clock, Zap, CheckCircle2 } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { contactInfo, socialLinks, contactFaqs, siteConfig } from "@/data/site";

const trustPoints = [
  { icon: Zap, label: "We usually reply the same day" },
  { icon: MessageCircle, label: "WhatsApp is the fastest way to reach us" },
  { icon: CheckCircle2, label: "Free, no-obligation itinerary consultation" },
];

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Daily Desert Tours — address, phone, WhatsApp, office hours, and a contact form for planning your Morocco trip.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Daily Desert Tours",
          url: `${siteConfig.url}/contact`,
          mainEntity: { "@id": `${siteConfig.url}/#organization` },
        }}
      />

      <section className="bg-night-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-sand-200/90">
            Your gateway to authentic Moroccan desert adventures. We specialize in crafting unforgettable experiences
            that take you deep into the heart of Morocco.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />

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
          <ContactForm />
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-sand-200 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-night-800">Reach us directly</h2>
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
                <Phone className="h-5 w-5 shrink-0 text-terracotta-600" />
                <span>{contactInfo.secondaryPhone} <span className="text-night-400">(Spain)</span></span>
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
              Office Hours
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
            title="Daily Desert Tours office location"
            src={contactInfo.mapEmbedSrc}
            className="h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={contactFaqs} />
        </div>
      </section>
    </>
  );
}
