"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
          {/* Info Side */}
          <div className="bg-primary p-12 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
              <p className="text-white/80 text-lg mb-12">
                Have a vision? Let’s turn it into a visual masterpiece. 
                Our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-white/60">Phone</p>
                    <p className="text-xl font-medium">+91 98981 91220</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-white/60">Email</p>
                    <p className="text-xl font-medium">akshargraphics15@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-white/60">Location</p>
                    <p className="text-xl font-medium">Surat, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20 flex gap-6">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/30 transition-colors flex items-center justify-center font-bold">In</a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/30 transition-colors flex items-center justify-center font-bold">Ig</a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/30 transition-colors flex items-center justify-center font-bold">Wa</a>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:p-16">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 uppercase">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Design Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 uppercase">Your Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-primary rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
