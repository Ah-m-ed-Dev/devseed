export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">تواصل معنا</h2>
        <p className="text-gray-600 mb-8">
          لديك مشروع أو فكرة؟ تواصل معنا الآن!
        </p>
        <form className="grid gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="الاسم"
            className="p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <textarea
            placeholder="رسالتك"
            className="p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 transition"
          >
            أرسل الرسالة
          </button>
        </form>
      </div>
    </section>
  );
}
