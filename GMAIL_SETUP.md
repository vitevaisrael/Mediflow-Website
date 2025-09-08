# Gmail Email Setup for MediFlow Contact Form

## Overview
The contact form has been updated to send emails directly to Gmail instead of using Resend. This setup uses Nodemailer with Gmail SMTP.

## Setup Steps

### 1. Create a Gmail App Password
1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "2-Step Verification" (enable if not already enabled)
3. Go to "App passwords" (under 2-Step Verification)
4. Select "Mail" as the app and "Other" as the device
5. Generate the app password and copy it

### 2. Create Environment File
Create a `.env` file in the root directory with:
```
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
PORT=8787
```

**Important:** Replace `your-gmail@gmail.com` with the Gmail address you want to send FROM, and `your-16-character-app-password` with the app password you generated.

### 3. Contact Form Configuration
The contact form will send emails to `vitevabygenore@gmail.com` (hidden from users), while displaying `contact@mediflow.io` as the public contact email.

## How It Works
- When someone submits the contact form, it sends an email to `vitevabygenore@gmail.com` (hidden from users)
- Users see `contact@mediflow.io` as the contact email throughout the website
- The email includes all form data (name, email, organization, phone, message)
- The reply-to field is set to the contact form submitter's email
- Emails are sent using your Gmail account via SMTP

## Security Notes
- Never commit your `.env` file to version control
- Use Gmail App Passwords, not your regular Gmail password
- The app password is 16 characters long
- Keep your app password secure

## Testing
1. Start the server: `npm run server`
2. Start the frontend: `npm run dev`
3. Submit a test contact form
4. Check `vitevabygenore@gmail.com` for the email (this is where form submissions go)
5. Users will see `contact@mediflow.io` displayed on the website

## Troubleshooting
- Ensure 2-Step Verification is enabled on your Gmail account
- Verify the app password is correct
- Check that the Gmail account has SMTP access enabled
- Ensure the `.env` file is in the correct location
