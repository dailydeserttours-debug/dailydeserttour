import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  reason?: string;
  subject?: string;
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

  if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(body.email.trim())) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  // TODO: wire up a real email provider (e.g. Resend or Nodemailer) here once
  // credentials exist, and forward this payload to info@dailydeserttours.com.
  console.log("Contact form submission:", body);

  return NextResponse.json({ ok: true });
}
