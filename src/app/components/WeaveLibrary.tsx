import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { StitchUnderline } from "./StitchUnderline";

const WEAVES = [
  {
    title: "Twill Mastery",
    desc: "Engineered for durability with our signature diagonal weave structure. Perfect for heavy-duty applications where strength is non-negotiable.",
    img: "https://images.unsplash.com/photo-1619459074324-33d5f591c53e?q=80&w=1080",
  },
  {
    title: "Precision Stripes",
    desc: "Flawless parallel perfection. Our auto looms ensure millimeter-exact stripe alignment across massive production runs.",
    img: "https://images.unsplash.com/photo-1636716019138-750a1b011e3f?q=80&w=1080",
  },
  {
    title: "Complex Jacquard",
    desc: "Intricate patterns woven directly into the fabric's DNA. High-fidelity textile rendering for premium applications.",
    img: "https://images.unsplash.com/photo-1601056639638-c53c50e13ead?q=80&w=1080",
  },
  {
    title: "Checkered Weave",
    desc: "A timeless geometric pattern executed with modern precision. Consistent grid alignment and crisp boundaries across every square meter.",
    img: "https://images.unsplash.com/photo-1594332495179-d979bcd18142?q=80&w=1080",
  },
];

export function WeaveLibrary() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative w-full bg-brand-alabaster text-brand-charcoal flex">
      {/* Background massive periwinkle woven pattern that draws on scroll */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0 opacity-10">
        <svg viewBox="0 0 1000 1000" className="w-[120vw] h-auto text-brand-periwinkle" fill="none" stroke="currentColor" strokeWidth="2">
          <motion.path 
            style={{ pathLength: scrollYProgress }}
            d="M 100,0 L 100,1000 M 200,0 L 200,1000 M 300,0 L 300,1000 M 400,0 L 400,1000 M 500,0 L 500,1000 M 600,0 L 600,1000 M 700,0 L 700,1000 M 800,0 L 800,1000 M 900,0 L 900,1000 M 0,100 L 1000,100 M 0,200 L 1000,200 M 0,300 L 1000,300 M 0,400 L 1000,400 M 0,500 L 1000,500 M 0,600 L 1000,600 M 0,700 L 1000,700 M 0,800 L 1000,800 M 0,900 L 1000,900" 
          />
        </svg>
      </div>

      {/* Left side: Sticky Content */}
      <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center px-16 lg:px-32 border-r border-neutral-200 z-10 bg-brand-alabaster/80 backdrop-blur-md">
        <div className="mb-12">
          <div className="text-brand-periwinkle uppercase tracking-widest text-sm font-bold mb-3">
            01 / The Archive
          </div>
          <div className="max-w-[120px]">
            <StitchUnderline color="periwinkle" />
          </div>
        </div>
        
        <div className="relative h-64">
          {WEAVES.map((weave, index) => (
            <WeaveCopy
              key={index}
              index={index}
              total={WEAVES.length}
              scrollYProgress={scrollYProgress}
              title={weave.title}
              desc={weave.desc}
            />
          ))}
        </div>
      </div>

      {/* Right side: Scrolling Images */}
      <div className="w-1/2 flex flex-col">
        {WEAVES.map((weave, index) => (
          <div key={index} className="h-screen w-full relative overflow-hidden flex items-center justify-center">
            <motion.div 
              className="w-full h-full relative overflow-hidden"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: false, margin: "0px" }}
            >
              <ImageWithFallback
                src={weave.img}
                alt={weave.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WeaveCopy({
  index,
  total,
  scrollYProgress,
  title,
  desc,
}: {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  title: string;
  desc: string;
}) {
  const step = 1 / total;
  const center = (index + 0.5) * step;
  const start = Math.max(0, center - step / 2);
  const end = Math.min(1, center + step / 2);
  const opacity = useTransform(scrollYProgress, [start, center, end], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [start, center, end], [40, 0, -40]);

  return (
    <motion.div
      style={{ opacity, y, pointerEvents: "none" }}
      className="absolute top-0 left-0 w-full"
    >
      <h3 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6">{title}</h3>
      <p className="text-neutral-500 text-xl lg:text-2xl font-light leading-relaxed max-w-md">
        {desc}
      </p>
    </motion.div>
  );
}
