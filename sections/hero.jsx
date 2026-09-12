"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import Button from "@/components/ui/button";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(123,179,224,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(123,179,224,0.5) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        style={{ scale }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] rounded-full bg-brand-accent/15 blur-[100px] sm:blur-[120px] pointer-events-none"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-brand-accent text-xs sm:text-sm font-medium backdrop-blur-sm"
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>من فكرة... لشجرة كاملة</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-[1.15] tracking-tight text-white"
        >
          نزرع الكود
          <br />
          <span className="bg-gradient-to-l from-brand-accent via-brand-light to-brand bg-clip-text text-transparent">
            نحصد الابتكار
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-light/80 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
        >
          DevSeed شركة برمجة تبني منتجات رقمية من الجذر — سريعة قابلة للتوسع
          وجاهزة للنمو مع أعمالك.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <Button href="/contact" size="lg" className="w-full sm:w-auto">
            ابدأ مشروعك
          </Button>
          <Button
            href="/#work"
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto"
          >
            شوف أعمالنا
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto"
        >
          {[
            { num: "+50", label: "مشروع ناجح" },
            { num: "+30", label: "عميل سعيد" },
            { num: "6", label: "أسابيع للإطلاق" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-accent mb-1">
                {s.num}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-brand-light/70">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-brand-light/60"
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}