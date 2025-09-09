import nodemailer from 'nodemailer';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, organization, phone, message } = req.body || {};

    // Validate required fields
    if (!email || !message || !name) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    // Create DOMPurify instance for server-side sanitization
    const window = new JSDOM('').window;
    const purify = DOMPurify(window);

    // Sanitize all user inputs to prevent XSS
    const sanitizedName = purify.sanitize(name.trim());
    const sanitizedEmail = purify.sanitize(email.trim());
    const sanitizedOrganization = organization ? purify.sanitize(organization.trim()) : '';
    const sanitizedPhone = phone ? purify.sanitize(phone.trim()) : '';
    const sanitizedMessage = purify.sanitize(message.trim());

    // Additional validation
    if (sanitizedName.length > 100 || sanitizedEmail.length > 100 || 
        sanitizedOrganization.length > 100 || sanitizedPhone.length > 20 || 
        sanitizedMessage.length > 2000) {
      return res.status(400).json({ ok: false, error: 'Input too long' });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return res.status(400).json({ ok: false, error: 'Invalid email format' });
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    const subject = `New contact from ${sanitizedName}${sanitizedOrganization ? ' - ' + sanitizedOrganization : ''}`;
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#0f172a;">
        <h2 style="margin:0 0 12px 0;">New Contact Request</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Organization:</strong> ${sanitizedOrganization || '-'}
        <br/><strong>Phone:</strong> ${sanitizedPhone || '-'}</p>
        <p style="white-space:pre-wrap"><strong>Message:</strong><br/>${sanitizedMessage}</p>
      </div>
    `;

    // Ensure TO_EMAIL is set
    if (!process.env.TO_EMAIL) {
      return res.status(500).json({ ok: false, error: 'Email configuration missing' });
    }

    const mailOptions = {
      from: `MediFlow Website <${process.env.GMAIL_USER}>`,
      to: process.env.TO_EMAIL,
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
