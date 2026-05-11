export default function Projects() {
  const projects = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M12 6v7" />
          <path d="M8 10h8" />
        </svg>
      ),
      title: "منصة تعليمية تفاعلية",
      description: "منصة تعليم إلكتروني متكاملة تدعم البث المباشر، الاختبارات التفاعلية، ومتابعة تقدم الطالب.",
      tech: "Next.js / Supabase / WebRTC",
      color: "from-teal-400 to-emerald-400",
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      ),
      title: "نظام إدارة المخزون",
      description: "لوحة تحكم ذكية لإدارة المخزون والمبيعات مع تقارير فورية وتنبؤات بالطلب باستخدام الذكاء الاصطناعي.",
      tech: "React / Node.js / MongoDB",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "تطبيق توصيل ذكي",
      description: "تطبيق جوال لتوصيل الطلبات مع تتبع حي للسائق، نظام دفعات متكامل، ولوحة تحكم للإدارة.",
      tech: "React Native / Firebase / AWS",
      color: "from-orange-400 to-red-400",
    },
  ];

  return (
    <section id="work" className="py-16 sm:py-24 px-0 sm:px-6 relative overflow-hidden bg-[#0a0a0f]">
      
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* عنوان القسم */}
        <div className="text-center mb-12 sm:mb-16 px-5 sm:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M7 16l4-8 4 4 4-6" />
            </svg>
            <span>حصاد ما زرعناه</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            مشاريع
            <span className="text-teal-400"> نفتخر بها</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            كل مشروع هو بذرة آتت ثمارها. تصفح نماذج من أعمالنا التي صنعت فرقاً حقيقياً لعملائنا.
          </p>
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6 px-0 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 border-b sm:border border-white/5 bg-white/[0.02] sm:rounded-2xl hover:bg-white/[0.04] hover:border-teal-500/20 transition-all duration-500 sm:hover:-translate-y-2 last:border-b-0 sm:last:border-b"
            >
              {/* وهج خلف البطاقة */}
              <div className="absolute inset-0 sm:rounded-2xl bg-teal-500/0 group-hover:bg-teal-500/[0.03] transition-colors duration-500" />

              <div className="relative z-10">
                {/* أيقونة المشروع */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  {project.icon}
                </div>

                {/* عنوان المشروع */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* وصف المشروع */}
                <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* التقنيات المستخدمة */}
                <div className="pt-4 border-t border-white/5">
                  <span className="text-xs text-gray-500 font-mono">{project.tech}</span>
                </div>

                {/* سهم يظهر عند hover */}
                <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                  <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* نص ختامي */}
        <p className="text-center text-gray-500 text-sm mt-8 sm:mt-12 px-5">
          هذه مجرد نماذج. كل مشروع جديد هو فرصة لنزرع شيئاً مختلفاً ✨
        </p>
      </div>
    </section>
  );
}