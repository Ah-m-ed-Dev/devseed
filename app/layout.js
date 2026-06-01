import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Cairo } from "next/font/google";
import WhatsappBubble from "@/components/layout/WhatsappBubble";


const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata = {
  title: {
    default: "DevSeed | نزرع حلولاً رقمية",
    template: "%s | DevSeed",
  },
  description:
    "شركة DevSeed لتطوير البرمجيات - نبني مواقع وتطبيقات حديثة، سريعة، وقابلة للتوسع. متخصصون في Next.js، React، وتطبيقات الويب.",
  keywords: [
    "تطوير برمجيات",
    "Next.js",
    "React",
    "تطبيقات ويب",
    "تصميم واجهات",
    "حلول سحابية",
    "DevSeed",
  ],
  authors: [{ name: "DevSeed" }],
  creator: "DevSeed",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL || "devseed.vercel.app"}`
  ),
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "DevSeed",
    title: "DevSeed | نزرع حلولاً رقمية",
    description:
      "شركة DevSeed لتطوير البرمجيات - نبني منتجات رقمية قابلة للتوسع والنمو",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSeed | نزرع حلولاً رقمية",
    description:
      "شركة DevSeed لتطوير البرمجيات - نبني منتجات رقمية قابلة للتوسع والنمو",
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
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230a0a0f'/><text x='50' y='68' font-size='46' font-family='monospace' font-weight='bold' fill='%2314b8a6' text-anchor='middle'>&lt;/&gt;</text></svg>",
  },
};

// منفصل عن metadata في Next.js 14+
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="antialiased">
        <Navbar />
      <main>{children}</main>
        <Footer />
        <WhatsappBubble />

      </body>
    </html>
  );
}

