import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// نستورد خط Cairo من Next.js Google Fonts
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400","700"] });

export const metadata = {
  title: "DevSeed",
  description: "نبني حلول رقمية قابلة للتوسع",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${cairo.className} bg-white text-gray-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
