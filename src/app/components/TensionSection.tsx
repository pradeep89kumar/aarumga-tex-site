import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Wraps a section and plays a brief elastic "tension snap" when the
 * section first enters view — a small downward overshoot followed by a
 * spring-back, evoking a thread under load releasing into place.
 */
export function TensionSection({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (!inView) return;
    controls.start({
      y: [0, 5, -2, 0],
      transition: { duration: 0.6, times: [0, 0.35, 0.7, 1], ease: [0.34, 1.56, 0.64, 1] },
    });
  }, [inView, controls]);

  return (
    <motion.div ref={ref} animate={controls} className={className} style={{ willChange: "transform" }}>
      {children}
    </motion.div>
  );
}
