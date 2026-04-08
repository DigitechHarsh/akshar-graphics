"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src="/media/branding.png" 
              alt="Design Thinking" 
              width={600} 
              height={800} 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="accent-gradient">Akshar Graphics</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Founded by <strong>Chandresh Lainingwala</strong>, Akshar Graphics has been a hallmark of creative 
              precision in Surat. Our philosophy is rooted in the belief that design 
              is a strategic tool, not just an aesthetic choice.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              We specialize in bridging the gap between imagination and reality, 
              delivering customized solutions that empower brands to communicate 
              with authority and clarity.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <p className="text-4xl font-bold text-primary mb-1">10+</p>
              <p className="text-xs uppercase font-bold text-white/40 tracking-widest">Years</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-1">1.2K</p>
              <p className="text-xs uppercase font-bold text-white/40 tracking-widest">Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">500+</p>
              <p className="text-xs uppercase font-bold text-white/40 tracking-widest">Clients</p>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all"
          >
            Our Full Story
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;
