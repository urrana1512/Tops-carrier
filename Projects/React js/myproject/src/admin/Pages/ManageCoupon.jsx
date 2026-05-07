import React, { useState } from "react";
import { LuTicket, LuBadgePercent, LuCalendar, LuSearch, LuEye, LuTrash2, LuX, LuCirclePlus, LuClock, LuCircleCheck, LuCircleX, LuChevronLeft, LuChevronRight, LuZap, LuInfo, LuActivity } from "react-icons/lu";

function ManageCoupon() {
  const allCoupons = [
    {
      id: 1,
      code: "SWEET50",
      discountType: "Flat",
      discountValue: 50,
      minOrder: 500,
      expiryDate: "2025-08-15",
      status: "Active",
    },
    {
      id: 2,
      code: "FESTIVE20",
      discountType: "Percentage",
      discountValue: 20,
      minOrder: 300,
      expiryDate: "2025-09-01",
      status: "Inactive",
    },
    {
      id: 3,
      code: "DIWALI100",
      discountType: "Flat",
      discountValue: 100,
      minOrder: 800,
      expiryDate: "2025-11-01",
      status: "Active",
    },
    {
      id: 4,
      code: "SUMMER15",
      discountType: "Percentage",
      discountValue: 15,
      minOrder: 400,
      expiryDate: "2025-07-30",
      status: "Active",
    },
    {
      id: 5,
      code: "NEWYEAR25",
      discountType: "Percentage",
      discountValue: 25,
      minOrder: 1000,
      expiryDate: "2025-12-31",
      status: "Inactive",
    },
    {
      id: 6,
      code: "HOLI30",
      discountType: "Percentage",
      discountValue: 30,
      minOrder: 700,
      expiryDate: "2025-03-10",
      status: "Active",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCoupon, setSelectedCoupon] = useState(null); 
  const couponsPerPage = 8;

  const filteredCoupons = allCoupons.filter(
    (c) =>
      c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.discountType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCoupons.length / couponsPerPage);
  const indexOfLast = currentPage * couponsPerPage;
  const indexOfFirst = indexOfLast - couponsPerPage;
  const currentCoupons = filteredCoupons.slice(indexOfFirst, indexOfLast);

  return (
    <div className="admin-page-content">
      {/* ✅ Premium Header */}
      <header className="admin-page-header d-flex justify-content-between align-items-end mb-5">
        <div>
          <h1 className="font-display">Promotion Registry</h1>
          <p className="text-secondary small">Manage exclusive architectural vouchers and rewards for the guest list.</p>
        </div>
        <div className="d-flex gap-3 align-items-center">
           <div className="search-minimal-vessel">
              <LuSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by code or provenance..." 
                className="search-input-minimal"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
           </div>
           <button className="btn-primary py-3 px-4 d-flex align-items-center gap-2">
              <LuCirclePlus size={18} /> Add New Voucher
           </button>
        </div>
      </header>

      {/* ✅ Coupon Table */}
      <div className="card-premium p-0 overflow-hidden slide-in-bottom shadow-sm border">
        <div className="table-minimal-wrapper">
          <table className="table-minimal mb-0">
            <thead>
              <tr>
                <th className="ps-4">#</th>
                <th>Voucher Key</th>
                <th>Benefit Spec</th>
                <th>Minimum Engagement</th>
                <th>Retirement Date</th>
                <th>Status</th>
                <th className="text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCoupons.length > 0 ? currentCoupons.map((c, index) => (
                <tr key={c.id}>
                  <td className="ps-4"><span className="tiny text-tertiary mono">{indexOfFirst + index + 1}</span></td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <LuTicket size={16} className="text-accent" />
                      <span className="font-weight-600 text-primary small uppercase tracking-widest">{c.code}</span>
                    </div>
                  </td>
                  <td>
                    <span className="small text-secondary d-flex align-items-center gap-2">
                       {c.discountType === "Percentage" ? <LuBadgePercent size={14} className="text-accent" /> : "₹"}
                       {c.discountValue}{c.discountType === "Percentage" ? "%" : ""} {c.discountType} Discount
                    </span>
                  </td>
                  <td><span className="small text-secondary">₹{c.minOrder.toLocaleString()}</span></td>
                  <td><span className="tiny text-tertiary uppercase d-flex align-items-center gap-2"><LuClock size={12} /> {c.expiryDate}</span></td>
                  <td>
                    <span className={`badge-pill ${c.status === "Active" ? "status-active" : "bg-surface text-tertiary border"} small`}>
                       {c.status === "Active" ? <LuCircleCheck size={12} className="me-1" /> : <LuCircleX size={12} className="me-1" />} {c.status}
                    </span>
                  </td>
                  <td className="text-end pe-4">
                    <div className="d-flex justify-content-end gap-2">
                      <button className="btn-ghost rounded-circle p-2" onClick={() => setSelectedCoupon(c)}>
                        <LuEye size={18} />
                      </button>
                      <button className="btn-ghost rounded-circle p-2 text-danger opacity-50 hover-opacity-100">
                        <LuTrash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="7" className="text-center py-5 text-tertiary italic">No architectural offers discovered in the registry.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <footer className="d-flex justify-content-between align-items-center mt-5">
           <span className="tiny text-tertiary uppercase tracking-widest">Registry Page {currentPage} of {totalPages}</span>
           <div className="pagination-minimal">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><LuChevronLeft /></button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} className={currentPage === i + 1 ? "active" : ""} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
              ))}
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}><LuChevronRight /></button>
           </div>
        </footer>
      )}

      {/* ✅ Offer Dossier Modal (View/Edit) */}
      {selectedCoupon && (
        <div className="modal-overlay-custom" onClick={() => setSelectedCoupon(null)}>
          <div className="card-premium modal-content-custom slide-in-bottom p-0 overflow-hidden" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '450px' }}>
            <header className="modal-header-elegant p-4 border-bottom d-flex justify-content-between align-items-center bg-surface">
              <h4 className="card-title-elegant mb-0 d-flex align-items-center gap-2">
                <LuTicket size={20} className="text-accent" /> Offer Specification
              </h4>
              <button className="btn-close-minimal" onClick={() => setSelectedCoupon(null)}><LuX /></button>
            </header>
            
            <div className="p-5 bg-white">
               <div className="text-center mb-5">
                  <div className="voucher-code-display py-3 px-4 border rounded font-display fs-3 tracking-widest bg-surface text-accent mb-2">
                     {selectedCoupon.code}
                  </div>
                  <span className="tiny uppercase tracking-widest text-tertiary">Official Voucher Key</span>
               </div>

               <div className="row g-4">
                  <div className="col-12 border-bottom pb-3 d-flex justify-content-between align-items-center">
                     <span className="tiny uppercase text-tertiary tracking-widest d-flex align-items-center gap-2"><LuZap size={14} /> Benefit Class</span>
                     <span className="small text-primary font-weight-600">
                        {selectedCoupon.discountValue}{selectedCoupon.discountType === "Percentage" ? "%" : "₹"} {selectedCoupon.discountType}
                     </span>
                  </div>
                  <div className="col-12 border-bottom pb-3 d-flex justify-content-between align-items-center">
                     <span className="tiny uppercase text-tertiary tracking-widest d-flex align-items-center gap-2"><LuInfo size={14} /> Min. Engagement</span>
                     <span className="small text-primary">₹{selectedCoupon.minOrder.toLocaleString()}</span>
                  </div>
                  <div className="col-12 border-bottom pb-3 d-flex justify-content-between align-items-center">
                     <span className="tiny uppercase text-tertiary tracking-widest d-flex align-items-center gap-2"><LuCalendar size={14} /> Retirement Date</span>
                     <span className="small text-primary">{selectedCoupon.expiryDate}</span>
                  </div>
                  <div className="col-12 d-flex justify-content-between align-items-center">
                     <span className="tiny uppercase text-tertiary tracking-widest d-flex align-items-center gap-2"><LuActivity size={14} /> Registry Status</span>
                     <span className={`badge-pill ${selectedCoupon.status === "Active" ? "status-active" : "bg-surface text-tertiary"} small`}>{selectedCoupon.status}</span>
                  </div>
               </div>
            </div>
            
            <footer className="p-4 bg-surface border-top d-flex gap-3">
               <button className="btn-primary flex-grow-1 py-3" onClick={() => { alert("Consigning changes to estate archives..."); setSelectedCoupon(null); }}>Commit Changes</button>
               <button className="btn-ghost px-4" onClick={() => setSelectedCoupon(null)}>Close Spec</button>
            </footer>
          </div>
        </div>
      )}

      <style>{`
        .search-minimal-vessel { position: relative; width: 300px; }
        .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-tertiary); }
        .search-input-minimal { width: 100%; padding: 12px 16px 12px 48px; border-radius: 100px; border: 1px solid var(--border-subtle); background: var(--bg-surface); font-size: 14px; outline: none; transition: var(--transition-smooth); }
        .search-input-minimal:focus { border-color: var(--accent-primary); box-shadow: 0 0 0 4px rgba(192, 98, 42, 0.05); }

        .voucher-code-display { border-color: var(--border-subtle) !important; font-weight: 700; border-style: dashed !important; }
        .hover-opacity-100:hover { opacity: 1 !important; }

      `}</style>
    </div>
  );
}

export default ManageCoupon;
