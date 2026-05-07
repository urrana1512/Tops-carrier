import React, { useEffect, useState } from "react";
import axios from "axios";
import { LuMessageSquare, LuSearch, LuFilter, LuEye, LuTrash2, LuX, LuCircleCheck, LuCircleX, LuStar, LuChevronLeft, LuChevronRight, LuCalendar, LuMail } from "react-icons/lu";

function ManageFeedback() {
  const API_URL = "http://localhost:5000/feedbacks";

  const [feedbacks, setFeedbacks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterRating, setFilterRating] = useState("All");
  const [filterDate, setFilterDate] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const feedbacksPerPage = 8;

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(API_URL);
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Failed To Fetch Feedbacks", err);
    }
  };

  const handleStatusToggle = async (id, currentStatus) => {
    const newStatus =
      currentStatus === "Published" ? "Unpublished" : "Published";
    try {
      await axios.patch(`${API_URL}/${id}`, { status: newStatus });
      fetchFeedbacks();
    } catch (err) {
      console.error("Status Toggle Failed");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to retire this testimonial?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchFeedbacks();
      } catch (err) {
        console.error("Delete Failed");
      }
    }
  };

  const filteredFeedbacks = feedbacks.filter((f) => {
    const matchSearch =
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchStatus = filterStatus === "All" || f.status === filterStatus;
    const matchRating =
      filterRating === "All" || f.rating === Number(filterRating);
    const matchDate = filterDate === "" || f.date === filterDate;

    return matchSearch && matchStatus && matchRating && matchDate;
  });

  const totalPages = Math.ceil(filteredFeedbacks.length / feedbacksPerPage);
  const indexOfLast = currentPage * feedbacksPerPage;
  const indexOfFirst = indexOfLast - feedbacksPerPage;
  const currentFeedbacks = filteredFeedbacks.slice(indexOfFirst, indexOfLast);

  return (
    <div className="admin-page-content">
      {/* ✅ Premium Header */}
      <header className="admin-page-header d-flex justify-content-between align-items-end mb-5">
        <div>
          <h1 className="font-display">Testimonial Archive</h1>
          <p className="text-secondary small">Curate and manage customer voices from the estate.</p>
        </div>
        <div className="d-flex gap-3">
           <div className="search-minimal-vessel">
              <LuSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Find customer feedback..." 
                className="search-input-minimal"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
           </div>
           <button className={`btn-ghost border p-2 rounded-circle ${showFilters ? 'bg-accent text-white border-accent' : ''}`} title="Toggle Filters" onClick={() => setShowFilters(!showFilters)}>
              <LuFilter size={18} />
           </button>
        </div>
      </header>

      {/* ✅ Filter Panel */}
      {showFilters && (
        <div className="filter-panel-premium flex-wrap gap-4 slide-in-top mb-5 p-4 border rounded bg-surface d-flex">
           <div className="filter-group">
              <label className="tiny uppercase text-tertiary tracking-widest mb-2 d-block">Publication Status</label>
              <select className="input-elegant py-2" value={filterStatus} onChange={(e) => { setFilterStatus(e.target.value); setCurrentPage(1); }}>
                <option value="All">All Narratives</option>
                <option value="Published">Visible / Published</option>
                <option value="Unpublished">Hidden / Draft</option>
              </select>
           </div>
           <div className="filter-group">
              <label className="tiny uppercase text-tertiary tracking-widest mb-2 d-block">Sentiment Rating</label>
              <select className="input-elegant py-2" value={filterRating} onChange={(e) => { setFilterRating(e.target.value); setCurrentPage(1); }}>
                <option value="All">All Ratings</option>
                {[5, 4, 3, 2, 1].map((r) => <option key={r} value={r}>{r} Stars</option>)}
              </select>
           </div>
           <div className="filter-group">
              <label className="tiny uppercase text-tertiary tracking-widest mb-2 d-block">Origin Date</label>
              <input type="date" className="input-elegant py-2" value={filterDate} onChange={(e) => { setFilterDate(e.target.value); setCurrentPage(1); }} />
           </div>
        </div>
      )}

      {/* ✅ Feedbacks Table */}
      <div className="card-premium p-0 overflow-hidden slide-in-bottom shadow-sm border">
        <div className="table-minimal-wrapper">
          <table className="table-minimal mb-0">
            <thead>
              <tr>
                <th className="ps-4">#</th>
                <th>Patron</th>
                <th>Identity</th>
                <th>Rating</th>
                <th>Excerpt</th>
                <th>Date</th>
                <th>Status</th>
                <th className="text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentFeedbacks.length > 0 ? currentFeedbacks.map((f, index) => (
                <tr key={f.id}>
                  <td className="ps-4"><span className="tiny text-tertiary mono">{indexOfFirst + index + 1}</span></td>
                  <td>
                    <div className="avatar-minimal border shadow-sm">
                      <img src={f.profilePhoto || "https://i.pravatar.cc/150?u="+f.name} alt={f.name} className="img-fluid rounded-circle" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                    </div>
                  </td>
                  <td>
                    <div>
                      <span className="font-weight-600 text-primary d-block small">{f.name}</span>
                      <span className="tiny text-tertiary">{f.email}</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex gap-1 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <LuStar key={i} size={12} fill={i < f.rating ? "currentColor" : "none"} className={i < f.rating ? "" : "text-tertiary opacity-30"} />
                      ))}
                    </div>
                  </td>
                  <td>
                    <p className="small text-secondary mb-0 text-truncate" style={{ maxWidth: '200px' }}>{f.message}</p>
                  </td>
                  <td><span className="tiny text-tertiary uppercase">{f.date}</span></td>
                  <td>
                    <span 
                      className={`badge-pill ${f.status === "Published" ? "status-active" : "status-shipped text-dark"} small pointer`}
                      onClick={() => handleStatusToggle(f.id, f.status)}
                    >
                      {f.status === "Published" ? <LuCircleCheck size={12} className="me-1" /> : <LuCircleX size={12} className="me-1" />} {f.status}
                    </span>
                  </td>
                  <td className="text-end pe-4">
                    <div className="d-flex justify-content-end gap-2">
                      <button className="btn-ghost rounded-circle p-2" onClick={() => setSelectedFeedback(f)}>
                        <LuEye size={18} />
                      </button>
                      <button className="btn-ghost rounded-circle p-2 text-danger opacity-50 hover-opacity-100" onClick={() => handleDelete(f.id)}>
                        <LuTrash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="8" className="text-center py-5 text-tertiary italic">No customer narratives found in the archive.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Pagination Footer */}
      {totalPages > 1 && (
        <footer className="d-flex justify-content-between align-items-center mt-5">
           <span className="tiny text-tertiary uppercase tracking-widest">Archive Page {currentPage} of {totalPages}</span>
           <div className="pagination-minimal">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><LuChevronLeft /></button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} className={currentPage === i + 1 ? "active" : ""} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
              ))}
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}><LuChevronRight /></button>
           </div>
        </footer>
      )}

      {/* ✅ Detail Modal */}
      {selectedFeedback && (
        <div className="modal-overlay-custom" onClick={() => setSelectedFeedback(null)}>
          <div className="card-premium modal-content-custom slide-in-bottom p-0 overflow-hidden" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <header className="modal-header-elegant p-4 border-bottom d-flex justify-content-between align-items-center bg-surface">
              <h4 className="card-title-elegant mb-0 d-flex align-items-center gap-2">
                <LuMessageSquare size={20} className="text-accent" /> Customer Voice
              </h4>
              <button className="btn-close-minimal" onClick={() => setSelectedFeedback(null)}><LuX /></button>
            </header>
            
            <div className="modal-body-elegant p-5 text-center">
               <img src={selectedFeedback.profilePhoto || "https://i.pravatar.cc/150?u="+selectedFeedback.name} className="avatar-minimal mx-auto mb-4 border shadow-sm rounded-circle" style={{ width: '80px', height: '80px' }} alt="" />
               <h5 className="font-display mb-1">{selectedFeedback.name}</h5>
               <p className="small text-secondary mb-4 d-flex align-items-center justify-content-center gap-2"><LuMail size={14} /> {selectedFeedback.email}</p>
               
               <div className="d-flex justify-content-center gap-2 text-accent mb-4">
                 {[...Array(5)].map((_, i) => (
                   <LuStar key={i} size={24} fill={i < selectedFeedback.rating ? "currentColor" : "none"} className={i < selectedFeedback.rating ? "" : "text-tertiary opacity-30"} />
                 ))}
               </div>

               <div className="parchment-vessel p-4 border rounded italic text-primary fs-5 line-height-relaxed mb-4">
                  "{selectedFeedback.message}"
               </div>

               <p className="tiny text-tertiary d-flex align-items-center justify-content-center gap-2 uppercase tracking-widest"><LuCalendar size={14} /> Recorded on {selectedFeedback.date}</p>
            </div>

            <footer className="p-4 bg-surface border-top text-center">
               <button className="btn-primary px-5 py-3" onClick={() => setSelectedFeedback(null)}>Acknowledged</button>
            </footer>
          </div>
        </div>
      )}

      <style>{`
        .search-minimal-vessel { position: relative; width: 350px; }
        .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-tertiary); }
        .search-input-minimal { width: 100%; padding: 12px 16px 12px 48px; border-radius: 100px; border: 1px solid var(--border-subtle); background: var(--bg-surface); font-size: 14px; outline: none; transition: var(--transition-smooth); }
        .search-input-minimal:focus { border-color: var(--accent-primary); box-shadow: 0 0 0 4px rgba(192, 98, 42, 0.05); }

        .avatar-minimal { width: 44px; height: 44px; padding: 2px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hover-opacity-100:hover { opacity: 1 !important; }
        .pointer { cursor: pointer; }
        .parchment-vessel { background: #FCFAF8; }

      `}</style>
    </div>
  );
}

export default ManageFeedback;
