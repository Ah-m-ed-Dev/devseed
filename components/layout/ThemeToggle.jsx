"use client";

import { useState, useEffect } from "react";

const SunIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("devseed-theme");
    if (saved === "light") {
      setDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.add("light");
      localStorage.setItem("devseed-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("devseed-theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <button
      onClick={toggle}
      className="text-gray-300 hover:text-teal-400 transition-colors text-xs lg:text-sm font-medium whitespace-nowrap px-1"
      title={dark ? "الوضع الفاتح" : "الوضع الداكن"}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}