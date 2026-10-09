import { NextResponse } from "next/server";
import { contactInfo, siteConfig } from "@/data/site";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  tourInterest?: string;
  groupSize?: string;
  travelDates?: string;
  message?: string;
  company?: string; // honeypot — real visitors never see or fill this field
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots that fill hidden fields get a fake success with no processing.
  if (body.company?.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!body.firstName?.trim() || !body.lastName?.trim() || !body.email?.trim() || !body.message?.trim()) {
    return NextResponse.json(
      { ok: false, error: "First name, last name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(body.email.trim())) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", Referer: `${siteConfig.url}/contact` },
      body: JSON.stringify({
        _subject: `New website inquiry from ${body.firstName} ${body.lastName}`,
        "First name": body.firstName,
        "Last name": body.lastName,
        Email: body.email,
        "Tour interest": body.tourInterest || "Not specified",
        "Group size": body.groupSize || "Not specified",
        "Travel dates": body.travelDates || "Not specified",
        Message: body.message,
      }),
    });

    const result = await formSubmitResponse.json().catch(() => null);
    if (!formSubmitResponse.ok || result?.success === "false" || result?.success === false) {
      throw new Error(`FormSubmit rejected the request: ${JSON.stringify(result)}`);
    }
  } catch (err) {
    console.error("Contact form delivery failed:", err, body);
    return NextResponse.json(
      { ok: false, error: "Couldn't send your message right now. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
