import React from "react";
import { motion } from "framer-motion";
import { 
  Pencil, 
  Printer, 
  Monitor, 
  BookOpen 
} from "lucide-react";

const services = [
  {
    title: "Branding & Identity",
    desc: "Crafting unique visual identities, professional logo design, visiting cards, and letterheads that reflect your brand's essence.",
    icon: <Pencil className="w-8 h-8" />,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Marketing & Promotions",
    desc: "High-impact flyers, brochures, banners, and roll-up standees designed to capture attention and drive results.",
    icon: <Printer className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Digital Graphics",
    desc: "Engaging social media posts, covers, and advertisement graphics tailored for modern digital platforms.",
    icon: <Monitor className="w-8 h-8" />,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Stationery & Corporate",
    desc: "Professional bill/challan books, booklets, souvenirs, and corporate magazine designs for streamlined operations.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-green-50 text-green-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-black mb-6 text-slate-900">
            Our Specialized <span className="accent-gradient">Services</span>
          </h2>
          <p className="text-slate-500 text-lg">
            From conceptual sketches to final prints, we provide end-to-end design solutions 
            tailored to your specific business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 mb-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
