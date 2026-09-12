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
  manifest: "/manifest.json",
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