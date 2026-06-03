import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Logistics() {
  return (
    <section className="relative w-full bg-brand-alabaster py-32 px-6 lg:px-12 text-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-brand-charcoal pb-12 gap-8">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">The Final Mile.</h2>
            <p className="text-neutral-500 max-w-xl text-xl font-light">
              25 years of industry experience built on full transparency. 
              No blockers. Just unparalleled manufacturing delivered on schedule.
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold uppercase tracking-widest text-brand-periwinkle mb-2">Delivery Rate</div>
            <div className="text-6xl md:text-8xl font-black tracking-tighter text-brand-charcoal">99.8%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left Column: Details */}
          <div className="flex flex-col gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-10 tracking-tighter">Sri Aarumga Tex</h3>
              <div className="space-y-8 text-xl md:text-2xl font-light text-neutral-600">
                <div className="flex items-start gap-6">
                  <MapPin className="w-8 h-8 text-brand-charcoal shrink-0 mt-1" />
                  <span>69F2, East Colony,<br/>Kumarapalayam,<br/>Tamil Nadu – 638183</span>
                </div>
                <div className="flex items-center gap-6">
                  <Phone className="w-8 h-8 text-brand-charcoal shrink-0" />
                  <a href="tel:+919940111315" className="hover:text-brand-charcoal hover:underline underline-offset-8 transition-all decoration-brand-peach">
                    +91 99401 11315
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full aspect-[4/5] relative"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1601557568020-9ae2c9a10d68?q=80&w=1080"
              alt="Packed Fabric Rolls"
              className="w-full h-full object-cover grayscale mix-blend-multiply"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
