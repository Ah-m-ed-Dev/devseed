import { useState } from "react";
import Hero from "@/sections/hero";
import Services from "@/sections/services";
import Projects from "@/sections/projects";
import About from "@/sections/about";
import Contact from "@/sections/contact";

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
    <>
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>

      <WakeUpButton />
    </>
  );
}

function WakeUpButton() {
  const [wakingUp, setWakingUp] = useState(false);
  const [done, setDone] = useState(false);

  const wakeUp = async () => {
    setWakingUp(true);
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    try {
      await fetch(`${url}/rest/v1/messages?limit=1&select=id`, {
        headers: { "apikey": key, "Authorization": `Bearer ${key}` },
      });
      setDone(true);
    } catch (e) {
      // silent
    } finally {
      setWakingUp(false);
      setTimeout(() => setDone(false), 2000);
    }
  };

  return (
    <button
      onClick={wakeUp}
      disabled={wakingUp}
      className="fixed bottom-36 right-5 z-[9998] bg-teal-500 text-white w-9 h-9 rounded-full text-sm font-bold shadow-lg hover:bg-teal-400 transition-all flex items-center justify-center"
      title="تنشيط البيانات"
    >
      {wakingUp ? "⏳" : done ? "✅" : "⚡"}
    </button>
  );
}