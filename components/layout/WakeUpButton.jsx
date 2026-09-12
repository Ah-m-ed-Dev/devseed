"use client";

import { useState } from "react";

export default function WakeUpButton() {
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
      className="fixed bottom-40 right-5 z-[9999] bg-teal-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-teal-500/30 hover:bg-teal-400 transition-all flex items-center gap-2 border-2 border-teal-400"
      title="تنشيط البيانات"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
      {wakingUp ? "جاري..." : done ? "تم ✅" : "تنشيط"}
    </button>
  );
}