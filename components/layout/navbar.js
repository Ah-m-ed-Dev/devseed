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
      <div className="w-full px-4 py-2.5 flex items-center justify-between">

        {/* الشعار */}
        <Link 
          href="/" 
          className="flex items-center gap-1.5 text-white font-bold text-base shrink-0"
        >
          <span className="text-teal-400 font-mono text-lg">&lt;/&gt;</span>
          <span>DevSeed</span>
        </Link>

        {/* روابط سطح المكتب + زر CTA */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  handleSmoothScroll(e, link.href.replace("#", ""));
                }
              }}
              className="text-gray-300 hover:text-teal-400 transition-colors text-xs xl:text-sm font-medium whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="inline-flex items-center gap-1 bg-teal-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs xl:text-sm hover:bg-teal-400 transition-all whitespace-nowrap shrink-0"
          >
            ابدأ مشروعك
          </a>
        </div>

        {/* زر القائمة للجوال */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-white p-1 transition-colors shrink-0"
          aria-label="القائمة"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5">
          <div className="px-4 py-4 flex flex-col gap-1">
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
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}