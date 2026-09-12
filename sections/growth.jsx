"use client";
import { motion } from "framer-motion";
import { Sprout, Leaf, TreePine, GitBranch, TreeDeciduous } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const stages = [
  {
    title: "البذرة",
    desc: "فكرة صغيرة في دماغك، بتحتاج مكان تنمو فيه",
    num: "01",
    icon: Sprout,
  },
  {
    title: "البرعم",
    desc: "أول نسخة MVP بتطلع للنور وتثبت الفكرة",
    num: "02",
    icon: Leaf,
  },
  {
    title: "الجذع",
    desc: "بنية تحتية قوية ومعمارية نظيفة",
    num: "03",
    icon: TreePine,
  },
  {
    title: "الفروع",
    desc: "مميزات بتتوسع بذكاء مع نمو عملك",
    num: "04",
    icon: GitBranch,
  },
  {
    title: "الشجرة",
    desc: "منتج كامل... يكبر معاك ويتكيّف",
    num: "05",
    icon: TreeDeciduous,
  },
];

// ═══════════════════════════════════════════
// Desktop Stage Card
// ═══════════════════════════════════════════
function DesktopStage({ stage, index }) {
  const Icon = stage.icon;

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
        whileHover={{ scale: 1.08, rotate: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative z-10 mb-6"
      >
        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl bg-brand-dark border-2 border-brand-accent/40 flex items-center justify-center shadow-xl shadow-brand-accent/20 group-hover:shadow-brand-accent/40 group-hover:border-brand-accent/70 transition-all duration-300">
          <Icon className="w-9 h-9 lg:w-11 lg:h-11 text-brand-accent" />
        </div>

        {/* Number badge */}
        <div className="absolute -top-2 -right-2 w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-brand-accent text-brand-dark text-xs lg:text-sm font-bold flex items-center justify-center ring-4 ring-brand-dark">
          {stage.num}
        </div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-brand-accent/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Title */}
      <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
        {stage.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-brand-light/70 leading-relaxed max-w-[220px]">
        {stage.desc}
      </p>
    </motion.div>
  );
}

// ═══════════════════════════════════════════
// Mobile Stage
// ═══════════════════════════════════════════
function MobileStage({ stage, index }) {
  const Icon = stage.icon;

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
        <div className="w-14 h-14 rounded-xl bg-brand-dark border-2 border-brand-accent/40 flex items-center justify-center shadow-lg shadow-brand-accent/20">
          <Icon className="w-6 h-6 text-brand-accent" />
        </div>
        <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-brand-accent text-brand-dark text-[10px] font-bold flex items-center justify-center ring-2 ring-brand-dark">
          {stage.num}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <h3 className="text-lg font-bold text-white mb-1">{stage.title}</h3>
        <p className="text-sm text-brand-light/70 leading-relaxed">
          {stage.desc}
        </p>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════
// Main
// ═══════════════════════════════════════════
export default function Growth() {
  return (
    <section
      id="growth"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-brand-accent/[0.08] rounded-full blur-[100px] sm:blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          badge="🌱 رحلة النمو"
          title="من فكرة"
          titleAccent="لشجرة كاملة"
          description="كل مشروع بيبدأ صغير، وبينمو مع الوقت — إحنا بنساعدك في كل مرحلة."
        />

        {/* ═══════ Desktop: Horizontal Timeline ═══════ */}
        <div className="hidden md:block relative">
          {/* Connecting Line */}
          <div className="absolute top-10 lg:top-12 left-0 right-0 h-px">
            <div className="h-full bg-gradient-to-l from-transparent via-brand-accent/40 to-transparent" />
          </div>

          {/* Stages Row */}
          <div className="relative flex items-start justify-between gap-4">
            {stages.map((s, i) => (
              <DesktopStage key={i} stage={s} index={i} />
            ))}
          </div>
        </div>

        {/* ═══════ Mobile: Vertical Timeline ═══════ */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <div className="absolute right-7 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-accent/40 via-brand-accent/30 to-transparent" />

          {/* Stages */}
          <div className="space-y-8">
            {stages.map((s, i) => (
              <MobileStage key={i} stage={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}