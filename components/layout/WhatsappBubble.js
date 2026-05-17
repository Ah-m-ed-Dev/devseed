"use client";

import { useState } from "react";

export default function WhatsappBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "249997143276";
  const message = encodeURIComponent("السلام عليكم، عندي استفسار عن خدمات DevSeed");

  return (
    <div className="fixed bottom-5 right-5 z-[9999]" >
      
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
  className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-[#20bd5a] hover:scale-110 transition-all"
>
  {isOpen ? (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  ) : (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.176-1.24-6.165-3.495-8.411"/>
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