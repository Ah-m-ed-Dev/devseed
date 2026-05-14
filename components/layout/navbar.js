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
    { name: "المدونة", href: "/blog" },
{ name: "سياسة الخصوصية", href: "/privacy" },
  ];

  return (
    <>
      <nav className="fixed top-3 sm:top-4 left-0 right-0 z-50 mx-4 lg:mx-auto lg:max-w-3xl xl:max-w-4xl bg-[#0a0a0f]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg shadow-black/20">
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5">
          
          {/* الشعار - أقصى اليمين في RTL */}
          <Link 
            href="/" 
            className="flex items-center gap-1 sm:gap-1.5 text-white font-bold text-sm sm:text-base shrink-0"
          >
            <span className="text-teal-400 font-mono text-base sm:text-lg">&lt;/&gt;</span>
            <span>DevSeed</span>
          </Link>

          {/* روابط سطح المكتب - في المنتصف */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    handleSmoothScroll(e, link.href.replace("#", ""));
                  }
                }}
                className="text-gray-300 hover:text-teal-400 transition-colors text-xs lg:text-sm font-medium whitespace-nowrap px-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* زر ابدأ مشروعك - أقصى اليسار في RTL */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="bg-teal-500 text-white px-2.5 lg:px-3 py-1.5 rounded-lg font-medium text-xs lg:text-sm hover:bg-teal-400 transition-all whitespace-nowrap"
            >
              ابدأ مشروعك
            </a>
          </div>

          {/* زر الهامبرغر - الجوال فقط */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-1 shrink-0"
            aria-label="القائمة"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* قائمة الجوال المنسدلة */}
        {isOpen && (
          <div className="md:hidden border-t border-white/5">
            <div className="px-3 sm:px-4 py-2 flex flex-col">
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
                  className="text-gray-300 hover:text-teal-400 text-sm py-2.5 border-b border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-teal-400 transition-all mt-2 mb-1"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="h-14 sm:h-16" />
    </>
  );
}