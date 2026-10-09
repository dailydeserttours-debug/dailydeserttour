import { NextResponse } from "next/server";
import { contactInfo, siteConfig } from "@/data/site";

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

  try {
    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", Referer: `${siteConfig.url}/trip` },
      body: JSON.stringify({
        _subject: body.subject || `New trip inquiry: ${body.trip || "General"}`,
        Trip: body.trip || "Not specified",
        Name: body.name,
        Email: body.email,
        Country: body.country || "Not specified",
        Phone: body.phone || "Not specified",
        Adults: body.adults || "Not specified",
        Children: body.children || "Not specified",
        Message: body.message,
      }),
    });

    const result = await formSubmitResponse.json().catch(() => null);
    if (!formSubmitResponse.ok || result?.success === "false" || result?.success === false) {
      throw new Error(`FormSubmit rejected the request: ${JSON.stringify(result)}`);
    }
  } catch (err) {
    console.error("Trip inquiry delivery failed:", err, body);
    return NextResponse.json(
      { ok: false, error: "Couldn't send your inquiry right now. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
