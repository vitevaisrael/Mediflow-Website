# MediFlow Website

A modern, responsive healthcare technology website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Built with Tailwind CSS and Framer Motion animations
- **Contact Form**: Integrated email functionality via Vercel serverless functions
- **Spam Protection**: Rate limiting and optional CAPTCHA verification
- **Solution Pages**: Dedicated pages for each healthcare solution
- **SEO Optimized**: React Helmet for meta tags and SEO

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Email**: Nodemailer with Gmail

## 📁 Project Structure

```
├── api/                    # Vercel serverless functions
│   └── send.js            # Email sending endpoint
├── public/                # Static assets
│   └── favicon.png       # Website favicon
├── src/
│   ├── components/        # Reusable React components
│   │   ├── ui/           # UI component library
│   │   ├── About.jsx     # About section
│   │   ├── Contact.jsx   # Contact form
│   │   ├── Footer.jsx    # Footer component
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Hero.jsx      # Hero section
│   │   └── Solutions.jsx # Solutions showcase
│   ├── pages/            # Page components
│   │   └── solutions/    # Solution detail pages
│   ├── assets/           # Images and assets
│   ├── lib/              # Utility functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── GMAIL_SETUP.md        # Email setup instructions
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vitevaisrael/Mediflow-Website.git
cd Mediflow-Website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (for local development):
```bash
cp .env.example .env
# Edit .env with your Gmail credentials
```

4. Start development server:
```bash
npm run dev
```

## 📧 Email Configuration

The contact form uses Gmail App Passwords for sending emails. See `GMAIL_SETUP.md` for detailed setup instructions.

### Environment Variables

For production (Vercel), set these environment variables:
- `GMAIL_USER`: Your Gmail address
- `GMAIL_APP_PASSWORD`: Your Gmail App Password (16 characters)
- `TO_EMAIL`: Email address to receive contact form submissions
- `RECAPTCHA_SECRET` or `HCAPTCHA_SECRET` (optional): CAPTCHA verification secrets

## 🚀 Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Colors and Styling
- Edit `tailwind.config.js` for theme customization
- Modify `src/index.css` for global styles

### Content
- Update component files in `src/components/` for content changes
- Modify solution pages in `src/pages/solutions/`

## 📄 License

This project is private and proprietary to MediFlow.

## 🤝 Support

For support or questions, contact the development team.
