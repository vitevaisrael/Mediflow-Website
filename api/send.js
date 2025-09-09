import nodemailer from 'nodemailer';

// Simple in-memory rate limiting
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max requests per window
const requests = new Map();

async function verifyCaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET || process.env.HCAPTCHA_SECRET;
  if (!secret) return true; // No CAPTCHA configured
  if (!token) return false;

  const verifyUrl = process.env.RECAPTCHA_SECRET
    ? 'https://www.google.com/recaptcha/api/siteverify'
    : 'https://hcaptcha.com/siteverify';

  const params = new URLSearchParams();
  params.append('secret', secret);
  params.append('response', token);

  try {
    const response = await fetch(verifyUrl, {
      method: 'POST',
      body: params,
    });
    const data = await response.json();
    return data.success;
  } catch (err) {
    console.error('CAPTCHA verification error:', err);
    return false;
  }
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, organization, phone, message, captchaToken } = req.body || {};

    // Rate limiting based on IP
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    const now = Date.now();
    const entry = requests.get(ip) || { count: 0, start: now };
    if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
      entry.count = 0;
      entry.start = now;
    }
    entry.count += 1;
    requests.set(ip, entry);

    if (entry.count > RATE_LIMIT_MAX) {
      return res.status(429).json({ ok: false, error: 'Rate limit exceeded. Please try again later.' });
    }

    // Verify CAPTCHA if configured
    const captchaOk = await verifyCaptcha(captchaToken);
    if (!captchaOk) {
      return res.status(400).json({ ok: false, error: 'CAPTCHA verification failed' });
    }

    // Validate required fields
    if (!email || !message || !name) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    // Simple sanitization function to prevent XSS
    const sanitize = (str) => {
      if (!str) return '';
      return str
        .trim()
        .replace(/[<>]/g, '') // Remove < and > characters
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .substring(0, 2000); // Limit length
    };

    // Sanitize all user inputs to prevent XSS
    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedOrganization = organization ? sanitize(organization) : '';
    const sanitizedPhone = phone ? sanitize(phone) : '';
    const sanitizedMessage = sanitize(message);

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

    // Use TO_EMAIL if set, otherwise fallback (with warning)
    const recipientEmail = process.env.TO_EMAIL || 'vitevabygenore@gmail.com';
    
    if (!process.env.TO_EMAIL) {
      console.warn('TO_EMAIL environment variable not set, using fallback email');
    }

    const mailOptions = {
      from: `MediFlow Website <${process.env.GMAIL_USER}>`,
      to: recipientEmail,
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
