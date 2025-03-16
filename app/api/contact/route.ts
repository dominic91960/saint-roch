import { ReactNode } from "react";
import { NextResponse } from "next/server";

import { Resend } from "resend";

import ContactMessage from "@/emails/ContactMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, companyName, email, phoneNumber, discoveryMedium, message } =
      await req.json();
    const emailContent = ContactMessage({
      name,
      companyName,
      email,
      phoneNumber,
      discoveryMedium,
      message,
    });
    const res = await resend.emails.send({
      from: process.env.RESEND_DOMAIN ?? "",
      to: process.env.RESEND_TO ?? "",
      subject: "New Contact Us Form Submission",
      react: emailContent as ReactNode,
    });
    if (res.error)
      return NextResponse.json(
        {
          message: res.error.message,
        },
        { status: 400 },
      );
    return NextResponse.json(
      {
        message: "Message sent successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    return NextResponse.json(
      {
        message: errorMessage,
      },
      { status: 500 },
    );
  }
}
