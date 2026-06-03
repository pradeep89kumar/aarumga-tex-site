import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ThreadingHeadline } from "./ThreadingHeadline";
import logoUrl from "../../imports/logo.jpg";

export function Hero() {
  return (
    <section className="relative h-screen w-full bg-brand-alabaster overflow-hidden flex flex-col items-center justify-center">
      
      {/* Abstract kinetic shapes from brand colors — slow ambient drift + breathing */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, 1.12, 0.95, 1.05, 1],
          opacity: [0.12, 0.18, 0.14, 0.17, 0.12],
          x: [0, 40, -30, 20, 0],
          y: [0, -30, 25, -15, 0],
        }}
        transition={{
          scale: { duration: 18, ease: "easeInOut", repeat: Infinity },
          opacity: { duration: 18, ease: "easeInOut", repeat: Infinity },
          x: { duration: 24, ease: "easeInOut", repeat: Infinity },
          y: { duration: 22, ease: "easeInOut", repeat: Infinity },
        }}
        className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-brand-peach mix-blend-multiply blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, 0.92, 1.1, 0.97, 1],
          opacity: [0.13, 0.18, 0.12, 0.16, 0.13],
          x: [0, -50, 35, -20, 0],
          y: [0, 25, -35, 15, 0],
        }}
        transition={{
          scale: { duration: 20, ease: "easeInOut", repeat: Infinity, delay: 0.4 },
          opacity: { duration: 20, ease: "easeInOut", repeat: Infinity, delay: 0.4 },
          x: { duration: 26, ease: "easeInOut", repeat: Infinity, delay: 0.4 },
          y: { duration: 24, ease: "easeInOut", repeat: Infinity, delay: 0.4 },
        }}
        className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-periwinkle mix-blend-multiply blur-3xl pointer-events-none"
      />

      {/* Top Header / Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-8 right-8 flex justify-start items-center gap-4"
      >
        <ImageWithFallback 
          src={logoUrl} 
          alt="Sri Aarumga Tex Logo" 
          className="h-20 md:h-24 w-auto object-contain"
        />
        <div className="flex flex-col leading-none border-l border-neutral-300 pl-3 md:pl-4">
          <span className="text-sm md:text-lg font-semibold tracking-tight text-brand-charcoal">
            Sri Aarumga Tex
          </span>
          <span className="mt-1 text-[9px] md:text-xs uppercase tracking-[0.25em] text-neutral-500">
            Precision Auto Looms
          </span>
        </div>
      </motion.div>

      <div className="z-20 w-full px-6 md:px-12 relative text-left self-start mt-40 md:mt-0 md:pl-24">
        <div className="overflow-hidden mb-2 leading-none">
          <h1 className="text-6xl md:text-[8vw] leading-none font-bold tracking-tighter text-brand-charcoal">
            <ThreadingHeadline text="Zero Defects." delay={0.8} />
          </h1>
        </div>
        <div className="overflow-hidden mb-8 leading-none">
          <h2 className="text-4xl md:text-[6vw] leading-none font-medium tracking-tight text-neutral-400">
            <ThreadingHeadline text="From First Cut to Final Roll." delay={1.2} stagger={0.025} />
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="max-w-md text-lg text-neutral-600 font-light mb-10"
        >
          Two and a half decades of weaving expertise. High-precision fabric manufacturing on auto looms, delivered B2B with 99.8% on-time reliability.
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <a 
            href="tel:+919940111315"
            className="inline-block bg-brand-charcoal text-brand-alabaster hover:bg-brand-periwinkle hover:text-brand-charcoal px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-colors duration-300"
          >
            Call to Enquiry
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-12 md:left-24 text-xs font-bold text-brand-charcoal tracking-widest uppercase flex items-center gap-4"
      >
        <div className="w-12 h-[2px] bg-brand-charcoal overflow-hidden relative">
          <motion.div 
            animate={{ x: [-48, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-brand-peach"
          />
        </div>
        <span>Scroll to Explore</span>
      </motion.div>
    </section>
  );
}
