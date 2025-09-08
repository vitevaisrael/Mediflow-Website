import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Create Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD // Gmail App Password (not regular password)
  }
});

app.post('/api/send', async (req, res) => {
  try {
    const { name, email, organization, phone, message } = req.body || {};

    if (!email || !message || !name) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    const subject = `New contact from ${name}${organization ? ' - ' + organization : ''}`;
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#0f172a;">
        <h2 style="margin:0 0 12px 0;">New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || '-'}
        <br/><strong>Phone:</strong> ${phone || '-'}</p>
        <p style="white-space:pre-wrap"><strong>Message:</strong><br/>${message}</p>
      </div>
    `;

    const mailOptions = {
      from: `MediFlow Website <${process.env.GMAIL_USER}>`, // From your Gmail but branded
      to: 'vitevabygenore@gmail.com', // To your specified Gmail address (hidden from users)
      replyTo: email, // Reply-to the contact form email
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return res.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

const port = process.env.PORT || 8787;
app.listen(port, () => {
  console.log(`MediFlow email server running on http://localhost:${port}`);
});


