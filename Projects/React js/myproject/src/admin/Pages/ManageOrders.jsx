import React, { useState } from "react";
import { LuArchive, LuEye, LuTrash2, LuSearch, LuChevronLeft, LuChevronRight, LuX, LuPackage, LuCreditCard, LuTruck, LuUser, LuMail, LuCalendar } from "react-icons/lu";

function ManageOrders() {
  const allOrders = [
    {
      id: "ORD001",
      customer: "Rahul Sharma",
      email: "rahul@example.com",
      products: ["Kaju Katli", "Rasgulla"],
      total: 850,
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      date: "2025-07-10",
    },
    {
      id: "ORD002",
      customer: "Priya Patel",
      email: "priya@gmail.com",
      products: ["Laddu", "Soan Papdi", "Dry Fruits Box"],
      total: 1200,
      paymentStatus: "Pending",
      deliveryStatus: "Processing",
      date: "2025-07-11",
    },
    {
      id: "ORD003",
      customer: "Amit Verma",
      email: "amitv@outlook.com",
      products: ["Milk Cake"],
      total: 450,
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      date: "2025-07-12",
    },
    {
      id: "ORD004",
      customer: "Sneha Joshi",
      email: "sneha@yahoo.com",
      products: ["Barfi", "Modak"],
      total: 700,
      paymentStatus: "Paid",
      deliveryStatus: "Processing",
      date: "2025-07-14",
    },
    {
      id: "ORD005",
      customer: "Ravi Kumar",
      email: "ravi@live.com",
      products: ["Dry Fruits Box", "Halwa"],
      total: 950,
      paymentStatus: "Pending",
      deliveryStatus: "Processing",
      date: "2025-07-15",
    },
    {
      id: "ORD006",
      customer: "Neha Singh",
      email: "neha@gmail.com",
      products: ["Kesar Peda", "Cham Cham"],
      total: 650,
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      date: "2025-07-17",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const ordersPerPage = 8;

  const filteredOrders = allOrders.filter(
    (o) =>
      o.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const indexOfLast = currentPage * ordersPerPage;
  const indexOfFirst = indexOfLast - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);

  return (
    <div className="admin-page-content">
      {/* ✅ Premium Header */}
      <header className="admin-page-header d-flex justify-content-between align-items-end mb-5">
        <div>
          <h1 className="font-display">Order Registry</h1>
          <p className="text-secondary small">Oversee and fulfillment status for all artisan orders.</p>
        </div>
        <div className="d-flex gap-3">
           <div className="search-minimal-vessel">
              <LuSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Find Order ID or Guest..." 
                className="search-input-minimal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
        </div>
      </header>

      {/* ✅ Orders Table */}
      <div className="card-premium p-0 overflow-hidden slide-in-bottom">
        <div className="table-minimal-wrapper">
          <table className="table-minimal mb-0">
            <thead>
              <tr>
                <th className="ps-4">Order ID</th>
                <th>Guest Details</th>
                <th>Composition</th>
                <th>Estate Value</th>
                <th>Payment</th>
                <th>Fulfillment</th>
                <th>Preservation Date</th>
                <th className="text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.length > 0 ? (
                currentOrders.map((o) => (
                  <tr key={o.id}>
                    <td className="ps-4"><span className="mono text-accent small">{o.id}</span></td>
                    <td>
                      <div>
                        <span className="font-weight-600 text-primary d-block">{o.customer}</span>
                        <span className="tiny text-tertiary">{o.email}</span>
                      </div>
                    </td>
                    <td>
                      <span className="text-secondary small">
                        {o.products.length > 2
                          ? o.products.slice(0, 2).join(", ") + "..."
                          : o.products.join(", ")}
                      </span>
                    </td>
                    <td><span className="mono text-primary font-weight-600">₹{o.total}</span></td>
                    <td>
                      <span className={`badge-pill ${o.paymentStatus === "Paid" ? "status-active" : "status-shipped"} small`}>
                        {o.paymentStatus === "Paid" ? "Success" : "Awaiting"}
                      </span>
                    </td>
                    <td>
                      <span className={`badge-pill ${o.deliveryStatus === "Delivered" ? "bg-success text-white" : "bg-surface text-tertiary border"} small`}>
                        {o.deliveryStatus}
                      </span>
                    </td>
                    <td><span className="tiny text-tertiary uppercase">{o.date}</span></td>
                    <td className="text-end pe-4">
                      <div className="d-flex justify-content-end gap-2">
                        <button className="btn-ghost rounded-circle p-2" onClick={() => setSelectedOrder(o)}>
                          <LuEye size={16} />
                        </button>
                        <button className="btn-ghost rounded-circle p-2 text-danger opacity-50 hover-opacity-100">
                          <LuTrash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-5 text-tertiary italic">No matching orders found in the registry.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Pagination Footer */}
      {totalPages > 1 && (
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

      {/* ✅ Refined Detail Modal */}
      {selectedOrder && (
        <div className="modal-overlay-custom" onClick={() => setSelectedOrder(null)}>
          <div className="card-premium modal-content-custom slide-in-bottom p-0 overflow-hidden" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <header className="modal-header-elegant p-4 border-bottom d-flex justify-content-between align-items-center bg-surface">
              <h4 className="card-title-elegant mb-0 d-flex align-items-center gap-2">
                <LuPackage size={20} className="text-accent" /> Order Details
              </h4>
              <button className="btn-close-minimal" onClick={() => setSelectedOrder(null)}><LuX /></button>
            </header>
            
            <div className="modal-body-elegant p-5">
               <div className="row g-4">
                  <div className="col-md-6 border-end">
                     <label className="tiny uppercase text-tertiary tracking-widest d-block mb-2">Guest Profile</label>
                     <p className="font-display fs-5 mb-1">{selectedOrder.customer}</p>
                     <p className="small text-secondary mb-3 d-flex align-items-center gap-2"><LuMail size={14} /> {selectedOrder.email}</p>
                     <p className="tiny text-tertiary d-flex align-items-center gap-2"><LuCalendar size={14} /> Placed on {selectedOrder.date}</p>
                  </div>
                  <div className="col-md-6 ps-md-4">
                     <label className="tiny uppercase text-tertiary tracking-widest d-block mb-2">Transaction Status</label>
                     <div className="d-flex align-items-center gap-3 mb-3">
                        <LuCreditCard size={18} className="text-tertiary" />
                        <span className={`badge-pill ${selectedOrder.paymentStatus === "Paid" ? "status-active" : "bg-danger text-white"} small`}>
                           {selectedOrder.paymentStatus}
                        </span>
                     </div>
                     <div className="d-flex align-items-center gap-3">
                        <LuTruck size={18} className="text-tertiary" />
                        <span className={`badge-pill ${selectedOrder.deliveryStatus === "Delivered" ? "bg-success text-white" : "bg-warning text-dark"} small`}>
                           {selectedOrder.deliveryStatus}
                        </span>
                     </div>
                  </div>
               </div>

               <hr className="my-5 opacity-10" />

               <label className="tiny uppercase text-tertiary tracking-widest d-block mb-3">Composition</label>
               <div className="order-items-list mb-5">
                  {selectedOrder.products.map((p, i) => (
                    <div key={i} className="d-flex justify-content-between align-items-center py-2 border-bottom border-subtle border-opacity-10">
                       <span className="text-primary">{p}</span>
                       <span className="tiny text-tertiary">Premium Selection</span>
                    </div>
                  ))}
               </div>

               <div className="d-flex justify-content-between align-items-center">
                  <span className="font-display fs-4">Estate Total</span>
                  <span className="font-display fs-2 text-accent">₹{selectedOrder.total}</span>
               </div>
            </div>

            <footer className="p-4 bg-surface border-top text-center">
               <button className="btn-primary px-5 py-3" onClick={() => setSelectedOrder(null)}>Acknowledge Selection</button>
            </footer>
          </div>
        </div>
      )}

      <style>{`
        .search-minimal-vessel { position: relative; width: 300px; }
        .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-tertiary); }
        .search-input-minimal { width: 100%; padding: 12px 16px 12px 48px; border-radius: 100px; border: 1px solid var(--border-subtle); background: var(--bg-surface); font-size: 14px; outline: none; transition: var(--transition-smooth); }
        .search-input-minimal:focus { border-color: var(--accent-primary); box-shadow: 0 0 0 4px rgba(192, 98, 42, 0.05); }

        .hover-opacity-100:hover { opacity: 1 !important; }
        
        .modal-content-custom.slide-in-bottom { animation: slideInBottom 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slideInBottom {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

      `}</style>
    </div>
  );
}

export default ManageOrders;
