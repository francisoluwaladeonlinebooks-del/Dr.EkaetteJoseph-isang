import { type NextRequest, NextResponse } from "next/server"

// Temporary debug endpoint: send a test email via Resend HTTP API and log
// the full response. Do NOT expose this in production.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "RESEND_API_KEY not configured" }, { status: 500 })
    }

    const recipients = [
      "declareonline@gmail.com",
      "roselineblessing123@gmail.com",
      "ejosephisang@ritebridge.com",
    ]

    const payload = {
      from: "Newsletter <onboarding@resend.dev>",
      to: recipients,
      subject: "[TEST] New Newsletter Subscription",
      html: `<h2>Test Newsletter Subscription</h2><p><strong>Email:</strong> ${email}</p><p>Sent at: ${new Date().toLocaleString()}</p>`,
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    })

    const json = await res.json().catch(() => null)

    // Log the full response for debugging (avoid logging raw PII elsewhere).
    console.log("[v0] Resend HTTP status:", res.status)
    console.log("[v0] Resend HTTP headers:", Object.fromEntries(res.headers.entries()))
    console.log("[v0] Resend HTTP body:", json)

    return NextResponse.json({ status: res.status, body: json }, { status: res.ok ? 200 : 502 })
  } catch (err) {
    console.error("[v0] Resend HTTP send error:", err)
    return NextResponse.json({ error: "Resend send failed" }, { status: 500 })
  }
}
