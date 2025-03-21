import nodemailer from "nodemailer";

export async function POST(request: Request, response: Response) {
  const { name, email, company, message } = await request.json();

  let transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASS,
    },
  });

  let mailOptions = {
    from: "ping@notifications.halfnine.com",
    to: ["diogamb@gmail.com", "contact@halfnine.com"],
    subject: `Message From ${name} to Halfnine`,
    text: message + " | Sent from: " + email,
    html: `
      <div>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      </div>
    `,
  };

  function escapeHtml(text: string): string {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
