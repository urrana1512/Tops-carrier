import Hero from "@/components/sections/Hero";
import QuickStats from "@/components/sections/QuickStats";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div id="home">
        <Hero />
      </div>
      <QuickStats />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
      <Contact />
    </div>
  );
}
