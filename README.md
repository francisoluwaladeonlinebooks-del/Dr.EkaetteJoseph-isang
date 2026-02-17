# DrEkaetteJoseph-Isang

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/declareonline-gmailcoms-projects/v0-dr-ekaette-joseph-isang)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/mK1AAqDk6QT)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/declareonline-gmailcoms-projects/v0-dr-ekaette-joseph-isang](https://vercel.com/declareonline-gmailcoms-projects/v0-dr-ekaette-joseph-isang)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/mK1AAqDk6QT](https://v0.app/chat/mK1AAqDk6QT)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Environment & Security

- Store secrets (like the Resend API key) in environment variables and never
	commit them to the repository. Copy `.env.example` to `.env.local` and set
	`RESEND_API_KEY` there for local development.
- If a secret is accidentally exposed (for example by pasting it into a chat
	or committing it), rotate the key immediately from the provider dashboard.
- For production, use a secret manager (Vercel Environment Variables, AWS
	Secrets Manager, Google Secret Manager, or similar). Do not embed secrets
	in source files.
- Consider adding a CAPTCHA (reCAPTCHA, hCaptcha) and a server-side rate
	limiter backed by Redis/Upstash/Cloudflare KV to protect the `/api/subscribe`
	endpoint from automated abuse.

### reCAPTCHA setup

- To enable reCAPTCHA protection for the subscribe form, obtain keys from
	Google reCAPTCHA (v3 or v2). Set the site key in a local env var exposed to
	the client and the secret in server-only env vars.

	```bash
	# local (do NOT commit)
	NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
	RECAPTCHA_SECRET=your_secret
	```

- The app will include the site key on the client and send a token to
	`/api/subscribe`, where the server verifies it with Google before accepting
	the subscription.