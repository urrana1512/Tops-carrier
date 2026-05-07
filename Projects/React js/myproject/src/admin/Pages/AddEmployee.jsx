import React, { useState } from "react";
import { LuUserPlus, LuSave, LuImage, LuInfo, LuBriefcase, LuIndianRupee, LuCalendar, LuMail, LuPhone, LuCircleCheck, LuCircleX, LuSparkles, LuChevronRight, LuCloudUpload, LuUser, LuHash } from "react-icons/lu";

function AddEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Select Role",
    salary: "",
    image: null
  });
  
  const [previewImage, setPreviewImage] = useState(null);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setFormData(prev => ({ ...prev, image: url }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role === "Select Role") {
      setStatus({ type: "error", message: "Incomplete profile. Please ensure all artisan details are provided." });
      return;
    }
    console.log("New Artisan induction:", formData);
    setStatus({ type: "success", message: "Professional successfully inducted into the guild." });
  };

  return (
    <div className="admin-page-content">
      {/* ✅ Header */}
      <header className="admin-page-header mb-5">
        <div className="d-flex align-items-center gap-2 tiny uppercase tracking-widest text-tertiary mb-2">
           <span>Guild</span> <LuChevronRight size={12} /> <span>Induction</span>
        </div>
        <h1 className="font-display">Induct New Artisan</h1>
        <p className="text-secondary small">Register a new professional within the Jayhind professional circle.</p>
      </header>

      <div className="row g-5">
         {/* ✅ Induction Form */}
         <div className="col-lg-7">
            <div className="card-premium p-5 slide-in-bottom">
               <h4 className="card-title-elegant mb-5 d-flex align-items-center gap-2">
                  <LuUserPlus size={20} className="text-accent" /> Professional Profile
               </h4>

               <form onSubmit={handleSubmit} className="row g-4">
                  <div className="col-12">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuUser size={14} /> Full Legal Name</label>
                     <input
                       type="text"
                       name="name"
                       className="input-elegant"
                       placeholder="e.g. Vikram Aditya Singh"
                       value={formData.name}
                       onChange={handleChange}
                     />
                  </div>

                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuMail size={14} /> Official Email</label>
                     <input
                       type="email"
                       name="email"
                       className="input-elegant"
                       placeholder="e.g. vikram@jayhind.com"
                       value={formData.email}
                       onChange={handleChange}
                     />
                  </div>

                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuPhone size={14} /> Secure Contact</label>
                     <input
                       type="text"
                       name="phone"
                       className="input-elegant"
                       placeholder="e.g. +91 9876543210"
                       value={formData.phone}
                       onChange={handleChange}
                     />
                  </div>

                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuBriefcase size={14} /> Guild Role</label>
                     <select name="role" className="input-elegant" value={formData.role} onChange={handleChange}>
                        <option disabled>Select Role</option>
                        <option>Manager</option>
                        <option>Delivery Staff</option>
                        <option>Cashier</option>
                        <option>Chef</option>
                        <option>Support Staff</option>
                     </select>
                  </div>

                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuIndianRupee size={14} /> Stipend (₹)</label>
                     <input
                       type="number"
                       name="salary"
                       className="input-elegant"
                       placeholder="Enter monthly remuneration"
                       value={formData.salary}
                       onChange={handleChange}
                     />
                  </div>

                  <div className="col-12">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuImage size={14} /> Portrait Assembly</label>
                     <div className="image-drop-vessel py-5 text-center border-dashed rounded-3">
                        <input type="file" id="artisan-upload" hidden onChange={handleImageChange} />
                        <label htmlFor="artisan-upload" className="pointer">
                           {previewImage ? (
                              <div className="preview-mini-vessel">
                                 <img src={previewImage} alt="Selected" className="rounded-circle shadow-sm" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                 <p className="tiny text-accent mt-2 font-weight-600">Portrait Captured</p>
                              </div>
                           ) : (
                              <div className="d-flex flex-column align-items-center gap-2 text-tertiary">
                                 <LuCloudUpload size={40} className="opacity-30 mb-2" />
                                 <span className="small">Transmit professional portrait</span>
                                 <span className="tiny uppercase tracking-widest text-muted mt-1">Square aspect ratio preferred</span>
                              </div>
                           )}
                        </label>
                     </div>
                  </div>

                  {status.message && (
                    <div className={`col-12 alert-elegant ${status.type === 'success' ? 'alert-success-custom' : 'alert-danger-custom'} d-flex align-items-center gap-3`}>
                       {status.type === 'success' ? <LuCircleCheck className="text-success" /> : <LuCircleX className="text-danger" />}
                       <span className="small">{status.message}</span>
                    </div>
                  )}

                  <div className="col-12 pt-4">
                     <button type="submit" className="btn-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                        <LuSave size={18} /> Seal Induction
                     </button>
                  </div>
               </form>
            </div>
         </div>

         {/* ✅ ID Preview */}
         <div className="col-lg-5">
            <div className="preview-container slide-in-bottom">
               <h5 className="tiny uppercase tracking-widest text-tertiary mb-3 d-flex align-items-center gap-2">
                  <LuSparkles size={14} className="text-accent" /> Professional Identification
               </h5>
               
               <div className="guild-id-card shadow-lg overflow-hidden bg-white">
                  <div className="id-header py-4 bg-primary text-white text-center position-relative">
                     <div className="font-display tracking-widest uppercase tiny opacity-50 mb-1">Jayhind Estate</div>
                     <div className="id-title font-weight-700 small">Professional Guild Card</div>
                     <div className="id-accent-line"></div>
                  </div>
                  
                  <div className="id-body p-5 text-center">
                     <div className="id-avatar-vessel mx-auto mb-4">
                        {previewImage ? (
                           <img src={previewImage} alt="ID" className="id-avatar shadow-md" />
                        ) : (
                           <div className="id-avatar-placeholder bg-surface d-flex align-items-center justify-content-center text-tertiary">
                              <LuUser size={48} className="opacity-20" />
                           </div>
                        )}
                        <div className="id-status-dot"></div>
                     </div>
                     
                     <h3 className="font-display mb-1">{formData.name || "Artisan Name"}</h3>
                     <p className="tiny uppercase tracking-widest text-accent mb-4 font-weight-600">{formData.role !== "Select Role" ? formData.role : "Position Awaiting"}</p>
                     
                     <div className="id-info-grid pt-4 border-top">
                        <div className="row g-3">
                           <div className="col-6 text-start">
                              <span className="tiny text-tertiary uppercase d-block mb-1">Guild ID</span>
                              <span className="small mono">#JH-{Math.floor(Math.random() * 9000) + 1000}</span>
                           </div>
                           <div className="col-6 text-end">
                              <span className="tiny text-tertiary uppercase d-block mb-1">Issue Date</span>
                              <span className="small">Apr 2026</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="id-footer py-3 bg-surface border-top text-center">
                     <div className="d-flex align-items-center justify-content-center gap-2 tiny text-tertiary uppercase tracking-widest">
                        <LuHash size={12} /> Established MDCCXXVII
                     </div>
                  </div>
               </div>
               
               <p className="text-secondary small mt-4 text-center italic">"Excellence is not an act, but a habit of the guild."</p>
            </div>
         </div>
      </div>

      <style>{`
        .image-drop-vessel { border: 2px dashed var(--border-subtle); background: var(--bg-surface); transition: var(--transition-smooth); }
        .image-drop-vessel:hover { border-color: var(--accent-primary); background: rgba(192, 98, 42, 0.02); }
        .pointer { cursor: pointer; }
        
        .guild-id-card { border-radius: 20px; border: 1px solid var(--border-subtle); max-width: 350px; margin: 0 auto; }
        .id-accent-line { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 40px; height: 3px; background: var(--accent-primary); }
        
        .id-avatar-vessel { position: relative; width: 120px; height: 120px; }
        .id-avatar, .id-avatar-placeholder { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 4px solid #fff; }
        .id-status-dot { position: absolute; bottom: 8px; right: 8px; width: 18px; height: 18px; background: #22c55e; border: 3px solid #fff; border-radius: 50%; }
        
        .alert-elegant { padding: 15px 20px; border-radius: 8px; border: 1px solid; }
        .alert-success-custom { background: rgba(25, 135, 84, 0.05); border-color: rgba(25, 135, 84, 0.2); color: #155724; }
        .alert-danger-custom { background: rgba(220, 53, 69, 0.05); border-color: rgba(220, 53, 69, 0.2); color: #721c24; }

      `}</style>
    </div>
  );
}

export default AddEmployee;
