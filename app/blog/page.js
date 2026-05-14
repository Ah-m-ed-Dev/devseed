export const metadata = {
  title: "المدونة",
  description: "مقالات تقنية، دراسات حالة، ونصائح عملية في تطوير البرمجيات وتصميم الواجهات.",
};

const blogPosts = [
  {
    slug: "mvp-launch-2-months",
    title: "كيف ساعدنا عميلاً في إطلاق MVP خلال شهرين فقط",
    excerpt: "قصة مشروع كامل من الفكرة إلى الإطلاق. كيف استخدمنا Next.js و Supabase لبناء منتج قابل للتوسع بسرعة.",
    date: "٢٥ ديسمبر ٢٠٢٤",
    readTime: "٧ دقائق",
    category: "دراسة حالة",
  },
  {
    slug: "why-nextjs-2025",
    title: "لماذا نعتقد أن Next.js هو الخيار الأمثل لتطبيقات الويب في ٢٠٢٥",
    excerpt: "مقارنة شاملة بين أطر العمل الحديثة، ولماذا نرشح Next.js لمشروعك القادم.",
    date: "٢٠ ديسمبر ٢٠٢٤",
    readTime: "٥ دقائق",
    category: "تقنية",
  },
  {
    slug: "startup-mistakes",
    title: "٥ أخطاء قاتلة ترتكبها الشركات الناشئة عند بناء منتجها الرقمي الأول",
    excerpt: "تجنب هذه الأخطاء الشائعة التي تكلف الشركات الناشئة الوقت والمال.",
    date: "١٥ ديسمبر ٢٠٢٤",
    readTime: "٦ دقائق",
    category: "نصائح",
  },
  {
    slug: "react-native-vs-flutter",
    title: "تطوير تطبيقك باستخدام React Native أم Flutter: مقارنة عملية",
    excerpt: "دليل عملي لمساعدتك في اختيار التقنية الأنسب لتطبيق الجوال القادم.",
    date: "١٠ ديسمبر ٢٠٢٤",
    readTime: "٨ دقائق",
    category: "مقارنة",
  },
  {
    slug: "aws-scalable-infrastructure",
    title: "دليلك الشامل لبناء بنية تحتية سحابية قابلة للتوسع على AWS",
    excerpt: "خطوات عملية لتصميم بنية تحتية تنمو مع تطبيقك من أول ١٠٠ مستخدم إلى الملايين.",
    date: "٥ ديسمبر ٢٠٢٤",
    readTime: "١٠ دقائق",
    category: "تقنية",
  },
  {
    slug: "translate-idea-to-requirements",
    title: "كيف تترجم فكرتك إلى متطلبات تقنية واضحة: دليل لرواد الأعمال غير التقنيين",
    excerpt: "خطوات بسيطة لتحويل فكرتك إلى وثيقة متطلبات يمكن لأي مطور فهمها والعمل عليها.",
    date: "١ ديسمبر ٢٠٢٤",
    readTime: "٥ دقائق",
    category: "نصائح",
  },
  {
    slug: "how-we-ensure-code-quality",
    title: "كيف نضمن جودة الكود في DevSeed: رحلتنا مع الاختبارات الآلية ومراجعة الكود",
    excerpt: "نشارك عملياتنا الداخلية لضمان كود نظيف وقابل للتوسع في كل مشروع.",
    date: "٢٨ نوفمبر ٢٠٢٤",
    readTime: "٧ دقائق",
    category: "منهجية العمل",
  },
  {
    slug: "ai-impact-software-2025",
    title: "تأثير الذكاء الاصطناعي على تطوير البرمجيات في ٢٠٢٥ وما بعده",
    excerpt: "كيف تغير أدوات مثل Copilot و Cursor طريقتنا في كتابة الكود وتصميم التطبيقات.",
    date: "٢٢ نوفمبر ٢٠٢٤",
    readTime: "٦ دقائق",
    category: "تقنية",
  },
  {
    slug: "what-happens-after-contact",
    title: "ماذا يحدث بعد أن تتواصل معنا؟ رحلة مشروعك في DevSeed خطوة بخطوة",
    excerpt: "الشفافية الكاملة: من الاستشارة المجانية إلى الإطلاق والدعم.",
    date: "١٨ نوفمبر ٢٠٢٤",
    readTime: "٥ دقائق",
    category: "منهجية العمل",
  },
  {
    slug: "web-app-security",
    title: "الأمان في تطبيقات الويب ليس رفاهية: ١٠ ممارسات أمنية نطبقها في كل مشروع",
    excerpt: "تعرف على ممارسات الأمان الأساسية التي نطبقها لحماية تطبيقات عملائنا.",
    date: "١٢ نوفمبر ٢٠٢٤",
    readTime: "٨ دقائق",
    category: "تقنية",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 sm:pb-24 px-0 sm:px-6 relative overflow-hidden bg-[#0a0a0f]">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10 px-5 sm:px-0">
        
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={`/blog/${post.slug}`}
              className="group relative p-6 sm:p-8 border-b sm:border border-white/5 bg-white/[0.02] sm:rounded-2xl hover:bg-white/[0.04] hover:border-teal-500/20 transition-all duration-500 sm:hover:-translate-y-1 last:border-b-0 sm:last:border-b"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300 leading-relaxed">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>{post.readTime} قراءة</span>
                </div>
                <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 p-8 sm:rounded-2xl border-t sm:border border-white/5 bg-white/[0.02]">
          <h3 className="text-xl font-semibold text-white mb-2">هل لديك فكرة تريد مناقشتها؟</h3>
          <p className="text-gray-400 text-sm mb-6">نحن هنا لمساعدتك في تحويل فكرتك إلى واقع.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25">
            تواصل معنا
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}