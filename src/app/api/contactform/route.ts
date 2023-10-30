import nodemailer from 'nodemailer';

export async function POST(request: Request, response: Response) {
  const { name, email, phone, company, message } = await request.json();

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
    from: 'contact-form@halfnine.com',
    to: "dan@halfnine.tech",
    subject: `Message From ${name}`,
    text: message + " | Sent from: " + email,
    html: `<div>Message: ${message}</div><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Company: ${company}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Success', {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response('Error', {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}