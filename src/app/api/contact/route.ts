import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.NEXT_PUBLIC_NODEMAILER_HOST,
      port: Number(process.env.NEXT_PUBLIC_NODEMAILER_PORT),
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_USER,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
      },
    });

    const mailData = {
      from: process.env.NEXT_PUBLIC_NODEMAILER_FROM,
      to: process.env.NEXT_PUBLIC_NODEMAILER_USER,
      subject: `Portfolio Contact: ${subject}`,
      text: message,
      html: `
       <!DOCTYPE html>
        <html>
          <head>
            <style>
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                font-family: Arial, sans-serif;
                line-height: 1.6;
              }
              .header {
                background: #1e40af;
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #ffffff;
                padding: 20px;
                border: 1px solid #e5e7eb;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 16px;
                padding: 12px;
                background: #f9fafb;
                border-radius: 6px;
              }
              .label {
                color: #4b5563;
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 4px;
              }
              .value {
                color: #111827;
                font-size: 16px;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                font-size: 14px;
                color: #6b7280;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">
                <h2 style="margin:0;font-size:24px;">New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value">${message}</div>
                </div>
                <div class="footer">
                  Sent from your portfolio contact form
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json(
      { statusCode: 200, message: "Email sent successfully",data:null },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
