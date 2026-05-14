export const metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية لشركة DevSeed - كيف نحمي بياناتك ونتعامل معها.",
};

export default function PrivacyPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 sm:pb-24 px-0 sm:px-6 relative overflow-hidden bg-[#0a0a0f]">
      
      {/* خلفية */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />

      <div className="max-w-3xl mx-auto relative z-10 px-5 sm:px-0">
        
        {/* رأس الصفحة */}
        <div className="mb-10 sm:mb-14">
          <a href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            العودة للرئيسية
          </a>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-gray-400 text-sm">آخر تحديث: ١ يناير ٢٠٢٥</p>
        </div>

        {/* المحتوى */}
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed
          prose-headings:text-white prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-p:mb-6 prose-p:leading-loose
          prose-ul:list-disc prose-ul:mr-6 prose-ul:mb-6
          prose-li:mb-2
          prose-strong:text-white">

          <p>
            في <strong className="text-teal-400">DevSeed</strong>، نحن نقدر خصوصيتك. توضح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتك عند استخدام موقعنا وخدماتنا.
          </p>

          <h2>١. المعلومات التي نجمعها</h2>
          <p>عند تواصلك معنا عبر نموذج الاتصال، قد نجمع:</p>
          <ul>
            <li>الاسم الكامل</li>
            <li>البريد الإلكتروني</li>
            <li>تفاصيل المشروع التي تشاركها معنا</li>
          </ul>
          <p>نحن لا نجمع أي معلومات دفع أو بيانات حساسة عبر هذا الموقع.</p>

          <h2>٢. كيف نستخدم معلوماتك</h2>
          <p>نستخدم المعلومات التي تزودنا بها فقط من أجل:</p>
          <ul>
            <li>الرد على استفسارك وتقديم استشارة أولية</li>
            <li>إعداد عرض تقني ومالي لمشروعك</li>
            <li>التواصل معك بخصوص مشروعك</li>
          </ul>
          <p>نحن <strong>لا نبيع</strong> معلوماتك لأي طرف ثالث، ولا نستخدمها لأغراض تسويقية بدون موافقتك الصريحة.</p>

          <h2>٣. ملفات تعريف الارتباط (Cookies)</h2>
          <p>موقعنا قد يستخدم Cookies تقنية أساسية لتحسين تجربة التصفح. لا نستخدم Cookies للتتبع الإعلاني.</p>

          <h2>٤. أمان البيانات</h2>
          <p>نحن نتخذ إجراءات أمنية معقولة لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الإفصاح.</p>

          <h2>٥. خدمات الطرف الثالث</h2>
          <p>قد نستخدم خدمات خارجية مثل:</p>
          <ul>
            <li><strong>Vercel</strong> لاستضافة الموقع</li>
            <li><strong>GitHub</strong> لإدارة الكود المصدري</li>
          </ul>
          <p>هذه الخدمات لديها سياسات خصوصية خاصة بها. نحن لا نتحكم في ممارساتهم.</p>

          <h2>٦. حقوقك</h2>
          <p>لديك الحق في:</p>
          <ul>
            <li>طلب نسخة من بياناتك التي نحتفظ بها</li>
            <li>طلب تصحيح أو حذف بياناتك</li>
            <li>الانسحاب من أي اتصالات تسويقية</li>
          </ul>

          <h2>٧. تحديثات السياسة</h2>
          <p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة.</p>

          <h2>٨. تواصل معنا</h2>
          <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا:</p>
          <ul>
            <li>البريد الإلكتروني: <a href="mailto:hello@devseed.com" className="text-teal-400 hover:underline">hello@devseed.com</a></li>
            <li>نموذج الاتصال: <a href="/#contact" className="text-teal-400 hover:underline">تواصل معنا</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
    }
