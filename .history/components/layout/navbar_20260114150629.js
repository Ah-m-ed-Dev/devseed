"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  // أيقونات SVG جاهزة للاستخدام
  const icons = {
    services: (
      <svg
        className="w-5 h-5 inline-block mr-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    projects: (
      <svg
        className="w-5 h-5 inline-block mr-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    about: (
      <svg
        className="w-5 h-5 inline-block mr-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2 0 4-1 4-3s-2-3-4-3-4 1-4 3 2 3 4 3z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14v8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    contact: (
      <svg
        className="w-5 h-5 inline-block mr-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 10l-9 6-9-6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4v16" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* الشعار */}
        <span className="text-2xl font-bold text-teal-600">
          DevSeed 🌱
        </span>

        {/* القائمة على Desktop */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-teal-600 transition">
            {icons.services}خدماتنا
          </a>
          <a href="#projects" className="hover:text-teal-600 transition">
            {icons.projects}مشاريعنا
          </a>
          <a href="#about" className="hover:text-teal-600 transition">
            {icons.about}من نحن
          </a>
          <a href="#contact" className="hover:text-teal-600 transition">
            {icons.contact}تواصل معنا
          </a>
        </div>

        {/* زر الموبايل */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
        >
          <span className="sr-only">فتح القائمة</span>
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
          <a href="#services" onClick={() => setOpen(false)} className="hover:text-teal-600 transition">
            {icons.services}خدماتنا
          </a>
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-teal-600 transition">
            {icons.projects}مشاريعنا
          </a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-teal-600 transition">
            {icons.about}من نحن
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-teal-600 transition">
            {icons.contact}تواصل معنا
          </a>
        </div>
      </div>
    </header>
  );
}
