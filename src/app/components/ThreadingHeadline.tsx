import React from "react";
import { motion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

/**
 * Renders each character rising into place while a thin warp thread
 * trails it for a brief moment, evoking a thread being tensioned through fabric.
 */
export function ThreadingHeadline({ text, className = "", delay = 0, stagger = 0.045 }: Props) {
  const chars = Array.from(text);

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {chars.map((ch, i) => {
        const isSpace = ch === " ";
        return (
          <span
            key={i}
            className="relative inline-block"
            aria-hidden
            style={{ whiteSpace: "pre" }}
          >
            {/* Warp thread that trails the character */}
            {!isSpace && (
              <motion.span
                aria-hidden
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: [0, 1, 0], opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 0.7,
                  delay: delay + i * stagger,
                  ease: [0.16, 1, 0.3, 1],
                  times: [0, 0.4, 1],
                }}
                style={{
                  transformOrigin: "bottom center",
                  background: "var(--color-brand-periwinkle)",
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: 1,
                  marginLeft: -0.5,
                  pointerEvents: "none",
                }}
              />
            )}
            <motion.span
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {ch}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
