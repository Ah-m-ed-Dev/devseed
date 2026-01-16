import "./globals.css";
import Navbar from "@/components/layout/navbaravbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "DevSeed",
  description: "We build scalable digital products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="bg-white text-slate-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
