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
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-4 py-2.5 max-w-7xl mx-auto">
        
        {/* الشعار */}
        <Link 
          href="/" 
          className="flex items-center gap-1 text-white font-bold text-base shrink-0"
        >
          <span className="text-teal-400 font-mono">&lt;/&gt;</span>
          <span>DevSeed</span>
        </Link>

        {/* روابط سطح المكتب */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  handleSmoothScroll(e, link.href.replace("#", ""));
                }
              }}
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="bg-teal-500 text-white px-3 py-1.5 rounded-lg font-medium text-sm hover:bg-teal-400 transition-all whitespace-nowrap shrink-0"
          >
            ابدأ مشروعك
          </a>
        </div>

        {/* زر الهامبرغر */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white p-1 shrink-0"
          aria-label="القائمة"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5">
          <div className="px-4 py-3 flex flex-col">
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
                className="text-gray-300 hover:text-teal-400 text-sm py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-teal-400 transition-all mt-1"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}