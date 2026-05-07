import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LuShoppingBag, LuEye, LuSearch, LuFilter, LuChevronLeft, LuChevronRight, LuCircleCheck, LuCircleX, LuSparkles, LuInfo, LuHeart, LuArrowRight, LuX } from "react-icons/lu";

function DryFruitSweets() {
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSweet, setSelectedSweet] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const sweetsPerPage = 12;
  const API_URL = "http://localhost:5000/products";

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      const dryFruitOnly = res.data.filter(
        (prod) =>
          prod.category === "Dry Fruit Sweets" && prod.status === "Active"
      );
      setAllProducts(dryFruitOnly);
    } catch (err) {
      console.error("API Fetch Error:", err);
      setError("The estate archives are currently unreachable. Please attempt your visit later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredSweets =
    filter === "All"
      ? allProducts
      : allProducts.filter((sweet) => sweet.tag === filter);

  const totalPages = Math.ceil(filteredSweets.length / sweetsPerPage);
  const indexOfLast = currentPage * sweetsPerPage;
  const indexOfFirst = indexOfLast - sweetsPerPage;
  const currentSweets = filteredSweets.slice(indexOfFirst, indexOfLast);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const addToCart = async (product) => {
    try {
      await axios.post("http://localhost:3008/cart", {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0],
        quantity: 1,
      });

      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate("/cart");
      }, 1500);
    } catch (err) {
      console.error("Add To Cart Failed:", err);
    }
  };

  return (
    <div className="gallery-page bg-surface min-vh-100">
      {/* ✅ Premium Alert */}
      {showAlert && (
        <div className="alert-floating-premium slide-in-right">
           <div className="alert-content d-flex align-items-center gap-3 py-3 px-4 shadow-lg bg-white border-accent rounded-pill">
              <div className="bg-success text-white rounded-circle p-1 d-flex"><LuCircleCheck size={18} /></div>
              <span className="small font-weight-600 text-primary uppercase tracking-widest">Delicacy Added to Selection</span>
           </div>
        </div>
      )}

      {/* ✅ Curated Collection Header */}
      <section className="collection-header py-120 bg-primary text-white text-center position-relative overflow-hidden">
        <div className="hero-pattern"></div>
        <div className="container position-relative z-index-1">
          <div className="tiny uppercase tracking-widest opacity-60 mb-3 d-flex align-items-center justify-content-center gap-2">
             <LuSparkles size={14} className="text-accent" /> The Gilded Harvest
          </div>
          <h1 className="font-display display-3 mb-4">Dry Fruit Confections</h1>
          <p className="lead opacity-80 mx-auto" style={{ maxWidth: '600px' }}>
            A curated assemblage of nature's finest nuts and dried fruits, meticulously transformed into architectural splendors of flavor.
          </p>
        </div>
      </section>

      {/* ✅ Main Gallery Section */}
      <div className="container py-100">
        {/* ✅ Filter Ensemble */}
        <div className="filter-ensemble d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-4 border-bottom pb-4">
           <div className="d-flex align-items-center gap-2">
              <LuFilter size={18} className="text-tertiary" />
              <span className="tiny uppercase tracking-widest text-tertiary font-weight-600">Curate by</span>
           </div>
           <div className="filter-pills d-flex flex-wrap justify-content-center gap-2">
              {["All", "Best Seller", "New", "Premium"].map((btn) => (
                <button
                  key={btn}
                  className={`btn-pill-minimal ${filter === btn ? "active" : ""}`}
                  onClick={() => {
                    setFilter(btn);
                    setCurrentPage(1);
                  }}
                >
                  {btn}
                </button>
              ))}
           </div>
           <div className="gallery-meta tiny uppercase tracking-widest text-tertiary">
              {filteredSweets.length} Preparations Discovered
           </div>
        </div>

        {/* ✅ Status States */}
        {loading && (
          <div className="py-5 text-center fade-in">
             <div className="spinner-minimal mx-auto mb-3"></div>
             <p className="tiny uppercase tracking-widest text-tertiary">Accessing Estate Reserves...</p>
          </div>
        )}
        
        {error && (
          <div className="py-5 text-center fade-in">
             <LuInfo size={40} className="text-accent mb-3 opacity-30" />
             <p className="text-secondary italic">{error}</p>
          </div>
        )}

        {/* ✅ Delicacy Grid */}
        {!loading && !error && (
          <div className="row g-5">
            {currentSweets.length > 0 ? (
              currentSweets.map((sweet, idx) => (
                <div className="col-xl-3 col-lg-4 col-sm-6 slide-in-bottom" key={sweet.id} style={{ animationDelay: `${idx * 0.05}s` }}>
                  <div className="delicacy-card group">
                    <div className="card-image-vessel overflow-hidden rounded-2 position-relative bg-surface p-4">
                      {sweet.tag && (
                        <div className="delicacy-tag tiny uppercase tracking-widest px-3 py-1 bg-accent text-white position-absolute top-0 start-0 m-3 z-index-2 shadow-sm rounded-1">
                           {sweet.tag}
                        </div>
                      )}
                      <button className="btn-wishlist position-absolute top-0 end-0 m-3 z-index-2 p-2 rounded-circle border-0 bg-transparent text-tertiary hover-text-accent transition-smooth">
                         <LuHeart size={18} />
                      </button>

                      <div className="image-wrapper transition-smooth-extra" onClick={() => setSelectedSweet(sweet)}>
                        <img
                          src={sweet.images?.[0]}
                          alt={sweet.name}
                          className="img-fluid delicacy-img"
                        />
                      </div>
                      
                      <div className="card-overlay-actions d-flex flex-column gap-2">
                        <button className="btn-action-glass" onClick={() => addToCart(sweet)}>
                          <LuShoppingBag size={18} /> <span>Secure Item</span>
                        </button>
                        <button className="btn-action-glass" onClick={() => setSelectedSweet(sweet)}>
                          <LuEye size={18} /> <span>Examine</span>
                        </button>
                      </div>
                    </div>

                    <div className="card-details-elegant text-center pt-4">
                      <h4 className="font-display fs-5 mb-1 text-primary">{sweet.name}</h4>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                         <span className="text-accent font-weight-700 fs-5">₹{sweet.price}</span>
                         <span className="tiny text-tertiary uppercase tracking-widest">per Kilogram</span>
                      </div>
                      {sweet.stock === 0 && (
                        <div className="tiny uppercase text-danger font-weight-700 mt-2 tracking-widest letter-spacing-1">
                           Exhausted in Archive
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 py-5 text-center fade-in">
                 <p className="text-secondary italic">No dry fruit preparations match the current curation criteria.</p>
              </div>
            )}
          </div>
        )}

        {/* ✅ Pagination Minimal */}
        {!loading && totalPages > 1 && (
          <footer className="d-flex justify-content-between align-items-center mt-5 pt-5 border-top">
             <span className="tiny text-tertiary uppercase tracking-widest">Archive Page {currentPage} of {totalPages}</span>
             <div className="pagination-minimal">
                <button disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}><LuChevronLeft /></button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button key={i} className={currentPage === i + 1 ? "active" : ""} onClick={() => changePage(i + 1)}>{i + 1}</button>
                ))}
                <button disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}><LuChevronRight /></button>
             </div>
          </footer>
        )}
      </div>

      {/* ✅ Product Revelation Modal */}
      {selectedSweet && (
        <div className="modal-overlay-custom" onClick={() => setSelectedSweet(null)}>
          <div className="card-premium modal-content-custom slide-in-bottom p-0 overflow-hidden" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px' }}>
            <button className="btn-close-minimal position-absolute top-0 end-0 m-4 z-index-2" onClick={() => setSelectedSweet(null)}><LuX /></button>
            
            <div className="row g-0">
               <div className="col-lg-6 bg-surface d-flex align-items-center justify-content-center p-5">
                  <div className="revelation-image">
                     <img src={selectedSweet.images?.[0]} alt={selectedSweet.name} className="img-fluid shadow-lg rounded-2" />
                  </div>
               </div>
               <div className="col-lg-6 p-5 d-flex flex-column justify-content-center">
                  <div className="tiny uppercase tracking-widest text-accent mb-2 d-flex align-items-center gap-2">
                     <LuSparkles size={14} /> Artisanal Delicacy
                  </div>
                  <h2 className="font-display display-6 mb-3 text-primary">{selectedSweet.name}</h2>
                  <div className="fs-4 text-accent font-weight-700 mb-4 border-bottom pb-3">
                     ₹{selectedSweet.price} <span className="tiny text-tertiary uppercase tracking-widest font-weight-400">per kg</span>
                  </div>
                  
                  <p className="text-secondary mb-5 lead lh-lg">
                    {selectedSweet.description || "A masterful composition of premium nuts and sun-dried fruits, offering an architectural depth of flavor and texture that honors the heritage of Jayhind sweets."}
                  </p>

                  <div className="d-flex flex-column gap-3">
                     <button className="btn-primary py-4 d-flex align-items-center justify-content-center gap-3 fs-5" onClick={() => addToCart(selectedSweet)}>
                        <LuShoppingBag size={20} /> Secure this Preparation
                     </button>
                     <div className="d-flex justify-content-center gap-4 py-3 border-top mt-2">
                        <div className="tiny uppercase tracking-widest text-tertiary d-flex align-items-center gap-2"><LuCircleCheck size={14} className="text-success" /> Pure Artisanal</div>
                        <div className="tiny uppercase tracking-widest text-tertiary d-flex align-items-center gap-2"><LuCircleCheck size={14} className="text-success" /> Quality Insured</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hero-pattern { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: radial-gradient(white 1px, transparent 1px); background-size: 40px 40px; opacity: 0.1; }
        .z-index-1 { z-index: 1; }
        .z-index-2 { z-index: 2; }
        
        .btn-pill-minimal { background: transparent; border: 1px solid var(--border-subtle); color: var(--text-tertiary); padding: 8px 24px; border-radius: 100px; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; transition: var(--transition-smooth); }
        .btn-pill-minimal:hover { border-color: var(--accent-primary); color: var(--accent-primary); }
        .btn-pill-minimal.active { background: var(--accent-primary); border-color: var(--accent-primary); color: white; box-shadow: 0 4px 15px rgba(192, 98, 42, 0.2); }

        .delicacy-card { height: 100%; transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .delicacy-card:hover { transform: translateY(-10px); }
        .delicacy-img { transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .delicacy-card:hover .delicacy-img { transform: scale(1.1); }
        
        .card-overlay-actions { position: absolute; bottom: 20px; left: 20px; right: 20px; opacity: 0; transform: translateY(20px); transition: all 0.4s ease; z-index: 2; }
        .delicacy-card:hover .card-overlay-actions { opacity: 1; transform: translateY(0); }
        
        .btn-action-glass { background: rgba(255, 255, 255, 0.9); border: none; padding: 12px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; color: var(--text-primary); backdrop-filter: blur(10px); transition: all 0.3s ease; }
        .btn-action-glass:hover { background: var(--accent-primary); color: white; }

        .alert-floating-premium { position: fixed; top: 100px; right: 30px; z-index: 10000; }
        
        .spinner-minimal { width: 40px; height: 40px; border: 2px solid var(--border-subtle); border-top-color: var(--accent-primary); border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 768px) {
           .collection-header { padding: 80px 0; }
           .display-3 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}

export default DryFruitSweets;
