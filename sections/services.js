export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "تطوير المواقع",
      description: "نبني مواقع حديثة وسريعة باستخدام Next.js و Tailwind، مهيأة لمحركات البحث وقابلة للتوسع مع نمو عملك.",
      tech: "Next.js / React / Tailwind",
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      ),
      title: "تصميم واجهات المستخدم",
      description: "نصمم واجهات أنيقة وتجربة مستخدم استثنائية، نهتم بأدق التفاصيل لنصنع منتجاً يبهر عملاءك من أول نظرة.",
      tech: "Figma / Framer Motion / UX",
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
          <path d="M16 8L2 22" />
          <path d="M17.5 15H9" />
        </svg>
      ),
      title: "تطبيقات الويب المتكاملة",
      description: "نطور تطبيقات ويب قوية وآمنة، جاهزة لملايين المستخدمين، مع بنية تحتية سحابية تضمن أداءً واستقراراً عاليين.",
      tech: "Node.js / Supabase / AWS",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-[#06060a]">
      
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* عنوان القسم مع ستوري */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span>ماذا نزرع معاً؟</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            خدمات
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent"> برمجية متكاملة</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            من الفكرة إلى الإطلاق، نغطي كل مراحل بناء منتجك الرقمي بأعلى معايير الجودة.
          </p>
        </div>

        {/* بطاقات الخدمات */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-teal-500/20 transition-all duration-500 hover:-translate-y-1"
            >
              {/* وهج خلف البطاقة */}
              <div className="absolute inset-0 rounded-2xl bg-teal-500/0 group-hover:bg-teal-500/[0.03] transition-colors duration-500" />

              <div className="relative z-10">
                {/* أيقونة الخدمة */}
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>

                {/* عنوان الخدمة */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* وصف الخدمة */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* التقنيات المستخدمة */}
                <div className="pt-4 border-t border-white/5">
                  <span className="text-xs text-gray-500 font-mono">{service.tech}</span>
                </div>

                {/* سهم يظهر عند hover */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                  <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* نص أسفل الخدمات */}
        <p className="text-center text-gray-500 text-sm mt-12">
          كل خدمة نقدمها تُبنى على أساس متين، لتنمو مع مشروعك خطوة بخطوة 🌱
        </p>
      </div>
    </section>
  );
}