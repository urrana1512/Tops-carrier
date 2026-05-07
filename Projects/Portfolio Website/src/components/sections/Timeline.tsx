"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2025",
    title: "Senior Full Stack Journey",
    desc: "Spearheading complex 3D web applications and high-end portfolios.",
    type: "Career",
  },
  {
    year: "2024",
    title: "BE Information Technology",
    desc: "Graduated with honors, specializing in scalable web architectures.",
    type: "Education",
  },
  {
    year: "2023",
    title: "Major Hackathon Winner",
    desc: "Developed an AI-driven logistics solution in 48 hours.",
    type: "Achievement",
  },
  {
    year: "2022",
    title: "Freelance UI/UX Designer",
    desc: "Worked with 10+ international clients to deliver premium designs.",
    type: "Career",
  },
  {
    year: "2021",
    title: "Diploma in Computer Science",
    desc: "Foundational years focused on core CS principles and data structures.",
    type: "Education",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
             My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
             An interactive timeline of my professional growth, 
             educational milestones, and significant achievements.
          </p>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {timelineData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-20 md:w-1/2 pl-12 md:pl-0 ${
                i % 2 === 0 ? "md:pr-24 md:text-right" : "md:ml-[50%] md:pl-24"
              }`}
            >
              {/* Dot */}
              <div className="absolute top-0 -left-[11px] md:left-auto md:right-auto md:inset-x-0 mx-auto w-5 h-5 bg-primary rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10" 
                   style={{ left: i % 2 === 0 ? "auto" : "-11px", right: i % 2 === 0 ? "-11px" : "auto" }}
              />
              
              <div className="glass p-8 rounded-3xl hover:border-primary/50 transition-all cursor-default overflow-hidden relative group">
                 <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl font-black -z-0 select-none group-hover:opacity-10 transition-opacity">
                    {item.year.slice(-2)}
                 </div>
                 <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-tighter">
                   {item.type}
                 </span>
                 <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                 <p className="text-foreground/60 leading-relaxed relative z-10">{item.desc}</p>
                 <div className="text-5xl font-black text-primary/10 mt-4 tabular-nums">
                   {item.year}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
