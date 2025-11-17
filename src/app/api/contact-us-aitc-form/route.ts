import { ContactUsAITCFormData, ContactUsAITCFormSchema } from "@/validators/conatcUsAITC.schema";
import { NextRequest, NextResponse } from "next/server";
import { createTransport, SendMailOptions } from "nodemailer";
import { contactUsAITCEmailTemplate } from "./contactUsAITCEmailTemplate";

interface NodemailerError extends Error {
  code?: string;
  command?: string;
}

const transporter = createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify(function (error) {
  if (error) {
    console.error("SMTP configuration error:", error);
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

export async function POST(request: NextRequest) {
  try {
    const body: ContactUsAITCFormData = await request.json();
    const { name, companyName, inquiryMessage, email, phone } = body;

    ContactUsAITCFormSchema.parse(body);

    const mailOptions : SendMailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New AITC Contact Form Submission from ${name}`,
      html: contactUsAITCEmailTemplate({
        name,
        companyName,
        inquiryMessage,
        email,
        phone,
      }),
      replyTo: email,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully", success: true },
      { status: 200 }
    );
  } catch (err) {
    // Type assertion for the error
    const error = err as NodemailerError;
    // Detailed error logging
    console.error("Contact form error details:", {
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack,
    });
    let errorMessage = "Failed to send email. Please try again later.";
    if (error.code === "EAUTH") {
      errorMessage =
        "Email authentication failed. Please contact the administrator.";
    } else if (error.code === "ESOCKET") {
      errorMessage =
        "Could not connect to email server. Please try again later.";
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
