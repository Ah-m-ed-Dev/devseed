export default function Services() {
  return (
    <section id="services" className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          خدماتنا
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">تطوير المواقع</h3>
            <p className="text-gray-600">
              بناء مواقع حديثة باستخدام أحدث التقنيات.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">تصميم واجهات</h3>
            <p className="text-gray-600">
              تصميم واجهات أنيقة وتجربة مستخدم ممتازة.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">تطبيقات الويب</h3>
            <p className="text-gray-600">
              تطبيقات قابلة للتوسع وآمنة للأعمال.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
