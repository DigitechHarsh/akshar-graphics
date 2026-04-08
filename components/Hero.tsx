"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-10"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-secondary uppercase mb-6">
              Creative Design Studio
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] mb-8">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              Design Thinking
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="accent-gradient block mt-2"
            >
              Made Visual.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed"
          >
            We transform conceptual ideas into stunning high-impact visuals. 
            From holistic branding to cutting-edge digital presence, Akshar Graphics excels in precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20"
            >
              Explore Our Work
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Our Services
            </a>
          </motion.div>
        </div>

        {/* Hero Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative group lg:block hidden"
        >
          <div className="relative glass p-4 rounded-3xl overflow-hidden shadow-2xl">
            {/* Using the generated hero image locally */}
            <Image 
              src="/media/hero.png" 
              alt="Creative Illustration" 
              width={800} 
              height={600} 
              className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
          </div>
          
          {/* Floating Decorative Cards */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 glass px-6 py-4 rounded-2xl shadow-xl border-l-4 border-primary"
          >
            <p className="text-xs font-bold text-white/40 uppercase mb-1">Success Rate</p>
            <p className="text-xl font-bold">99.9%</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-2xl shadow-xl border-r-4 border-secondary"
          >
            <p className="text-xs font-bold text-white/40 uppercase mb-1">Completed</p>
            <p className="text-xl font-bold">1.2K+</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
