import React, { useEffect, useState } from "react";
import axios from "axios";
import { LuList, LuPlus, LuSearch, LuSquarePen, LuTrash2, LuX, LuSave, LuChevronLeft, LuChevronRight, LuPackage, LuInfo, LuImage, LuActivity } from "react-icons/lu";

function ManageCategories() {
  const API_URL = "http://localhost:5000/categories";

  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  const itemsPerPage = 8;

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Failed to fetch collections. Please verify API connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to retire this collection?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setCategories((prev) => prev.filter((cat) => cat.id !== id));
      } catch (err) {
        console.error("Delete error:", err);
        alert("Retirement failed. Please try again.");
      }
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    try {
      await axios.patch(`${API_URL}/${id}`, { status: newStatus });
      setCategories((prev) =>
        prev.map((cat) => (cat.id === id ? { ...cat, status: newStatus } : cat))
      );
    } catch (err) {
      console.error("Status update error:", err);
      alert("Status transition failed.");
    }
  };

  const openEditModal = (category) => {
    setEditCategory({ ...category });
    setShowModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditCategory((prev) => ({ ...prev, [name]: value }));
  };

  const saveCategoryChanges = async () => {
    try {
      await axios.put(`${API_URL}/${editCategory.id}`, editCategory);
      setCategories((prev) =>
        prev.map((cat) => (cat.id === editCategory.id ? editCategory : cat))
      );
      setShowModal(false);
    } catch (err) {
      console.error("Update error:", err);
      alert("Blueprint update failed.");
    }
  };

  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="admin-page-content">
      {/* ✅ Premium Header */}
      <header className="admin-page-header d-flex justify-content-between align-items-end mb-5">
        <div>
          <h1 className="font-display">Collection Blueprint</h1>
          <p className="text-secondary small">Define and manage the artistic categories of your estate.</p>
        </div>
        <div className="d-flex gap-3">
           <div className="search-minimal-vessel">
              <LuSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Find collection..." 
                className="search-input-minimal"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
           </div>
           <button className="btn-primary d-flex align-items-center gap-2 px-4 py-2" onClick={() => (window.location.href = "/add-category")}>
              <LuPlus size={18} /> New Collection
           </button>
        </div>
      </header>

      {/* ✅ Loading / Error States */}
      {loading && <div className="text-center py-5"><div className="spinner-border text-accent spinner-border-sm me-2"></div><span className="tiny uppercase tracking-widest text-tertiary">Accessing Archives...</span></div>}
      {error && <div className="alert alert-danger-custom text-center py-4">{error}</div>}

      {/* ✅ Blueprint Table */}
      {!loading && !error && (
        <div className="card-premium p-0 overflow-hidden slide-in-bottom">
           <div className="table-minimal-wrapper">
              <table className="table-minimal mb-0">
                 <thead>
                    <tr>
                       <th className="ps-4">#</th>
                       <th>Portrait</th>
                       <th>Designation</th>
                       <th>Provenance / Description</th>
                       <th>Visibility</th>
                       <th className="text-end pe-4">Actions</th>
                    </tr>
                 </thead>
                 <tbody>
                    {currentCategories.length > 0 ? (
                      currentCategories.map((cat, index) => (
                        <tr key={cat.id}>
                           <td className="ps-4"><span className="tiny text-tertiary mono">{indexOfFirstItem + index + 1}</span></td>
                           <td>
                              <div className="portrait-vessel">
                                 <img src={cat.image} alt={cat.name} className="img-fluid rounded" />
                              </div>
                           </td>
                           <td><span className="font-display fs-6 text-primary">{cat.name}</span></td>
                           <td style={{ maxWidth: '300px' }}><p className="text-tertiary small mb-0 text-truncate">{cat.description}</p></td>
                           <td>
                              <span 
                                className={`badge-pill ${cat.status === "Active" ? "status-active" : "bg-surface text-tertiary border"} small pointer`}
                                onClick={() => toggleStatus(cat.id, cat.status)}
                              >
                                {cat.status || "Inactive"}
                              </span>
                           </td>
                           <td className="text-end pe-4">
                              <div className="d-flex justify-content-end gap-2">
                                <button className="btn-ghost rounded-circle p-2" onClick={() => openEditModal(cat)}>
                                  <LuSquarePen size={16} />
                                </button>
                                <button className="btn-ghost rounded-circle p-2 text-danger opacity-50 hover-opacity-100" onClick={() => handleDelete(cat.id)}>
                                  <LuTrash2 size={16} />
                                </button>
                              </div>
                           </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-5 text-tertiary italic underline-accent">No collections found in this archive.</td>
                      </tr>
                    )}
                 </tbody>
              </table>
           </div>
        </div>
      )}

      {/* ✅ Pagination */}
      {totalPages > 1 && !loading && (
        <footer className="d-flex justify-content-between align-items-center mt-5">
           <span className="tiny text-tertiary uppercase tracking-widest">Page {currentPage} of {totalPages}</span>
           <div className="pagination-minimal">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><LuChevronLeft /></button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} className={currentPage === i + 1 ? "active" : ""} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
              ))}
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}><LuChevronRight /></button>
           </div>
        </footer>
      )}

      {/* ✅ Redesign Edit Modal */}
      {showModal && editCategory && (
        <div className="modal-overlay-custom" onClick={() => setShowModal(false)}>
          <div className="card-premium modal-content-custom slide-in-bottom p-0 overflow-hidden" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '550px' }}>
            <header className="modal-header-elegant p-4 border-bottom d-flex justify-content-between align-items-center bg-surface">
              <h4 className="card-title-elegant mb-0 d-flex align-items-center gap-2">
                <LuSquarePen size={20} className="text-accent" /> Adjust Blueprint
              </h4>
              <button className="btn-close-minimal" onClick={() => setShowModal(false)}><LuX /></button>
            </header>
            
            <div className="modal-body-elegant p-5">
               <div className="row g-4">
                  <div className="col-12">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuPackage size={14} /> Designation Name</label>
                     <input
                       type="text"
                       name="name"
                       className="input-elegant"
                       value={editCategory.name}
                       onChange={handleEditChange}
                       placeholder="e.g. Imperial Saffron Sweets"
                     />
                  </div>
                  <div className="col-12">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuInfo size={14} /> Description / Provenance</label>
                     <textarea
                       name="description"
                       className="input-simple"
                       rows="4"
                       value={editCategory.description}
                       onChange={handleEditChange}
                       placeholder="Describe the heritage and flavor profile..."
                     />
                  </div>
                  <div className="col-12">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuImage size={14} /> Portrait / Image URL</label>
                     <input
                       type="text"
                       name="image"
                       className="input-elegant"
                       value={editCategory.image}
                       onChange={handleEditChange}
                       placeholder="Link to high-resolution asset..."
                     />
                  </div>
                  <div className="col-12">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuActivity size={14} /> Visibility Status</label>
                     <select
                       name="status"
                       className="input-elegant"
                       value={editCategory.status}
                       onChange={handleEditChange}
                     >
                       <option value="Active">Operational / Active</option>
                       <option value="Inactive">Archived / Inactive</option>
                     </select>
                  </div>
               </div>
            </div>

            <footer className="p-4 bg-surface border-top text-center d-flex gap-3 justify-content-center">
               <button className="btn-ghost px-5 py-2" onClick={() => setShowModal(false)}>Discard</button>
               <button className="btn-primary px-5 py-2 d-flex align-items-center gap-2" onClick={saveCategoryChanges}>
                  <LuSave size={18} /> Preserve Blueprint
               </button>
            </footer>
          </div>
        </div>
      )}

      <style>{`
        .portrait-vessel { width: 50px; height: 50px; overflow: hidden; border-radius: 8px; border: 1px solid var(--border-subtle); }
        .portrait-vessel img { width: 100%; height: 100%; object-fit: cover; }
        
        .search-minimal-vessel { position: relative; width: 300px; }
        .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-tertiary); }
        .search-input-minimal { width: 100%; padding: 10px 16px 10px 48px; border-radius: 100px; border: 1px solid var(--border-subtle); background: var(--bg-surface); font-size: 14px; outline: none; transition: var(--transition-smooth); }
        .search-input-minimal:focus { border-color: var(--accent-primary); box-shadow: 0 0 0 4px rgba(192, 98, 42, 0.05); }

        .hover-opacity-100:hover { opacity: 1 !important; }
        .pointer { cursor: pointer; }
        
        .input-simple { width: 100%; border: 1px solid var(--border-subtle); background: var(--bg-surface); padding: 12px 16px; border-radius: var(--radius-sm); font-size: 14px; transition: var(--transition-smooth); outline: none; }
        .input-simple:focus { border-color: var(--accent-primary); }

        @keyframes slideInBottom {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

      `}</style>
    </div>
  );
}

export default ManageCategories;
