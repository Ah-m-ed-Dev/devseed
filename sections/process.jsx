"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Search, Compass, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { n: "01", t: "??????", d: "????? ????? ????? ??????? ????", icon: Search },
  { n: "02", t: "??????????", d: "????? ????? ?????? ???? roadmap", icon: Compass },
  { n: "03", t: "?????", d: "????????? ?????? ??? ?? ??? ???", icon: PenTool },
  { n: "04", t: "?????", d: "??? ???? + ???????? + ???????", icon: Code2 },
  { n: "05", t: "?????", d: "Deploy + monitoring + ??? ?????", icon: Rocket },
];

function Step({ step, index, total, scrollYProgress, isMobile = false }) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;

  const r1 = start;
  const r2 = start + segment * 0.3;
  const r3 = end - segment * 0.3;
  const r4 = end;

  const opacity = useTransform(scrollYProgress, [r1, r2, r3, r4], [0, 1, 1, 0]);
  const x = useTransform(
    scrollYProgress,
    [r1, r2, r3, r4],
    isMobile ? [30, 0, 0, -30] : [50, 0, 0, -50]
  );
  const scale = useTransform(scrollYProgress, [r1, r2, r3, r4], [0.9, 1, 1, 0.9]);

  const Icon = step.icon;

  return (
    <motion.div
      style={{ opacity, x, scale }}
      className="w-full max-w-2xl mx-auto flex flex-col items-center text-center"
    >
      <div className="relative mb-6 sm:mb-8">
        <div
          className={`rounded-2xl sm:rounded-3xl bg-brand-dark border-2 border-brand-accent/40 flex items-center justify-center shadow-2xl shadow-brand-accent/30 ${
            isMobile ? "w-20 h-20" : "w-24 h-24 sm:w-28 sm:h-28"
          }`}
        >
          <Icon
            className={`text-brand-accent ${
              isMobile ? "w-10 h-10" : "w-12 h-12 sm:w-14 sm:h-14"
            }`}
          />
        </div>

        <div
          className={`absolute -top-2 -right-2 rounded-full bg-brand-accent text-brand-dark font-bold flex items-center justify-center ring-4 ring-brand-dark ${
            isMobile ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm"
          }`}
        >
          {step.n}
        </div>

        <div className="absolute inset-0 rounded-2xl bg-brand-accent/30 blur-2xl -z-10" />
      </div>

      <h3
        className={`font-bold text-white mb-4 ${
          isMobile ? "text-2xl" : "text-3xl sm:text-4xl lg:text-5xl"
        }`}
      >
        {step.t}
      </h3>

      <p
        className={`text-brand-light/80 leading-relaxed max-w-xl px-4 ${
          isMobile ? "text-base" : "text-lg sm:text-xl"
        }`}
      >
        {step.d}
      </p>
    </motion.div>
  );
}

function ProgressDots({ total, currentIndex }) {
  return (
    <div className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 sm:gap-3 z-20">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i === currentIndex
              ? "bg-brand-accent scale-[1.6]"
              : i < currentIndex
              ? "bg-brand-accent/60"
              : "bg-brand-light/20"
          }`}
        />
      ))}
    </div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * steps.length), steps.length - 1);
    setCurrentIndex(Math.max(0, idx));
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="process"
      className="relative"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#0a1a3a] to-brand-dark" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-brand-accent/10 rounded-full blur-[100px] sm:blur-[120px]" />
        </div>

        {/* Progress bar */}
        <div className="absolute right-3 sm:right-6 top-1/4 bottom-1/4 w-1 bg-brand-light/10 rounded-full overflow-hidden">
          <motion.div
            style={{ height: progressHeight }}
            className="w-full bg-gradient-to-b from-brand-accent via-brand to-brand-accent rounded-full"
          />
        </div>

        {/* Dots */}
        <ProgressDots total={steps.length} currentIndex={currentIndex} />

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 pt-20 sm:pt-24 px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs sm:text-sm font-medium backdrop-blur-sm">
            ?? ????????
          </span>
        </div>

        {/* Step ? centered */}
        <div className="relative w-full h-full flex items-center justify-center pt-24 pb-20">
          <div className="w-full px-4 sm:px-8">
            {/* Desktop */}
            <div className="hidden md:block">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 sm:px-8 flex justify-center pointer-events-none"
                  style={{ opacity: i === currentIndex ? 1 : 0, transition: "opacity 0.3s" }}
                >
                  <Step
                    step={s}
                    index={i}
                    total={steps.length}
                    scrollYProgress={scrollYProgress}
                    isMobile={false}
                  />
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 flex justify-center pointer-events-none"
                  style={{ opacity: i === currentIndex ? 1 : 0, transition: "opacity 0.3s" }}
                >
                  <Step
                    step={s}
                    index={i}
                    total={steps.length}
                    scrollYProgress={scrollYProgress}
                    isMobile={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-dark/60 backdrop-blur-md border border-brand-light/10">
            <span className="text-brand-accent font-bold text-sm">
              {currentIndex + 1}
            </span>
            <span className="text-brand-light/40 text-xs">/</span>
            <span className="text-brand-light/60 text-sm">{steps.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
