import React, { useEffect, useState } from "react";
import axios from "axios";
import { LuMail, LuSearch, LuFilter, LuEye, LuTrash2, LuX, LuClock, LuCircleCheck, LuPhone, LuUser, LuCalendar, LuChevronLeft, LuChevronRight, LuMessageSquare, LuHash } from "react-icons/lu";

function ManageContact() {
  const API_URL = "http://localhost:5000/contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const contactsPerPage = 8;

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_URL);
      setContacts(res.data);
    } catch (err) {
      console.error("Failed To Fetch Contacts", err);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Unread" ? "Read" : "Unread";
    try {
      await axios.patch(`${API_URL}/${id}`, { status: newStatus });
      fetchContacts();
    } catch (err) {
      console.error("Failed To Update Status");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to purge this inquiry from the ledger?")) {
      await axios.delete(`${API_URL}/${id}`);
      fetchContacts();
    }
  };

  const filteredContacts = contacts.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || c.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);
  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="admin-page-content">
      {/* ✅ Premium Header */}
      <header className="admin-page-header d-flex justify-content-between align-items-end mb-5">
        <div>
          <h1 className="font-display">Inquiry Ledger</h1>
          <p className="text-secondary small">Manage distinguished correspondence and guest inquiries.</p>
        </div>
        <div className="d-flex gap-3">
           <div className="search-minimal-vessel">
              <LuSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search inquiries..." 
                className="search-input-minimal"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
           </div>
           <button className={`btn-ghost border p-2 rounded-circle ${showFilters ? 'bg-accent text-white border-accent' : ''}`} title="Filter" onClick={() => setShowFilters(!showFilters)}>
              <LuFilter size={18} />
           </button>
        </div>
      </header>

      {/* ✅ Filter Panel */}
      {showFilters && (
        <div className="filter-panel-premium slide-in-top mb-5 p-4 border rounded bg-surface d-flex gap-4">
           <div className="filter-group">
              <label className="tiny uppercase text-tertiary tracking-widest mb-2 d-block">Resolution Status</label>
              <select className="input-elegant py-2" value={filterStatus} onChange={(e) => { setFilterStatus(e.target.value); setCurrentPage(1); }}>
                <option value="All">All Inquiries</option>
                <option value="Read">Acknowledged / Read</option>
                <option value="Unread">Pending / Unread</option>
              </select>
           </div>
        </div>
      )}

      {/* ✅ Contacts Table */}
      <div className="card-premium p-0 overflow-hidden slide-in-bottom shadow-sm border">
        <div className="table-minimal-wrapper">
          <table className="table-minimal mb-0">
            <thead>
              <tr>
                <th className="ps-4">#</th>
                <th>Correspondent</th>
                <th>Subject Matter</th>
                <th>Excerpt</th>
                <th>Origin Date</th>
                <th>Status</th>
                <th className="text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.length > 0 ? currentContacts.map((c, i) => (
                <tr key={c.id}>
                  <td className="ps-4"><span className="tiny text-tertiary mono">{indexOfFirst + i + 1}</span></td>
                  <td>
                    <div>
                      <span className="font-weight-600 text-primary d-block small">{c.name}</span>
                      <span className="tiny text-tertiary">{c.email}</span>
                    </div>
                  </td>
                  <td><span className="small text-secondary">{c.subject}</span></td>
                  <td>
                    <p className="small text-secondary mb-0 text-truncate" style={{ maxWidth: '200px' }}>{c.message}</p>
                  </td>
                  <td><span className="tiny text-tertiary uppercase">{c.date}</span></td>
                  <td>
                    <span 
                      className={`badge-pill ${c.status === "Unread" ? "bg-danger text-white" : "status-active"} small pointer`}
                      onClick={() => toggleStatus(c.id, c.status)}
                    >
                      {c.status === "Unread" ? <LuClock size={12} className="me-1" /> : <LuCircleCheck size={12} className="me-1" />} {c.status}
                    </span>
                  </td>
                  <td className="text-end pe-4">
                    <div className="d-flex justify-content-end gap-2">
                      <button className="btn-ghost rounded-circle p-2" onClick={() => setSelectedMessage(c)}>
                        <LuEye size={18} />
                      </button>
                      <button className="btn-ghost rounded-circle p-2 text-danger opacity-50 hover-opacity-100" onClick={() => handleDelete(c.id)}>
                        <LuTrash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="7" className="text-center py-5 text-tertiary italic">The ledger remains empty. No inquiries found.</td>
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

      {/* ✅ Message Detail Modal */}
      {selectedMessage && (
        <div className="modal-overlay-custom" onClick={() => setSelectedMessage(null)}>
          <div className="card-premium modal-content-custom slide-in-bottom p-0 overflow-hidden" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '650px' }}>
            <header className="modal-header-elegant p-4 border-bottom d-flex justify-content-between align-items-center bg-surface">
              <h4 className="card-title-elegant mb-0 d-flex align-items-center gap-2">
                <LuMail size={20} className="text-accent" /> Correspondence Details
              </h4>
              <button className="btn-close-minimal" onClick={() => setSelectedMessage(null)}><LuX /></button>
            </header>
            
            <div className="modal-body-elegant p-5">
               <div className="row g-4 mb-4">
                  <div className="col-md-6">
                     <label className="tiny uppercase text-tertiary tracking-widest mb-1 d-block">Correspondent</label>
                     <div className="d-flex align-items-center gap-2 text-primary font-weight-600">
                        <LuUser size={16} className="text-accent" /> {selectedMessage.name}
                     </div>
                  </div>
                  <div className="col-md-6">
                     <label className="tiny uppercase text-tertiary tracking-widest mb-1 d-block">Electronic Mail</label>
                     <div className="text-secondary small d-flex align-items-center gap-2">
                        <LuMail size={14} /> {selectedMessage.email}
                     </div>
                  </div>
                  <div className="col-md-6">
                     <label className="tiny uppercase text-tertiary tracking-widest mb-1 d-block">Origin Date</label>
                     <div className="text-secondary small d-flex align-items-center gap-2">
                        <LuCalendar size={14} /> {selectedMessage.date}
                     </div>
                  </div>
                  <div className="col-md-6">
                     <label className="tiny uppercase text-tertiary tracking-widest mb-1 d-block">Subject</label>
                     <div className="text-primary small d-flex align-items-center gap-2">
                        <LuHash size={14} className="text-accent" /> {selectedMessage.subject}
                     </div>
                  </div>
               </div>

               <div className="message-envelope p-4 border rounded bg-surface">
                  <label className="tiny uppercase text-tertiary tracking-widest mb-3 d-block border-bottom pb-2">Narrative Message</label>
                  <p className="text-primary italic line-height-relaxed mb-0" style={{ whiteSpace: 'pre-wrap' }}>
                     {selectedMessage.message}
                  </p>
               </div>
            </div>

            <footer className="p-4 bg-surface border-top text-center">
               <button className="btn-primary px-5 py-3" onClick={() => setSelectedMessage(null)}>Close Inquiry</button>
            </footer>
          </div>
        </div>
      )}

      <style>{`
        .search-minimal-vessel { position: relative; width: 350px; }
        .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-tertiary); }
        .search-input-minimal { width: 100%; padding: 12px 16px 12px 48px; border-radius: 100px; border: 1px solid var(--border-subtle); background: var(--bg-surface); font-size: 14px; outline: none; transition: var(--transition-smooth); }
        .search-input-minimal:focus { border-color: var(--accent-primary); box-shadow: 0 0 0 4px rgba(192, 98, 42, 0.05); }

        .hover-opacity-100:hover { opacity: 1 !important; }
        .pointer { cursor: pointer; }
        .message-envelope { background: #FCFAF8; border-color: var(--border-subtle) !important; }

      `}</style>
    </div>
  );
}

export default ManageContact;
