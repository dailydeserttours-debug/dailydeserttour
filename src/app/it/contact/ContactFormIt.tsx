"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data/site";
import { toursIt } from "@/data/tours.it";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${contactInfo.email}`;

const baseInputClass =
  "w-full rounded-lg border bg-sand-50 px-4 py-2.5 text-sm text-night-800 placeholder:text-night-400 focus:outline-none focus:ring-2";
const validInputClass = "border-sand-200 focus:border-terracotta-500 focus:ring-terracotta-500/20";
const invalidInputClass = "border-red-400 focus:border-red-500 focus:ring-red-500/20";
const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-night-700";
const errorTextClass = "mt-1 text-xs text-red-600";

const NOT_SURE = "Non sono ancora sicuro — richiesta generica";
const tourInterests = [NOT_SURE, ...toursIt.map((tour) => tour.title)];
const groupSizes = ["Singolo (1)", "Coppia (2)", "Piccolo gruppo (3–5)", "Gruppo grande (6+)"];
const MESSAGE_MAX = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  tourInterest: string;
  groupSize: string;
  travelDates: string;
  message: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  tourInterest: NOT_SURE,
  groupSize: groupSizes[0],
  travelDates: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

function validateField(name: keyof FormValues, values: FormValues): string | undefined {
  switch (name) {
    case "firstName":
      return values.firstName.trim() ? undefined : "Inserisci il tuo nome.";
    case "lastName":
      return values.lastName.trim() ? undefined : "Inserisci il tuo cognome.";
    case "email":
      if (!values.email.trim()) return "Inserisci il tuo indirizzo email.";
      if (!EMAIL_PATTERN.test(values.email.trim())) return "Inserisci un indirizzo email valido.";
      return undefined;
    case "message":
      if (!values.message.trim()) return "Raccontaci qualcosa del tuo viaggio.";
      if (values.message.trim().length < 10) return "Il messaggio deve contenere almeno 10 caratteri.";
      return undefined;
    default:
      return undefined;
  }
}

function validateAll(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  (["firstName", "lastName", "email", "message"] as const).forEach((field) => {
    const error = validateField(field, values);
    if (error) errors[field] = error;
  });
  return errors;
}

export function ContactFormIt() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    const field = name as keyof FormValues;
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, nextValues) }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot — bots that autofill every field trip this hidden one; fake success, skip sending.
    const company = (new FormData(e.currentTarget).get("company") as string) ?? "";
    if (company.trim()) {
      setStatus("success");
      setValues(initialValues);
      setErrors({});
      return;
    }

    const fieldErrors = validateAll(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Nuova richiesta dal sito da ${values.firstName} ${values.lastName}`,
          Nome: values.firstName,
          Cognome: values.lastName,
          Email: values.email,
          "Tour di interesse": values.tourInterest,
          "Dimensione gruppo": values.groupSize,
          "Date di viaggio": values.travelDates || "Non specificate",
          Messaggio: values.message,
        }),
      });
      const result = (await res.json().catch(() => null)) as { success?: string | boolean } | null;
      if (!res.ok || result?.success === "false" || result?.success === false) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setValues(initialValues);
      setErrors({});
    } catch {
      setErrorMessage("");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-sand-200 bg-white p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-terracotta-600" />
        <p className="font-display text-lg font-semibold text-night-800">Messaggio inviato!</p>
        <p className="text-sm text-night-600">Grazie per averci contattato — di solito rispondiamo lo stesso giorno.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
        >
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-sand-200 bg-white p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold text-night-800">Invia una Richiesta</h2>

      {/* Honeypot — hidden from real visitors, left blank; bots that autofill every field trip it. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            Nome <span className="text-terracotta-600">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            maxLength={100}
            autoComplete="given-name"
            value={values.firstName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className={`${baseInputClass} ${errors.firstName ? invalidInputClass : validInputClass}`}
            placeholder="Nome"
          />
          {errors.firstName && <p id="firstName-error" className={errorTextClass}>{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Cognome <span className="text-terracotta-600">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            maxLength={100}
            autoComplete="family-name"
            value={values.lastName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className={`${baseInputClass} ${errors.lastName ? invalidInputClass : validInputClass}`}
            placeholder="Cognome"
          />
          {errors.lastName && <p id="lastName-error" className={errorTextClass}>{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Indirizzo Email <span className="text-terracotta-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${baseInputClass} ${errors.email ? invalidInputClass : validInputClass}`}
          placeholder="tuaemail@esempio.com"
        />
        {errors.email && <p id="email-error" className={errorTextClass}>{errors.email}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="tourInterest" className={labelClass}>
            Tour di Interesse
          </label>
          <select
            id="tourInterest"
            name="tourInterest"
            value={values.tourInterest}
            onChange={handleChange}
            className={`${baseInputClass} ${validInputClass}`}
          >
            {tourInterests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="groupSize" className={labelClass}>
            Dimensione del Gruppo
          </label>
          <select
            id="groupSize"
            name="groupSize"
            value={values.groupSize}
            onChange={handleChange}
            className={`${baseInputClass} ${validInputClass}`}
          >
            {groupSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="travelDates" className={labelClass}>
          Date di Viaggio Preferite
        </label>
        <input
          id="travelDates"
          name="travelDates"
          value={values.travelDates}
          onChange={handleChange}
          className={`${baseInputClass} ${validInputClass}`}
          placeholder="es. 15–22 marzo 2026"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="message" className={labelClass}>
            Il Tuo Messaggio <span className="text-terracotta-600">*</span>
          </label>
          <span className="mb-1.5 text-xs text-night-400">
            {values.message.length}/{MESSAGE_MAX}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={MESSAGE_MAX}
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${baseInputClass} ${errors.message ? invalidInputClass : validInputClass}`}
          placeholder="Raccontaci il tuo viaggio dei sogni in Marocco: cosa vorresti vedere, il tuo budget, eventuali richieste speciali..."
        />
        {errors.message && <p id="message-error" className={errorTextClass}>{errors.message}</p>}
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p className="text-sm text-red-600">
            {errorMessage || (
              <>
                Qualcosa è andato storto. Riprova oppure scrivici direttamente a{" "}
                <a href={`mailto:${contactInfo.email}`} className="font-medium underline">
                  {contactInfo.email}
                </a>
                .
              </>
            )}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-700 disabled:opacity-70"
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
          Invia Richiesta
        </button>
        <p className="text-center text-xs text-night-500">Di solito rispondiamo lo stesso giorno. Nessun pagamento richiesto per informazioni.</p>
      </div>
    </form>
  );
}
