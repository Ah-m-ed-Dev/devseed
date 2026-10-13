import Hero from "@/sections/hero";
import Problem from "@/sections/problem";
import Growth from "@/sections/growth";
import Services from "@/sections/services";
import Process from "@/sections/process";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Problem />
      <Growth />        
      <Services />
      <Process />       
      <Contact />
    </main>
  );
}