"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * StickySection
 * - ????? ??? section ??? ??????
 * - scrollHeight: ?? pixel ????? ?????? ?????
 *   - ?? 100vh = ???? ???? ????
 *   - 300vh = 3 ?????
 */
export default function StickySection({
  children,
  scrollHeight = "200vh",
  id,
  className = "",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Fade in ??? ??????? fade out ??? ???????
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.9, 1],
    [0, 1, 1, 0]
  );

  // Scale ???? ?? ???????
  const scale = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [0.98, 1, 1, 0.98]);

  return (
    <div ref={ref} id={id} className={`relative ${className}`} style={{ height: scrollHeight }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="w-full h-full flex items-center justify-center"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
