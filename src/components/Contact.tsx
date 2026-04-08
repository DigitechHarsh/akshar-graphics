import React from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-black mb-10 text-slate-900">
            Let's <span className="accent-gradient">Connect</span>
          </h2>
          <p className="text-slate-600 text-lg mb-16 leading-relaxed">
            Visit us for all your design and printing needs. We are located at the heart of the textile hub, 
            ready to bring your vision to life with precision and creativity.
          </p>
          <div className="space-y-10">
            <div className="flex gap-8 group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-slate-200 text-primary group-hover:scale-110 transition-transform">
                <MapPin />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Our Studio</h4>
                <p className="text-slate-500">307, New Bombay Market, Umarwada, Surat</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-slate-200 text-primary group-hover:scale-110 transition-transform">
                <Phone />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                <p className="text-slate-500">+91 98251 14464</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-slate-200 text-primary group-hover:scale-110 transition-transform">
                <Mail />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                <p className="text-slate-500">akshargraphics15@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <form className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 space-y-8">
          <div className="space-y-6">
            <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl focus:bg-white focus:border-primary/30 outline-none transition-all" />
            <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl focus:bg-white focus:border-primary/30 outline-none transition-all" />
            <textarea placeholder="Tell us about your project" rows={5} className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl focus:bg-white focus:border-primary/30 outline-none transition-all"></textarea>
          </div>
          <button className="w-full bg-primary py-5 rounded-2xl text-white font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
            Send Message <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}
