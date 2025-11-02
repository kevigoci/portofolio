# EmailJS Setup Instructions

To make your contact form send emails to kevigoci13@gmail.com, follow these steps:

## 1. Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (kevigoci13@gmail.com)
5. Copy the "Service ID" (looks like: service_xxxxxxx)

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Body:**

```
Hello Klevin,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and copy the "Template ID" (looks like: template_xxxxxxx)

## 4. Get Public Key

1. Go to "Account" > "General"
2. Copy your "Public Key" (looks like: a long string of characters)

## 5. Update Environment Variables

Update your `.env.local` file with the actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Form

1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Click "Send Message"
4. Check your Gmail inbox for the email

## 7. Deploy with Environment Variables

When deploying to production (Vercel, Netlify, etc.), make sure to add these environment variables to your hosting platform's environment settings.

## Security Notes

- The EmailJS public key is safe to expose in client-side code
- EmailJS has rate limiting to prevent abuse
- Your actual Gmail credentials are never exposed

## Free Tier Limits

- EmailJS free tier allows 200 emails per month
- Perfect for a portfolio contact form

That's it! Your contact form will now send emails directly to kevigoci13@gmail.com 🎉
