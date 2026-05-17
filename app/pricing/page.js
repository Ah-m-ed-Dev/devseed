import Link from "next/link";

export const metadata = {
  title: "الأسعار",
  description: "باقات وخدمات DevSeed البرمجية - اختر الخطة المناسبة لمشروعك.",
};

const plans = [
  {
    name: "البذرة",
    nameEn: "Seed",
    price: "$350",
    period: "للمشروع",
    originalPrice: "$599",
    description: "للمشاريع الصغيرة والنماذج الأولية",
    features: [
      "صفحة هبوط احترافية",
      "تصميم متجاوب كامل",
      "نموذج تواصل",
      "تحسين SEO أساسي",
      "تسليم خلال أسبوع",
      "دعم لمدة ١٥ يوم",
    ],
    color: "from-teal-500 to-teal-400",
    popular: false,
    cta: "ابدأ الآن",
    href: "/#contact",
  },
  {
    name: "النمو",
    nameEn: "Growth",
    price: "$700",
    period: "للمشروع",
    originalPrice: "$1,199",
    description: "للشركات الناشئة والمواقع المتكاملة",
    features: [
      "موقع متعدد الصفحات",
      "لوحة تحكم إدارية",
      "تصميم UI/UX احترافي",
      "SEO متقدم",
      "تكامل API خارجية",
      "تسليم خلال ٣-٤ أسابيع",
      "دعم لمدة ٣٠ يوم",
    ],
    color: "from-teal-400 to-emerald-400",
    popular: true,
    cta: "ابدأ الآن",
    href: "/#contact",
  },
  {
    name: "الحصاد",
    nameEn: "Harvest",
    price: "$1,000",
    period: "للمشروع",
    originalPrice: "$1,799",
    description: "للمشاريع الكبيرة والتطبيقات المعقدة",
    features: [
      "تطبيق ويب متكامل",
      "بنية تحتية سحابية (AWS)",
      "تطبيق جوال (iOS/Android)",
      "نظام مصادقة وأمان متقدم",
      "API مخصصة",
      "اختبارات آلية شاملة",
      "دعم لمدة ٦٠ يوم",
      "صيانة شهرية مجانية",
    ],
    color: "from-purple-400 to-pink-400",
    popular: false,
    cta: "ابدأ الآن",
    href: "/#contact",
  },
];

const faq = [
  {
    q: "كيف يتم احتساب التكلفة النهائية؟",
    a: "التكلفة تعتمد على حجم المشروع والميزات المطلوبة. نقدم عرض سعر دقيق بعد مناقشة متطلباتك.",
  },
  {
    q: "هل هناك تكاليف إضافية؟",
    a: "لا توجد تكاليف مخفية. السعر يشمل التطوير والتصميم والتسليم. رسوم الاستضافة والنطاق منفصلة.",
  },
  {
    q: "كم مدة التسليم؟",
    a: "من أسبوع للمشاريع الصغيرة إلى ٨ أسابيع للتطبيقات المتكاملة. نحدد الجدول الزمني قبل البدء.",
  },
  {
    q: "هل تقدمون ضمان؟",
    a: "نعم، نقدم فترة دعم مجانية حسب الباقة (١٥-٦٠ يوم) لإصلاح أي مشاكل بعد الإطلاق.",
  },
  {
    q: "ماذا لو احتجت تعديلات بعد التسليم؟",
    a: "نقدم خطة صيانة شهرية اختيارية للتحديثات والتحسينات المستمرة.",
  },
];

export default function PricingPage() {
  return (
    <section className="min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-24 relative overflow-hidden bg-[#0a0a0f]">
      
      {/* خلفية */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* زر الرجوع */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            العودة للرئيسية
          </Link>
        </div>

        {/* رأس الصفحة */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span>استثمر في مشروعك</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            باقات
            <span className="text-teal-400"> الأسعار</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            اختر الخطة المناسبة لمشروعك. أسعار تنافسية للشركات الناشئة.
          </p>
        </div>

        {/* بطاقات الأسعار */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-20 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 rounded-2xl border ${
                plan.popular
                  ? "border-teal-500/30 bg-teal-500/[0.03]"
                  : "border-white/5 bg-white/[0.02]"
              } hover:border-teal-500/20 transition-all duration-300 group`}
            >
              {/* شارة الأكثر طلباً */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  الأكثر طلباً
                </div>
              )}

              {/* اسم الباقة */}
              <div className="text-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} bg-opacity-10 mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{plan.nameEn}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-xs">{plan.description}</p>
              </div>

              {/* السعر */}
              <div className="text-center mb-6">
                {plan.originalPrice && (
                  <span className="text-gray-500 line-through text-sm block mb-1">
                    {plan.originalPrice}
                  </span>
                )}
                <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 text-sm mr-1">/{plan.period}</span>
                {plan.originalPrice && (
                  <div className="mt-2">
                    <span className="bg-teal-500/10 text-teal-400 text-xs px-2 py-0.5 rounded-full">
                      وفر {Math.round((1 - parseInt(plan.price.replace(/[^0-9]/g, '')) / parseInt(plan.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                    </span>
                  </div>
                )}
              </div>

              {/* الميزات */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                    <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* زر CTA */}
              <a
                href={plan.href}
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-teal-500 text-white hover:bg-teal-400 shadow-lg shadow-teal-500/25"
                    : "bg-white/[0.03] text-white border border-white/10 hover:bg-white/[0.06]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* الأسئلة الشائعة */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            أسئلة
            <span className="text-teal-400"> شائعة</span>
          </h2>
          
          <div className="space-y-4">
            {faq.map((item, index) => (
              <details key={index} className="group border border-white/5 rounded-xl bg-white/[0.02] hover:border-teal-500/20 transition-all">
                <summary className="px-6 py-4 cursor-pointer text-white font-medium text-sm flex items-center justify-between list-none">
                  {item.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA نهائي */}
        <div className="text-center mt-16 p-8 rounded-2xl border border-white/5 bg-white/[0.02] max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-2">تحتاج خطة مخصصة؟</h3>
          <p className="text-gray-400 text-sm mb-6">كل مشروع فريد. تواصل معنا لمناقشة احتياجاتك ونصمم خطة تناسبك.</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25"
          >
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
