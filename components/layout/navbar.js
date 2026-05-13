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
    { name: "المدونة", href: "/blog"}, 
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* الشعار */}
        <Link 
          href="/" 
          className="flex items-center gap-1.5 text-white font-bold text-xl hover:scale-105 transition-transform shrink-0"
        >
<span>DevSeed</span>
          <span className="text-teal-400 font-mono">&lt;/&gt;</span>
          
        </Link>

        {/* روابط سطح المكتب + زر CTA */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  handleSmoothScroll(e, link.href.replace("#", ""));
                }
              }}
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium relative group whitespace-nowrap"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="inline-flex items-center gap-1.5 bg-teal-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25 whitespace-nowrap shrink-0"
          >
            ابدأ مشروعك
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5l-7 7 7 7" />
            </svg>
          </a>
        </div>

        {/* زر القائمة للجوال */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white p-1.5 transition-colors shrink-0"
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
          <div className="px-4 py-4 flex flex-col gap-2">
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
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-5 py-3 rounded-xl font-medium text-sm hover:bg-teal-400 transition-all mt-1"
            >
              تواصل معنا
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5l-7 7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}