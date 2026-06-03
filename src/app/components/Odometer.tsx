import React from "react";
import { motion, useTransform, useSpring, type MotionValue } from "motion/react";

type Props = {
  scrollYProgress: MotionValue<number>;
  total: number;
  className?: string;
};

const DIGIT_HEIGHT_EM = 1; // line-height: 1

export function Odometer({ scrollYProgress, total, className = "" }: Props) {
  // Map scroll 0→1 to 1 → total (continuous). We'll round in the digit columns.
  const value = useTransform(scrollYProgress, (p) => {
    const clamped = Math.max(0, Math.min(0.9999, p));
    return Math.floor(clamped * total) + 1;
  });

  const tens = useTransform(value, (v) => Math.floor(v / 10));
  const ones = useTransform(value, (v) => v % 10);

  return (
    <span className={`inline-flex items-baseline ${className}`} style={{ lineHeight: 1 }}>
      <DigitColumn digit={tens} />
      <DigitColumn digit={ones} />
    </span>
  );
}

function DigitColumn({ digit }: { digit: MotionValue<number> }) {
  const smooth = useSpring(digit, { stiffness: 120, damping: 20, mass: 0.4 });
  const y = useTransform(smooth, (d) => `-${d * DIGIT_HEIGHT_EM}em`);

  return (
    <span
      className="relative inline-block overflow-hidden"
      style={{ height: `${DIGIT_HEIGHT_EM}em`, width: "0.6em" }}
    >
      <motion.span
        className="absolute left-0 top-0 flex flex-col items-center"
        style={{ y }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} style={{ height: `${DIGIT_HEIGHT_EM}em`, lineHeight: 1 }}>
            {i}
          </span>
        ))}
      </motion.span>
    </span>
  );
}
