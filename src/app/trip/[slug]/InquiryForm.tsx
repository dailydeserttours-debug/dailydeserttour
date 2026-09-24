"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-sand-300 bg-white px-3.5 py-2.5 text-sm text-night-800 placeholder:text-night-400 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20";
const labelClass = "mb-1.5 block text-xs font-medium text-night-700";

export function InquiryForm({ tripName }: { tripName: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
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
        <p className="font-display text-base font-semibold text-night-800">Inquiry sent!</p>
        <p className="text-sm text-night-600">We&rsquo;ll get back to you shortly with availability and pricing.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-2xl border border-sand-200 bg-white p-5">
      <input type="hidden" name="trip" value={tripName} />
      <div>
        <label className={labelClass}>Trip</label>
        <input value={tripName} disabled className={`${inputClass} bg-sand-50 text-night-500`} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="inq-name" className={labelClass}>Your Name</label>
          <input id="inq-name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-email" className={labelClass}>Your Email</label>
          <input id="inq-email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="inq-country" className={labelClass}>Country</label>
          <input id="inq-country" name="country" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-phone" className={labelClass}>Contact Number</label>
          <input id="inq-phone" name="phone" required className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="inq-adults" className={labelClass}>Adults</label>
          <input id="inq-adults" name="adults" type="number" min={1} defaultValue={2} required className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-children" className={labelClass}>Children</label>
          <input id="inq-children" name="children" type="number" min={0} defaultValue={0} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="inq-subject" className={labelClass}>Enquiry Subject</label>
        <input id="inq-subject" name="subject" required className={inputClass} defaultValue={`Inquiry: ${tripName}`} />
      </div>
      <div>
        <label htmlFor="inq-message" className={labelClass}>Your Message</label>
        <textarea id="inq-message" name="message" required rows={4} className={inputClass} placeholder="Preferred dates, group size, any special requests..." />
      </div>

      {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-700 disabled:opacity-70"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Send Inquiry
      </button>
    </form>
  );
}
