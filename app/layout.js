import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Cairo } from "next/font/google";
import AiBot from "@/components/layout/AiBot";
import SmoothScroll from "@/components/providers/smooth-scroll";
import { Toaster } from "sonner";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata = {
  title: {
    default: "DevSeed | Ù†Ø²Ø±Ø¹ Ø­Ù„ÙˆÙ„Ø§Ù‹ Ø±Ù‚Ù…ÙŠØ©",
    template: "%s | DevSeed",
  },
  description:
    "Ø´Ø±ÙƒØ© DevSeed Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª - Ù†Ø¨Ù†ÙŠ Ù…ÙˆØ§Ù‚Ø¹ ÙˆØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø­Ø¯ÙŠØ«Ø©ØŒ Ø³Ø±ÙŠØ¹Ø©ØŒ ÙˆÙ‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹. Ù…ØªØ®ØµØµÙˆÙ† ÙÙŠ Next.jsØŒ ReactØŒ ÙˆØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„ÙˆÙŠØ¨.",
  keywords: [
    "ØªØ·ÙˆÙŠØ± Ø¨Ø±Ù…Ø¬ÙŠØ§Øª",
    "Next.js",
    "React",
    "ØªØ·Ø¨ÙŠÙ‚Ø§Øª ÙˆÙŠØ¨",
    "ØªØµÙ…ÙŠÙ… ÙˆØ§Ø¬Ù‡Ø§Øª",
    "Ø­Ù„ÙˆÙ„ Ø³Ø­Ø§Ø¨ÙŠØ©",
    "DevSeed",
  ],
  authors: [{ name: "DevSeed" }],
  creator: "DevSeed",
  manifest: "/manifest.json",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL || "devseed.vercel.app"}`
  ),
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "DevSeed",
    title: "DevSeed | Ù†Ø²Ø±Ø¹ Ø­Ù„ÙˆÙ„Ø§Ù‹ Ø±Ù‚Ù…ÙŠØ©",
    description: "Ø´Ø±ÙƒØ© DevSeed Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª - Ù†Ø¨Ù†ÙŠ Ù…Ù†ØªØ¬Ø§Øª Ø±Ù‚Ù…ÙŠØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹ ÙˆØ§Ù„Ù†Ù…Ùˆ",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSeed | Ù†Ø²Ø±Ø¹ Ø­Ù„ÙˆÙ„Ø§Ù‹ Ø±Ù‚Ù…ÙŠØ©",
    description: "Ø´Ø±ÙƒØ© DevSeed Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª - Ù†Ø¨Ù†ÙŠ Ù…Ù†ØªØ¬Ø§Øª Ø±Ù‚Ù…ÙŠØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹ ÙˆØ§Ù„Ù†Ù…Ùˆ",
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
  icons: {
    icon: "/devlogo2.jpg",
    shortcut: "/devlogo2.jpg",
    apple: "/devlogo2.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${cairo.className} antialiased`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AiBot />
        </SmoothScroll>
        <Toaster theme="dark" position="bottom-center" />
      </body>
    </html>
  );
}