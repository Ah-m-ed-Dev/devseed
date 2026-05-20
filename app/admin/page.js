"use client";

import { useState, useEffect } from "react";
import { getMessages, markAsRead, deleteMessage } from "@/lib/supabase";
import Link from "next/link";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview"); // overview, messages

  const fetchMessages = async () => {
    try {
      const data = await getMessages();
      setMessages(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleMarkRead = async (id) => {
    await markAsRead(id);
    setMessages(messages.map((m) => (m.id === id ? { ...m, read: true } : m)));
  };

  const handleDelete = async (id) => {
    if (confirm("هل أنت متأكد من حذف هذه الرسالة؟")) {
      await deleteMessage(id);
      setMessages(messages.filter((m) => m.id !== id));
    }
  };

  const newMessages = messages.filter((m) => !m.read).length;
  const totalMessages = messages.length;

  const stats = [
    { label: "إجمالي الرسائل", value: totalMessages, icon: "✉️", color: "teal" },
    { label: "رسائل جديدة", value: newMessages, icon: "🆕", color: "purple" },
    { label: "اليوم", value: messages.filter((m) => {
      const today = new Date().toDateString();
      return new Date(m.created_at).toDateString() === today;
    }).length, icon: "📅", color: "orange" },
  ];

  return (
    <div className="min-h-screen bg-[#06060a]" dir="rtl">
      {/* الشريط العلوي */}
      <header className="bg-[#0a0a0f] border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-teal-400 font-mono text-xl">&lt;/&gt;</span>
            <span className="text-white font-bold">DevSeed</span>
            <span className="text-gray-500 text-sm mr-4">لوحة التحكم</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
            >
              مشاهدة الموقع ←
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("devseed_admin");
                window.location.href = "/";
              }}
              className="text-red-400 hover:text-red-300 text-sm transition-colors"
            >
              تسجيل خروج
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* أزرار التبويب */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "overview"
                ? "bg-teal-500 text-white"
                : "bg-white/[0.02] text-gray-400 hover:text-white border border-white/5"
            }`}
          >
            📊 نظرة عامة
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all relative ${
              activeTab === "messages"
                ? "bg-teal-500 text-white"
                : "bg-white/[0.02] text-gray-400 hover:text-white border border-white/5"
            }`}
          >
            ✉️ الرسائل
            {newMessages > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {newMessages}
              </span>
            )}
          </button>
        </div>

        {/* محتوى التبويب */}
        {activeTab === "overview" && (
          <div>
            {/* الإحصائيات */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
                >
                  <span className="text-2xl mb-3 block">{stat.icon}</span>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* آخر 5 رسائل */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h2 className="text-white font-semibold text-lg mb-4">
                آخر الرسائل
              </h2>
              {messages.slice(0, 5).map((msg) => (
                <div
                  key={msg.id}
                  className="flex items-start gap-4 py-4 border-b border-white/5 last:border-0 last:pb-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {msg.name?.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium text-sm">
                        {msg.name}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {new Date(msg.created_at).toLocaleDateString("ar-SA")}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs">{msg.email}</p>
                    <p className="text-gray-300 text-sm mt-1 truncate">
                      {msg.details}
                    </p>
                  </div>
                  {!msg.read && (
                    <span className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0 mt-2" />
                  )}
                </div>
              ))}
              {messages.length === 0 && (
                <p className="text-gray-500 text-sm py-8 text-center">
                  لا توجد رسائل بعد
                </p>
              )}
            </div>
          </div>
        )}

        {activeTab === "messages" && (
          <div>
            {loading ? (
              <div className="text-center py-20 text-gray-400">
                جاري التحميل...
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                لا توجد رسائل بعد
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-5 rounded-xl border ${
                      msg.read
                        ? "border-white/5 bg-white/[0.02]"
                        : "border-teal-500/20 bg-teal-500/[0.02]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {msg.name?.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">
                            {msg.name}
                          </span>
                          <span className="text-gray-500 text-xs">
                            {new Date(msg.created_at).toLocaleDateString("ar-SA")}
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs mb-1">
                          {msg.email}
                        </p>
                        {msg.project_type && (
                          <span className="inline-block bg-white/[0.03] text-gray-400 text-xs px-2 py-0.5 rounded-full mb-2">
                            {msg.project_type}
                          </span>
                        )}
                        <p className="text-gray-300 text-sm mt-2">
                          {msg.details}
                        </p>
                        <div className="flex gap-3 mt-3">
                          {!msg.read && (
                            <button
                              onClick={() => handleMarkRead(msg.id)}
                              className="text-teal-400 text-xs hover:underline"
                            >
                              تعليم كمقروء
                            </button>
                          )}
                          <a
                            href={`mailto:${msg.email}`}
                            className="text-gray-400 text-xs hover:underline"
                          >
                            رد
                          </a>
                          <button
                            onClick={() => handleDelete(msg.id)}
                            className="text-red-400 text-xs hover:underline"
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                      {!msg.read && (
                        <span className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0 mt-2" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
    }
