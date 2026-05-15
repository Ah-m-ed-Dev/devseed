export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-0 sm:px-6 relative overflow-hidden bg-[#0a0a0f]">
      
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* الشارة العلوية */}
        <div className="text-center mb-8 px-5 sm:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <span>لنزرع شيئاً معاً</span>
          </div>
        </div>

        {/* العنوان */}
        <div className="text-center mb-12 px-5 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4">
            تواصل
            <span className="text-teal-400"> معنا</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            لديك فكرة أو مشروع؟ أخبرنا عنها، ونحن نتولى الباقي. نرد عادةً خلال 24 ساعة.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-0 sm:gap-8 max-w-4xl mx-auto px-0 sm:px-0">
          
          {/* معلومات التواصل */}
          <div className="md:col-span-2 space-y-0 sm:space-y-6 px-5 sm:px-0 mb-6 sm:mb-0">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                ),
                label: "بريد إلكتروني",
                value: "hello@devseed.com",
                href: "mailto:hello@devseed.com",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 11.75a29.94 29.94 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29.94 29.94 0 0 0 .46-5.25 29.94 29.94 0 0 0-.46-5.33z" />
                    <path d="M9.75 9.31l5.47 4.88-5.47 4.88V9.31z" />
                  </svg>
                ),
                label: "دعم فني",
                value: "support@devseed.com",
                href: "mailto:support@devseed.com",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "موقعنا",
                value: "السودان، الخرطوم",
                href: null,
              },
            ].map((info, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border-b sm:border border-white/5 bg-white/[0.02] sm:rounded-xl hover:border-teal-500/20 transition-all duration-300 last:border-b-0 sm:last:border-b">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-white hover:text-teal-400 transition-colors text-sm font-medium">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* نموذج التواصل */}
          <div className="md:col-span-3 px-5 sm:px-0">
            <form className="space-y-4 p-6 sm:p-8 rounded-none sm:rounded-2xl border-0 sm:border border-white/5 bg-white/[0.02]">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">الاسم</label>
                  <input
                    type="text"
                    placeholder="أحمد محمد"
                    className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    placeholder="ahmed@example.com"
                    className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">نوع المشروع</label>
                <select className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-gray-400 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all">
                  <option value="">اختر نوع المشروع...</option>
                  <option value="website">تطوير موقع إلكتروني</option>
                  <option value="webapp">تطبيق ويب متكامل</option>
                  <option value="mobile">تطبيق جوال</option>
                  <option value="other">استشارة تقنية</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">تفاصيل المشروع</label>
                <textarea
                  rows="4"
                  placeholder="أخبرنا عن فكرتك أو مشروعك..."
                  className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5"
              >
                أرسل الرسالة
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}