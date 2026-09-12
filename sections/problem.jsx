"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Zap, TrendingDown } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import Card from "@/components/ui/card";

const problems = [
  {
    icon: TrendingDown,
    title: "كود بطيء",
    desc: "مشاريع بتتعطل مع كل تحديث وبتستهلك وقت ومجهود في الصيانة.",
  },
  {
    icon: AlertTriangle,
    title: "حلول مؤقتة",
    desc: "بتش فوق بتش لحد ما تفقد السيطرة على الكود نفسه.",
  },
  {
    icon: Zap,
    title: "أداء ضعيف",
    desc: "المستخدمين بيهربوا قبل ما يشوفوا قيمة منتجك الحقيقية.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="⚠️ المشكلة"
          title="المشكلة مش في الفكرة..."
          titleAccent="المشكلة في التنفيذ"
          description="كتير من الشركات عندها أفكار عظيمة بس بتفشل في التنفيذ بسبب مشاكل تقنية."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-light/70 leading-relaxed">
                    {p.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}