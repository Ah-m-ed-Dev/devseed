"use client"; 

import { useState, useEffect, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';

// إعداد Supabase (يفضل نقلها إلى ملف env واستدعائها بـ process.env)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function DevSeedChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [convId, setConvId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // النزول تلقائياً لآخر رسالة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // إنشاء محادثة جديدة عند فتح البوت لأول مرة
  useEffect(() => {
    if (isOpen && !convId) {
      initConversation();
    }
  }, [isOpen]);

  const initConversation = async () => {
    const { data, error } = await supabase
      .from('conversations')
      .insert({})
      .select()
      .single();
      
    if (data) setConvId(data.id);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = { sender: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    try {
      // استدعاء Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('devseed-chatbot', {
        body: { message: currentInput, conversationId: convId },
      });

      if (error) throw error;

      const botMessage = { sender: 'bot', content: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('DevSeed Bot Error:', err);
      const errorMessage = { sender: 'bot', content: 'عذراً، حدث خطأ ما. حاول مرة أخرى.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* نافذة الدردشة (Chat Window) */}
      <div 
        className={`absolute bottom-20 right-0 w-[360px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
            D
          </div>
          <div>
            <h3 className="font-bold text-base leading-tight">DevSeed Assistant</h3>
            <p className="text-xs text-blue-200 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span> متصل الآن
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
          {messages.length === 0 && !isTyping && (
            <div className="text-center text-gray-400 text-sm mt-10">
              👋 مرحباً بك! كيف يمكن لـ DevSeed مساعدتك اليوم؟
            </div>
          )}
          
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-400 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اكتب رسالتك..."
            className="flex-1 bg-slate-100 text-gray-800 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            disabled={isTyping}
          />
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-xl transition-colors disabled:opacity-50"
            disabled={!input.trim() || isTyping}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H5.984l-2.432 7.905a.75.75 0 00.926.94 18.7 18.7 0 0010.78-3.72l4.47-4.47a.75.75 0 000-1.06l-4.47-4.47a18.7 18.7 0 00-10.78-3.72z" />
            </svg>
          </button>
        </form>
      </div>

      {/* زر الفتح العائم (Floating Button) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-blue-600 to-indigo-700 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          isOpen ? 'rotate-90' : 'rotate-0'
        }`}
      >
        {isOpen ? (
          <!-- أيقونة الإغلاق -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <!-- أيقونة الدردشة -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.036 8-9 8a9.333 9.333 0 01-5.08-1.56L3 21l1.56-4.92A9.333 9.333 0 013 12c0-4.556 4.036-8 9-8s9 3.444 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}