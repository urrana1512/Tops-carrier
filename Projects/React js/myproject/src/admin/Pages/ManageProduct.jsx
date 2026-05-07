import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { LuPlus, LuSearch, LuFilter, LuSquarePen, LuTrash2, LuChevronLeft, LuChevronRight, LuImage, LuTag, LuPackage, LuCircleAlert } from "react-icons/lu";

function ManageProducts() {
  const API_URL = "http://localhost:5000/products";

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const [showFilters, setShowFilters] = useState(false);
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterTag, setFilterTag] = useState("All");

  const productsPerPage = 8;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products. Please ensure the artisan database is connected.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    try {
      await axios.patch(`${API_URL}/${id}`, { status: newStatus });
      setProducts((prev) =>
        prev.map((prod) =>
          prod.id === id ? { ...prod, status: newStatus } : prod,
        ),
      );
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const handleEditSave = async () => {
    if (!editProduct) return;
    try {
      await axios.put(`${API_URL}/${editProduct.id}`, editProduct);
      setProducts((prev) =>
        prev.map((prod) => (prod.id === editProduct.id ? editProduct : prod)),
      );
      setEditProduct(null);
      Swal.fire({ title: 'Inventory Updated', text: 'Product details have been refined.', icon: 'success', confirmButtonColor: 'var(--accent-primary)' });
    } catch (err) {
      console.error("Edit save error:", err);
    }
  };

  const confirmDelete = async () => {
    if (!deleteProduct) return;
    try {
      await axios.delete(`${API_URL}/${deleteProduct.id}`);
      setProducts((prev) =>
        prev.filter((prod) => prod.id !== deleteProduct.id),
      );
      setDeleteProduct(null);
      Swal.fire({ title: 'Item Removed', text: 'The product has been removed from the collection.', icon: 'success', confirmButtonColor: 'var(--accent-primary)' });
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      (p.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.category || "").toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = filterCategory === "All" || p.category === filterCategory;
    const matchesStatus = filterStatus === "All" || p.status === filterStatus;
    const matchesTag = filterTag === "All" || p.tag === filterTag;

    return matchesSearch && matchesCategory && matchesStatus && matchesTag;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="admin-page-content">
      <header className="admin-page-header mb-5">
        <div className="d-flex justify-content-between align-items-end">
          <div>
            <h1 className="font-display">Inventory Management</h1>
            <p className="text-secondary">Curate and refine your artisan sweet collection.</p>
          </div>
          <button className="btn-primary" onClick={() => (window.location.href = "/add-product")}>
            <LuPlus size={18} className="me-2" /> New Creation
          </button>
        </div>
      </header>

      {/* ✅ Search & Filter Bar */}
      <div className="admin-table-controls mb-4">
        <div className="search-pill-wrapper flex-grow-1">
          <LuSearch className="search-icon" />
          <input
            type="text"
            className="input-minimal rounded-pill ps-5 py-2 w-100"
            placeholder="Search by name or category..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <button className={`btn-ghost rounded-circle p-2 ${showFilters ? 'active' : ''}`} onClick={() => setShowFilters(!showFilters)}>
          <LuFilter size={20} />
        </button>
      </div>

      {showFilters && (
        <div className="card-premium p-4 mb-4 slide-in-top">
          <div className="row g-4">
            <div className="col-md-4">
              <label className="text-tertiary small uppercase mb-2 d-block">Collection</label>
              <select className="input-elegant" value={filterCategory} onChange={(e) => { setFilterCategory(e.target.value); setCurrentPage(1); }}>
                {uniqueCategories.map((cat, idx) => (<option key={idx} value={cat}>{cat}</option>))}
              </select>
            </div>
            <div className="col-md-4">
              <label className="text-tertiary small uppercase mb-2 d-block">Availability</label>
              <select className="input-elegant" value={filterStatus} onChange={(e) => { setFilterStatus(e.target.value); setCurrentPage(1); }}>
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="text-tertiary small uppercase mb-2 d-block">Feature Tag</label>
              <select className="input-elegant" value={filterTag} onChange={(e) => { setFilterTag(e.target.value); setCurrentPage(1); }}>
                {["All", ...new Set(products.map((p) => p.tag))].map((tag, idx) => (<option key={idx}>{tag}</option>))}
              </select>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="text-center py-5">
           <div className="spinner-border text-accent" role="status"><span className="visually-hidden">Loading...</span></div>
           <p className="mt-3 text-secondary font-display italic">Fetching inventory treasures...</p>
        </div>
      )}

      {error && (
        <div className="alert-message danger mb-5">
          <LuCircleAlert className="me-2" /> {error}
        </div>
      )}

      {!loading && !error && (
        <div className="card-premium overflow-hidden">
          <div className="table-minimal-wrapper">
            <table className="table-minimal">
              <thead>
                <tr>
                  <th>Product Details</th>
                  <th>Category</th>
                  <th>Pricing</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.length > 0 ? (
                  currentProducts.map((prod) => (
                    <tr key={prod.id} className={prod.status === "Inactive" ? "opacity-50" : ""}>
                      <td className="py-4">
                        <div className="d-flex align-items-center gap-3">
                          <div className="avatar-square">
                            {prod.images?.[0] ? <img src={prod.images[0]} alt={prod.name} /> : <LuImage size={20} className="text-tertiary" />}
                          </div>
                          <div>
                            <span className="font-weight-600 text-primary d-block">{prod.name}</span>
                            {prod.tag && <span className="badge-pill status-active mt-1" style={{fontSize: '9px'}}>{prod.tag}</span>}
                          </div>
                        </div>
                      </td>
                      <td><span className="text-secondary small">{prod.category}</span></td>
                      <td><span className="mono text-accent">₹{prod.price}</span></td>
                      <td>
                        {prod.stock > 0 ? (
                          <span className="text-success small"><LuPackage size={12} className="me-1" /> {prod.stock} in stock</span>
                        ) : (
                          <span className="text-danger small">Out of Stock</span>
                        )}
                      </td>
                      <td>
                        <span className={`badge-pill ${prod.status === 'Active' ? 'status-active' : 'status-danger'}`} style={{cursor: 'pointer'}} onClick={() => toggleStatus(prod.id, prod.status)}>
                          {prod.status || "Inactive"}
                        </span>
                      </td>
                      <td className="text-end">
                        <div className="d-flex justify-content-end gap-2">
                           <button className="action-circle-sm" onClick={() => setEditProduct(prod)}><LuSquarePen size={14} /></button>
                           <button className="action-circle-sm hover-danger" onClick={() => setDeleteProduct(prod)}><LuTrash2 size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="6" className="text-center py-5 text-tertiary">No products match your current refinement.</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* ✅ Pagination Footer */}
          {totalPages > 1 && (
            <div className="p-4 d-flex justify-content-between align-items-center border-top border-subtle">
              <span className="small text-tertiary">Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredProducts.length)} of {filteredProducts.length} items</span>
              <div className="pagination-minimal">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><LuChevronLeft /></button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button key={i} className={currentPage === i + 1 ? "active" : ""} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                ))}
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}><LuChevronRight /></button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ✅ Edit Modal */}
      {editProduct && (
        <div className="modal-overlay-custom">
          <div className="card-premium modal-content-custom slide-in-bottom">
            <div className="modal-header-elegant d-flex justify-content-between mb-4">
               <h3 className="font-display">Refine Product</h3>
               <button className="btn-close-minimal" onClick={() => setEditProduct(null)}>×</button>
            </div>
            
            <div className="scroll-area-modal">
              <div className="row g-3">
                <div className="col-12">
                  <label className="label-elegant mb-2">Artisan Name</label>
                  <input type="text" className="input-elegant" value={editProduct.name} onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })} />
                </div>
                <div className="col-md-6">
                  <label className="label-elegant mb-2">Category</label>
                  <select className="input-elegant" value={editProduct.category} onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}>
                    <option>Traditional Sweets</option>
                    <option>Dry Fruit Sweets</option>
                    <option>Sugar-Free Sweets</option>
                    <option>Chocolates</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="label-elegant mb-2">Feature Tag</label>
                  <select className="input-elegant" value={editProduct.tag || ""} onChange={(e) => setEditProduct({ ...editProduct, tag: e.target.value })}>
                    <option value="">None</option>
                    <option>Best Seller</option>
                    <option>Festive Special</option>
                    <option>New Arrival</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="label-elegant mb-2">Price (₹)</label>
                  <input type="number" className="input-elegant" value={editProduct.price} onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })} />
                </div>
                <div className="col-md-6">
                  <label className="label-elegant mb-2">Stock Level</label>
                  <input type="number" className="input-elegant" value={editProduct.stock} onChange={(e) => setEditProduct({ ...editProduct, stock: e.target.value })} />
                </div>
                <div className="col-12">
                  <label className="label-elegant mb-2">Ingredients</label>
                  <textarea className="input-simple h-80" value={editProduct.ingredients || ""} onChange={(e) => setEditProduct({ ...editProduct, ingredients: e.target.value })} placeholder="Pure ingredients list..." />
                </div>
                <div className="col-12">
                  <label className="label-elegant mb-2">Description</label>
                  <textarea className="input-simple h-100" value={editProduct.description || ""} onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })} placeholder="Artistic product story..." />
                </div>
                <div className="col-12">
                  <label className="label-elegant mb-2">Main Image URL</label>
                  <input type="url" className="input-elegant" value={editProduct.images?.[0] || ""} onChange={(e) => setEditProduct({ ...editProduct, images: [e.target.value] })} />
                </div>
              </div>
            </div>

            <div className="modal-footer-elegant d-flex gap-3 justify-content-end mt-5 pt-4 border-top border-subtle">
              <button className="btn-ghost" onClick={() => setEditProduct(null)}>Discard</button>
              <button className="btn-primary px-5" onClick={handleEditSave}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Delete Dialog */}
      {deleteProduct && (
        <div className="modal-overlay-custom">
          <div className="card-premium p-5 text-center modal-content-custom max-w-400">
             <div className="icon-burn mb-4 mx-auto"><LuTrash2 size={24} /></div>
             <h3 className="font-display mb-2">Remove from Collection?</h3>
             <p className="text-secondary small mb-5">This action will permanently delete <br/><strong>{deleteProduct.name}</strong> from your artisan catalog.</p>
             <div className="d-flex gap-3 justify-content-center">
                <button className="btn-ghost" onClick={() => setDeleteProduct(null)}>Keep Item</button>
                <button className="btn-primary bg-danger" onClick={confirmDelete}>Confirm Delete</button>
             </div>
          </div>
        </div>
      )}

      <style>{`
        .search-pill-wrapper { position: relative; }
        .search-icon { position: absolute; left: 20px; top: 50%; transform: translateY(-50%); color: var(--text-tertiary); }
        .admin-table-controls { display: flex; align-items: center; gap: 16px; }

        .avatar-square { width: 44px; height: 44px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); overflow: hidden; background: var(--bg-surface); display: flex; align-items: center; justify-content: center; }
        .avatar-square img { width: 100%; height: 100%; object-fit: cover; }

        .action-circle-sm { width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--border-subtle); background: var(--bg-elevated); color: var(--text-secondary); display: flex; align-items: center; justify-content: center; transition: var(--transition-smooth); }
        .action-circle-sm:hover { border-color: var(--accent-primary); color: var(--accent-primary); background: var(--bg-surface); }
        .action-circle-sm.hover-danger:hover { border-color: var(--danger); color: var(--danger); }

        .pagination-minimal { display: flex; gap: 8px; }
        .pagination-minimal button { width: 32px; height: 32px; border: 1px solid var(--border-subtle); background: transparent; border-radius: 50%; font-size: 13px; display: flex; align-items: center; justify-content: center; transition: var(--transition-smooth); }
        .pagination-minimal button.active { background: var(--accent-primary); border-color: var(--accent-primary); color: white; }
        .pagination-minimal button:hover:not(.active):not(:disabled) { border-color: var(--accent-primary); color: var(--accent-primary); }

        /* MODALS */
        .modal-overlay-custom { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(28, 25, 23, 0.6); backdrop-filter: blur(4px); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 24px; }
        .modal-content-custom { width: 100%; max-width: 680px; max-height: 90vh; display: flex; flex-direction: column; padding: 48px; }
        .modal-content-custom.max-w-400 { max-width: 400px; }
        .scroll-area-modal { overflow-y: auto; padding-right: 12px; }
        .scroll-area-modal::-webkit-scrollbar { width: 4px; }
        .scroll-area-modal::-webkit-scrollbar-thumb { background: var(--border-subtle); border-radius: 4px; }

        .icon-burn { width: 64px; height: 64px; background: rgba(196, 115, 106, 0.1); color: var(--danger); display: flex; align-items: center; justify-content: center; border-radius: 50%; }
        .btn-close-minimal { background: transparent; border: none; font-size: 32px; line-height: 1; color: var(--text-tertiary); transition: var(--transition-smooth); }
        .btn-close-minimal:hover { color: var(--text-primary); transform: rotate(90deg); }

        .input-simple { width: 100%; border: 1px solid var(--border-subtle); background: var(--bg-surface); padding: 12px 16px; border-radius: var(--radius-sm); font-size: 14px; transition: var(--transition-smooth); }
        .h-80 { height: 80px; }
        .h-100 { height: 100px; }
      `}</style>
    </div>
  );
}

export default ManageProducts;
