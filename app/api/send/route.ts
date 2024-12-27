import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server"; // Next.js özel türler

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message } = await req.json(); // Request'in JSON verisini ayrıştırma
    console.log(email, subject, message);

    if (!fromEmail) {
      return NextResponse.json({ error: "From email is required" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: `Mail Geldi <onboarding@resend.dev>`,
      to: [email],
      subject: subject,
      html: `<p>Message: ${message}</p><p>Subject: ${subject}</p><p>Email: ${email}</p>`,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("An error occurred:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
