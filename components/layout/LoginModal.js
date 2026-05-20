"use client";

import { useState } from "react";
import { supabaseFetch } from "@/lib/supabase";

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await supabaseFetch(
        `profiles?email=eq.${encodeURIComponent(email)}&password=eq.${encodeURIComponent(password)}&select=*`
      );

      if (data && data.length > 0) {
        localStorage.setItem("devseed_admin", JSON.stringify(data[0]));
        onClose();
        window.location.href = "/admin";
      } else {
        setError("بريد إلكتروني أو كلمة مرور غير صحيحة");
      }
    } catch (err) {
      setError("حدث خطأ. حاول مرة أخرى");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      {/* خلفية داكنة */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* المودال */}
      <div className="relative bg-[#0f172a] border border-teal-500/20 rounded-2xl w-full max-w-md mx-4 p-8 shadow-2xl" style={{ animation: "modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}>
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl"
        >
          ×
        </button>

        {/* الشعار */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono font-bold text-3xl mb-4">
            &lt;/&gt;
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">تسجيل الدخول</h2>
          <p className="text-gray-400 text-sm">لوحة تحكم DevSeed</p>
        </div>

        {/* نموذج */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@devseed.com"
              className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 transition-all"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-xl">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-4 rounded-xl font-semibold hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25"
          >
            دخول
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}