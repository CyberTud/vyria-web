# Vyria Waitlist Backend

Backend API for Vyria waitlist management, deployed on Render.

## Setup for Render

This backend is part of the main vyria-web repository and deploys automatically from the `server` folder.

1. Connect to Render using the main repository: https://github.com/CyberTud/vyria-web
2. Set the Root Directory to: `server`
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Environment Variables:
   - `ADMIN_PASSWORD`: tudorregele (or your custom password)

## API Endpoints

- `POST /api/waitlist` - Add email to waitlist
- `GET /api/waitlist` - Get waitlist count
- `POST /api/waitlist/all` - Get all entries (requires password)

## Local Development

```bash
cd server
npm install
npm run dev
```

Server runs on http://localhost:3001

## Frontend Configuration

The frontend in the root directory uses environment variables:
- `.env.local` - for local development
- `.env.production` - for production (update with your Render URL)