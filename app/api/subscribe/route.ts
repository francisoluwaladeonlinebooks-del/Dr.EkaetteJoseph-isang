import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Prefer Upstash-backed rate limiting in production. Fall back to a simple
// in-memory limiter for local development when UPSTASH env vars are not set.
let upstashAvailable = Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
let redis: any = undefined
let ratelimit: any = undefined
if (upstashAvailable) {
  try {
    // Lazy import to avoid runtime errors when packages aren't installed in some environments
    // The packages were added to package.json; run `pnpm install` to fetch them.
    // Use globals so instances are reused across invocations.
    const { Redis } = require("@upstash/redis")
    const { Ratelimit } = require("@upstash/ratelimit")

    if (!(globalThis as any).__upstashRedis) {
      ;(globalThis as any).__upstashRedis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    }
    redis = (globalThis as any).__upstashRedis

    if (!(globalThis as any).__upstashRatelimit) {
      ;(globalThis as any).__upstashRatelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(10, "1 m"),
      })
    }
    ratelimit = (globalThis as any).__upstashRatelimit
  } catch (e) {
    console.warn("Upstash packages not available or misconfigured, falling back to in-memory limiter", e)
    upstashAvailable = false
  }
}

// In-memory fallback limiter for development
const RATE_LIMIT_WINDOW = 60_000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10
const getRateLimitStore = () => {
  if (!(globalThis as any).__subscribeRateLimit) {
    ;(globalThis as any).__subscribeRateLimit = new Map<string, number[]>()
  }
  return (globalThis as any).__subscribeRateLimit as Map<string, number[]>
}

// Note: This API route won't work with static export to GitHub Pages.
// For a fully static site, use a third-party form service like Formspree or Netlify Forms.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, recaptchaToken } = body

    // Rate limiting by IP (prefer Upstash; otherwise fallback to in-memory)
    const ip = (request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown").toString().split(",")[0].trim()
    if (upstashAvailable && ratelimit) {
      try {
        const res = await ratelimit.limit(ip)
        if (!res.success) {
          return NextResponse.json({ error: "Too many requests" }, { status: 429 })
        }
      } catch (rlErr) {
        console.warn("Upstash ratelimit check failed, continuing with request:", rlErr)
      }
    } else {
      const store = getRateLimitStore()
      const now = Date.now()
      const windowStart = now - RATE_LIMIT_WINDOW
      const timestamps = store.get(ip) || []
      const recent = timestamps.filter((t) => t > windowStart)
      recent.push(now)
      store.set(ip, recent)
      if (recent.length > MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json({ error: "Too many requests" }, { status: 429 })
      }
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // If reCAPTCHA is configured on the server, verify the token before
    // continuing. This protects the endpoint from automated abuse.
    const recaptchaSecret = process.env.RECAPTCHA_SECRET
    if (recaptchaSecret) {
      if (!recaptchaToken) {
        return NextResponse.json({ error: "reCAPTCHA token missing" }, { status: 400 })
      }

      try {
        const params = new URLSearchParams()
        params.append("secret", recaptchaSecret)
        params.append("response", recaptchaToken)

        const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
        })

        const verifyJson = await verifyRes.json()
        if (!verifyJson.success) {
          console.warn("reCAPTCHA verification failed:", verifyJson)
          return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 403 })
        }

        // Optional: check score for v3 (if provided)
        if (typeof verifyJson.score === "number" && verifyJson.score < 0.4) {
          console.warn("reCAPTCHA low score:", verifyJson.score)
          return NextResponse.json({ error: "reCAPTCHA score too low" }, { status: 403 })
        }
      } catch (rcErr) {
        console.error("reCAPTCHA verification error:", rcErr)
        return NextResponse.json({ error: "reCAPTCHA verification error" }, { status: 500 })
      }
    }

    // Mask email when logging to avoid storing raw PII in logs.
    const maskedEmail = String(email).replace(/(.{2})(.*)(@.*)/, (_m, a, b, c) => {
      const stars = b ? "*".repeat(Math.min(8, b.length)) : "***"
      return `${a}${stars}${c}`
    })
    console.log("[v0] New newsletter subscription:", {
      email: maskedEmail,
      subscribedAt: new Date().toISOString(),
      ip,
    })

    // Prefer SMTP send if configured (nodemailer) so we can send to arbitrary recipients.
    // Fall back to Resend when SMTP is not configured.
    const recipients = [
      "declareonline@gmail.com",
      "roselineblessing123@gmail.com",
      "ejosephisang@ritebridge.com",
    ]

    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
    const fromEmail = process.env.FROM_EMAIL || "Newsletter <no-reply@yourdomain.com>"

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const nodemailer = require("nodemailer")
        if (!(globalThis as any).__nodemailerTransport) {
          ;(globalThis as any).__nodemailerTransport = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort || 587,
            secure: smtpPort === 465, // true for 465, false for other ports
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          })
        }

        const transporter = (globalThis as any).__nodemailerTransport
        const info = await transporter.sendMail({
          from: fromEmail,
          to: recipients.join(", "),
          subject: "New Newsletter Subscription",
          html: `<h2>New Newsletter Subscription</h2><p><strong>Email:</strong> ${email}</p><p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>`,
        })

        console.log("[v0] SMTP send response:", { messageId: info.messageId, envelope: info.envelope })
      } catch (smtpErr) {
        console.error("[v0] SMTP send failed:", smtpErr)
      }
    } else if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)

        const res = await resend.emails.send({
          from: fromEmail,
          to: recipients,
          subject: "New Newsletter Subscription",
          html: `
            <h2>New Newsletter Subscription</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          `,
        })

        console.log("[v0] Resend send response:", { id: res && (res as any).id })
      } catch (sendErr) {
        console.error("[v0] Resend notification failed:", sendErr)
      }
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully! You will receive healthcare strategy insights from Dr. Ekaette.",
    })
  } catch (error) {
    console.error("[v0] Subscription error:", error)
    return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 })
  }
}
