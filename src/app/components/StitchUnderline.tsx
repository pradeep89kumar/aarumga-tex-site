import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type Props = {
  color?: "peach" | "periwinkle" | "charcoal";
  delay?: number;
  className?: string;
};

const COLOR_MAP = {
  peach: "var(--color-brand-peach)",
  periwinkle: "var(--color-brand-periwinkle)",
  charcoal: "var(--color-brand-charcoal)",
} as const;

export function StitchUnderline({ color = "periwinkle", delay = 0.2, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: active ? 1 : 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transformOrigin: "left center",
        backgroundImage: `linear-gradient(to right, ${COLOR_MAP[color]} 0 60%, transparent 60% 100%)`,
        backgroundSize: "10px 100%",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "left center",
      }}
      className={`h-[2px] w-full ${className}`}
      aria-hidden
    />
  );
}
