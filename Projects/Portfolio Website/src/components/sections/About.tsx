"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutScene from "@/scenes/AboutScene";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";

const achievements = [
  { icon: Award, title: "20+ Awards", desc: "For UI/UX Excellence" },
  { icon: Briefcase, title: "3+ Years", desc: "Professional Experience" },
  { icon: GraduationCap, title: "BE IT", desc: "Top of Class Journey" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Scene */}
          <div className="h-[40vh] lg:h-[60vh] relative">
            <AboutScene />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 blur-[80px] rounded-full -z-10" />
          </div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Crafting Digital <span className="text-gradient">Masterpieces</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              I'm Udit Rana, a visionary Full Stack Developer and UI/UX Designer based in India. 
              My passion lies in merging technical precision with artistic flair. 
              I don't just build websites; I create immersive 3D digital experiences 
              that leave a lasting impression.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {achievements.map((item, i) => (
                <div key={i} className="p-6 glass rounded-2xl flex flex-col items-center text-center">
                  <item.icon className="text-primary mb-3" size={32} />
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-foreground/50">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all interactive group">
              Download Resume 
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
