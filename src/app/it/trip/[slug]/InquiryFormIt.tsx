"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { contactInfo } from "@/data/site";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${contactInfo.email}`;

const inputClass =
  "w-full rounded-lg border border-sand-300 bg-white px-3.5 py-2.5 text-sm text-night-800 placeholder:text-night-400 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20";
const labelClass = "mb-1.5 block text-xs font-medium text-night-700";

export function InquiryFormIt({ tripName }: { tripName: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Nuova richiesta di viaggio: ${data.trip || "Generale"} — ${data.subject || ""}`,
          Viaggio: data.trip || "Non specificato",
          Nome: data.name,
          Email: data.email,
          Paese: data.country || "Non specificato",
          Telefono: data.phone || "Non specificato",
          Adulti: data.adults || "Non specificato",
          Bambini: data.children || "Non specificato",
          Messaggio: data.message,
        }),
      });
      const result = (await res.json().catch(() => null)) as { success?: string | boolean } | null;
      if (!res.ok || result?.success === "false" || result?.success === false) {
        throw new Error("Request failed");
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-sand-200 bg-white p-8 text-center">
        <CheckCircle2 className="h-9 w-9 text-terracotta-600" />
        <p className="font-display text-base font-semibold text-night-800">Richiesta inviata!</p>
        <p className="text-sm text-night-600">Ti risponderemo a breve con disponibilità e prezzi.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-2xl border border-sand-200 bg-white p-5">
      <input type="hidden" name="trip" value={tripName} />
      <div>
        <label className={labelClass}>Viaggio</label>
        <input value={tripName} disabled className={`${inputClass} bg-sand-50 text-night-500`} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="inq-name" className={labelClass}>Il tuo nome</label>
          <input id="inq-name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-email" className={labelClass}>La tua email</label>
          <input id="inq-email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="inq-country" className={labelClass}>Paese</label>
          <input id="inq-country" name="country" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-phone" className={labelClass}>Numero di contatto</label>
          <input id="inq-phone" name="phone" required className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="inq-adults" className={labelClass}>Adulti</label>
          <input id="inq-adults" name="adults" type="number" min={1} defaultValue={2} required className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-children" className={labelClass}>Bambini</label>
          <input id="inq-children" name="children" type="number" min={0} defaultValue={0} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="inq-subject" className={labelClass}>Oggetto della richiesta</label>
        <input id="inq-subject" name="subject" required className={inputClass} defaultValue={`Richiesta: ${tripName}`} />
      </div>
      <div>
        <label htmlFor="inq-message" className={labelClass}>Il tuo messaggio</label>
        <textarea id="inq-message" name="message" required rows={4} className={inputClass} placeholder="Date preferite, dimensione del gruppo, richieste speciali..." />
      </div>

      {status === "error" && <p className="text-sm text-red-600">Qualcosa è andato storto. Riprova.</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-700 disabled:opacity-70"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Invia Richiesta
      </button>
    </form>
  );
}
