import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LuShoppingBag, LuEye, LuChevronLeft, LuChevronRight, LuX, LuStar, LuFlame, LuLeaf } from "react-icons/lu";

function TraditionalSweets() {
  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSweet, setSelectedSweet] = useState(null);

  const sweetsPerPage = 12;
  const API_URL = "http://localhost:5000/products";

  const addToCart = async (product) => {
    try {
      await axios.post("http://localhost:5000/cart", {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0],
        quantity: 1,
      });
      toast.success("Successfully added to your collection!");
      navigate("/cart");
    } catch (error) {
      console.error("Add To Cart Failed:", error);
      toast.error("Could not add to cart. Please try again.");
    }
  };

  const fetchData = async (tag = "All") => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      let filtered = res.data.filter(
        (prod) => prod.category === "Traditional Sweets" && prod.status === "Active"
      );
      if (tag !== "All") {
        filtered = filtered.filter((p) => p.tag === tag);
      }
      setAllProducts(filtered);
    } catch (err) {
      console.error("API Fetch Error:", err);
      setError("Failed to load Traditional Sweets. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = Math.ceil(allProducts.length / sweetsPerPage);
  const indexOfLast = currentPage * sweetsPerPage;
  const indexOfFirst = indexOfLast - sweetsPerPage;
  const currentSweets = allProducts.slice(indexOfFirst, indexOfLast);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="collection-page">
      {/* ✅ Collection Header */}
      <header className="collection-header py-5 mb-5 text-center">
        <div className="container">
          <span className="text-tertiary uppercase small tracking-widest mb-3 d-block">The Heritage Collection</span>
          <h1 className="font-display display-4 mb-3">Traditional Sweets</h1>
          <p className="text-secondary max-w-600 mx-auto">Time-honored recipes passed down through generations, crafted with pure ghee and soulful ingredients.</p>
        </div>
      </header>

      <div className="container pb-100">
        {/* ✅ Filter Row */}
        <div className="collection-controls d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-4">
          <div className="filter-pills d-flex flex-wrap gap-2">
            {["All", "Best Seller", "New Arrival", "Signature"].map((btn) => (
              <button
                key={btn}
                className={`btn-pill-minimal ${filter === btn ? "active" : ""}`}
                onClick={() => {
                  setFilter(btn);
                  setCurrentPage(1);
                  fetchData(btn === "New Arrival" ? "New" : btn === "Signature" ? "Premium" : btn);
                }}
              >
                {btn}
              </button>
            ))}
          </div>
          <div className="collection-stats small text-tertiary">
            Showing {allProducts.length} Artisan Creations
          </div>
        </div>

        {/* ✅ Grid Area */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-accent mb-3" role="status"></div>
            <p className="font-display italic text-secondary">Gathering treasures...</p>
          </div>
        )}

        {error && <div className="alert-message danger">{error}</div>}

        {!loading && !error && (
          <div className="row g-4 mb-5">
            {currentSweets.length > 0 ? (
              currentSweets.map((sweet) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={sweet.id}>
                  <div className="product-card-premium">
                    <div className="pc-image-wrapper">
                      {sweet.tag && <span className="pc-tag">{sweet.tag}</span>}
                      <img src={sweet.images?.[0]} alt={sweet.name} className="pc-image" />
                      <div className="pc-overlay">
                        <button className="pc-action-btn" onClick={() => addToCart(sweet)} title="Add to bag">
                          <LuShoppingBag size={18} />
                        </button>
                        <button className="pc-action-btn" onClick={() => setSelectedSweet(sweet)} title="Quick view">
                          <LuEye size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="pc-info text-center pt-3">
                      <h4 className="pc-title">{sweet.name}</h4>
                      <p className="pc-price">₹{sweet.price} <span className="text-tertiary">/ kg</span></p>
                      {sweet.stock === 0 && <span className="text-danger tiny uppercase font-weight-600 mt-1 d-block tracking-tighter">Out of Stock</span>}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5 text-tertiary italic">No sweets found in this refinement.</div>
            )}
          </div>
        )}

        {/* ✅ Pagination */}
        {!loading && totalPages > 1 && (
          <div className="d-flex justify-content-center mt-5">
            <div className="pagination-minimal">
              <button disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}><LuChevronLeft /></button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} className={currentPage === i + 1 ? "active" : ""} onClick={() => changePage(i + 1)}>{i + 1}</button>
              ))}
              <button disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}><LuChevronRight /></button>
            </div>
          </div>
        )}
      </div>

      {/* ✅ Premium Details Modal */}
      {selectedSweet && (
        <div className="modal-overlay-custom" onClick={() => setSelectedSweet(null)}>
          <div className="card-premium modal-content-custom quickview-modal slide-in-bottom" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-minimal pos-absolute" onClick={() => setSelectedSweet(null)}><LuX /></button>
            
            <div className="row g-0">
              <div className="col-md-6">
                <div className="modal-gallery-main">
                  <img src={selectedSweet.images?.[0]} alt={selectedSweet.name} />
                </div>
              </div>
              <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
                <div className="modal-details-body">
                  <span className="text-accent uppercase small tracking-widest mb-2 d-block">Handcrafted Selection</span>
                  <h2 className="font-display mb-3">{selectedSweet.name}</h2>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <span className="pc-price fs-4">₹{selectedSweet.price}</span>
                    <div className="badge-pill status-active small text-success"><LuLeaf size={12} className="me-1" /> 100% Pure</div>
                  </div>
                  
                  <p className="text-secondary mb-4 line-height-relaxed">
                    {selectedSweet.description || "A masterpiece of traditional Indian confectionery, prepared using time-honored techniques and the finest organic ingredients for an unparalleled taste experience."}
                  </p>
                  
                  <div className="ingredients-pill-list mb-5 d-flex flex-wrap gap-2">
                    {selectedSweet.ingredients ? selectedSweet.ingredients.split(',').map((ing, i) => (
                      <span key={i} className="badge-pill bg-surface text-tertiary small border border-subtle">{ing.trim()}</span>
                    )) : <span className="badge-pill bg-surface text-tertiary small border border-subtle">Authentic Recipe</span>}
                  </div>

                  <div className="modal-actions d-grid gap-3">
                    <button className="btn-primary py-3" onClick={() => { addToCart(selectedSweet); setSelectedSweet(null); }}>
                      <LuShoppingBag size={18} className="me-2" /> Add to Shopping Bag
                    </button>
                    <button className="btn-ghost py-3" onClick={() => setSelectedSweet(null)}>Return to Collection</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .collection-page { background: var(--bg-surface); min-height: 100vh; }
        .collection-header { border-bottom: 1px solid var(--border-subtle); background: var(--bg-main); }
        .btn-pill-minimal { background: transparent; border: 1px solid var(--border-subtle); padding: 8px 24px; border-radius: 100px; font-size: 13px; color: var(--text-secondary); transition: var(--transition-smooth); }
        .btn-pill-minimal:hover { border-color: var(--accent-primary); color: var(--accent-primary); }
        .btn-pill-minimal.active { background: var(--accent-primary); border-color: var(--accent-primary); color: white; }

        /* QUICKVIEW MODAL */
        .quickview-modal { max-width: 900px; padding: 0 !important; overflow: hidden; border: none; }
        .modal-gallery-main { height: 100%; min-height: 400px; background: #f9f6f2; display: flex; align-items: center; justify-content: center; }
        .modal-gallery-main img { width: 100%; height: 100%; object-fit: cover; }
        .btn-close-minimal.pos-absolute { position: absolute; top: 20px; right: 20px; z-index: 10; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: white; box-shadow: var(--shadow-sm); }
        
        .line-height-relaxed { line-height: 1.8; }
        .tracking-tighter { letter-spacing: -0.02em; }
        
        @media (max-width: 768px) {
          .quickview-modal .row { flex-direction: column; }
          .modal-gallery-main { min-height: 300px; }
        }
      `}</style>
    </div>
  );
}

export default TraditionalSweets;
