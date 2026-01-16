export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">مشاريعنا</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">مشروع 1</h3>
            <p className="text-gray-600">وصف مختصر عن المشروع الأول.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">مشروع 2</h3>
            <p className="text-gray-600">وصف مختصر عن المشروع الثاني.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">مشروع 3</h3>
            <p className="text-gray-600">وصف مختصر عن المشروع الثالث.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
