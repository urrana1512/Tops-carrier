import React, { useEffect, useState } from "react";
import axios from "axios";
import { LuUsers, LuSearch, LuLock, LuLockOpen, LuTrash2, LuEye, LuEyeOff, LuChevronLeft, LuChevronRight, LuUserCheck, LuUserX, LuShieldAlert } from "react-icons/lu";

function ManageCustomers() {
  const API_URL = "http://localhost:5000/customers";
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 8;

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setCustomers(res.data);
    } catch (err) {
      console.error("Error fetching customers:", err);
      setError("Failed to retrieve patron records. Please verify service status.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to retire this patron record?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchCustomers();
      } catch (err) {
        console.error("Delete error:", err);
        alert("Operation failed. Archive integrity preserved.");
      }
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Blocked" : "Active";
    try {
      await axios.patch(`${API_URL}/${id}`, { status: newStatus });
      setCustomers((prev) =>
        prev.map((cust) =>
          cust.id === id ? { ...cust, status: newStatus } : cust
        )
      );
    } catch (err) {
      console.error("Status update error:", err);
      alert("Failed to transition status.");
    }
  };

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
  const indexOfLast = currentPage * customersPerPage;
  const indexOfFirst = indexOfLast - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirst, indexOfLast);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="admin-page-content">
      {/* ✅ Premium Header */}
      <header className="admin-page-header d-flex justify-content-between align-items-end mb-5">
        <div>
          <h1 className="font-display">Patron Directory</h1>
          <p className="text-secondary small">Manage the distinguished guests of the Jayhind estate.</p>
        </div>
        <div className="d-flex gap-3">
           <div className="search-minimal-vessel">
              <LuSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by name or email..." 
                className="search-input-minimal"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
           </div>
        </div>
      </header>

      {/* ✅ Loading & Error States */}
      {loading && <div className="text-center py-5"><div className="spinner-border text-accent spinner-border-sm me-2"></div><span className="tiny uppercase tracking-widest text-tertiary">Accessing Patron Archives...</span></div>}
      {error && <div className="alert alert-danger-custom text-center py-4">{error}</div>}

      {/* ✅ Customers Table */}
      {!loading && (
        <div className="card-premium p-0 overflow-hidden slide-in-bottom shadow-sm border">
          <div className="table-minimal-wrapper">
            <table className="table-minimal mb-0">
              <thead>
                <tr>
                  <th className="ps-4">#</th>
                  <th>Portrait</th>
                  <th>Identity</th>
                  <th>Contact Path</th>
                  <th>Credentials</th>
                  <th>Status</th>
                  <th className="text-end pe-4">Access Control</th>
                </tr>
              </thead>

              <tbody>
                {currentCustomers.length > 0 ? currentCustomers.map((cust, index) => (
                  <tr key={cust.id} className={cust.status === "Blocked" ? "bg-surface opacity-75" : ""}>
                    <td className="ps-4"><span className="tiny text-tertiary mono">{indexOfFirst + index + 1}</span></td>
                    <td>
                      <div className="avatar-minimal border shadow-sm">
                        <img src={cust.image} alt={cust.name} className="img-fluid rounded-circle" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                      </div>
                    </td>
                    <td><span className="font-weight-600 text-primary">{cust.name}</span></td>
                    <td><span className="small text-secondary">{cust.email}</span></td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <span className="mono text-tertiary" style={{ letterSpacing: '2px' }}>
                          {cust.showPassword ? cust.password : "••••••••"}
                        </span>
                        {cust.showPassword ? (
                           <button className="btn-ghost p-1" onClick={() => setCustomers(prev => prev.map(u => u.id === cust.id ? {...u, showPassword: false} : u))}>
                              <LuEyeOff size={14} className="text-accent" />
                           </button>
                        ) : (
                           <button className="btn-ghost p-1" onClick={() => {
                              const pin = prompt("Enter Admin Authentication PIN:");
                              if (pin === "admin@123") {
                                 setCustomers(prev => prev.map(u => u.id === cust.id ? {...u, showPassword: true} : u));
                              } else {
                                 alert("❌ Unauthorized Access Attempted");
                              }
                           }}>
                              <LuEye size={14} className="text-tertiary" />
                           </button>
                        )}
                      </div>
                    </td>
                    <td>
                      <span className={`badge-pill ${cust.status === "Active" ? "status-active" : "bg-danger text-white"} small`}>
                        {cust.status === "Active" ? <LuUserCheck size={12} className="me-1" /> : <LuShieldAlert size={12} className="me-1" />} {cust.status}
                      </span>
                    </td>
                    <td className="text-end pe-4">
                      <div className="d-flex justify-content-end gap-2">
                        <button 
                          className="btn-ghost rounded-circle p-2" 
                          onClick={() => toggleStatus(cust.id, cust.status)}
                          title={cust.status === "Active" ? "Restrict Access" : "Grant Access"}
                        >
                          {cust.status === "Active" ? <LuLock size={18} className="text-warning" /> : <LuLockOpen size={18} className="text-success" />}
                        </button>

                        <button 
                          className="btn-ghost rounded-circle p-2 text-danger opacity-50 hover-opacity-100" 
                          onClick={() => handleDelete(cust.id)}
                          title="Purge Record"
                          disabled={cust.status === "Blocked"}
                        >
                          <LuTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="7" className="text-center py-5 text-tertiary italic">No patron records found matching your query.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ✅ Pagination Footer */}
      {!loading && totalPages > 1 && (
        <footer className="d-flex justify-content-between align-items-center mt-5">
           <span className="tiny text-tertiary uppercase tracking-widest">Archive Segment {currentPage} of {totalPages}</span>
           <div className="pagination-minimal">
              <button disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}><LuChevronLeft /></button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} className={currentPage === i + 1 ? "active" : ""} onClick={() => changePage(i + 1)}>{i + 1}</button>
              ))}
              <button disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}><LuChevronRight /></button>
           </div>
        </footer>
      )}

      <style>{`
        .search-minimal-vessel { position: relative; width: 350px; }
        .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-tertiary); }
        .search-input-minimal { width: 100%; padding: 12px 16px 12px 48px; border-radius: 100px; border: 1px solid var(--border-subtle); background: var(--bg-surface); font-size: 14px; outline: none; transition: var(--transition-smooth); }
        .search-input-minimal:focus { border-color: var(--accent-primary); box-shadow: 0 0 0 4px rgba(192, 98, 42, 0.05); }

        .avatar-minimal { width: 44px; height: 44px; padding: 2px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hover-opacity-100:hover { opacity: 1 !important; }

      `}</style>
    </div>
  );
}

export default ManageCustomers;
