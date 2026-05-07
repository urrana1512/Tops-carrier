"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
       gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
             opacity: 1,
             y: 0,
             duration: 1,
             ease: "power2.out",
             scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse",
             }
          }
       );
    });

    // Parallax effects
    gsap.to(".parallax-bg", {
       y: (i, target) => -target.offsetHeight * 0.2,
       ease: "none",
       scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
       }
    });

    return () => {
       ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
};
