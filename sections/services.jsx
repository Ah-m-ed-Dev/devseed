"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Database,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import Card from "@/components/ui/card";

const services = [
  { icon: Code2, title: "تطوير Web", desc: "مواقع وتطبيقات ويب حديثة بـ Next.js و React" },
  { icon: Smartphone, title: "تطبيقات موبايل", desc: "تطبيقات iOS و Android بـ React Native و Flutter" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "نشر وإدارة على AWS Docker و CI/CD" },
  { icon: Palette, title: "UI/UX Design", desc: "تصميم واجهات تخلي المستخدم يعشق منتجك" },
  { icon: Database, title: "Backend & APIs", desc: "بنية خلفية قوية بـ Node PostgreSQL Redis" },
  { icon: Rocket, title: "MVP سريع", desc: "من فكرة لمنتج جاهز في 6 أسابيع" },
];

export default function Services() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="💼 خدماتنا"
          title="فروع"
          titleAccent="DevSeed"
          description="كل فرع متخصص وكل واحد بيقوي التاني — عشان نحقق لك أفضل نتيجة."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full group cursor-pointer">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center group-hover:bg-brand-accent/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-light/40 group-hover:text-brand-accent group-hover:rotate-45 transition-all duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-light/70 leading-relaxed">
                    {s.desc}
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