"use client";

import { useState, useEffect } from "react";

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
          animation: 'bounce-in 0.25s ease-out',
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
                <span style={{ width: '6px', height: '6px', backgroundColor: '#14b8a6', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
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
                transition: 'background 0.2s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
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
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
          </svg>
        )}
      </button>

      <style jsx>{`
        @keyframes bounce-in {
          0% { opacity: 0; transform: translateY(10px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}