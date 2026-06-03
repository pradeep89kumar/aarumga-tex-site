import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
};

export function ScanReveal({ text, className = "", delay = 0, duration = 1.1 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const ease = [0.65, 0, 0.35, 1] as const;

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {/* Hidden source for layout */}
      <span aria-hidden className="invisible">{text}</span>

      {/* Revealed text — clipped left-to-right */}
      <motion.span
        aria-hidden
        className="absolute inset-0"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={active ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
        transition={{ duration, ease, delay }}
      >
        {text}
      </motion.span>

      {/* Scan line — sweeps across */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-0"
        style={{
          width: "6px",
          background:
            "linear-gradient(to bottom, transparent 0%, var(--color-brand-periwinkle) 20%, var(--color-brand-periwinkle) 80%, transparent 100%)",
          boxShadow: "0 0 18px 2px var(--color-brand-periwinkle)",
          left: 0,
          opacity: 0,
        }}
        initial={{ x: "-10%", opacity: 0 }}
        animate={
          active
            ? { x: ["-2%", "100%"], opacity: [0, 1, 1, 0] }
            : { x: "-10%", opacity: 0 }
        }
        transition={{ duration, ease, delay, times: [0, 0.1, 0.9, 1] }}
      />

      {/* Accessible text */}
      <span className="sr-only">{text}</span>
    </span>
  );
}
