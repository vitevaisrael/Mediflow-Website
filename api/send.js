import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, organization, phone, message } = req.body || {};

    const sanitize = (value) =>
      sanitizeHtml(value ?? '', { allowedTags: [], allowedAttributes: {} });

    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanOrg = sanitize(organization);
    const cleanPhone = sanitize(phone);
    const cleanMessage = sanitize(message);

    // Validate required fields
    if (!email || !message || !name) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    const subject = `New contact from ${cleanName}${cleanOrg ? ' - ' + cleanOrg : ''}`;
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#0f172a;">
        <h2 style="margin:0 0 12px 0;">New Contact Request</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Organization:</strong> ${cleanOrg || '-'}
        <br/><strong>Phone:</strong> ${cleanPhone || '-'}</p>
        <p style="white-space:pre-wrap"><strong>Message:</strong><br/>${cleanMessage}</p>
      </div>
    `;

    const mailOptions = {
      from: `MediFlow Website <${process.env.GMAIL_USER}>`,
      to: process.env.TO_EMAIL || 'vitevabygenore@gmail.com',
      replyTo: cleanEmail,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error('Email sending error:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
}
