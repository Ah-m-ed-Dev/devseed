"use client";

import { useState } from "react";

export default function WhatsappBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "249997143276";
  const message = encodeURIComponent("السلام عليكم، عندي استفسار عن خدمات DevSeed");

  return (
    <>
      {/* نافذة الدردشة */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          zIndex: 99999,
          width: '300px',
          maxWidth: 'none',
          margin: '0',
          backgroundColor: '#0f172a',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          border: '1px solid rgba(20,184,166,0.2)',
          overflow: 'hidden',
        }}>
          {/* الرأس */}
          <div style={{ backgroundColor: '#0a0a0f', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#14b8a6', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '18px', flexShrink: 0 }}>
              &lt;/&gt;
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>DevSeed</div>
              <div style={{ color: '#14b8a6', fontSize: '12px' }}>نزرع حلولاً رقمية</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: '#14b8a6', borderRadius: '50%' }} />
                <span style={{ color: '#9ca3af', fontSize: '10px' }}>متصل الآن</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ backgroundColor: 'transparent', border: 'none', color: '#9ca3af', fontSize: '18px', cursor: 'pointer' }}>×</button>
          </div>

          {/* الجسم */}
          <div style={{ padding: '16px' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '12px', borderBottomLeftRadius: '4px', color: '#e2e8f0', fontSize: '13px', lineHeight: 1.6, border: '1px solid rgba(255,255,255,0.05)' }}>
              مرحباً بك في DevSeed! 🌱
              <br />
              كيف نقدر نساعدك في مشروعك التقني؟
              <div style={{ fontSize: '10px', color: '#64748b', textAlign: 'right', marginTop: '8px' }}>
                {new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', color: '#94a3b8', fontSize: '12px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#14b8a6">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m.5 11H7v-1.5h4V7h1.5v6z"/>
              </svg>
              نرد عادةً خلال دقائق
            </div>
          </div>

          {/* الزر */}
          <div style={{ padding: '0 16px 16px 16px' }}>
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                backgroundColor: '#14b8a6',
                color: 'white',
                padding: '12px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              ابدأ المحادثة
              {/* سهم ↗️ احترافي */}
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
  <path d="M7 17L17 7" />
  <path d="M7 7h10v10" />
</svg>
            </a>
          </div>
        </div>
      )}

      {/* زر الواتساب العائم */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99999,
          width: '56px',
          height: '56px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
          maxWidth: 'none',
          margin: '0',
        }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          /* أيقونة واتساب الرسمية */
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.24-1.38a9.89 9.89 0 004.75 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.19-.31a8.22 8.22 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.42 5.83c0 4.54-3.7 8.23-8.24 8.23m4.54-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.38-.12-.54.12-.15.25-.58.81-.71.97-.13.17-.27.19-.5.06-.23-.12-1-.35-1.94-1.2-.72-.64-1.21-1.43-1.36-1.67-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43-.14-.01-.3-.01-.47-.01-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29"/>
          </svg>
        )}
      </button>
    </>
  );
}