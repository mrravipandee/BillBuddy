import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Load Outfit font globally
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bill Buddy | Smart Billing & Expense Management",
  description:
    "Bill Buddy makes billing, invoicing, and expense management effortless. Track your bills, manage payments, and stay financially organized with ease.",
  keywords: [
    "Bill Buddy",
    "billing software",
    "invoice generator",
    "expense management",
    "payment tracking",
    "budget management",
    "finance app",
    "digital billing solution",
    "small business billing",
    "online invoice software",
    "billing app for startups",
    "expense tracking app",
    "business accounting tool",
    "automated billing system",
    "cloud billing platform",
    "smart finance management",
    "track bills online",
    "generate invoices fast",
    "simple expense tracker",
    "billing and invoicing software",
    "business expense monitor",
    "easy invoice maker",
    "subscription billing software",
    "freelancer billing app",
    "startup finance management",
    "digital payments app",
    "billing for entrepreneurs",
    "invoice and receipt app",
    "business budget planner",
    "online bill payment manager",
    "track business expenses",
    "manage invoices easily",
    "GST billing software",
    "automated invoice app",
    "mobile billing solution",
    "professional invoice maker",
    "expense tracking for business",
    "billing tool for freelancers",
    "finance tracking software",
    "all-in-one billing solution",
    "business income tracker",
    "digital receipt generator",
    "business growth billing tool",
    "invoice template app",
    "billing system for shops",
    "billing system for services",
    "fast billing application",
    "online payment tracker",
    "cloud finance management",
    "manage bills and invoices",
    "Bill Buddy app download",
  ],
  openGraph: {
    title: "Bill Buddy | Effortless Billing & Expense Management",
    description:
      "Manage bills, track expenses, and simplify your finances with Bill Buddy.",
    url: "https://yourdomain.com", // replace with your domain
    siteName: "Bill Buddy",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Bill Buddy Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bill Buddy | Smart Billing & Expense Management",
    description:
      "Effortless billing, invoicing, and expense tracking with Bill Buddy.",
    images: ["https://yourdomain.com/twitter-image.png"], // replace with your Twitter image
    creator: "@yourhandle", // replace with your Twitter handle if you have one
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
