import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 relative overflow-hidden bg-[#0a0a0f]">
      
      {/* خلفية */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        
        {/* أيقونة 404 */}
        <div>
          <span className="text-5xl font-mono font-bold text-teal-400">404</span>
        </div>

        {/* العنوان */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          الصفحة غير موجودة
        </h1>

        {/* الوصف */}
        <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
          يبدو أن هذه البذرة لم تنبت بعد! الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>

        {/* أزرار */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25 w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            العودة للرئيسية
          </Link>
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 transition-all w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            تصفح المدونة
          </Link>
        </div>

        {/* نص ختامي */}
        <p className="text-gray-600 text-sm mt-10">
          أو تواصل معنا: <a href="mailto:hello@devseed.com" className="text-teal-400 hover:underline">hello@devseed.com</a>
        </p>
      </div>
    </section>
  );
}