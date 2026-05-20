"use client";

import { useState, useEffect } from "react";
import { getMessages, markAsRead, deleteMessage, getUsers, createUser, updateUser, deleteUser, supabaseFetch } from "@/lib/supabase";
import Link from "next/link";

// أيقونات SVG
const OverviewIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const MessagesIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);

const ReplyIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 9h8M8 13h6" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

// Toast
function Toast({ message, type, onClose }) {
  const bgColor = type === "success" ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-red-500/10 border-red-500/20 text-red-400";
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] px-5 py-3 rounded-xl border ${bgColor} text-sm flex items-center gap-2 shadow-lg`}>
      <span>{type === "success" ? "✅" : "❌"}</span>
      <span>{message}</span>
      <button onClick={onClose} className="ml-3 hover:opacity-70">×</button>
    </div>
  );
}

// تبويب المستخدمين
function UsersTab({ showToast }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [form, setForm] = useState({ email: "", password: "", name: "", role: "admin" });
  const [formError, setFormError] = useState("");

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch {
      showToast("فشل تحميل المستخدمين", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const resetForm = () => {
    setForm({ email: "", password: "", name: "", role: "admin" });
    setEditUser(null);
    setShowForm(false);
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!form.name.trim()) { setFormError("الاسم مطلوب"); return; }
    if (!form.email.trim()) { setFormError("البريد مطلوب"); return; }
    if (!form.password.trim()) { setFormError("كلمة المرور مطلوبة"); return; }

    try {
      if (editUser) {
        await updateUser(editUser.id, form);
        showToast("تم تحديث المستخدم", "success");
      } else {
        await createUser(form);
        showToast("تم إضافة المستخدم", "success");
      }
      resetForm();
      fetchUsers();
    } catch {
      showToast("فشل العملية", "error");
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setForm({ email: user.email, password: user.password, name: user.name, role: user.role || "admin" });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm("حذف هذا المستخدم؟")) {
      try {
        await deleteUser(id);
        setUsers(users.filter(u => u.id !== id));
        showToast("تم حذف المستخدم", "success");
      } catch {
        showToast("فشل الحذف", "error");
      }
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white font-semibold text-lg">المستخدمين ({users.length})</h2>
        <button onClick={() => { resetForm(); setShowForm(!showForm); }} className="bg-teal-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-teal-400 transition-all">
          {showForm ? "إلغاء" : "+ إضافة مستخدم"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="p-5 rounded-xl border border-teal-500/20 bg-teal-500/[0.02] mb-6 space-y-4">
          {formError && <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-xl">{formError}</div>}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">الاسم</label>
              <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full p-3 bg-white/[0.03] border border-white/10 rounded-xl text-white focus:border-teal-500/50 transition-all" />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">البريد</label>
              <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full p-3 bg-white/[0.03] border border-white/10 rounded-xl text-white focus:border-teal-500/50 transition-all" />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">كلمة المرور</label>
              <input type="text" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} className="w-full p-3 bg-white/[0.03] border border-white/10 rounded-xl text-white focus:border-teal-500/50 transition-all" />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">الدور</label>
              <select value={form.role} onChange={(e) => setForm({...form, role: e.target.value})} className="w-full p-3 bg-white/[0.03] border border-white/10 rounded-xl text-gray-400 focus:border-teal-500/50 transition-all">
                <option value="admin">مشرف</option>
                <option value="super_admin">مدير</option>
                <option value="editor">محرر</option>
              </select>
            </div>
          </div>
          <button type="submit" className="bg-teal-500 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-teal-400 transition-all">
            {editUser ? "تحديث" : "إضافة"}
          </button>
        </form>
      )}

      {loading ? (
        <div className="text-center py-20 text-gray-400">جاري التحميل...</div>
      ) : (
        <div className="space-y-3">
          {users.map((user) => (
            <div key={user.id} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-sm">{user.name?.charAt(0)}</div>
                <div>
                  <div className="text-white font-medium text-sm">{user.name}</div>
                  <div className="text-gray-500 text-xs">{user.email}</div>
                </div>
                <span className="text-[10px] bg-teal-500/10 text-teal-400 px-2 py-0.5 rounded-full">{user.role}</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(user)} className="text-gray-400 hover:text-teal-400 text-xs">تعديل</button>
                <button onClick={() => handleDelete(user.id)} className="text-red-400 hover:text-red-300 text-xs">حذف</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// المكون الرئيسي
export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchMessages = async () => {
    try {
      const data = await getMessages();
      setMessages(data);
    } catch {
      showToast("فشل تحميل الرسائل", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleMarkRead = async (id) => {
    try {
      await markAsRead(id);
      setMessages(messages.map(m => m.id === id ? { ...m, read: true } : m));
      showToast("تم تعليم الرسالة كمقروءة", "success");
    } catch { showToast("فشل التحديث", "error"); }
  };

  const handleDelete = async (id) => {
    if (confirm("حذف هذه الرسالة؟")) {
      try {
        await deleteMessage(id);
        setMessages(messages.filter(m => m.id !== id));
        showToast("تم حذف الرسالة", "success");
      } catch { showToast("فشل الحذف", "error"); }
    }
  };

  const newMessages = messages.filter(m => !m.read).length;
  const todayMessages = messages.filter(m => new Date(m.created_at).toDateString() === new Date().toDateString()).length;

  return (
    <div className="min-h-screen bg-[#06060a]" dir="rtl">
      <header className="bg-[#0a0a0f] border-b border-white/5 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-white font-bold text-lg">لوحة التحكم</h1>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="text-gray-400 hover:text-teal-400 text-sm transition-colors px-3 py-1.5 rounded-lg border border-white/5 hover:border-teal-500/20 flex items-center gap-1.5">
              <ExternalIcon /><span>مشاهدة الموقع</span>
            </Link>
            <button onClick={() => { localStorage.removeItem("devseed_admin"); window.location.href = "/"; }} className="text-gray-400 hover:text-red-400 text-sm transition-colors px-3 py-1.5 rounded-lg border border-white/5 hover:border-red-500/20 flex items-center gap-1.5">
              <LogoutIcon /><span>تسجيل خروج</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex gap-2 mb-8">
          {[
            { tab: "overview", icon: <OverviewIcon />, label: "نظرة عامة" },
            { tab: "messages", icon: <MessagesIcon />, label: "الرسائل", badge: newMessages },
            { tab: "users", icon: <UsersIcon />, label: "المستخدمين" },
          ].map(({ tab, icon, label, badge }) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 relative ${activeTab === tab ? "bg-teal-500 text-white" : "bg-white/[0.02] text-gray-400 hover:text-white border border-white/5"}`}>
              {icon}{label}
              {badge > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">{badge}</span>}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { label: "إجمالي الرسائل", value: messages.length, icon: <MailIcon /> },
                { label: "رسائل جديدة", value: newMessages, icon: <MessagesIcon /> },
                { label: "اليوم", value: todayMessages, icon: <CalendarIcon /> },
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="text-teal-400 mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h2 className="text-white font-semibold text-lg mb-4">آخر الرسائل</h2>
              {messages.slice(0, 5).map(msg => (
                <div key={msg.id} className="flex items-start gap-4 py-4 border-b border-white/5 last:border-0">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-sm">{msg.name?.charAt(0)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-medium text-sm">{msg.name}</span>
                      <span className="text-gray-500 text-xs">{new Date(msg.created_at).toLocaleDateString("ar-SA")}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{msg.email}</p>
                    <p className="text-gray-300 text-sm mt-1 truncate">{msg.details}</p>
                  </div>
                  {!msg.read && <span className="w-2 h-2 bg-teal-400 rounded-full mt-2" />}
                </div>
              ))}
              {messages.length === 0 && <p className="text-gray-500 text-sm py-8 text-center">لا توجد رسائل</p>}
            </div>
          </div>
        )}

        {activeTab === "messages" && (
          loading ? <div className="text-center py-20 text-gray-400">جاري التحميل...</div> :
          messages.length === 0 ? <div className="text-center py-20 text-gray-500">لا توجد رسائل</div> :
          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`p-5 rounded-xl border ${msg.read ? "border-white/5 bg-white/[0.02]" : "border-teal-500/20 bg-teal-500/[0.02]"}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-sm">{msg.name?.charAt(0)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{msg.name}</span>
                      <span className="text-gray-500 text-xs">{new Date(msg.created_at).toLocaleDateString("ar-SA")}</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-1">{msg.email}</p>
                    {msg.project_type && <span className="inline-block bg-white/[0.03] text-gray-400 text-xs px-2 py-0.5 rounded-full mb-2">{msg.project_type}</span>}
                    <p className="text-gray-300 text-sm mt-2">{msg.details}</p>
                    <div className="flex gap-3 mt-3">
                      {!msg.read && <button onClick={() => handleMarkRead(msg.id)} className="text-teal-400 text-xs hover:underline flex items-center gap-1"><EyeIcon />تعليم كمقروء</button>}
                      <a href={`mailto:${msg.email}`} className="text-gray-400 text-xs hover:underline flex items-center gap-1"><ReplyIcon />رد</a>
                      <button onClick={() => handleDelete(msg.id)} className="text-red-400 text-xs hover:underline flex items-center gap-1"><TrashIcon />حذف</button>
                    </div>
                  </div>
                  {!msg.read && <span className="w-2 h-2 bg-teal-400 rounded-full mt-2" />}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "users" && <UsersTab showToast={showToast} />}
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}