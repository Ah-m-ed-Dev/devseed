"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "الخدمات", href: "#services" },
    { name: "أعمالنا", href: "#work" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* الشعار */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-teal-400 font-bold text-2xl hover:scale-105 transition-transform group"
        >
          <span className="text-3xl group-hover:animate-bounce">🌱</span>
          <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            DevSeed
          </span>
        </Link>

        {/* روابط سطح المكتب */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  handleSmoothScroll(e, link.href.replace("#", ""));
                }
              }}
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium relative group"
            >
              {link.name}
              {/* خط تحت الرابط عند التحويم */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          {/* زر CTA في النافبار */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5"
          >
            ابدأ مشروعك
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* زر القائمة للجوال */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2 transition-colors"
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* قائمة الجوال */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5 animate-in slide-in-from-top-2 duration-300">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    handleSmoothScroll(e, link.href.replace("#", ""));
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-5 py-3 rounded-xl font-medium text-sm hover:bg-teal-400 transition-all mt-2"
            >
              ابدأ مشروعك
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}