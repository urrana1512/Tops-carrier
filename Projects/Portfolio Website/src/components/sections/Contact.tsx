"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactScene from "@/scenes/ContactScene";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Scene */}
          <div className="h-[40vh] lg:h-[70vh] relative z-0 glass rounded-[3rem] overflow-hidden">
             <div className="absolute inset-0">
                <ContactScene />
             </div>
             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
                <motion.div
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   className="text-center bg-black/20 backdrop-blur-xl p-8 rounded-full border border-white/10"
                >
                   <h3 className="text-xl font-bold text-white tracking-widest uppercase">Global Cooperation</h3>
                </motion.div>
             </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
               Get in <span className="text-gradient">Touch</span>
            </h2>
            
            <div className="space-y-6 mb-12">
               <div className="flex items-center gap-4 text-foreground/70">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary"><Mail size={20} /></div>
                  <span className="font-medium">contact@udit.dev</span>
               </div>
               <div className="flex items-center gap-4 text-foreground/70">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary"><MapPin size={20} /></div>
                  <span className="font-medium">Gujarat, India</span>
               </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="w-full bg-foreground/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all font-medium"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  className="w-full bg-foreground/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all font-medium"
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                required
                rows={5}
                className="w-full bg-foreground/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all font-medium resize-none"
              />
              <button 
                type="submit"
                className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all group shadow-[0_10px_30px_rgba(59,130,246,0.3)]"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md"
          >
             <div className="glass p-12 rounded-[3rem] flex flex-col items-center text-center max-w-sm border-primary/20">
                <CheckCircle size={80} className="text-primary mb-6 animate-bounce" />
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-foreground/60">
                   Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                   onClick={() => setIsSubmitted(false)}
                   className="mt-8 px-10 py-3 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform"
                >
                   Close
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
