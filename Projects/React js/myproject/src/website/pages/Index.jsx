import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LuTruck, LuHeadphones, LuRotateCcw, LuArrowRight, LuShoppingCart, LuEye } from "react-icons/lu";

function Index() {
  const [isPaused, setIsPaused] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // In a real app, these would come from the API
  const featuredProducts = [
    { id: 1, name: "Kaju Katli", price: "850", img: "assets/img/products/kaju-katli.png", badge: "Bestseller" },
    { id: 2, name: "Motichoor Ladda", price: "700", img: "assets/img/products/bites.png", badge: "Classic" },
    { id: 3, name: "Saffron Penda", price: "950", img: "assets/img/products/rasgulla.png", badge: "Premium" },
    { id: 4, name: "Dry Fruit Bites", price: "1200", img: "assets/img/products/sweet.jpg", badge: "Artisan" },
  ];

  const testimonials = [
    { name: "Ananya Mehta", role: "Connoisseur", text: "The texture of their Kaju Katli is unparalleled. It reminds me of the traditional sweets from my childhood, but with a refined modern touch." },
    { name: "Rahul Sharma", role: "Gift Specialist", text: "Jayhind's packaging and quality make them my first choice for corporate gifting. Truly a premium experience from start to finish." }
  ];

  useEffect(() => {
    // Preserving the fetch logic (mocked here or use existing if any)
    const fetchCats = async () => {
      try {
        const res = await fetch("http://localhost:5000/categories");
        const data = await res.json();
        setCategories(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchCats();
  }, []);

  return (
    <main className="index-page">
      {/* ✅ HERO SECTION: Editorial Layout */}
      <section className="hero-editorial">
        <div className="container-minimal">
          <div className="hero-content">
            <div className="hero-text-area">
              <span className="hero-subtitle mb-4">Established 1948</span>
              <h1 className="font-display">The Art of <br />Indian Fine Sweets</h1>
              <p className="text-secondary hero-description">
                Experience the heritage of Jayhind. Hand-crafted with ancestral techniques and the purest ingredients, our sweets are a celebration of timeless elegance.
              </p>
              <div className="hero-action-group mt-5">
                <NavLink to="/traditional-sweets" className="btn-primary">Explore Collection</NavLink>
                <NavLink to="/about" className="btn-ghost ms-4">Our Heritage</NavLink>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img src="/assets/img/hero-luxury.png" alt="Artisan Sweets" className="hero-main-img" />
              <div className="hero-accent-box"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FEATURES: Minimalist Icons */}
      <section className="features-section py-5">
        <div className="container-minimal">
          <div className="features-grid">
            <div className="feature-item">
              <LuTruck className="feature-icon" strokeWidth={1.5} />
              <div>
                <h5>Pristine Delivery</h5>
                <p className="text-tertiary">Temperature controlled shipping</p>
              </div>
            </div>
            <div className="feature-item">
              <LuHeadphones className="feature-icon" strokeWidth={1.5} />
              <div>
                <h5>Personal Concierge</h5>
                <p className="text-tertiary">Expert guidance for gifting</p>
              </div>
            </div>
            <div className="feature-item">
              <LuRotateCcw className="feature-icon" strokeWidth={1.5} />
              <div>
                <h5>Purity Guarantee</h5>
                <p className="text-tertiary">100% natural, no additives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CATEGORIES: Horizontal Marquee */}
      <section className="categories-marquee-section py-5">
        <div className="container-minimal mb-5 d-flex justify-content-between align-items-end">
          <div>
            <h2 className="font-display">Collections</h2>
            <p className="text-secondary">Explore our curated artisan ranges</p>
          </div>
          <NavLink to="/traditional-sweets" className="link-with-arrow">
            View All <LuArrowRight />
          </NavLink>
        </div>
        
        <div className="marquee-container" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className={`marquee-content ${isPaused ? 'paused' : ''}`}>
            {loading ? <div className="skeleton h-100 w-100"></div> : 
             categories.concat(categories).map((cat, i) => (
              <NavLink key={i} to={`/category/${cat.name.toLowerCase()}`} className="marquee-item">
                <div className="category-circle-img">
                   <img src={`assets/img/products/${cat.name.toLowerCase().includes('kaju') ? 'kaju-katli.png' : 'sweet.jpg'}`} alt={cat.name} />
                </div>
                <span className="category-label">{cat.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FEATURED PRODUCTS: Elegant Cards */}
      <section className="featured-products py-5">
        <div className="container-minimal">
          <div className="section-header text-center mb-5">
            <span className="status-active badge-pill mb-2">Editor's Choice</span>
            <h2 className="font-display">Signature Creations</h2>
          </div>
          
          <div className="product-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="card-premium product-card">
                <div className="product-image-container">
                  <img src={product.img} alt={product.name} />
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <div className="product-actions-overlay">
                    <button className="action-circle"><LuShoppingCart size={18} /></button>
                    <button className="action-circle"><LuEye size={18} /></button>
                  </div>
                </div>
                <div className="product-details p-4">
                  <h4 className="product-name">{product.name}</h4>
                  <div className="product-meta d-flex justify-content-between align-items-center mt-2">
                    <span className="mono text-accent">₹{product.price} <small className="text-tertiary">/ kg</small></span>
                    <button className="btn-ghost btn-sm">Add to Bag</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ TESTIMONIALS: Minimalist */}
      <section className="testimonials-editorial bg-surface py-5">
        <div className="container-minimal text-center">
          <h2 className="font-display mb-5">Voices of Appreciation</h2>
          <div className="testimonial-focus">
            <p className="testimonial-text font-display">
              "{testimonials[0].text}"
            </p>
            <div className="testimonial-author mt-4">
              <span className="author-name">{testimonials[0].name}</span>
              <span className="author-role text-tertiary">{testimonials[0].role}</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .index-page { overflow-x: hidden; }

        /* HERO */
        .hero-editorial {
          padding: var(--space-2xl) 0;
          background-color: var(--bg-base);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          align-items: center;
          gap: var(--space-2xl);
        }

        .hero-subtitle {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent-primary);
          font-weight: 600;
        }

        .hero-description {
          max-width: 480px;
          font-size: 18px;
        }

        .hero-image-wrapper {
          position: relative;
          padding: 20px;
        }

        .hero-main-img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          border-radius: var(--radius-lg);
          position: relative;
          z-index: 2;
        }

        .hero-accent-box {
          position: absolute;
          top: 0;
          right: 0;
          width: 80%;
          height: 80%;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          z-index: 1;
          border-radius: var(--radius-lg);
        }

        /* FEATURES */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-2xl);
          padding: var(--space-xl) 0;
          border-bottom: 1px solid var(--border-subtle);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .feature-icon {
          color: var(--accent-primary);
          size: 32px;
        }

        .feature-item h5 {
          font-size: 15px;
          margin-bottom: 2px;
        }

        /* MARQUEE */
        .marquee-container {
          overflow: hidden;
          padding: 20px 0;
        }

        .marquee-content {
          display: flex;
          gap: var(--space-2xl);
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        .marquee-content.paused { animation-play-state: paused; }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          min-width: 140px;
        }

        .category-circle-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          background: var(--bg-elevated);
          transition: var(--transition-smooth);
        }

        .marquee-item:hover .category-circle-img {
          border-color: var(--accent-primary);
          transform: translateY(-5px);
        }

        .category-circle-img img { width: 100%; height: 100%; object-fit: cover; }

        .category-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
        }

        /* PRODUCT GRID */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-lg);
        }

        .product-image-container {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .product-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .product-card:hover .product-image-container img {
          transform: scale(1.05);
        }

        .product-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--bg-elevated);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid var(--border-subtle);
        }

        .product-actions-overlay {
          position: absolute;
          bottom: 12px;
          right: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          opacity: 0;
          transform: translateX(10px);
          transition: var(--transition-smooth);
        }

        .product-card:hover .product-actions-overlay {
          opacity: 1;
          transform: translateX(0);
        }

        .action-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-primary);
          transition: var(--transition-smooth);
        }

        .action-circle:hover {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
        }

        .product-name {
          font-size: 18px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
        }

        /* TESTIMONIALS */
        .testimonial-focus {
          max-width: 800px;
          margin: 0 auto;
        }

        .testimonial-text {
          font-size: 32px;
          line-height: 1.4;
          font-style: italic;
          color: var(--text-primary);
        }

        .author-name {
          display: block;
          font-weight: 600;
          font-size: 15px;
        }

        .link-with-arrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--accent-primary);
        }

        @media (max-width: 1024px) {
          .hero-content { grid-template-columns: 1fr; }
          .hero-image-wrapper { order: -1; }
          .hero-main-img { height: 400px; }
          .product-grid { grid-template-columns: repeat(2, 1fr); }
          .features-grid { grid-template-columns: 1fr; gap: var(--space-lg); }
        }
      `}</style>
    </main>
  );
}

export default Index;
