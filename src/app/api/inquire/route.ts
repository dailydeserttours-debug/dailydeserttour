import { NextResponse } from "next/server";

interface InquiryPayload {
  trip?: string;
  name?: string;
  email?: string;
  country?: string;
  phone?: string;
  adults?: string;
  children?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as InquiryPayload | null;

  if (!body || !body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  // TODO: wire up a real email provider (e.g. Resend or Nodemailer) here once
  // credentials exist, and forward this payload to info@dailydeserttours.com.
  console.log("Trip inquiry submission:", body);

  return NextResponse.json({ ok: true });
}
