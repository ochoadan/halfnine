import nodemailer from 'nodemailer';

export async function POST(request: Request, response: Response) {
  const { email } = await request.json();

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
    to: 'diogamb@gmail.com',
    subject: `Newsletter Sub ${email}`,
    text: "Sent from: " + email,
    html: `<div>${email}</div>`,
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