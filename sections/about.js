export default function About() {
  const stats = [
    { number: "+50", label: "مشروع مكتمل" },
    { number: "+30", label: "عميل سعيد" },
    { number: "4", label: "سنوات خبرة" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-[#06060a]">
      
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* وهج مركزي */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* الشارة العلوية */}
        <div className="text-center mb-8">
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
        <div className="text-center">
          
          {/* أيقونة كبيرة مع تأثير نبض */}
          <div className="mb-10 inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-teal-500/10 border border-teal-500/20 text-teal-400 animate-pulse">
            <span className="text-5xl font-mono font-bold">&lt;/&gt;</span>
          </div>

          {/* العنوان */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            نحن لا نكتب
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent"> كوداً</span>
            <br />
            نحن
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent"> نزرع حلولاً</span>
          </h2>

          {/* النص الوصفي */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            في{" "}
            <span className="text-teal-400 font-semibold">DevSeed</span>
            {" "}نؤمن أن كل مشروع يبدأ كبذرة. نجمع بين الشغف التقني والخبرة العميقة لنحول أفكارك إلى منتجات رقمية قوية، سريعة، وقابلة للنمو. لسنا مجرد مطورين، نحن شركاء في رحلة نجاحك.
          </p>

          {/* الإحصائيات */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* القيم الأساسية */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
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
              <div key={index} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-teal-500/20 transition-all duration-300 group">
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