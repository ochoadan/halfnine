import type { TurnstileServerValidationResponse } from "@marsidev/react-turnstile";
import nodemailer from 'nodemailer';

const verifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const secret = process.env.TURNSTILE_KEY || '0x4AAAAAAAEUIZr0ccnKjH16';

export async function POST(request: Request) {
  const { token } = (await request.json()) as { token: string };

  const res = await fetch(verifyEndpoint, {
    method: "POST",
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });

  const data = (await res.json()) as TurnstileServerValidationResponse;

  if (data.success) {
    // If Turnstile validation is successful, send an email
    const body = await request.json();
    const { name, email, phone, company, message } = body;
    const senderIp = request.headers.get('x-forwarded-for');
    const userAgent = request.headers.get('user-agent');
    const referrer = request.headers.get('referer');

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailOptions = {
      from: 'contactform@halfnine.com',
      to: 'diogamb@gmail.com',
      subject: `Message From ${name}`,
      text: message + " | Sent from: " + email,
      html: `<div>${message}</div><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Company: ${company}</p><p>IP: ${senderIp}</p><p>User Agent: ${userAgent}</p><p>Referrer: ${referrer}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return new Response(JSON.stringify({ status: 'success' }), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ status: 'error', error }), {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      });
    }
  } else {
    return new Response(JSON.stringify(data), {
      status: data.success ? 200 : 400,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
