"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroScene from "@/scenes/HeroScene";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-xl font-medium text-primary mb-4">Hello, I'm</h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            Udit <span className="text-gradient">Rana</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-lg leading-relaxed">
            Full Stack Developer | UI/UX Designer specialized in building 
            digital products with <span className="text-primary font-semibold underline decoration-2 underline-offset-4">ultra-premium</span> aesthetics and 3D interactivity.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all interactive shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
              View Projects <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 glass rounded-full font-bold hover:scale-105 transition-all interactive">
              Contact Me
            </a>
          </div>

          <div className="flex gap-6">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, color: "var(--primary)" }}
                className="text-foreground/50 transition-colors interactive"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - 3D Scene */}
        <div className="h-[60vh] lg:h-[80vh] relative w-full">
           <div className="absolute inset-0 z-0">
             <HeroScene />
           </div>
           
           {/* Decorative elements */}
           <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full" />
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--glass-border)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-20" />
    </section>
  );
};

export default Hero;
