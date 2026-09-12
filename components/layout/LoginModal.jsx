"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseFetch } from "@/lib/supabase";

const EyeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const SpinnerIcon = () => (
  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
  </svg>
);

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("الرجاء إدخال البريد الإلكتروني");
      return;
    }
    if (!password.trim()) {
      setError("الرجاء إدخال كلمة المرور");
      return;
    }

    setLoading(true);

    try {
      const data = await supabaseFetch(
        `profiles?email=eq.${encodeURIComponent(email)}&password=eq.${encodeURIComponent(password)}&select=*`
      );

      if (data && data.length > 0) {
        localStorage.setItem("devseed_admin", JSON.stringify(data[0]));
        onClose();
        router.push("/admin");
      } else {
        setError("بريد إلكتروني أو كلمة مرور غير صحيحة");
      }
    } catch (err) {
      setError("حدث خطأ. حاول مرة أخرى");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
  <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>

    <div 
      className="bg-[#0f172a] rounded-2xl shadow-2xl w-full max-w-md p-6 relative border border-teal-500/20"
      onClick={(e) => e.stopPropagation()}
      style={{ animation: "modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl leading-none"
        >
          ×
        </button>

        <div className="text-center mb-6 mt-2">
          <h2 className="text-xl font-bold text-white mb-1">تسجيل الدخول</h2>
          <p className="text-gray-400 text-sm">لوحة تحكم DevSeed</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@devseed.com"
              disabled={loading}
              className="w-full p-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 transition-all disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">كلمة المرور</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                disabled={loading}
                className="w-full p-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 transition-all disabled:opacity-50 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-teal-400 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-xl">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 text-white py-3 rounded-xl font-semibold hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <SpinnerIcon />
                جاري تسجيل الدخول...
              </>
            ) : (
              "دخول"
            )}
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