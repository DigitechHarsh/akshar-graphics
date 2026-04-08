"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "Corporate Identity",
    category: "Branding",
    image: "/media/branding.png",
    size: "col-span-1 md:col-span-2"
  },
  {
    title: "Event Flyers",
    category: "Print Media",
    image: "/media/flyer.png",
    size: "col-span-1"
  },
  {
    title: "Social Media Ads",
    category: "Digital",
    image: "/media/digital.png",
    size: "col-span-1"
  },
  {
    title: "Wedding Invites",
    category: "Personalized",
    image: "/media/branding.png",
    size: "col-span-1 md:col-span-2"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Creative <span className="accent-gradient">Excellence</span>
            </motion.h2>
            <p className="text-white/50 max-w-md">
              A curated selection of our most impactful designs across print and digital mediums.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <button className="px-6 py-2 rounded-full border border-white/10 text-sm font-semibold hover:border-primary transition-colors">All</button>
            <button className="px-6 py-2 rounded-full border border-white/10 text-sm font-semibold hover:border-primary transition-colors">Branding</button>
            <button className="px-6 py-2 rounded-full border border-white/10 text-sm font-semibold hover:border-primary transition-colors">Digital</button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative h-[400px] rounded-3xl overflow-hidden group ${item.size}`}
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  className="h-1 bg-primary mt-4 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 rounded-2xl border border-white/10 hover:border-primary hover:text-primary font-bold transition-all">
            See More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
