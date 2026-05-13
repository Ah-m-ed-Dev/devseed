export default function About() {
  const stats = [
    { number: "+50", label: "مشروع مكتمل" },
    { number: "+30", label: "عميل سعيد" },
    { number: "4", label: "سنوات خبرة" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-0 sm:px-6 relative overflow-hidden bg-[#06060a]">
      
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* وهج مركزي */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* الشارة العلوية */}
        <div className="text-center mb-8 px-5 sm:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>قصة البذرة</span>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="text-center px-5 sm:px-0">
          
          {/* أيقونة كبيرة مع تأثير نبض */}
<div className="mb-8 sm:mb-10 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-3xl bg-teal-500/10 border border-teal-500/20 animate-pulse">
  <span className="text-2xl sm:text-3xl font-bold text-white">DevSeed</span>
  <span className="text-4xl sm:text-5xl font-mono font-bold text-teal-400">&lt;/&gt;</span>
</div>
          {/* العنوان */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            نحن لا نكتب
            <span className="text-teal-400"> كوداً</span>
            <br />
            نحن
            <span className="text-teal-400"> نزرع حلولاً</span>
          </h2>

          {/* النص الوصفي */}
          <p className="text-sm sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            في{" "}
            <span className="text-teal-400 font-semibold">DevSeed</span>
            {" "}نؤمن أن كل مشروع يبدأ كبذرة. نجمع بين الشغف التقني والخبرة العميقة لنحول أفكارك إلى منتجات رقمية قوية، سريعة، وقابلة للنمو. لسنا مجرد مطورين، نحن شركاء في رحلة نجاحك.
          </p>

          {/* الإحصائيات */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-lg mx-auto mb-10 sm:mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* القيم الأساسية */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
                title: "جودة الأساس",
                desc: "نكتب كوداً نظيفاً وقابلاً للتوسع منذ اليوم الأول.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
                title: "سرعة في التسليم",
                desc: "نعتمد منهجيات مرنة لتوصيل مشروعك في الوقت المحدد.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "شراكة حقيقية",
                desc: "نفهم أهدافك ونعمل معك كفريق واحد لتحقيقها.",
              },
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-none sm:rounded-2xl border-b sm:border border-white/5 bg-white/[0.02] hover:border-teal-500/20 transition-all duration-300 group last:border-b-0 sm:last:border-b">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4 mx-auto group-hover:bg-teal-500/20 transition-all">
                  {value.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}