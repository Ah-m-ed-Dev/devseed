"use client";
import { motion } from "framer-motion";
import {
  Search,
  Compass,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const steps = [
  {
    n: "01",
    t: "اكتشاف",
    d: "بنفهم فكرتك وعملك وأهدافك بعمق",
    icon: Search,
  },
  {
    n: "02",
    t: "استراتيجية",
    d: "بنرسم خريطة المنتج والـ roadmap",
    icon: Compass,
  },
  {
    n: "03",
    t: "تصميم",
    d: "بروتوتايب تفاعلي قبل أي سطر كود",
    icon: PenTool,
  },
  {
    n: "04",
    t: "تطوير",
    d: "كود نظيف + اختبارات + مراجعات",
    icon: Code2,
  },
  {
    n: "05",
    t: "إطلاق",
    d: "Deploy + monitoring + دعم مستمر",
    icon: Rocket,
  },
];

// ═══════════════════════════════════════════
// Desktop Step
// ═══════════════════════════════════════════
function DesktopStep({ step, index }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex-1 flex flex-col items-center text-center group"
    >
      {/* Icon box */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative z-10 mb-6"
      >
        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-brand-dark to-brand/30 border-2 border-brand-accent/40 flex flex-col items-center justify-center shadow-xl shadow-brand-accent/20 group-hover:shadow-brand-accent/40 group-hover:border-brand-accent/70 transition-all duration-300">
          <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-brand-accent mb-0.5" />
          <span className="text-[10px] lg:text-xs font-mono text-brand-light/50">
            {step.n}
          </span>
        </div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-brand-accent/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Title */}
      <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
        {step.t}
      </h3>

      {/* Description */}
      <p className="text-sm text-brand-light/70 leading-relaxed max-w-[220px]">
        {step.d}
      </p>
    </motion.div>
  );
}

// ═══════════════════════════════════════════
// Mobile Step
// ═══════════════════════════════════════════
function MobileStep({ step, index }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex gap-4 items-start"
    >
      {/* Icon */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-dark to-brand/30 border-2 border-brand-accent/40 flex items-center justify-center shadow-lg shadow-brand-accent/20">
          <Icon className="w-6 h-6 text-brand-accent" />
        </div>
        <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-brand-accent text-brand-dark text-[10px] font-bold flex items-center justify-center ring-2 ring-brand-dark">
          {step.n}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <h3 className="text-lg font-bold text-white mb-1">{step.t}</h3>
        <p className="text-sm text-brand-light/70 leading-relaxed">
          {step.d}
        </p>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════
// Main
// ═══════════════════════════════════════════
export default function Process() {
  return (
    <section
      id="process"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          badge="🚀 المنهجية"
          title="مراحل"
          titleAccent="النمو"
          description="منهجية واضحة من أول يوم لحد الإطلاق وما بعده — كل خطوة مدروسة."
        />

        {/* ═══════ Desktop: Horizontal Stepper ═══════ */}
        <div className="hidden md:block relative">
          {/* Connecting Line */}
          <div className="absolute top-10 lg:top-12 left-0 right-0 h-px">
            <div className="h-full bg-gradient-to-l from-transparent via-brand-accent/40 to-transparent" />
          </div>

          {/* Steps Row */}
          <div className="relative flex items-start justify-between gap-4">
            {steps.map((s, i) => (
              <DesktopStep key={i} step={s} index={i} />
            ))}
          </div>
        </div>

        {/* ═══════ Mobile: Vertical Timeline ═══════ */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <div className="absolute right-7 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-accent/40 via-brand-accent/30 to-transparent" />

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((s, i) => (
              <MobileStep key={i} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}