const SparklesIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
    <path d="M18 15l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
    <path d="M5 19l.5 2L8 21.5 5.5 22 5 24l-.5-2L2 21.5 4.5 21 5 19z" />
  </svg>
);

const LeafIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 2 17 2 17 2 19 10 11 20z" />
    <path d="M3 21c2.5-3 5-5 8-6" />
  </svg>
);

const ArrowDownIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14" />
    <path d="M19 12l-7 7-7-7" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f]">
      
      {/* شبكة التربة */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* بذور متطايرة */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping [animation-duration:3s] opacity-40" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-teal-300 rounded-full animate-ping [animation-duration:4s] [animation-delay:1s] opacity-30" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-ping [animation-duration:5s] [animation-delay:2s] opacity-40" />
      </div>
      
      {/* وهج النمو */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[100px]" />

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 text-center w-full px-5 sm:px-6">
        
        {/* الشارة العلوية */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-sm mb-6 sm:mb-8">
          <SparklesIcon className="w-4 h-4" />
          <span>نحو ٣٠٠ شركة ناشئة واثقة من منتجها الرقمي</span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-[2rem] sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white">
          فكرتك بذرة،
          <br />
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
            ونحن نعرف كيف ننمّيها
          </span>
        </h1>

        {/* النص الوصفي */}
        <p className="text-sm sm:text-xl text-gray-400 w-full mb-6 sm:mb-10 leading-relaxed">
          من الشرارة الأولى لفكرة تطبيقك، نكون معك. DevSeed تبني منتجات رقمية{" "}
          <span className="text-white font-medium">قابلة للتوسع</span>,{" "}
          <span className="text-white font-medium">سريعة الأداء</span>, ومصممة{" "}
          <span className="text-white font-medium">للنمو المستمر</span>.
        </p>

        {/* أزرار الإجراء */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-0 sm:px-0">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg w-full sm:w-auto hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5"
          >
            <span className="group-hover:rotate-12 transition-transform inline-flex">
              <LeafIcon className="w-5 h-5" />
            </span>
            ابدأ مشروعك
          </a>
          
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 transition-all w-full sm:w-auto"
          >
            شاهد أعمالنا
            <ArrowDownIcon className="w-4 h-4" />
          </a>
        </div>

        {/* مؤشرات الثقة */}
        <div className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-400 rounded-full" />
            توصيل في ٣-٤ شهور
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-400 rounded-full" />
            ضمان جودة ٩٥٪
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-400 rounded-full" />
            دعم فني ٢٤/٧
          </div>
        </div>
      </div>

      {/* مؤشر التمرير للأسفل */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDownIcon className="w-5 h-5 text-teal-500/50" />
      </div>
    </section>
  );
}