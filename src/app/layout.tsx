// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Enhanced Metadata for SEO
export const metadata: Metadata = {
  title: "iQue Technology - CMMC, Managed IT & Security Services",
  description: "Expert Compliance-as-a-Service, CMMC readiness, and managed IT solutions to secure your business. Schedule your assessment today.",
  openGraph: {
    title: "iQue Technology - CMMC, Managed IT & Security Services",
    description: "Expert Compliance-as-a-Service, CMMC readiness, and managed IT solutions.",
    url: "https://www.iquetechnology.com",
    siteName: "iQue Technology",
    images: [
      {
        url: 'https://www.iquetechnology.com/og-image.png', // We'll need to create this image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "iQue Technology - CMMC, Managed IT & Security Services",
    description: "Expert Compliance-as-a-Service and managed IT solutions.",
    images: ['https://www.iquetechnology.com/og-image.png'], // Must be an absolute URL
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "iQue Technology",
  "url": "https://www.iquetechnology.com",
  "telephone": "+1-301-789-1274",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "11865 Federal Square, Suite 103",
    "addressLocality": "Waldorf",
    "addressRegion": "MD",
    "postalCode": "20602",
    "addressCountry": "US"
  },
  "description": "IT solutions provider specializing in CMMC, compliance, and managed services."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}