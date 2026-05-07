import React, { useState } from "react";
import { LuTicket, LuBadgePercent, LuCalendar, LuSave, LuCircleCheck, LuCircleX, LuSparkles, LuChevronRight, LuClock, LuZap, LuInfo, LuActivity } from "react-icons/lu";

function AddCoupon() {
  const [couponData, setCouponData] = useState({
    code: "",
    discountType: "Flat",
    discountValue: "",
    minOrder: "",
    expiryDate: "",
    status: "Active",
  });

  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCouponData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!couponData.code || !couponData.discountValue || !couponData.expiryDate) {
      setFormStatus({ type: "error", message: "Incomplete specification. All fields are required for voucher generation." });
      return;
    }
    console.log("Coupon Spec Saved:", couponData);
    setFormStatus({ type: "success", message: "Offer successfully commissioned to the estate archives." });
    // In a real app, this would be an axios call. Keeping existing logic.
  };

  return (
    <div className="admin-page-content">
      {/* ✅ Header */}
      <header className="admin-page-header mb-5">
        <div className="d-flex align-items-center gap-2 tiny uppercase tracking-widest text-tertiary mb-2">
           <span>Promotions</span> <LuChevronRight size={12} /> <span>Architect</span>
        </div>
        <h1 className="font-display">Commission New Offer</h1>
        <p className="text-secondary small">Define exclusive vouchers and rewards for distinguished patrons.</p>
      </header>

      <div className="row g-5">
         {/* ✅ Parameters Form */}
         <div className="col-lg-7">
            <div className="card-premium p-5 slide-in-bottom">
               <h4 className="card-title-elegant mb-5 d-flex align-items-center gap-2">
                  <LuTicket size={20} className="text-accent" /> Voucher Specification
               </h4>

               <form onSubmit={handleSubmit} className="row g-4">
                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuZap size={14} /> Coupon Code</label>
                     <input
                       type="text"
                       name="code"
                       className="input-elegant uppercase"
                       placeholder="e.g. JAYHIND50"
                       value={couponData.code}
                       onChange={handleChange}
                       required
                       style={{ letterSpacing: '2px' }}
                     />
                  </div>

                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuBadgePercent size={14} /> Discount Type</label>
                     <select
                       name="discountType"
                       className="input-elegant"
                       value={couponData.discountType}
                       onChange={handleChange}
                     >
                       <option value="Flat">Fixed Amount / Flat</option>
                       <option value="Percentage">Percentage (%)</option>
                     </select>
                  </div>

                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2">
                        {couponData.discountType === "Percentage" ? <LuBadgePercent size={14} /> : "₹"} Discount Value
                     </label>
                     <input
                       type="number"
                       name="discountValue"
                       className="input-elegant"
                       placeholder={couponData.discountType === "Percentage" ? "e.g. 15" : "e.g. 250"}
                       value={couponData.discountValue}
                       onChange={handleChange}
                       required
                     />
                  </div>

                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuInfo size={14} /> Min. Order Threshold</label>
                     <input
                       type="number"
                       name="minOrder"
                       className="input-elegant"
                       placeholder="e.g. 1000"
                       value={couponData.minOrder}
                       onChange={handleChange}
                     />
                  </div>

                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuCalendar size={14} /> Retirement Date</label>
                     <input
                       type="date"
                       name="expiryDate"
                       className="input-elegant"
                       value={couponData.expiryDate}
                       onChange={handleChange}
                       required
                     />
                  </div>

                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuActivity size={14} /> Status</label>
                     <select
                       name="status"
                       className="input-elegant"
                       value={couponData.status}
                       onChange={handleChange}
                     >
                       <option value="Active">Active / Operational</option>
                       <option value="Inactive">Archived / Hidden</option>
                     </select>
                  </div>

                  {formStatus.message && (
                    <div className={`col-12 alert-elegant ${formStatus.type === 'success' ? 'alert-success-custom' : 'alert-danger-custom'} d-flex align-items-center gap-3`}>
                       {formStatus.type === 'success' ? <LuCircleCheck className="text-success" /> : <LuCircleX className="text-danger" />}
                       <span className="small">{formStatus.message}</span>
                    </div>
                  )}

                  <div className="col-12 pt-4">
                     <button type="submit" className="btn-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                        <LuSave size={18} /> Seal & Register Spec
                     </button>
                  </div>
               </form>
            </div>
         </div>

         {/* ✅ Voucher Preview */}
         <div className="col-lg-5">
            <div className="preview-container slide-in-bottom">
               <h5 className="tiny uppercase tracking-widest text-tertiary mb-3 d-flex align-items-center gap-2">
                  <LuSparkles size={14} className="text-accent" /> Voucher Composition
               </h5>
               
               <div className="premium-voucher shadow-lg overflow-hidden">
                  <div className="voucher-pattern p-5 bg-primary text-white text-center position-relative">
                     <div className="voucher-dots top"></div>
                     <div className="voucher-dots bottom"></div>
                     <LuTicket size={48} className="opacity-20 mb-3" />
                     <h2 className="voucher-discount mb-1">
                        {couponData.discountType === "Percentage" 
                           ? `${couponData.discountValue || 0}% OFF` 
                           : `₹${couponData.discountValue || 0} OFF`}
                     </h2>
                     <p className="tiny uppercase tracking-widest opacity-80">Distinguished Patron Reward</p>
                  </div>
                  
                  <div className="voucher-details p-4 bg-white border-top border-dashed">
                     <div className="text-center mb-4">
                        <span className="tiny text-tertiary uppercase d-block mb-1">Voucher Key</span>
                        <div className="voucher-code px-4 py-2 border rounded font-display fs-4 tracking-widest bg-surface">
                           {couponData.code || "ARCHIVE-SPEC"}
                        </div>
                     </div>
                     
                     <div className="row g-3">
                        <div className="col-6">
                           <span className="tiny text-tertiary uppercase d-block mb-1">Minimum Buy</span>
                           <span className="small font-weight-600">₹{couponData.minOrder || "0"}</span>
                        </div>
                        <div className="col-6 text-end">
                           <span className="tiny text-tertiary uppercase d-block mb-1">Retirement</span>
                           <span className="small font-weight-600 d-flex align-items-center justify-content-end gap-1">
                              <LuClock size={12} /> {couponData.expiryDate || "Ongoing"}
                           </span>
                        </div>
                        <div className="col-12 mt-4 border-top pt-3 d-flex justify-content-between align-items-center">
                           <span className="tiny uppercase tracking-widest text-tertiary">Estate Status</span>
                           <span className={`badge-pill ${couponData.status === "Active" ? "status-active" : "bg-surface text-tertiary"} small`}>
                              {couponData.status}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               
               <p className="text-secondary small mt-4 text-center italic">"Exclusivity is a dialogue, not a discount."</p>
            </div>
         </div>
      </div>

      <style>{`
        .premium-voucher { border-radius: 16px; border: 1px solid var(--border-subtle); }
        .voucher-pattern { background-image: radial-gradient(var(--accent-primary) 0.5px, transparent 0.5px); background-size: 15px 15px; background-color: var(--primary-deep); }
        .voucher-discount { font-size: 2.5rem; font-family: var(--font-display); }
        .voucher-code { color: var(--accent-primary); border-color: var(--border-subtle) !important; font-weight: 700; }
        
        .voucher-dots { position: absolute; left: 0; right: 0; display: flex; justify-content: space-between; padding: 0 20px; }
        .voucher-dots.top { top: -10px; }
        .voucher-dots.bottom { bottom: -10px; }
        .voucher-dots::before, .voucher-dots::after { content: ''; width: 20px; height: 20px; background: #fff; border-radius: 50%; opacity: 1; }
        
        .alert-elegant { padding: 15px 20px; border-radius: 8px; border: 1px solid; }
        .alert-success-custom { background: rgba(25, 135, 84, 0.05); border-color: rgba(25, 135, 84, 0.2); color: #155724; }
        .alert-danger-custom { background: rgba(220, 53, 69, 0.05); border-color: rgba(220, 53, 69, 0.2); color: #721c24; }

      `}</style>
    </div>
  );
}

export default AddCoupon;
