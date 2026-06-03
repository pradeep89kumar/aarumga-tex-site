import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function QualityCheckpoint() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const blocks = [
    "Strict First-Cut.",
    "Stringent Checks.",
    "Zero Defects."
  ];

  return (
    <section ref={ref} className="relative w-full h-[100vh] bg-brand-alabaster overflow-hidden flex items-center justify-center">
      {/* Background kinetic shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-brand-peach/20 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-[20%] left-[10%] w-[30vw] h-[30vw] bg-brand-periwinkle/20 rounded-full blur-3xl mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center gap-12">
        {blocks.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 20,
              delay: index * 0.2,
            }}
            className="group relative cursor-default"
          >
            <h2 className="text-6xl md:text-[9vw] leading-none font-bold text-center text-brand-charcoal tracking-tighter transition-colors duration-500 hover:text-brand-periwinkle">
              {text}
            </h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
