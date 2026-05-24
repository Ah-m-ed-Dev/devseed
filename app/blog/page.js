"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getPosts } from "@/lib/supabase";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data.filter((p) => p.published !== false));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 sm:pb-24 px-0 sm:px-6 relative overflow-hidden bg-[#0a0a0f]">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span>نشارك معرفتنا</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">المدونة</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            مقالات تقنية، دراسات حالة، ونصائح عملية لمساعدتك في بناء منتج رقمي ناجح.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400">جاري التحميل...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">لا توجد مقالات بعد</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6">
            {posts.map((post, index) => (
              <Link
                key={post.id || index}
                href={`/blog/${post.slug}`}
                className="group relative p-6 sm:p-8 border-b sm:border border-white/5 bg-white/[0.02] sm:rounded-2xl hover:bg-white/[0.04] hover:border-teal-500/20 transition-all duration-500 sm:hover:-translate-y-1 last:border-b-0 sm:last:border-b"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.created_at).toLocaleDateString("ar-SA")}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300 leading-relaxed">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>{post.read_time || "5 دقائق"} قراءة</span>
                  </div>
                  <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="text-center mt-12 sm:mt-16 p-8 sm:rounded-2xl border-t sm:border border-white/5 bg-white/[0.02]">
          <h3 className="text-xl font-semibold text-white mb-2">هل لديك فكرة تريد مناقشتها؟</h3>
          <p className="text-gray-400 text-sm mb-6">نحن هنا لمساعدتك في تحويل فكرتك إلى واقع.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25"
          >
            تواصل معنا
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}