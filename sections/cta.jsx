"use client";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Sprout } from "lucide-react";
import Button from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <motion.div
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-brand-accent/15 border border-brand-accent/40 mb-6 sm:mb-8"
        >
          <Sprout className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-brand-accent" />
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white">
          جاهز تزرع
          <br />
          <span className="text-brand-accent">فكرتك</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-light/80 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          خلينا نحول الفكرة لمنتج حقيقي في 6 أسابيع.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => toast.success("وصلنا طلبك! هنتواصل معاك قريب 🌱")}
          >
            ابدأ رحلتك الآن
          </Button>
          <Button
            href="/pricing"
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto"
          >
            شوف الباقات
          </Button>
        </div>
      </motion.div>
    </section>
  );
}