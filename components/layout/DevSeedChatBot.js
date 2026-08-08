'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Loader2 } from 'lucide-react';

export default function AiBot({ position = 'bottom-right' }) {
  // ===== حالة البوت =====
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: '👋 مرحباً بك في DevSeed! كيف يمكنني مساعدتك اليوم؟',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // ===== إرسال الرسالة =====
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // إضافة رسالة المستخدم
    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // الاتصال بـ API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMessage]
        })
      });

      const data = await response.json();
      
      // إضافة رد المساعد
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'عذراً، حدث خطأ. حاول مرة أخرى.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: '⚠️ عذراً، حدث خطأ في الاتصال. حاول مرة أخرى.',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // ===== التمرير للأسفل تلقائياً =====
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ===== تحديد المواقع =====
  const buttonPosition = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  };

  const chatPosition = {
    'bottom-right': 'bottom-24 right-4',
    'bottom-left': 'bottom-24 left-4'
  };

  // ============ واجهة البوت ============
  return (
    <>
      {/* زر فتح البوت */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed ${buttonPosition[position]}
          bg-[#1A3C4A] text-[#FDF8F0]
          w-14 h-14 rounded-full
          shadow-lg hover:shadow-xl
          transition-all duration-300
          flex items-center justify-center
          hover:scale-110 z-50
          ${isOpen ? 'rotate-45' : ''}
        `}
      >
        <Bot size={28} />
      </button>

      {/* نافذة البوت */}
      {isOpen && (
        <div className={`
          fixed ${chatPosition[position]}
          w-[90vw] sm:w-96 h-[500px] max-h-[80vh]
          bg-[#FDF8F0] rounded-2xl shadow-2xl 
          flex flex-col overflow-hidden
          border border-[#1A3C4A]/20
          animate-in slide-in-from-bottom-10 duration-300
          z-50
        `}>
          {/* الهيدر */}
          <div className="bg-[#1A3C4A] p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[#FDF8F0] font-bold">DevSeed AI</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#FDF8F0] hover:bg-[#2A5C6E] p-1 rounded transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* الرسائل */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FDF8F0]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`
                  max-w-[80%] p-3 rounded-2xl break-words
                  ${msg.role === 'user' 
                    ? 'bg-[#1A3C4A] text-[#FDF8F0] rounded-br-none' 
                    : 'bg-white text-[#1A3C4A] border border-[#1A3C4A]/10 rounded-bl-none'
                  }
                `}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {/* مؤشر الكتابة */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-[#1A3C4A]/10">
                  <Loader2 className="w-5 h-5 text-[#1A3C4A] animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* حقل الإدخال */}
          <div className="p-4 border-t border-[#1A3C4A]/10 bg-[#F5EDE0]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="اكتب رسالتك..."
                className="flex-1 px-4 py-2 rounded-full border border-[#1A3C4A]/20 focus:outline-none focus:ring-2 focus:ring-[#1A3C4A] bg-white text-right"
                dir="rtl"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-[#1A3C4A] text-[#FDF8F0] p-2 rounded-full hover:bg-[#2A5C6E] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}