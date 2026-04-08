import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl">
            <img src="/media/branding.png" alt="Akshar Graphics Studio" className="w-full h-auto" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
        </motion.div>
        <div>
          <h2 className="text-5xl font-black mb-10 text-slate-900 leading-tight">
            About <br /><span className="accent-gradient">Akshar Graphics</span>
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Founded by <strong>Chandresh Lainingwala</strong>, Akshar Graphics has been a hallmark of creative 
            precision in Surat for over a decade.
          </p>
          <p className="text-slate-500 mb-12">
            Our mission is to bridge the gap between imagination and reality through high-end design 
            and superior printing quality. We pride ourselves on being a partner in our clients' growth.
          </p>
          <div className="grid grid-cols-3 gap-12 pt-12 border-t border-slate-100">
            <div><p className="text-4xl font-black text-primary mb-1">10+</p><p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Years</p></div>
            <div><p className="text-4xl font-black text-slate-900 mb-1">1.2K</p><p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Projects</p></div>
            <div><p className="text-4xl font-black text-slate-800 mb-1">500+</p><p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Clients</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
