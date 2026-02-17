import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 })

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const fromEmail = process.env.FROM_EMAIL || `Newsletter <no-reply@yourdomain.com>`

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json({ error: "SMTP not configured" }, { status: 500 })
    }

    const nodemailer = require("nodemailer")
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const recipients = [
      "declareonline@gmail.com",
      "roselineblessing123@gmail.com",
      "ejosephisang@ritebridge.com",
    ]

    const info = await transporter.sendMail({
      from: fromEmail,
      to: recipients.join(", "),
      subject: "[TEST] Newsletter subscription (SMTP)",
      html: `<h2>Test subscription email</h2><p>Submitted email: ${email}</p><p>Sent at: ${new Date().toLocaleString()}</p>`,
    })

    // Log non-sensitive parts of the response
    console.log("[v0] SMTP send result:", { messageId: info.messageId, accepted: info.accepted, rejected: info.rejected })

    return NextResponse.json({ ok: true, messageId: info.messageId, accepted: info.accepted, rejected: info.rejected })
  } catch (err) {
    console.error("[v0] SMTP test-send error:", err)
    return NextResponse.json({ error: "SMTP send failed" }, { status: 500 })
  }
}
