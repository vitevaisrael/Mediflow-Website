import nodemailer from 'nodemailer';
import validator from 'validator';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, organization, phone, message } = req.body || {};

    // Validate and sanitize inputs
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ ok: false, error: 'Invalid email' });
    }
    if (!name || validator.isEmpty(name.trim())) {
      return res.status(400).json({ ok: false, error: 'Invalid name' });
    }
    if (!message || validator.isEmpty(message.trim())) {
      return res.status(400).json({ ok: false, error: 'Invalid message' });
    }
    if (phone && !validator.isMobilePhone(phone, 'any')) {
      return res.status(400).json({ ok: false, error: 'Invalid phone' });
    }

    const normalizedEmail = validator.normalizeEmail(email);
    const sanitizedEmail = validator.escape(normalizedEmail || email);
    const sanitizedName = validator.escape(name.trim());
    const sanitizedOrg = organization ? validator.escape(organization.trim()) : '';
    const sanitizedPhone = phone ? validator.escape(phone.trim()) : '';
    const sanitizedMessage = validator.escape(message.trim());

    const recipient = process.env.TO_EMAIL;
    if (!recipient) {
      return res.status(500).json({ ok: false, error: 'Email recipient not configured' });
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    const subject = `New contact from ${sanitizedName}${sanitizedOrg ? ' - ' + sanitizedOrg : ''}`;
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#0f172a;">
        <h2 style="margin:0 0 12px 0;">New Contact Request</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Organization:</strong> ${sanitizedOrg || '-'}
        <br/><strong>Phone:</strong> ${sanitizedPhone || '-'}</p>
        <p style="white-space:pre-wrap"><strong>Message:</strong><br/>${sanitizedMessage}</p>
      </div>
    `;

    const mailOptions = {
      from: `MediFlow Website <${process.env.GMAIL_USER}>`,
      to: recipient,
      replyTo: sanitizedEmail,
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
