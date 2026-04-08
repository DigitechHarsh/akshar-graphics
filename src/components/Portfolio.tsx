import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  { id: "flyers", title: "Flyer / Poster", category: "Marketing", image: "/media/flyer_poster.png", size: "col-span-1" },
  { id: "social", title: "Social Media Cover", category: "Digital", image: "/media/social_media.png", size: "col-span-1" },
  { id: "brochures", title: "Brochures", category: "Print Media", image: "/media/brochures.png", size: "col-span-1" },
  { id: "banners", title: "Banner / Roll up", category: "Outdoor", image: "/media/banner_standee.png", size: "col-span-1" },
  { id: "letterhead", title: "Letterhead", category: "Branding", image: "/media/letterhead.png", size: "col-span-1" },
  { id: "ads", title: "Ads Graphics", category: "Digital", image: "/media/ads_graphics.png", size: "col-span-1" },
  { id: "logo", title: "Logo Design", category: "Identity", image: "/media/logo_design.png", size: "col-span-1" },
  { id: "visiting-card", title: "Visiting Card", category: "Branding", image: "/media/visiting_card.png", size: "col-span-1" },
  { id: "wedding-card", title: "Wedding Card", category: "Personalized", image: "/media/wedding.png", size: "col-span-1" },
  { id: "booklets", title: "Booklets / Sovenier", category: "Print Media", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974", size: "col-span-1" },
  { id: "bill-books", title: "Bill / Challan Books", category: "Stationery", image: "https://images.unsplash.com/photo-1586075010623-247555df3b36?q=80&w=1974", size: "col-span-1" },
  { id: "greetings", title: "Personalized Card", category: "Personalized", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070", size: "col-span-1" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black mb-6 text-slate-900">
              Creative <span className="accent-gradient">Excellence</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium">
              Explore our diverse range of creative services. Click on any category to view our portfolio of works.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative h-[320px] rounded-[2rem] overflow-hidden group border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 ${item.size}`}
            >
              <Link to={`/work/${item.id}`} className="block w-full h-full relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent opacity-100 p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-primary font-bold text-[10px] tracking-widest uppercase mb-2">{item.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Projects</span>
                    <div className="w-6 h-[1px] bg-white/30"></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
