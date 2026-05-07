"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, ExternalLink, Zap } from "lucide-react";

const hackathons = [
  {
    title: "Global AI Hackathon 2024",
    role: "Winner (1st Place)",
    problem: "Real-time carbon emissions tracking for supply chains.",
    solution: "Built a blockchain-based tracking system using Node.js and IoT sensors.",
    tags: ["AI", "Blockchain", "IoT"],
    link: "#",
  },
  {
    title: "CityDev 2023",
    role: "Finalist",
    problem: "Urban mobility and traffic congestion in metropolitan areas.",
    solution: "Created a predictive traffic routing engine with React and Mapbox.",
    tags: ["Mapbox", "Data Viz", "React"],
    link: "#",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
             Hall of <span className="text-gradient">Fame</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
             Recognition, awards, and victories from competitive hackathons 
              and industry challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {hackathons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[3rem] group hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/20 text-primary rounded-2xl group-hover:scale-110 transition-transform">
                    <Trophy size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm">{item.role}</p>
                  </div>
                </div>
                <a href={item.link} className="px-8 py-3 glass rounded-full font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
                  View Demo <ExternalLink size={18} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-foreground/5 rounded-3xl group-hover:bg-primary/5 transition-colors">
                   <div className="flex items-center gap-2 text-primary mb-4 font-bold">
                      <Zap size={20} /> Problem
                   </div>
                   <p className="text-foreground/70 leading-relaxed">{item.problem}</p>
                </div>
                <div className="p-8 bg-foreground/5 rounded-3xl group-hover:bg-primary/5 transition-colors">
                   <div className="flex items-center gap-2 text-primary mb-4 font-bold">
                      <Zap size={20} /> Solution
                   </div>
                   <p className="text-foreground/70 leading-relaxed">{item.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-10">
                {item.tags.map((tag, j) => (
                  <span key={j} className="px-4 py-2 glass rounded-full text-xs font-bold text-foreground/50">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
