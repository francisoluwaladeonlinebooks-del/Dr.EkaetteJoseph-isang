import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, service, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 })
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Log contact form submission
    console.log("[v0] New contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      submittedAt: new Date().toISOString(),
    })

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "ejosephisang@ritebridge.com",
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
      })
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We'll get back to you within 24-48 hours.",
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
