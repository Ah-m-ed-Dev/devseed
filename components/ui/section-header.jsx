"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  badge,
  title,
  titleAccent,
  description,
  align = "center",
  className,
}) {
  const alignment = {
    center: "text-center items-center",
    right: "text-right items-end",
    left: "text-left items-start",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-16 lg:mb-20",
        alignment[align],
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs sm:text-sm font-medium">
          {badge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className="text-brand-accent">{titleAccent}</span>
          </>
        )}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-brand-light/80 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}