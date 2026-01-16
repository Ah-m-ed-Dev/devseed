export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
          نبني حلول رقمية تنمّي عملك 🌱
        </h1>

        <p className="text-gray-600 mb-8">
          DevSeed شركة تطوير برمجيات متخصصة في بناء مواقع وتطبيقات حديثة،
          سريعة، وقابلة للتوسع.
        </p>

        <a
          href="#contact"
          className="inline-block bg-teal-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-teal-700 transition"
        >
          ابدأ مشروعك
        </a>
      </div>
    </section>
  );
}
