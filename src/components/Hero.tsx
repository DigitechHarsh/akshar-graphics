import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
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
      className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white"
    >
      {/* Decorative background blobs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"
      />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 
            className="text-7xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 text-slate-950"
          >
            Design Thinking <br />
            <span className="accent-gradient">Made Visual.</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 max-w-lg mb-12 font-medium leading-relaxed"
          >
            We transform conceptual ideas into stunning high-impact visuals. 
            From holistic branding to cutting-edge digital presence.
          </motion.p>
          <div className="flex flex-wrap gap-6">
            <a href="#portfolio" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20">
              Explore Our Work
            </a>
            <a href="#services" className="px-10 py-5 border-2 border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-colors">
              Our Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:block hidden"
        >
          <div className="relative p-2 rounded-[2.5rem] bg-slate-100/50 backdrop-blur-sm border border-white/40 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" 
              alt="Creative Illustration" 
              className="w-full h-auto rounded-[2rem] shadow-sm"
            />
          </div>
          {/* Subtle floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-6 rounded-2xl shadow-xl border border-white/20"
          >
            <div className="text-primary font-black text-2xl">10+</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Years of Growth</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
