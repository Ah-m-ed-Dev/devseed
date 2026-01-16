export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} DevSeed. جميع الحقوق محفوظة.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-teal-400">فيسبوك</a>
          <a href="#" className="hover:text-teal-400">تويتر</a>
          <a href="#" className="hover:text-teal-400">لينكدإن</a>
        </div>
      </div>
    </footer>
  );
}
