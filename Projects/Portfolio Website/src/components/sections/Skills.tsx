"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillsScene from "@/scenes/SkillsScene";
import { Globe, Database, PenTool } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
  },
  {
    title: "UI/UX & Tools",
    icon: PenTool,
    skills: ["Figma", "Adobe XD", "Git", "Docker", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Interactive 3D representation of my core technical competencies 
            and design tools used to create high-end digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Sphere */}
          <div className="h-[50vh] lg:h-[70vh] glass rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing">
            <SkillsScene />
          </div>

          {/* Right: Categories */}
          <div className="space-y-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass rounded-3xl hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <cat.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span 
                      key={j} 
                      className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
