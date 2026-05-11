import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// نستورد خط Cairo من Next.js Google Fonts
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400","700"] });

export const metadata = {
  title: "DevSeed",
  description: "نبني حلول رقمية قابلة للتوسع",
viewport: "width=device-width, initial-scale=1.0",
icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230a0a0f'/><text x='50' y='68' font-size='46' font-family='monospace' font-weight='bold' fill='%2314b8a6' text-anchor='middle'>&lt;/&gt;</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-white text-gray-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
