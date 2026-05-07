import React, { useState, useEffect } from "react";
import { LuTruck, LuBadgeCheck, LuGift, LuRotateCcw, LuQuote, LuStar, LuUsers, LuHeart } from "react-icons/lu";

function About() {
  const [isPaused, setIsPaused] = useState(false);
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Gourmet Critic",
      img: "https://i.pravatar.cc/150?u=ananya",
      text: `"The depth of flavor in Jayhind's seasonal collection is unparalleled. A true testament to Indian artisan heritage with a sophisticated modern touch."`,
    },
    {
      name: "Vikram Mehta",
      role: "Luxury Event Planner",
      img: "https://i.pravatar.cc/150?u=vikram",
      text: `"We choose Jayhind for our most prestigious galas. Their packaging is as exquisite as the sweets themselves. Simply the gold standard."`,
    },
    {
      name: "Saira Hakim",
      role: "Culinary Enthusiast",
      img: "https://i.pravatar.cc/150?u=saira",
      text: `"Every bite feels like a journey through history. The balance of sweetness and texture is perfect. My family's favorite for decades."`,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  return (
    <div className="about-page bg-surface">
      {/* ✅ Editorial Header */}
      <header className="about-header py-5 mb-5 text-center bg-main border-bottom">
        <div className="container">
          <span className="text-tertiary uppercase small tracking-widest mb-2 d-block">Our Heritage</span>
          <h1 className="font-display display-3">The Jayhind Story</h1>
          <p className="text-secondary max-w-600 mx-auto mt-3">A legacy of sweetness, crafted with devotion and perfected over generations.</p>
        </div>
      </header>

      {/* ✅ Brand Narrative Section */}
      <section className="brand-narrative container my-100">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="editorial-content pe-lg-5">
              <h2 className="font-display mb-4">Born from a passion for <br/><span className="text-accent">Authentic Artistry</span></h2>
              <p className="text-primary fs-5 mb-4 line-height-relaxed">
                Since our inception, Jayhind has stood at the intersection of traditional wisdom and contemporary refinement.
              </p>
              <p className="text-secondary mb-5">
                Our founders believed that sweets were more than just food; they were a medium of celebration, a bridge between souls. This philosophy continues to guide our kitchens today, where every ingredient is selected with surgical precision and every shape is formed by hand.
              </p>
              <div className="stats-row d-flex gap-5">
                <div>
                  <h4 className="font-display fs-2 mb-0">40+</h4>
                  <span className="tiny uppercase text-tertiary">Years of Legacy</span>
                </div>
                <div>
                  <h4 className="font-display fs-2 mb-0">120+</h4>
                  <span className="tiny uppercase text-tertiary">Artisan Recipes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="narrative-image-wrapper card-premium p-2 overflow-hidden hover-lift">
               <img src="https://images.unsplash.com/photo-1582231146747-8a6a666e1471?auto=format&fit=crop&q=80&w=800" alt="Jayhind Artisan" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Values Section (Japanese Minimalist) */}
      <section className="bg-main py-100 border-y">
        <div className="container">
          <div className="text-center mb-100">
            <h3 className="font-display mb-3">Our Core Principles</h3>
            <div className="bar-accent mx-auto"></div>
          </div>
          
          <div className="row g-4">
            {[
              { icon: <LuBadgeCheck />, title: "Purest Origins", desc: "We source only the finest single-origin nuts and organic dairy." },
              { icon: <LuHeart />, title: "Soulful Craft", desc: "Every sweet is hand-finished by master artisans with decades of experience." },
              { icon: <LuTruck />, title: "Swift Passage", desc: "Optimized delivery ensures your treasures arrive with peak freshness." },
              { icon: <LuRotateCcw />, title: "Total Integrity", desc: "Uncompromising quality standards from sourcing to final presentation." }
            ].map((v, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="value-card-minimal text-center px-4">
                  <div className="value-icon-circle mb-4 mx-auto">{v.icon}</div>
                  <h4 className="font-display fs-5 mb-3">{v.title}</h4>
                  <p className="text-tertiary small">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Team Section */}
      <section className="container my-150">
        <div className="text-center mb-100">
          <span className="text-tertiary uppercase small tracking-widest mb-2 d-block">The Collective</span>
          <h2 className="font-display display-5 mb-3">Meet the Masters</h2>
        </div>
        
        <div className="row g-4">
          {[
            { name: "Rahul Deshmukh", role: "Master Halwai", img: "https://i.pravatar.cc/300?u=rahul" },
            { name: "Priya Nair", role: "Sustainability Lead", img: "https://i.pravatar.cc/300?u=priya" },
            { name: "Amit Khanna", role: "Creative Director", img: "https://i.pravatar.cc/300?u=amit" }
          ].map((m, i) => (
            <div key={i} className="col-lg-4">
              <div className="team-card-premium text-center">
                 <div className="team-image-wrapper mb-4 overflow-hidden rounded-circle mx-auto">
                    <img src={m.img} alt={m.name} className="img-fluid" />
                 </div>
                 <h4 className="font-display mb-1">{m.name}</h4>
                 <span className="tiny uppercase text-accent tracking-widest">{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Testimonials Overlay Slider */}
      <section className="bg-main py-150 overflow-hidden position-relative">
        <div className="container position-relative zindex-10">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <LuQuote size={48} className="text-tertiary opacity-10 mb-5" />
              
              <div className="testimonial-vessel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                 <div className="testimonial-stage slide-fade">
                    <img src={testimonials[current].img} alt="" className="avatar-minimal mb-4" />
                    <p className="testimonial-text-editorial font-display fs-3 italic mb-4">
                      {testimonials[current].text}
                    </p>
                    <h5 className="font-weight-600 text-primary mb-1">{testimonials[current].name}</h5>
                    <span className="tiny uppercase text-tertiary">{testimonials[current].role}</span>
                 </div>
              </div>

              <div className="d-flex justify-content-center gap-2 mt-5">
                {testimonials.map((_, i) => (
                  <button key={i} className={`indicator-dot ${current === i ? 'active' : ''}`} onClick={() => setCurrent(i)}></button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="decorative-logo-bg">JAYHIND</div>
      </section>

      <style>{`
        .bg-surface { background: #FCFAF8; }
        .bg-main { background: #FFFFFF; }
        .border-y { border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); }
        .my-100 { margin-top: 100px; margin-bottom: 100px; }
        .my-150 { margin-top: 150px; margin-bottom: 150px; }
        
        .line-height-relaxed { line-height: 1.8; }
        .max-w-600 { max-width: 600px; }
        .bar-accent { width: 40px; height: 3px; background: var(--accent-primary); }

        .value-icon-circle { width: 64px; height: 64px; border: 1px solid var(--border-subtle); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; color: var(--accent-primary); transition: var(--transition-smooth); }
        .value-card-minimal:hover .value-icon-circle { background: var(--accent-primary); color: white; border-color: var(--accent-primary); transform: translateY(-5px); }

        .team-image-wrapper { width: 180px; height: 180px; filter: grayscale(1); transition: var(--transition-smooth); border: 2px solid transparent; padding: 4px; }
        .team-card-premium:hover .team-image-wrapper { filter: grayscale(0); border-color: var(--accent-primary); }
        
        .testimonial-text-editorial { color: var(--text-primary); letter-spacing: -0.01em; min-height: 120px; }
        .avatar-minimal { width: 80px; height: 80px; border-radius: 50%; border: 1px solid var(--border-subtle); padding: 4px; }
        
        .indicator-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--border-subtle); border: none; padding: 0; transition: var(--transition-smooth); }
        .indicator-dot.active { background: var(--accent-primary); width: 24px; border-radius: 4px; }
        
        .decorative-logo-bg { position: absolute; bottom: -40px; left: 50%; transform: translateX(-50%); font-size: 200px; font-weight: 900; opacity: 0.02; letter-spacing: 0.2em; pointer-events: none; }

        @media (max-width: 768px) {
           .display-3 { font-size: 3rem; }
           .display-5 { font-size: 2rem; }
           .testimonial-text-editorial { font-size: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}

export default About;
