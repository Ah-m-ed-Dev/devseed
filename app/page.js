import Hero from "@/sections/hero";
import Services from "@/sections/services";
import Projects from "@/sections/projects";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Navbar from "@/components/layout/navbar";


export const metadata = {
  title: "DevSeed | نزرع حلولاً رقمية",
  description:
    "حوّل فكرتك إلى منتج رقمي قابل للتوسع. DevSeed تبني مواقع وتطبيقات حديثة باستخدام أحدث التقنيات.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    
      
      <main className="overflow-hidden">
        <Hero />
       
      </main>
      
    
  );
}