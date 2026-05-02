"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // تغيير شكل النافبار عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // إغلاق القائمة عند النقر على رابط (للموبايل)
  const closeMenu = () => setIsMobileMenuOpen(false);

  // تمرير سلس للقسم المستهدف
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const navLinks = [
    { name: "الخدمات", href: "services", icon: "⚙️" },
    { name: "المشاريع", href: "projects", icon: "📁" },
    { name: "من نحن", href: "about", icon: "👥" },
    { name: "اتصل بنا", href: "contact", icon: "📞" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white/70 backdrop-blur-sm shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 md:px-8 md:py-4">
        {/* الشعار */}
        <a
          href="#"
          onClick={(e) => handleSmoothScroll(e, "hero")}
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent flex items-center gap-2"
        >
          <span className="text-3xl">🌱</span>
          DevSeed
        </a>

        {/* روابط سطح المكتب */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="relative text-gray-700 hover:text-teal-600 transition-colors duration-200 group"
            >
              <span className="flex items-center gap-1">
                {link.icon} {link.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* زر هامبورجر (للموبايل) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
          aria-label="القائمة"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* قائمة الموبايل المنزلقة */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-start gap-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-gray-700 hover:text-teal-600 transition-colors text-lg flex items-center gap-2"
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}