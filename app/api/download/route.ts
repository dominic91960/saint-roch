import { ReactNode } from "react";
import { NextResponse } from "next/server";

import { Resend } from "resend";

import DownloadMessage from "@/emails/DownloadMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, companyName, email, phoneNumber, catalog } = await req.json();
    const emailContent = DownloadMessage({
      name,
      companyName,
      email,
      phoneNumber,
      catalog,
    });
    const res = await resend.emails.send({
      from: process.env.RESEND_DOMAIN ?? "",
      to: process.env.RESEND_TO ?? "",
      subject: "New Catalog Download",
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
