"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Sparkles,
  Send,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";
import { createMessage } from "@/lib/supabase";

const contactInfo = [
  {
    icon: Mail,
    label: "بريد إلكتروني",
    value: "deevseed@gmail.com",
    href: "mailto:deevseed@gmail.com",
  },
  {
    icon: MapPin,
    label: "موقعنا",
    value: "السودان، الخرطوم",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project_type: "",
    details: "",
  });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Parallax effects (خفيفة — لأن القسم طويل)
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await createMessage(formData);
      setStatus("success");
      setFormData({ name: "", email: "", project_type: "", details: "" });
      setTimeout(() => setStatus(null), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen overflow-hidden py-24 sm:py-32"
    >
      {/* ═══════ Background Layers (زي Hero) ═══════ */}

      {/* Radial gradient 1 — من فوق */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/15 via-transparent to-transparent" />

      {/* Radial gradient 2 — من تحت */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent" />

      {/* Grid pattern */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.04]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(123,179,224,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(123,179,224,0.5) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </motion.div>

      {/* Glow مركزي */}
      <motion.div
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[700px] lg:w-[900px] h-[400px] sm:h-[700px] lg:h-[900px] rounded-full bg-brand-accent/10 blur-[120px] sm:blur-[150px] pointer-events-none"
      />

      {/* ═══════ Content ═══════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ Header (زي Hero) ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-brand-accent text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>لنزرع شيئاً معاً</span>
          </div>

          {/* H2 */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.15] tracking-tight text-white"
          >
            تواصل
            <br />
            <span className="bg-gradient-to-l from-brand-accent via-brand-light to-brand bg-clip-text text-transparent">
              معنا الآن
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-brand-light/80 max-w-2xl mx-auto leading-relaxed"
          >
            لديك فكرة أو مشروع؟ أخبرنا عنها، ونحن نتولى الباقي. نرد عادةً خلال
            24 ساعة.
          </motion.p>
        </motion.div>

        {/* ═══════ Two-Column Grid ═══════ */}
        <div className="grid md:grid-cols-5 gap-6 sm:gap-8">

          {/* ═══════ Contact Info (Left) ═══════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-brand-light/10 bg-brand-dark/40 backdrop-blur-sm hover:border-brand-accent/30 hover:bg-brand-accent/[0.03] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/20 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div className="pt-1">
                    <p className="text-brand-light/60 text-xs mb-1.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-brand-accent transition-colors text-sm sm:text-base font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm sm:text-base font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Extra Info Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl border border-brand-light/10 bg-gradient-to-br from-brand-accent/[0.05] to-transparent backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">💬</span>
                <h3 className="text-white font-bold text-sm">
                  متاحون للرد خلال 24 ساعة
                </h3>
              </div>
              <p className="text-brand-light/60 text-xs leading-relaxed">
                نستخدم وقتنا في الرد بعناية على كل رسالة — توقع إجابة مدروسة
                من فريقنا.
              </p>
            </motion.div>
          </motion.div>

          {/* ═══════ Contact Form (Right) ═══════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="relative p-6 sm:p-8 rounded-2xl border border-brand-light/10 bg-brand-dark/40 backdrop-blur-sm space-y-5"
            >
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-accent/[0.03] to-transparent pointer-events-none" />

              {/* Row 1 — Name + Email */}
              <div className="relative grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-brand-light/80 text-sm mb-2 font-medium">
                    الاسم
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أحمد محمد"
                    className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-brand-light/30 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-brand-light/80 text-sm mb-2 font-medium">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ahmed@example.com"
                    className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-brand-light/30 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              {/* Row 2 — Project Type */}
              <div className="relative">
                <label className="block text-brand-light/80 text-sm mb-2 font-medium">
                  نوع المشروع
                </label>
                <select
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2300A3FF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left 1rem center",
                    paddingLeft: "2.5rem",
                  }}
                >
                  <option value="" className="bg-brand-dark">
                    اختر نوع المشروع...
                  </option>
                  <option value="website" className="bg-brand-dark">
                    تطوير موقع إلكتروني
                  </option>
                  <option value="webapp" className="bg-brand-dark">
                    تطبيق ويب متكامل
                  </option>
                  <option value="mobile" className="bg-brand-dark">
                    تطبيق جوال
                  </option>
                  <option value="other" className="bg-brand-dark">
                    استشارة تقنية
                  </option>
                </select>
              </div>

              {/* Row 3 — Details */}
              <div className="relative">
                <label className="block text-brand-light/80 text-sm mb-2 font-medium">
                  تفاصيل المشروع
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="أخبرنا عن فكرتك أو مشروعك..."
                  className="w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-brand-light/30 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 focus:bg-white/[0.05] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`relative w-full group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 ${
                  status === "success"
                    ? "bg-emerald-500 text-white"
                    : status === "error"
                    ? "bg-red-500 text-white"
                    : status === "sending"
                    ? "bg-brand-accent/50 text-brand-dark cursor-not-allowed"
                    : "bg-brand-accent text-brand-dark hover:bg-brand-accent/90 shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 cursor-pointer"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    تم الإرسال بنجاح
                  </>
                ) : status === "error" ? (
                  <>
                    <XCircle className="w-5 h-5" />
                    فشل الإرسال — حاول تاني
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    أرسل الرسالة
                  </>
                )}
              </button>

              {/* Small note */}
              <p className="text-center text-xs text-brand-light/40 pt-1">
                بياناتك محفوظة بشكل آمن ولن تُستخدم في أي غرض آخر.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}