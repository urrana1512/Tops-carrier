import React, { useState } from "react";
import axios from "axios";
import { LuPlus, LuSave, LuImage, LuInfo, LuBox, LuSquarePen, LuSparkles, LuChevronRight, LuCloudUpload, LuCircleCheck, LuCircleX } from "react-icons/lu";

function AddCategory() {
  const API_URL = "http://localhost:5000/categories";

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setPreviewImage(imgURL);
      setFormData({ ...formData, image: imgURL });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.image) {
      setStatus({ type: "error", message: "All archives require complete data. Please fill all fields." });
      return;
    }

    const newCategory = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      image: formData.image,
      status: "Active",
    };

    try {
      await axios.post(API_URL, newCategory);
      setStatus({ type: "success", message: "New collection successfully archived in the estate." });
      setFormData({ name: "", description: "", image: "" });
      setPreviewImage(null);
    } catch (error) {
      console.error("Error adding category:", error);
      setStatus({ type: "error", message: "Archive connection failed. Please try again." });
    }
  };

  return (
    <div className="admin-page-content">
      {/* ✅ Header */}
      <header className="admin-page-header mb-5">
        <div className="d-flex align-items-center gap-2 tiny uppercase tracking-widest text-tertiary mb-2">
           <span>Collection</span> <LuChevronRight size={12} /> <span>Architect</span>
        </div>
        <h1 className="font-display">Establish New Collection</h1>
        <p className="text-secondary small">Define a new artistic category for the Jayhind estate.</p>
      </header>

      <div className="row g-5">
         {/* ✅ Blueprint Form */}
         <div className="col-lg-7">
            <div className="card-premium p-5 slide-in-bottom">
               <h4 className="card-title-elegant mb-5 d-flex align-items-center gap-2">
                  <LuSquarePen size={20} className="text-accent" /> Collection Blueprint
               </h4>

               <form onSubmit={handleSubmit} className="row g-4">
                  <div className="col-12">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuBox size={14} /> Designation Name</label>
                     <input
                       type="text"
                       name="name"
                       className="input-elegant"
                       placeholder="e.g. Artisanal Saffron Rounds"
                       value={formData.name}
                       onChange={handleChange}
                     />
                  </div>

                  <div className="col-12">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuInfo size={14} /> Provenance / Description</label>
                     <textarea
                       name="description"
                       className="input-elegant py-3"
                       rows="4"
                       placeholder="Describe the heritage and flavor profile..."
                       value={formData.description}
                       onChange={handleChange}
                     />
                  </div>

                  <div className="col-12">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuImage size={14} /> Portrait Assembly</label>
                     <div className="image-drop-vessel py-5 text-center border-dashed rounded-3">
                        <input type="file" id="portrait-upload" hidden onChange={handleImageChange} />
                        <label htmlFor="portrait-upload" className="pointer">
                           {previewImage ? (
                              <div className="preview-mini-vessel">
                                 <img src={previewImage} alt="Selected" className="rounded shadow-sm" style={{ maxWidth: '200px', maxHeight: '150px', objectFit: 'cover' }} />
                                 <p className="tiny text-accent mt-2 font-weight-600">Composition Selected</p>
                              </div>
                           ) : (
                              <div className="d-flex flex-column align-items-center gap-2 text-tertiary">
                                 <LuCloudUpload size={40} className="opacity-30 mb-2" />
                                 <span className="small">Transmit high-resolution asset</span>
                                 <span className="tiny uppercase tracking-widest text-muted mt-1">PNG, JPG or WEBP preferred</span>
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
                        <LuSave size={18} /> Consign to Archive
                     </button>
                  </div>
               </form>
            </div>
         </div>

         {/* ✅ Composition Preview */}
         <div className="col-lg-5">
            <div className="card-premium p-0 overflow-hidden slide-in-bottom shadow-lg" style={{ position: 'sticky', top: '100px' }}>
               <header className="px-4 py-3 bg-surface border-bottom">
                  <h5 className="tiny uppercase tracking-widest mb-0 d-flex align-items-center gap-2"><LuSparkles size={14} className="text-accent" /> Composition Preview</h5>
               </header>
               <div className="preview-composition-body p-0">
                  <div className="preview-image-box bg-surface" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                     {previewImage ? (
                        <img src={previewImage} alt="Preview" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                     ) : (
                        <div className="text-center opacity-20">
                           <LuImage size={64} />
                           <p className="tiny uppercase tracking-widest mt-2">Awaiting Portrait</p>
                        </div>
                     )}
                     <div className="preview-overlay p-4 d-flex flex-column justify-content-end text-white">
                        <div className="backdrop-blur rounded-pill px-3 py-1 tiny uppercase tracking-widest mb-2" style={{ background: 'rgba(0,0,0,0.3)', width: 'fit-content' }}>Collection Preview</div>
                        <h3 className="font-display mb-2">{formData.name || "Designation Name"}</h3>
                        <p className="small opacity-80 line-clamp-2 mb-0" style={{ maxWidth: '80%' }}>{formData.description || "The story of this collection will be told here..."}</p>
                     </div>
                  </div>
                  <div className="p-4 bg-white">
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span className="tiny text-tertiary uppercase tracking-widest d-block mb-1">Estate Status</span>
                           <span className="badge-pill status-active small">Operational / Active</span>
                        </div>
                        <button className="btn-ghost-accent p-2 rounded-circle"><LuChevronRight /></button>
                     </div>
                  </div>
               </div>
            </div>
            <p className="text-secondary small mt-4 text-center italic">"Quality is the only currency that never depreciates."</p>
         </div>
      </div>

      <style>{`
        .image-drop-vessel { border: 2px dashed var(--border-subtle); background: var(--bg-surface); transition: var(--transition-smooth); }
        .image-drop-vessel:hover { border-color: var(--accent-primary); background: rgba(192, 98, 42, 0.02); }
        .pointer { cursor: pointer; }
        
        .preview-overlay { position: absolute; bottom: 0; left: 0; right: 0; height: 100%; background: linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.7)); }
        
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .backdrop-blur { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
        
        .alert-elegant { padding: 15px 20px; border-radius: 8px; border: 1px solid; }
        .alert-success-custom { background: rgba(25, 135, 84, 0.05); border-color: rgba(25, 135, 84, 0.2); color: #155724; }
        .alert-danger-custom { background: rgba(220, 53, 69, 0.05); border-color: rgba(220, 53, 69, 0.2); color: #721c24; }

      `}</style>
    </div>
  );
}

export default AddCategory;
