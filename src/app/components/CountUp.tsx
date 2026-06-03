import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

type Props = {
  to: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({ to, decimals = 0, suffix = "", duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [played, setPlayed] = useState(false);
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => v.toFixed(decimals));
  const [text, setText] = useState((0).toFixed(decimals));
  const [punch, setPunch] = useState(false);

  useEffect(() => {
    return display.on("change", (latest) => setText(latest));
  }, [display]);

  useEffect(() => {
    const el = ref.current;
    if (!el || played) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPlayed(true);
          const controls = animate(value, to, {
            duration,
            ease: [0.16, 1, 0.3, 1],
            onComplete: () => {
              setPunch(true);
              setTimeout(() => setPunch(false), 280);
            },
          });
          obs.disconnect();
          return () => controls.stop();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, to, duration, played]);

  return (
    <motion.span
      ref={ref}
      animate={{ scale: punch ? 1.06 : 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      className={`inline-block ${className ?? ""}`}
    >
      {text}
      {suffix}
    </motion.span>
  );
}
