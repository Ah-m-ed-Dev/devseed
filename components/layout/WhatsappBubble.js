"use client";

import { useState } from "react";

export default function WhatsappBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "249997143276";
  const message = encodeURIComponent("السلام عليكم، عندي استفسار عن خدمات DevSeed");

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      
      {/* نافذة الدردشة */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[300px] bg-[#0f172a] rounded-2xl shadow-2xl border border-teal-500/20 overflow-hidden animate-bounce-in">
          
          {/* الرأس */}
          <div className="bg-[#0a0a0f] p-4 flex items-center gap-3 border-b border-white/5">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-mono font-bold text-lg shrink-0">
              &lt;/&gt;
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold text-sm">DevSeed</div>
              <div className="text-teal-400 text-xs">نزرع حلولاً رقمية</div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-[10px] text-gray-400">متصل الآن</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-white text-lg"
            >
              ×
            </button>
          </div>

          {/* الجسم */}
          <div className="p-4">
            <div className="bg-[#1e293b] p-3 rounded-xl rounded-bl-sm text-gray-200 text-sm leading-relaxed border border-white/5">
              مرحباً بك في DevSeed! 🌱
              <br />
              كيف نقدر نساعدك في مشروعك التقني؟
              <div className="text-[10px] text-gray-500 text-left mt-2">
                {new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3 text-gray-400 text-xs">
              <svg className="w-3.5 h-3.5 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m.5 11H7v-1.5h4V7h1.5v6z"/>
              </svg>
              نرد عادةً خلال دقائق
            </div>
          </div>

          {/* الزر */}
          <div className="p-4 pt-0">
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              className="flex items-center justify-center gap-2 w-full bg-teal-500 text-white py-3 rounded-xl font-semibold text-sm hover:bg-teal-400 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              ابدأ المحادثة
            </a>
          </div>
        </div>
      )}

      {/* زر الواتساب العائم */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-[#20bd5a] hover:scale-105 transition-all"
>
  {isOpen ? (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  ) : (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.33-1.4c1.43.78 3.04 1.19 4.66 1.19 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.88-9.91-9.88m5.34 14.07c-.23.65-1.16 1.19-1.62 1.26-.41.06-.41.29-2.68-.57-2.8-1.06-4.57-3.64-4.71-3.81-.14-.17-1.13-1.5-1.13-2.85 0-1.36.71-2.03.97-2.31.25-.28.55-.35.73-.35.18 0 .35.01.51.01.17.01.39-.07.61.48.23.59.79 1.93.86 2.07.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.28.29-.12.56.16.27.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.21 1.36.28.14.44.12.6-.05.16-.17.7-.82.89-1.1.19-.28.38-.23.64-.14.26.09 1.66.78 1.94.93.28.14.47.21.54.33.07.12.07.69-.16 1.34"/>
    </svg>
  )}
</button>
      {/* CSS للأنيميشن */}
      <style jsx>{`
        @keyframes bounce-in {
          0% { opacity: 0; transform: translateY(10px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}