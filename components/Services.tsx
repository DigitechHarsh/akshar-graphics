"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Pencil, 
  Printer, 
  Monitor, 
  BookOpen, 
  Heart, 
  Palette 
} from "lucide-react";

const services = [
  {
    title: "Branding & Identity",
    desc: "Logo design, visiting cards, letterheads, and a complete brand kit to make your business stand out.",
    icon: <Pencil className="w-8 h-8" />,
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Print Media",
    desc: "High-quality flyers, posters, brochures, banners, and personalized wedding cards.",
    icon: <Printer className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Digital Graphics",
    desc: "Engaging social media covers, advertisement graphics, and digital marketing assets.",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Stationery",
    desc: "Professional Bill/Challan books, booklets, souvenirs, and personalized greetings.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500"
  }
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative glass p-8 rounded-[2rem] overflow-hidden"
    >
      {/* Background Glow */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br opacity-5 group-hover:opacity-20 transition-opacity duration-500 ${service.color}`} />
      
      <div className={`w-16 h-16 mb-8 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 text-primary`}>
        {service.icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-white/50 leading-relaxed mb-6">
        {service.desc}
      </p>

      <motion.div 
        className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300"
      >
        Learn More <span className="text-lg">→</span>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Specialized <span className="accent-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            We provide a comprehensive range of design and printing solutions 
            crafted with precision and visual intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
