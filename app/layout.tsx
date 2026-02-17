import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://drekaette.com"),
  title: {
    default: "Dr. Ekaette Joseph-Isang | Healthcare Strategy & Transformation Executive",
    template: "%s | Dr. Ekaette Joseph-Isang",
  },
  description:
    "Dr. Ekaette Joseph-Isang is a healthcare strategy and transformation executive specializing in CDI, revenue integrity, value-based care, and clinical documentation. CEO of RiteBridge Consulting and Champions Coaching.",
  icons: {
    icon: "/favicon.jpg",
  },
  keywords: [
    "healthcare consultant",
    "clinical documentation integrity",
    "CDI specialist",
    "value-based care",
    "healthcare strategy",
    "revenue integrity",
    "Medicare Advantage",
    "risk adjustment",
    "healthcare transformation",
    "physician engagement",
    "healthcare leadership",
    "RiteBridge Consulting",
    "Champions Coaching",
    "Dr. Ekaette Joseph-Isang",
    "healthcare executive",
    "CPHQ",
    "CDIP",
    "healthcare quality",
  ],
  authors: [{ name: "Dr. Ekaette Joseph-Isang", url: "https://drekaette.com" }],
  creator: "Dr. Ekaette Joseph-Isang",
  publisher: "RiteBridge Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drekaette.com",
    siteName: "Dr. Ekaette Joseph-Isang",
    title: "Dr. Ekaette Joseph-Isang | Healthcare Strategy & Transformation Executive",
    description:
      "Healthcare strategy and transformation executive with 10+ years experience in CDI, value-based care, and clinical documentation integrity.",
    images: [
      {
        url: "/images/dr-ekaette-blue-suit.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Ekaette Joseph-Isang - Healthcare Strategy Executive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Ekaette Joseph-Isang | Healthcare Strategy Executive",
    description:
      "Healthcare transformation expert specializing in CDI, value-based care, and revenue integrity. CEO of RiteBridge Consulting.",
    images: ["/images/dr-ekaette-blue-suit.jpg"],
    creator: "@RiteBridge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://drekaette.com",
  },
  category: "Healthcare",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d5c63" },
    { media: "(prefers-color-scheme: dark)", color: "#0d5c63" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Ekaette Joseph-Isang",
  jobTitle: "Healthcare Strategy & Transformation Executive",
  description:
    "Healthcare strategy and transformation executive specializing in CDI, revenue integrity, and value-based care.",
  url: "https://drekaette.com",
  image: "https://drekaette.com/images/dr-ekaette-blue-suit.jpg",
  email: "ejosephisang@ritebridge.com",
  telephone: "+1-770-572-1066",
  address: {
    "@type": "PostalAddress",
    streetAddress: "996 E New Circle Rd",
    addressLocality: "Lexington",
    addressRegion: "KY",
    postalCode: "40505",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/ejisang",
    "https://web.facebook.com/RiteBridge",
    "https://www.youtube.com/@ritebridgeconsultants",
    "https://ritebridge.com",
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "RiteBridge Consulting",
      url: "https://ritebridge.com",
    },
    {
      "@type": "Organization",
      name: "Champions Coaching",
    },
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Medical School",
    },
  ],
  knowsAbout: [
    "Clinical Documentation Integrity",
    "Value-Based Care",
    "Healthcare Strategy",
    "Revenue Integrity",
    "Medicare Advantage",
    "Risk Adjustment",
    "Healthcare Quality Improvement",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable}`}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
        {process.env.NODE_ENV === "production" ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  )
}
