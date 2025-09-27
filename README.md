# Vyria - Language Learning App Landing Page

A modern, minimalist landing page for Vyria - an AI-powered language learning mobile app with integrated waitlist system.

## 🚀 Deployment

This repository contains both the frontend (Netlify) and backend (Render) for the Vyria waitlist system.

### Frontend (Netlify)
- Automatically deploys from the root directory
- Live at: [Your Netlify URL]
- Built with Next.js, TypeScript, and Tailwind CSS

### Backend (Render)
- Deploys from the `/server` directory
- Provides waitlist API endpoints
- Built with Express and SQLite

## 📁 Project Structure

```
vyria-web/
├── app/                  # Next.js app directory
├── components/           # React components
├── public/              # Static assets (including vyria.png)
├── server/              # Backend API (for Render)
│   ├── index.js        # Express server
│   ├── package.json    # Backend dependencies
│   └── README.md       # Backend documentation
├── .env.local          # Local environment variables
├── .env.production     # Production environment variables
├── netlify.toml        # Netlify configuration
└── render.yaml         # Render configuration
```

## 🛠️ Setup

### Local Development

1. **Frontend** (runs on http://localhost:3000):
```bash
npm install
npm run dev
```

2. **Backend** (runs on http://localhost:3001):
```bash
cd server
npm install
npm run dev
```

### Environment Variables

Create `.env.local` for local development:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Update `.env.production` for production:
```
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

## 🔧 Deployment Instructions

### Deploy to Netlify (Frontend)
1. Connect this repository to Netlify
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Deploy!

### Deploy to Render (Backend)
1. Create a new Web Service on Render
2. Connect this repository (https://github.com/CyberTud/vyria-web)
3. Set configuration:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add environment variable:
   - `ADMIN_PASSWORD`: tudorregele
5. Deploy!

## 📝 Features

- ✨ Modern, minimal dark design
- 📱 Mobile-responsive
- 🎯 Custom waitlist system with SQLite database
- 🔒 Protected admin panel at `/waitlist`
- 📊 Export waitlist to CSV
- 🚀 Optimized for performance
- 🌊 Animated gradients and floating elements

## 🔑 Admin Access

Visit `/waitlist` and enter the admin password to view all signups.

## 📚 Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express, SQLite, CORS
- **Deployment**: Netlify (frontend), Render (backend)

## 🎨 Design

- Dark theme with blue/green gradient accents
- Minimalist approach avoiding "AI slop" aesthetics
- Large app screenshot as hero focal point
- Simple, direct messaging: "Chat. Learn. Speak."