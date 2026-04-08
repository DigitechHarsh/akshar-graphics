import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

const workData: Record<string, { title: string, category: string, description: string, images: string[] }> = {
  "flyers": {
    title: "Flyers & Posters",
    category: "Marketing & Promotions",
    description: "High-impact visual communication for events, products, and brand awareness.",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071",
      "https://images.unsplash.com/photo-1522071823929-0d165672e505?q=80&w=2070",
      "https://images.unsplash.com/photo-1454165833206-5a415399589d?q=80&w=2070"
    ]
  },
  "branding": {
    title: "Premium Branding",
    category: "Corporate Identity",
    description: "Holistic brand identities that define your market presence and values.",
    images: [
      "https://images.unsplash.com/photo-1634942537034-2230464a4448?q=80&w=2070",
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2070",
      "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070"
    ]
  },
  // Add other categories...
};

export default function WorkDetail() {
  const { serviceId } = useParams();
  const work = workData[serviceId as string] || {
    title: serviceId?.replace("-", " ").toUpperCase() || "Work Showcase",
    category: "Creative Services",
    description: "A showcase of our creative excellence in this specialized category.",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974",
      "https://images.unsplash.com/photo-1549416878-b9ca35c24346?q=80&w=1974",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071"
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:-translate-x-2 transition-transform">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{work.category}</span>
            <h1 className="text-6xl font-black text-slate-900 mt-4 mb-8 leading-tight">{work.title}</h1>
            <p className="text-slate-500 text-xl leading-relaxed mb-10 max-w-xl">{work.description}</p>
            <button className="px-8 py-4 bg-slate-950 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-primary transition-colors">
              Enquire About This Service <ExternalLink size={18} />
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100"
          >
            <img src={work.images[0]} alt={work.title} className="w-full h-auto" />
          </motion.div>
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-black text-slate-900">Project <span className="accent-gradient">Gallery</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {work.images.slice(1).map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm"
              >
                <img src={img} alt={`${work.title} showcase ${i}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
