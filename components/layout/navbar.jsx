"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#services", label: "خدماتنا" },
  { href: "/#work", label: "أعمالنا" },
  { href: "/#about", label: "من نحن" },
  { href: "/blog", label: "المدونة" },
  { href: "/pricing", label: "الباقات" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 30);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-xl border-b border-brand-light/10 py-2 sm:py-3"
          : "bg-transparent py-3 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-lg overflow-hidden ring-1 ring-brand-accent/30">
              <Image
                src="/devlogo.jpg"
                alt="DevSeed Logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">
              DevSeed
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 lg:px-4 py-2 text-sm text-brand-light/80 hover:text-white hover:bg-brand-accent/10 rounded-full transition-all"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              ابدأ مشروعك
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden overflow-hidden bg-brand-dark/95 backdrop-blur-xl border-t border-brand-light/10"
        >
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block px-4 py-3 text-brand-light/80 hover:text-white hover:bg-brand-accent/10 rounded-lg transition text-sm sm:text-base"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 sm:pt-4">
              <Button
                href="/contact"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                ابدأ مشروعك
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}