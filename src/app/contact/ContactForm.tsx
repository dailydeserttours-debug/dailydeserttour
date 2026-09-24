"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-sand-300 bg-white px-4 py-2.5 text-sm text-night-800 placeholder:text-night-400 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20";
const labelClass = "mb-1.5 block text-sm font-medium text-night-700";

const reasons = ["General inquiry", "Planning a new trip", "An existing booking", "Something else"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !result?.ok) throw new Error(result?.error ?? "Request failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error && err.message !== "Request failed" ? err.message : "");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-sand-200 bg-white p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-terracotta-600" />
        <p className="font-display text-lg font-semibold text-night-800">Message sent!</p>
        <p className="text-sm text-night-600">Thanks for reaching out — we usually reply the same day.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-sand-200 bg-white p-6 sm:p-8">
      {/* Honeypot — hidden from real visitors, left blank; bots that autofill every field trip it. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-terracotta-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-terracotta-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone or WhatsApp
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input id="country" name="country" autoComplete="country-name" className={inputClass} placeholder="Your country" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reason" className={labelClass}>
            Reason for contact
          </label>
          <select id="reason" name="reason" defaultValue={reasons[0]} className={inputClass}>
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="subject" className={labelClass}>
            Subject <span className="text-terracotta-600">*</span>
          </label>
          <input id="subject" name="subject" required maxLength={150} className={inputClass} placeholder="How can we help?" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-terracotta-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          className={inputClass}
          placeholder="Tell us about your trip..."
        />
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p className="text-sm text-red-600">
            {errorMessage || "Something went wrong. Please try again or email us directly."}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-700 disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Send Message
      </button>
    </form>
  );
}
