"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "AI SaaS Platform",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Next.js", "OpenAI", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Eco-Commerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "Shopify", "Node.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "3D Portfolio Builder",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    tags: ["Three.js", "R3F", "Zustand"],
    github: "#",
    demo: "#",
  },
  {
    title: "Cryptoverse Dash",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["Solidity", "Tailwind", "Web3"],
    github: "#",
    demo: "#",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-96 w-full glass rounded-3xl p-8 cursor-pointer group flex flex-col justify-end overflow-hidden"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-4 rounded-2xl bg-cover bg-center overflow-hidden"
      >
        <div 
           className="w-full h-full transform group-hover:scale-110 transition-transform duration-700"
           style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      <div 
        style={{ transform: "translateZ(100px)" }}
        className="relative z-10"
      >
        <div className="flex gap-2 mb-4">
          {project.tags.map((tag, i) => (
             <span key={i} className="px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
               {tag}
             </span>
          ))}
        </div>
        <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors">{project.title}</h3>
        
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
           <a href={project.github} className="p-3 glass rounded-full hover:bg-primary transition-all text-white">
             <Github size={20} />
           </a>
           <a href={project.demo} className="p-3 glass rounded-full hover:bg-primary transition-all text-white">
             <ExternalLink size={20} />
           </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
             Selected <span className="text-gradient">Works</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            A collection of digital experiences that push the boundaries 
            of UI/UX and 3D web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
