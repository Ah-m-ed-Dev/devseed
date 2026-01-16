"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* الشعار */}
        <span className="text-2xl font-bold text-teal-600">
          DevSeed 🌱
        </span>

        {/* القائمة على Desktop */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-teal-600 transition">خدماتنا</a>
          <a href="#projects" className="hover:text-teal-600 transition">مشاريعنا</a>
          <a href="#about" className="hover:text-teal-600 transition">من نحن</a>
          <a href="#contact" className="hover:text-teal-600 transition">تواصل معنا</a>
        </div>

        {/* زر الموبايل */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
        >
          <span className="sr-only">فتح القائمة</span>
          {/* أيقونة الهامبرغر */}
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-teal-600 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-teal-600 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-teal-600 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* قائمة الموبايل */}
      <div
        className={`md:hidden bg-white shadow-md absolute w-full top-16 left-0 transition-max-height duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          <a href="#services" onClick={() => setOpen(false)} className="hover:text-teal-600 transition">خدماتنا</a>
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-teal-600 transition">مشاريعنا</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-teal-600 transition">من نحن</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-teal-600 transition">تواصل معنا</a>
        </div>
      </div>
    </header>
  );
}
